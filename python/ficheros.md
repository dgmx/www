---
title: "10. Ficheros "
parent: "Python"
---

# Programación con Python: Ficheros

Trabajar con ficheros es esencial para leer y escribir datos en el sistema de archivos de nuestro ordenador. A continuación mostraremos la sintaxis básica para utilizar ficheros en Python, incluyendo cómo abrir, leer y escribir en ellos. Utilizaremos explicaciones acompañadas de ejercicios prácticos.

## 1. Abrir y cerrar ficheros

Para trabajar con un archivo en Python, primero debemos abrirlo. Podemos usar la función `open()` para abrir un archivo en diferentes modos, como lectura ( `'r'` ) o escritura ( `'w'` ) y también para añadir ( `'a'` ). Después de terminar de trabajar con el fichero, debemos cerrarlo utilizando el método `close()` para liberar recursos y también para evitar la pérdida de datos:
```python
# Abrir un archivo en modo de lectura
archivo = open("archivo.txt", "r")

# Trabajar con el archivo (leer o escribir)
# Cerrar el archivo después de terminar
archivo.close()
```

## 2. Leer contenido de un fichero

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
## 3. Escribir en un archivo

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
## 4. Gestores de contexto

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
## 5. Verificar si un archivo existe

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


**Ejercicio – Ficheros**

Escribe un programa que le pida al usuario nombres de grupos de música y los vaya añadiendo a un archivo de texto llamado misgrupos.txt. El programa dejará de pedir grupos cuando el usuario escriba la palabra Salir. Cuando se guarde un grupo en el fichero debe quedar claro el orden en el que introdujeron. Al finalizar el programa, el contenido del fichero debe ser algo parecido a esto:

Archivo `misgrupos.txt`
```
1 Metallica
2 Guns N’ Roses
3 The Doors
4 The Rolling Stones
```
**Solución**
```python
file = "misgrupos.txt"
with open(file, 'w') as archivo:
    count = 1
    while True:
        grupo = input("Introduce nombre grupo de música ('Salir' para terminar): ")
        if grupo.lower() == 'salir':
            break
        archivo.write(f"{count}\t{grupo}.\n")
        count += 1
print(f"Grupos guardados en {file}.")

print(f"Los Grupos guardados en {file}. son:")
with open(file, 'r') as archivo:
    contenido = archivo.read()
    print(contenido)
````
