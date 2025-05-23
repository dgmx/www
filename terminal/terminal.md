---
title: "01. Introducción a la terminal"
parent: "Terminal"
---

## Introducción a la terminal

*   Terminología
*   Comandos
    *   `pwd` — Directorio de trabajo
    *   `cd` — Cambiar de directorio
    *   `ls` — Listar contenidos
    *   `touch` — Crear ficheros
    *   `mkdir` — Crear directorios
    *   `cp` — Copiar archivos
    *   `mv` — Mover y renombrar
    *   `rm` — Borrar
    *   `*` — Wildcard
    *   `echo` y `cat` — Imprimir por pantalla
    *   `>` y `>>` — Redirección a fichero
    *   `|` — Redirección entre comandos
    *   `sort` y `uniq` — Ordenar texto
    *   `head` y `tail` — Partes de un texto
    *   `wc` — Word count
    *   `grep` — Filtrar líneas de texto
    *   `cut` — Cortar porciones de texto
    *   `man` — Manual de ayuda
    *   Más ayuda
*   Ejercicios propuestos

Terminología
------------

Algunas aclaraciones:

**CLI**

_Command Line Interface_. Es una forma de utilizar un ordenador basada enteramente por texto escribiendo comandos, sin utilización de gráficos ni de ratón.

**Prompt**

Para indicar que se puede comenzar a escribir un comando, se muestra primero un texto con algo de información, llamado _prompt_. Se puede personalizar por completo, pero es común que muestre un `$` en una sesión de _usuario_, y `#` en una de _superusuario (root)_.

**Shell**

Es el programa que lee cada comando que introduces, lo manda ejecutar e imprime el resultado. También se lo conoce como _intérprete de línea de comandos_. Existen varios tipos de _shell_ diferentes, cada una con ciertos cambios en la sintaxis para escribir comandos. La más extendida es [bash](https://es.wikipedia.org/wiki/Bash), aunque existen otras como [zsh](https://github.com/robbyrussell/oh-my-zsh) (potente y personalizable) y [fish](https://fishshell.com/) (moderna y elegante).

**Terminal**

Es un programa básico que permite la ejecución de una shell. En entornos gráficos es una aplicación que emula una ventana con una CLI dentro, pero en interfaces puramente de texto llega a ser un intermediario ligero con el _kernel_ del sistema operativo.  
El nombre viene de la utilización de ordenadores de tipo _mainframe_, sumamente caros, a los cuales los usuarios se podían conectar desde unos dispositivos llamados [terminales](https://en.wikipedia.org/wiki/Computer_terminal). En UNIX, una conexión al sistema se sigue identificando por un número o puerto de **TTY** (viene de un tipo de terminal llamado [TeleTYpewriter](https://en.wikipedia.org/wiki/Teleprinter)), o **PTY** (_pseudo-tty_, para terminales emuladas).

**Consola**

Históricamente, era el puerto y la conexión digital en el _mainframe_ al que se conectaba una terminal, pero actualmente no hay una clara distinción con la terminal. En Linux se puede acceder a una consola virtual usando las teclas CtrlAltF1, y más consolas alternando con F2, F3… Se puede volver al entorno gráfico con F7 (puede cambiar según el sistema).

Comandos
--------

Es muy común en Linux que los ficheros de texto plano no tengan extensión, pero sería equivalente a la típica extensión `.txt`.

> **Consejo:** procura evitar siempre espacios en los nombres de ficheros y directorios para mayor comodidad.

Si en algún momento un comando no termina y no te devuelve al prompt, puedes pulsar CtrlC para finalizarlo.

### `pwd` — Directorio de trabajo

En la terminal siempre te encuentras en un directorio concreto de todo el sistema de ficheros. Para saber en cuál estás puedes usar en cualquier momento este directorio de trabajo (_working directory_). Por ejemplo:

    $ pwd
    /home/user/hyde/Desktop
    

### `cd` — Cambiar de directorio

Recuerda que:

*   Una ruta absoluta comienza siempre con `/`.
*   Una ruta relativa se comienza a escribir partiendo del directorio en el que te encuentras (ver con `pwd`).
*   Un punto `.` significa el directorio actual.
*   Dos puntos `..` significan el directorio padre.

Ejemplos:

    $ cd dir/subdir
    $ cd ./dir/subdir  # Equivalente al anterior
    $ cd /usr/bin
    $ cd ..
    $ cd ../dir
    $ cd ../../dir
    

> **Truco:** comienza a escribir el nombre de algún fichero o directorio que exista, y pulsa la tecla TAB para que se **autocomplete**. Así ahorras tiempo y evitas errores.

Las siguientes entradas de `cd` son muy frecuentes:

*   `cd ~`: La tilde (_virgulilla_) lleva al directorio de inicio del usuario.
*   `cd -`: El guión lleva al anterior directorio previo al último `cd`.

### `ls` — Listar contenidos

Lista contenidos del directorio en el que te encuentras.

Algunas opciones:

    $ ls -a        # Lista ficheros ocultos
    $ ls -l        # Muestra más información
    $ ls -h        # Tamaños en Kb/Mb...
    $ ls -a -l -h  # Varias opciones
    $ ls -alh      # Opciones juntas
    

Los ficheros ocultos son los que comienzan por un punto en su nombre, y no se muestran por defecto en `ls`.

Ejemplo de salida :
```bash
ls -la
drwxr-xr-x   8 diego  staff   256 16 mar 11:19 .
drwxr-x---+ 67 diego  staff  2144 16 mar 11:19 ..
drwxr-xr-x   8 diego  staff   256 29 oct 18:11 .idea
drwxr-xr-x  23 diego  staff   736 16 feb 19:35 enviroment
-rw-r--r--   1 diego  staff     0 16 mar 11:19 file.txt
-rw-r--r--   1 diego  staff    59 10 oct  2023 funcion1.py
-rwxr-xr-x   1 diego  staff   235 10 oct  2023 numbers.py
```


Las columnas significan:

*   Permisos, en formato `<directorio><usuario><grupo><otros>`
*   Número de links (si es un directorio indica el número de elemntos que contiene)
*   Usuario propietario del elemento
*   Grupo propietario
*   Tamaño del fichero
*   Fecha de la última modificación
*   Nombre

### `touch` — Crear ficheros

Con este comando:

*   Creas un fichero vacío si no existe ninguno con ese nombre
*   Actualizas la fecha de modificación si el fichero o directorio existe

    $ touch file1 file2
    

### `mkdir` — Crear directorios

Crea un directorio con el nombre dado.

    $ mkdir mi_directorio
    $ mkdir dir1 dir2 dir3
    

### `cp` — Copiar archivos

Tiene varios argumentos de entrada:

*   Origen: uno o varios archivos
*   Destino: un directorio (incluyendo `.` o `..`)
```bash
    $ cp file1 file2
    $ cp dir/f1 dir2/
    $ cp f1 f2 f3 dir/
```

La opción `-r` lo hace de forma recursiva, permitiendo copiar directorios y no sólo archivos. En este comando tiene relevancia terminar los directorios con barra `/` o sin ella:

    $ cp -r dir1 dir2
    $ cp -r dir1/ dir2
    

En el primer caso, `dir2` acaba conteniendo un directorio llamado `dir1`, mientras que en el segundo caso se copian los contenidos de `dir1` dentro de `dir2`.

### `mv` — Mover y renombrar

Tiene únicamente dos argumentos:

    mv file1 file2
    mv dir1 dir2
    

### `rm` — Borrar

Borra archivos (y directorios con `-r`) de forma permanente e irrecuperable, sin papelera de reciclaje.

    rm file1
    rm file1 file2 file3
    rm -r dir/
    

### `*` — Wildcard

El wildcard `*` se puede utilizar en cualquier comando que trabaje con ficheros:

*   `*` se sustituye por todos los archivos en el directorio actual
*   `*.jpg` se sustituye por todos los archivos que terminan por `.jpg`
*   `img*.png` se sustituye por todos los archivos que comienzan por `img` y terminan por `.png`

Ejemplos:

    $ cp *.jpg dir/
    $ ls *.txt
    $ ls img*.jpg
    $ rm *          # Borra todos los ficheros!
    

### `echo` y `cat` — Imprimir por pantalla

El comando `echo` permite imprimir el texto indicado por pantalla, aunque se usa sobre todo para redirecciones.

Se pueden introducir saltos de línea escribiendo `\n` si usas la opción `-e`.

    $ echo "Hola Mundo"
    Hola Mundo
    $ echo -e "Hola\nMundo"
    Hola
    Mundo
    

El comando `cat` imprime el contenido entero de un fichero. No es recomendable usarlo para ficheros muy grandes (ver tamaño con `ls -lh`) ni para ficheros binarios que no tengan únicamente texto.

    $ cat fichero
    

### `>` y `>>` — Redirección a fichero

Muchos comandos como `echo` y `cat` devuelven texto como salida. Este texto se puede redirigir a un fichero escribiendo `comando > fichero`.

*   Si el fichero con ese nombre no existe, se crea
*   Si el fichero existe **se reemplazan sus contenidos**, perdiéndose irrecuperablemente lo que tuviese antes
```
    # echo imprime un texto por pantalla
    $ echo "Hola Mundo"
    $ echo "Hola Mundo" > hello.txt
    
    # cat imprime los contenidos de un fichero
    $ cat hello.txt
    $ cat file1 > file2
    
```
Si se ponen dos ángulos seguidos, el texto redirigido se añade al final del fichero, sin reemplazarlo.
```
    $ echo "Bye" >> hello.txt
    $ cat file1 >> file2
``` 

### `|` — Redirección entre comandos

Este símbolo se llama **pipe** (tubería o [pelca](https://es.wikipedia.org/wiki/Pleca)), y permite enviar la salida de un comando no a un fichero, sino como entrada de otro comando. Una _pipeline_ se escribe como `comando1 | comando2 | comando3 ...`. Ten en cuenta que no todos los comandos devuelven un resultado.

Aquí usamos el comando `wc` (_word count_), que da estadísticas sobre el texto que recibe (también se puede usar como `wc file`).

    $ echo "Hola Mundo" | wc
    
    # Se pueden mezclar redirecciones
    $ echo "Hola Mundo" | wc > palabras
    

### `sort` y `uniq` — Ordenar texto

El comando `sort` ordena por líneas un conjunto de datos que reciba por _pipe_ o por un fichero.

    $ cat names | sort > sorted-names
    

El comando `uniq` elimina líneas duplicadas siempre que estén seguidas. Por este motivo es muy común ordenarlas antes.

    $ cat names.txt | sort | uniq
    $ sort names.txt | uniq
    

### `head` y `tail` — Partes de un texto

Estos comandos permiten ver las primeras y últimas líneas de un archivo de texto. La opción `-n 3` indica que muestre sólo 3 líneas; sin esa opción muestra 10 por defecto.

    $ head file
    $ head -n 15 file
    
    $ cat file | head -n 25 | tail -n 1
    

El último comando imprime únicamente la línea número 25 del fichero.

### `wc` — Word count

Este comando muestra estadísticas sobre un fichero o la entrada por tubería:

    $ echo "hola mundo" | wc
           1       2      11
    $ wc README.md 
          37     163    1269 README.md
    

Esto imprime, por orden: número de **líneas**, **palabras** y **caracteres** del texto.

Debes tener en cuenta que la mayoría de los comandos como `echo` añaden el carácter de salto de línea, y `wc` también lo tiene en cuenta, dado que es parte de su _input_. Por eso, en `hola mundo` imprime 11 caracteres, en vez de los 10 que podríamos decir que hay.

### `grep` — Filtrar líneas de texto

Con `grep` podemos filtrar los contenidos de texto por líneas, por ejemplo para saber si un fichero contiene cierta información, y dónde.

    $ cat /etc/passwd | grep root
    $ grep cereza recetas.txt
    

Con la opción `-v` (o `--invert-match`) se invierte la búsqueda, y devuelve las líneas que no contienen el término de búsqueda.

    $ grep -v cereza recetas.txt
    

**Ejemplo:** El comando `ps aux` muestra procesos en ejecución. Con el siguiente comando podemos filtrar por el nombre de alguno de ellos y ver información (quizás para matar ese proceso).

    $ ps aux | grep bash
    

También podemos emplear patrones (llamados técnicamente _expresiones regulares_) para afinar la búsqueda:

*   `^` significa comienzo de línea
*   `$` significa fin de línea

Así, podemos filtrar por las líneas que no simplemente contengan, sino que comiencen o finalicen por un texto:

Usuarios del sistema cuyo nombre comienza por `root` (partiendo de que en `/etc/passwd` cada línea comienza por el nombre de usuario):

    $ cat /etc/passwd | grep "^root"
    root:x:0:0:root:/root:/bin/bash
    

> Al usar `grep` es recomendable escribir el término entre comillas, aunque si el patrón que escribimos no contiene espacios no es necesario.

**Ejemplo:** Lista únicamente los directorios (partiendo de que `ls -l` comienza por `d` sólo para directorios):

    $ ls -l
    drwxr-xr-x  1 user user    841 24 Jan 19:27 imagenes
    -rw-r--r--  1 user user  11940  6 Dec 13:27 lista.txt
    -rw-r--r--  1 user user   2822  6 Dec 13:27 txt_user
    -rw-r--r--  1 user user    176 19 Jan 16:28 README.md
    drwxr-xr-x  1 user user   4085  8 Dec 18:34 recursos
    -rw-r--r--  1 user user    358  7 Dec 12:11 registro.txt
    $ ls -l | grep "^d"
    drwxr-xr-x  1 user user    841 24 Jan 19:27 imagenes
    drwxr-xr-x  1 user user   4085  8 Dec 18:34 recursos
    $ ls -l | grep ".txt$"
    -rw-r--r--  1 user user  11940  6 Dec 13:27 lista.txt
    -rw-r--r--  1 user user    358  7 Dec 12:11 registro.txt
    

### `cut` — Cortar porciones de texto

Este comando permite quedarnos con partes de texto que estén bien estructurados siempre que podamos establecer un carácter que divida los contenidos.

Por ejemplo, un fichero en formato `csv` utiliza la coma o el punto y coma para separar los campos:

Puedes utilizar `cut` para tratar este fichero como una tabla y filtrar una o varias columnas. Hay dos opciones importantes:

*   `-d` (_delimiter_) Permite usar el carácter que le indiques como delimitador:
    *   `-d' '` usa el espacio como delimitador.
    *   `-d'\t'` usa el tabulador (es el valor por defecto si no se indica esta opción).
*   `-f` (_field_) Permite indicar los campos (columnas) con los que nos queremos quedar:
    *   `-f1` extrae el primer campo
    *   `-f1,2,4` extrae los campos 1, 2 y 4.
    *   `-f1-3` extrae los campos del 1 al 3

Por ejemplo, partiendo del siguiente fichero llamado `Tarantino.csv`:

    Pulp Fiction,1994,5
    Reservoir Dogs,1992,4
    Kill Bill: Volume 1,2003,4.5
    Inglourious Basterds,2009,4.5
    Django Unchained,2012,5
    

    $ cat Tarantino.csv | cut -d',' -f2
    1994
    1992
    2003
    2009
    2012
    $ cat Tarantino.csv | cut -d',' -f1,3
    Pulp Fiction,5
    Reservoir Dogs,4
    Kill Bill: Volume 1,4.5
    Inglourious Basterds,4.5
    Django Unchained,5
    

### `man` — Manual de ayuda

Puedes buscar información sobre lo que hace y las opciones que tiene un comando mirándolo en el manual del sistema.

    $ man ls
    

*   Desplázate con los cursores ↑ y ↓.
*   Busca una palabra tecleando la barra/ y luego la palabra: `/texto`.
*   Sal del manual con la tecla q.

### Más ayuda

Además, muchos comandos incluyen una opción `-h` o `--help`, que muestra información breve sobre las opciones que admiten, aunque los que hemos visto en esta página son suficientemente básicos como para no incluirla.

* * *

Ejercicios propuestos
---------------------

*   En una única línea: usando `echo` escribe en cuatro nombres de persona, **uno por línea**, y haz que se guarde en el fichero `nobmres`. El resultado debería ser algo como:
    
          Laura
          Edward
          Sarah
          Julian
        
    
*   Lista todos los ficheros markdown `.md`.
*   Copia todos los ficheros `.md` al directorio `markdown` (suponiendo que ya está creado).
*   Filtra los resultados de `ls -l` para mostrar únicamente:
    *   Los directorios
    *   Los ficheros de 2017.
    *   Los ficheros (no directorios) que sólo tienen permiso de lectura para el usuario.
*   Busca en el `man` la opción para que `ls` liste los ficheros ordenados por tamaño (en inglés, _size_).
*   El comando `dig`, con la opción `any`, muestra todos los registros DNS de un servidor (ej: `dig twitter.com any`). Úsalo para extraer únicamente los registros de correo electrónico (`MX`).

Ejemplos resueltos
------------------

### Extraer la línea _n_ de un fichero

**Enunciado:** Extraer la línea número 4 de un fichero cualquiera.

**Resolución:**

Supongamos el fichero `ciudades`:

    Birmingham
    Lyon
    Nüremberg
    Brno
    Panaji
    

Con el comando `head` podemos extraer las 4 primeras líneas:

    $ cat ciudades | head -n4
    Birmingham
    Lyon
    Nüremberg
    Brno
    

Y con el comando `tail` podemos extraer la última:

    $ cat ciudades | head -n4 | tail -n1
    Brno
    

Para profundizar
----------------

*   [The Art of Command Line (github)](https://github.com/jlevy/the-art-of-command-line)
*   [Bash guide (github)](https://github.com/Idnan/bash-guide)
*   [Codeacademy > Learn the command line](https://www.codecademy.com/courses/learn-the-command-line/lessons/redirection/exercises/sed?action=lesson_resume&link_content_target=interstitial_undefined)
