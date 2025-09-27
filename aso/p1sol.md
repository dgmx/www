---
title: "1. Práctica1"
parent: "ASO"
---

# Guía Detallada para Tareas de Administración en Windows Server

---

## 1.1 - Modificar las Directivas de Contraseña

Estas configuraciones se realizan a través del **Editor de Directivas de Grupo Local** (`gpedit.msc`) o la Directiva de Grupo de Dominio.

1.  **Abrir el Editor de Directivas de grupo:**
    * Presiona **Win + R**, escribe `gpedit.msc` y pulsa **Enter**.
2.  **Navegar a la configuración de contraseñas:**
    * Ve a **Configuración del equipo** $\rightarrow$ **Configuración de Windows** $\rightarrow$ **Configuración de seguridad** $\rightarrow$ **Directivas de cuenta** $\rightarrow$ **Directiva de contraseñas**.
3.  **Configurar la vigencia mínima (5 días):**
    * Doble clic en **Vigencia mínima de la contraseña**.
    * Establece el valor en **5 días**.
4.  **Configurar la vigencia máxima (30 días):**
    * Doble clic en **Vigencia máxima de la contraseña**.
    * Establece el valor en **30 días**.
5.  **Aplicar la Directiva (si se usa GPO):**
    * Ejecuta `gpupdate /force` en una línea de comandos con derechos de administrador.

---

## 1.2 - Añadir un Nuevo Usuario al Sistema

Utilizaremos la consola de **Administrador de equipos** para esta tarea.

1.  **Abrir el Administrador de equipos:**
    * Presiona **Win + R**, escribe `compmgmt.msc` y pulsa **Enter**.
2.  **Navegar y crear:**
    * Ve a **Herramientas del sistema** $\rightarrow$ **Usuarios y grupos locales** $\rightarrow$ **Usuarios**.
3.  **Crear el nuevo usuario:**
    * Haz clic derecho en el panel central y selecciona **Usuario nuevo...**
    * Introduce un Nombre de usuario (ej: **testuser**) y una contraseña.
    * **Desmarca** la casilla *El usuario debe cambiar la contraseña en el siguiente inicio de sesión* para facilitar la prueba inicial.
    * Haz clic en **Crear**.
4.  **Comprobar el inicio de sesión:**
    * Cierra la sesión actual (o cambia de usuario) e intenta iniciar sesión con el usuario **testuser** para verificar el acceso.

---

## 1.3 - Establecer una Cuota de Disco para Carpetas Personales (100 MB)

La cuota se configura a nivel del volumen (disco) que aloja las carpetas personales.

1.  **Acceder a Propiedades del Disco:**
    * Abre el Explorador de archivos, haz clic derecho en el volumen (ej: **D:**) y selecciona **Propiedades**.
2.  **Configurar Cuotas:**
    * Ve a la pestaña **Cuota** y haz clic en **Mostrar configuración de cuota**.
    * Marca **Habilitar administración de cuotas**.
    * Marca **Denegar espacio en disco a los usuarios que superen el límite de cuota** (crucial para forzar el límite).
3.  **Establecer el límite:**
    * Marca **Limitar espacio en disco a:**
    * Establece el límite a **100 MB**.
4.  **Verificar el límite:**
    * Inicia sesión con el usuario de prueba y trata de copiar un archivo de **más de 100 MB** en su carpeta personal. El sistema debe mostrar un mensaje de espacio insuficiente.

---

## 1.4 - Listar y Deshabilitar Servicios de Inicio Automático

El objetivo es optimizar el rendimiento y la seguridad del servidor.

1.  **Acceder a la Consola de Servicios:**
    * Presiona **Win + R**, escribe `services.msc` y pulsa **Enter**.
2.  **Filtrar el listado:**
    * Haz clic en el encabezado de la columna **Tipo de inicio** para ordenar los servicios configurados como **Automático** o **Automático (Inicio retrasado)**.
3.  **Identificar y Deshabilitar servicios innecesarios:**
    * **Criterio:** Deshabilita aquellos que no estén relacionados con la función principal del servidor.
    * **Pasos para deshabilitar:**
        * Doble clic en el servicio (ej: Servicio de fax).
        * En la pestaña General, cambia el **Tipo de inicio** de *Automático* a **Deshabilitado**.
    * **¡ADVERTENCIA!** Deshabilita solo servicios cuyo impacto conozcas.

---

## 1.5 - Copia de Seguridad y Restauración de Carpetas Personales

Se recomienda usar la herramienta **Copia de seguridad de Windows Server** (que debe estar instalada como característica).

1.  **Realizar la Copia de Seguridad:**
    * Abre la aplicación **Copia de seguridad de Windows Server**.
    * Selecciona **Copia de seguridad única...** $\rightarrow$ **Copia de seguridad personalizada**.
    * Haz clic en **Agregar elementos** y selecciona la carpeta que contiene los datos del usuario (ej: `C:\Users`).
    * Selecciona una **ubicación de destino** para guardar la copia (debe ser un disco diferente o una ruta de red).
    * Ejecuta la copia de seguridad.
2.  **Simular Pérdida:**
    * Navega a la carpeta personal del usuario de prueba y **elimina** un archivo (ej: `informe_mensual.doc`).
3.  **Restaurar el archivo:**
    * Vuelve a la herramienta **Copia de seguridad de Windows Server**.
    * Haz clic en **Recuperar...**
    * Selecciona la ubicación y fecha de la copia y elige **Archivos y carpetas**.
    * Navega hasta la carpeta del usuario y selecciona el archivo que borraste.
    * Elige la **Ubicación original** para restaurar el archivo.
4.  **Comprobación:**
    * Verifica la carpeta original del usuario: el archivo debe haber sido restaurado correctamente.