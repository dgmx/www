---
title: 6. Linux como router
parent: "Linux"
---

## Ubuntu Server como router. Servidor DHCP y NAT (masquerading)

🌐 **Interfaz pública** → tiene Internet

🕸️ **Interfaz privada** → entrega IP por DHCP a los clientes y les da salida a Internet

**Esquema**
```
[Internet]
     |
 (eth0 / enp0s3)  ← interfaz pública
[ Ubuntu Server ]
 (eth1 / enp0s8)  ← interfaz privada (LAN)
     |
[Clientes Ubuntu Desktop]
```

Los nombres de interfaces pueden ser distintos en tu sistema (`ip a` para verificarlos).

### ✅ Paso 1 – Identificar interfaces

En el servidor:
```
ip a
```

**Ejemplo:**
- Pública: enp0s3
- Privada: enp0s8

En el resto del ejemplo se usará:
- WAN = enp0s3
- LAN = enp0s8
  
Adapta los nombres si es necesario.

### ✅ Paso 2 – Asignar IP estática a la interfaz privada
Edita netplan:
```
sudo nano /etc/netplan/01-netcfg.yaml
```

**Ejemplo**

```
network:
  version: 2
  renderer: networkd
  ethernets:
    enp0s3:
      dhcp4: true   # interfaz pública
    enp0s8:
      dhcp4: no
      addresses:
        - 192.168.50.1/24
````
Aplica los cambios
```
sudo netplan apply
```

Verifica:
```
ip a
```
Debes ver `192.168.50.1` en la interfaz privada.

### ✅ Paso 3 – Instalar y configurar DHCP Server
Instala:
```
sudo apt update
sudo apt install isc-dhcp-server
```

Indica en qué interfaz escuchará DHCP:
```
sudo nano /etc/default/isc-dhcp-server
```
Busca:
```
INTERFACESv4=""
```
Cámbialo por:
```
INTERFACESv4="enp0s8"
````

Configura el rango de IP
Edita:
```
sudo nano /etc/dhcp/dhcpd.conf
```

Agrega al final:
```
subnet 192.168.50.0 netmask 255.255.255.0 {
  range 192.168.50.100 192.168.50.200;
  option routers 192.168.50.1;
  option domain-name-servers 8.8.8.8, 1.1.1.1;
}
```
Reinicia el servicio:
```
sudo systemctl restart isc-dhcp-server
sudo systemctl status isc-dhcp-server
```
Debe estar **active (running)**.

### ✅ Paso 4 – Habilitar forwarding de IP (enrutamiento)

Temporal (para probar):
```
sudo sysctl -w net.ipv4.ip_forward=1
````
Con este comando podemos probar el funcionamiento de forma inmediata, pero solo temporal, para hacerlo permanente, editamos el archivo siguiente:

```
sudo nano /etc/sysctl.conf
```
Descomenta o agrega:
```
net.ipv4.ip_forward=1
```

Aplicamos con:
```bash
sudo sysctl -p
```

### ✅ Paso 5 – Configurar NAT con iptables
Esto permitirá que los clientes salgan a Internet usando la IP pública del server.

Ejecuta:
```
sudo iptables -t nat -A POSTROUTING -o enp0s3 -j MASQUERADE
sudo iptables -A FORWARD -i enp0s8 -o enp0s3 -j ACCEPT
sudo iptables -A FORWARD -i enp0s3 -o enp0s8 -m state --state RELATED,ESTABLISHED -j ACCEPT
```

Verificamos:

```
sudo iptables -t nat -L -n -v
```

Para hacer las reglas persistentes y que no se pierdan al reiniciar:
```
sudo apt install iptables-persistent
sudo netfilter-persistent save
```

### ✅ Paso 6 – Configurar los clientes
En los Ubuntu Desktop:

- Configura la red como DHCP automático.
- Conecta al switch/red privada.

Instalamos las herramientas cliente de DHCP:
```
sudo apt update
sudo apt install isc-dhcp-client
```
Verifica que reciben IP:
```
ip a
ip route
```
Deben tener algo como:
```
IP: 192.168.50.x
Gateway: 192.168.50.1
```

Probamos conectividad:
```
ping 192.168.50.1      # servidor
ping 8.8.8.8           # internet
ping google.com        # DNS
```

Para liberar una IP incorrecta podemos usar el comando:
```
sudo ip addr flush dev eth0  // Asumimos eth0 el nombre del interfaz de red      
```

y para renovar:
```
sudo dhclient -v
```
### 🦠 Resolución de errrores

Por defecto, Linux funciona como un host, no como un router.

Eso significa:

- ✔️ Puede enviar y recibir paquetes para sí mismo.
- ❌ No reenvía paquetes entre interfaces.

Cuando un cliente quiere acceder a Internet:
- 1 El paquete llega al server por `enp0s8`.
- 2 Linux debe reenviarlo por `enp0s3`.
- 3 Cuando vuelve la respuesta, debe reenviarla otra vez al cliente.

Si el forwarding está desactivado, el servidor recibe el paquete… y lo descarta.

Por eso los clientes no navegan aunque tengan IP y gateway correcto.

Para verificar que esta activado: 
```
cat /proc/sys/net/ipv4/ip_forward
```
- 0 → ❌ forwarding desactivado
- 1 → ✅ forwarding activado
