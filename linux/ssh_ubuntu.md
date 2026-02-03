---
title: 7. SSH server
parent: "Linux"
---

# Manual de instalación y configuración de SSH en Ubuntu Linux

## 1. Introducción

Este manual describe paso a paso cómo instalar y configurar un servidor
**SSH (Secure Shell)** en Ubuntu Linux. Se explican dos aspectos clave
de seguridad:

-   Uso de un **puerto alternativo** al puerto estándar 22.
-   Autenticación mediante **clave pública y privada**, deshabilitando
    el acceso por contraseña y bloqueando el inicio de sesión de
    usuarios estándar.

## 2. Requisitos previos

-   Ubuntu 20.04 o superior\
-   Usuario con privilegios sudo\
-   Cliente SSH instalado

## 3. Instalación del servidor SSH

``` bash
sudo apt update
sudo apt install openssh-server
sudo systemctl status ssh
```

## 4. Archivo de configuración

Ruta principal:

``` bash
/ etc / ssh / sshd_config
```

Crear copia de seguridad:

``` bash
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
```

## 5. Uso de puerto alternativo

Editar:

``` text
Port 2222
```

Firewall:

``` bash
sudo ufw allow 2222/tcp
sudo ufw reload
```

## 6. Autenticación por clave pública

Generar claves:

``` bash
ssh-keygen -t ed25519
```

Copiar clave:

``` bash
ssh-copy-id -p 2222 usuario@IP_SERVIDOR
```

## 7. Deshabilitar contraseña

``` text
PasswordAuthentication no
UsePAM no
```

## 8. Bloquear usuarios estándar

``` text
AllowUsers usuario_admin
```

o por grupo:

``` text
AllowGroups sshadmin
```

## 9. Reiniciar servicio

``` bash
sudo systemctl restart ssh
```

## 10. Conexión

``` bash
ssh -p 2222 usuario_admin@IP_SERVIDOR
```

## 11. Evitar introducir la passphrase al conectar

Para evitar el uso de la frase de paso para la conexión ssh podemos usar la opción `-i` y añadiendo la ruta de la clave ssh:

```bash
ssh -i clavePrivada -p 2222 usuario_admin@IP_SERVIDOR
```

Antes iniciamos el agente SSH, con el siguiente comando:
```bash
eval "$(ssh-agent -s)"
```

y cargamos la clave privada
```bash
ssh-add clavePrivada
```
Nos pedirá la passphrase una única vez y nunca mas

## 12. Conclusión

Servidor SSH seguro con puerto alternativo, claves y sin acceso de
usuarios estándar.
