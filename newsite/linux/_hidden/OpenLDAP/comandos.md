# Guía Técnica: Servicios Linux y Gestión de OpenLDAP

Esta guía unifica los comandos esenciales para administrar servicios en el sistema operativo y gestionar un directorio LDAP.

---

## 🐧 PARTE 1: Ver Servicios en Ejecución en Linux

La forma de ver los servicios depende del sistema de inicio de tu distribución.

### 1. Sistema Systemd (Ubuntu 15.04+, Debian 8+, CentOS 7+)
Es el estándar actual en casi todas las distros modernas.
* **Listar solo servicios activos:**
  `systemctl list-units --type=service --state=running`
* **Ver el estado de un servicio específico:**
  `systemctl status <nombre_del_servicio>`
* **Listar todos los servicios (activos e inactivos):**
  `systemctl list-unit-files --type=service`

### 2. Sistemas Antiguos (SysVinit / Upstart)
* **Comprobar todos los servicios:**
  `service --status-all`
* **Listar servicios en Upstart:**
  `initctl list`

### 3. Comandos Universales (Procesos)
Si quieres ver qué está corriendo sin importar el gestor:
* `top` o `htop` (interactivo).
* `ps aux` (lista estática de procesos).

---

## 🌳 PARTE 2: Gestión de OpenLDAP

LDAP organiza la información en un árbol jerárquico. Para interactuar con él, usamos los siguientes comandos:

### 1. La "Regla de Oro" de los Parámetros
  
Antes de ejecutar cualquier comando, recuerda estos modificadores básicos:

*   **`-x`**: Autenticación simple (en lugar de SASL).
*   **`-H <uri>`**: Dirección del servidor (ej. `ldap://localhost`).
*   **`-D <binddn>`**: DN del administrador (ej. `"cn=admin,dc=dominio,dc=com"`).
*   **`-W`**: Solicita la contraseña de forma interactiva (seguridad recomendada).
*   **`-b <base>`**: Punto de partida de la búsqueda (Base DN).

2\. Lectura y Búsqueda: `ldapsearch`
------------------------------------

Es la herramienta para consultar el árbol de directorios (DIT).

*   **Listar todo el árbol:**
    
        ldapsearch -x -b "dc=ejemplo,dc=com" -H ldap://localhost
    
*   **Buscar un usuario por su UID:**
    
        ldapsearch -x -b "dc=ejemplo,dc=com" "(uid=jdoe)"
    
*   **Ver solo atributos específicos (Nombre y Mail):**
    
        ldapsearch -x -b "dc=ejemplo,dc=com" "(uid=*)" cn mail
    

* * *

3\. Escritura y Modificación (Uso de archivos `.ldif`)
------------------------------------------------------

LDAP no suele editarse "en vivo" por línea de comandos; se recomienda usar archivos de texto con formato **LDIF**.

### ➕ Añadir objetos (`ldapadd`)

    ldapadd -x -D "cn=admin,dc=com" -W -f nuevo_usuario.ldif

### ✏️ Modificar objetos (`ldapmodify`)

Se usa para cambiar, añadir o eliminar atributos de un registro existente.

    ldapmodify -x -D "cn=admin,dc=com" -W -f cambios.ldif

### 🗑️ Eliminar objetos (`ldapdelete`)

Requiere el Distinguished Name (DN) completo:

    ldapdelete -x -D "cn=admin,dc=com" -W "uid=jdoe,ou=users,dc=com"

* * *****

4\. Mantenimiento y Contraseñas
-------------------------------

*   **Cambiar contraseña (`ldappasswd`):**
    
        ldappasswd -x -D "cn=admin,dc=com" -W -S "uid=jdoe,ou=users,dc=com"
    
*   **Exportar Backup (`slapcat`):** _Ejecutar como root directamente en el servidor._
    
        sudo slapcat -l backup_$(date +%F).ldif
    
*   **Validar Configuración (`slaptest`):**
    
        sudo slaptest -u

* * *

---

## 📋 Resumen de Comandos Rápidos

| Acción     | Comando     | Descripción                                      |
|-----------|-------------|--------------------------------------------------|
| Consultar | ldapsearch  | Busca y visualiza objetos en el DIT.             |
| Insertar  | ldapadd     | Añade entradas desde un fichero LDIF.            |
| Modificar | ldapmodify  | Aplica cambios a entradas existentes.            |
| Eliminar  | ldapdelete  | Borra una entrada específica.                    |
| Password  | ldappasswd  | Cambia la clave de un usuario.                   |
| Backup    | slapcat     | Vuelca la base de datos a texto plano.           |