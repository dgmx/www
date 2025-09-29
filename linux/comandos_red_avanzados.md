---
title: 2. Comandos de red Linux
parent: "Linux"
---


# 🌐 **Comandos Avanzados de Administración de Red en Linux**

## 1. **Configuración de interfaces de red** 🖧
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `ip a` | Muestra interfaces y direcciones IP. | `ip a` |
| `ip link set` | Activa o desactiva una interfaz. | `sudo ip link set eth0 up` |
| `ip addr add` | Asigna una IP a una interfaz. | `sudo ip addr add 192.168.1.50/24 dev eth0` |
| `ip route` | Muestra o modifica rutas de red. | `ip route show` |
| `ip route add` | Añade una nueva ruta. | `sudo ip route add 10.0.0.0/24 via 192.168.1.1` |
| `ethtool` | Muestra y ajusta parámetros de una tarjeta de red. | `sudo ethtool eth0` |
| `nmcli` | Configura redes con **NetworkManager**. | `nmcli device status` |

---

## 2. **Diagnóstico de conectividad** 🔍
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `ping` | Verifica la conectividad a un host. | `ping 8.8.8.8` |
| `traceroute` | Muestra la ruta que siguen los paquetes hasta el destino. | `traceroute google.com` |
| `mtr` | Combina `ping` y `traceroute` en tiempo real. | `mtr 8.8.8.8` |
| `dig` | Consulta información DNS. | `dig google.com` |
| `nslookup` | Alternativa a `dig` para consultas DNS. | `nslookup openai.com` |
| `arp -n` | Muestra la tabla ARP (IP ↔ MAC). | `arp -n` |
| `tcpdump` | Captura y analiza tráfico de red en tiempo real. | `sudo tcpdump -i eth0 port 80` |
| `iftop` | Muestra uso de ancho de banda en tiempo real. | `sudo iftop` |
| `iperf3` | Mide velocidad y rendimiento de la red. | `iperf3 -c 192.168.1.10` |

---

## 3. **Monitoreo de puertos y servicios** 🕵️‍♂️
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `ss -tulnp` | Muestra puertos abiertos y procesos asociados. | `sudo ss -tulnp` |
| `netstat -tulnp` *(obsoleto)* | Versión clásica de `ss`. | `sudo netstat -tulnp` |
| `lsof -i` | Lista procesos que usan red y puertos. | `sudo lsof -i :80` |
| `nmap` | Escanea red o puertos abiertos. | `nmap 192.168.1.0/24` |
| `watch` | Monitorea comandos en tiempo real. | `watch ss -tulnp` |

---

## 4. **Gestión de Firewall (iptables/nftables)** 🔥
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `iptables -L -v` | Lista reglas activas de firewall. | `sudo iptables -L -v` |
| `iptables -A INPUT` | Añade regla para permitir tráfico. | `sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT` |
| `iptables -D INPUT` | Elimina una regla. | `sudo iptables -D INPUT 1` |
| `iptables-save` | Exporta reglas actuales. | `sudo iptables-save > backup.rules` |
| `nft list ruleset` | Lista reglas de **nftables**. | `sudo nft list ruleset` |
| `ufw status` | Estado del firewall simplificado (**UFW**). | `sudo ufw status` |
| `ufw allow` | Permite tráfico en un puerto específico. | `sudo ufw allow 443/tcp` |

---

## 5. **Pruebas y simulación de tráfico** 📡
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `iperf3 -s` | Inicia un servidor de prueba de velocidad. | `iperf3 -s` |
| `iperf3 -c` | Cliente para probar velocidad contra el servidor. | `iperf3 -c 192.168.1.20` |
| `tc qdisc add` | Simula latencia y pérdida de paquetes. | `sudo tc qdisc add dev eth0 root netem delay 200ms loss 10%` |
| `tc qdisc del` | Elimina configuración de simulación. | `sudo tc qdisc del dev eth0 root` |
| `nload` | Muestra tráfico entrante y saliente en tiempo real. | `sudo nload` |

---

## 6. **Administración de DNS y resolución de nombres** 🌍
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `dig` | Consulta detallada de registros DNS. | `dig openai.com ANY` |
| `host` | Consulta rápida DNS. | `host openai.com` |
| `nslookup` | Consulta clásica DNS. | `nslookup 8.8.8.8` |
| `resolvectl` | Muestra y configura servidores DNS. | `resolvectl status` |

---

## 7. **Administración de servicios de red** 🛠️
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `systemctl status` | Verifica estado de un servicio. | `systemctl status ssh` |
| `systemctl restart` | Reinicia un servicio. | `sudo systemctl restart networking` |
| `journalctl -u` | Muestra logs de un servicio. | `journalctl -u ssh` |
| `service` *(método clásico)* | Alternativa a `systemctl`. | `sudo service ssh restart` |

---

## 8. **Escaneo y auditoría de red** 🧪
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `nmap -sP` | Descubre dispositivos en la red. | `nmap -sP 192.168.1.0/24` |
| `nmap -A` | Escaneo avanzado de un host. | `nmap -A 192.168.1.10` |
| `arp-scan` | Escaneo rápido de IPs y MACs. | `sudo arp-scan --interface=eth0 192.168.1.0/24` |
| `whois` | Consulta información de dominios. | `whois openai.com` |

---

## 9. **Automatización y scripts de red** 🤖
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `watch` | Ejecuta un comando repetidamente. | `watch -n 2 ip a` |
| `cron` | Programa tareas automáticas. | `crontab -e` |
| `curl` | Automatiza peticiones HTTP. | `curl -I https://example.com` |
| `wget` | Descarga archivos automáticamente. | `wget -c archivo.iso` |

---

## 10. **Flujos de trabajo prácticos** ⚡

### 🔹 **Verificar conectividad y puertos abiertos**
```bash
ping -c 4 8.8.8.8 && ss -tulnp
```

### 🔹 **Capturar tráfico HTTP en la interfaz eth0**
```bash
sudo tcpdump -i eth0 port 80 -vv
```

### 🔹 **Escanear red local y mostrar dispositivos conectados**
```bash
sudo nmap -sn 192.168.1.0/24
```

### 🔹 **Medir ancho de banda entre dos servidores**
En **servidor**:
```bash
iperf3 -s
```
En **cliente**:
```bash
iperf3 -c 192.168.1.20
```
