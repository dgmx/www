<template>
  <div class="calc-card">
    <div class="row">
      <div class="field">
        <label>Base de datos</label>
        <select v-model="dbKey" @change="resetQuestions">
          <option v-for="db in databases" :key="db.key" :value="db.key">{{ db.name }}</option>
        </select>
      </div>
      <div class="field">
        <label>Tipo de consulta</label>
        <select v-model="sectionKey" @change="resetQuestions">
          <option v-for="sec in availableSections" :key="sec" :value="sec">{{ sectionLabel(sec) }}</option>
        </select>
      </div>
    </div>

    <div v-if="currentQuestion" class="question-area">
      <div class="q-header">
        <span class="q-count">{{ qIndex + 1 }} / {{ currentList.length }}</span>
        <button class="btn-sm btn-next" @click="nextQuestion">Siguiente →</button>
      </div>

      <div class="q-text">{{ currentQuestion.question }}</div>

      <div class="field">
        <label>Tu consulta SQL</label>
        <textarea v-model="userSql" class="sql-editor" rows="5" placeholder="Escribe aquí tu consulta SQL..." spellcheck="false"></textarea>
      </div>

      <div class="q-actions">
        <button class="btn-sm btn-check" @click="checkQuery">Comprobar consulta</button>
        <button v-if="!showAnswer" class="btn-sm btn-reveal" @click="showAnswer = true">Mostrar solución</button>
        <button v-else class="btn-sm btn-hide" @click="showAnswer = false">Ocultar solución</button>
      </div>

      <div v-if="checkResult !== null" :class="['check-msg', checkResult ? 'msg-ok' : 'msg-err']">
        {{ checkResult ? '✅ ¡Correcto!' : '❌ Error, prueba de nuevo' }}
      </div>

      <div v-if="showAnswer" class="q-answer">
        <pre><code>{{ currentQuestion.answer }}</code></pre>
      </div>
    </div>

    <p v-else class="no-questions">No hay consultas en esta categoría.</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import informatica from '../../../databases/sql/data/informatica.json'
import empleados from '../../../databases/sql/data/empleados.json'
import ventas from '../../../databases/sql/data/ventas.json'
import jardineria from '../../../databases/sql/data/jardineria.json'
import universidad from '../../../databases/sql/data/universidad.json'

const databases = [informatica, empleados, ventas, jardineria, universidad]
const dbMap = Object.fromEntries(databases.map(d => [d.key, d]))
const sectionLabels = {
  'Consultas sobre una tabla': 'Consultas sobre una tabla',
  'Consultas multitabla (Composición interna)': 'Multitabla (interna)',
  'Consultas multitabla (Composición externa)': 'Multitabla (externa)',
  'Consultas resumen': 'Consultas resumen',
  'Subconsultas': 'Subconsultas',
  'Consultas variadas': 'Consultas variadas',
}

const dbKey = ref('informatica')
const sectionKey = ref('Consultas sobre una tabla')
const qIndex = ref(0)
const showAnswer = ref(false)
const userSql = ref('')
const checkResult = ref(null)

const db = computed(() => dbMap[dbKey.value])
const availableSections = computed(() => Object.keys(db.value.sections))

const currentList = computed(() => db.value.sections[sectionKey.value] || [])
const currentQuestion = computed(() => currentList.value[qIndex.value] || null)

const sqlKeywords = new Set([
  'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'IN', 'IS', 'NULL',
  'AS', 'ON', 'JOIN', 'INNER', 'LEFT', 'RIGHT', 'OUTER', 'FULL', 'CROSS',
  'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', 'DESC', 'LIMIT', 'OFFSET',
  'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE',
  'DROP', 'ALTER', 'ADD', 'COLUMN', 'INDEX', 'VIEW', 'DISTINCT', 'ALL',
  'UNION', 'EXCEPT', 'INTERSECT', 'EXISTS', 'ANY', 'SOME', 'BETWEEN',
  'LIKE', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX', 'CASE', 'WHEN', 'THEN', 'ELSE', 'END',
  'TRUE', 'FALSE', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES', 'UNIQUE',
  'CAST', 'CONVERT', 'COALESCE', 'NULLIF',
])

function normalizeSQL(sql) {
  let s = sql.trim()
  // remove trailing semicolons
  s = s.replace(/;+$/, '')
  // remove inline comments
  s = s.replace(/--.*$/gm, '')
  s = s.replace(/\/\*[\s\S]*?\*\//g, '')
  // collapse whitespace
  s = s.replace(/\s+/g, ' ').trim()
  // Tokenize and rebuild, uppercasing keywords
  const tokens = []
  let i = 0
  while (i < s.length) {
    if (s[i] === "'" || s[i] === '"') {
      const quote = s[i]
      let j = i + 1
      while (j < s.length && s[j] !== quote) j++
      tokens.push(s.substring(i, j + 1))
      i = j + 1
    } else if (/\s/.test(s[i])) {
      i++
    } else {
      let j = i
      while (j < s.length && !/\s/.test(s[j]) && s[j] !== "'" && s[j] !== '"') j++
      let token = s.substring(i, j)
      token = sqlKeywords.has(token.toUpperCase()) ? token.toUpperCase() : token
      tokens.push(token)
      i = j
    }
  }
  return tokens.join(' ')
}

function checkQuery() {
  checkResult.value = null
  if (!userSql.value.trim()) return

  const userNormalized = normalizeSQL(userSql.value)
  const answerNormalized = normalizeSQL(currentQuestion.value.answer)
  checkResult.value = userNormalized === answerNormalized
}

function sectionLabel(sec) {
  return sectionLabels[sec] || sec
}

function resetQuestions() {
  qIndex.value = 0
  showAnswer.value = false
  userSql.value = ''
  checkResult.value = null
}

function nextQuestion() {
  const list = currentList.value
  if (list.length === 0) return
  let next = qIndex.value + 1
  if (next >= list.length) next = 0
  qIndex.value = next
  showAnswer.value = false
  userSql.value = ''
  checkResult.value = null
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
select { width: 100%; padding: .6rem .8rem; font-size: 1rem; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); cursor: pointer; }
select:focus { outline: 2px solid var(--vp-c-brand-1); border-color: transparent; }
.question-area { margin-top: 1rem; }
.q-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: .8rem; }
.q-count { font-size: .85rem; color: var(--vp-c-text-3); font-weight: 600; }
.q-text { background: var(--vp-c-bg); border: 1px solid var(--vp-c-border); border-radius: 8px; padding: 1rem; font-size: 1rem; line-height: 1.6; color: var(--vp-c-text-1); margin-bottom: 1rem; }
.sql-editor { width: 100%; padding: .8rem; font-size: .9rem; font-family: monospace; border: 1px solid var(--vp-c-border); border-radius: 6px; background: var(--vp-c-bg); color: var(--vp-c-text-1); resize: vertical; line-height: 1.5; tab-size: 2; }
.sql-editor:focus { outline: 2px solid var(--vp-c-brand-1); border-color: transparent; }
.q-actions { display: flex; gap: .5rem; margin-bottom: .8rem; flex-wrap: wrap; }
.btn-sm { padding: .4rem .8rem; font-size: .85rem; font-weight: 600; border: none; border-radius: 6px; cursor: pointer; }
.btn-next { background: var(--vp-c-brand-1); color: #fff; }
.btn-next:hover { opacity: .9; }
.btn-check { background: var(--vp-c-brand-1); color: #fff; }
.btn-check:hover { opacity: .9; }
.btn-reveal { background: #22c55e; color: #fff; }
.btn-reveal:hover { opacity: .9; }
.btn-hide { background: var(--vp-c-text-3); color: #fff; }
.btn-hide:hover { opacity: .9; }
.check-msg { padding: .6rem 1rem; border-radius: 6px; font-weight: 600; font-size: .95rem; margin-bottom: .8rem; }
.msg-ok { background: #e8f5e9; color: #2e7d32; }
[data-theme="dark"] .msg-ok { background: #1b3a1b; color: #66bb6a; }
.msg-err { background: #fbe9e7; color: #c62828; }
[data-theme="dark"] .msg-err { background: #3a1b1b; color: #ef9a9a; }
.q-answer { background: #1e293b; border-radius: 8px; padding: 1rem; overflow-x: auto; }
[data-theme="dark"] .q-answer { background: #0f172a; }
.q-answer pre { margin: 0; }
.q-answer code { font-family: monospace; font-size: .9rem; color: #e2e8f0; white-space: pre; }
.no-questions { text-align: center; padding: 2rem; color: var(--vp-c-text-3); }
</style>
