# Scripts en Bash - Examen

## Ejercicio 1

1. Realizar un script que copie todos los ficheros que se le pasen por parámetro, al directorio misDatos. Si el directorio misDatos no existe, se deberá crear.

```bash
#!/bin/bash

directorio="misDatos"

# ! -d comprueba si el directorio existe, si no, lo crea
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

**Versión 1**

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
**Versión 2 Ampliada**

```bash
#!/bin/bash

function f_Ayuda () {
echo "Script que genera una copia de seguridad de un directorio indicado como argumento"

echo "Sintaxis:"
echo "$0 <DIRECTORIO>"
echo "😭"
}

DIRECTORIO=$1
FECHA=$(date +%Y%m%d)

if [ -z "$DIRECTORIO" ]; then
    f_Ayuda
    exit 1
fi
# -z cadena vacía

if [ ! -d "$DIRECTORIO" ]; then
    echo "Error: El directorio $1 no existe"
    exit 1
fi
# -d directorio. 

NOMBRE_BACKUP="backup_$DIRECTORIO_$FECHA.tar.gz"
echo $NOMBRE_BACKUP

tar -czf $NOMBRE_BACKUP $DIRECTORIO 

if [ $? -eq 0 ]; then
    echo "Backup creado: $NOMBRE_BACKUP"
else
    echo "Error al crear el backup"
    exit 1
fi
```

## Ejercicios de oposiciones

## 1 Diseñar un shell script para bash que ofrezca en la salida estándar el siguiente menú:

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



## 2. Implementación de la funcionalidad de la papelera de escritorio con dos shell scripts en linux.

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



## 3. Examen de Bash: Programa Menú de Comandos Básicos

### Enunciado

Desarrolle un script de Bash que presente un menú interactivo para ejecutar comandos básicos de Linux. El programa debe cumplir con los siguientes requisitos:

### Funcionalidad principal
- Mostrar un menú de opciones que se repita indefinidamente hasta que el usuario seleccione la opción de salir.
- Cada opción del menú debe estar implementada como una función separada.
- Utilizar la estructura `case` para la selección de opciones.
- Limpiar la pantalla y volver a mostrar el menú después de cada operación (excepto al salir).

### Opciones requeridas (mínimo 11 además de salir)
1. Listar contenido del directorio actual (con detalles)
2. Mostrar directorio actual 
3. Mostrar fecha y hora actual
4. Mostrar uso de disco 
5. Mostrar uso de memoria 
6. Mostrar usuarios conectados 
7. Crear un directorio (solicitando nombre al usuario)
8. Eliminar un directorio (solicitando nombre al usuario)
9. Copiar un archivo (solicitando origen y destino)
10. Mover o renombrar un archivo (solicitando origen y destino)
11. Mostrar contenido de un archivo (solicitando nombre)
12. Salir del programa

### Requisitos adicionales
- El script debe comenzar con el shebang adecuado para Bash.
- Debe ser ejecutable (`chmod +x`).
- Manejar errores básicos (por ejemplo, intentar eliminar un directorio que no existe o no está vacío, copiar un archivo que no existe, etc.).
- Utilizar `read` para obtener entrada del usuario cuando sea necesario.
- Mensajes claros y amigables para el usuario.

### Entregable
Un único archivo de script Bash (por ejemplo, `menu_comandos.sh`) que implemente todas las funcionalidades descritas.

### Nota para el docente
Este ejercicio evalúa:
- Estructuras de control (`while`, `case`)
- Definición y uso de funciones
- Manejo de entrada/salida
- Comandos básicos de Linux
- Buenas prácticas de scripting (limpieza de pantalla, manejo de errores, mensajes claros)

**No se proporcionará código de ejemplo. Los estudiantes deben desarrollar la solución por completo.**

```bash
#!/usr/local/bin/bash

# Menu-driven program for basic Linux commands

# Function definitions
show_menu() {
    clear
    echo "=============================="
    echo "  Menú de Comandos Básicos    "
    echo "=============================="
    echo "1) Listar contenido de directorio"
    echo "2) Mostrar directorio actual"
    echo "3) Mostrar fecha y hora"
    echo "4) Mostrar uso de disco"
    echo "5) Mostrar uso de memoria"
    echo "6) Mostrar usuarios conectados"
    echo "7) Crear un directorio"
    echo "8) Eliminar un directorio"
    echo "9) Copiar un archivo"
    echo "10) Mover o renombrar un archivo"
    echo "11) Mostrar contenido de un archivo"
    echo "12) Salir"
    echo  -n "Seleccione una opción: "
}

list_dir() {
    echo "Contenido del directorio actual:"
    ls -la
    echo
    read -p "Presione Enter para continuar..."
}

show_pwd() {
    echo "Directorio actual: $(pwd)"
    echo
    read -p "Presione Enter para continuar..."
}

show_date() {
    echo "Fecha y hora actuales: $(date)"
    echo
    read -p "Presione Enter para continuar..."
}

show_disk_usage() {
    echo "Uso de disco:"
    df -h
    echo
    read -p "Presione Enter para continuar..."
}

show_mem_usage() {
    echo "Uso de memoria:"
    free -h
    echo
    read -p "Presione Enter para continuar..."
}

show_users() {
    echo "Usuarios conectados:"
    who
    echo
    read -p "Presione Enter para continuar..."
}

create_dir() {
    read -p "Ingrese el nombre del directorio a crear: " dirname
    if [ -z "$dirname" ]; then
        echo "Nombre no puede estar vacío."
    else
        mkdir -p "$dirname" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "Directorio '$dirname' creado exitosamente."
        else
            echo "Error al crear el directorio '$dirname'."
        fi
    fi
    echo
    read -p "Presione Enter para continuar..."
}

delete_dir() {
    read -p "Ingrese el nombre del directorio a eliminar: " dirname
    if [ -z "$dirname" ]; then
        echo "Nombre no puede estar vacío."
    else
        rmdir "$dirname" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "Directorio '$dirname' eliminado exitosamente."
        else
            echo "Error al eliminar el directorio '$dirname'. Puede que no esté vacío o no exista."
        fi
    fi
    echo
    read -p "Presione Enter para continuar..."
}

copy_file() {
    read -p "Ingrese el archivo origen: " src
    read -p "Ingrese el archivo destino: " dest
    if [ -z "$src" ] || [ -z "$dest" ]; then
        echo "Ambos campos son obligatorios."
    else
        cp "$src" "$dest" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "Archivo '$src' copiado a '$dest'."
        else
            echo "Error al copiar el archivo. Verifique que '$src' exista y tenga permisos."
        fi
    fi
    echo
    read -p "Presione Enter para continuar..."
}

move_file() {
    read -p "Ingrese el archivo origen: " src
    read -p "Ingrese el nuevo nombre o ruta destino: " dest
    if [ -z "$src" ] || [ -z "$dest" ]; then
        echo "Ambos campos son obligatorios."
    else
        mv "$src" "$dest" 2>/dev/null
        if [ $? -eq 0 ]; then
            echo "Archivo '$src' movido a '$dest'."
        else
            echo "Error al mover el archivo. Verifique que '$src' exista."
        fi
    fi
    echo
    read -p "Presione Enter para continuar..."
}

show_file_content() {
    read -p "Ingrese el nombre del archivo a mostrar: " filename
    if [ -z "$filename" ]; then
        echo "Nombre de archivo no puede estar vacío."
    elif [ ! -f "$filename" ]; then
        echo "El archivo '$filename' no existe."
    else
        echo "Contenido de '$filename':"
        cat "$filename"
    fi
    echo
    read -p "Presione Enter para continuar..."
}

# Main loop
while true; do
    show_menu
    read option
    case $option in
        1) list_dir ;;
        2) show_pwd ;;
        3) show_date ;;
        4) show_disk_usage ;;
        5) show_mem_usage ;;
        6) show_users ;;
        7) create_dir ;;
        8) delete_dir ;;
        9) copy_file ;;
        10) move_file ;;
        11) show_file_content ;;
        12) 
            echo "Saliendo del programa..."
            exit 0
            ;;
        *) 
            echo "Opción no válida. Intente nuevamente."
            read -p "Presione Enter para continuar..."
            ;;
    esac
done
```