# Scripts en Bash - Examen

1. Realizar un script que copie todos los ficheros que se le pasen por parámetro, al directorio misDatos. Si el directorio misDatos no existe, se deberá crear.

2. Realizar un script que muestre el nombre de cada uno de los ficheros pasados por parámetro y visualice su contenido por pantalla. En caso de no pasar ningún parámetro se mostrará un mensaje de error.

3. Realizar un script que cree un fichero de nombre Copia.tar.gz, donde se almacenen comprimidos todos los ficheros que se pasen por parámetro. En caso de no pasar ningún parámetro se mostrará un mensaje de error.

4. Realizar un script que muestre el nombre de cada uno de los ficheros pasados por parámetro y el tipo de fichero que es. 

5. Contar líneas de un archivo pasado como parámetro, solo uno

6. Buscar palabra en archivos de un directorio
   
7. Suma de números pasados como argumentos
8. Copia de seguridad incremental por fecha de carpeta pasada por parámetro



## Ejercicio 1

```bash
#!/bin/bash

directorio="misDatos"

if [ ! -d "$directorio" ]; then.  # ! -d comprueba si el directorio no existe, si es true lo crea
    mkdir "$directorio"
fi

for fichero in "$@"; do.  # Recorre cada fichero en el array de ficheros $@ pasados como parámetros y los copia en directorio
    if [ -e "$fichero" ]; then
        cp "$fichero" "$directorio/"
    fi
done
```

## Ejercicio 2

```bash
#!/bin/bash

if [ $# -eq 0 ]; then.  # Comprueba si se han pasado parámetros
    echo "Error: No se han pasado ficheros por parámetro."
    exit 1
fi

for fichero in "$@"; do. # Recorre todos los ficheros pasados por parámetro y los muestra con cat
    if [ -e "$fichero" ]; then
        echo "=== Fichero: $fichero ==="
        cat "$fichero"
        echo ""
    fi
done
```

## Ejercicio 3
```bash
if [ $# -eq 0 ]; then
    echo "Error: No se han pasado ficheros por parámetro."
    exit 1
fi

tar -czf Copia.tar.gz "$@"
```

El comando crea un archivo comprimido llamado Copia.tar.gz que contiene todos los ficheros pasados como parámetros:

- `-c` — crea un nuevo archivo tar
- `-z` — comprime con gzip
- `-f Copia.tar.gz` — nombre del fichero de salida
- `"$@"` — todos los parámetros recibidos por el script

## Ejercicio 4
```bash
#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Error: No se han pasado ficheros por parámetro."
    exit 1
fi
for fichero in "$@"; do
    if [ -e "$fichero" ]; then
        tipo=$(file -b "$fichero")
        echo "$fichero: $tipo"
    fi
done
```
El comando file -b muestra el tipo de fichero en modo reducido (brief)


## Ejercicio 5
```bash
if [ $# -ne 1 ]; then
    echo "Uso: $0 <archivo>"
    exit 1
fi
wc -l < "$1"
```


## Ejercicio 6

```bash
if [ $# -ne 2 ]; then
    echo "Uso: $0 <directorio> <palabra>"
    exit 1
fi
grep -rl "$2" "$1"
```

- `-r`: búsqueda recursiva en directorios
- `-l`: solo muestra nombres de archivo que contienen la coincidencia (no el contenido)


## Ejercicio 7

```bash
sum=0
for n in "$@"; do
    ((sum += n))
done
echo $sum
```


## Ejercicio 8

```bash
if [ $# -ne 1 ]; then
    echo "Uso: $0 <directorio>"
    exit 1
fi
fecha=$(date +%Y%m%d)
tar -czf "backup_${fecha}.tar.gz" "$1"

# tar -czf "backup_$(date +%Y%m%d).tar.gz" "$1" Todo en la misma linea
```