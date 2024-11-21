---
title: "10. Ficheros "
parent: "Python"
---


Programación con Python: Ficheros
=================================

Trabajar con ficheros es esencial para leer y escribir datos en el sistema de archivos de nuestro ordenador. A continuación mostraremos la sintaxis básica para utilizar ficheros en Python, incluyendo cómo abrir, leer y escribir en ellos. Utilizaremos explicaciones acompañadas de ejercicios prácticos.

Toggle 

- [Programación con Python: Ficheros](#programación-con-python-ficheros)
  - [Abrir y cerrar ficheros](#abrir-y-cerrar-ficheros)
  - [Leer contenido de un fichero](#leer-contenido-de-un-fichero)
  - [Escribir en un archivo](#escribir-en-un-archivo)
  - [Gestores de contexto](#gestores-de-contexto)
  - [Verificar si un archivo existe](#verificar-si-un-archivo-existe)
  - [Test](#test)

Abrir y cerrar ficheros
-----------------------

Para trabajar con un archivo en Python, primero debemos abrirlo. Podemos usar la función `open()` para abrir un archivo en diferentes modos, como lectura ( `'r'` ) o escritura ( `'w'` ) y también para añadir ( `'a'` ). Después de terminar de trabajar con el fichero, debemos cerrarlo utilizando el método `close()` para liberar recursos y también para evitar la pérdida de datos:
```python
# Abrir un archivo en modo de lectura
archivo = open("archivo.txt", "r")

# Trabajar con el archivo (leer o escribir)
# Cerrar el archivo después de terminar
archivo.close()
```
Leer contenido de un fichero
----------------------------

Para leer el contenido de un archivo, podemos usar los métodos `read()` , `readline()` o `readlines()` :

*   `read()` . Lee todo el contenido del archivo como una cadena de texto:
```python
archivo = open("archivo.txt", "r")
contenido = archivo.read()
print(contenido)
archivo.close()
```
*   `readline()` . Lee una línea del archivo:
```python
archivo = open("archivo.txt", "r")
linea = archivo.readline()
print(linea)
archivo.close()
```
*   `readlines()` . Lee todas las líneas del archivo y las devuelve como una lista:
```python
archivo = open("archivo.txt", "r")
lineas = archivo.readlines()
print(lineas)
archivo.close()
```
Escribir en un archivo
----------------------

Para escribir en un archivo, debemos abrirlo en modo de escritura, con `'w'` o para añadir, con `'a'` , según lo que necesitemos en cada momento:

*   Modo escritura ( `'w'` ). Sobrescribe el contenido del archivo existente o crea un nuevo archivo si no existe:
```python
archivo = open("archivo.txt", "w")
archivo.write("Este es un nuevo contenido.\n")
archivo.write("¡Hola, Mundo!\n")
archivo.close()
```
*   Modo añadir ( `'a'` ). Agrega contenido al final del archivo existente o crea un nuevo archivo si no existe:
```python
archivo = open("archivo.txt", "a")
archivo.write("Este es un contenido adicional.\n")
archivo.write("¡Hola de nuevo!\n")
archivo.close()
```
Gestores de contexto
--------------------

El uso de un `gestor de contexto` con la declaración `with` es una forma más segura y eficiente de trabajar con ficheros. Utilizando esta funcionalidad, el archivo se cierra automáticamente cuando el bloque `with` termina, incluso si se produce una excepción:
```python
# Leer contenido del archivo con un Context Manager
with open("archivo.txt", "r") as archivo:
    contenido = archivo.read()
    print(contenido)

# Escribir en el archivo con un Context Manager
with open("archivo.txt", "a") as archivo:
    archivo.write("Esto es un nuevo contenido con Context Manager.\\n")
```
Verificar si un archivo existe
------------------------------

Podemos usar el módulo `os` para verificar si un archivo existe antes de abrirlo.
```python
import os

nombre_archivo = "archivo.txt"

if os.path.exists(nombre_archivo):
    with open(nombre_archivo, "r") as archivo:
        contenido = archivo.read()
        print(contenido)
else:
    print(f"El archivo '{nombre_archivo}' no existe.")
```
Test
----

Evalúa tus conocimientos mediante este  [test](https://trivial.pro/preguntas/informatica/python-ficheros/1)  que incluye preguntas relacionadas con esta unidad.