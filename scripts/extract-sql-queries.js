/**
 * Extracts SQL questions and answers from markdown files.
 * Usage: node scripts/extract-sql-queries.js
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

const dbs = [
  { file: 'databases/sql/informatica.md', key: 'informatica', name: 'Tienda Informática' },
  { file: 'databases/sql/empleados.md', key: 'empleados', name: 'Gestión Empleados' },
  { file: 'databases/sql/ventas.md', key: 'ventas', name: 'Gestión Ventas' },
  { file: 'databases/sql/jardineria.md', key: 'jardineria', name: 'Jardinería' },
  { file: 'databases/sql/universidad.md', key: 'universidad', name: 'Universidad' },
]

const outDir = join(root, 'databases/sql/data')
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true })

function extractSchema(text) {
  const schemas = []
  const tblMatches = text.matchAll(/CREATE TABLE\s+(\w+)\s*\(([\s\S]*?)\);/gi)
  for (const m of tblMatches) {
    schemas.push({ table: m[1], columns: m[2].trim() })
  }
  return schemas
}

/** Normalize section titles to a consistent set */
function normalizeSection(title) {
  const t = title.trim().replace(/<[^>]+>/g, '').replace(/^\d+\.\s*/, '') // strip HTML and numbering prefixes
  if (/^Consultas sobre una tabla/i.test(t)) return 'Consultas sobre una tabla'
  if (/^Consultas multitabla.*interna|composici.n interna/i.test(t)) return 'Consultas multitabla (Composición interna)'
  if (/^Consultas multitabla.*externa|composici.n externa/i.test(t)) return 'Consultas multitabla (Composición externa)'
  if (/res[uú]men/i.test(t)) return 'Consultas resumen'
  if (/subconsultas/i.test(t)) return 'Subconsultas'
  if (/variadas/i.test(t)) return 'Consultas variadas'
  return null
}

function parse(text) {
  const lines = text.split('\n')
  const sections = {}
  let currentSection = null

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Match ## section header
    const secMatch = line.match(/^##\s+(.+)/)
    if (secMatch) {
      const name = normalizeSection(secMatch[1])
      currentSection = name
      if (name && !sections[name]) sections[name] = []
      continue
    }

    if (!currentSection) continue

    // Check if this line starts a question: optional whitespace, number, dot, space
    const qMatch = line.match(/^\s*(\d+)\.\s+(.+)/)
    if (!qMatch) continue

    const qNum = parseInt(qMatch[1])
    let qText = qMatch[2].trim()

    // Read continuation lines until we hit: next question, code fence, section header, or blank line followed by code fence
    while (i + 1 < lines.length) {
      const next = lines[i + 1]
      const trimmed = next.trim()
      if (!trimmed) break // blank line = end of question text
      if (/^\d+\.\s+/.test(trimmed)) break
      if (/^\s*```/.test(next)) break
      if (/^##\s/.test(next)) break
      if (/^###\s/.test(next)) break
      qText += ' ' + trimmed
      i++
    }

    // Now advance past any blank lines to find the SQL answer
    while (i + 1 < lines.length && !lines[i + 1].trim()) i++
    i++

    let answer = ''
    if (i < lines.length && /^\s*```sql/i.test(lines[i])) {
      // Read answer lines until closing fence
      i++
      const ansLines = []
      while (i < lines.length && !/^\s*```/.test(lines[i])) {
        ansLines.push(lines[i])
        i++
      }
      answer = ansLines.join('\n').trim()
    }

    sections[currentSection].push({ id: qNum, question: qText, answer })
  }

  return sections
}

for (const db of dbs) {
  const filePath = join(root, db.file)
  if (!existsSync(filePath)) {
    console.error(`File not found: ${filePath}`)
    continue
  }

  const text = readFileSync(filePath, 'utf-8')
  const schema = extractSchema(text)
  const sections = parse(text)

  const data = {
    name: db.name,
    key: db.key,
    schema,
    total: Object.values(sections).reduce((sum, arr) => sum + arr.length, 0),
    sections,
  }

  const outPath = join(outDir, `${db.key}.json`)
  writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf-8')
  console.log(`✓ ${db.name.padEnd(20)} ${String(data.total).padStart(3)} consultas → ${outPath.replace(root, '.')}`)
}

console.log('\n✅ Extracción completada.')
