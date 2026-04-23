# Scripts Bash - ExamBash

1. Realizar un script que copie todos los ficheros que se le pasen por parámetro, al directorio misDatos. Si el directorio misDatos no existe, se deberá crear.

2. Realizar un script que muestre el nombre de cada uno de los ficheros pasados por parámetro y visualice su contenido por pantalla. En caso de no pasar ningún parámetro se mostrará un mensaje de error.

3. Realizar un script que cree un fichero de nombre Copia.tar.gz, donde se almacenen comprimidos todos los ficheros que se pasen por parámetro. En caso de no pasar ningún parámetro se mostrará un mensaje de error.

4. Realizar un script que muestre el nombre de cada uno de los ficheros pasados por parámetro y el tipo de fichero que es. 




## Descripción de Scripts

| Script | Función |
|--------|---------|
| `copiarFicheros.sh` | Copia ficheros a `misDatos` (lo crea si no existe) |
| `mostrarContenido.sh` | Muestra nombre y contenido de cada fichero |
| `comprimirFicheros.sh` | Crea `Copia.tar.gz` con los ficheros |
| `tipoFichero.sh` | Muestra nombre y tipo de cada fichero |

## Uso

```bash
./copiarFicheros.sh param1 param2 ...
./mostrarContenido.sh param1 param2 ...
./comprimirFicheros.sh param1 param2 ...
./tipoFichero.sh param1 param2 ...
```


## Ejercicio 1

```bash
#!/bin/bash

directorio="misDatos"

if [ ! -d "$directorio" ]; then
    mkdir "$directorio"
fi

for fichero in "$@"; do
    if [ -e "$fichero" ]; then
        cp "$fichero" "$directorio/"
    fi
done
```

## Ejercicio 2

```bash
#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Error: No se han pasado ficheros por parámetro."
    exit 1
fi

for fichero in "$@"; do
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

## Ejercicio 4
```bash
#!/bin/bash

for fichero in "$@"; do
    if [ -e "$fichero" ]; then
        tipo=$(file -b "$fichero")
        echo "$fichero: $tipo"
    fi
done
```

