---
title: 9. Networking Linux
parent: "Linux"
---

# Configuración de red en Linux

**Tabla de contenidos**

1. Networkd y Network Manager
2. Configuración de la interfaz
   1. Neplan
   2. ifupdown
   3. Network directo
3. Diferencias entre sistemas Debian, ubuntu y Enterprise

## 1. Networkd y Network Manager

### Networkd

En Linux, **networkd** normalmente se refiere a `systemd-networkd`, un servicio de systemd encargado de la configuración de red de bajo nivel (interfaces, direcciones IP, rutas, VLANs, bridges, bonding, etc.). Es común en servidores y sistemas minimalistas donde no se usa _NetworkManager_.

Características principales:

- Configuración declarativa mediante archivos .network, .netdev y .link
- Soporte para:
  - DHCP (IPv4 / IPv6)
  - IP estática
  - VLAN
  - Bridges
  - Bonds (LACP)
  - Túneles
  - Bajo consumo de recursos (más ligero que NetworkManager)

#### Archivos de configuración

Ubicación típica:

```bash
/etc/systemd/network/
```

Tipos:

- `*.network` → configuración IP de la interfaz
- `*.netdev` → dispositivos virtuales (bridge, vlan, bond)
- `*.link` → ajustes de hardware / nombre de interfaz

#### Ejemplo: IP estática

Archivo:

```bash
/etc/systemd/network/20-eth0.network
```

Contenido:

```bash
[Match]
Name=eth0

[Network]
Address=192.168.1.10/24
Gateway=192.168.1.1
DNS=8.8.8.8
```

#### Comandos básicos

Activar servicio:

```bash
sudo systemctl enable systemd-networkd
sudo systemctl start systemd-networkd
```

Estado:

```bash
networkctl
```

Ver detalles:

```bash
networkctl status eth0
```

Reiniciar:

```bash
sudo systemctl restart systemd-networkd
```

## NetworkManager

**NetworkManager (NM)** es un daemon de gestión de red de alto nivel que configura interfaces dinámicamente y mantiene perfiles de conexión. 

Es el estándar en:

- RHEL, Rocky, Alma y Oracle Linux (server y desktop).
- Debian y Ubuntu Desktop.
- Muchas distribuciones enterprise.
  
**Características:**

NetworkManager soporta:

- VLAN
- Bridges
- Bonding
- WiFi
- VPN
- 802.1x
- perfiles múltiples
- configuración dinámica según entorno

### Diferencia conceptual con networkd

| NetworkManager | systemd-networkd |
|---|---|
| Orientado a perfiles dinámicos | Orientado a configuración estática |
| Ideal para entornos cambiantes | Ideal para servidores estables |
| Integración GUI completa | CLI puro |
| Muy usado en escritorios | Muy usado en servidores |

## 2. Configuración de la Interfaz

### 2.1 Netplan

**Netplan** es la nueva capa de configuración para `systemd-networkd` desarrollada por Ubuntu, funciona como una relación de frontend → backend.

#### Relación conceptual:

- **Netplan**: capa de configuración declarativa (archivos YAML en `/etc/netplan/`).
- **systemd-networkd**: backend que realmente configura las interfaces en el kernel.
- Netplan genera automáticamente los archivos `.network`, `.netdev`, `etc`., que usa `systemd-networkd`.

También puede usar NetworkManager (GUI) como backend, dependiendo de la configuración.

#### Flujo de funcionamiento

1. Administrador edita:

```bash
/etc/netplan/*.yaml
```

2. Ejecuta:

```bash
sudo netplan apply
```

3. Netplan genera archivos en:

```bash
/run/systemd/network/
```

4. `systemd-networkd` aplica la configuración real de red.

**Ejemplo**

Archivo Netplan:

```bash
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: true
```

Aquí:

- `renderer: networkd` indica que el backend será **systemd-networkd**
- Netplan creará automáticamente los archivos necesarios para networkd

Conclusión:

- `Netplan` = herramienta de configuración (alto nivel)
- `systemd-networkd` = servicio que configura la red (bajo nivel)
- Netplan actúa como **generador de configuración para networkd** (o NetworkManager).

### Cuándo usar Netplan + networkd

Recomendado en la mayoría de sistemas Ubuntu Server modernos.

Ventajas:

- Configuración más simple (YAML legible)
- Integración oficial con Ubuntu
- Fácil automatización (cloud-init, imágenes cloud)
- Permite cambiar fácilmente entre backends (`networkd` o `NetworkManager`)

Escenarios típicos:

- Servidores Ubuntu estándar
- VPS en cloud (AWS, Azure, Hetzner, etc.)
- Sistemas donde varias herramientas automatizadas modifican la red

### Cuándo usar systemd-networkd directamente (sin Netplan)

Útil cuando necesitas control muy fino o sistemas minimalistas.

Ventajas:

- Configuración directa sin capa intermedia
- Menos componentes → menos complejidad

Muy usado en:

- Arch Linux
- Debian minimal
- contenedores
- sistemas embebidos
- servidores altamente optimizados

Escenarios típicos:

- Infraestructura donde tú controlas todo manualmente
- Configuraciones avanzadas de:
  - bridges complejos
  - VLAN múltiples
  - bonding avanzado
  - túneles
- Sistemas donde Netplan no existe o no se desea

### Conclusión:

- **Ubuntu Server estándar** → usar Netplan (renderer: networkd)
- **Distribuciones minimalistas o setups muy técnicos** → usar directamente networkd
- **Entornos desktop** → normalmente NetworkManager

Aunque uses Netplan con `renderer: networkd`, **quien realmente maneja la red sigue siendo systemd-networkd;** Netplan solo genera los archivos automáticamente.

### Manual básico de Netplan (configuración de red en Linux)

Netplan es el sistema de configuración de red usado principalmente en Ubuntu.

Utiliza archivos **YAML** ubicados en:

```bash
/etc/netplan/
```

Después de editar cualquier archivo:

```bash
sudo netplan apply
```

Para probar sin riesgo (revierte si falla):

```bash
sudo netplan try
```

### 1. Estructura básica de un archivo Netplan

Ejemplo mínimo:

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      dhcp4: true
```

**Elementos clave:**

- `version: 2` → formato actual
- `renderer: → backend` (networkd o NetworkManager)
- `ethernets`: → interfaces cableadas
- `wifis`: → WiFi

### 2. Ejemplo DHCP automático

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: true
```

### 3. Ejemplo IP estática

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: false
      addresses:
        - 192.168.1.50/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses:
          - 8.8.8.8
          - 1.1.1.1
```

### 4. Varias interfaces

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: true
    enp0s8:
      dhcp4: false
      addresses:
        - 10.0.0.2/24
```

### 5. Bridge (muy común en virtualización)

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: false

  bridges:
    br0:
      interfaces:
        - enp0s3
      dhcp4: true
```

### 6. WiFi

```yaml
network:
  version: 2
  renderer: NetworkManager
  wifis:
    wlan0:
      dhcp4: true
      access-points:
        "MiWifi":
          password: "clavewifi"
```

### 7. Comandos esenciales

Ver interfaces:

```bash
ip a
```

Probar configuración:

```bash
sudo netplan try
```

Aplicar definitivamente:

```bash
sudo netplan apply
```

Generar archivos backend:

```bash
sudo netplan generate
```

### 8. Buenas prácticas importantes

- Los archivos YAML dependen de la indentación (usar espacios, no tabs).
- Confirmar nombre real de la interfaz con: `ip link`
- Mantener un acceso de consola cuando se cambia la red remota.

[Guia de Configuración How To para Netplan](https://netplan.readthedocs.io/en/stable/howto/)


## Archivos Netplan

En Netplan, cuando existen varios archivos YAML que afectan a la misma interfaz, no existe un concepto de “archivo principal”. Netplan fusiona (merge) todos los archivos en orden lexicográfico por nombre.

### Regla de precedencia

1. Netplan lee todos los archivos de:
/etc/netplan/*.yaml

2. Los procesa en orden alfabético.

3. Las configuraciones del archivo que aparece después sobrescriben los valores anteriores si hay conflicto.

Ejemplo de orden:

```bash
01-netcfg.yaml
50-cloud-init.yaml
99-local.yaml
```

Aquí:

- Primero se aplica `01-netcfg.yaml`
- Luego `50-cloud-init.yaml`
- Finalmente `99-local.yaml` → tiene prioridad final

Ejemplo práctico

Si en:

**50-cloud-init.yaml**

```yaml
ethernets:
  ens18:
    dhcp4: true
```

y en:

**99-local.yaml**

```yaml
ethernets:
  ens18:
    dhcp4: false
    addresses:
      - 192.168.1.10/24
```

El resultado final será **IP estática**, porque el archivo `99-*` se procesa al final.

## Buenas prácticas reales de administración

Usar prefijos numéricos:

- `50-` → configuraciones automáticas (cloud-init)
- `60-70-` → configuraciones del sistema
- `99-` → overrides locales del administrador

No editar archivos generados automáticamente (ej. `50-cloud-init.yaml`); crear un archivo posterior que sobrescriba.

### Cómo ver la configuración final combinada

Muy útil para depuración:

```bash
sudo netplan get
```

o:

```bash
sudo netplan generate
```

y revisar lo generado en:

```bash
/run/systemd/network/
```

## Procedimiento seguro estándar para cambiar una IP remota vía SSH usando Netplan sin perdida de acceso.

La metodología es la siguiente:

- No tocar el archivo existente
- Crear un archivo nuevo con mayor prioridad
- Usar `netplan try`, que revierte automáticamente si pierdes conexión

## Procedimiento

### 1. Ver la configuración actual

```bash
ip a
ip r
ls /etc/netplan
````

Supongamos que existe:

```bash
50-cloud-init.yaml
````

### 2. Crear un archivo override

Ejemplo:

```bash
sudo nano /etc/netplan/99-ip-estatica.yaml
```

Contenido:

```yaml
network:
  version: 2
  ethernets:
    ens18:
      dhcp4: false
      addresses:
        - 192.168.1.50/24
      routes:
        - to: default
          via: 192.168.1.1
      nameservers:
        addresses: [8.8.8.8,1.1.1.1]
```

El prefijo `99-` asegura que esta configuración prevalezca.

### 3. Probar de forma segura

Muy importante:

```bash
sudo netplan try
```

Funcionamiento:

- Aplica la configuración temporalmente
- Espera confirmación en consola (normalmente 120 s)
- Si pierdes conexión SSH, revierte automáticamente

Si todo funciona:

```bash
Press ENTER before timeout to accept the new configuration
```


### 4. Aplicar definitivamente

```bash
sudo netplan apply
```

## Buenas prácticas críticas en producción

- Nunca ejecutar directamente `netplan apply` en servidores remotos críticos.
- Siempre usar `netplan try`.
- Mantener una segunda sesión SSH abierta mientras se cambia la red.
- Usar archivos `99-*` para overrides locales en lugar de modificar los generados por cloud-init.

### Patrón profesional muy usado

Configuración típica en servidores cloud:

- 50-cloud-init.yaml      (DHCP automático inicial)
- 99-static-config.yaml   (configuración final del administrador)