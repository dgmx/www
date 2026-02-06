---
title: 2. MikroTik RouterOS Lab
parent: "Mikrotik"
---

# Laboratorio Práctico -- MikroTik RouterOS

## 1. Objetivo

Al finalizar este laboratorio, el estudiante será capaz de:

- Acceder a RouterOS usando WinBox
- Identificar y configurar interfaces
- Crear un bridge LAN
- Asignar direcciones IP
- Configurar DHCP Server
- Configurar acceso a Internet (NAT)
- Aplicar reglas básicas de firewall
- Verificar conectividad y funcionamiento

## 2. Escenario de red

### 2.1 Topología

```bash
          Internet
              |
        [ Router ISP ]
              |
          (WAN)
        [ MikroTik ]
          |     |
       (LAN)  (LAN)
        PC1    PC2
```

### 2.2 Direccionamiento IP

| Dispositivo | Interfaz | IP              |
| ----------- | -------- | --------------- |
| MikroTik    | WAN      | DHCP (ISP)      |
| MikroTik    | LAN      | 192.168.10.1/24 |
| PC1 / PC2   | LAN      | DHCP            |

## 3. Requisitos

### Hardware / Software

- Router MikroTik (físico, CHR o VM)
- WinBox
- 1 o 2 PCs (o VMs)
- Acceso a Internet (real o simulado)

### Conocimientos previos

- Conceptos básicos de IP
- Uso básico de Windows o Linux

## 4. Preparación inicial

Resetear el router y acceder por WinBox usando MAC Address.

### 4.1 Resetear el router

Para empezar desde cero:

```bash
/system reset-configuration no-defaults=yes
```

⚠️ El router se reiniciará.

### 4.2 Acceder por WinBox

- Abrir WinBox
- Conectarse por MAC Address
- Usuario: `admin`
- Contraseña: `(vacía)`

## 5. Identificación de interfaces

Renombrar interfaces WAN y LAN.

Abrir Interfaces en WinBox o usar terminal:

```bash
/interface print
```

Renombrar interfaces:

```bash
/interface ethernet set ether1 name=WAN
/interface ethernet set ether2 name=LAN1
/interface ethernet set ether3 name=LAN2
```

## 6. Bridge LAN

Crear un bridge y agregar los puertos LAN en un solo dominio de red.

```bash
/interface bridge add name=bridgeLAN
/interface bridge port add bridge=bridgeLAN interface=LAN1
/interface bridge port add bridge=bridgeLAN interface=LAN2
```

## 7. Dirección IP

Asignar IP al bridge LAN (no a los puertos):

```bas
/ip address add address=192.168.10.1/24 interface=bridgeLAN
```

Verificar

```bash
/ip address print
```

## 8. DHCP Server

Configurar DHCP para clientes LAN.

```bash
/ip dhcp-server setup
```

Valores sugeridos:

- Interface: `bridgeLAN`
- DHCP Address Space: `192.168.10.0/24`
- Gateway: `192.168.10.1`
- Pool: `192.168.10.100-192.168.10.200`
- DNS: `8.8.8.8`
- Lease Time: `10m`

Verificar:

```bash
/ip dhcp-server print
/ip dhcp-server lease print
```

## 9. Configurar WAN (Internet)

Configurar DHCP Client en la interfaz WAN.

### 9.1 Cliente DHCP en WAN

(Si el ISP entrega IP automáticamente)

```bash
/ip dhcp-client add interface=WAN disabled=no
```

Verificar:

```bash
/ip dhcp-client print
/ip route print
```

Debe aparecer una ruta por defecto (0.0.0.0/0).

## 10. Configurar NAT

Crear regla masquerade para salida a Internet. Permitir salida a Internet desde LAN:

```bash
/ip firewall nat add chain=srcnat out-interface=WAN action=masquerade
```

## 11. Firewall básico

### 11.1 Permitir conexiones válidas

```bash
/ip firewall filter add chain=input connection-state=established,related action=accept
```

### 11.2 Permitir acceso desde LAN

```bash
/ip firewall filter add chain=input in-interface=bridgeLAN action=accept
```

### 11.3 Bloquear accesos desde WAN

```bash
/ip firewall filter add chain=input in-interface=WAN action=drop
```

📌 El orden es importante: las reglas ACCEPT deben ir antes del DROP.

## 12. DNS

Configurar servidores DNS públicos.

```bash
/ip dns set servers=8.8.8.8,1.1.1.1 allow-remote-requests=yes
```

## 13. Pruebas

Ping desde el router y desde los PCs.

### 13.1 Desde el MikroTik

```bash
/ping 8.8.8.8
/ping google.com
```

### 13.2 Desde un PC

- Verificar IP asignada por DHCP
- Probar:
  - ping `192.168.10.1`
  - ping `8.8.8.8`
  - Navegar por Internet

## 14. Backup

Guardar backup binario y exportación de configuración.

```bash
/system backup save name=lab_basico
/export file=lab_basico
```
