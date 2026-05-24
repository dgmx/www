# Scripts en Bash - Examen













## Ejercicio 1

1. Realizar un script que copie todos los ficheros que se le pasen por parámetro, al directorio misDatos. Si el directorio misDatos no existe, se deberá crear.

```bash
#!/bin/bash

directorio="misDatos"

# ! -d comprueba si el directorio no existe, si es true lo crea
if [ ! -d "$directorio" ]; then  
    mkdir "$directorio"
fi
# Recorre cada fichero en el array de ficheros $@ pasados como parámetros y los copia en directorio
for fichero in "$@"; do  
    if [ -e "$fichero" ]; then
        cp "$fichero" "$directorio/"
    fi
done
```

## Ejercicio 2

2. Realizar un script que muestre el nombre de cada uno de los ficheros pasados por parámetro y visualice su contenido por pantalla. En caso de no pasar ningún parámetro se mostrará un mensaje de error.

```bash
#!/bin/bash
# Comprueba si se han pasado parámetros
if [ $# -eq 0 ]; then  
    echo "Error: No se han pasado ficheros por parámetro."
    exit 1
fi
# Recorre todos los ficheros pasados por parámetro y los muestra con cat
for fichero in "$@"; do  
    if [ -e "$fichero" ]; then
        echo "=== Fichero: $fichero ==="
        cat "$fichero"
        echo ""
    fi
done
```

## Ejercicio 3

3. Realizar un script que cree un fichero de nombre Copia.tar.gz, donde se almacenen comprimidos todos los ficheros que se pasen por parámetro. En caso de no pasar ningún parámetro se mostrará un mensaje de error.

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

4. Realizar un script que muestre el nombre de cada uno de los ficheros pasados por parámetro y el tipo de fichero que es. 

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

5. Contar líneas de un archivo pasado como parámetro, solo uno

```bash

# Comprueba que se pasa un único parámetro
if [ $# -ne 1 ]; then
    echo "Uso: $0 <archivo>"
    exit 1
fi
wc -l < "$1"
```


## Ejercicio 6

6. Buscar palabra en archivos de un directorio

```bash

# Comprueba que se pasan 2 parámetros
if [ $# -ne 2 ]; then
    echo "Uso: $0 <directorio> <palabra>"
    exit 1
fi
grep -rl "$2" "$1"
```

- `-r`: búsqueda recursiva en directorios
- `-l`: solo muestra nombres de archivo que contienen la coincidencia (no el contenido)


## Ejercicio 7

7. Suma de números pasados como argumentos


```bash
sum=0
# Recorre el array que forman todos los parámetros
for n in "$@"; do
    ((sum += n))
done
echo $sum
```


## Ejercicio 8

8. Copia de seguridad incremental por fecha de carpeta pasada por parámetro

```bash

function f_Uso(){
    echo "Uso: $0 <directorio>"
    exit 1
}
if [ $# -eq 1 ]; then
    fecha=$(date +%Y%m%d)
    tar -czf "backup_${fecha}.tar.gz" "$1"
else
    echo "Error: Número de parámetros incorrecto"
    f_Uso
fi
# tar -czf "backup_$(date +%Y%m%d).tar.gz" "$1" Todo en la misma linea
```


## Ejercicios de oposiciones

### 1 Diseñar un shell script para bash que ofrezca en la salida estándar el siguiente menú:

- 1] Listar archivos
- 2] Ver directorio de trabajo
- 3] Crear directorio
- 4] Borrar directorio
- 5] Crear usuario
- 6] Borrar usuario
- 7] Salir
- Introducir opción:

Si se solicita la opción:

- 1 Se listan los archivos del directorio actual.
- 2 Se muestra el nombre del directorio actual.
- 3 Se solicita un nombre de directorio y se crea dentro del directorio actual.
- 4 Se solicita un nombre de directorio y se borra, suponiendo que está vacio y ubicado en el directorio actual.
- 5 Se comprueba si el script lo está ejecutando el root, y si lo es, se solicita un login de usuario y se añade al sistema, creando en ese momento su directorio personal, que estará ubicado en /home y llevará por nombre el del propio login de usuario. Si no se es root, se mostrará una advertencia.
- 6 Se comprueba si el script lo esta ejecutando el root, y si lo es, se solicita un login de usuario y se borra del sistema, eliminando también su directorio personal. Si no se es root, se mostrará una advertencia
- 7 Se finaliza la ejecución, mostrando el mensaje Fin de Ejecucion


- Si se introduce una opción no válida se indicará esta circunstancia en la salida estándar.

Tras ejecutar cualquiera de las opciones válidas, salvo en el caso de la 7, se imprimirá de nuevo el menú, en espera de recibir otra solicitud.

Diseñar el script empleando funciones shell para cada una de las opciones 1 a 6. 

```bash
#!/bin/bash
#Función que muestra el menú del programa
f_menu() {
    echo -e "\n-----Menu-----"
    echo "1] Listar archivos"
    echo "2] Ver directorio de trabajo"
    echo "3] Crear directorio"
    echo "4] Borrar directorio"
    echo "5] Crear usuario"
    echo "6] Borrar usuario"
    echo "7] Salir"
    read -p "Introduzca opción: " OPC
    echo -e "\n"
}

#Función que lista los archivos del directorio actual
f_listar_archivos(){
    ls
}

#Función que muestra el directorio actual
f_ver_directorio_t(){
    pwd
}

#Función que solicita el nombre de un directorio y lo crea
f_crear_directorio(){
    read -p "Introduzca el nombre del directorio a crear: " DIRECTORIO
    mkdir $DIRECTORIO && echo "El directorio $DIRECTORIO ha sido creado"
}

#Función que solicita el nombre de un directorio y lo borra
f_borrar_directorio(){
    read -r -p "Introduzca el nombre del directorio a borrar: " DIRECTORIO
    if [ -z "$DIRECTORIO" ]; then
        echo "No ha indicado ningún directorio"
        return 1
    fi
    if [[ ! -e "$DIRECTORIO" || ! -d "$DIRECTORIO" ]]; then
        echo "El directorio $DIRECTORIO no existe o no es un directorio"
        return 1
    fi
  
    if rmdir -- "$DIRECTORIO"; then
        echo "El directorio $DIRECTORIO ha sido borrado"
    else
        echo "Error al borrar $DIRECTORIO"
        return 1
    fi
}


#Función que crea un usuario
f_crear_usuario(){
    if [ $UID -eq 0 ]; then
        read -p "Introduzca el nombre del usuario a crear: " USUARIO
        useradd -m $USUARIO
        if [ $? -eq 0 ]; then
            echo "El usuario $USUARIO ha sido creado con éxito"
        fi

    else
        echo "ADVERTENCIA: ¡Hay que ser root para crear usuarios!"
    fi
}

#Función que borra un usuario
f_borrar_usuario(){
    if [ $UID -eq 0 ]; then
        read -p "Introduzca el nombre del usuario a borrar: " USUARIO
        userdel -r $USUARIO
        if [ $? -eq 0 ]; then
            echo "El usuario $USUARIO ha sido borrado con éxito"
        fi
    else
        echo "ADVERTENCIA: ¡Hay que ser root para borrar usuarios!"
    fi
}


#PROGRAMA PRINCIPAL
while true
    do
        f_menu
        case $OPC in
            1) f_listar_archivos;;
            2) f_ver_directorio_t;;
            3) f_crear_directorio;;
            4) f_borrar_directorio;;
            5) f_crear_usuario;;
            6) f_borrar_usuario;;
            7) echo "Fin de ejecución"
                exit 0;;
            *) echo -e "Opción no válida. Inténtelo de nuevo \n";;
        esac
    done
```



### 2. Deseamos implementar la funcionalidad de la papelera de escritorio con dos shell scripts en linux.
Los scripts son delete y undelete. El script delete mueve el fichero o directorio deseado a un directorio  de nombre TRASHDIR que ha de estar en el directorio home de cualquier usuario. Si no se encuentra, hay que crearlo.

La recuperación del fichero o directorio borrado se realizará en el directorio actual de trabajo.

Los scripts deberán de ser llamados por su nombre.

### delete.sh
```bash
#!/bin/bash
#Función que explica como ejecutar el scripts
function f_uso(){
    echo "USO: $0 <fichero|directorio>"
    exit 1
}
#INICIO PROGRAMA
#Ejecución con número de parámetros correcto
if [ $# -eq 1 ]
then
    #Comprobamos si existe un fichero o directorio con el
    #nombre que se ha pasado como parámetro
    if [ -f $1 -o -d $1 ]; then
            if [ ! -d ~/TRASHDIR ]; then
                mkdir ~/TRASHDIR && echo "Directorio TRASHDIR creado"
            fi

            mv $1 ~/TRASHDIR && echo ""$1" se ha movido al directorio TRASHDIR"
    #Si no es un archivo o directorio se muestra un mensaje
    else
        echo "No existe ningún fichero o directorio llamado "$1""
    fi
#Ejecución con número de parámetros incorrecto
else
    echo "ERROR: Ejecución con número de parámetros incorrecto"
    f_uso
fi
```
### undelete.sh
```bash
#!/bin/bash

#Función que explica como ejecutar el script
function f_uso(){
    echo "USO: $0 <fichero|directorio>"
    exit 1
}
#INICIO PROGRAMA

#Ejecución con número de parámetros correcto
if [ $# -eq 1 ]; then
#Comprobamos si existe el fichero pasado como parámetro
#dentro de la carpeta ~/TRASHDIR
    if [ -f ~/TRASHDIR/$1 -o -d ~/TRASHDIR/$1 ]
    then
        mv ~/TRASHDIR/$1 $PWD && echo ""$1" se ha movido al directorio actual de trabajo ($PWD)"

#Si no existe un archivo o directorio con tal nombre
#en la carpeta ~/TRASHDIR que muestre un mensaje
    else
        echo "No existe ningún fichero o directorio llamado "$1" en la carpeta TRASHDIR"
    fi
#Ejecución con número de parámetros incorrecto
else
    echo "ERROR: Ejecución con número de parámetros incorrecto"
    f_uso
fi
```