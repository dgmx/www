<template>
  <div class="baseconv">
    <!-- Aviso de error -->
    <div v-if="error" class="baseconv-error">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      {{ error }}
    </div>

    <!-- Grid de 4 inputs -->
    <div class="baseconv-grid">
      <div
        v-for="f in fields"
        :key="f.base"
        class="baseconv-field"
        :class="{ active: activeBase === f.base, invalid: !!fieldErrors[f.base] }"
      >
        <div class="baseconv-field-header">
          <span class="baseconv-label">
            <span class="baseconv-dot" :style="{ background: f.color }"></span>
            {{ f.label }}
            <code class="baseconv-base-tag">base {{ f.base }}</code>
          </span>
          <span class="baseconv-prefix">{{ f.prefix }}</span>
        </div>

        <div class="baseconv-input-wrap">
          <input
            :value="values[f.base]"
            :placeholder="f.placeholder"
            spellcheck="false"
            autocomplete="off"
            @input="onInput(f.base, ($event.target).value)"
            @focus="activeBase = f.base"
            :aria-label="f.label"
          />
          <button
            class="baseconv-copy"
            :title="'Copiar ' + f.label"
            @click="copy(values[f.base], f.base)"
            :class="{ copied: copiedBase === f.base }"
          >
            <svg v-if="copiedBase !== f.base" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          </button>
        </div>
        <span v-if="fieldErrors[f.base]" class="baseconv-hint">{{ fieldErrors[f.base] }}</span>
        <span v-else class="baseconv-hint muted">{{ f.hint }}</span>
      </div>
    </div>

    <!-- Info adicional -->
    <div v-if="hasValue" class="baseconv-info">
      <div class="baseconv-stat">
        <span class="baseconv-stat-label">Decimal (BigInt)</span>
        <span class="baseconv-stat-value mono">{{ decimalValue ?? '—' }}</span>
      </div>
      <div class="baseconv-stats-grid">
        <div class="baseconv-mini">
          <b>{{ bitsNeeded }}</b><span>bits necesarios</span>
        </div>
        <div class="baseconv-mini">
          <b>{{ bytesNeeded }}</b><span>bytes ({{ bytesNeeded * 8 }} bits)</span>
        </div>
        <div class="baseconv-mini">
          <b>{{ hexBytes }}</b><span>bytes en hex</span>
        </div>
        <div class="baseconv-mini">
          <b>{{ isNegative ? 'Negativo' : 'Positivo' }}</b><span>signo</span>
        </div>
      </div>
      <div class="baseconv-repr">
        <span><code>0b{{ values[2] || '0' }}</code> bin</span>
        <span><code>0o{{ values[8] || '0' }}</code> oct</span>
        <span><code>{{ values[10] || '0' }}</code> dec</span>
        <span><code>0x{{ (values[16] || '0').toUpperCase() }}</code> hex</span>
      </div>
    </div>

    <!-- Acciones rápidas -->
    <div class="baseconv-actions">
      <button class="baseconv-btn secondary" @click="clearAll">Limpiar</button>
      <button class="baseconv-btn secondary" @click="swapExample">Ejemplo aleatorio</button>
      <div class="baseconv-examples">
        <span class="baseconv-examples-label">Ejemplos:</span>
        <button v-for="ex in examples" :key="ex.label" class="baseconv-chip" @click="loadExample(ex)">{{ ex.label }}</button>
      </div>
    </div>

    <!-- Tabla explicativa -->
    <details class="baseconv-details">
      <summary>¿Cómo se hace la conversión?</summary>
      <div class="baseconv-help">
        <p>Internamente se convierte todo a <b>base 10</b> (decimal) usando <code>BigInt</code> y desde ahí a cada base destino:</p>
        <ul>
          <li><b>Binario → Decimal:</b> suma de potencias de 2. Ej: <code>1011₂ = 1·2³ + 0·2² + 1·2¹ + 1·2⁰ = 11₁₀</code></li>
          <li><b>Decimal → Hex:</b> divisiones sucesivas entre 16 y restos (10→A, 15→F).</li>
          <li><b>Hex → Octal:</b> hex → binario (4 bits por dígito) → agrupar de 3 en 3 → octal.</li>
        </ul>
        <p class="muted">Soporta números negativos y de tamaño arbitrario (hasta cientos de dígitos) gracias a <code>BigInt</code>. Se ignoran espacios y prefijos <code>0b</code>, <code>0o</code>, <code>0x</code>.</p>
      </div>
    </details>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'

const fields = [
  { base: 2,  label: 'Binario',      prefix: '0b', color: '#22c55e', placeholder: '101010',  hint: 'Solo 0 y 1' },
  { base: 8,  label: 'Octal',        prefix: '0o', color: '#eab308', placeholder: '52',      hint: 'Dígitos 0–7' },
  { base: 10, label: 'Decimal',      prefix: '—', color: '#3b82f6', placeholder: '42',      hint: 'Dígitos 0–9, signo -' },
  { base: 16, label: 'Hexadecimal',  prefix: '0x', color: '#a855f7', placeholder: '2A',      hint: '0–9, A–F (may/min)' },
]

const values = reactive({ 2: '', 8: '', 10: '', 16: '' })
const fieldErrors = reactive({ 2: '', 8: '', 10: '', 16: '' })
const activeBase = ref(10)
const error = ref('')
const copiedBase = ref(null)
const decimalValue = ref(null)

const hasValue = computed(() => Object.values(values).some(v => v !== ''))

const isNegative = computed(() => {
  const v = decimalValue.value
  if (v === null) return false
  return v < 0n
})

const bitsNeeded = computed(() => {
  if (decimalValue.value === null) return '—'
  const abs = decimalValue.value < 0n ? -decimalValue.value : decimalValue.value
  if (abs === 0n) return 1
  return abs.toString(2).length
})

const bytesNeeded = computed(() => {
  if (decimalValue.value === null) return '—'
  const b = bitsNeeded.value
  if (b === '—') return '—'
  return Math.ceil(Number(b) / 8) || 1
})

const hexBytes = computed(() => {
  if (decimalValue.value === null) return '—'
  const abs = decimalValue.value < 0n ? -decimalValue.value : decimalValue.value
  if (abs === 0n) return '00'
  let hex = abs.toString(16).toUpperCase()
  if (hex.length % 2 !== 0) hex = '0' + hex
  return hex.match(/.{2}/g)?.join(' ') ?? hex
})

const patterns = {
  2: /^-?[01]+$/,
  8: /^-?[0-7]+$/,
  10: /^-?[0-9]+$/,
  16: /^-?[0-9a-fA-F]+$/,
}

const examples = [
  { label: '42', base: 10, value: '42' },
  { label: '255 → FF', base: 10, value: '255' },
  { label: '101010₂', base: 2, value: '101010' },
  { label: '777₈', base: 8, value: '777' },
  { label: 'DEAD₁₆', base: 16, value: 'DEAD' },
  { label: '-42', base: 10, value: '-42' },
]

function stripPrefix(raw, base) {
  let s = raw.trim().replace(/\s|_/g, '')
  if (s.startsWith('-')) {
    const sign = '-'
    let rest = s.slice(1)
    rest = rest.replace(/^(0b|0o|0x)/i, '')
    return sign + rest
  }
  return s.replace(/^(0b|0o|0x)/i, '')
}

function parseBigInt(str, base) {
  const s = stripPrefix(str, base)
  if (!s || s === '-' ) throw new Error('vacío')
  const sign = s.startsWith('-') ? -1n : 1n
  const abs = s.startsWith('-') ? s.slice(1) : s
  if (!patterns[base].test(s)) throw new Error('caracter no válido')
  // BigInt can parse 0b, 0o, 0x but not bare base 2/8/16, so manual
  let val = 0n
  const bigBase = BigInt(base)
  for (const ch of abs) {
    const digit = parseInt(ch, base)
    if (isNaN(digit) || digit >= base) throw new Error('dígito fuera de rango')
    val = val * bigBase + BigInt(digit)
  }
  return sign * val
}

function formatBigInt(val, base) {
  if (val === 0n) return '0'
  const negative = val < 0n
  let abs = negative ? -val : val
  let out = abs.toString(base)
  if (base === 16) out = out.toUpperCase()
  return negative ? '-' + out : out
}

function onInput(base, raw) {
  activeBase.value = base
  error.value = ''
  Object.keys(fieldErrors).forEach(k => fieldErrors[k] = '')

  // permitir vacío y signo suelto mientras escribe
  const trimmed = raw.trim()
  if (trimmed === '' || trimmed === '-' || trimmed === '0b' || trimmed === '0o' || trimmed === '0x' || trimmed === '-0b' || trimmed === '-0o' || trimmed === '-0x') {
    values[base] = raw.replace(/[^0-9a-fA-FxXbBoO\-_ ]/g, '')
    // si es solo prefijo/signo, no propagar
    if (trimmed === '' ) {
      Object.keys(values).forEach(k => { if (Number(k) !== base) values[k] = '' })
      decimalValue.value = null
      return
    }
    if (['-', '0b','0o','0x','-0b','-0o','-0x'].includes(trimmed.toLowerCase())) {
      // no convertir aún
      decimalValue.value = null
      Object.keys(values).forEach(k => { if (Number(k) !== base) values[k] = '' })
      values[base] = raw
      return
    }
  }

  // limpiar prefijos para validar y guardar tal cual el usuario? guardamos sin prefijo normalizado en ese campo
  let toParse = raw
  // aceptamos que el usuario pegue con prefijo
  try {
    const parsed = parseBigInt(toParse, base)
    decimalValue.value = parsed
    // actualizar todos los demás
    for (const f of fields) {
      if (f.base === base) {
        // normaliza: sin prefijo, mayúsculas en hex
        values[f.base] = formatBigInt(parsed, f.base)
        // pero si el input original tenía minúsculas en hex, respetamos mayúsculas normalizadas igualmente
      } else {
        values[f.base] = formatBigInt(parsed, f.base)
      }
    }
    // limpia error del campo activo si parseó bien
    fieldErrors[base] = ''
  } catch (e) {
    // input inválido: mantener valor escrito en ese campo, limpiar los otros o dejarlos?
    values[base] = raw
    // no borrar otros si ya había un valor previo válido? mejor vaciar para no mostrar datos desactualizados
    for (const f of fields) if (f.base !== base) values[f.base] = ''
    decimalValue.value = null
    const msg = e.message === 'caracter no válido' || e.message === 'dígito fuera de rango'
      ? `Carácter no válido para base ${base}`
      : ''
    fieldErrors[base] = msg || 'Valor no válido'
    error.value = `Entrada no válida en ${fields.find(f=>f.base===base).label}: ${msg || 'revisa los dígitos permitidos'}.`
  }
}

function clearAll() {
  Object.keys(values).forEach(k => values[k] = '')
  Object.keys(fieldErrors).forEach(k => fieldErrors[k] = '')
  error.value = ''
  decimalValue.value = null
  activeBase.value = 10
}

function loadExample(ex) {
  onInput(ex.base, ex.value)
  activeBase.value = ex.base
}

function swapExample() {
  const rnd = Math.floor(Math.random() * 100000)
  const bases = [2,8,10,16]
  const b = bases[Math.floor(Math.random()*bases.length)]
  onInput(b, formatBigInt(BigInt(rnd), b))
}

async function copy(text, base) {
  if (!text) return
  try { await navigator.clipboard.writeText(text) } catch {
    const t = document.createElement('textarea'); t.value = text
    document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t)
  }
  copiedBase.value = base
  setTimeout(() => copiedBase.value = null, 1500)
}

// valor inicial demo
onInput(10, '42')
</script>

<style scoped>
.baseconv { max-width: 760px; margin: 0 auto; }
.baseconv-error {
  display: flex; align-items: center; gap: 8px;
  background: #fef2f2; color: #dc2626; border: 1px solid #fecaca;
  padding: 10px 14px; border-radius: 8px; margin-bottom: 16px; font-size: .9rem;
}
:root.dark .baseconv-error, html.dark .baseconv-error { background: rgba(239,68,68,.12); border-color: rgba(239,68,68,.3); }

.baseconv-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 18px;
}
@media (max-width: 640px) { .baseconv-grid { grid-template-columns: 1fr; } }

.baseconv-field {
  background: var(--vp-c-bg-soft); border: 2px solid var(--vp-c-divider);
  border-radius: 10px; padding: 12px; transition: border-color .2s, box-shadow .2s;
}
.baseconv-field.active { border-color: var(--vp-c-brand-1); box-shadow: 0 0 0 3px rgba(59,130,246,.12); }
.baseconv-field.invalid { border-color: #ef4444; }

.baseconv-field-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.baseconv-label { display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: .92rem; }
.baseconv-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
.baseconv-base-tag { font-size: .7rem; font-weight: 600; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); padding: 1px 5px; border-radius: 4px; color: var(--vp-c-text-2); }
.baseconv-prefix { font-family: monospace; font-size: .8rem; color: var(--vp-c-text-3); background: var(--vp-c-bg); padding: 2px 6px; border-radius: 4px; border: 1px solid var(--vp-c-divider); }

.baseconv-input-wrap { position: relative; display: flex; align-items: center; }
.baseconv-input-wrap input {
  width: 100%; padding: 10px 40px 10px 12px; font-family: 'SF Mono','Fira Code',monospace;
  font-size: 1.05rem; font-weight: 600; letter-spacing: .3px;
  border: 1.5px solid var(--vp-c-divider); border-radius: 8px;
  background: var(--vp-c-bg); color: var(--vp-c-text-1); outline: none; transition: border-color .2s;
}
.baseconv-input-wrap input:focus { border-color: var(--vp-c-brand-1); }
.baseconv-input-wrap input::placeholder { color: var(--vp-c-text-3); font-weight: 400; }

.baseconv-copy {
  position: absolute; right: 6px; width: 30px; height: 30px;
  display: flex; align-items: center; justify-content: center;
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 6px; cursor: pointer; color: var(--vp-c-text-2); transition: all .2s;
}
.baseconv-copy:hover { background: var(--vp-c-brand-1); color: #fff; border-color: var(--vp-c-brand-1); }
.baseconv-copy.copied { background: #22c55e; color: #fff; border-color: #22c55e; }

.baseconv-hint { display: block; margin-top: 6px; font-size: .75rem; color: #ef4444; min-height: 14px; }
.baseconv-hint.muted { color: var(--vp-c-text-3); }

.baseconv-info {
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);
  border-radius: 10px; padding: 14px; margin-bottom: 18px;
}
.baseconv-stat { display: flex; justify-content: space-between; align-items: center; padding-bottom: 10px; border-bottom: 1px dashed var(--vp-c-divider); margin-bottom: 10px; }
.baseconv-stat-label { font-size: .82rem; color: var(--vp-c-text-2); font-weight: 600; text-transform: uppercase; letter-spacing: .4px; }
.baseconv-stat-value { font-size: 1rem; }
.mono { font-family: 'SF Mono','Fira Code',monospace; font-weight: 700; word-break: break-all; }

.baseconv-stats-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-bottom: 12px; }
@media (max-width: 560px) { .baseconv-stats-grid { grid-template-columns: repeat(2,1fr); } }
.baseconv-mini { text-align: center; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 8px; padding: 8px 4px; }
.baseconv-mini b { display: block; font-size: .95rem; }
.baseconv-mini span { font-size: .7rem; color: var(--vp-c-text-3); text-transform: uppercase; letter-spacing: .3px; }

.baseconv-repr { display: flex; flex-wrap: wrap; gap: 8px; }
.baseconv-repr span { font-size: .82rem; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); padding: 4px 8px; border-radius: 6px; }
.baseconv-repr code { font-weight: 700; color: var(--vp-c-brand-1); }

.baseconv-actions { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 18px; }
.baseconv-btn {
  padding: 8px 14px; border-radius: 8px; font-weight: 600; font-size: .88rem; cursor: pointer;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); transition: all .2s;
}
.baseconv-btn:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.baseconv-btn.secondary { background: var(--vp-c-bg-soft); }

.baseconv-examples { display: flex; flex-wrap: wrap; gap: 6px; align-items: center; }
.baseconv-examples-label { font-size: .82rem; color: var(--vp-c-text-2); font-weight: 600; }
.baseconv-chip {
  padding: 5px 10px; border-radius: 20px; font-size: .78rem; font-family: monospace; font-weight: 600;
  background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); cursor: pointer; transition: all .2s;
}
.baseconv-chip:hover { background: var(--vp-c-brand-1); color: #fff; border-color: var(--vp-c-brand-1); }

.baseconv-details { background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; padding: 12px 14px; }
.baseconv-details summary { cursor: pointer; font-weight: 700; font-size: .9rem; }
.baseconv-help { margin-top: 10px; font-size: .88rem; line-height: 1.6; color: var(--vp-c-text-2); }
.baseconv-help ul { margin: 8px 0; padding-left: 18px; }
.baseconv-help code { background: var(--vp-c-bg); padding: 1px 4px; border-radius: 4px; font-size: .82rem; }
.muted { color: var(--vp-c-text-3); font-size: .82rem; }
</style>
