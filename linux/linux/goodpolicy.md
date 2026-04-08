---
title: "06. Buenas Prácticas"
parent: "IPTables"
---

### **1. Configuración del Firewall**

*   **Habilita un firewall**: Usa `ufw` (Uncomplicated Firewall) o `firewalld` para gestionar las reglas de firewall.
    
    *   **UFW** (Ubuntu/Debian):
        
        ```bash
        sudo ufw enable
        sudo ufw allow ssh
        sudo ufw allow http
        sudo ufw allow https
        sudo ufw deny all
        ```
    *   **Firewalld** (RedHat/CentOS):
        
        ```bash
        sudo systemctl start firewalld
        sudo systemctl enable firewalld
        sudo firewall-cmd --add-service=ssh --permanent
        sudo firewall-cmd --add-service=http --permanent
        sudo firewall-cmd --add-service=https --permanent
        sudo firewall-cmd --reload
        ```
*   **Bloquea puertos innecesarios**: Cierra todos los puertos que no estén en uso.
    
    ```bash
    sudo ufw deny <puerto>
    ```

* * *

### **2. Configuración de SSH**

*   **Cambia el puerto predeterminado**: Cambia el puerto SSH (22) a uno no estándar.
    
    ```bash
    sudo nano /etc/ssh/sshd_config
    ```
    Cambia la línea `Port 22` a `Port <nuevo_puerto>`.
    
*   **Deshabilita el login como root**:
    
    ```bash
    PermitRootLogin no
     ```
*   **Usa autenticación por clave SSH**:
    
    *   Genera un par de claves SSH en el cliente:
        
         ```bash
        ssh-keygen -t rsa -b 4096
         ```
    *   Copia la clave pública al servidor:
        
         ```bash
        ssh-copy-id usuario@servidor
         ```
    *   Deshabilita la autenticación por contraseña:
        
         ```bash
        PasswordAuthentication no
         ```
*   **Limita los usuarios que pueden conectarse por SSH**:
    
     ```bash
    AllowUsers usuario1 usuario2
     ```
*   **Habilita el uso de fail2ban**: Instala y configura `fail2ban` para bloquear intentos de acceso fallidos.
    
     ```bash
    sudo apt install fail2ban
    sudo systemctl enable fail2ban
    sudo systemctl start fail2ban
     ```

* * *

### **3. Actualizaciones del sistema**

*   **Mantén el sistema actualizado**: Instala actualizaciones de seguridad regularmente.
    
     ```bash
    sudo apt update && sudo apt upgrade -y  # Debian/Ubuntu
    sudo yum update -y                     # RedHat/CentOS
     ```
*   **Habilita actualizaciones automáticas**:
    
     ```bash
    sudo apt install unattended-upgrades   # Debian/Ubuntu
    sudo nano /etc/apt/apt.conf.d/20auto-upgrades
     ```
    Asegúrate de que las siguientes líneas estén presentes:
    
     ```bash
    APT::Periodic::Update-Package-Lists "1";
    APT::Periodic::Unattended-Upgrade "1";
     ```

* * *

### **4. Configuración de red**

*   **Deshabilita servicios innecesarios**: Detén y deshabilita servicios que no uses.
    
     ```bash
    sudo systemctl stop <servicio>
    sudo systemctl disable <servicio>
     ```
*   **Usa IPTables o nftables para filtrar tráfico**:
    
    *   Bloquea tráfico no deseado:
        
         ```bash
        sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT
        sudo iptables -A INPUT -j DROP
         ```
        
    *   Guarda las reglas:
        
         ```bash
        sudo iptables-save > /etc/iptables/rules.v4
         ```
*   **Configura un IDS/IPS**: Usa herramientas como **Snort** o **Suricata** para detectar y prevenir intrusiones.
    

* * *

### **5. Monitoreo de red**

*   **Usa herramientas de monitoreo**:
    
    *   **`netstat` o `ss`**: Para ver conexiones activas.
        
        ```bash
        sudo netstat -tuln
        sudo ss -tuln
        ```
        
    *   **`tcpdump`**: Para capturar y analizar tráfico de red.
        
         ```bash
        sudo tcpdump -i eth0
         ```
    *   **`Wireshark`**: Para análisis avanzado de paquetes.
        
*   **Habilita logging**: Revisa los logs de red regularmente.
    
     ```bash
    sudo cat /var/log/syslog | grep network
    ```

* * *

### **6. Uso de VPN**

*   **Configura una VPN**: Usa OpenVPN o WireGuard para cifrar el tráfico de red.
    
    *   **OpenVPN**:
        
        ```bash
        sudo apt install openvpn
        ```
    *   **WireGuard**:
        
        ```bash
        sudo apt install wireguard
        ```

* * *

### **7. Configuración de DNS**

*   **Usa DNS seguros**: Configura servidores DNS como Cloudflare (1.1.1.1) o Google DNS (8.8.8.8).
    
    ```bash
    sudo nano /etc/resolv.conf
    ```
    Añade:
    
    ```bash
    nameserver 1.1.1.1
    nameserver 8.8.8.8
    ```

* * *

### **8. Protección contra ataques DDoS**

*   **Usa herramientas de mitigación**: Configura `fail2ban` o `mod_evasive` (para Apache).
    
*   **Limita el número de conexiones**:
    
    ```bash
    sudo iptables -A INPUT -p tcp --dport 80 -m connlimit --connlimit-above 20 -j DROP
    ```

* * *

### **9. Cifrado de datos**

*   **Cifra el tráfico de red**: Usa HTTPS, SSH, o VPN para proteger los datos en tránsito.
    
*   **Cifra discos**: Usa LUKS para cifrar discos duros.
    
    ```bash
    sudo cryptsetup luksFormat /dev/sdX
     ```

* * *

### **10. Auditorías y pruebas de seguridad**

*   **Realiza escaneos de vulnerabilidades**: Usa herramientas como **Nmap**, **OpenVAS**, o **Lynis**.
    
    ```bash
    sudo lynis audit system
     ```
    
*   **Pruebas de penetración**: Usa herramientas como **Metasploit** o **Nessus** para evaluar la seguridad.
    

* * *

### **11. Políticas de seguridad**

*   **Implementa políticas de contraseñas fuertes**: Usa `pam_cracklib` o `pam_pwquality`.
    
*   **Habilita la expiración de contraseñas**:
    
    ```bash
    sudo chage -M 90 usuario
     ```
*   **Usa SELinux o AppArmor**: Habilita y configura módulos de seguridad del kernel.
    
    ```bash
    sudo setenforce 1  # SELinux
    sudo aa-enforce /path/to/profile  # AppArmor
     ```

* * *

### **12. Copias de seguridad**

Mantener copias de seguridad regulares es esencial para garantizar la recuperación de datos en caso de fallos, ataques o desastres. Aquí hay algunas recomendaciones y herramientas para implementar copias de seguridad seguras:

#### **Herramientas de copias de seguridad**

*   **`rsync`**: Sincroniza archivos y directorios de manera eficiente.
    
    ```bash
    sudo rsync -av /ruta/origen /ruta/destino
    ```
*   **`BorgBackup`**: Herramienta de copias de seguridad con deduplicación y compresión.
    
    ```bash
    sudo apt install borgbackup
    borg create /ruta/backup::nombre-backup-$(date +%Y-%m-%d) /ruta/origen
    ```
*   **`Restic`**: Copias de seguridad cifradas y eficientes.
    
    ```bash
    sudo apt install restic
    restic -r /ruta/backup init
    restic -r /ruta/backup backup /ruta/origen
    ```

#### **Cifrado de copias de seguridad**

*   **Cifra tus copias de seguridad**: Asegúrate de que los datos estén protegidos.
    
    *   Usa `gpg` para cifrar archivos:
        
        ```bash
        gpg -c archivo.txt
        ```
    *   O cifra el disco donde se almacenan las copias con LUKS:
        
        ```bash
        sudo cryptsetup luksFormat /dev/sdX
        ```

#### **Automatización de copias de seguridad**

*   Usa `cron` para programar copias de seguridad automáticas:
    
    ```bash
    crontab -e
    ```
    Añade una línea como esta para ejecutar una copia diaria a las 2 AM:
    
    ```bash
    0 2 * * * /ruta/al/script/de/backup.sh
    ```

#### **Verificación de copias de seguridad**

*   **Verifica la integridad de las copias**: Asegúrate de que los datos se puedan restaurar.
    
    *   Con `BorgBackup`:
        
        ```bash
         borg check /ruta/backup
        ```
    *   Con `Restic`:
        
        ```bash
        restic -r /ruta/backup check
        ```

#### **Almacenamiento externo**

*   **Guarda copias en ubicaciones externas**: Usa discos duros externos, servicios en la nube (como AWS S3, Google Cloud Storage) o servidores remotos.
    
    *   Ejemplo con `rsync` hacia un servidor remoto:
        
        ```bash
        rsync -avz -e ssh /ruta/origen usuario@servidor:/ruta/destino
        ```

* * *

Siguiendo estas prácticas, garantizarás que tus datos estén protegidos y disponibles en caso de cualquier incidente.
    