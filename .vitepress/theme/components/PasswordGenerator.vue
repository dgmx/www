<template>
  <div class="pwgen">
    <div class="pwgen-display">
      <div class="pwgen-field" :class="{ generated: password }">{{ password || 'Pulsa "Generar"' }}</div>
      <button class="pwgen-copy" @click="copy" :class="{ copied }" title="Copiar">
        <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
      </button>
    </div>

    <div class="pwgen-stats">
      <div class="pwgen-stat"><b>{{ entropy }}</b><span>bits</span></div>
      <div class="pwgen-stat"><b :style="{ color: strengthColor }">{{ strengthLabel }}</b><span>fuerza</span></div>
      <div class="pwgen-stat"><b>{{ combosText }}</b><span>combinaciones</span></div>
      <div class="pwgen-stat"><b>{{ bruteForce }}</b><span>fuerza bruta</span></div>
    </div>

    <div class="pwgen-bar-wrap"><div class="pwgen-bar" :style="{ width: barWidth, background: strengthColor }"></div></div>

    <div class="pwgen-controls">
      <div class="pwgen-group">
        <div class="pwgen-group-header">
          <span>Longitud</span><span class="pwgen-len-val">{{ length }}</span>
        </div>
        <input type="range" v-model.number="length" min="4" max="64" class="pwgen-slider">
      </div>

      <div class="pwgen-group">
        <span class="pwgen-group-title">Tipos de caracteres</span>
        <div class="pwgen-checks">
          <label v-for="c in charTypes" :key="c.key" class="pwgen-check" :class="{ active: c.checked }">
            <input type="checkbox" v-model="c.checked">
            <span class="pwgen-check-text"><b>{{ c.preview }}</b> {{ c.label }}</span>
          </label>
        </div>
      </div>

      <div class="pwgen-group">
        <span class="pwgen-group-title">Más opciones</span>
        <label class="pwgen-toggle"><input type="checkbox" v-model="excludeAmbiguous"><span class="pwgen-switch"></span><span>Excluir ambiguos (l I 1 O 0)</span></label>
        <label class="pwgen-toggle"><input type="checkbox" v-model="noConsecutive"><span class="pwgen-switch"></span><span>Sin dos iguales seguidos</span></label>
      </div>
    </div>

    <button class="pwgen-btn" @click="generate">Generar nueva contraseña</button>
    <p class="pwgen-info">0 peticiones de red. Todo se ejecuta en tu navegador con <code>crypto.getRandomValues()</code>.</p>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const CHARS = {
  lower: 'abcdefghijklmnopqrstuvwxyz',
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  nums: '0123456789',
  syms: '!@#$%^&*()_+-=[]{}|;:,.<>?'
}
const AMBIGUOUS = 'lI1O0'

const length = ref(16)
const password = ref('')
const copied = ref(false)
const excludeAmbiguous = ref(false)
const noConsecutive = ref(false)

const charTypes = reactive([
  { key: 'lower', label: 'Minúsculas', preview: 'a–z', checked: true },
  { key: 'upper', label: 'Mayúsculas', preview: 'A–Z', checked: true },
  { key: 'nums', label: 'Números', preview: '0–9', checked: true },
  { key: 'syms', label: 'Símbolos', preview: '!@#$', checked: true }
])

function getAlphabet() {
  let alpha = ''
  for (const c of charTypes) if (c.checked) alpha += CHARS[c.key]
  if (excludeAmbiguous.value) alpha = alpha.split('').filter(ch => !AMBIGUOUS.includes(ch)).join('')
  return alpha
}

const alphabetSize = computed(() => getAlphabet().length)

const entropy = computed(() => {
  if (alphabetSize.value === 0) return 0
  return Math.round(length.value * Math.log2(alphabetSize.value))
})

const strengthLabel = computed(() => {
  const e = entropy.value
  if (e < 40) return 'Débil'
  if (e < 60) return 'Media'
  if (e < 80) return 'Fuerte'
  return 'Muy fuerte'
})

const strengthColor = computed(() => {
  const e = entropy.value
  if (e < 40) return '#ef4444'
  if (e < 60) return '#eab308'
  if (e < 80) return '#22c55e'
  return '#06b6d4'
})

const barWidth = computed(() => Math.min(100, entropy.value) + '%')

const combosText = computed(() => {
  const n = Math.pow(alphabetSize.value, length.value)
  if (n < 1e6) return n.toLocaleString('es-ES')
  if (n < 1e9) return (n / 1e6).toFixed(1) + ' M'
  if (n < 1e12) return (n / 1e9).toFixed(1) + ' mil M'
  return '10^' + Math.floor(Math.log10(n))
})

const bruteForce = computed(() => {
  const secs = Math.pow(alphabetSize.value, length.value) / 1e12
  if (secs < 1) return '< 1 s'
  if (secs < 60) return Math.round(secs) + ' s'
  if (secs < 3600) return Math.round(secs / 60) + ' min'
  if (secs < 86400) return Math.round(secs / 3600) + ' h'
  if (secs < 31536000) return Math.round(secs / 86400) + ' días'
  const y = secs / 31536000
  if (y < 1e3) return Math.round(y) + ' años'
  if (y < 1e6) return Math.round(y / 1e3) + ' mil años'
  return '10^' + Math.floor(Math.log10(y)) + ' años'
})

function generate() {
  const alpha = getAlphabet()
  if (!alpha) { password.value = 'Selecciona un tipo'; return }
  let pw = ''
  const arr = new Uint32Array(length.value)
  crypto.getRandomValues(arr)
  for (let i = 0; i < length.value; i++) {
    let ch = alpha[arr[i] % alpha.length]
    if (noConsecutive.value && i > 0 && ch === pw[i - 1]) { i--; continue }
    pw += ch
  }
  password.value = pw
}

async function copy() {
  if (!password.value) return
  try { await navigator.clipboard.writeText(password.value) } catch {
    const t = document.createElement('textarea'); t.value = password.value
    document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t)
  }
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

generate()
</script>

<style scoped>
.pwgen { max-width: 640px; margin: 0 auto; }
.pwgen-display { position: relative; margin-bottom: 12px; }
.pwgen-field {
  background: var(--vp-c-bg-soft); border: 2px solid var(--vp-c-divider);
  border-radius: 10px; padding: 18px 50px 18px 18px;
  font-family: 'SF Mono', 'Fira Code', monospace; font-size: 1.15rem;
  word-break: break-all; line-height: 1.5; min-height: 60px;
  display: flex; align-items: center; color: var(--vp-c-text-3);
  user-select: all; transition: color .2s;
}
.pwgen-field.generated { color: var(--vp-c-text-1); }
.pwgen-copy {
  position: absolute; right: 10px; top: 50%; transform: translateY(-50%);
  background: var(--vp-c-bg-soft); border: none; border-radius: 8px;
  width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
  cursor: pointer; color: var(--vp-c-text-2); transition: all .2s;
}
.pwgen-copy:hover { background: #3b82f6; color: #fff; }
.pwgen-copy.copied { background: #22c55e; color: #fff; }

.pwgen-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-bottom: 10px; }
.pwgen-stat {
  text-align: center; padding: 10px 6px; background: var(--vp-c-bg-soft);
  border-radius: 8px; border: 1px solid var(--vp-c-divider);
}
.pwgen-stat b { display: block; font-size: 1rem; }
.pwgen-stat span { font-size: .72rem; color: var(--vp-c-text-3); text-transform: uppercase; letter-spacing: .5px; }

.pwgen-bar-wrap { height: 5px; background: var(--vp-c-bg-soft); border-radius: 3px; margin-bottom: 24px; overflow: hidden; }
.pwgen-bar { height: 100%; border-radius: 3px; transition: width .3s, background .3s; }

.pwgen-controls { display: flex; flex-direction: column; gap: 20px; margin-bottom: 24px; }
.pwgen-group-title { display: block; font-weight: 600; margin-bottom: 8px; }
.pwgen-group-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; font-weight: 600; }
.pwgen-len-val { font-size: 1.4rem; font-weight: 700; color: #3b82f6; }

.pwgen-slider {
  -webkit-appearance: none; width: 100%; height: 6px; border-radius: 3px;
  background: var(--vp-c-bg-soft); outline: none;
}
.pwgen-slider::-webkit-slider-thumb {
  -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%;
  background: #3b82f6; cursor: pointer; border: 3px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px #3b82f6;
}
.pwgen-slider::-moz-range-thumb {
  width: 22px; height: 22px; border-radius: 50%;
  background: #3b82f6; cursor: pointer; border: 3px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px #3b82f6;
}

.pwgen-checks { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.pwgen-check {
  display: flex; align-items: center; gap: 8px; padding: 10px 12px;
  background: var(--vp-c-bg-soft); border: 2px solid var(--vp-c-divider);
  border-radius: 8px; cursor: pointer; transition: all .2s;
}
.pwgen-check:hover { border-color: #3b82f6; }
.pwgen-check.active { border-color: #3b82f6; background: rgba(59,130,246,.08); }
.pwgen-check input { width: 16px; height: 16px; accent-color: #3b82f6; }
.pwgen-check-text b { font-family: monospace; margin-right: 4px; }

.pwgen-toggle {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  background: var(--vp-c-bg-soft); border: 2px solid var(--vp-c-divider);
  border-radius: 8px; cursor: pointer; margin-bottom: 6px; transition: all .2s;
}
.pwgen-toggle:hover { border-color: #3b82f6; }
.pwgen-toggle:has(input:checked) { border-color: #3b82f6; background: rgba(59,130,246,.08); }
.pwgen-toggle input { display: none; }
.pwgen-switch {
  width: 40px; height: 22px; background: var(--vp-c-bg-soft); border-radius: 11px;
  position: relative; flex-shrink: 0; transition: background .3s;
}
.pwgen-switch::after {
  content: ''; position: absolute; width: 16px; height: 16px; background: #fff;
  border-radius: 50%; top: 3px; left: 3px; transition: transform .3s;
}
.pwgen-toggle input:checked + .pwgen-switch { background: #3b82f6; }
.pwgen-toggle input:checked + .pwgen-switch::after { transform: translateX(18px); }

.pwgen-btn {
  width: 100%; padding: 14px; font-size: 1rem; font-weight: 600; color: #fff;
  background: linear-gradient(135deg, #3b82f6, #7c3aed); border: none;
  border-radius: 10px; cursor: pointer; transition: all .2s; margin-bottom: 12px;
}
.pwgen-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(59,130,246,.3); }
.pwgen-btn:active { transform: translateY(0); }
.pwgen-info { font-size: .82rem; color: var(--vp-c-text-3); }
.pwgen-info code { background: var(--vp-c-bg-soft); padding: 1px 5px; border-radius: 3px; font-size: .78rem; }

@media (max-width: 520px) {
  .pwgen-stats { grid-template-columns: repeat(2,1fr); }
  .pwgen-checks { grid-template-columns: 1fr; }
}
</style>
