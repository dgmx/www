---
title: 11. Archivos
parent: "Linux"
nav_exclude: true
---

# 📂 Manual Completo: Archivos y Carpetas en Sistemas Operativos (Nivel Bachillerato)

![License](https://img.shields.io/badge/license-Educational-blue)
![Level](https://img.shields.io/badge/level-Bachillerato-green)
![Platform](https://img.shields.io/badge/platform-Linux-orange)

------------------------------------------------------------------------

## 📑 Tabla de Contenidos

- [📂 Manual Completo: Archivos y Carpetas en Sistemas Operativos (Nivel Bachillerato)](#-manual-completo-archivos-y-carpetas-en-sistemas-operativos-nivel-bachillerato)
  - [📑 Tabla de Contenidos](#-tabla-de-contenidos)
  - [¿Qué es un archivo?](#qué-es-un-archivo)
  - [Tipos de archivos](#tipos-de-archivos)
    - [Según su contenido](#según-su-contenido)
    - [Según Linux](#según-linux)
  - [Carpetas o directorios](#carpetas-o-directorios)
  - [Sistema de archivos en Linux](#sistema-de-archivos-en-linux)
  - [Comandos básicos de Linux](#comandos-básicos-de-linux)
    - [Navegación](#navegación)
    - [Creación](#creación)
    - [Edición](#edición)
    - [Copiar, mover y renombrar](#copiar-mover-y-renombrar)
    - [Eliminación](#eliminación)
  - [Permisos en Linux](#permisos-en-linux)
  - [Rutas absolutas y relativas](#rutas-absolutas-y-relativas)
  - [Archivos ocultos](#archivos-ocultos)
  - [Compresión de archivos](#compresión-de-archivos)
- [🛠 Taller Práctico Integrador](#-taller-práctico-integrador)
  - [Objetivo](#objetivo)
    - [Parte 1 --- Estructura](#parte-1-----estructura)
    - [Parte 2 --- Archivos](#parte-2-----archivos)
    - [Parte 3 --- Organización](#parte-3-----organización)
    - [Parte 4 --- Permisos](#parte-4-----permisos)
    - [Parte 5 --- Compresión](#parte-5-----compresión)
    - [Parte 6 --- Eliminación](#parte-6-----eliminación)
- [Preguntas de reflexión](#preguntas-de-reflexión)
- [Conclusión](#conclusión)

------------------------------------------------------------------------

## ¿Qué es un archivo?

Un **archivo** es una unidad básica de almacenamiento que contiene
información digital.\
Está compuesto por:

-   **Nombre**
-   **Extensión**
-   **Ruta (path)**

Ejemplo de ruta absoluta:

``` bash
/home/usuario/Documentos/tarea.txt
```

------------------------------------------------------------------------

## Tipos de archivos

### Según su contenido

  | Tipo         | Extensiones comunes       |
  |--------------|---------------------------|
  | Texto plano  | `.txt`                    |
  | Documento    | `.docx`, `.pdf`           |
  | Imagen       | `.jpg`, `.png`            |
  | Audio        | `.mp3`, `.wav`            |
  | Video        | `.mp4`, `.avi`            |
  | Ejecutable   | `.exe`, `.sh`             |

### Según Linux

-   Archivo regular
-   Directorio
-   Enlace simbólico
-   Archivo de dispositivo

------------------------------------------------------------------------

## Carpetas o directorios

Una **carpeta** organiza archivos en estructura jerárquica.

Ejemplo:

``` bash
/home
 └── usuario
     ├── Documentos
     │    └── tarea.txt
     └── Imagenes
```

------------------------------------------------------------------------

## Sistema de archivos en Linux

Todo comienza en el directorio raíz:

``` bash
/
```

Directorios importantes:

  | Directorio | Función                   |
  |------------|---------------------------|
  | `/home`    | Archivos personales       |
  | `/etc`     | Configuración del sistema |
  | `/bin`     | Programas esenciales      |
  | `/var`     | Datos variables           |
  | `/tmp`     | Archivos temporales       |

------------------------------------------------------------------------

## Comandos básicos de Linux

### Navegación

``` bash
pwd      # Muestra la ruta actual
ls       # Lista archivos
cd ruta  # Cambia de directorio
```

Opciones útiles:

``` bash
ls -l    # Lista detallada
ls -a    # Incluye archivos ocultos
```

------------------------------------------------------------------------

### Creación

``` bash
mkdir carpeta
touch archivo.txt
```

------------------------------------------------------------------------

### Edición

``` bash
nano archivo.txt
cat archivo.txt
```

------------------------------------------------------------------------

### Copiar, mover y renombrar

``` bash
cp origen destino
mv origen destino
mv viejo_nombre nuevo_nombre
```

------------------------------------------------------------------------

### Eliminación

``` bash
rm archivo.txt
rmdir carpeta_vacia
rm -r carpeta
```

⚠ **Advertencia:** En la terminal no existe papelera de reciclaje.

------------------------------------------------------------------------

## Permisos en Linux

Tipos de permisos:

-   `r` → lectura
-   `w` → escritura
-   `x` → ejecución

Visualización:

``` bash
ls -l
```

Modificar permisos:

``` bash
chmod +x script.sh
```

[**Guia completa de permisos en Linux**](permisos-linux.md)

------------------------------------------------------------------------

## Rutas absolutas y relativas

**Ruta absoluta:**

``` bash
/home/usuario/archivo.txt
```

**Ruta relativa:**

``` bash
Documentos/archivo.txt
```

------------------------------------------------------------------------

## Archivos ocultos

Empiezan por punto:

``` bash
.bashrc
```

Mostrar ocultos:

``` bash
ls -a
```

------------------------------------------------------------------------

## Compresión de archivos

Comprimir:

``` bash
tar -czvf archivo.tar.gz carpeta/
```

Descomprimir:

``` bash
tar -xzvf archivo.tar.gz
```

------------------------------------------------------------------------

# 🛠 Taller Práctico Integrador

## Objetivo

Aplicar todos los conceptos aprendidos.

### Parte 1 --- Estructura

Crear carpeta:

``` bash
Clase_Informatica
```

Subcarpetas:

-   Alumnos
-   Tareas
-   Examenes

------------------------------------------------------------------------

### Parte 2 --- Archivos

Crear los siguientes archivos:

-   ana.txt
-   carlos.txt
-   lucia.txt

Editar cada uno con:

    Nombre:
    Curso:
    Edad:

------------------------------------------------------------------------

### Parte 3 --- Organización

1.  Copiar `ana.txt` a `Tareas`
2.  Renombrar a `ana_tarea1.txt`

------------------------------------------------------------------------

### Parte 4 --- Permisos

1.  Crear `script.sh` que muestre los archivos de la carpeta actual con `Tree`
2.  Dar permiso de ejecución
3.  Verificar con `ls -l`

------------------------------------------------------------------------

### Parte 5 --- Compresión

Comprimir todo:

``` bash
tar -czvf Clase_Informatica.tar.gz Clase_Informatica/
```

------------------------------------------------------------------------

### Parte 6 --- Eliminación

Crear carpeta `Temporal`, añadir archivo y eliminarla correctamente.

------------------------------------------------------------------------

# Preguntas de reflexión

1.  Diferencia entre ruta absoluta y relativa.
2.  ¿Qué sucede si ejecutas `rm -r /`?
3.  ¿Por qué son importantes los permisos?
4.  ¿Qué ventajas tiene la organización jerárquica?

------------------------------------------------------------------------

# Conclusión

Comprender la gestión de archivos y directorios permite:

-   Organizar información eficientemente
-   Administrar sistemas Linux
-   Mantener seguridad mediante permisos
-   Automatizar tareas básicas

Es un conocimiento fundamental para continuar estudios en informática y
administración de sistemas.
