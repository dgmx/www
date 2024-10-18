---
title: "1. Primer Script"
parent: "Bash"
---


# Capítulo 1: Crear y ejecutar tu primer script de shell en Bash

## Introducción
Bash (Bourne Again Shell) es un intérprete de comandos ampliamente utilizado en sistemas Unix y Linux. En este capítulo, aprenderás a crear y ejecutar tu primer script de shell en Bash.

## ¿Qué es un script de shell?
Un script de shell es un archivo de texto que contiene una serie de comandos que el shell puede ejecutar. Estos scripts nos permiten automatizar tareas y crear programas sencillos.

## Pasos para crear y ejecutar tu primer script de Bash

### 1. Crear el archivo de script
1. Abre un editor de texto (como nano, vim, o gedit).
2. Crea un nuevo archivo con extensión `.sh`, por ejemplo: `mi_primer_script.sh`.

### 2. Escribir el script
1. En la primera línea del archivo, escribe el "shebang":
   ```bash
   #!/bin/bash
   ```
   Esto indica al sistema que debe usar Bash para interpretar este script.

2. Añade algunos comandos simples, por ejemplo:
   ```bash
   #!/bin/bash

   echo "¡Hola, mundo!"
   echo "Este es mi primer script de Bash."
   echo "Hoy es $(date)"
   ```

3. Guarda el archivo y cierra el editor.

### 3. Dar permisos de ejecución al script
Para poder ejecutar el script, necesitas darle permisos de ejecución. En la terminal, escribe:

```bash
chmod +x mi_primer_script.sh
```

### 4. Ejecutar el script
Ahora puedes ejecutar tu script de dos maneras:

1. Usando el path completo:
   ```bash
   ./mi_primer_script.sh
   ```

2. O si el directorio actual está en tu PATH:
   ```bash
   mi_primer_script.sh
   ```

## Resultado esperado
Después de ejecutar el script, deberías ver algo como esto en tu terminal:

```
¡Hola, mundo!
Este es mi primer script de Bash.
Hoy es Lun Oct 14 12:34:56 UTC 2024
```

## Conclusión
¡Felicidades! Has creado y ejecutado tu primer script de Bash. Este es solo el comienzo de tu viaje en la programación de shells. En los próximos capítulos, aprenderás más sobre variables, estructuras de control, funciones y mucho más.

## Ejercicios
1. Modifica el script para que pregunte tu nombre y luego te salude personalmente.
2. Crea un nuevo script que muestre el contenido del directorio actual.
3. Escribe un script que realice una operación matemática simple (como sumar dos números) e imprima el resultado.

