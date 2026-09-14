# Instalación de Adguard Home con Docker y Podman 

**AdGuard Home** es un software gratuito y de código abierto que actúa como un **servidor DNS con filtrado de contenidos a nivel de red**.  

A diferencia de las extensiones del navegador, AdGuard Home intercepta las peticiones de todos los dispositivos conectados a tu red doméstica (móviles, Smart TVs, consolas, dispositivos IoT) antes de que lleguen a Internet.  

¿Qué hace exactamente?

* **Bloqueo de publicidad y rastreadores:** Elimina anuncios en sitios web, aplicaciones, juegos y reproductores de vídeo. 
*  **Privacidad centralizada:** Evita que empresas de telemetría y análisis recopilen datos sobre tu navegación.  
*  **Control parental y bloqueo de servicios:** Permite restringir el acceso a contenido para adultos o bloquear plataformas específicas (YouTube, TikTok, Steam, etc.) con un clic.  
*  **DNS cifrado:** Soporta protocolos de privacidad avanzados como DNS-over-HTTPS (DoH), DNS-over-TLS (DoT) y DNS-over-QUIC
  
## Instalación en Docker

La forma más limpia y portátil de desplegar AdGuard Home en un servidor local, Raspberry Pi o NAS es utilizando Docker Compose.

### 1. Archivo docker-compose.yml

Crea una carpeta llamada adguardhome y dentro crea el archivo docker-compose.yml:

```yml
version: '3.8'

services:
  adguardhome:
    image: adguard/adguardhome:latest
    container_name: adguardhome
    restart: unless-stopped
    ports:
      # Puerto DNS (TCP/UDP)
      - "53:53/tcp"
      - "53:53/udp"
      # Asistente de configuración inicial
      - "3000:3000/tcp"
      # Panel de administración web
      - "80:80/tcp"
      - "443:443/tcp"
    volumes:
      - ./workdir:/opt/adguardhome/work
      - ./confdir:/opt/adguardhome/conf
```

### 2. Iniciar el contenedor

Ejecuta el contenedor en segundo plano:

```bash
docker compose up -d
```

**Nota para Linux (Ubuntu/Debian)**: Si el contenedor falla al arrancar por conflicto en el puerto 53, es porque `systemd-resolved` está usando el servidor DNS local. Puedes deshabilitarlo modificando `/etc/systemd/resolved.conf` estableciendo `DNSStubListener=no` y reiniciando el servicio `(sudo systemctl restart systemd-resolved)`.

### Configuración inicial  

1. **Acceder al asistente: Puerto 3000**
Abre tu navegador e ingresa a http://IP-DE-TU-SERVIDOR:3000.   
Haz clic en Comenzar.

2. **Configurar interfaces de red: Puertos de escucha.**  
   Interfaz web: Selecciona el puerto de administración (por defecto el 80 o 8080 si ya tienes un servidor web activo).Servidor DNS: Déjalo en el puerto 53 en todas las interfaces.
 
3. **Crear usuario administrador: Seguridad**.  
   Define el nombre de usuario y una contraseña segura para acceder al panel de control.
 
4. **Completar la instalación: Confirmación.**  
   Sigue los pasos finales para acceder al panel de administración principal (http://IP-DE-TU-SERVIDOR).


### Implementación en la red doméstica

Para que AdGuard Home filtre el tráfico de toda tu casa, debes indicarle a tus dispositivos que lo utilicen como su servidor DNS.  

#### Opción A: Aplicar a toda la red (Recomendado)

1. Accede a la interfaz de administración de tu router (habitualmente 192.168.1.1).  
2. Ve a la sección LAN / DHCP Server.
3. Cambia la dirección del Servidor DNS primario por la IP del equipo donde instalaste AdGuard Home.
4. Guarda los cambios. Los dispositivos aplicarán la nueva configuración DNS automáticamente la próxima vez que se conecten a la red.
   
#### Opción B: Dispositivo por dispositivo

Si solo quieres probarlo en un equipo específico antes de aplicarlo en toda la red.

Cambia los DNS en las propiedades de la interfaz de red (Ethernet/Wi-Fi) a la IP del servidor.


## Instalación en Podman

El error habitual al ejecutar **AdGuard Home en Podman** (especialmente en entornos rootless o sin privilegios de superusuario) ocurre por dos motivos principales:

* **El puerto 53 es un puerto privilegiado (inferior al 1024)**: Por defecto, los usuarios sin privilegios no pueden vincular puertos por debajo del 1024 en sistemas Linux/macOS.

* **Conflictos con la interfaz de red/DNS del host**: Si la máquina host está usando el puerto 53 (por ejemplo, `systemd-resolved` en Linux).

Para evitar este error existen 2 soluciones:

1. Red en modo Host (o mapeo con puerto elevado)
2. Mapeo de Puertos (sin modo Host)

A continuación se llevará a cabo el método 2 de mapeo de puertos sin modo host, aunque la opción 1 suele ser la opción recomendada.

Para especificar puertos individuales en Podman Rootless, primero debes permitir que tu usuario vincule el puerto 53 ejecutando en la terminal del host:

```bash
sudo sysctl -w net.ipv4.ip_unprivileged_port_start=53
```

(Para hacer este cambio permanente, añade `net.ipv4.ip_unprivileged_port_start=53` al archivo `/etc/sysctl.conf`).

Luego puedes usar este archivo de composición:

```yml
version: '3.8'

services:
  adguardhome:
    image: docker.io/adguard/adguardhome:latest
    container_name: adguardhome
    restart: always
    ports:
      - "53:53/tcp"
      - "53:53/udp"
      - "3000:3000/tcp"
      - "80:80/tcp"
      - "8443:443/tcp"
    volumes:
      - ./workdir:/opt/adguardhome/work:Z
      - ./confdir:/opt/adguardhome/conf:Z
```

**Importante para SELinux / Podman: **La opción `:Z` al final de las rutas de los volúmenes `(./workdir:/opt/adguardhome/work:Z)` es indispensable para que Podman aplique los etiquetas de contexto de SELinux adecuados y no dé errores de permisos de lectura/escritura en disco.

Lanzamos el contenedor:

```bash
podman-compose up -d
```

### Maquinas macOS

En macOS, las máquinas virtuales de Podman (la VM `podman-machine-default`) gestionan la red y los puertos mediante un componente llamado pasta o slirp4netns.

**Cómo solucionar la vinculación del puerto 53 en macOS**

Para liberar y mapear el puerto 53 sin errores en Podman bajo macOS, debes aplicar la configuración dentro de la máquina virtual Linux de Podman o ejecutar la VM con permisos elevados.

**Aplicar el parámetro dentro de la VM de Podman**

1. Ingresa a la consola de la máquina virtual que ejecuta Podman en tu Mac y aplica el parámetro sysctl dentro de ella:

    ```bash
    podman machine ssh
    ```

2. Ejecuta el comando `sysctl` dentro de la VM:

    ```bash
    sudo sysctl -w net.ipv4.ip_unprivileged_port_start=53
    ```

3. (Opcional) Para que el cambio persista entre reinicios de la máquina virtual:

    ```bash
    echo "net.ipv4.ip_unprivileged_port_start=53" | sudo tee -a /etc/sysctl.d/podman.conf
    ```
4. Sal de la VM:

    ```bash
    exit
    ```

Para verificar si fue exitoso: Vuelve a ejecutar `podman machine ssh sudo sysctl net.ipv4.ip_unprivileged_port_start` y confirma que devuelva `53`.