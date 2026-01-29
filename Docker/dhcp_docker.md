---
title: 6. DHCP con Docker
parent: "Docker"
---

## Configuración de un servidor y un cliente DHCP con Docker: Guía completa

En esta guía, explicaremos el proceso de configuración de un servidor y un cliente DHCP (Protocolo de Configuración Dinámica de Host) mediante contenedores Docker. Esta configuración es útil para aprender sobre DHCP, probar configuraciones de red o simular entornos de red.

Prerequisitos
-------------

* Docker instalado en su sistema.
* Conocimientos básicos de Docker y conceptos de redes.

Parte 1: Configuración del servidor DHCP
----------------------------------

### Paso 1: Extraer la imagen Docker de ubuntu

Usaremos la imagen de ubuntu Linux tanto para nuestro servidor como para nuestro cliente DHCP debido a su pequeño tamaño y simplicidad.
```
docker pull ubuntu:latest        
```
### Paso 2: Creación de una red aislada

Para mantener nuestro entorno DHCP separado de la red de su máquina host, crearemos una red Docker dedicada.
```
docker network create dhcp-net        
```
### Paso 3: Ejecutar el contenedor DHCP Server 

Ahora, creemos y ejecutemos nuestro contenedor de servidor DHCP:
```
docker run --name server --network dhcp-net --cap-add=NET_ADMIN -it --expose 67 ubuntu:latest     
```
Nota: `--cap-add=NET_ADMIN` sirve para darle al contenedor privilegios de administración de red, que normalmente están bloqueados por seguridad.
Linux usa un sistema de capabilities (capacidades) para dividir los privilegios de root.

`NET_ADMIN` habilita operaciones de red avanzadas.

### Paso 4: Instalar en software del DHCP Server 

Acceder al contenedor del servidor:
```
docker exec -it server /bin/bash        
```
Dentro del contenedor del servidor, instale el paquete del servidor DHCP y algunas herramientas útiles:
```
apt update
apt install isc-dhcp-server nano        
```
### Paso 5: Recopilar información de la red

Para configurar correctamente nuestro servidor DHCP, necesitamos conocer los detalles de la red. Abra una nueva terminal y ejecute este comando en su equipo host:
```
docker network inspect dhcp-net        
```
Busque la información de "Subred" y "Puerta de enlace" en el resultado. La necesitará para el siguiente paso.

### Paso 6: Configurar el DHCP Server

Dentro del contenedor del servidor, navegue hasta el directorio de configuración DHCP y edite el archivo de configuración:
```
cd /etc/dhcp
nano dhcpd.conf        
```
Agregue la siguiente configuración, reemplazando la subred y la IP del enrutador con los valores de Subred y Puerta de enlace respectivamente que encontró en el Paso 5:
```
default-lease-time 600;
max-lease-time 7200;
authoritative;
subnet 172.18.0.0 netmask 255.255.255.0 {
  range 172.18.0.100 172.18.0.200;
  option routers 172.18.0.1;
  option domain-name-servers 8.8.8.8, 8.8.4.4;
}        
```
Esta configuración:

* Establece el tiempo de concesión predeterminado en 10 minutos (600 segundos).
* Establece el tiempo de concesión máximo en 2 horas (7200 segundos).
* Define la subred y el rango de IP para los clientes DHCP.
* Especifica la puerta de enlace predeterminada (enrutador) y los servidores DNS.

### Paso 7: Iniciar el DHCP Server

Aún dentro del contenedor del servidor, inicie el servidor DHCP:
```
service isc-dhcp-server restart     
```
Debería ver un resultado que indique que el servidor se ha iniciado correctamente.

Parte 2: Configurando el cliente DHCP
----------------------------------

### Paso 1: Crear el contenedor del cliente

Abra una nueva ventana de terminal y cree un contenedor de cliente:
```
docker run --name client1 -it --network dhcp-net --cap-add=NET_ADMIN ubuntu:latest 
```
### Paso 2: Instalación del software del cliente DHCP 

Dentro del contenedor del cliente, instale el cliente DHCP:
```
apt update
apt install isc-dhcp-client
```
### Paso 3: Liberar la dirección IP actual

Compruebe la dirección IP actual:
```
ip a      
```
Verás que Docker ha asignado una dirección IP. Necesitamos liberarla para probar nuestro servidor DHCP:
```
ip addr flush dev eth0        
```
Verifique que la dirección IP haya sido eliminada:
```
ip a       
```
### Paso 4: Solicitar una IP del servidor DHCP

Ahora, solicitemos una dirección IP de nuestro servidor DHCP:
```
dhclient -v        
```
### Paso 5: Verifycar la nueva dirección IP

Comprueba la nueva dirección IP
```
ip a
```
Debería ver una dirección IP en el rango que especificamos en la configuración del servidor DHCP (172.18.0.100 - 172.18.0.200).

Conclusión
----------

¡Felicitaciones! Ha configurado correctamente un servidor y un cliente DHCP con contenedores Docker. Esta configuración demuestra cómo funciona DHCP en un entorno controlado. Puede ampliarla añadiendo más clientes o modificando la configuración de DHCP para explorar diferentes escenarios.

Recuerda limpiar tus recursos de Docker cuando hayas terminado:
```
docker stop server client1
docker rm server client1
docker network rm dhcp-net        
```
Esta guía proporciona una base para comprender DHCP en entornos de contenedores. Experimente y aprenda más sobre la configuración y administración de red con esta configuración.