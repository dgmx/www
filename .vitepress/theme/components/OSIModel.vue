<template>
  <div class="calc-card">
    <div class="osi-container">
      <button
        v-for="(layer, i) in layers"
        :key="layer.name"
        :class="['layer-btn', { active: selected === i }]"
        :style="{ '--layer-hue': layer.hue }"
        @click="selected = i"
      >
        <span class="layer-num">{{ 7 - i }}</span>
        <span class="layer-name">{{ layer.name }}</span>
      </button>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="selected !== null" :key="selected" class="layer-detail">
        <div class="detail-header">
          <span class="detail-num">Capa {{ 7 - selected }}: {{ layers[selected].name }}</span>
        </div>

        <div class="detail-section">
          <div class="detail-label">Unidad de datos</div>
          <div class="detail-value">{{ layers[selected].unit }}</div>
        </div>

        <div class="detail-section">
          <div class="detail-label">Función</div>
          <div class="detail-value">{{ layers[selected].funcion }}</div>
        </div>

        <div class="detail-section">
          <div class="detail-label">Protocolos y tecnologías</div>
          <div class="detail-value proto-list">{{ layers[selected].protocolos }}</div>
        </div>

        <div class="detail-section">
          <div class="detail-label">Dispositivos</div>
          <div class="detail-value">{{ layers[selected].dispositivos }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selected = ref(6) // start at Application layer

const layers = [
  {
    name: 'Aplicación',
    hue: 0,
    unit: 'Datos (APDU)',
    funcion: 'Interfaz directa con el usuario. Proporciona servicios de red a las aplicaciones (HTTP, FTP, SMTP, DNS, etc.).',
    protocolos: 'HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP, SSH, Telnet, SNMP, NFS, SIP, XMPP, IRC',
    dispositivos: 'Navegadores, clientes de correo, servidores web',
  },
  {
    name: 'Presentación',
    hue: 30,
    unit: 'Datos (PPDU)',
    funcion: 'Traducción, cifrado y compresión de datos. Convierte el formato de la aplicación a un formato común de red.',
    protocolos: 'SSL/TLS, JPEG, GIF, MPEG, ASCII, Unicode, EBCDIC, MIME',
    dispositivos: 'N/A (implementado en software)',
  },
  {
    name: 'Sesión',
    hue: 60,
    unit: 'Datos (SPDU)',
    funcion: 'Establece, administra y finaliza sesiones entre aplicaciones. Controla el diálogo (quién habla y cuándo).',
    protocolos: 'NetBIOS, RPC, SIP, PPTP, SOCKS, NFS, SQL*Net',
    dispositivos: 'N/A (implementado en software)',
  },
  {
    name: 'Transporte',
    hue: 120,
    unit: 'Segmento (TCP) / Datagrama (UDP)',
    funcion: 'Transporte extremo a extremo confiable o no confiable. Segmentación, control de flujo y recuperación de errores.',
    protocolos: 'TCP, UDP, SCTP, DCCP, SPX',
    dispositivos: 'N/A (implementado en el SO)',
  },
  {
    name: 'Red',
    hue: 190,
    unit: 'Paquete / Datagrama',
    funcion: 'Enrutamiento de paquetes entre redes. Direccionamiento lógico (IP). Fragmentación y reensamblado.',
    protocolos: 'IP (IPv4, IPv6), ICMP, IGMP, ARP, RARP, OSPF, BGP, RIP, IPsec',
    dispositivos: 'Router, router inalámbrico, firewall de capa 3',
  },
  {
    name: 'Enlace de datos',
    hue: 240,
    unit: 'Trama (Frame)',
    funcion: 'Transferencia confiable de datos entre dos nodos adyacentes. Direccionamiento físico (MAC). Detección y corrección de errores.',
    protocolos: 'Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), PPP, HDLC, Frame Relay, ATM, ARP, VLAN (802.1Q)',
    dispositivos: 'Switch, bridge, NIC (tarjeta de red), AP (punto de acceso)',
  },
  {
    name: 'Física',
    hue: 300,
    unit: 'Bits',
    funcion: 'Transmisión de bits a través del medio físico. Define voltajes, frecuencias, conectores y codificación.',
    protocolos: 'Ethernet (10/100/1000BASE-T), DSL, USB, Bluetooth, fibra óptica, RS-232, V.92, DOCSIS',
    dispositivos: 'Hub, repetidor, módem, cable, fibra, conector RJ-45',
  },
]
</script>

<style scoped>
.calc-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
}
.osi-container { display: flex; flex-direction: column; gap: 4px; margin-bottom: 1rem; }
.layer-btn {
  display: flex; align-items: center; gap: .8rem;
  padding: .7rem 1rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  cursor: pointer;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: .9rem;
  font-weight: 500;
  transition: all .15s;
  text-align: left;
  width: 100%;
}
.layer-btn:hover { background: var(--vp-c-bg-soft); border-left: 4px solid color-mix(in srgb, hsl(var(--layer-hue), 70%, 50%), #888); }
.layer-btn.active { background: hsl(var(--layer-hue), 60%, 90%); border-left: 4px solid hsl(var(--layer-hue), 70%, 45%); color: #000; }
[data-theme="dark"] .layer-btn.active { background: hsl(var(--layer-hue), 30%, 15%); border-left: 4px solid hsl(var(--layer-hue), 60%, 50%); color: var(--vp-c-text-1); }
.layer-num {
  display: flex; align-items: center; justify-content: center;
  width: 2rem; height: 2rem; border-radius: 6px;
  background: hsl(var(--layer-hue), 70%, 45%);
  color: #fff; font-weight: 700; font-size: .9rem;
  flex-shrink: 0;
}
[data-theme="dark"] .layer-num { background: hsl(var(--layer-hue), 50%, 30%); color: #ddd; }
.layer-name { font-weight: 600; }

.layer-detail {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1rem;
  background: var(--vp-c-bg);
}
.detail-header { font-size: 1.1rem; font-weight: 700; color: var(--vp-c-brand-1); margin-bottom: 1rem; }
.detail-section { margin-bottom: .8rem; }
.detail-section:last-child { margin-bottom: 0; }
.detail-label { font-size: .8rem; font-weight: 600; color: var(--vp-c-text-3); text-transform: uppercase; letter-spacing: .03em; margin-bottom: .2rem; }
.detail-value { font-size: .95rem; color: var(--vp-c-text-1); line-height: 1.5; }
.proto-list { font-family: monospace; font-size: .88rem; }

.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
