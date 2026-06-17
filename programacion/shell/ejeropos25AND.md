## EJERCICIO 4: SEGURIDAD CON IPTABLES Y SCRIPTING EN BASH. 

**(TOTAL: 2.5 puntos)**

Para este ejercicio se tomará como base el esquema de red del [Ejercicio de redes](https://diegojgonzalez.org/redes/routing/opos25redes.html), donde
dispone de todas las IPs y nombres de interfaces de red. Se trabajará sobre la
máquina **Cancervero**, un sistema Debian 12 sin entorno gráfico, con iptables
instalado y plenamente operativo.

TAREA: Debe realizar un script en Bash llamado `completar_iptables.sh`, que se ejecutará en el directorio `/etc/iptables` del dispositivo **Cancervero**, como usuario
root. 

El script generará automáticamente un nuevo script llamado `firewall.sh`

El script `completar_iptables.sh` se debe basar en la siguiente plantilla, que usted
debe completar. 

En su código, debe utilizar obligatoriamente las variables `DIR,
BASE, FIREWALL y LISTA.`

```bash
#! /bin/bash
# completar_iptables.sh

# Directorio y ficheros
DIR="/etc/iptables"
BASE="$DIR/base iptables.sh" 
FIREWALL="$DIR/Firewall.sh" 
LISTA="SDIR/listablanca.txt"

#PARTE 1
... Código script de la parte 1
#PARTE 2
... Código script de la parte 2
#PARTE 3
... Código script de la parte 3
#PARTE 4
... Código script de la parte 4
```


A continuación, se describen las distintas partes que debe desarrollar:

**PARTE 1:**

Creará un nuevo fichero `/etc/iptables/firewall.sh`, le asignará la propiedad
al usuario root y permisos de lectura, escritura y ejecución solo para root.
Cargará el inicio del fichero firewall.sh, todo el contenido del fichero
`/etc/iptables/base_iptables.sh.`

**PARTE 2:**

Añadirá al fichero `firewall.sh` las reglas iptables necesarias para permitir el
tráfico de entrada y salida en la interfaz `lo (loopback)` en el propio
**Cancervero**

**PARTE 3:**

Añadirá al fichero firewall.sh las reglas iptables necesarias para permitir el
acceso por SSH desde los equipos de usuario con IPs 192.168.2.4,
192.168.2.5, 192.168.2.6 y 192.168.2.7, hacia cualquier equipo en la DMZ.
Se valorará el uso de la sentencia for.

**PARTE 4:**

Añadirá al fichero `firewall.sh` las reglas iptables necesarias para permitir el
acceso por SSH (puerto 22) al propio **Cancervero**, a través de la interfaz
`enp2s0` (LAN PROTEGIDA), exclusivamente desde las IPs de los equipos con
rol “técnico” en el fichero `/etc/iptables/listablanca.txt.`

**Tenga en cuenta las siguientes consideraciones:**
- Recuerde que, como se ha dicho ya, este ejercicio usa el esquema y
descripción de red del [ejercicio de redes](https://diegojgonzalez.org/redes/routing/opos25redes.html)
- Suponga una política por defecto **DROP**.
- El fichero `listablanca.txt` contiene un número variables de líneas, cada una
con información estructurada de un equipo. Cada campo está separado por
un único espacio y se presenta con el siguiente formado exacto:

Se asume que el fichero contiene entradas válidas y todas sus IPs
pertenecen a la red LAN PROTEGIDA.


```bash
#!/bin/bash
# completar_iptables.sh
# Directorio y ficheros
DIR="/etc/iptables"
BASE="$DIR/base_iptables.sh"
FIREWALL="$DIR/firewall.sh"
LISTA="$DIR/listablanca.txt"

# PARTE 1
cat $BASE>$FIREWALL
chown root:root $FIREWALL
chmod 700 $FIREWALL

# PARTE 2
echo "iptables -A INPUT -i 10 -j ACCEPT" >> $FIREWALL
echo "iptables -A OUTPUT -o 10 -j ACCEPT" >> $FIREWALL
```


Ejemplo realizado en un entorno de prueba:
```bash
 2239  mkdir pruebas
 2240  mkdir pruebas/etc/
 2241  mkdir pruebas/etc/iptables
 2242  cd pruebas

 2253  DIR=etc/iptables
 2254  BASE=etc/iptables/base_iptables.sh
 2255  FIREWALL=$DIR/firewall.sh
 2256  cat $BASE>$FIREWALL
 2257  ls etc/iptables
 2258  chmod 700 $FIREWALL
 2259  ls etc/iptables
 2260  echo "iptables -A INPUT -i lo -j ACCEPT" >> $FIREWALL
 2261  ls etc/iptables
 2262  cat $BASE>$FIREWALL
 2263  ls etc/iptables
 2264  echo "iptables -A INPUT -i lo -j ACCEPT" >> $FIREWALL
 2265  cat $FIREWALL

 2269  echo "iptables -A OUTPUT -o lo -j ACCEPT" >> $FIREWALL
 2270  cat $FIREWALL
 2271  nano $FIREWALL
```

> La instrucción `chown root:root $FIREWALL` no se ha realizado al estar en una máquina macOS.