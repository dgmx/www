---
title: "02. Cortafuegos personal"
parent: "IPTables"
---



Implementación de un cortafuegos personal
=========================================

Vamos a realizar los primeros pasos para implementar un cortafuegos en un nodo de una red, aquel que se ejecuta en el propio equipo que trata de proteger, lo que a veces se denomina un cortafuegos personal.

Esquema de red
------------------------------------------------------

Vamos a utilizar una máquina en openstack, que vamos a crear con la receta heat: [escenario1.yaml](escenario1.yaml). La receta heat ha deshabilitado el cortafuego que nos ofrece openstack (todos los puertos de todos los protocolos están abiertos). La máquina creada tendrá un servidor web instalado. Vamos a trabajar con la red de las ips flotantes: 172.22.0.0/16.

Limpieza de las reglas previas
--------------------------------------------------------------------------------------

    iptables -F
    iptables -t nat -F
    iptables -Z
    iptables -t nat -Z
    

Vamos a permitir ssh
------------------------------------------------------------------

Cómo estamos conectado a la máquina por ssh, vamos a permitir la conexión ssh desde la red 172.22.0.0/16, antes de cambiar las políticas por defecto a DROP, para no perder la conexión:

    iptables -A INPUT -s 172.22.0.0/16 -p tcp --dport 22 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -d 172.22.0.0/16 -p tcp --sport 22 -m state --state ESTABLISHED -j ACCEPT
    

Política por defecto
------------------------------------------------------------------

    iptables -P INPUT DROP
    iptables -P OUTPUT DROP
    

Comprobamos que el equipo no puede acceder a ningún servicio ni de Internet ni de la red local, ya que la política lo impide.

Permitimos tráfico para la interfaz loopback
--------------------------------------------

    iptables -A INPUT -i lo -p icmp -j ACCEPT
    iptables -A OUTPUT -o lo -p icmp -j ACCEPT
    

Peticiones y respuestas protocolo ICMP
------------------------------------------------

    iptables -A INPUT -i eth0 -p icmp --icmp-type echo-reply -j ACCEPT
    iptables -A OUTPUT -o eth0 -p icmp --icmp-type echo-request -j ACCEPT
    

Comprobamos su funcionamiento haciendo ping a una IP pública:

    ping -c 1 1.1.1.1
    PING 1.1.1.1 (1.1.1.1) 56(84) bytes of data.
    64 bytes from 1.1.1.1: icmp_seq=1 ttl=64 time=0.485 ms
    
    --- 1.1.1.1 ping statistics ---
    1 packets transmitted, 1 received, 0% packet loss, time 0ms
    rtt min/avg/max/mdev = 0.485/0.485/0.485/0.000 ms
    

Consultas y respuestas DNS
--------------------------------------------------

    iptables -A OUTPUT -o eth0 -p udp --dport 53 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A INPUT -i eth0 -p udp --sport 53 -m state --state ESTABLISHED -j ACCEPT
    

Comprobamos su funcionamiento con una consulta DNS:

    dig @1.1.1.1 www.josedomingo.org
    

Tráfico http (que la máquina pueda navegar)-------------------------------------------------------------------

    iptables -A OUTPUT -o eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A INPUT -i eth0 -p tcp --sport 80 -m state --state ESTABLISHED -j ACCEPT
    

Comprobamos que funciona accediendo a un servicio http (! no https)

    curl http://portquiz.net:80
    Port 80 test successful!
    Your IP: x.x.x.x
    

Tráfico https
----------------------------------------------------

    iptables -A OUTPUT -o eth0 -p tcp --dport 443 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A INPUT -i eth0 -p tcp --sport 443 -m state --state ESTABLISHED -j ACCEPT
    

Comprobamos que funciona abriendo un navegador y accediendo a cualquier sitio web (hoy en día la mayoría son https).

Tráfico http/https
---------------------------

Podemos hacer un par de reglas que permitan el tráfico http/https (los dos puntos anteriores) usando la extensión `multiport`:

    iptables -A OUTPUT -o eth0 -p tcp -m multiport --dports 80,443 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A INPUT -i eth0 -p tcp -m multiport --sports 80,443 -m state --state ESTABLISHED -j ACCEPT
    

Permitimos el acceso a nuestro servido web 
--------------------------------------------------------------

    iptables -A INPUT -i eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -o eth0 -p tcp --sport 80 -m state --state ESTABLISHED -j ACCEPT
    

Configuración en un solo paso
------------------------------------
Editamos un fichero y añadimos todas las reglas anteriores:

    # Limpiamos las tablas
    iptables -F
    iptables -t nat -F
    iptables -Z
    iptables -t nat -Z
    # Establecemos la política
    iptables -P INPUT DROP
    iptables -P OUTPUT DROP
    
    iptables -A INPUT -i lo -p icmp -j ACCEPT
    iptables -A OUTPUT -o lo -p icmp -j ACCEPT
    
    iptables -A INPUT -s 172.22.0.0/16 -p tcp --dport 22 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -d 172.22.0.0/16 -p tcp --sport 22 -m state --state ESTABLISHED -j ACCEPT
    
    iptables -A INPUT -i eth0 -p icmp --icmp-type echo-reply -j ACCEPT
    iptables -A OUTPUT -o eth0 -p icmp --icmp-type echo-request -j ACCEPT
    
    iptables -A INPUT -i eth0 -p udp --sport 53 -m state --state ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -o eth0 -p udp --dport 53 -m state --state NEW,ESTABLISHED -j ACCEPT
    
    iptables -A INPUT -i eth0 -p tcp --sport 80 -m state --state ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -o eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
    
    iptables -A INPUT -i eth0 -p tcp --sport 443 -m state --state ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -o eth0 -p tcp --dport 443 -m state --state NEW,ESTABLISHED -j ACCEPT
    
    iptables -A INPUT -i eth0 -p tcp --dport 80 -m state --state NEW,ESTABLISHED -j ACCEPT
    iptables -A OUTPUT -o eth0 -p tcp --sport 80 -m state --state ESTABLISHED -j ACCEPT
    

Ejercicios
---------------
1.  Permite poder hacer conexiones ssh al exterior.
2.  Deniega el acceso a tu servidor web desde una ip concreta.
3.  Permite hacer consultas DNS sólo al servidor `192.168.202.2`. Comprueba que no puedes hacer un `dig @1.1.1.1`.
4.  No permitir el acceso al servidor web de `www.josedomingo.org` (Tienes que utilizar la ip). ¿Puedes acceder a `fp.josedomingo.org`?
5.  Permite mandar un correo usando nuestro servidor de correo: `babuino-smtp`. Para probarlo ejecuta un `telnet bubuino-smtp.gonzalonazareno.org 25`.
6.  Instala un servidor mariadb, y permite los accesos desde la ip de tu cliente. Comprueba que desde otro cliente no se puede acceder.


© 2022 José Domingo Muñoz