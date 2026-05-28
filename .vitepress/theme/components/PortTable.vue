<template>
  <div class="calc-card">
    <div class="controls">
      <input v-model="filter" class="search-input" type="text" placeholder="Buscar por puerto, nombre o protocolo...">
      <div class="filter-btns">
        <button v-for="cat in categories" :key="cat.key" :class="['filter-btn', { active: selectedCat === cat.key }]" @click="selectedCat = cat.key">{{ cat.label }}</button>
      </div>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Puerto</th>
            <th>Protocolo</th>
            <th>Servicio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in filtered" :key="p.port + p.proto">
            <td class="port">{{ p.port }}</td>
            <td><span :class="['proto', p.proto.toLowerCase()]">{{ p.proto }}</span></td>
            <td class="service">{{ p.service }}</td>
            <td class="desc">{{ p.desc }}</td>
          </tr>
          <tr v-if="!filtered.length">
            <td colspan="4" class="no-results">Sin resultados</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="count">Mostrando {{ filtered.length }} de {{ ports.length }} puertos</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const filter = ref('')
const selectedCat = ref('todas')

const categories = [
  { key: 'todas', label: 'Todas' },
  { key: 'web', label: 'Web' },
  { key: 'email', label: 'Email' },
  { key: 'archivos', label: 'Archivos' },
  { key: 'acceso', label: 'Acceso remoto' },
  { key: 'dns', label: 'DNS/DHCP' },
  { key: 'seguridad', label: 'Seguridad' },
  { key: 'bases', label: 'Bases de datos' },
  { key: 'red', label: 'Red' },
  { key: 'otros', label: 'Otros' },
]

const ports = [
  { port: 7, proto: 'TCP/UDP', service: 'Echo', desc: 'Protocolo de eco (ping de servicio)', cat: 'red' },
  { port: 20, proto: 'TCP', service: 'FTP-data', desc: 'FTP — transferencia de datos', cat: 'archivos' },
  { port: 21, proto: 'TCP', service: 'FTP', desc: 'FTP — control de conexión', cat: 'archivos' },
  { port: 22, proto: 'TCP', service: 'SSH', desc: 'Secure Shell — acceso remoto seguro', cat: 'acceso' },
  { port: 23, proto: 'TCP', service: 'Telnet', desc: 'Acceso remoto no cifrado', cat: 'acceso' },
  { port: 25, proto: 'TCP', service: 'SMTP', desc: 'Envío de correo electrónico', cat: 'email' },
  { port: 53, proto: 'TCP/UDP', service: 'DNS', desc: 'Resolución de nombres de dominio', cat: 'dns' },
  { port: 67, proto: 'UDP', service: 'DHCP-server', desc: 'DHCP — servidor', cat: 'dns' },
  { port: 68, proto: 'UDP', service: 'DHCP-client', desc: 'DHCP — cliente', cat: 'dns' },
  { port: 69, proto: 'UDP', service: 'TFTP', desc: 'Transferencia de archivos trivial', cat: 'archivos' },
  { port: 80, proto: 'TCP', service: 'HTTP', desc: 'Web sin cifrar', cat: 'web' },
  { port: 88, proto: 'TCP/UDP', service: 'Kerberos', desc: 'Autenticación de red', cat: 'seguridad' },
  { port: 110, proto: 'TCP', service: 'POP3', desc: 'Recepción de correo', cat: 'email' },
  { port: 111, proto: 'TCP/UDP', service: 'RPC', desc: 'Remote Procedure Call', cat: 'red' },
  { port: 119, proto: 'TCP', service: 'NNTP', desc: 'Grupos de noticias USENET', cat: 'otros' },
  { port: 123, proto: 'UDP', service: 'NTP', desc: 'Sincronización de tiempo', cat: 'red' },
  { port: 135, proto: 'TCP/UDP', service: 'RPC/DCOM', desc: 'Servicios remotos Windows', cat: 'red' },
  { port: 137, proto: 'UDP', service: 'NetBIOS-ns', desc: 'NetBIOS Name Service', cat: 'red' },
  { port: 138, proto: 'UDP', service: 'NetBIOS-dgm', desc: 'NetBIOS Datagram Service', cat: 'red' },
  { port: 139, proto: 'TCP', service: 'NetBIOS-ssn', desc: 'NetBIOS Session Service', cat: 'red' },
  { port: 143, proto: 'TCP', service: 'IMAP', desc: 'Recepción de correo con carpetas', cat: 'email' },
  { port: 161, proto: 'UDP', service: 'SNMP', desc: 'Monitoreo y gestión de red', cat: 'red' },
  { port: 162, proto: 'UDP', service: 'SNMP-trap', desc: 'Alertas SNMP', cat: 'red' },
  { port: 179, proto: 'TCP', service: 'BGP', desc: 'Protocolo de enrutamiento entre AS', cat: 'red' },
  { port: 194, proto: 'TCP', service: 'IRC', desc: 'Internet Relay Chat', cat: 'otros' },
  { port: 389, proto: 'TCP/UDP', service: 'LDAP', desc: 'Directorio de usuarios', cat: 'seguridad' },
  { port: 443, proto: 'TCP', service: 'HTTPS', desc: 'Web cifrada con TLS/SSL', cat: 'web' },
  { port: 445, proto: 'TCP', service: 'SMB', desc: 'Compartir archivos Windows', cat: 'archivos' },
  { port: 464, proto: 'TCP/UDP', service: 'Kerberos-chgpwd', desc: 'Cambio de contraseña Kerberos', cat: 'seguridad' },
  { port: 465, proto: 'TCP', service: 'SMTPS', desc: 'SMTP sobre SSL', cat: 'email' },
  { port: 500, proto: 'UDP', service: 'IKE', desc: 'IPsec — intercambio de claves', cat: 'seguridad' },
  { port: 514, proto: 'UDP', service: 'Syslog', desc: 'Registro de eventos del sistema', cat: 'red' },
  { port: 520, proto: 'UDP', service: 'RIP', desc: 'Protocolo de enrutamiento', cat: 'red' },
  { port: 554, proto: 'TCP/UDP', service: 'RTSP', desc: 'Streaming multimedia', cat: 'otros' },
  { port: 587, proto: 'TCP', service: 'SMTP-submission', desc: 'Envío de correo autenticado', cat: 'email' },
  { port: 585, proto: 'TCP', service: 'IMAPS', desc: 'IMAP sobre SSL (obsoleto)', cat: 'email' },
  { port: 593, proto: 'TCP/UDP', service: 'RPC-over-HTTP', desc: 'RPC sobre HTTP', cat: 'red' },
  { port: 631, proto: 'TCP/UDP', service: 'IPP', desc: 'Internet Printing Protocol', cat: 'otros' },
  { port: 636, proto: 'TCP', service: 'LDAPS', desc: 'LDAP sobre SSL', cat: 'seguridad' },
  { port: 993, proto: 'TCP', service: 'IMAPS', desc: 'IMAP sobre TLS/SSL', cat: 'email' },
  { port: 995, proto: 'TCP', service: 'POP3S', desc: 'POP3 sobre TLS/SSL', cat: 'email' },
  { port: 1025, proto: 'TCP', service: 'RPC', desc: 'Microsoft RPC', cat: 'red' },
  { port: 1080, proto: 'TCP', service: 'SOCKS', desc: 'Proxy SOCKS', cat: 'seguridad' },
  { port: 1194, proto: 'TCP/UDP', service: 'OpenVPN', desc: 'VPN OpenVPN', cat: 'seguridad' },
  { port: 1433, proto: 'TCP', service: 'MSSQL', desc: 'Microsoft SQL Server', cat: 'bases' },
  { port: 1434, proto: 'TCP/UDP', service: 'MSSQL-monitor', desc: 'Monitor de SQL Server', cat: 'bases' },
  { port: 1521, proto: 'TCP', service: 'Oracle DB', desc: 'Base de datos Oracle', cat: 'bases' },
  { port: 1701, proto: 'UDP', service: 'L2TP', desc: 'VPN — Layer 2 Tunneling', cat: 'seguridad' },
  { port: 1723, proto: 'TCP', service: 'PPTP', desc: 'VPN — Point-to-Point Tunneling', cat: 'seguridad' },
  { port: 1812, proto: 'UDP', service: 'RADIUS-auth', desc: 'Autenticación RADIUS', cat: 'seguridad' },
  { port: 1813, proto: 'UDP', service: 'RADIUS-acc', desc: 'Contabilidad RADIUS', cat: 'seguridad' },
  { port: 1863, proto: 'TCP', service: 'MSNP', desc: 'Windows Live Messenger', cat: 'otros' },
  { port: 2049, proto: 'TCP/UDP', service: 'NFS', desc: 'Network File System', cat: 'archivos' },
  { port: 2082, proto: 'TCP', service: 'cPanel', desc: 'cPanel (puerto alternativo)', cat: 'web' },
  { port: 2083, proto: 'TCP', service: 'cPanel SSL', desc: 'cPanel sobre SSL', cat: 'web' },
  { port: 3306, proto: 'TCP', service: 'MySQL', desc: 'Base de datos MySQL / MariaDB', cat: 'bases' },
  { port: 3389, proto: 'TCP/UDP', service: 'RDP', desc: 'Escritorio remoto Windows', cat: 'acceso' },
  { port: 3690, proto: 'TCP', service: 'SVN', desc: 'Apache Subversion (SVN)', cat: 'archivos' },
  { port: 4333, proto: 'TCP', service: 'mSQL', desc: 'Mini SQL', cat: 'bases' },
  { port: 4444, proto: 'TCP/UDP', service: 'Blaster', desc: 'Gusano Blaster / Nullsoft', cat: 'otros' },
  { port: 4500, proto: 'UDP', service: 'IPsec-NAT-T', desc: 'IPsec — traversia NAT', cat: 'seguridad' },
  { port: 5000, proto: 'TCP', service: 'UPnP', desc: 'Universal Plug and Play', cat: 'red' },
  { port: 5060, proto: 'TCP/UDP', service: 'SIP', desc: 'VoIP — Session Initiation Protocol', cat: 'otros' },
  { port: 5061, proto: 'TCP', service: 'SIP-TLS', desc: 'SIP sobre TLS', cat: 'otros' },
  { port: 5222, proto: 'TCP', service: 'XMPP', desc: 'Mensajería Jabber/XMPP', cat: 'otros' },
  { port: 5223, proto: 'TCP', service: 'XMPP-SSL', desc: 'XMPP sobre SSL', cat: 'otros' },
  { port: 5432, proto: 'TCP', service: 'PostgreSQL', desc: 'Base de datos PostgreSQL', cat: 'bases' },
  { port: 5500, proto: 'TCP/UDP', service: 'VNC', desc: 'VNC (servidor)', cat: 'acceso' },
  { port: 5631, proto: 'TCP', service: 'pcAnywhere', desc: 'Symantec pcAnywhere', cat: 'acceso' },
  { port: 5800, proto: 'TCP', service: 'VNC-HTTP', desc: 'VNC sobre HTTP', cat: 'acceso' },
  { port: 5900, proto: 'TCP', service: 'VNC', desc: 'VNC — RFB protocol', cat: 'acceso' },
  { port: 5984, proto: 'TCP', service: 'CouchDB', desc: 'Base de datos CouchDB', cat: 'bases' },
  { port: 6000, proto: 'TCP', service: 'X11', desc: 'Sistema de ventanas X11', cat: 'acceso' },
  { port: 6379, proto: 'TCP', service: 'Redis', desc: 'Base de datos Redis', cat: 'bases' },
  { port: 6443, proto: 'TCP', service: 'Kubernetes API', desc: 'API de Kubernetes (HTTPS)', cat: 'web' },
  { port: 6667, proto: 'TCP', service: 'IRC', desc: 'Internet Relay Chat (común)', cat: 'otros' },
  { port: 6881, proto: 'TCP/UDP', service: 'BitTorrent', desc: 'BitTorrent tracker', cat: 'archivos' },
  { port: 8080, proto: 'TCP', service: 'HTTP-alt', desc: 'Web alternativo (proxy)', cat: 'web' },
  { port: 8086, proto: 'TCP', service: 'InfluxDB', desc: 'Base de datos InfluxDB', cat: 'bases' },
  { port: 8443, proto: 'TCP', service: 'HTTPS-alt', desc: 'Web cifrado alternativo', cat: 'web' },
  { port: 9000, proto: 'TCP', service: 'SonarQube', desc: 'Servidor SonarQube', cat: 'web' },
  { port: 9092, proto: 'TCP', service: 'Kafka', desc: 'Apache Kafka', cat: 'red' },
  { port: 9200, proto: 'TCP', service: 'Elasticsearch', desc: 'API Elasticsearch HTTP', cat: 'bases' },
  { port: 9418, proto: 'TCP', service: 'Git', desc: 'Protocolo Git', cat: 'archivos' },
  { port: 11211, proto: 'TCP/UDP', service: 'Memcached', desc: 'Caché distribuida Memcached', cat: 'bases' },
  { port: 27017, proto: 'TCP', service: 'MongoDB', desc: 'Base de datos MongoDB', cat: 'bases' },
]

const filtered = computed(() => {
  let list = ports
  if (selectedCat.value !== 'todas') {
    list = list.filter(p => p.cat === selectedCat.value)
  }
  if (filter.value.trim()) {
    const q = filter.value.toLowerCase()
    list = list.filter(p =>
      String(p.port).includes(q) ||
      p.service.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    )
  }
  return list
})
</script>

<style scoped>
.calc-card {
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
.table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
table { width: 100%; border-collapse: collapse; font-size: .85rem; }
th, td { padding: .5rem .6rem; text-align: left; border-bottom: 1px solid var(--vp-c-border); color: var(--vp-c-text-1); white-space: nowrap; }
th { font-weight: 600; color: var(--vp-c-text-2); font-size: .8rem; text-transform: uppercase; letter-spacing: .03em; position: sticky; top: 0; background: var(--vp-c-bg-soft); }
td { font-family: monospace; }
td.desc { font-family: system-ui, sans-serif; }
.port { font-weight: 600; color: var(--vp-c-brand-1); }
.proto { display: inline-block; padding: .1rem .4rem; border-radius: 4px; font-size: .75rem; font-weight: 700; }
.proto.tcp { background: #dbeafe; color: #1d4ed8; }
.proto.udp { background: #fef3c7; color: #b45309; }
.proto.tcp-udp { background: #e0e7ff; color: #4338ca; }
[data-theme="dark"] .proto.tcp { background: #1e3a5f; color: #93c5fd; }
[data-theme="dark"] .proto.udp { background: #5c3d0e; color: #fcd34d; }
[data-theme="dark"] .proto.tcp-udp { background: #2e2e5e; color: #a5b4fc; }
.service { font-weight: 600; }
.no-results { text-align: center; padding: 2rem; color: var(--vp-c-text-3); font-family: system-ui, sans-serif; }
.count { margin-top: .8rem; font-size: .8rem; color: var(--vp-c-text-3); text-align: right; }
</style>
