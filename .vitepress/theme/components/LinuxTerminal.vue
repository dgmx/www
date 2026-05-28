<template>
  <div class="terminal-wrap">
    <div class="terminal-bar">
      <span class="terminal-dot red"></span>
      <span class="terminal-dot yellow"></span>
      <span class="terminal-dot green"></span>
      <span class="terminal-title">terminal — usuario@linux:{{ cwd }}</span>
    </div>
    <div ref="outputRef" class="terminal-output">
      <div v-for="(line, i) in lines" :key="i" class="term-line" :class="{ 'cmd-line': line.type === 'cmd', 'err-line': line.type === 'err' }">
        <span v-if="line.type === 'cmd'" class="prompt">{{ promptStr }}</span>
        <span v-html="ansi(line.text)"></span>
      </div>
      <div class="term-line cmd-line">
        <span class="prompt">{{ promptStr }}</span>
        <span class="input-area">
          <input ref="inputRef" v-model="input" class="term-input" @keydown="onKey" autofocus spellcheck="false" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, watch, onMounted } from 'vue'

const outputRef = ref(null)
const inputRef = ref(null)
const input = ref('')
const cwd = ref('/home/usuario')
const lines = ref([])
const history = ref([])
const histIdx = ref(-1)

const promptStr = computed(() => `usuario@linux:${cwd.value}$ `)

const fs = createFS()

const helpText = `Comandos disponibles:
  pwd         — muestra el directorio actual
  ls [dir]    — lista archivos (-l, -a)
  cd [dir]    — cambia de directorio
  cat [file]  — muestra contenido de archivo
  echo [txt]  — muestra texto
  clear       — limpia la terminal
  whoami      — muestra el usuario actual
  hostname    — muestra el nombre del sistema
  date        — muestra fecha y hora
  uname       — información del sistema
  id          — información del usuario
  mkdir [d]   — crea directorio
  rmdir [d]   — elimina directorio vacío
  rm [f]      — elimina archivo
  touch [f]   — crea archivo vacío
  cp [o] [d]  — copia archivo
  mv [o] [d]  — mueve/renombra archivo
  head [f]    — primeras líneas
  tail [f]    — últimas líneas
  wc [f]      — cuenta líneas/palabras/caracteres
  grep [pat] [f] — busca patrón en archivo
  sort [f]    — ordena líneas
  chmod [mod] [f] — cambia permisos
  ps          — lista procesos
  history     — historial de comandos
  help        — muestra esta ayuda
  man [cmd]   — ayuda de un comando
  tree [dir]  — muestra árbol de directorios
  which [cmd] — muestra ruta del comando
  find [d] -name [pat] — busca archivos
  exit        — cierra la sesión (vuelve al inicio)`

function ansi(text) {
  return text.replace(/\x1b\[31m/g, '<span style="color:#ef4444">')
    .replace(/\x1b\[32m/g, '<span style="color:#22c55e">')
    .replace(/\x1b\[33m/g, '<span style="color:#eab308">')
    .replace(/\x1b\[34m/g, '<span style="color:#3b82f6">')
    .replace(/\x1b\[35m/g, '<span style="color:#a855f7">')
    .replace(/\x1b\[36m/g, '<span style="color:#06b6d4">')
    .replace(/\x1b\[0m/g, '</span>')
    .replace(/\x1b\[1m/g, '<span style="font-weight:bold">')
}

// ── Filesystem ──
function createFS() {
  const root = { type: 'dir', name: '', children: {}, perms: 'drwxr-xr-x' }
  const mk = (path, entry) => {
    const parts = path.split('/').filter(Boolean)
    let node = root
    for (const p of parts) {
      if (!node.children[p]) node.children[p] = { type: 'dir', name: p, children: {}, perms: 'drwxr-xr-x' }
      node = node.children[p]
    }
    Object.assign(node, entry)
  }
  const mktxt = (path, content) => {
    const parts = path.split('/').filter(Boolean)
    const name = parts.pop()
    let node = root
    for (const p of parts) {
      if (!node.children[p]) node.children[p] = { type: 'dir', name: p, children: {}, perms: 'drwxr-xr-x' }
      node = node.children[p]
    }
    node.children[name] = { type: 'file', name, content, perms: '-rw-r--r--' }
  }

  mk('/home', {})
  mk('/home/usuario', { perms: 'drwxr-x---' })
  mk('/home/usuario/documentos', {})
  mk('/home/usuario/descargas', {})
  mk('/home/usuario/proyectos', {})
  mk('/home/invitado', { perms: 'drwxr-x---' })
  mk('/etc', {})
  mk('/var', {})
  mk('/var/log', {})
  mk('/var/tmp', {})
  mk('/tmp', {})
  mk('/usr', {})
  mk('/usr/bin', {})
  mk('/usr/local', {})
  mk('/opt', {})
  mk('/root', { perms: 'drwx------' })

  mktxt('/home/usuario/documentos/notas.txt',
    'Apuntes de ASIR - Administración de Sistemas\n========================================\n\n1. Configurar red en Linux\n2. Gestión de usuarios y grupos\n3. Permisos de archivos\n4. Monitorización del sistema\n5. Servicios DHCP y DNS')
  mktxt('/home/usuario/documentos/practica.txt',
    'Práctica: Scripting en Bash\n========================\n\nEjercicio 1: Crear un script que muestre\nla fecha y el usuario actual.\n\nEjercicio 2: Script de backup\nde directorios personales.')
  mktxt('/etc/passwd',
    'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nusuario:x:1000:1000:Usuario:/home/usuario:/bin/bash\ninvitado:x:1001:1001:Invitado:/home/invitado:/bin/bash')
  mktxt('/etc/hostname', 'servidor-asir\n')
  mktxt('/etc/hosts',
    '127.0.0.1\tlocalhost\n127.0.1.1\tservidor-asir\n::1\t\tlocalhost ip6-localhost ip6-loopback')
  mktxt('/etc/resolv.conf',
    'nameserver 8.8.8.8\nnameserver 1.1.1.1\nsearch asir.local')
  mktxt('/etc/shadow',
    'root:!:$6$xyz...:20000:0:99999:7:::\ndaemon:*:20000:0:99999:7:::\nusuario:$6$abc...:20000:0:99999:7:::')
  mktxt('/var/log/syslog',
    'May 15 10:23:45 servidor systemd[1]: Starting Journal Service...\nMay 15 10:23:45 servidor systemd[1]: Started Journal Service.\nMay 15 10:23:46 servidor NetworkManager[789]: dhcp4 (eth0): state changed\nMay 15 10:23:47 servidor sshd[1234]: Accepted publickey for usuario from 192.168.1.100\nMay 15 10:23:48 servidor systemd[1]: Starting daily apt upgrade...\nMay 15 10:23:50 servidor systemd[1]: Started daily apt upgrade.\nMay 15 10:24:00 servidor CRON[1300]: (root) CMD (cd / && run-parts /etc/cron.hourly)')
  mktxt('/var/log/auth.log',
    'May 15 09:15:22 servidor sshd[1100]: Failed password for root from 10.0.0.5\nMay 15 09:15:25 servidor sshd[1100]: Failed password for root from 10.0.0.5\nMay 15 09:15:28 servidor sshd[1100]: Failed password for root from 10.0.0.5\nMay 15 09:15:30 servidor sshd[1100]: Connection closed by authenticating user root\nMay 15 10:23:47 servidor sshd[1234]: Accepted publickey for usuario from 192.168.1.100')

  return root
}

// ── Path resolution ──
function resolve(path) {
  if (!path || path === '.') return { node: getNode(cwd.value), path: cwd.value }
  if (path === '..') {
    const parts = cwd.value.split('/').filter(Boolean)
    parts.pop()
    const resolved = '/' + parts.join('/')
    return { node: getNode(resolved), path: resolved }
  }
  if (path === '~') return { node: getNode('/home/usuario'), path: '/home/usuario' }
  const isAbs = path.startsWith('/')
  const full = isAbs ? path : (cwd.value === '/' ? '/' + path : cwd.value + '/' + path)
  const parts = full.split('/').filter(Boolean)
  const resolved = []
  for (const p of parts) {
    if (p === '..') resolved.pop()
    else if (p !== '.') resolved.push(p)
  }
  const finalPath = '/' + resolved.join('/')
  return { node: getNode(finalPath), path: finalPath }
}

function getNode(path) {
  const parts = path.split('/').filter(Boolean)
  let node = fs
  for (const p of parts) {
    if (!node.children[p]) return null
    node = node.children[p]
  }
  return node
}

function listDir(node) {
  return Object.entries(node.children || {}).sort(([a], [b]) => a.localeCompare(b))
}

// ── Command handlers ──
function handleCommand(cmd) {
  if (!cmd.trim()) return
  lines.value.push({ type: 'cmd', text: cmd })
  history.value.push(cmd)
  histIdx.value = -1

  const parts = parseArgs(cmd)
  const prog = parts[0]
  const args = parts.slice(1)
  const out = exec(prog, args)
  if (out) lines.value.push({ type: 'out', text: out })

  input.value = ''
}

function parseArgs(s) {
  const args = []
  let i = 0
  while (i < s.length) {
    if (/\s/.test(s[i])) { i++; continue }
    if (s[i] === "'" || s[i] === '"') {
      const q = s[i]
      let j = i + 1
      while (j < s.length && s[j] !== q) j++
      args.push(s.substring(i + 1, j))
      i = j + 1
    } else {
      let j = i
      while (j < s.length && !/\s/.test(s[j])) j++
      args.push(s.substring(i, j))
      i = j
    }
  }
  return args
}

function exec(prog, args) {
  switch (prog) {
    case 'pwd': return cwd.value
    case 'ls': return cmd_ls(args)
    case 'cd': return cmd_cd(args)
    case 'cat': return cmd_cat(args)
    case 'echo': return args.join(' ')
    case 'clear': lines.value = []; return ''
    case 'whoami': return 'usuario'
    case 'hostname': return 'servidor-asir'
    case 'date': return new Date().toLocaleString('es-ES', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' })
    case 'uname': {
      if (args[0] === '-a') return 'Linux servidor-asir 6.8.0-amd64 #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux'
      return 'Linux'
    }
    case 'id': return 'uid=1000(usuario) gid=1000(usuario) groups=1000(usuario),4(adm),27(sudo)'
    case 'mkdir': return cmd_mkdir(args)
    case 'rmdir': return cmd_rmdir(args)
    case 'rm': return cmd_rm(args)
    case 'touch': return cmd_touch(args)
    case 'cp': return cmd_cp(args)
    case 'mv': return cmd_mv(args)
    case 'head': return cmd_head(args)
    case 'tail': return cmd_tail(args)
    case 'wc': return cmd_wc(args)
    case 'sort': return cmd_sort(args)
    case 'grep': return cmd_grep(args)
    case 'chmod': return cmd_chmod(args)
    case 'ps': return cmd_ps()
    case 'history': return history.value.map((c, i) => `${i + 1}  ${c}`).join('\n')
    case 'help': return helpText
    case 'man': {
      if (!args[0]) return '¿Qué manual quieres? Uso: man [comando]'
      if (args[0] === 'ls') return 'LS(1)  User Commands\n\nNOMBRE\n  ls - lista el contenido de un directorio\n\nSINOPSIS\n  ls [OPCIÓN]... [ARCHIVO]...\n\nOPCIONES\n  -l  formato largo\n  -a  incluye archivos ocultos\n  -la formato largo con ocultos\n\nVéase también: help'
      if (args[0] === 'cat') return 'CAT(1)  User Commands\n\nNOMBRE\n  cat - concatenar archivos y mostrarlos\n\nSINOPSIS\n  cat [ARCHIVO]...\n\nDESCRIPCIÓN\n  Muestra el contenido de uno o varios archivos.'
      if (args[0] === 'grep') return 'GREP(1)  User Commands\n\nNOMBRE\n  grep - busca patrones en archivos\n\nSINOPSIS\n  grep [PATRÓN] [ARCHIVO]\n\nDESCRIPCIÓN\n  Busca líneas que coincidan con el patrón.'
      if (args[0] === 'chmod') return 'CHMOD(1)  User Commands\n\nNOMBRE\n  chmod - cambia los permisos de archivos\n\nSINOPSIS\n  chmod [MODO] [ARCHIVO]\n\nMODO\n  755, 644, u+x, g-w, etc.\n\nVéase también: chmod 777, chmod +x'
      if (args[0] === 'find') return 'FIND(1)  User Commands\n\nNOMBRE\n  find - busca archivos en un directorio\n\nSINOPSIS\n  find [DIR] -name [PATRÓN]\n\nEJEMPLO\n  find /home -name "*.txt"'
      if (args[0] === 'tree') return 'TREE(1)  User Commands\n\nNOMBRE\n  tree - muestra el árbol de directorios\n\nSINOPSIS\n  tree [DIR]'
      return `No hay entrada en el manual para «${args[0]}». Consulta 'help' para la lista de comandos.`
    }
    case 'tree': return cmd_tree(args)
    case 'which': {
      const builtins = ['pwd','ls','cd','cat','echo','clear','whoami','hostname','date','uname','id','mkdir','rmdir','rm','touch','cp','mv','head','tail','wc','sort','grep','chmod','ps','history','help','man','tree','which','find','exit']
      if (builtins.includes(args[0])) return `/usr/bin/${args[0]}`
      return `${args[0]} not found`
    }
    case 'find': return cmd_find(args)
    case 'exit': return 'Sesión cerrada. Recarga la página para empezar de nuevo.'
    default: return `\x1b[31m${prog}: comando no encontrado\x1b[0m`
  }
}

function cmd_ls(args) {
  const long = args.includes('-l') || args.includes('-la') || args.includes('-al')
  const all = args.includes('-a') || args.includes('-la') || args.includes('-al')
  const dirArg = args.filter(a => !a.startsWith('-'))[0]
  const { node, path } = dirArg ? resolve(dirArg) : { node: getNode(cwd.value), path: cwd.value }
  if (!node || node.type !== 'dir') return `\x1b[31mls: no se puede acceder a '${dirArg || path}': No existe el archivo o directorio\x1b[0m`

  const entries = listDir(node)
  if (!all) {
    // filter out hidden
    const filtered = entries.filter(([name]) => !name.startsWith('.'))
    if (long) return filtered.map(([name, n]) => `${n.perms || 'drwxr-xr-x'} ${name}`).join('\n')
    return filtered.map(([name]) => name).join('  ')
  }

  const dots = [{ dot: true, name: '.' }, { dot: true, name: '..' }]
  const rendered = entries.map(([name, n]) => ({ dot: name.startsWith('.'), name, node: n }))
  const display = [...rendered]
  if (long) {
    const items = display.map(e => `${e.node.perms || '-rw-r--r--'} ${e.name}`)
    if (path !== '/') {
      items.unshift('drwxr-xr-x .')
      items.unshift('drwxr-xr-x ..')
    } else {
      items.unshift('drwxr-xr-x .')
    }
    return items.join('\n')
  }
  const names = display.map(e => e.name)
  if (path !== '/') { names.unshift('.'); names.unshift('..') }
  else { names.unshift('.') }
  return names.join('  ')
}

function cmd_cd(args) {
  if (!args[0] || args[0] === '~') { cwd.value = '/home/usuario'; return '' }
  if (args[0] === '/') { cwd.value = '/'; return '' }
  const { node, path } = resolve(args[0])
  if (!node || node.type !== 'dir') return `\x1b[31mcd: ${args[0]}: No existe el archivo o directorio\x1b[0m`
  cwd.value = path
  return ''
}

function cmd_cat(args) {
  if (!args[0]) return ''
  const { node } = resolve(args[0])
  if (!node) return `\x1b[31mcat: ${args[0]}: No existe el archivo o directorio\x1b[0m`
  if (node.type !== 'file') return `\x1b[31mcat: ${args[0]}: Es un directorio\x1b[0m`
  return node.content || ''
}

function cmd_mkdir(args) {
  if (!args[0]) return `\x1b[31mmkdir: falta operando\x1b[0m`
  const { node, path: parentPath } = resolve(args[0].split('/').slice(0, -1).join('/') || '.')
  if (!node || node.type !== 'dir') return `\x1b[31mmkdir: no se puede crear '${args[0]}': No existe el archivo o directorio\x1b[0m`
  const name = args[0].split('/').filter(Boolean).pop()
  if (node.children[name]) return `\x1b[31mmkdir: no se puede crear '${args[0]}': El archivo ya existe\x1b[0m`
  node.children[name] = { type: 'dir', name, children: {}, perms: 'drwxr-xr-x' }
  return ''
}

function cmd_rmdir(args) {
  if (!args[0]) return `\x1b[31mrmdir: falta operando\x1b[0m`
  const { node, path } = resolve(args[0])
  if (!node) return `\x1b[31mrmdir: '${args[0]}': No existe el archivo o directorio\x1b[0m`
  if (node.type !== 'dir') return `\x1b[31mrmdir: '${args[0]}': No es un directorio\x1b[0m`
  if (Object.keys(node.children).length) return `\x1b[31mrmdir: '${args[0]}': El directorio no está vacío\x1b[0m`
  const parent = getNode(path.split('/').slice(0, -1).join('/') || '/')
  delete parent.children[node.name]
  return ''
}

function cmd_rm(args) {
  const force = args.includes('-rf') || args.includes('-fr') || args.includes('-r')
  const targets = args.filter(a => !a.startsWith('-'))
  if (!targets.length) return `\x1b[31mrm: falta operando\x1b[0m`
  for (const t of targets) {
    const { node, path } = resolve(t)
    if (!node) {
      if (!force) return `\x1b[31mrm: no se puede eliminar '${t}': No existe el archivo o directorio\x1b[0m`
      continue
    }
    const parent = getNode(path.split('/').slice(0, -1).join('/') || '/')
    delete parent.children[node.name]
  }
  return ''
}

function cmd_touch(args) {
  if (!args[0]) return ''
  const { node: parent, path: parentPath } = resolve(args[0].split('/').slice(0, -1).join('/') || '.')
  const name = args[0].split('/').filter(Boolean).pop()
  if (parent.children[name]) return ''
  parent.children[name] = { type: 'file', name, content: '', perms: '-rw-r--r--' }
  return ''
}

function cmd_cp(args) {
  if (args.length < 2) return `\x1b[31mcp: falta operando\x1b[0m`
  const src = resolve(args[0])
  if (!src.node || src.node.type !== 'file') return `\x1b[31mcp: '${args[0]}': No existe el archivo\x1b[0m`
  const dstPath = args[1].split('/').filter(Boolean)
  const dstName = dstPath.pop()
  const { node: dstParent } = resolve(dstPath.join('/') || '.')
  if (!dstParent || dstParent.type !== 'dir') return `\x1b[31mcp: '${args[1]}': No se puede copiar allí\x1b[0m`
  dstParent.children[dstName] = { type: 'file', name: dstName, content: src.node.content, perms: src.node.perms }
  return ''
}

function cmd_mv(args) {
  if (args.length < 2) return `\x1b[31mmv: falta operando\x1b[0m`
  const src = resolve(args[0])
  if (!src.node) return `\x1b[31mmv: '${args[0]}': No existe\x1b[0m`
  const dstPath = args[1].split('/').filter(Boolean)
  const dstName = dstPath.pop()
  const { node: dstParent } = resolve(dstPath.join('/') || '.')
  if (!dstParent || dstParent.type !== 'dir') return `\x1b[31mmv: '${args[1]}': No se puede mover allí\x1b[0m`
  dstParent.children[dstName] = { ...src.node, name: dstName }
  const srcParent = getNode(src.path.split('/').slice(0, -1).join('/') || '/')
  delete srcParent.children[src.node.name]
  return ''
}

function cmd_head(args) {
  const nIdx = args.findIndex(a => a.startsWith('-n'))
  const n = nIdx >= 0 ? parseInt(args[nIdx + 1]) || 10 : 10
  const fileArg = args.filter((a, i) => !a.startsWith('-') && (nIdx < 0 || (i !== nIdx && i !== nIdx + 1)))[0]
  if (!fileArg) return ''
  const { node } = resolve(fileArg)
  if (!node || node.type !== 'file') return `\x1b[31mhead: '${fileArg}': No existe\x1b[0m`
  return (node.content || '').split('\n').slice(0, n).join('\n')
}

function cmd_tail(args) {
  const nIdx = args.findIndex(a => a.startsWith('-n'))
  const n = nIdx >= 0 ? parseInt(args[nIdx + 1]) || 10 : 10
  const fileArg = args.filter((a, i) => !a.startsWith('-') && (nIdx < 0 || (i !== nIdx && i !== nIdx + 1)))[0]
  if (!fileArg) return ''
  const { node } = resolve(fileArg)
  if (!node || node.type !== 'file') return `\x1b[31mtail: '${fileArg}': No existe\x1b[0m`
  const lines = (node.content || '').split('\n')
  return lines.slice(-n).join('\n')
}

function cmd_wc(args) {
  if (!args[0]) return ''
  const { node } = resolve(args[0])
  if (!node || node.type !== 'file') return `\x1b[31mwc: '${args[0]}': No existe\x1b[0m`
  const lines = (node.content || '').split('\n')
  const words = (node.content || '').split(/\s+/).filter(Boolean).length
  const chars = (node.content || '').length
  return `${lines.length} ${words} ${chars} ${args[0]}`
}

function cmd_sort(args) {
  if (!args[0]) return ''
  const { node } = resolve(args[0])
  if (!node || node.type !== 'file') return `\x1b[31msort: '${args[0]}': No existe\x1b[0m`
  return (node.content || '').split('\n').sort().join('\n')
}

function cmd_grep(args) {
  const ignoreCase = args.includes('-i') || args.includes('-vi')
  const invert = args.includes('-v') || args.includes('-vi')
  const pattern = args.find(a => !a.startsWith('-'))
  const fileArg = args.filter((a, i) => a !== pattern && !a.startsWith('-'))[0]
  if (!pattern || !fileArg) return `\x1b[31mgrep: uso: grep [patrón] [archivo]\x1b[0m`
  const { node } = resolve(fileArg)
  if (!node || node.type !== 'file') return `\x1b[31mgrep: '${fileArg}': No existe\x1b[0m`
  const lines = (node.content || '').split('\n')
  const flags = ignoreCase ? 'i' : ''
  let re
  try { re = new RegExp(pattern, flags) } catch { return `\x1b[31mgrep: patrón inválido\x1b[0m` }
  const matches = lines.filter(l => invert ? !re.test(l) : re.test(l))
  return matches.join('\n')
}

function cmd_chmod(args) {
  if (args.length < 2) return `\x1b[31mchmod: falta operando\x1b[0m`
  const mode = args[0]
  const { node } = resolve(args[1])
  if (!node) return `\x1b[31mchmod: '${args[1]}': No existe\x1b[0m`
  if (/^\d{3}$/.test(mode)) {
    node.perms = (node.type === 'dir' ? 'd' : '-') + permStr(parseInt(mode[0])) + permStr(parseInt(mode[1])) + permStr(parseInt(mode[2]))
  } else if (mode === '+x') {
    const base = node.perms.slice(1, 4)
    node.perms = (node.type === 'dir' ? 'd' : '-') + setX(base) + node.perms.slice(4)
  }
  return ''
}

function permStr(n) {
  const r = n & 4 ? 'r' : '-'
  const w = n & 2 ? 'w' : '-'
  const x = n & 1 ? 'x' : '-'
  return r + w + x
}
function setX(s) { return s[0] + s[1] + 'x' }

function cmd_ps() {
  const procs = [
    'PID TTY          TIME CMD',
    '1   ?        00:00:02 systemd',
    '2   ?        00:00:00 kthreadd',
    '789 ?        00:00:01 NetworkManager',
    '800 ?        00:00:00 dhclient',
    '812 ?        00:00:00 sshd',
    '900 ?        00:00:00 cron',
    '1000 pts/0   00:00:00 bash',
    '1001 pts/0   00:00:00 ps',
  ]
  return procs.join('\n')
}

function cmd_tree(args) {
  const dirArg = args[0]
  const { node, path } = dirArg ? resolve(dirArg) : { node: getNode(cwd.value), path: cwd.value }
  if (!node || node.type !== 'dir') return `\x1b[31mtree: '${dirArg}': No existe\x1b[0m`
  return printTree(node, '') || path
}

function printTree(node, prefix) {
  const entries = listDir(node).filter(([name]) => !name.startsWith('.'))
  let result = ''
  for (let i = 0; i < entries.length; i++) {
    const [name, child] = entries[i]
    const isLast = i === entries.length - 1
    const connector = isLast ? '└── ' : '├── '
    result += prefix + connector + name + '\n'
    if (child.type === 'dir') {
      const childPrefix = prefix + (isLast ? '    ' : '│   ')
      result += printTree(child, childPrefix)
    }
  }
  return result
}

function cmd_find(args) {
  const dirIdx = args.findIndex(a => !a.startsWith('-'))
  const dir = dirIdx >= 0 ? args[dirIdx] : '.'
  const nameIdx = args.indexOf('-name')
  let pattern = nameIdx >= 0 ? args[nameIdx + 1] : '*'
  pattern = pattern.replace(/\*/g, '.*')
  const re = new RegExp('^' + pattern + '$', 'i')
  const { node } = resolve(dir)
  if (!node || node.type !== 'dir') return `\x1b[31mfind: '${dir}': No existe\x1b[0m`

  const results = []
  function walk(n, p) {
    for (const [name, child] of Object.entries(n.children || {})) {
      const fullPath = p + '/' + name
      if (re.test(name)) results.push(fullPath)
      if (child.type === 'dir') walk(child, fullPath)
    }
  }
  walk(node, dir === '.' ? cwd.value : dir)
  return results.join('\n')
}

// ── Input handling ──
let pendingCmd = ''

function onKey(e) {
  if (e.key === 'Enter') {
    if (pendingCmd) {
      handleCommand(pendingCmd)
      pendingCmd = ''
    } else {
      handleCommand(input.value)
    }
    nextTick(() => scrollDown())
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (history.value.length === 0) return
    if (histIdx.value === -1) { pendingCmd = input.value; histIdx.value = history.value.length - 1 }
    else if (histIdx.value > 0) histIdx.value--
    input.value = history.value[histIdx.value]
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (histIdx.value === -1) return
    histIdx.value++
    if (histIdx.value >= history.value.length) { histIdx.value = -1; input.value = pendingCmd; pendingCmd = '' }
    else input.value = history.value[histIdx.value]
  }
}

function scrollDown() {
  nextTick(() => {
    if (outputRef.value) outputRef.value.scrollTop = outputRef.value.scrollHeight
  })
}

onMounted(() => {
  lines.value.push({ type: 'out', text: '\x1b[32mBienvenido al terminal Linux simulado\x1b[0m' })
  lines.value.push({ type: 'out', text: 'Escribe \x1b[33mhelp\x1b[0m para ver los comandos disponibles.\n' })
  nextTick(() => inputRef.value?.focus())
})

watch(inputRef, (el) => el?.focus())
</script>

<style scoped>
.terminal-wrap {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--vp-c-border);
  margin: 1rem 0;
}
.terminal-bar {
  background: #2d2d2d;
  padding: .5rem .8rem;
  display: flex;
  align-items: center;
  gap: .4rem;
}
.terminal-dot { width: 10px; height: 10px; border-radius: 50%; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }
.terminal-title {
  margin-left: auto;
  font-size: .8rem;
  color: #aaa;
  font-family: system-ui, sans-serif;
}
.terminal-output {
  background: #1a1a2e;
  padding: 1rem;
  height: 420px;
  overflow-y: auto;
  font-family: 'JetBrains Mono', 'Cascadia Code', 'Fira Code', 'Consolas', monospace;
  font-size: .88rem;
  line-height: 1.5;
}
.terminal-output::-webkit-scrollbar { width: 6px; }
.terminal-output::-webkit-scrollbar-track { background: transparent; }
.terminal-output::-webkit-scrollbar-thumb { background: #444; border-radius: 3px; }
.term-line { white-space: pre-wrap; word-break: break-all; margin-bottom: 2px; }
.term-line.cmd-line { color: #e0e0e0; }
.term-line.err-line { color: #ef4444; }
.term-line.out-line { color: #d4d4d4; }
.term-line { color: #d4d4d4; }
.prompt { color: #22c55e; margin-right: .3rem; user-select: none; }
.input-area { flex: 1; }
.term-input {
  background: transparent;
  border: none;
  color: #e0e0e0;
  font: inherit;
  outline: none;
  width: 100%;
  caret-color: #22c55e;
  padding: 0;
}
.term-line:last-child { display: flex; align-items: center; }
</style>
