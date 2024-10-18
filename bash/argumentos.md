---
title: "3. Argumentos"
parent: "Bash"
---

# 3. Paso de argumentos y aceptar entradas de usuario en tus scripts

## Introducción

Para hacer tus scripts de Bash más flexibles e interactivos, es fundamental saber cómo pasar argumentos al script y cómo aceptar entradas del usuario durante la ejecución. En este capítulo, aprenderás ambas técnicas.

## Paso de argumentos

Los argumentos son valores que puedes pasar a tu script cuando lo ejecutas desde la línea de comandos.

### Acceder a los argumentos

Bash proporciona variables especiales para acceder a los argumentos:

- `$0`: Nombre del script
- `$1`, `$2`, `$3`, etc.: Primer argumento, segundo argumento, tercer argumento, etc.
- `$#`: Número total de argumentos
- `$@`: Todos los argumentos como palabras separadas
- `$*`: Todos los argumentos como una sola palabra

### Ejemplo de script con argumentos

```bash
#!/bin/bash

echo "Nombre del script: $0"
echo "Primer argumento: $1"
echo "Segundo argumento: $2"
echo "Número total de argumentos: $#"
echo "Todos los argumentos: $@"
```

Para ejecutar este script:

```bash
./mi_script.sh hola mundo
```

Salida:
```
Nombre del script: ./mi_script.sh
Primer argumento: hola
Segundo argumento: mundo
Número total de argumentos: 2
Todos los argumentos: hola mundo
```

## Aceptar entradas de usuario

Para hacer tus scripts interactivos, puedes solicitar información al usuario durante la ejecución.

### Comando `read`

El comando `read` se usa para capturar la entrada del usuario:

```bash
read variable
```

### Ejemplo de script interactivo

```bash
#!/bin/bash

echo "¿Cómo te llamas?"
read nombre

echo "¿Cuántos años tienes?"
read edad

echo "Hola, $nombre. Tienes $edad años."
```

### Opciones útiles de `read`

- `-p`: Muestra un prompt
- `-s`: Modo silencioso (útil para contraseñas)
- `-t`: Establece un tiempo límite

Ejemplo:

```bash
#!/bin/bash

read -p "Ingresa tu nombre: " nombre
read -sp "Ingresa tu contraseña: " password
echo  # Salto de línea después de la contraseña
echo "Hola, $nombre. Tu contraseña tiene ${#password} caracteres."
```

## Combinando argumentos y entradas de usuario

Puedes combinar ambas técnicas para crear scripts más versátiles:

```bash
#!/bin/bash

if [ $# -eq 0 ]; then
    read -p "Ingresa tu nombre: " nombre
else
    nombre=$1
fi

echo "Hola, $nombre. Bienvenido a nuestro script interactivo."
read -p "¿Qué edad tienes? " edad

echo "$nombre tiene $edad años."
```

## Validación de entradas

Es importante validar las entradas del usuario para evitar errores:

```bash
#!/bin/bash

read -p "Ingresa tu edad: " edad

if [[ ! $edad =~ ^[0-9]+$ ]]; then
    echo "Error: Debes ingresar un número."
    exit 1
fi

if [ $edad -lt 0 ] || [ $edad -gt 120 ]; then
    echo "Error: La edad debe estar entre 0 y 120."
    exit 1
fi

echo "Tu edad es $edad años."
```

## Ejercicios

1. Crea un script que acepte dos números como argumentos y muestre su suma.
2. Escribe un script que pida al usuario su nombre y apellido, y luego los muestre en orden inverso.
3. Desarrolla un script que acepte un argumento (nombre de archivo) y pregunte al usuario si quiere ver el contenido del archivo o eliminarlo.

## Conclusión

Dominar el paso de argumentos y la aceptación de entradas de usuario te permitirá crear scripts de Bash más flexibles e interactivos. Estas técnicas son fundamentales para desarrollar herramientas de línea de comandos útiles y versátiles. Practica con los ejercicios propuestos para mejorar tus habilidades.

