---
title: "2. Práctica2"
parent: "ASO"
---

# Guía de Administración: Configuración de Usuarios y Seguridad en Windows Server

---

## 1. Configuración de Directivas de Contraseña

Modificaremos las directivas de cuenta a través del **Editor de Directivas de Grupo Local** (`gpedit.msc`).

1.  **Abrir el Editor de Directivas de Grupo:** Presiona **Win + R**, escribe `gpedit.msc` y pulsa **Enter**.
2.  **Navegar a Directivas de contraseñas:** Ve a **Configuración del equipo** --> **Configuración de Windows** --> **Configuración de seguridad** --> **Directivas de cuenta** --> **Directiva de contraseñas**.

| Directiva | Valor Requerido | Configuración |
| :--- | :--- | :--- |
| **La contraseña debe cumplir los requisitos de complejidad** | Habilitada | Habilitar para forzar mayúsculas, minúsculas, números y símbolos. |
| **Longitud mínima de la contraseña** | **8 caracteres** | Establecer en **8**. |
| **Vigencia mínima de la contraseña** | **30 días (1 mes)** | Establecer en **30** días. |
| **Vigencia máxima de la contraseña** | **90 días (3 meses)** | Establecer en **90** días. |
| **Exigir historial de contraseñas** | **3 contraseñas** | Establecer en **3**. |

3.  **Aplicar cambios:** Ejecuta `gpupdate /force` en la consola para aplicar la directiva inmediatamente.

---

## 2. Creación y Administración de Usuarios y Grupos

Utilizaremos la consola de **Administración de equipos** (`compmgmt.msc`).

### 2.1 Crear 4 Usuarios y Deshabilitar uno

1.  **Abrir Administración de equipos:** Presiona **Win + R**, escribe `compmgmt.msc`.
2.  **Creación de Usuarios:** En **Usuarios y grupos locales** --> **Usuarios**, crea:
    * **usuario\_a**
    * **usuario\_b**
    * **usuario\_c**
    * **usuario\_d**
3.  **Configuración inicial:** Para todos, marca **El usuario debe cambiar la contraseña en el siguiente inicio de sesión**.
4.  **Deshabilitar la cuenta:** Haz doble clic en **usuario\_d**, marca la casilla **Cuenta deshabilitada** y pulsa **Aceptar**.

### 2.2 Creación de 2 Grupos y Asignación

1.  **Creación de Grupos:** En **Grupos**, crea:
    * **Grupo\_Ventas**
    * **Grupo\_Soporte**
2.  **Asignación:**
    * A **Grupo\_Ventas** añade: **usuario\_a** y **usuario\_b**.
    * A **Grupo\_Soporte** añade: **usuario\_c** y **usuario\_d**.

### 2.3 Verificación de Acceso

1.  **Verificar cambio de contraseña:** Inicia sesión con **usuario\_a** y **usuario\_b**. El sistema debe forzar el cambio de contraseña aplicando los requisitos (longitud, complejidad).
2.  **Verificar cuenta deshabilitada:** Intenta iniciar sesión con **usuario\_d**. El acceso debe ser denegado con un mensaje de cuenta deshabilitada.

---

## 3. Configuración de Carpeta Compartida (Solo Lectura)

Crearemos una carpeta y limitaremos el acceso a solo lectura mediante permisos NTFS y de Compartición.

1.  **Crear la Carpeta:** Crea una carpeta llamada **DatosComunes** (ej: en la unidad D:).
2.  **Configurar Permisos NTFS (Pestaña Seguridad):**
    * Haz clic derecho en la carpeta --> **Propiedades** --> **Seguridad**.
    * Para los grupos de usuarios (ej: **Usuarios** o **Todos**), asegúrate de que solo esté marcado el permiso **Lectura** en la columna **Permitir**.
    * **Desmarca** o no concedas permisos de **Modificar** o **Escribir**.
3.  **Configurar Permisos de Compartición (Pestaña Uso compartido):**
    * Ve a **Uso compartido avanzado...** --> **Permisos**.
    * Selecciona el grupo **Todos** (o los grupos específicos).
    * Marca **Permitir** solo para **Lectura**. **Desmarca** (o no marques) **Cambiar** y **Control total**.
4.  **Comprobación:** Accede a la carpeta desde otra máquina (`\\nombre\_servidor\DatosComunes`). Podrás ver el contenido, pero cualquier intento de modificar o eliminar archivos fallará.

---

## 4. Copia de Seguridad de Carpeta Personal

Utilizaremos la herramienta **Copia de seguridad de Windows Server** (que debe estar instalada como característica).

1.  **Realizar la Copia:**
    * Abre **Copia de seguridad de Windows Server**.
    * Selecciona **Copia de seguridad única...** --> **Copia de seguridad personalizada**.
    * En **Agregar elementos**, selecciona tu carpeta de perfil de usuario (ej: `C:\Users\Administrator`).
    * Selecciona una **ubicación de destino** fuera del disco de origen (disco externo, red) y ejecuta la copia.

---

## 5. Añadir un Usuario desde PowerShell (PS)

1.  **Abrir PowerShell como Administrador:** Busca PowerShell, haz clic derecho y selecciona **Ejecutar como administrador**.
2.  **Crear el usuario y asignar contraseña:** Ejecuta los siguientes comandos:

    ```powershell
    # Esto te pedirá la contraseña de forma segura (no se muestra al escribirla)
    $Password = Read-Host -AsSecureString "Introduce la contraseña para usuario_ps" 

    # Crea el usuario local con la contraseña
    New-LocalUser -Name "usuario_ps" -Password $Password -Description "Usuario creado por PowerShell"

    # Fuerza el cambio de contraseña en el primer inicio (para verificación)
    Set-LocalUser -Name "usuario_ps" -PasswordChangeRequired $true
    ```

3.  **Comprobación:** Cierra la sesión e inicia sesión con **usuario\_ps**. Se debe requerir el cambio de contraseña y, tras esto, se debe acceder al sistema.