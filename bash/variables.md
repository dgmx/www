---
title: "Variables"
parent: "Bash"
---

# Capítulo 2: Usar variables, propias y del sistema

## Introducción
Las variables en Bash son fundamentales para almacenar y manipular datos en tus scripts. En este capítulo, aprenderás sobre dos tipos principales de variables: las que defines tú mismo (variables propias) y las que proporciona el sistema (variables del sistema).

## Variables propias

### Definir variables
Para definir una variable en Bash, simplemente asigna un valor a un nombre:

```bash
nombre="Juan"
edad=25
```

Nota: No debe haber espacios alrededor del signo igual (=).

### Usar variables
Para usar el valor de una variable, antepón el símbolo $ al nombre de la variable:

```bash
echo "Hola, $nombre. Tienes $edad años."
```

También puedes usar la sintaxis ${variable} para una delimitación más clara:

```bash
echo "Hola, ${nombre}. En 10 años tendrás ${edad}0 años."
```

### Ejemplo de script con variables propias

```bash
#!/bin/bash

# Definir variables
nombre="Ana"
ciudad="Madrid"
edad=30

# Usar variables
echo "Me llamo $nombre, vivo en $ciudad y tengo $edad años."
echo "El año que viene tendré $((edad + 1)) años."
```

## Variables del sistema

Bash proporciona varias variables del sistema que contienen información útil sobre el entorno de ejecución.

### Algunas variables comunes del sistema

1. `$HOME`: Directorio home del usuario actual
2. `$USER`: Nombre del usuario actual
3. `$PWD`: Directorio de trabajo actual
4. `$SHELL`: Shell actual
5. `$PATH`: Lista de directorios donde se buscan los comandos
6. `$RANDOM`: Genera un número aleatorio cada vez que se usa

### Ejemplo de uso de variables del sistema

```bash
#!/bin/bash

echo "Hola, $USER!"
echo "Tu directorio home es: $HOME"
echo "Estás usando el shell: $SHELL"
echo "Tu directorio actual es: $PWD"
echo "Aquí tienes un número aleatorio: $RANDOM"
```

## Variables de entorno

Las variables de entorno son un tipo especial de variables del sistema que pueden ser configuradas por el usuario y están disponibles para todos los procesos.

### Ver todas las variables de entorno
Usa el comando `env` para ver todas las variables de entorno:

```bash
env
```

### Crear una variable de entorno
Para crear una variable de entorno temporal, usa `export`:

```bash
export MI_VARIABLE="Valor"
```

Para hacerla permanente, añádela a tu archivo `.bashrc` o `.bash_profile`.

## Ejercicios

1. Crea un script que pida al usuario su nombre y edad, luego muestre un mensaje personalizado.
2. Escribe un script que use la variable `$RANDOM` para simular el lanzamiento de un dado (números del 1 al 6).
3. Crea una variable de entorno con tu nombre y escribe un script que la use para saludarte.

## Conclusión

Las variables son esenciales en la programación de scripts en Bash. Te permiten almacenar y manipular datos, hacer tus scripts más flexibles y aprovechar la información proporcionada por el sistema. Practica con los ejercicios propuestos para familiarizarte más con el uso de variables en Bash.

