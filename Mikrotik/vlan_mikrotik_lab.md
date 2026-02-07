---
title: 3. MikroTik VLAN Lab
parent: "MikroTik"
---

# Laboratorio Práctico -- Configuración de VLAN en MikroTik (RouterOS)

## 1. Objetivo del laboratorio

Al finalizar este laboratorio, el estudiante será capaz de:

- Comprender el concepto de VLAN
- Configurar VLANs usando Bridge con VLAN Filtering
- Separar tráfico por VLAN
- Asignar IPs por VLAN
- Configurar DHCP por VLAN
- Verificar aislamiento entre redes

## 2. Conceptos clave

- **VLAN (802.1Q)**: Segmentación lógica de red en una misma infraestructura física
- **Tagged:** Tráfico con etiqueta VLAN
- **Untagged:** Tráfico sin etiqueta (PVID)
- **PVID**: VLAN por defecto de un puerto
- **Access Port**: Puerto untagged de una VLAN
- **Trunk Port**: Puerto que transporta múltiples VLAN (tagged)

## 3. Escenario de red

### 3.1 Topología

```bash
                    (Trunk)
                 ┌────────────┐
                 │   MikroTik │
                 └─────┬──────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
     VLAN10          VLAN20         VLAN30
    (Ventas)       (IT)           (Invitados)
```

### 3.2 VLANs y direccionamiento

| VLAN  | Nombre    | Dirección IP      | Puerto |
|-------|-----------|-------------------|--------|
| 10    | Ventas    | 192.168.10.1/24   | ether2 |
| 20    | IT        | 192.168.20.1/24   | ether3 |
| 30    | Invitados | 192.168.30.1/24   | ether4 |
| Trunk | Switch/Router | Tagged         | ether1 |

## 4. Requisitos

- Router MikroTik (RouterOS v7 recomendado)
- WinBox
- 3 PCs o VMs
- (Opcional) Switch administrable

## 5. Preparación inicial

Resetear configuración:

```bash
/system reset-configuration no-defaults=yes
```

Acceder por WinBox usando MAC Address.

## 6. Renombrar interfaces

```bash
/interface ethernet
set ether1 name=TRUNK
set ether2 name=VLAN10_VENTAS
set ether3 name=VLAN20_IT
set ether4 name=VLAN30_GUEST
```

## 7. Crear Bridge

```bash
/interface bridge add name=bridgeLAN vlan-filtering=no
```

Agregar puertos:

```bash
/interface bridge port
add bridge=bridgeLAN interface=TRUNK
add bridge=bridgeLAN interface=VLAN10_VENTAS pvid=10
add bridge=bridgeLAN interface=VLAN20_IT pvid=20
add bridge=bridgeLAN interface=VLAN30_GUEST pvid=30
```

## 8. Definir VLANs

```bash
/interface bridge vlan
add bridge=bridgeLAN vlan-ids=10 tagged=bridgeLAN,TRUNK untagged=VLAN10_VENTAS
add bridge=bridgeLAN vlan-ids=20 tagged=bridgeLAN,TRUNK untagged=VLAN20_IT
add bridge=bridgeLAN vlan-ids=30 tagged=bridgeLAN,TRUNK untagged=VLAN30_GUEST
```

## 9. Activar VLAN Filtering

```bash
/interface bridge set bridgeLAN vlan-filtering=yes
```

## 10. Crear interfaces VLAN

```bash
/interface vlan
add name=vlan10 interface=bridgeLAN vlan-id=10
add name=vlan20 interface=bridgeLAN vlan-id=20
add name=vlan30 interface=bridgeLAN vlan-id=30
```

## 11. Asignar direcciones IP

```bash
/ip address
add address=192.168.10.1/24 interface=vlan10
add address=192.168.20.1/24 interface=vlan20
add address=192.168.30.1/24 interface=vlan30
```

## 12. Configurar DHCP por VLAN

### VLAN 10

```bash
/ip pool add name=pool10 ranges=192.168.10.100-192.168.10.200
/ip dhcp-server add name=dhcp10 interface=vlan10 address-pool=pool10
/ip dhcp-server network add address=192.168.10.0/24 gateway=192.168.10.1
```

### VLAN 20

```bash
/ip pool add name=pool20 ranges=192.168.20.100-192.168.20.200
/ip dhcp-server add name=dhcp20 interface=vlan20 address-pool=pool20
/ip dhcp-server network add address=192.168.20.0/24 gateway=192.168.20.1
```

### VLAN 30

```bash
/ip pool add name=pool30 ranges=192.168.30.100-192.168.30.200
/ip dhcp-server add name=dhcp30 interface=vlan30 address-pool=pool30
/ip dhcp-server network add address=192.168.30.0/24 gateway=192.168.30.1
```

## 13. Pruebas de conectividad

- Verificar IP por DHCP
- Ping al gateway
- Verificar aislamiento entre VLANs

Desde Mikrotik:

```bash
/ip dhcp-server lease print
```

## 14. Desafíos

- Bloquear VLAN30 hacia VLAN10 y VLAN20
- Permitir acceso total solo a VLAN20

Ejemplo

```bash
/ip firewall filter
add chain=input in-interface=vlan30 action=drop
```
