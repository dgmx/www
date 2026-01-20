---
title: 1. Instalación a Docker
parent: "Docker"
---

# Manual de Instalación de Docker en Ubuntu
## Utilizando los Repositorios Oficiales de Docker

---

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Requisitos Previos](#requisitos-previos)
3. [Verificación del Sistema](#verificación-del-sistema)
4. [Desinstalación de Versiones Antiguas](#desinstalación-de-versiones-antiguas)
5. [Instalación de Docker](#instalación-de-docker)
6. [Configuración Post-Instalación](#configuración-post-instalación)
7. [Verificación de la Instalación](#verificación-de-la-instalación)
8. [Comandos Útiles](#comandos-útiles)
9. [Solución de Problemas](#solución-de-problemas)
10. [Desinstalación de Docker](#desinstalación-de-docker)

---

## Introducción

Docker es una plataforma de código abierto que permite empaquetar, distribuir y ejecutar aplicaciones dentro de contenedores aislados. Este manual te guiará paso a paso en la instalación de Docker Engine en Ubuntu utilizando los repositorios oficiales de Docker.

### Ventajas de usar los repositorios oficiales:

- ✅ Versiones más actualizadas de Docker
- ✅ Actualizaciones de seguridad más rápidas
- ✅ Acceso a las últimas características
- ✅ Soporte oficial de Docker Inc.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener:

- **Sistema Operativo**: Ubuntu 20.04 LTS, 22.04 LTS, 24.04 LTS o superior
- **Arquitectura**: x86_64/amd64, armhf, arm64, o s390x
- **Privilegios**: Acceso sudo o root
- **Conexión a Internet**: Para descargar paquetes

### Versiones de Ubuntu soportadas:

| Versión | Nombre en Código | Estado |
|---------|------------------|--------|
| 24.04 LTS | Noble Numbat | ✅ Soportado |
| 22.04 LTS | Jammy Jellyfish | ✅ Soportado |
| 20.04 LTS | Focal Fossa | ✅ Soportado |

---

## Verificación del Sistema

Antes de instalar Docker, verifica la información de tu sistema:

```bash
# Verificar versión de Ubuntu
lsb_release -a

# Verificar nombre en código
lsb_release -cs

# Verificar arquitectura del sistema
dpkg --print-architecture

# Verificar versión del kernel
uname -r
```

**Salida esperada:**
```
Distributor ID: Ubuntu
Description:    Ubuntu 24.04 LTS
Release:        24.04
Codename:       noble
```

---

## Desinstalación de Versiones Antiguas

Es importante eliminar versiones anteriores de Docker para evitar conflictos.

### Paso 1: Eliminar paquetes conflictivos

```bash
# Eliminar versiones antiguas de Docker
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do 
  sudo apt-get remove $pkg
done
```

### Paso 2: Limpieza completa (opcional)

⚠️ **ADVERTENCIA**: Esto eliminará todos los contenedores, imágenes y volúmenes existentes.

```bash
# Eliminar directorios de Docker
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

---

## Instalación de Docker

### Paso 1: Actualizar el índice de paquetes

```bash
sudo apt-get update
```

### Paso 2: Instalar dependencias necesarias

```bash
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

**Descripción de paquetes:**
- `ca-certificates`: Certificados de autoridades de certificación
- `curl`: Herramienta para transferir datos con URLs
- `gnupg`: Herramienta de cifrado y firmas
- `lsb-release`: Información sobre la distribución Linux

### Paso 3: Crear directorio para las claves GPG

```bash
sudo install -m 0755 -d /etc/apt/keyrings
```

### Paso 4: Descargar e instalar la clave GPG oficial de Docker

```bash
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

**¿Qué es la clave GPG?**
La clave GPG (GNU Privacy Guard) se usa para verificar la autenticidad de los paquetes de Docker, garantizando que provienen de una fuente confiable.

### Paso 5: Añadir el repositorio oficial de Docker

```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

**Desglose del comando:**
- `arch=$(dpkg --print-architecture)`: Detecta automáticamente la arquitectura
- `signed-by=/etc/apt/keyrings/docker.asc`: Especifica la clave GPG
- `$(. /etc/os-release && echo "$VERSION_CODENAME")`: Detecta el nombre en código de Ubuntu
- `stable`: Usa el canal estable de Docker

### Paso 6: Actualizar el índice de paquetes nuevamente

```bash
sudo apt-get update
```

### Paso 7: Instalar Docker Engine y componentes

```bash
sudo apt-get install -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    docker-buildx-plugin \
    docker-compose-plugin
```

**Componentes instalados:**
- `docker-ce`: Docker Community Edition (motor principal)
- `docker-ce-cli`: Interfaz de línea de comandos de Docker
- `containerd.io`: Runtime de contenedores
- `docker-buildx-plugin`: Plugin para construcción avanzada de imágenes
- `docker-compose-plugin`: Plugin de Docker Compose v2

---

## Configuración Post-Instalación

### Verificar que Docker se inició correctamente

```bash
sudo systemctl status docker
```

**Salida esperada:**
```
● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled)
     Active: active (running) since Sat 2026-01-17 10:30:25 UTC
```

### Habilitar Docker para que inicie con el sistema

```bash
sudo systemctl enable docker
sudo systemctl enable containerd
```

### Añadir usuario actual al grupo docker (recomendado)

Esto permite ejecutar comandos de Docker sin `sudo`:

```bash
# Añadir tu usuario al grupo docker
sudo usermod -aG docker $USER
```

**⚠️ IMPORTANTE**: Debes cerrar sesión y volver a iniciarla para que los cambios surtan efecto.

**Alternativa sin cerrar sesión:**
```bash
newgrp docker
```

O ejecutar:
```bash
su - ${USER}
```

### Verificar que el usuario fue añadido

```bash
# Ver grupos del usuario
groups

# O específicamente verificar docker
id -nG | grep docker
```

---

## Verificación de la Instalación

### Paso 1: Verificar versión de Docker

```bash
docker --version
```

**Salida esperada:**
```
Docker version 27.5.1, build 1234abc
```

### Paso 2: Verificar información detallada del sistema

```bash
docker version
```

**Salida esperada:**
```
Client: Docker Engine - Community
 Version:           27.5.1
 API version:       1.47
 Go version:        go1.22.5
 Git commit:        1234abc
 Built:             Thu Jan 16 10:30:00 2025
 OS/Arch:           linux/amd64

Server: Docker Engine - Community
 Engine:
  Version:          27.5.1
  API version:      1.47 (minimum version 1.24)
  Go version:       go1.22.5
```

### Paso 3: Ejecutar contenedor de prueba

```bash
docker run hello-world
```

**Salida esperada:**
```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
...
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
```

### Paso 4: Verificar Docker Compose

```bash
docker compose version
```

**Salida esperada:**
```
Docker Compose version v2.24.1
```

### Paso 5: Ver información completa del sistema

```bash
docker info
```

Esto muestra información detallada sobre:
- Número de contenedores
- Número de imágenes
- Versión del kernel
- Sistema operativo
- Configuración de storage
- Plugins instalados

---

## Comandos Útiles

### Gestión de contenedores

```bash
# Listar contenedores en ejecución
docker ps

# Listar todos los contenedores (incluidos los detenidos)
docker ps -a

# Iniciar un contenedor
docker start <nombre_o_id>

# Detener un contenedor
docker stop <nombre_o_id>

# Reiniciar un contenedor
docker restart <nombre_o_id>

# Eliminar un contenedor
docker rm <nombre_o_id>

# Eliminar todos los contenedores detenidos
docker container prune
```

### Gestión de imágenes

```bash
# Listar imágenes
docker images

# Buscar imágenes en Docker Hub
docker search ubuntu

# Descargar una imagen
docker pull ubuntu:22.04

# Eliminar una imagen
docker rmi <nombre_o_id>

# Eliminar imágenes no utilizadas
docker image prune
```

### Información del sistema

```bash
# Ver uso de espacio
docker system df

# Ver estadísticas de recursos en tiempo real
docker stats

# Ver logs de un contenedor
docker logs <nombre_o_id>

# Ver logs en tiempo real
docker logs -f <nombre_o_id>
```

### Limpieza del sistema

```bash
# Limpiar todo (contenedores, redes, imágenes no usadas)
docker system prune

# Limpiar incluyendo volúmenes
docker system prune --volumes

# Limpiar todo (incluyendo imágenes en uso)
docker system prune -a --volumes
```

---

## Solución de Problemas

### Problema 1: Error de permisos al ejecutar docker

**Error:**
```
permission denied while trying to connect to the Docker daemon socket
```

**Solución:**
```bash
# Verificar que estás en el grupo docker
groups

# Si no estás, añadirte al grupo
sudo usermod -aG docker $USER

# Cerrar sesión y volver a iniciar, o ejecutar:
newgrp docker
```

### Problema 2: Docker no inicia después de la instalación

**Solución:**
```bash
# Ver estado del servicio
sudo systemctl status docker

# Iniciar el servicio
sudo systemctl start docker

# Ver logs para diagnóstico
sudo journalctl -u docker.service -n 50 --no-pager
```

### Problema 3: El repositorio de Docker no se encuentra

**Error:**
```
E: The repository 'https://download.docker.com/linux/ubuntu noble Release' does not have a Release file.
```

**Solución:**
```bash
# Verificar que usaste el nombre en código correcto
lsb_release -cs

# Eliminar y volver a añadir el repositorio
sudo rm /etc/apt/sources.list.d/docker.list
# Repetir los pasos 4 y 5 de la instalación
```

### Problema 4: Conflicto de puertos

**Error:**
```
Error starting userland proxy: listen tcp 0.0.0.0:80: bind: address already in use
```

**Solución:**
```bash
# Ver qué proceso está usando el puerto
sudo netstat -tlnp | grep :80

# O usar ss
sudo ss -tlnp | grep :80

# Detener el servicio conflictivo o usar otro puerto
docker run -p 8080:80 nginx
```

### Problema 5: Espacio en disco insuficiente

**Solución:**
```bash
# Ver uso de espacio de Docker
docker system df

# Limpiar recursos no utilizados
docker system prune -a

# Ver qué consume más espacio
du -sh /var/lib/docker/*
```

---

## Instalación de Versión Específica de Docker

Si necesitas instalar una versión específica de Docker:

### Paso 1: Listar versiones disponibles

```bash
apt-cache madison docker-ce
```

**Salida:**
```
docker-ce | 5:27.5.1-1~ubuntu.24.04~noble | https://download.docker.com/linux/ubuntu noble/stable amd64 Packages
docker-ce | 5:27.5.0-1~ubuntu.24.04~noble | https://download.docker.com/linux/ubuntu noble/stable amd64 Packages
docker-ce | 5:27.4.1-1~ubuntu.24.04~noble | https://download.docker.com/linux/ubuntu noble/stable amd64 Packages
```

### Paso 2: Instalar versión específica

```bash
# Formato: VERSION_STRING=5:VERSION-1~ubuntu.CODENAME~ARCHITECTURE
VERSION_STRING=5:27.5.0-1~ubuntu.24.04~noble

sudo apt-get install -y \
    docker-ce=$VERSION_STRING \
    docker-ce-cli=$VERSION_STRING \
    containerd.io \
    docker-buildx-plugin \
    docker-compose-plugin
```

### Paso 3: Evitar actualizaciones automáticas (opcional)

```bash
sudo apt-mark hold docker-ce docker-ce-cli
```

Para permitir actualizaciones nuevamente:
```bash
sudo apt-mark unhold docker-ce docker-ce-cli
```

---

## Desinstalación de Docker

### Desinstalación completa

```bash
# Paso 1: Desinstalar paquetes de Docker
sudo apt-get purge -y \
    docker-ce \
    docker-ce-cli \
    containerd.io \
    docker-buildx-plugin \
    docker-compose-plugin

# Paso 2: Eliminar directorios de datos
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd

# Paso 3: Eliminar el repositorio de Docker
sudo rm /etc/apt/sources.list.d/docker.list
sudo rm /etc/apt/keyrings/docker.asc

# Paso 4: Eliminar el grupo docker
sudo groupdel docker

# Paso 5: Actualizar repositorios
sudo apt-get update
```

---

## Recursos Adicionales

### Documentación oficial

- **Documentación de Docker**: https://docs.docker.com/
- **Docker Hub**: https://hub.docker.com/
- **Docker Compose**: https://docs.docker.com/compose/
- **Referencia de Dockerfile**: https://docs.docker.com/reference/dockerfile/

### Comunidad

- **Foros de Docker**: https://forums.docker.com/
- **Docker en GitHub**: https://github.com/docker
- **Stack Overflow**: Tag [docker]

### Cursos y tutoriales

- **Docker Getting Started**: https://docs.docker.com/get-started/
- **Play with Docker**: https://labs.play-with-docker.com/
- **Docker Curriculum**: https://docker-curriculum.com/

---

## Comandos de Referencia Rápida

```bash
# INSTALACIÓN
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# POST-INSTALACIÓN
sudo usermod -aG docker $USER
sudo systemctl enable docker

# VERIFICACIÓN
docker --version
docker run hello-world
docker compose version
```

---

## Notas de Seguridad

### Mejores prácticas

1. **No ejecutar contenedores como root** cuando sea posible
2. **Usar imágenes oficiales** verificadas de Docker Hub
3. **Mantener Docker actualizado** regularmente
4. **Escanear imágenes** en busca de vulnerabilidades
5. **Limitar recursos** de contenedores (CPU, memoria)
6. **Usar redes privadas** para contenedores
7. **No exponer el socket de Docker** innecesariamente

### Actualizar Docker

```bash
# Actualizar todos los paquetes
sudo apt-get update
sudo apt-get upgrade docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

---

## Conclusión

Has completado exitosamente la instalación de Docker en Ubuntu usando los repositorios oficiales. Ahora estás listo para:

- ✅ Crear y ejecutar contenedores
- ✅ Construir imágenes personalizadas
- ✅ Usar Docker Compose para aplicaciones multi-contenedor
- ✅ Implementar soluciones de microservicios
- ✅ Desarrollar aplicaciones en entornos consistentes

**¡Feliz containerización!** 🐳

---

**Documento creado**: Enero 2026  
**Versión**: 1.0  
**Basado en**: Documentación oficial de Docker  
**Compatible con**: Ubuntu 20.04, 22.04, 24.04 LTS