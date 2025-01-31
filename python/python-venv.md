---
title: "13. Entorno virtual en Python"
parent: "Python"
---

# Creación de un entorno virtual para Python

[![Python](https://img.shields.io/badge/Python-blue?style=for-the-badge&logo=python&logoColor=white&labelColor=101010)](https://www.python.org)

Las aplicaciones en `Python` usualmente hacen uso de paquetes y módulos que no forman parte de la librería estándar. Las aplicaciones a veces necesitan una versión específica de una librería, debido a que dicha aplicación requiere que un bug particular haya sido solucionado o bien la aplicación ha sido escrita usando una versión obsoleta de la interfaz de la librería.

Esto significa que tal vez no sea posible para una instalación de `Python` cumplir los requerimientos de todas las aplicaciones. Si la aplicación A necesita la versión 1.0 de un módulo particular y la aplicación B necesita la versión 2.0, entonces los requerimientos entran en conflicto e instalar la versión 1.0 o 2.0 dejará una de las aplicaciones sin funcionar.

La solución a este problema es crear un entorno virtual, un directorio que contiene una instalación de Python de una versión en particular, además de unos cuantos paquetes adicionales.

## Utilidad de un entorno virtual

- Aislamiento de dependencias: Cada proyecto puede tener sus propias dependencias sin afectar otros proyectos.
- Facilidad de colaboración: Puedes compartir un archivo de requisitos (requirements.txt) para que otros desarrolladores instalen las mismas dependencias.
- Evita conflictos: Diferentes proyectos pueden usar versiones distintas de una misma librería.
- Mantenimiento limpio: Al eliminar un entorno virtual, no afectas el sistema global de Python.

## Requerimientos

- Tener Python instalado en tu sistema (preferiblemente Python 3.x).
- Acceso a la terminal o línea de comandos.

## Creación de un entorno virtual

**Paso 1: Abrir la terminal**

- En Windows: Usa el Símbolo del sistema o PowerShell.
- En macOS o Linux: Usa la Terminal.

**Paso 2: Crear el entorno virtual**

Python incluye un módulo llamado `venv` para crear entornos virtuales. Ejecuta el siguiente comando:
```bash
python -m venv nombre_del_entorno
```
- `nombre_del_entorno`: Es el nombre que le das a tu entorno virtual. Por ejemplo, `mi_entorno`.

Esto creará una carpeta con el nombre que especificaste, la cual contendrá todos los archivos necesarios para el entorno virtual.

## Activación del entorno virtual

- En Windows:
```bash
nombre_del_entorno\Scripts\activate
````

- En macOS o Linux:

```bash
source nombre_del_entorno/bin/activate
```

Después de activar el entorno virtual, verás que el nombre del entorno aparece entre paréntesis en la línea de comandos, indicando que está activo. Por ejemplo:
```bash
(mi_entorno) usuario@equipo:~$
```

## Desactivación del entorno virtual

Para salir del entorno virtual, simplemente ejecuta:
```bash
deactivate
```

Esto te devolverá a la terminal normal.

## Instalación de paquetes en el entorno virtua

Una vez activado el entorno virtual, puedes instalar paquetes usando `pip`. Por ejemplo:
```bash
pip install numpy
```
Esto instalará la librería numpy solo en el entorno virtual actual, no globalmente.

## Comandos útiles

- Ver los paquetes instalados:
```bash
pip list
```
- Guardar las dependencias en un archivo:
```bash
- pip freeze > requirements.txt
```
Esto crea un archivo requirements.txt con todas las librerías instaladas y sus versiones.
- Instalar dependencias desde un archivo:
```bash
pip install -r requirements.txt
```
Esto instala todas las librerías listadas en requirements.txt.
- Eliminar un paquete:
```bash
pip uninstall nombre_del_paquete
```
- Crear un entorno virtual con una versión específica de Python:
Si tienes varias versiones de Python instaladas, puedes especificar cuál usar:
```bash
python3.9 -m venv nombre_del_entorno
```


## Ejemplo práctico

**Crear un entorno virtual:**
```bash
python -m venv mi_proyecto
```
**Activar el entorno:**
```bash
source mi_proyecto/bin/activate  # macOS/Linux
```
```bash
mi_proyecto\Scripts\activate     # Windows
```
**Instalar algunas librerías:**
```bash
pip install requests pandas
```
**Ver las librerías instaladas:**
```bash
pip list
```
**Guardar las dependencias:**
```bash
pip freeze > requirements.txt
```
**Desactivar el entorno:**
```bash
deactivate
```
**Recrear el entorno en otra máquina:**

- Copia el archivo requirements.txt a la nueva máquina.
- Crea y activa un nuevo entorno virtual.
Instala las dependencias:
```bash
pip install -r requirements.txt
```

**Eliminar un entorno virtual**

Simplemente elimina la carpeta del entorno virtual. 
Por ejemplo:

```bash
rm -rf mi_proyecto  # macOS/Linux
```
```bash
rmdir /s /q mi_proyecto  # Windows
```
## Resumen

Un entorno virtual te permite aislar las dependencias de un proyecto.
Se crea con `python -m venv nombre_del_entorno`.

Se activa con `source nombre_del_entorno/bin/activate` (macOS/Linux) o `nombre_del_entorno\Scripts\activate` (Windows).

Se desactiva con `deactivate`.

Usa `pip` para instalar, listar y eliminar paquetes.
Guarda las dependencias en `requirements.txt` para compartir o recrear el entorno.