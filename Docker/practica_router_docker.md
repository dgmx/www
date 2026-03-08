---
title: 6. Router con Docker
parent: "Docker"
---

# Práctica de Laboratorio

## Router, DHCP y NAT usando contenedores Docker (Ubuntu)

### Objetivo

Implementar un entorno virtual donde un contenedor actúe como **router +
servidor DHCP + NAT**, y otro contenedor funcione como **cliente**,
obteniendo IP automáticamente y accediendo a Internet a través del
router.

------------------------------------------------------------------------

## 1. Requisitos

- Docker instalado
- Docker Compose v2
- Acceso a Internet desde el host

------------------------------------------------------------------------

## 2. Topología

    Internet
       |
    Docker bridge
       |
    [ server ]
       | 192.168.100.0/24
    [ client ]

------------------------------------------------------------------------

## 3. Estructura de Archivos

Crear:

    lab-router/
     ├── docker-compose.yml
     └── dhcp/
         └── dhcpd.leases

Comandos:

```bash
mkdir -p lab-router/dhcp
touch lab-router/dhcp/dhcpd.leases
cd lab-router
```

------------------------------------------------------------------------

## 4. docker-compose.yml

Crear archivo `docker-compose.yml` con el contenido:

```yaml
version: "3.9"

networks:
  lan_net:
    driver: bridge
    ipam:
      config:
        - subnet: 192.168.100.0/24

services:

  server:
    image: ubuntu:22.04
    container_name: server
    hostname: server

    cap_add:
      - NET_ADMIN
      - NET_RAW

    networks:
      - lan_net
      - default

    volumes:
      - ./dhcp:/var/lib/dhcp

    command: >
      bash -c "
        apt update &&
        apt install -y iproute2 iptables isc-dhcp-server iputils-ping &&
        sleep 3 &&
        ip addr flush dev eth1 &&
        ip addr add 192.168.100.1/24 dev eth1 &&
        ip link set eth1 up &&
        echo 'INTERFACESv4="eth1"' > /etc/default/isc-dhcp-server &&
        cat <<EOF > /etc/dhcp/dhcpd.conf
        subnet 192.168.100.0 netmask 255.255.255.0 {
          range 192.168.100.50 192.168.100.100;
          option routers 192.168.100.1;
          option domain-name-servers 8.8.8.8, 1.1.1.1;
        }
        EOF
        echo 1 > /proc/sys/net/ipv4/ip_forward &&
        iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE &&
        iptables -A FORWARD -i eth1 -o eth0 -j ACCEPT &&
        iptables -A FORWARD -i eth0 -o eth1 -m state --state RELATED,ESTABLISHED -j ACCEPT &&
        service isc-dhcp-server start &&
        tail -f /dev/null
      "

  client:
    image: ubuntu:22.04
    container_name: client
    hostname: client

    cap_add:
      - NET_RAW
      - NET_ADMIN

    networks:
      - lan_net

    command: >
      bash -c "
        apt update &&
        apt install -y iproute2 iputils-ping isc-dhcp-client &&
        sleep 5 &&
        dhclient eth0 &&
        tail -f /dev/null
      "
```

------------------------------------------------------------------------

## 5. Arranque

```bash
docker compose up -d
docker ps
```

------------------------------------------------------------------------

## 6. Verificación

Entrar al cliente:

```bash
docker exec -it client bash
```

Ver IP:

``` bash
ip a
ip route
```

Pruebas:

``` bash
ping 192.168.100.1
ping 8.8.8.8
ping google.com
```

------------------------------------------------------------------------

## 7. Persistencia DHCP

Archivo persistente:

    dhcp/dhcpd.leases

------------------------------------------------------------------------

## 8. Actividades Académicas

### A. Captura de tráfico

En server:

``` bash
apt install -y tcpdump
tcpdump -i eth1 port 67 or port 68
```

Renovar IP en cliente:

``` bash
dhclient -r eth0
dhclient eth0
```

------------------------------------------------------------------------

### B. Simular múltiples clientes

``` bash
docker compose up -d --scale client=3
```

------------------------------------------------------------------------

### C. Firewall

Bloquear ICMP:

``` bash
iptables -A FORWARD -p icmp -j DROP
```

------------------------------------------------------------------------

### D. Medición de latencia

``` bash
ping -c 20 8.8.8.8
```

------------------------------------------------------------------------

### E. Medición de ancho de banda

Instalar iperf:

``` bash
apt install -y iperf3
```

Server:

``` bash
iperf3 -s
```

Cliente:

``` bash
iperf3 -c 192.168.100.1
```

------------------------------------------------------------------------

## 9. Preguntas de Evaluación

1.  ¿Qué función cumple el NAT?
2.  ¿Qué sucede si se desactiva el forwarding?
3.  ¿Qué ventaja aporta DHCP?
4.  ¿Por qué se usan capabilities en lugar de privileged?
5.  Analiza una captura DHCP.

------------------------------------------------------------------------

## 10. Conclusión

Esta práctica permite comprender el funcionamiento de redes,
enrutamiento, NAT y automatización usando contenedores.
