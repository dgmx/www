<template>
  <div class="calc-card">
    <div class="field">
      <label>Dirección IPv6</label>
      <input v-model="inputAddr" type="text" class="ipv6-input" placeholder="2001:db8::ff:1" spellcheck="false">
    </div>

    <div class="tabs">
      <button v-for="tab in tabs" :key="tab.key" :class="['tab', { active: activeTab === tab.key }]" @click="activeTab = tab.key">{{ tab.label }}</button>
    </div>

    <!-- ── Tab: Visual ── -->
    <div v-if="activeTab === 'visual' && parsed" class="tab-content">
      <div class="hextet-grid">
        <div v-for="(h, i) in parsed.hextets" :key="i" :class="['hextet-box', { highlight: h.group }]">
          <div class="h-label">{{ h.hex }}</div>
          <div class="h-bin">{{ h.bin }}</div>
          <div class="h-dec">{{ h.dec }}</div>
          <div class="h-idx">{{ i + 1 }}</div>
        </div>
      </div>
      <div class="addr-bar">
        <span class="bar-full">{{ parsed.compressed }}</span>
      </div>
      <div class="addr-bar">
        <span class="bar-label">Comprimida:</span>
        <span class="bar-val">{{ parsed.compressed }}</span>
      </div>
      <div class="addr-bar">
        <span class="bar-label">Expandida:</span>
        <span class="bar-val">{{ parsed.full }}</span>
      </div>
      <div class="addr-bar">
        <span class="bar-label">Binario:</span>
        <span class="bar-val bin">{{ parsed.binary }}</span>
      </div>
    </div>

    <!-- ── Tab: Tipo ── -->
    <div v-if="activeTab === 'tipo' && parsed" class="tab-content">
      <div class="info-card">
        <div class="info-label">Tipo detectado</div>
        <div class="info-value type-badge">{{ addrType.name }}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Descripción</div>
        <div class="info-value">{{ addrType.desc }}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Prefijo</div>
        <div class="info-value mono">{{ addrType.prefix }}</div>
      </div>
      <div v-if="addrType.scope" class="info-card">
        <div class="info-label">Ámbito (scope)</div>
        <div class="info-value">{{ addrType.scope }}</div>
      </div>
      <div class="info-card">
        <div class="info-label">Estructura</div>
        <div class="info-value mono">{{ addrType.structure }}</div>
      </div>
    </div>

    <!-- ── Tab: Reglas ── -->
    <div v-if="activeTab === 'reglas'" class="tab-content">
      <div v-for="(rule, i) in notationRules" :key="i" class="rule-card">
        <div class="rule-title">{{ rule.title }}</div>
        <div class="rule-desc">{{ rule.desc }}</div>
        <div v-if="rule.example" class="rule-example">
          <span class="rule-eg-label">Ejemplo:</span>
          <span class="mono">{{ rule.example }}</span>
        </div>
      </div>
    </div>

    <!-- ── Tab: Especiales ── -->
    <div v-if="activeTab === 'especiales'" class="tab-content">
      <table class="special-table">
        <thead>
          <tr><th>Dirección</th><th>Significado</th></tr>
        </thead>
        <tbody>
          <tr v-for="sp in specials" :key="sp.addr">
            <td class="mono">{{ sp.addr }}</td>
            <td>{{ sp.desc }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-if="!parsed && inputAddr" class="error-msg">Dirección IPv6 no válida</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const inputAddr = ref('2001:db8:a0b:12f0::1')
const activeTab = ref('visual')

const tabs = [
  { key: 'visual', label: 'Visual' },
  { key: 'tipo', label: 'Tipo' },
  { key: 'reglas', label: 'Reglas de notación' },
  { key: 'especiales', label: 'Direcciones especiales' },
]

const specials = [
  { addr: '::/128', desc: 'Dirección no especificada (equivalente a 0.0.0.0 en IPv4)' },
  { addr: '::1/128', desc: 'Loopback (equivalente a 127.0.0.1 en IPv4)' },
  { addr: '::ffff:0:0/96', desc: 'IPv4-mapeada en IPv6 (para compatibilidad dual-stack)' },
  { addr: '::ffff:0:0:0/96', desc: 'IPv4-compatible (obsoleto)' },
  { addr: '64:ff9b::/96', desc: 'Traducción IPv4-IPv6 (NAT64 / Well-Known Prefix)' },
  { addr: '100::/64', desc: 'Discard-Only (RFC 6666)' },
  { addr: '2001::/32', desc: 'Teredo (túnel IPv6 sobre UDP)' },
  { addr: '2001:10::/28', desc: 'ORCHID (Overlay Routable Cryptographic Hash Identifiers)' },
  { addr: '2001:db8::/32', desc: 'Documentación (ejemplos y manuales)' },
  { addr: '2002::/16', desc: '6to4 (túnel IPv6 sobre IPv4)' },
  { addr: 'fc00::/7', desc: 'Únicas locales (Unique Local Addresses - ULA)' },
  { addr: 'fe80::/10', desc: 'Link-local (solo enlace local, no enrutable)' },
  { addr: 'ff00::/8', desc: 'Multicast' },
  { addr: 'ff02::1', desc: 'Multicast: todos los nodos (all-nodes)' },
  { addr: 'ff02::2', desc: 'Multicast: todos los routers (all-routers)' },
  { addr: 'ff02::1:ff00:0/104', desc: 'Solicited-Node Multicast (para NDP)' },
]

const notationRules = [
  {
    title: '1. Omitir ceros a la izquierda',
    desc: 'Los ceros iniciales de cada hexteto (bloque de 4 dígitos hexadecimales) se pueden omitir.',
    example: '2001:0db8:0000:0000:0000:ff00:0042:8329 → 2001:db8:0:0:0:ff00:42:8329',
  },
  {
    title: '2. Compresión de bloques de ceros (::)',
    desc: 'Una o más grupos consecutivos de 0 se pueden reemplazar por ::. Solo se puede usar una vez en la dirección.',
    example: '2001:db8:0:0:0:0:0:1 → 2001:db8::1',
  },
  {
    title: '3. La :: solo se puede usar una vez',
    desc: 'Si hubiera dos grupos separados de ceros, la compresión se aplica solo al más largo. Si empatan, al primero.',
    example: '2001:0:0:ff:0:0:0:1 → 2001:0:0:ff::1 (no 2001::ff:0:0:0:1)',
  },
  {
    title: '4. Prefijo de red (CIDR)',
    desc: 'Se usa la misma notación CIDR que en IPv4: /N indica cuántos bits son de red.',
    example: '2001:db8::/32 → los primeros 32 bits son el prefijo de red',
  },
  {
    title: '5. Direcciones embedidas IPv4',
    desc: 'Las direcciones IPv4-mapeadas en IPv6 pueden escribirse con la IPv4 en decimal al final.',
    example: '::ffff:192.168.1.1 (equivale a ::ffff:c0a8:101)',
  },
]

const parsed = computed(() => {
  const s = inputAddr.value.trim()
  if (!s) return null
  try {
    return parseIPv6(s)
  } catch {
    return null
  }
})

const addrType = computed(() => classify(parsed.value))

function parseIPv6(str) {
  let s = str.trim().toLowerCase()
  // Handle IPv4-mapped
  let ipv4Suffix = ''
  const ipv4Match = s.match(/:(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})$/)
  if (ipv4Match) {
    const parts = ipv4Match[1].split('.').map(Number)
    if (parts.some(n => isNaN(n) || n < 0 || n > 255)) throw new Error()
    ipv4Suffix = ':' + parts.map(n => n.toString(16).padStart(2, '0')).join('')
  }

  let full = s
  if (ipv4Match) {
    full = s.slice(0, ipv4Match.index) + ipv4Suffix
  }

  // Handle ::
  if (full.includes('::')) {
    const parts = full.split('::')
    const left = parts[0] ? parts[0].split(':').filter(Boolean) : []
    const right = parts[1] ? parts[1].split(':').filter(Boolean) : []
    const missing = 8 - left.length - right.length
    if (missing < 1) throw new Error()
    const middle = Array(missing).fill('0')
    full = [...left, ...middle, ...right].join(':')
  }

  const hextets = full.split(':').filter(Boolean)
  if (hextets.length !== 8) throw new Error()

  const hextetData = hextets.map((h, i) => {
    const hex = h.padStart(4, '0')
    if (!/^[0-9a-f]{4}$/.test(hex)) throw new Error()
    const dec = parseInt(hex, 16)
    const bin = dec.toString(2).padStart(16, '0')
    return { hex, dec, bin, group: Math.floor(i / 2) }
  })

  // Build compressed form
  const compressed = compressHextets(hextets.map(h => h.replace(/^0+/, '') || '0'))

  // Build full form
  const fullForm = hextets.map(h => h.padStart(4, '0')).join(':')

  // Build binary
  const binary = hextets.map(h => parseInt(h.padStart(4, '0'), 16).toString(2).padStart(16, '0')).join(' ')

  return {
    hextets: hextetData,
    compressed,
    full: fullForm,
    binary,
    bytes: hextets.map(h => h.padStart(4, '0')).join(''),
  }
}

function compressHextets(hextets) {
  // Find longest zero run
  let bestStart = -1, bestLen = 1
  let curStart = -1, curLen = 0
  for (let i = 0; i < hextets.length; i++) {
    if (hextets[i] === '0') {
      if (curStart === -1) curStart = i
      curLen++
    } else {
      if (curLen > bestLen) { bestStart = curStart; bestLen = curLen }
      curStart = -1; curLen = 0
    }
  }
  if (curLen > bestLen) { bestStart = curStart; bestLen = curLen }

  if (bestLen < 2) return hextets.join(':')

  const parts = []
  for (let i = 0; i < hextets.length; i++) {
    if (i === bestStart) {
      parts.push('')
      i += bestLen - 1
    } else {
      parts.push(hextets[i])
    }
  }
  return parts.join(':').replace(/:+/g, '::')
}

function classify(addr) {
  if (!addr) return { name: '-', desc: '', prefix: '', scope: '', structure: '' }

  const first = parseInt(addr.hextets[0].hex, 16)
  const firstBits = first >>> 0
  const flag = (firstBits & 0xf000) >>> 12

  if (addr.compressed === '::') return {
    name: 'No especificada',
    desc: 'Equivale a 0.0.0.0 en IPv4. Se usa cuando un dispositivo no tiene dirección asignada.',
    prefix: '::/128',
    scope: 'Local',
    structure: 'Todo ceros',
  }
  if (addr.compressed === '::1') return {
    name: 'Loopback',
    desc: 'Equivale a 127.0.0.1 en IPv4. Se usa para pruebas locales.',
    prefix: '::1/128',
    scope: 'Local',
    structure: '127 ceros + 1',
  }
  // IPv4-mapped
  if ((firstBits & 0xffff) === 0xffff && addr.hextets[0].hex === '0000' && addr.hextets[1].hex === '0000' && addr.hextets[2].hex === '0000' && addr.hextets[3].hex === '0000' && addr.hextets[4].hex === '0000' && addr.hextets[5].hex === 'ffff') return {
    name: 'IPv4-mapeada en IPv6',
    desc: 'Dirección IPv6 que representa una dirección IPv4. Usada en sockets dual-stack.',
    prefix: '::ffff:0:0/96',
    scope: 'Global',
    structure: '80 ceros + ffff + IPv4',
  }
  // Link-local
  if ((firstBits & 0xffc0) === 0xfe80) return {
    name: 'Link-local',
    desc: 'Dirección de enlace local. Solo es válida en el mismo segmento de red. No se enruta. Se genera automáticamente (SLAAC) o se asigna manualmente.',
    prefix: 'fe80::/10',
    scope: 'Enlace local (no enrutable)',
    structure: `fe80:: /10 + 54 bits de subred + EUI-64 o identificador de 64 bits`,
  }
  // Unique Local
  if ((firstBits & 0xfe00) === 0xfc00) return {
    name: 'Única local (ULA)',
    desc: 'Equivalente a las IPv4 privadas (10.0.0.0/8, 192.168.0.0/16). No enrutables en Internet global.',
    prefix: 'fc00::/7',
    scope: 'Local / Privada',
    structure: `fcXX:: /7 + 41 bits ID global + 16 bits subred + 64 bits ID de interfaz`,
  }
  // Multicast
  if ((firstBits & 0xff00) === 0xff00) return {
    name: 'Multicast',
    desc: 'Dirección multicast. El tráfico se envía a todos los miembros del grupo. Los flags y el scope determinan su comportamiento.',
    prefix: 'ff00::/8',
    scope: scopeName(first & 0x000f),
    structure: `ff + flags(4b) + scope(4b) + ID de grupo (112 bits)`,
  }
  // Global Unicast (2000::/3)
  if ((firstBits & 0xe000) === 0x2000) return {
    name: 'Global unicast (GUA)',
    desc: 'Dirección globalmente enrutable en Internet IPv6. Asignada por los ISP o registros regionales (RIR).',
    prefix: '2000::/3',
    scope: 'Global (Internet)',
    structure: `2000::/3 + 45 bits de prefijo de red + 16 bits ID de subred + 64 bits ID de interfaz`,
  }
  // Documentation
  if ((firstBits & 0xffc0) === 0x2001 && parseInt(addr.hextets[1].hex, 16) === 0x0db8) return {
    name: 'Documentación',
    desc: 'Prefijo reservado para ejemplos y documentación (RFC 3849). No debe usarse en producción.',
    prefix: '2001:db8::/32',
    scope: 'Documentación',
    structure: `2001:db8::/32 + 96 bits de ejemplo`,
  }

  return {
    name: 'Global unicast (otro)',
    desc: 'Dirección global unicast no clasificada en las categorías anteriores.',
    prefix: `${addr.compressed}/${first > 0 ? '64' : '128'}`,
    scope: 'Global',
    structure: `Prefijo de red (variable) + ID de interfaz (64 bits normalmente)`,
  }
}

function scopeName(s) {
  const names = { 1: 'Interfaz (node-local)', 2: 'Enlace (link-local)', 4: 'Administrativo (admin-local)', 5: 'Sitio (site-local)', 8: 'Organización (organization-local)', 14: 'Global' }
  return names[s] || `Scope ${s}`
}
</script>

<style scoped>
.calc-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
}
.field { margin-bottom: 1rem; }
label { display: block; margin-bottom: .3rem; font-weight: 600; font-size: .9rem; color: var(--vp-c-text-2); }
.ipv6-input { width: 100%; padding: .7rem .8rem; font-size: 1.1rem; font-family: monospace; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.ipv6-input:focus { outline: 2px solid var(--vp-c-brand-1); border-color: transparent; }
.tabs { display: flex; gap: .4rem; margin-bottom: 1rem; flex-wrap: wrap; }
.tab { padding: .45rem .9rem; font-size: .85rem; font-weight: 600; border: 1px solid var(--vp-c-border); border-radius: 6px; cursor: pointer; background: var(--vp-c-bg); color: var(--vp-c-text-2); transition: all .15s; }
.tab.active { background: var(--vp-c-brand-1); color: #fff; border-color: var(--vp-c-brand-1); }
.tab:hover:not(.active) { background: var(--vp-c-bg-soft); }
.tab-content { }
.hextet-grid { display: grid; grid-template-columns: repeat(8, 1fr); gap: 4px; margin-bottom: 1rem; }
.hextet-box { background: var(--vp-c-bg); border: 1px solid var(--vp-c-border); border-radius: 6px; padding: .4rem; text-align: center; transition: background .15s; }
.hextet-box.highlight:nth-child(odd) { background: #f0f4ff; }
[data-theme="dark"] .hextet-box.highlight:nth-child(odd) { background: #1a2233; }
.h-label { font-family: monospace; font-size: .95rem; font-weight: 700; color: var(--vp-c-brand-1); word-break: break-all; }
.h-bin { font-family: monospace; font-size: .55rem; color: var(--vp-c-text-3); word-break: break-all; line-height: 1.3; margin-top: 2px; }
.h-dec { font-family: monospace; font-size: .65rem; color: var(--vp-c-text-2); margin-top: 2px; }
.h-idx { font-size: .6rem; color: var(--vp-c-text-4); margin-top: 2px; }
.addr-bar { display: flex; gap: .4rem; align-items: baseline; padding: .3rem 0; font-size: .83rem; }
.addr-bar .bar-label { color: var(--vp-c-text-3); white-space: nowrap; }
.addr-bar .bar-val { font-family: monospace; color: var(--vp-c-text-1); word-break: break-all; }
.addr-bar .bar-val.bin { font-size: .7rem; line-height: 1.5; }
.addr-bar .bar-full { font-family: monospace; font-size: 1.1rem; font-weight: 700; color: var(--vp-c-brand-1); word-break: break-all; }
.info-card { background: var(--vp-c-bg); border: 1px solid var(--vp-c-border); border-radius: 8px; padding: .8rem 1rem; margin-bottom: .6rem; }
.info-label { font-size: .8rem; font-weight: 600; color: var(--vp-c-text-3); text-transform: uppercase; letter-spacing: .03em; margin-bottom: .2rem; }
.info-value { font-size: .95rem; color: var(--vp-c-text-1); line-height: 1.5; }
.info-value.mono, .mono { font-family: monospace; }
.type-badge { display: inline-block; padding: .3rem .8rem; border-radius: 20px; font-weight: 700; font-size: 1rem; background: var(--vp-c-brand-1); color: #fff; margin-top: .2rem; }
.rule-card { background: var(--vp-c-bg); border: 1px solid var(--vp-c-border); border-radius: 8px; padding: .8rem 1rem; margin-bottom: .6rem; }
.rule-title { font-weight: 700; font-size: .95rem; color: var(--vp-c-text-1); margin-bottom: .3rem; }
.rule-desc { font-size: .9rem; color: var(--vp-c-text-1); line-height: 1.5; margin-bottom: .4rem; }
.rule-example { font-family: monospace; font-size: .85rem; background: var(--vp-c-bg-soft); padding: .4rem .6rem; border-radius: 4px; color: var(--vp-c-text-2); }
.rule-eg-label { color: var(--vp-c-text-3); margin-right: .3rem; }
.special-table { width: 100%; border-collapse: collapse; font-size: .85rem; }
.special-table th, .special-table td { padding: .5rem .6rem; text-align: left; border-bottom: 1px solid var(--vp-c-border); color: var(--vp-c-text-1); }
.special-table th { font-weight: 600; color: var(--vp-c-text-2); font-size: .8rem; text-transform: uppercase; letter-spacing: .03em; }
.special-table td { font-family: system-ui, sans-serif; }
.special-table td:first-child { font-family: monospace; font-weight: 600; color: var(--vp-c-brand-1); white-space: nowrap; }
.error-msg { color: var(--vp-c-danger-1); font-size: .9rem; margin-top: .5rem; }
</style>
