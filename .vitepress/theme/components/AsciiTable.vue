<template>
  <div class="ascii-card">
    <div class="controls">
      <input
        v-model="filter"
        class="search-input"
        type="text"
        placeholder="Buscar por carácter, nombre, decimal, octal, hex o binario…"
      >
      <div class="filter-btns">
        <button
          v-for="cat in categories"
          :key="cat.key"
          :class="['filter-btn', { active: selectedCat === cat.key }]"
          @click="selectedCat = cat.key"
        >
          {{ cat.label }} <span class="cat-count">{{ countCat(cat.key) }}</span>
        </button>
      </div>
    </div>

    <div class="legend">
      <span><strong>{{ filtered.length }}</strong> de {{ chars.length }} caracteres</span>
      <span class="hint">Pasa el ratón sobre un carácter para ver sus propiedades. Haz clic para fijarlo.</span>
    </div>

    <div class="grid" @mouseleave="hideTip">
      <button
        v-for="c in filtered"
        :key="c.code"
        type="button"
        :class="['cell', c.cat, { pinned: selected === c.code }]"
        :aria-label="`ASCII ${c.dec}: ${c.name}`"
        @mouseenter="showTip(c)"
        @mousemove="moveTip"
        @focus="showTip(c)"
        @click="select(c.code)"
      >
        <span class="glyph">{{ glyph(c.code) }}</span>
        <span class="dec">{{ c.dec }}</span>
      </button>
      <p v-if="!filtered.length" class="no-results">Sin resultados</p>
    </div>

    <div
      v-if="tip"
      ref="tipEl"
      class="ascii-tip"
      :style="{ left: tip.x + 'px', top: tip.y + 'px' }"
    >
      <div class="ascii-tip-head">
        <span class="ascii-tip-glyph">{{ glyph(tip.code) }}</span>
        <div>
          <div class="ascii-tip-name">{{ name(tip.code) }}</div>
          <div class="ascii-tip-desc">{{ desc(tip.code) }}</div>
        </div>
      </div>

      <div class="ascii-tip-nums">
        <div class="ascii-tip-num">
          <span class="lbl">Decimal</span>
          <span class="val">{{ tip.code }}</span>
        </div>
        <div class="ascii-tip-num">
          <span class="lbl">Octal</span>
          <span class="val">{{ octal(tip.code) }}</span>
        </div>
        <div class="ascii-tip-num">
          <span class="lbl">Hexadecimal</span>
          <span class="val">{{ hex(tip.code) }}</span>
        </div>
        <div class="ascii-tip-num">
          <span class="lbl">Binario</span>
          <span class="val">{{ bin(tip.code) }}</span>
        </div>
      </div>

      <div class="ascii-tip-bin">
        <span class="lbl">Los 7 bits del ASCII (el bit de 128 siempre es 0)</span>
        <span class="bits">
          <span
            v-for="(b, i) in bits(tip.code)"
            :key="i"
            :class="['bit', { seven: i > 0 }]"
          >{{ b }}</span>
        </span>
      </div>

      <div class="ascii-tip-tags">
        <span :class="['tag', cat(tip.code)]">{{ catLabel(cat(tip.code)) }}</span>
        <span class="tag">{{ isPrintable(tip.code) ? 'Imprimible' : 'No imprimible' }}</span>
        <span v-if="isLetter(tip.code)" class="tag">Letra</span>
        <span v-if="isDigit(tip.code)" class="tag">Dígito</span>
      </div>

      <div class="ascii-tip-codes">
        <div class="ascii-tip-code"><span class="lbl">Python</span><code>chr({{ tip.code }})</code></div>
        <div class="ascii-tip-code"><span class="lbl">HTML</span><code>&#38;#{{ tip.code }};</code></div>
        <div class="ascii-tip-code"><span class="lbl">C</span><code>{{ cEscapeHex(tip.code) }}</code></div>
        <div class="ascii-tip-code"><span class="lbl">URL</span><code>{{ urlEncode(tip.code) }}</code></div>
      </div>
    </div>

    <div v-if="selectedChar" class="detail">
      <div class="detail-head">
        <span class="detail-glyph">{{ glyph(selectedChar.code) }}</span>
        <div>
          <h3>{{ name(selectedChar.code) }} <span class="detail-dec">ASCII {{ selectedChar.dec }}</span></h3>
          <p>{{ desc(selectedChar.code) }}</p>
        </div>
        <button type="button" class="copy-btn" @click="copy(detailRows.map(r => r.v).join('  '))">
          Copiar valores
        </button>
      </div>

      <div class="detail-rows">
        <div v-for="row in detailRows" :key="row.k" class="detail-row">
          <span class="detail-k">{{ row.k }}</span>
          <code class="detail-v">{{ row.v }}</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const filter = ref('')
const selectedCat = ref('todas')
const selected = ref(65)
const tip = ref(null)
const tipEl = ref(null)

const categories = [
  { key: 'todas', label: 'Todas' },
  { key: 'control', label: 'Control' },
  { key: 'espacio', label: 'Espacio' },
  { key: 'digitos', label: 'Dígitos' },
  { key: 'mayusculas', label: 'Mayúsculas' },
  { key: 'minusculas', label: 'Minúsculas' },
  { key: 'puntuacion', label: 'Puntuación' },
  { key: 'imprimibles', label: 'Imprimibles' },
]

const ASCII_DATA = {
  0: ["NUL", "Null (nulo). No produce salida visible; en C marca el fin de cadena."],
  1: ["SOH", "Start of Heading (inicio de cabecera)."],
  2: ["STX", "Start of Text (inicio de texto)."],
  3: ["ETX", "End of Text (fin de texto)."],
  4: ["EOT", "End of Transmission (fin de transmisión)."],
  5: ["ENQ", "Enquiry (consulta)."],
  6: ["ACK", "Acknowledge (acuse de recibo)."],
  7: ["BEL", "Bell (campana). Emite un pitido audible en la consola."],
  8: ["BS", "Backspace (retroceso). Borra el carácter a su izquierda."],
  9: ["TAB", "Horizontal Tab (tabulación horizontal). Inserta hasta 8 columnas."],
  10: ["LF", "Line Feed (avance de línea). Fin de línea en Unix y Linux."],
  11: ["VT", "Vertical Tab (tabulación vertical)."],
  12: ["FF", "Form Feed (salto de página)."],
  13: ["CR", "Carriage Return (retorno de carro). Fin de línea en Windows y Mac clásico."],
  14: ["SO", "Shift Out (desplazar fuera)."],
  15: ["SI", "Shift In (desplazar dentro)."],
  16: ["DLE", "Data Link Escape (escape del enlace de datos)."],
  17: ["DC1", "Device Control 1 (XON). Control de flujo del puerto serie."],
  18: ["DC2", "Device Control 2."],
  19: ["DC3", "Device Control 3 (XOFF). Control de flujo del puerto serie."],
  20: ["DC4", "Device Control 4."],
  21: ["NAK", "Negative Acknowledge (acuse de recibo negativo)."],
  22: ["SYN", "Synchronous Idle (síncrono). Sincroniza los extremos del canal."],
  23: ["ETB", "End of Transmission Block (fin de bloque de transmisión)."],
  24: ["CAN", "Cancel (cancelar)."],
  25: ["EM", "End of Medium (fin de medio)."],
  26: ["SUB", "Substitute (sustituto)."],
  27: ["ESC", "Escape (escape). Inicia las secuencias de escape ANSI."],
  28: ["FS", "File Separator (separador de archivos)."],
  29: ["GS", "Group Separator (separador de grupos)."],
  30: ["RS", "Record Separator (separador de registros)."],
  31: ["US", "Unit Separator (separador de unidades)."],
  32: ["SPACE", "Espacio. Separador de palabras; en HTML los espacios consecutivos se colapsan en uno."],
  33: ["!", "Exclamación."],
  34: ["\"", "Comilla doble."],
  35: ["#", "Numeral o almohadilla."],
  36: ["$", "Dólar."],
  37: ["%", "Porcentaje."],
  38: ["&", "Y comercial (ampersand). En HTML se escribe &amp;."],
  39: ["'", "Apóstrofo o comilla simple."],
  40: ["(", "Paréntesis izquierdo."],
  41: [")", "Paréntesis derecho."],
  42: ["*", "Asterisco."],
  43: ["+", "Signo más."],
  44: [",", "Coma."],
  45: ["-", "Guion o guion medio."],
  46: [".", "Punto."],
  47: ["/", "Barra oblicua."],
  48: ["0", "Dígito 0 del sistema decimal."],
  49: ["1", "Dígito 1 del sistema decimal."],
  50: ["2", "Dígito 2 del sistema decimal."],
  51: ["3", "Dígito 3 del sistema decimal."],
  52: ["4", "Dígito 4 del sistema decimal."],
  53: ["5", "Dígito 5 del sistema decimal."],
  54: ["6", "Dígito 6 del sistema decimal."],
  55: ["7", "Dígito 7 del sistema decimal."],
  56: ["8", "Dígito 8 del sistema decimal."],
  57: ["9", "Dígito 9 del sistema decimal."],
  58: [":", "Dos puntos."],
  59: [";", "Punto y coma."],
  60: ["<", "Menor que."],
  61: ["=", "Igual."],
  62: [">", "Mayor que."],
  63: ["?", "Interrogación o signo de pregunta."],
  64: ["@", "Arroba."],
  65: ["A", "Letra mayúscula A. Códigos del 65 (A) al 90 (Z)."],
  66: ["B", "Letra mayúscula B. Códigos del 65 (A) al 90 (Z)."],
  67: ["C", "Letra mayúscula C. Códigos del 65 (A) al 90 (Z)."],
  68: ["D", "Letra mayúscula D. Códigos del 65 (A) al 90 (Z)."],
  69: ["E", "Letra mayúscula E. Códigos del 65 (A) al 90 (Z)."],
  70: ["F", "Letra mayúscula F. Códigos del 65 (A) al 90 (Z)."],
  71: ["G", "Letra mayúscula G. Códigos del 65 (A) al 90 (Z)."],
  72: ["H", "Letra mayúscula H. Códigos del 65 (A) al 90 (Z)."],
  73: ["I", "Letra mayúscula I. Códigos del 65 (A) al 90 (Z)."],
  74: ["J", "Letra mayúscula J. Códigos del 65 (A) al 90 (Z)."],
  75: ["K", "Letra mayúscula K. Códigos del 65 (A) al 90 (Z)."],
  76: ["L", "Letra mayúscula L. Códigos del 65 (A) al 90 (Z)."],
  77: ["M", "Letra mayúscula M. Códigos del 65 (A) al 90 (Z)."],
  78: ["N", "Letra mayúscula N. Códigos del 65 (A) al 90 (Z)."],
  79: ["O", "Letra mayúscula O. Códigos del 65 (A) al 90 (Z)."],
  80: ["P", "Letra mayúscula P. Códigos del 65 (A) al 90 (Z)."],
  81: ["Q", "Letra mayúscula Q. Códigos del 65 (A) al 90 (Z)."],
  82: ["R", "Letra mayúscula R. Códigos del 65 (A) al 90 (Z)."],
  83: ["S", "Letra mayúscula S. Códigos del 65 (A) al 90 (Z)."],
  84: ["T", "Letra mayúscula T. Códigos del 65 (A) al 90 (Z)."],
  85: ["U", "Letra mayúscula U. Códigos del 65 (A) al 90 (Z)."],
  86: ["V", "Letra mayúscula V. Códigos del 65 (A) al 90 (Z)."],
  87: ["W", "Letra mayúscula W. Códigos del 65 (A) al 90 (Z)."],
  88: ["X", "Letra mayúscula X. Códigos del 65 (A) al 90 (Z)."],
  89: ["Y", "Letra mayúscula Y. Códigos del 65 (A) al 90 (Z)."],
  90: ["Z", "Letra mayúscula Z. Códigos del 65 (A) al 90 (Z)."],
  91: ["[", "Corchete izquierdo."],
  92: ["\\", "Barra invertida (carácter de escape)."],
  93: ["]", "Corchete derecho."],
  94: ["^", "Acento circunflejo."],
  95: ["_", "Guion bajo."],
  96: ["`", "Acento grave o backtick."],
  97: ["a", "Letra minúscula a (a–z)."],
  98: ["b", "Letra minúscula b (a–z)."],
  99: ["c", "Letra minúscula c (a–z)."],
  100: ["d", "Letra minúscula d (a–z)."],
  101: ["e", "Letra minúscula e (a–z)."],
  102: ["f", "Letra minúscula f (a–z)."],
  103: ["g", "Letra minúscula g (a–z)."],
  104: ["h", "Letra minúscula h (a–z)."],
  105: ["i", "Letra minúscula i (a–z)."],
  106: ["j", "Letra minúscula j (a–z)."],
  107: ["k", "Letra minúscula k (a–z)."],
  108: ["l", "Letra minúscula l (a–z)."],
  109: ["m", "Letra minúscula m (a–z)."],
  110: ["n", "Letra minúscula n (a–z)."],
  111: ["o", "Letra minúscula o (a–z)."],
  112: ["p", "Letra minúscula p (a–z)."],
  113: ["q", "Letra minúscula q (a–z)."],
  114: ["r", "Letra minúscula r (a–z)."],
  115: ["s", "Letra minúscula s (a–z)."],
  116: ["t", "Letra minúscula t (a–z)."],
  117: ["u", "Letra minúscula u (a–z)."],
  118: ["v", "Letra minúscula v (a–z)."],
  119: ["w", "Letra minúscula w (a–z)."],
  120: ["x", "Letra minúscula x (a–z)."],
  121: ["y", "Letra minúscula y (a–z)."],
  122: ["z", "Letra minúscula z (a–z)."],
  123: ["{", "Llave izquierda."],
  124: ["|", "Barra vertical: disyunción lógica."],
  125: ["}", "Llave derecha."],
  126: ["~", "Acento tilde: negación lógica."],
  127: ["DEL", "Delete (borrar). No es imprimible; en Windows equivale a CR+LF."],
}

function name(code) { return ASCII_DATA[code][0] }
function desc(code) { return ASCII_DATA[code][1] }

const chars = computed(() => {
  const list = []
  for (let code = 0; code < 128; code++) {
    list.push({
      code,
      dec: code,
      name: name(code),
      desc: desc(code),
      cat: cat(code),
    })
  }
  return list
})

const filtered = computed(() => {
  let list = chars.value
  if (selectedCat.value === 'control') {
    list = list.filter(c => c.cat === 'control')
  } else if (selectedCat.value === 'imprimibles') {
    list = list.filter(c => isPrintable(c.code))
  } else if (selectedCat.value !== 'todas') {
    list = list.filter(c => c.cat === selectedCat.value)
  }
  const q = filter.value.trim().toLowerCase()
  if (q) {
    list = list.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q) ||
      String(c.dec) === q ||
      hex(c.dec).toLowerCase() === q ||
      hex(c.dec).toLowerCase() === '0x' + q ||
      String(c.dec).padStart(3, '0') === q ||
      bin(c.dec) === q ||
      bin7(c.dec) === q ||
      octal(c.dec) === '\\' + q
    )
  }
  return list
})

const selectedChar = computed(() => chars.value.find(c => c.code === selected.value) || null)

const detailRows = computed(() => {
  if (!selectedChar.value) return []
  const c = selectedChar.value
  return [
    { k: 'Decimal', v: String(c.dec) },
    { k: 'Octal', v: octal(c.dec) },
    { k: 'Hexadecimal', v: hex(c.dec) },
    { k: 'Binario (7 bits)', v: bin7(c.dec) },
    { k: 'Binario (8 bits)', v: bin(c.dec) },
    { k: 'Categoría', v: catLabel(cat(c.dec)) },
    { k: 'Imprimible', v: isPrintable(c.dec) ? 'Sí' : 'No' },
    { k: 'Python', v: `chr(${c.dec})` },
    { k: 'HTML', v: `&#${c.dec};` },
    { k: 'C (hexadecimal)', v: cEscapeHex(c.dec) },
    { k: 'C (octal)', v: cEscapeOct(c.dec) },
    { k: 'URL', v: urlEncode(c.dec) },
  ]
})

function countCat(key) {
  if (key === 'todas') return chars.value.length
  if (key === 'control') return chars.value.filter(c => c.cat === 'control').length
  if (key === 'imprimibles') return chars.value.filter(c => isPrintable(c.code)).length
  return chars.value.filter(c => c.cat === key).length
}

function catLabel(key) {
  const found = categories.find(c => c.key === key)
  return found ? found.label : key
}

function isPrintable(code) {
  return code >= 32 && code <= 126
}

function isDigit(code) {
  return code >= 48 && code <= 57
}

function isLetter(code) {
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function cat(code) {
  if (code < 32 || code === 127) return 'control'
  if (code === 32) return 'espacio'
  if (isDigit(code)) return 'digitos'
  if (code >= 65 && code <= 90) return 'mayusculas'
  if (code >= 97 && code <= 122) return 'minusculas'
  return 'puntuacion'
}

function octal(code) {
  return '\\' + code.toString(8).padStart(3, '0')
}

function hex(code) {
  return '0x' + code.toString(16).toUpperCase().padStart(2, '0')
}

function bin(code) {
  return code.toString(2).padStart(8, '0')
}

function bin7(code) {
  return code.toString(2).padStart(7, '0')
}

function bits(code) {
  return bin(code).split('')
}

function cEscapeHex(code) {
  if (code === 0) return "'\\0'"
  if (!isPrintable(code)) return "'\\x" + code.toString(16).toUpperCase().padStart(2, '0') + "'"
  return "'" + String.fromCharCode(code) + "'"
}

function cEscapeOct(code) {
  return "'\\" + code.toString(8).padStart(3, '0') + "'"
}

function urlEncode(code) {
  return '%' + code.toString(16).toUpperCase().padStart(2, '0')
}

function glyph(code) {
  if (code < 32) return String.fromCodePoint(0x2400 + code)
  if (code === 127) return '␣'
  return String.fromCharCode(code)
}

function showTip(c) {
  tip.value = { code: c.code, x: 0, y: 0 }
}

function moveTip(ev) {
  if (!tip.value) return
  const pad = 14
  const w = tipEl.value?.offsetWidth || 300
  const h = tipEl.value?.offsetHeight || 220
  let x = ev.clientX + pad
  let y = ev.clientY + pad
  if (x + w > window.innerWidth - 8) x = ev.clientX - w - pad
  if (y + h > window.innerHeight - 8) y = ev.clientY - h - pad
  tip.value.x = Math.max(8, x)
  tip.value.y = Math.max(8, y)
}

function hideTip() {
  tip.value = null
}

function select(code) {
  selected.value = code
}

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (e) {
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
}

function onKey(e) {
  if (e.key === 'Escape') hideTip()
}

onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.ascii-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
}
.controls { display: flex; flex-direction: column; gap: .8rem; margin-bottom: 1rem; }
.search-input { width: 100%; padding: .6rem .8rem; font-size: 1rem; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); }
.search-input:focus { outline: 2px solid var(--vp-c-brand-1); border-color: transparent; }
.filter-btns { display: flex; flex-wrap: wrap; gap: .4rem; }
.filter-btn { padding: .35rem .7rem; font-size: .8rem; font-weight: 600; border: 1px solid var(--vp-c-border); border-radius: 6px; cursor: pointer; background: var(--vp-c-bg); color: var(--vp-c-text-2); transition: all .15s; }
.filter-btn:hover { background: var(--vp-c-bg-soft); }
.filter-btn.active { background: var(--vp-c-brand-1); color: #fff; border-color: var(--vp-c-brand-1); }
.cat-count { opacity: .65; font-weight: 400; font-size: .72rem; }
.legend { display: flex; flex-wrap: wrap; justify-content: space-between; gap: .4rem; font-size: .8rem; color: var(--vp-c-text-3); margin-bottom: .8rem; }
.legend .hint { font-style: italic; }

.grid { display: grid; grid-template-columns: repeat(16, minmax(0, 1fr)); gap: 4px; }
@media (max-width: 900px) { .grid { grid-template-columns: repeat(8, minmax(0, 1fr)); } }
@media (max-width: 520px) { .grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }

.cell { position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1px; aspect-ratio: 1 / 1; min-height: 38px; padding: 2px; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; transition: transform .1s, box-shadow .1s, border-color .1s; }
.cell:hover, .cell:focus-visible { transform: scale(1.18); box-shadow: 0 6px 18px rgba(0,0,0,.22); border-color: var(--vp-c-brand-1); outline: none; z-index: 2; }
.cell.pinned { border-color: var(--vp-c-brand-1); box-shadow: inset 0 0 0 1px var(--vp-c-brand-1); }
.glyph { font-size: 1.15rem; line-height: 1; }
.dec { font-size: .6rem; font-weight: 600; }

/* Colores por categoría. Cada glifo y cada número se colorean de forma
   explícita (no heredan --vp-c-text-1) para garantizar el contraste.
   Todos los pares fondo/texto superan 4.5:1 (WCAG AA) en los dos temas. */
.cell.control { background: #d1d5db; }
.cell.control .glyph, .cell.control .dec { color: #111827; }
.cell.espacio { background: #fcd34d; }
.cell.espacio .glyph, .cell.espacio .dec { color: #451a03; }
.cell.digitos { background: #4ade80; }
.cell.digitos .glyph, .cell.digitos .dec { color: #052e16; }
.cell.mayusculas { background: #60a5fa; }
.cell.mayusculas .glyph { color: #172554; }
.cell.mayusculas .dec { color: #1b337a; }
.cell.minusculas { background: #a78bfa; }
.cell.minusculas .glyph { color: #2e1065; }
.cell.minusculas .dec { color: #41197f; }
.cell.puntuacion { background: #f472b6; }
.cell.puntuacion .glyph { color: #500724; }
.cell.puntuacion .dec { color: #671334; }

/* Modo oscuro: VitePress marca el tema con la clase .dark en <html>.
   Se admite también [data-theme="dark"] por compatibilidad. */
.dark .cell.control, [data-theme="dark"] .cell.control { background: #3f3f46; }
.dark .cell.control .glyph, [data-theme="dark"] .cell.control .glyph { color: #e4e4e7; }
.dark .cell.control .dec, [data-theme="dark"] .cell.control .dec { color: #acacb4; }
.dark .cell.espacio, [data-theme="dark"] .cell.espacio { background: #a16207; }
.dark .cell.espacio .glyph, [data-theme="dark"] .cell.espacio .glyph { color: #fffbeb; }
.dark .cell.espacio .dec, [data-theme="dark"] .cell.espacio .dec { color: #fef5d1; }
.dark .cell.digitos, [data-theme="dark"] .cell.digitos { background: #15803d; }
.dark .cell.digitos .glyph, [data-theme="dark"] .cell.digitos .glyph { color: #ecfdf5; }
.dark .cell.digitos .dec, [data-theme="dark"] .cell.digitos .dec { color: #dafbe6; }
.dark .cell.mayusculas, [data-theme="dark"] .cell.mayusculas { background: #1d4ed8; }
.dark .cell.mayusculas .glyph, [data-theme="dark"] .cell.mayusculas .glyph { color: #eff6ff; }
.dark .cell.mayusculas .dec, [data-theme="dark"] .cell.mayusculas .dec { color: #bfdbfe; }
.dark .cell.minusculas, [data-theme="dark"] .cell.minusculas { background: #6d28d9; }
.dark .cell.minusculas .glyph, [data-theme="dark"] .cell.minusculas .glyph { color: #f5f3ff; }
.dark .cell.minusculas .dec, [data-theme="dark"] .cell.minusculas .dec { color: #ddd6fe; }
.dark .cell.puntuacion, [data-theme="dark"] .cell.puntuacion { background: #be185d; }
.dark .cell.puntuacion .glyph, [data-theme="dark"] .cell.puntuacion .glyph { color: #fdf2f8; }
.dark .cell.puntuacion .dec, [data-theme="dark"] .cell.puntuacion .dec { color: #fbd5eb; }

.no-results { grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--vp-c-text-3); }

.ascii-tip { position: fixed; z-index: 100; width: 330px; padding: .8rem .9rem; background: var(--vp-c-bg); border: 1px solid var(--vp-c-brand-1); border-radius: 10px; box-shadow: 0 12px 32px rgba(0,0,0,.28); pointer-events: none; font-size: .8rem; }
.ascii-tip-head { display: flex; gap: .7rem; align-items: flex-start; padding-bottom: .6rem; border-bottom: 1px solid var(--vp-c-border); }
.ascii-tip-glyph { display: flex; align-items: center; justify-content: center; min-width: 40px; height: 40px; padding: 0 .3rem; border-radius: 6px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-border); font-family: ui-monospace, monospace; font-size: 1.5rem; }
.ascii-tip-name { font-weight: 700; font-family: ui-monospace, monospace; color: var(--vp-c-brand-1); }
.ascii-tip-desc { color: var(--vp-c-text-2); line-height: 1.35; margin-top: 2px; }
.ascii-tip-nums { display: flex; gap: .4rem; margin: .6rem 0; }
.ascii-tip-num { flex: 1; text-align: center; padding: .35rem .2rem; border-radius: 6px; background: var(--vp-c-bg-soft); }
.ascii-tip-num .lbl, .ascii-tip-bin .lbl { display: block; font-size: .62rem; text-transform: uppercase; letter-spacing: .04em; color: var(--vp-c-text-3); margin-bottom: 2px; }
.ascii-tip-num .val { font-family: ui-monospace, monospace; font-weight: 700; font-size: .82rem; color: var(--vp-c-text-1); }
.ascii-tip-bin { margin-bottom: .5rem; }
.ascii-tip-bin .bits { display: flex; gap: 2px; }
.bit { flex: 1; text-align: center; padding: .2rem 0; border-radius: 4px; background: var(--vp-c-bg-soft); font-family: ui-monospace, monospace; font-size: .8rem; color: var(--vp-c-text-1); }
.bit.seven { background: var(--vp-c-brand-soft); color: var(--vp-c-brand-1); font-weight: 600; }
[data-theme="dark"] .bit.seven { color: var(--vp-c-brand-1); }
.ascii-tip-tags { display: flex; flex-wrap: wrap; gap: .25rem; margin-bottom: .6rem; }
.tag { padding: .12rem .45rem; border-radius: 999px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-border); font-size: .65rem; color: var(--vp-c-text-2); }
.ascii-tip-codes { display: grid; grid-template-columns: 1fr 1fr; gap: .3rem; }
.ascii-tip-code { display: flex; flex-direction: column; }
.ascii-tip-code .lbl { font-size: .6rem; text-transform: uppercase; color: var(--vp-c-text-3); }
.ascii-tip-code code { font-family: ui-monospace, monospace; font-size: .72rem; color: var(--vp-c-text-1); }

.detail { margin-top: 1.2rem; padding: 1rem; border: 1px solid var(--vp-c-brand-1); border-radius: 10px; background: var(--vp-c-bg); }
.detail-head { display: flex; gap: .8rem; align-items: flex-start; }
.detail-glyph { display: flex; align-items: center; justify-content: center; min-width: 48px; height: 48px; padding: 0 .3rem; border-radius: 8px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-border); font-family: ui-monospace, monospace; font-size: 1.8rem; }
.detail-head h3 { margin: 0; font-size: 1rem; font-family: ui-monospace, monospace; }
.detail-dec { font-size: .75rem; color: var(--vp-c-text-3); font-weight: 400; }
.detail-head p { margin: .2rem 0 0; font-size: .82rem; color: var(--vp-c-text-2); }
.copy-btn { margin-left: auto; padding: .35rem .7rem; font-size: .75rem; font-weight: 600; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-2); cursor: pointer; white-space: nowrap; }
.copy-btn:hover { border-color: var(--vp-c-brand-1); color: var(--vp-c-brand-1); }
.detail-rows { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: .35rem; margin-top: .9rem; padding-top: .9rem; border-top: 1px solid var(--vp-c-border); }
.detail-row { display: flex; justify-content: space-between; gap: .6rem; padding: .3rem .5rem; border-radius: 5px; background: var(--vp-c-bg-soft); font-size: .76rem; }
.detail-k { color: var(--vp-c-text-3); }
.detail-v { font-family: ui-monospace, monospace; color: var(--vp-c-text-1); }
</style>
