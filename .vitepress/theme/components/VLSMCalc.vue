<template>
  <div class="calc-card">
    <div class="row">
      <div class="field">
        <label>Dirección IP base</label>
        <input v-model="baseIP" type="text" placeholder="192.168.1.0" @keydown.enter="calc">
      </div>
      <div class="field">
        <label>Máscara CIDR</label>
        <input v-model="baseCIDR" type="text" placeholder="24" @keydown.enter="calc">
      </div>
    </div>

    <div class="sub-header">
      <span class="sub-title">Redes hijas</span>
      <button class="btn-sm btn-add" @click="addSubnet">+ Añadir red</button>
    </div>

    <div class="subnet-list">
      <div v-for="(s, i) in subnets" :key="i" class="subnet-row">
        <input v-model="s.name" class="sname" type="text" placeholder="Nombre">
        <input v-model="s.hosts" class="shosts" type="text" placeholder="Hosts" @keydown.enter="calc">
        <button v-if="subnets.length > 1" class="btn-del" @click="removeSubnet(i)">✕</button>
      </div>
    </div>

    <button @click="calc">Calcular VLSM</button>
    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="results.length" class="results">
      <table>
        <thead>
          <tr>
            <th>Red</th>
            <th>Hosts req.</th>
            <th>CIDR</th>
            <th>Dirección de red</th>
            <th>Broadcast</th>
            <th>Máscara</th>
            <th>Hosts útiles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in results" :key="r.name">
            <td>{{ r.name }}</td>
            <td>{{ r.requested }}</td>
            <td>/{{ r.cidr }}</td>
            <td>{{ r.network }}</td>
            <td>{{ r.broadcast }}</td>
            <td>{{ r.mask }}</td>
            <td>{{ r.usable }}</td>
          </tr>
        </tbody>
      </table>
      <div class="summary">
        <span>Red base: {{ summary.base }}/{{ summary.baseCIDR }}</span>
        <span class="used">Usado: {{ summary.usedAddrs }} / {{ summary.totalAddrs }} ({{ summary.pct }}%)</span>
        <span class="wasted">Libre: {{ summary.wasted }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const baseIP = ref('192.168.1.0')
const baseCIDR = ref('24')
const subnets = reactive([{ name: '', hosts: '' }])
const error = ref('')
const results = ref([])
const summary = ref({})

function addSubnet() {
  subnets.push({ name: '', hosts: '' })
}

function removeSubnet(i) {
  subnets.splice(i, 1)
}

function parseIP(s) {
  const parts = s.trim().split('.')
  if (parts.length !== 4) return null
  const nums = parts.map(Number)
  if (nums.some(n => isNaN(n) || n < 0 || n > 255)) return null
  return nums
}

function toUint32(octets) {
  return ((octets[0] << 24) | (octets[1] << 16) | (octets[2] << 8) | octets[3]) >>> 0
}

function toOctets(n) {
  return [(n >>> 24) & 0xff, (n >>> 16) & 0xff, (n >>> 8) & 0xff, n & 0xff]
}

function fmt(n) {
  return toOctets(n).join('.')
}

function maskFromCIDR(c) {
  if (c === 0) return 0
  return (~0 << (32 - c)) >>> 0
}

function neededCIDR(hosts) {
  const n = parseInt(hosts, 10)
  if (isNaN(n) || n < 0) return null
  if (n <= 1) return 32
  let total = n + 2
  let block = 1
  let cidr = 32
  while (block < total) {
    block *= 2
    cidr--
  }
  return Math.max(0, cidr)
}

function calc() {
  error.value = ''
  results.value = []

  const ipArr = parseIP(baseIP.value)
  if (!ipArr) {
    error.value = 'IP inválida. Formato: x.x.x.x'
    return
  }

  const bCIDR = parseInt(baseCIDR.value, 10)
  if (isNaN(bCIDR) || bCIDR < 0 || bCIDR > 32) {
    error.value = 'CIDR inválido. Debe ser 0-32'
    return
  }

  const valid = subnets.filter(s => s.hosts !== '' && parseInt(s.hosts, 10) > 0)
  if (valid.length === 0) {
    error.value = 'Debe añadir al menos una red con hosts > 0'
    return
  }

  const baseIP32 = toUint32(ipArr)
  const baseMask = maskFromCIDR(bCIDR)
  const baseNetwork = baseIP32 & baseMask
  const baseBroadcast = baseNetwork | (~baseMask >>> 0)

  const parsed = []
  for (let i = 0; i < valid.length; i++) {
    const name = valid[i].name.trim() || `Red ${i + 1}`
    const hosts = parseInt(valid[i].hosts, 10)
    if (isNaN(hosts) || hosts < 0) {
      error.value = `"${name}" tiene un número de hosts inválido`
      return
    }
    const c = neededCIDR(hosts)
    if (c === null || c < bCIDR) {
      error.value = `"${name}" no cabe en /${bCIDR}`
      return
    }
    parsed.push({ name, hosts, cidr: c })
  }

  parsed.sort((a, b) => a.cidr - b.cidr)

  let current = baseNetwork
  const res = []
  for (const p of parsed) {
    const block = 2 ** (32 - p.cidr)
    if (current % block !== 0) {
      current = (Math.floor(current / block) + 1) * block
    }
    const network = current
    const broadcast = current + block - 1

    if (broadcast > baseBroadcast) {
      error.value = `No hay espacio para "${p.name}" (/${p.cidr}, ${block} direcciones)`
      return
    }

    const usable = p.cidr >= 31 ? block : Math.max(0, block - 2)

    res.push({
      name: p.name,
      requested: p.hosts,
      network: fmt(network),
      broadcast: fmt(broadcast),
      mask: fmt(maskFromCIDR(p.cidr)),
      cidr: p.cidr,
      block,
      usable,
    })

    current = broadcast + 1
  }

  const totalAddrs = 2 ** (32 - bCIDR)
  const usedAddrs = res.reduce((s, r) => s + r.block, 0)
  const wasted = totalAddrs - usedAddrs
  const pct = ((usedAddrs / totalAddrs) * 100).toFixed(1)

  results.value = res
  summary.value = {
    base: fmt(baseNetwork),
    baseCIDR: bCIDR,
    totalAddrs,
    usedAddrs,
    wasted,
    pct,
  }
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
.row { display: flex; gap: 1rem; }
.field { flex: 1; margin-bottom: .8rem; }
label { display: block; margin-bottom: .3rem; font-weight: 600; font-size: .9rem; color: var(--vp-c-text-2); }
input { width: 100%; padding: .6rem .8rem; font-size: 1rem; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
input:focus { outline: 2px solid var(--vp-c-brand-1); border-color: transparent; }
.sub-header { display: flex; justify-content: space-between; align-items: center; margin: 1rem 0 .5rem; }
.sub-title { font-weight: 700; font-size: 1rem; color: var(--vp-c-text-1); }
.btn-sm { background: var(--vp-c-brand-1); color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: .85rem; padding: .4rem .8rem; font-weight: 600; }
.btn-sm:hover { opacity: .9; }
.btn-add { }
.subnet-list { margin-bottom: .8rem; }
.subnet-row { display: flex; gap: .5rem; align-items: center; margin-bottom: .4rem; }
.subnet-row input { flex: 1; font-size: .9rem; padding: .45rem .6rem; }
.subnet-row .sname { flex: 0 0 150px; }
.subnet-row .shosts { flex: 0 0 100px; }
.btn-del { background: var(--vp-c-danger-1); color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 1rem; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0; }
.btn-del:hover { opacity: .8; }
button[type="button"]:not(.btn-sm):not(.btn-del) { width: 100%; padding: .7rem; font-size: 1rem; font-weight: 600; color: #fff; background: var(--vp-c-brand-1); border: none; border-radius: 6px; cursor: pointer; }
button[type="button"]:not(.btn-sm):not(.btn-del):hover { opacity: .9; }
.error { color: var(--vp-c-danger-1); margin-top: .8rem; font-size: .9rem; }
.results { margin-top: 1.2rem; overflow-x: auto; }
table { width: 100%; border-collapse: collapse; font-size: .85rem; }
th, td { padding: .5rem .6rem; text-align: left; border-bottom: 1px solid var(--vp-c-border); color: var(--vp-c-text-1); white-space: nowrap; }
th { font-weight: 600; color: var(--vp-c-text-2); font-size: .8rem; text-transform: uppercase; letter-spacing: .03em; }
td { font-family: monospace; }
tr:last-child td { border-bottom: none; }
.summary { margin-top: 1rem; padding: .6rem; background: var(--vp-c-bg); border-radius: 6px; font-size: .85rem; color: var(--vp-c-text-1); display: flex; justify-content: space-between; flex-wrap: wrap; gap: .5rem; }
.summary .used { color: #22c55e; font-weight: 600; }
.summary .wasted { color: var(--vp-c-danger-1); font-weight: 600; }
</style>
