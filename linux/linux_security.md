---
title: 4. Seguridad Linux
parent: "Linux"
---

# 🔍 Comprobación de Seguridad e Integridad en Linux

Este documento recopila comandos prácticos para auditar la seguridad y la integridad de un sistema Linux, así como un conjunto de buenas prácticas operativas orientadas especialmente a la exposición en red (servicios publicados, proxy inverso, acceso remoto, etc.). Puede utilizarse como checklist periódico de revisión o como guía de endurecimiento (hardening) inicial del sistema.

---

## 🎯 Objetivos

- Detectar accesos no autorizados o comportamientos anómalos.
- Identificar servicios y puertos expuestos innecesariamente.
- Verificar la integridad de archivos críticos del sistema.
- Reducir la superficie de ataque en redes públicas o privadas.
- Establecer controles preventivos y correctivos.

---

# 🔍 Comprobación de Seguridad e Integridad en Linux

## 🔹 1. Verificar usuarios y accesos

- **Listar usuarios en el sistema**
  ```bash
  cat /etc/passwd
  ```
- **Listar usuarios con privilegios de superusuario**
  ```bash
  cat /etc/sudoers | grep -v '#'
  ```
- **Ver los intentos de inicio de sesión fallidos**
  ```bash
  journalctl -xe | grep "Failed password"
  ```
- **Ver los últimos accesos al sistema**
  ```bash
  last
  ```
- **Listar conexiones activas de SSH**
  ```bash
  who
  ```

## 🔹 2. Monitorear procesos sospechosos

- **Listar procesos en ejecución**
  ```bash
  ps aux --sort=-%cpu
  ```
- **Verificar si hay procesos ejecutándose como root**
  ```bash
  ps -U root -u root u
  ```

## 🔹 3. Revisar puertos abiertos y conexiones de red

- **Ver los puertos abiertos y las conexiones activas**
  ```bash
  netstat -tulnp
  ```
  (Si `netstat` no está disponible, usar `ss` en su lugar)
  ```bash
  ss -tulnp
  ```
- **Escanear puertos abiertos en el sistema**
  ```bash
  sudo nmap -sS -p- localhost
  ```
- **Comprobar si hay conexiones sospechosas activas**
  ```bash
  netstat -antp | grep ESTABLISHED
  ```
- **Verificar conexiones entrantes y salientes**
  ```bash
  sudo lsof -i -P -n
  ```

## 🔹 4. Revisar la integridad del sistema

- **Verificar la integridad de archivos clave del sistema**
  ```bash
  sudo debsums -c  # Para sistemas basados en Debian
  ```
  ```bash
  rpm -Va  # Para sistemas basados en RHEL/Fedora
  ```
- **Comprobar cambios recientes en archivos del sistema**
  ```bash
  find /etc -type f -mtime -1  # Archivos modificados en las últimas 24 horas
  ```
- **Buscar archivos con permisos inseguros**
  ```bash
  find / -type f -perm 777
  ```

## 🔹 5. Verificar y analizar logs

- **Examinar el registro de autenticación**
  ```bash
  sudo cat /var/log/auth.log | grep "ssh"
  ```
- **Analizar logs del sistema en tiempo real**
  ```bash
  sudo journalctl -f
  ```

# 🔐 Buenas Prácticas para Asegurar un Sistema Linux

## 1️⃣ Asegurar conexiones de red

✅ Configurar el firewall con `ufw` (para sistemas basados en Ubuntu/Debian):

```bash
sudo ufw enable
sudo ufw default deny incoming
sudo ufw allow 22/tcp  # Habilitar SSH si es necesario
sudo ufw status verbose
```

✅ En sistemas con `firewalld` (RHEL, CentOS, Fedora):

```bash
sudo systemctl start firewalld
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --reload
```

✅ Desactivar servicios innecesarios:

```bash
sudo systemctl list-units --type=service
sudo systemctl disable nombre-del-servicio
```

## 2️⃣ Asegurar SSH

✅ **Cambiar el puerto por defecto de SSH (evita ataques automatizados)**\
Editar el archivo de configuración:

```bash
sudo nano /etc/ssh/sshd_config
```

Cambiar la línea:

```
Port 2222
```

Reiniciar SSH:

```bash
sudo systemctl restart ssh
```

✅ **Deshabilitar acceso SSH con root**\
En `/etc/ssh/sshd_config` modificar:

```
PermitRootLogin no
```

✅ **Habilitar autenticación con clave pública y deshabilitar contraseñas**

```
PasswordAuthentication no
PubkeyAuthentication yes
```

## 3️⃣ Mantener el sistema actualizado

```bash
sudo apt update && sudo apt upgrade -y  # Debian/Ubuntu
sudo yum update -y                      # RHEL/CentOS
sudo dnf update -y                      # Fedora
```

## 4️⃣ Configurar detección de intrusos

✅ **Instalar y configurar Fail2Ban** (bloquea IPs sospechosas automáticamente)

```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
```

✅ **Ver logs de Fail2Ban**

```bash
sudo journalctl -u fail2ban
```

## 5️⃣ Configurar SELinux o AppArmor

✅ **Habilitar SELinux en sistemas RHEL/Fedora**

```bash
sestatus
sudo setenforce 1
```

✅ **Habilitar AppArmor en sistemas Debian/Ubuntu**

```bash
sudo aa-status
sudo systemctl enable apparmor
```

