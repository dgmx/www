<template>
  <div class="calc-card">
    <div class="tabs">
      <button :class="['tab', { active: tab === 'mac2ipv6' }]" @click="tab = 'mac2ipv6'">MAC → IPv6</button>
      <button :class="['tab', { active: tab === 'ipv62mac' }]" @click="tab = 'ipv62mac'">IPv6 → MAC</button>
    </div>

    <div v-if="tab === 'mac2ipv6'" class="panel">
      <div class="field">
        <label>Dirección MAC</label>
        <input v-model="macInput" type="text" placeholder="D2:4F:23:1A:5B:9C" @keydown.enter="calcMACtoIPv6">
      </div>
      <button @click="calcMACtoIPv6">Calcular IPv6</button>
    </div>

    <div v-if="tab === 'ipv62mac'" class="panel">
      <div class="field">
        <label>Dirección IPv6 link-local</label>
        <input v-model="ipv6Input" type="text" placeholder="fe80::d04f:23ff:fe1a:5b9c" @keydown.enter="calcIPv6toMAC">
      </div>
      <button @click="calcIPv6toMAC">Calcular MAC</button>
    </div>

    <p v-if="error" class="error">{{ error }}</p>

    <div v-if="steps.length" class="steps">
      <div v-for="(s, i) in steps" :key="i" class="step">
        <div class="s-title">{{ s.title }}</div>
        <div class="s-content">{{ s.content }}</div>
        <div v-if="s.detail" class="s-detail">{{ s.detail }}</div>
      </div>
    </div>

    <div v-if="result" class="result-box">
      <div class="r-label">{{ resultLabel }}</div>
      <div class="r-value">{{ result }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tab = ref('mac2ipv6')
const macInput = ref('D2:4F:23:1A:5B:9C')
const ipv6Input = ref('fe80::d04f:23ff:fe1a:5b9c')
const error = ref('')
const steps = ref([])
const result = ref('')
const resultLabel = ref('')

function hex2bin(h) {
  return parseInt(h, 16).toString(2).padStart(8, '0')
}
function bin2hex(b) {
  return parseInt(b, 2).toString(16).toUpperCase()
}
function invertULBit(hexByte) {
  const bin = hex2bin(hexByte)
  const inverted = bin.slice(0, 6) + (bin[6] === '0' ? '1' : '0') + bin.slice(7)
  return bin2hex(inverted)
}
function formatMAC(bytes) {
  return bytes.join(':').toUpperCase()
}
function formatIPv6(bytes) {
  const hextets = []
  for (let i = 0; i < bytes.length; i += 2) {
    const h = ((parseInt(bytes[i], 16) << 8) | parseInt(bytes[i + 1], 16)).toString(16)
    hextets.push(h)
  }
  let s = hextets.join(':')
  s = s.replace(/\b0+\b/g, '0')
  const m = s.match(/(^|:)0(:0)+(:|$)/)
  if (m) s = s.replace(m[0], m[1] + '::')
  return s
}
function parseMAC(str) {
  const clean = str.trim().replace(/[^0-9a-fA-F]/g, '')
  if (clean.length !== 12) return null
  const bytes = []
  for (let i = 0; i < 12; i += 2) bytes.push(clean.substring(i, i + 2).toUpperCase())
  return bytes
}
function parseIPv6(str) {
  let s = str.trim().toLowerCase()
  if (s.includes('::')) {
    const parts = s.split('::')
    const left = parts[0] ? parts[0].split(':').filter(Boolean) : []
    const right = parts[1] ? parts[1].split(':').filter(Boolean) : []
    const missing = 8 - left.length - right.length
    const middle = Array(missing).fill('0')
    s = [...left, ...middle, ...right].join(':')
  }
  const hextets = s.split(':').filter(Boolean)
  if (hextets.length !== 8) return null
  const bytes = []
  for (const h of hextets) {
    if (!/^[0-9a-f]{1,4}$/.test(h)) return null
    const padded = h.padStart(4, '0')
    bytes.push(padded.substring(0, 2).toUpperCase())
    bytes.push(padded.substring(2, 4).toUpperCase())
  }
  return bytes
}

function calcMACtoIPv6() {
  error.value = ''
  steps.value = []
  result.value = ''
  resultLabel.value = ''

  const bytes = parseMAC(macInput.value)
  if (!bytes) {
    error.value = 'MAC inválida. Formatos: XX:XX:XX:XX:XX:XX, XX-XX-XX-XX-XX-XX o XXXXXXXXXXXX'
    return
  }

  const s = []

  s.push({ title: 'Dirección MAC original', content: formatMAC(bytes) })

  const firstHalf = bytes.slice(0, 3)
  const secondHalf = bytes.slice(3, 6)
  s.push({ title: 'Dividir en dos mitades', content: `${formatMAC(firstHalf)} + ${formatMAC(secondHalf)}` })

  const withFFFE = [...firstHalf, 'FF', 'FE', ...secondHalf]
  s.push({ title: 'Insertar FF:FE en el medio (EUI-64)', content: formatMAC(withFFFE) })

  const inverted = [...withFFFE]
  const origFirst = inverted[0]
  const newFirst = invertULBit(origFirst)
  inverted[0] = newFirst
  s.push({
    title: 'Invertir bit U/L del primer byte',
    content: `${origFirst} → ${newFirst}  (${hex2bin(origFirst)} → ${hex2bin(newFirst)})`,
    detail: 'El 7º bit (U/L) se invierte para indicar dirección generada localmente'
  })

  steps.value = s
  resultLabel.value = 'Dirección IPv6 link-local'
  result.value = `fe80::${formatIPv6(inverted)}`
}

function calcIPv6toMAC() {
  error.value = ''
  steps.value = []
  result.value = ''
  resultLabel.value = ''

  const bytes = parseIPv6(ipv6Input.value)
  if (!bytes) {
    error.value = 'IPv6 inválida. Introduce una dirección IPv6 válida.'
    return
  }

  const firstHextet = (parseInt(bytes[0], 16) << 8) | parseInt(bytes[1], 16)
  if ((firstHextet & 0xffc0) !== 0xfe80) {
    error.value = 'La dirección no es link-local (debe empezar por fe80::/10)'
    return
  }

  const s = []
  const eui64 = bytes.slice(8)
  s.push({ title: 'Identificador de interfaz (últimos 64 bits)', content: formatMAC(eui64) })
  s.push({ title: 'Bytes EUI-64', content: formatMAC(eui64) })

  const firstThree = eui64.slice(0, 3)
  const lastThree = eui64.slice(5, 8)
  const withoutFFFE = [...firstThree, ...lastThree]
  s.push({ title: 'Eliminar FF:FE', content: formatMAC(withoutFFFE) })

  const inverted = [...withoutFFFE]
  const origFirst = inverted[0]
  const newFirst = invertULBit(origFirst)
  inverted[0] = newFirst
  s.push({
    title: 'Invertir bit U/L (volver al valor original)',
    content: `${origFirst} → ${newFirst}  (${hex2bin(origFirst)} → ${hex2bin(newFirst)})`
  })

  steps.value = s
  resultLabel.value = 'Dirección MAC'
  result.value = formatMAC(inverted)
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
.tabs { display: flex; gap: .5rem; margin-bottom: 1.2rem; }
.tab { flex: 1; padding: .6rem; text-align: center; font-size: .9rem; font-weight: 600; border: 1px solid var(--vp-c-border); border-radius: 6px; cursor: pointer; background: var(--vp-c-bg); color: var(--vp-c-text-2); transition: all .2s; }
.tab.active { background: var(--vp-c-brand-1); color: #fff; border-color: var(--vp-c-brand-1); }
.tab:hover:not(.active) { background: var(--vp-c-bg-soft); }
.panel { }
.field { margin-bottom: 1rem; }
label { display: block; margin-bottom: .3rem; font-weight: 600; font-size: .9rem; color: var(--vp-c-text-2); }
input { width: 100%; padding: .6rem .8rem; font-size: 1rem; font-family: monospace; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
input:focus { outline: 2px solid var(--vp-c-brand-1); border-color: transparent; }
button:not(.tab) { width: 100%; padding: .7rem; font-size: 1rem; font-weight: 600; color: #fff; background: var(--vp-c-brand-1); border: none; border-radius: 6px; cursor: pointer; margin-top: .2rem; }
button:not(.tab):hover { opacity: .9; }
.error { color: var(--vp-c-danger-1); margin-top: .6rem; font-size: .9rem; }
.steps { margin-top: 1.2rem; }
.step { background: var(--vp-c-bg); border-radius: 8px; padding: .8rem 1rem; margin-bottom: .6rem; border: 1px solid var(--vp-c-border); }
.step .s-title { font-weight: 600; font-size: .85rem; color: var(--vp-c-text-2); margin-bottom: .3rem; }
.step .s-content { font-family: monospace; font-size: 1rem; color: var(--vp-c-text-1); word-break: break-all; }
.step .s-detail { font-size: .8rem; color: var(--vp-c-text-3); margin-top: .2rem; font-family: monospace; }
.result-box { background: #e8f5e9; border-radius: 8px; padding: 1rem; text-align: center; margin-top: 1rem; }
[data-theme="dark"] .result-box { background: #1b3a1b; }
.result-box .r-label { font-size: .8rem; color: var(--vp-c-text-2); font-weight: 600; }
.result-box .r-value { font-family: monospace; font-size: 1.2rem; font-weight: 700; color: #2e7d32; margin-top: .3rem; word-break: break-all; }
[data-theme="dark"] .result-box .r-value { color: #66bb6a; }
</style>
