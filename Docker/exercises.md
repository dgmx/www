---
title: 5. Ejercicios
parent: "Docker"
---

# Ejercicios de Docker para Administración de Sistemas Linux

## Ejercicio 1: Crear y gestionar contenedores básicos

**Objetivo:** Crear un contenedor Ubuntu y ejecutar comandos básicos de administración.

**Pasos:**
```bash
# Descargar la imagen de Ubuntu
docker pull ubuntu:22.04

# Crear y ejecutar un contenedor interactivo
docker run -it --name mi-ubuntu ubuntu:22.04 /bin/bash

# Dentro del contenedor, actualizar repositorios
apt update && apt upgrade -y

# Instalar herramientas básicas
apt install -y vim net-tools htop

# Verificar información del sistema
uname -a
cat /etc/os-release
```

**Solución verificada:**
```bash
# Salir del contenedor (Ctrl+D o exit)
# Ver contenedores en ejecución
docker ps -a

# Reiniciar el contenedor
docker start mi-ubuntu

# Conectarse nuevamente
docker exec -it mi-ubuntu /bin/bash
```

---

## Ejercicio 2: Gestión de usuarios y permisos

**Objetivo:** Crear usuarios, grupos y configurar permisos dentro de un contenedor.

**Pasos:**
```bash
# Ejecutar contenedor Ubuntu
docker run -it --name usuarios-linux ubuntu:22.04 /bin/bash

# Crear un nuevo usuario
useradd -m -s /bin/bash developer

# Establecer contraseña
passwd developer

# Crear un grupo
groupadd devteam

# Añadir usuario al grupo
usermod -aG devteam developer

# Crear directorio con permisos específicos
mkdir /proyectos
chown developer:devteam /proyectos
chmod 770 /proyectos

# Verificar configuración
id developer
ls -ld /proyectos
cat /etc/passwd | grep developer
cat /etc/group | grep devteam
```

**Resultado esperado:**
- Usuario `developer` creado con directorio home
- Grupo `devteam` creado y asignado
- Directorio `/proyectos` con permisos `rwxrwx---`

---

## Ejercicio 3: Gestión de procesos y servicios

**Objetivo:** Instalar y gestionar servicios en un contenedor.

**Pasos:**
```bash
# Crear contenedor con systemd (usando imagen especial)
docker run -d --name servicios-linux --privileged ubuntu:22.04 /bin/bash -c "while true; do sleep 3600; done"

# Acceder al contenedor
docker exec -it servicios-linux /bin/bash

# Instalar Apache
apt update
apt install -y apache2

# Gestionar el servicio
service apache2 start
service apache2 status

# Ver procesos en ejecución
ps aux | grep apache2
top -n 1

# Verificar puertos en escucha
apt install -y net-tools
netstat -tlnp
```

**Verificación:**
```bash
# Comprobar que Apache está corriendo
ps aux | grep apache2 | grep -v grep
```

---

## Ejercicio 4: Configuración de red y conectividad

**Objetivo:** Crear redes Docker y configurar comunicación entre contenedores.

**Pasos:**
```bash
# Crear una red personalizada
docker network create --driver bridge red-empresarial --subnet=172.20.0.0/16

# Crear contenedor servidor web
docker run -d --name web-server --network red-empresarial --ip 172.20.0.10 nginx:alpine

# Crear contenedor cliente
docker run -it --name cliente --network red-empresarial --ip 172.20.0.20 ubuntu:22.04 /bin/bash

# Dentro del contenedor cliente, instalar herramientas
apt update && apt install -y iputils-ping curl net-tools

# Verificar conectividad
ping -c 4 172.20.0.10
curl http://172.20.0.10

# Ver configuración de red
ifconfig
ip addr show
ip route
```

**Comandos de verificación externos:**
```bash
# Ver detalles de la red
docker network inspect red-empresarial

# Listar todas las redes
docker network ls
```

---

## Ejercicio 5: Montaje de volúmenes y persistencia de datos

**Objetivo:** Trabajar con volúmenes y bind mounts para persistencia.

**Pasos:**
```bash
# Crear un volumen
docker volume create datos-sistema

# Crear directorio en el host
mkdir -p ~/docker-data/logs

# Ejecutar contenedor con volúmenes
docker run -it --name sistema-archivos \
  -v datos-sistema:/var/data \
  -v ~/docker-data/logs:/var/log/app \
  ubuntu:22.04 /bin/bash

# Dentro del contenedor, crear datos
echo "Datos persistentes" > /var/data/archivo.txt
echo "Log de aplicación" > /var/log/app/app.log

# Crear estructura de directorios
mkdir -p /var/data/backups
mkdir -p /var/data/config

# Establecer permisos
chmod 755 /var/data
chmod 644 /var/data/archivo.txt

# Verificar
ls -lR /var/data
cat /var/data/archivo.txt
```

**Verificación de persistencia:**
```bash
# Salir y eliminar el contenedor
exit
docker rm sistema-archivos

# Crear nuevo contenedor con el mismo volumen
docker run -it --name sistema-archivos-2 -v datos-sistema:/var/data ubuntu:22.04 /bin/bash
cat /var/data/archivo.txt  # Los datos persisten

# Verificar en el host
cat ~/docker-data/logs/app.log
```

---

## Ejercicio 6: Monitorización de recursos del sistema

**Objetivo:** Monitorizar CPU, memoria y disco en contenedores.

**Pasos:**
```bash
# Crear contenedor con límites de recursos
docker run -it --name monitor-recursos \
  --memory="512m" \
  --cpus="1.0" \
  ubuntu:22.04 /bin/bash

# Instalar herramientas de monitorización
apt update
apt install -y sysstat htop iotop procps

# Verificar límites asignados
cat /sys/fs/cgroup/memory/memory.limit_in_bytes
nproc

# Monitorizar en tiempo real
htop

# Ver estadísticas de CPU
mpstat 1 5

# Ver uso de memoria
free -h
cat /proc/meminfo

# Ver uso de disco
df -h
du -sh /var/*
```

**Monitorización desde el host:**
```bash
# Ver estadísticas del contenedor
docker stats monitor-recursos

# Ver estadísticas de todos los contenedores
docker stats
```

---

## Ejercicio 7: Programación de tareas con cron

**Objetivo:** Configurar tareas programadas dentro de un contenedor.

**Pasos:**
```bash
# Ejecutar contenedor
docker run -d --name cron-server ubuntu:22.04 /bin/bash -c "while true; do sleep 3600; done"

# Acceder al contenedor
docker exec -it cron-server /bin/bash

# Instalar cron
apt update && apt install -y cron vim

# Crear script de respaldo
cat > /usr/local/bin/backup.sh << 'EOF'
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
echo "Backup ejecutado: $DATE" >> /var/log/backup.log
EOF

chmod +x /usr/local/bin/backup.sh

# Configurar crontab
crontab -e
# Añadir la siguiente línea:
# */5 * * * * /usr/local/bin/backup.sh

# O directamente:
echo "*/5 * * * * /usr/local/bin/backup.sh" | crontab -

# Iniciar servicio cron
service cron start

# Verificar trabajos programados
crontab -l

# Esperar y verificar logs
sleep 300
cat /var/log/backup.log
```

**Solución completa:**
```bash
# Ver logs del sistema
tail -f /var/log/cron.log
```

---

## Ejercicio 8: Gestión de logs y rotación

**Objetivo:** Configurar y gestionar logs del sistema.

**Pasos:**
```bash
# Ejecutar contenedor
docker run -it --name log-manager ubuntu:22.04 /bin/bash

# Instalar herramientas
apt update && apt install -y rsyslog logrotate

# Configurar rsyslog
service rsyslog start

# Crear aplicación que genera logs
cat > /usr/local/bin/log-generator.sh << 'EOF'
#!/bin/bash
while true; do
    logger -t MiApp "Log generado: $(date)"
    sleep 10
done
EOF

chmod +x /usr/local/bin/log-generator.sh

# Configurar rotación de logs
cat > /etc/logrotate.d/miapp << 'EOF'
/var/log/syslog {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    notifempty
}
EOF

# Ejecutar generador en segundo plano
/usr/local/bin/log-generator.sh &

# Verificar logs
tail -f /var/log/syslog | grep MiApp

# Probar rotación manual
logrotate -f /etc/logrotate.conf
ls -lh /var/log/
```

**Comandos de verificación:**
```bash
# Ver logs del contenedor desde Docker
docker logs log-manager

# Ver logs en tiempo real
docker logs -f log-manager
```

---

## Ejercicio 9: Configuración de firewall con iptables

**Objetivo:** Configurar reglas de firewall básicas.

**Pasos:**
```bash
# Ejecutar contenedor privilegiado (necesario para iptables)
docker run -it --name firewall-config --privileged --cap-add=NET_ADMIN ubuntu:22.04 /bin/bash

# Instalar iptables
apt update && apt install -y iptables netcat-openbsd

# Ver reglas actuales
iptables -L -n -v

# Configurar política por defecto
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Permitir loopback
iptables -A INPUT -i lo -j ACCEPT

# Permitir conexiones establecidas
iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Permitir SSH (puerto 22)
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Permitir HTTP (puerto 80)
iptables -A INPUT -p tcp --dport 80 -j ACCEPT

# Permitir HTTPS (puerto 443)
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Ver reglas configuradas
iptables -L -n -v --line-numbers

# Guardar reglas (normalmente)
# iptables-save > /etc/iptables/rules.v4
```

**Verificación:**
```bash
# Probar reglas
nc -l -p 80 &
nc -l -p 8080 &

# Desde otro terminal/contenedor, verificar accesibilidad
# El puerto 80 debería ser accesible, el 8080 no
```

---

## Ejercicio 10: Dockerfile personalizado con script de inicialización

**Objetivo:** Crear un Dockerfile que configure un sistema con usuarios, servicios y configuraciones automáticas.

**Pasos:**

Crear el siguiente Dockerfile:

```dockerfile
FROM ubuntu:22.04

# Evitar interacciones durante la instalación
ENV DEBIAN_FRONTEND=noninteractive

# Actualizar sistema e instalar paquetes
RUN apt update && apt upgrade -y && \
    apt install -y \
    openssh-server \
    apache2 \
    sudo \
    vim \
    net-tools \
    htop \
    cron && \
    apt clean

# Crear usuarios
RUN useradd -m -s /bin/bash admin && \
    echo "admin:password123" | chpasswd && \
    usermod -aG sudo admin

RUN useradd -m -s /bin/bash developer && \
    echo "developer:dev123" | chpasswd

# Configurar SSH
RUN mkdir /var/run/sshd && \
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config

# Crear directorios de trabajo
RUN mkdir -p /var/www/proyecto && \
    chown developer:developer /var/www/proyecto && \
    chmod 755 /var/www/proyecto

# Script de inicialización
RUN cat > /entrypoint.sh << 'EOF'
#!/bin/bash
service ssh start
service apache2 start
service cron start
echo "Sistema iniciado correctamente"
exec /bin/bash
EOF

RUN chmod +x /entrypoint.sh

# Exponer puertos
EXPOSE 22 80

# Punto de entrada
ENTRYPOINT ["/entrypoint.sh"]
```

**Construir y ejecutar:**

```bash
# Construir la imagen
docker build -t sistema-linux-completo .

# Ejecutar el contenedor
docker run -d -p 2222:22 -p 8080:80 --name servidor-completo sistema-linux-completo

# Acceder al contenedor
docker exec -it servidor-completo /bin/bash

# Verificar servicios
service --status-all

# Probar SSH (desde otro terminal)
ssh admin@localhost -p 2222

# Probar Apache
curl http://localhost:8080
```

**Verificación completa:**
```bash
# Dentro del contenedor, verificar todo
ps aux | grep -E 'sshd|apache2|cron'
cat /etc/passwd | grep -E 'admin|developer'
ls -la /var/www/proyecto
netstat -tlnp
```

---

## Comandos útiles de Docker para todos los ejercicios

```bash
# Limpiar contenedores detenidos
docker container prune

# Limpiar imágenes no utilizadas
docker image prune

# Limpiar volúmenes no utilizados
docker volume prune

# Limpiar todo
docker system prune -a

# Ver uso de espacio
docker system df

# Exportar contenedor
docker export mi-ubuntu > mi-ubuntu.tar

# Importar contenedor
docker import mi-ubuntu.tar ubuntu-custom:latest

# Copiar archivos desde/hacia contenedor
docker cp archivo.txt mi-ubuntu:/root/
docker cp mi-ubuntu:/root/archivo.txt ./
```

---

## Notas adicionales

- Estos ejercicios están diseñados para practicar administración de sistemas Linux en un entorno Docker seguro.
- Recuerda que los contenedores son efímeros por naturaleza; usa volúmenes para datos persistentes.
- Para producción, considera usar Docker Compose para gestionar múltiples contenedores.
- Practica la seguridad: no uses contraseñas débiles en entornos reales.
- [Repositorio de Docker Compose](compose_samples/docker-compose-playground-master.zip)

**¡Feliz aprendizaje!**