<template>
  <div class="calc-card">
    <div class="row">
      <div class="field">
        <label for="ip">Dirección IP</label>
        <input id="ip" v-model="ip" type="text" placeholder="192.168.1.0" @keydown.enter="calc">
      </div>
      <div class="field">
        <label for="cidr">CIDR</label>
        <input id="cidr" v-model="cidr" type="text" placeholder="24" @keydown.enter="calc">
      </div>
    </div>
    <button @click="calc">Calcular</button>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="result.length" class="results">
      <div v-for="r in result" :key="r.label" class="result-row">
        <span class="label">{{ r.label }}</span>
        <span class="value">{{ r.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ip = ref('192.168.1.0')
const cidr = ref('24')
const result = ref([])
const error = ref('')

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

function calc() {
  error.value = ''
  result.value = []

  const ipArr = parseIP(ip.value)
  if (!ipArr) {
    error.value = 'IP inválida. Formato: x.x.x.x'
    return
  }

  const c = parseInt(cidr.value, 10)
  if (isNaN(c) || c < 0 || c > 32) {
    error.value = 'CIDR inválido. Debe ser 0-32'
    return
  }

  const ip32 = toUint32(ipArr)
  const mask = c === 0 ? 0 : (~0 << (32 - c)) >>> 0
  const network = ip32 & mask
  const broadcast = network | (~mask >>> 0)
  const first = c >= 31 ? network : network + 1
  const last = c >= 31 ? broadcast : broadcast - 1

  result.value = [
    { label: 'Máscara de red', value: fmt(mask) },
    { label: 'Dirección de red', value: fmt(network) },
    { label: 'Dirección de broadcast', value: fmt(broadcast) },
    { label: 'Primer equipo', value: fmt(first) },
    { label: 'Último equipo', value: fmt(last) },
  ]
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
.field { flex: 1; margin-bottom: 1rem; }
label { display: block; margin-bottom: .3rem; font-weight: 600; font-size: .9rem; color: var(--vp-c-text-2); }
input { width: 100%; padding: .6rem .8rem; font-size: 1rem; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); font-family: monospace; }
input:focus { outline: 2px solid var(--vp-c-brand-1); border-color: transparent; }
button { width: 100%; padding: .7rem; font-size: 1rem; font-weight: 600; color: #fff; background: var(--vp-c-brand-1); border: none; border-radius: 6px; cursor: pointer; }
button:hover { opacity: .9; }
.error { color: var(--vp-c-danger-1); margin-top: .8rem; font-size: .9rem; }
.results { margin-top: 1.2rem; }
.result-row { display: flex; justify-content: space-between; padding: .5rem 0; border-bottom: 1px solid var(--vp-c-border); font-size: .95rem; }
.result-row:last-child { border-bottom: none; }
.result-row .label { color: var(--vp-c-text-2); }
.result-row .value { font-family: monospace; font-weight: 600; color: var(--vp-c-text-1); }
</style>
