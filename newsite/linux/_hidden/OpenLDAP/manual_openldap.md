# Manual Técnico de Implementación de OpenLDAP en Ubuntu

## Despliegue de servidor LDAP, gestión de identidades y autenticación de clientes Linux

**Versión:** 1.0\
**Sistema operativo:** Ubuntu Server / Ubuntu Desktop\
**Autor:** Manual técnico de despliegue LDAP para ASO\
**Fecha:** 2026

------------------------------------------------------------------------

## 1. Introducción

OpenLDAP es una implementación libre del protocolo **LDAP (Lightweight
Directory Access Protocol)** utilizada para la gestión centralizada de
identidades, autenticación y directorios corporativos.

Este documento describe el procedimiento profesional para:

- Implementar un **servidor OpenLDAP**
- Diseñar la **estructura del directorio**
- Crear **unidades organizativas**
- Gestionar **usuarios y grupos**
- Integrar **clientes Ubuntu Desktop**
- Administrar el directorio mediante **herramientas gráficas**

------------------------------------------------------------------------

## 2. Arquitectura del sistema

### 2.1 Componentes

| Componente | Función |
|---|---|
| Servidor OpenLDAP | Almacenamiento central de identidades |
| Cliente Linux | Autenticación contra LDAP |
| NSS | Resolución de identidades |
| PAM | Control de autenticación |
| Herramientas gráficas | Administración del directorio |

### 2.2 Ejemplo de infraestructura

Servidor LDAP

    Hostname: ldap-server
    IP: 192.168.1.10
    Dominio LDAP: dc=empresa,dc=local

Clientes Linux

    ubuntu-desktop-01
    ubuntu-desktop-02

------------------------------------------------------------------------

## 3. Instalación del servidor OpenLDAP

Actualizar sistema:

```bash
sudo apt update
sudo apt upgrade -y
```

Instalar paquetes:

```bash
sudo apt install slapd ldap-utils
```

Reconfigurar instalación para definir parámetros del directorio:

```bash
sudo dpkg-reconfigure slapd
```

Configuración recomendada:

| Parámetro | Valor |
|-------------|--------------|
| DNS domain  | empresa.local |
| Organization | Empresa |
| Admin DN | cn=admin,dc=empresa,dc=local |
| Database backend | MDB |
| LDAPv2 | Disabled |

------------------------------------------------------------------------

## 4. Verificación del servicio

Verificar estado del demonio:

```bash
sudo systemctl status slapd
```

Consultar árbol LDAP:

```bash
ldapsearch -x -LLL -H ldap:/// -b dc=empresa,dc=local
```

------------------------------------------------------------------------

## 5. Diseño del árbol del directorio

Una estructura LDAP recomendada para entornos corporativos es:

    dc=empresa,dc=local
    │
    ├── ou=People
    │
    ├── ou=Groups
    │
    └── ou=Devices

------------------------------------------------------------------------

## 6. Creación de unidades organizativas

Crear archivo:

    estructura.ldif

Contenido:

```bash
dn: ou=People,dc=empresa,dc=local
objectClass: organizationalUnit
ou: People

dn: ou=Groups,dc=empresa,dc=local
objectClass: organizationalUnit
ou: Groups

dn: ou=Devices,dc=empresa,dc=local
objectClass: organizationalUnit
ou: Devices
```

Importar:

```bash
ldapadd -x -D cn=admin,dc=empresa,dc=local -W -f estructura.ldif
```

------------------------------------------------------------------------

## 7. Creación de grupos

Archivo:

    groups.ldif

```bash
dn: cn=admins,ou=Groups,dc=empresa,dc=local
objectClass: posixGroup
cn: admins
gidNumber: 5000

dn: cn=developers,ou=Groups,dc=empresa,dc=local
objectClass: posixGroup
cn: developers
gidNumber: 5001

dn: cn=users,ou=Groups,dc=empresa,dc=local
objectClass: posixGroup
cn: users
gidNumber: 5002
```

Importar:

``` bash
ldapadd -x -D cn=admin,dc=empresa,dc=local -W -f groups.ldif
```

------------------------------------------------------------------------

## 8. Creación de usuarios

Archivo:

    usuarios.ldif

Ejemplo:

```bash
dn: uid=juan,ou=People,dc=empresa,dc=local
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: shadowAccount
cn: Juan Perez
sn: Perez
uid: juan
uidNumber: 10000
gidNumber: 5002
homeDirectory: /home/juan
loginShell: /bin/bash
mail: juan@empresa.local
userPassword: {SSHA}password
```

Para crear una contraseña cifrada para el usuario se usa el comando `slappasswd`. Nos pedirá introducir una contraseña que devolverá encriptada por la terminal, esa contraseña generada la pegaremos en el campo `userPAssword`.

Para simplificar esto podemos ejecutar el comando `slappasswd` y redirigir la salida al fichero que estamos creando, en este caso usuarios.ldif:

```bash
slappasswd >> usuarios.ldif
```

Pondrá la contraseña cifrada en la última linea, editamos el archivo y colocamos manualmente la contraseña en en el campo `userPAssword` borrando hacia atrás.

Importar:

```bash
ldapadd -x -D cn=admin,dc=empresa,dc=local -W -f usuarios.ldif
```

## 9. Gestión de contraseñas

Cambiar contraseña:

```bash
ldappasswd -x -D cn=admin,dc=empresa,dc=local -W \
-S uid=juan,ou=People,dc=empresa,dc=local
```

------------------------------------------------------------------------

## 10. Integración de cliente Ubuntu Desktop

Instalar dependencias:

```bash
sudo apt install libnss-ldap libpam-ldap ldap-utils nslcd
```

Configuración:

| Parámetro | Valor |
| --- | --- |
| LDAP URI | ldap://192.168.1.10 |
| Search Base | dc=empresa,dc=local |
| LDAP Version | 3 |
| LDAP Account for root | cn=admin,dc=empresa,dc=local |

------------------------------------------------------------------------

## 11. Configuración NSS

Editar:

    /etc/nsswitch.conf

Modificar:

    passwd: files ldap
    group: files ldap
    shadow: files ldap

Comprobamos que todo está correcto con:

```bash
sudo getent passwd
```

Aparecerá el usuario creado en ldap en el listado mostrado.

------------------------------------------------------------------------

## 12. Configuración PAM

Ejecutar:

```bash
sudo pam-auth-update
```

Activar:

-   LDAP Authentication
-   Create home directory on login

------------------------------------------------------------------------

## 13. Creación automática de directorios HOME

Instalar módulo:

```bash
sudo apt install libpam-mkhomedir
```

Editar:

    /etc/pam.d/common-session

Añadir:

    session required pam_mkhomedir.so skel=/etc/skel umask=0022

------------------------------------------------------------------------

## 14. Validación de autenticación

Comprobar usuarios LDAP:

```bash
getent passwd
```

Resultado esperado:

    juan:x:10000:5002:Juan Perez:/home/juan:/bin/bash

------------------------------------------------------------------------

## 15. Prueba de inicio de sesión

Cerrar sesión en el cliente Ubuntu e iniciar sesión con:

    usuario: juan
    password: ********

El sistema:

-   autenticará contra LDAP
-   creará automáticamente el directorio `/home/juan`

------------------------------------------------------------------------

## 16. Seguridad recomendada

Para entornos productivos:

-   Activar **TLS/SSL**
-   Usar **LDAPS (636)**
-   Limitar acceso con **firewall**
-   Implementar **replicación LDAP**

Backup:

```bash
sudo slapcat > backup.ldif
```

------------------------------------------------------------------------

## ANEXO A --- Administración gráfica del directorio LDAP

Las herramientas gráficas simplifican la gestión del directorio y
reducen errores al manipular objetos LDAP.

------------------------------------------------------------------------

### A.1 phpLDAPadmin

Interfaz web para administración LDAP.

Instalación:

```bash
sudo apt install phpldapadmin
```

Archivo de configuración:

    /etc/phpldapadmin/config.php

Modificar:

    $servers->setValue('server','host','127.0.0.1');
    $servers->setValue('server','base',array('dc=empresa,dc=local'));

Acceso web:

    http://IP_SERVIDOR/phpldapadmin

Credenciales:

    cn=admin,dc=empresa,dc=local

Funciones principales:

-   Crear usuarios
-   Crear grupos
-   Modificar atributos
-   Visualizar árbol LDAP

------------------------------------------------------------------------

### A.2 LDAP Account Manager

Herramienta web avanzada para gestión de identidades.

Instalación:

```bash
sudo apt install ldap-account-manager
```

Acceso web:

    http://IP_SERVIDOR/lam

Características:

- Gestión de usuarios y grupos
- Control de contraseñas
- Plantillas de usuarios
- Administración delegada

------------------------------------------------------------------------

### A.3 Apache Directory Studio

Cliente LDAP de escritorio multiplataforma.

Instalación (Linux):

Descargar desde:

https://directory.apache.org/studio/

Configuración de conexión:

    Hostname: 192.168.1.10
    Port: 389
    Bind DN: cn=admin,dc=empresa,dc=local

Funciones:

- Explorador visual del árbol LDAP
- Editor de entradas
- Importación LDIF
- Debug de consultas LDAP

------------------------------------------------------------------------

## 17. Buenas prácticas operativas

1. Definir estructura OU antes de producción
2. Mantener UID y GID consistentes
3. Usar contraseñas cifradas
4. Automatizar backups
5. Monitorizar el servicio LDAP

------------------------------------------------------------------------

## 18. Conclusión

Con esta implementación se obtiene:

- Directorio LDAP centralizado
- Gestión unificada de usuarios
- Autenticación distribuida en clientes Linux
- Administración gráfica simplificada

OpenLDAP permite construir infraestructuras de autenticación escalables
en entornos empresariales.

## Ejemplo de LDAP

### 1. CREACIÓN DE UNIDADES ORGANIZATIVAS (OU)

```bash
dn: ou=personas,dc=ejemplo,dc=com
objectClass: organizationalUnit
ou: personas

dn: ou=grupos,dc=ejemplo,dc=com
objectClass: organizationalUnit
ou: grupos

dn: ou=dispositivos,dc=ejemplo,dc=com
objectClass: organizationalUnit
ou: dispositivos
```


### 2. CREACIÓN DE GRUPOS (Dentro de la OU grupos)

```bash
dn: cn=administracion,ou=grupos,dc=ejemplo,dc=com
objectClass: groupOfNames
cn: administracion
member: uid=admin_user,ou=personas,dc=ejemplo,dc=com

dn: cn=soporte,ou=grupos,dc=ejemplo,dc=com
objectClass: groupOfNames
cn: soporte
member: uid=soporte_user,ou=personas,dc=ejemplo,dc=com

dn: cn=usuarios,ou=grupos,dc=ejemplo,dc=com
objectClass: groupOfNames
cn: usuarios
member: uid=normal_user,ou=personas,dc=ejemplo,dc=com
```

### 3. CREACIÓN DE USUARIOS (Dentro de la OU personas)

```bash
dn: uid=admin_user,ou=personas,dc=ejemplo,dc=com
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: shadowAccount
uid: admin_user
sn: Administrador
cn: Usuario Admin
uidNumber: 1001
gidNumber: 1001
homeDirectory: /home/admin_user
loginShell: /bin/bash
userPassword: {SSHA}password_secreto

dn: uid=soporte_user,ou=personas,dc=ejemplo,dc=com
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: shadowAccount
uid: soporte_user
sn: Soporte
cn: Usuario Soporte
uidNumber: 1002
gidNumber: 1002
homeDirectory: /home/soporte_user
loginShell: /bin/bash
userPassword: {SSHA}password_secreto

dn: uid=normal_user,ou=personas,dc=ejemplo,dc=com
objectClass: inetOrgPerson
objectClass: posixAccount
objectClass: shadowAccount
uid: normal_user
sn: Usuario
cn: Usuario Normal
uidNumber: 1003
gidNumber: 1003
homeDirectory: /home/normal_user
loginShell: /bin/bash
userPassword: {SSHA}password_secreto
```

