---
title: "05. Seguridad e integridad"
parent: "IPTables"
---

## Lista de comandos Linux útiles para comprobar la seguridad e integridad del sistema:

### 1\. **Auditoría de usuarios y permisos**

*   **`cat /etc/passwd`**: Verifica los usuarios del sistema.
    
*   **`cat /etc/shadow`**: Revisa las contraseñas encriptadas (requiere permisos de root).
    
*   **`sudo awk -F: '($3 == 0) {print}' /etc/passwd`**: Busca cuentas con UID 0 (root).
    
*   **`ls -l /etc/passwd /etc/shadow`**: Verifica los permisos de los archivos críticos.
    
*   **`sudo find / -perm -4000 -o -perm -2000`**: Busca archivos con permisos SUID o SGID.

*  **`cat /etc/sudoers | grep -v '#'`**: Listar usuarios con privilegios de superusuario
*  **`last`**: Ver los ultimos accesos al sistema
*  **`who w`** Lista conexiones activas SSH  
*  **`journalctl -xe | grep "Failed password"`** Inicios de sesión fallidos.
*  **`find /etc -type f -mtime -1  # Archivos modificados en las últimas 24 horas`** Cambios recientes en archivos del sistema*

### 2\. **Verificación de servicios y puertos abiertos**

*   **`sudo netstat -tuln`**: Lista los puertos abiertos y los servicios asociados.
    
*   **`sudo ss -tuln`**: Alternativa moderna a `netstat`.
    
*   **`sudo lsof -i`**: Muestra los archivos abiertos relacionados con la red.
      `sudo lsof -i -P -n`: Verificar conexiones entrantes y salientes
    
*   **`sudo nmap localhost`**: Escanea los puertos locales (requiere instalación de `nmap`). `sudo nmap -sS -p- localhost`
    

### 3\. **Monitoreo de procesos**

*   **`ps aux`**: Lista todos los procesos en ejecución.
    `ps aux --sort=-%cpu`: Procesos sospechosos
    `ps -U root -u root u`: Procesos ejecutandose como root
*   **`top` o `htop`**: Monitorea el uso de recursos y procesos en tiempo real.
    
*   **`sudo pstree`**: Muestra los procesos en forma de árbol.
    

### 4\. **Verificación de integridad de archivos**

*   **`sudo debsums`** (en Debian/Ubuntu): Verifica la integridad de los paquetes instalados.
    
*   **`sudo rpm -Va`** (en RedHat/CentOS): Verifica la integridad de los paquetes RPM.
    
*   **`sudo tripwire --check`**: Si tienes Tripwire instalado, verifica cambios en los archivos del sistema.
    
*   **`sudo aide --check`**: Similar a Tripwire, verifica la integridad del sistema con AIDE.
    

### 5\. **Revisión de logs**

*   **`sudo cat /var/log/auth.log`** (o `/var/log/secure` en RedHat): Revisa intentos de autenticación.
    
*   **`sudo grep "Failed" /var/log/auth.log`**: Busca intentos fallidos de inicio de sesión.
    
*   **`sudo tail -f /var/log/syslog`**: Monitorea los logs en tiempo real.
    
*   **`sudo journalctl -xe`**: Revisa logs del sistema con `systemd`.
    

### 6\. **Verificación de actualizaciones y parches**

*   **`sudo apt list --upgradable`** (en Debian/Ubuntu): Lista paquetes que necesitan actualización.
    
*   **`sudo yum check-update`** (en RedHat/CentOS): Verifica actualizaciones disponibles.
    
*   **`sudo unattended-upgrades --dry-run`**: Simula la instalación de actualizaciones de seguridad.
    

### 7\. **Revisión de firewall**

*   **`sudo ufw status`**: Verifica el estado del firewall UFW (en Ubuntu).
    
*   **`sudo iptables -L -v -n`**: Lista las reglas de iptables.
    
*   **`sudo firewall-cmd --list-all`**: Verifica las reglas de firewalld (en RedHat/CentOS).
    

### 8\. **Escaneo de malware**

*   **`sudo clamscan -r /`**: Escanea el sistema en busca de malware con ClamAV.
    
*   **`sudo rkhunter --check`**: Ejecuta un escaneo con Rootkit Hunter.
    
*   **`sudo chkrootkit`**: Busca rootkits en el sistema.
    

### 9\. **Revisión de tareas programadas**

*   **`crontab -l`**: Lista las tareas programadas del usuario actual.
    
*   **`sudo cat /etc/crontab`**: Revisa las tareas programadas del sistema.
    
*   **`sudo ls -l /etc/cron.*`**: Verifica los archivos en los directorios de cron.
    

### 10\. **Verificación de módulos del kernel cargados**

*   **`lsmod`**: Lista los módulos del kernel cargados.
    
*   **`sudo modprobe -r <módulo>`**: Elimina un módulo sospechoso (si es seguro hacerlo).
    

### 11\. **Revisión de variables de entorno**

*   **`printenv`**: Muestra las variables de entorno actuales.
    
*   **`echo $PATH`**: Verifica la variable PATH para asegurarte de que no haya rutas sospechosas.
    

### 12\. **Verificación de conexiones de red activas**

*   **`sudo netstat -anp`**: Muestra todas las conexiones de red y los procesos asociados.
    
*   **`sudo lsof -i -n`**: Lista las conexiones de red y los archivos abiertos.
    

### 13\. **Revisión de archivos ocultos**

*   **`sudo find / -name ".*" -ls`**: Busca archivos ocultos en el sistema.
    

### 14\. **Verificación de SELinux/AppArmor**

*   **`sestatus`**: Verifica el estado de SELinux.
    
*   **`aa-status`**: Verifica el estado de AppArmor.
    

### 15\. **Revisión de permisos de archivos sensibles**

*   **`sudo find / -type f -perm -o+w`**: Busca archivos con permisos de escritura para otros.
    
*   **`sudo find / -type d -perm -o+w`**: Busca directorios con permisos de escritura para otros.
    

### 16\. **Verificación de la configuración SSH**

*   **`sudo cat /etc/ssh/sshd_config`**: Revisa la configuración del servidor SSH.
    
*   **`sudo grep PermitRootLogin /etc/ssh/sshd_config`**: Verifica si el login como root está permitido.
    

### 17\. **Revisión de la configuración de sudo**

*   **`sudo cat /etc/sudoers`**: Verifica los privilegios de sudo.
    
*   **`sudo grep -r "NOPASSWD" /etc/sudoers*`**: Busca usuarios con permisos de sudo sin contraseña.
    

### 18\. **Verificación de la configuración de PAM**

*   **`cat /etc/pam.d/common-auth`**: Revisa la configuración de autenticación PAM.
    

### 19\. **Revisión de la configuración de sysctl**

*   **`sudo sysctl -a`**: Muestra todas las configuraciones de seguridad del kernel.
    

### 20\. **Escaneo de vulnerabilidades**

*   **`sudo lynis audit system`**: Ejecuta un escaneo de seguridad con Lynis.
    

* * *

