# 🐚 Chuleta de Bash — Lo Esencial

---

## 1. SHEBANG Y ENCABEZADO

```bash
#!/bin/bash
set -euo pipefail   # Modo seguro: error si falla, vars indefinidas, errores en pipes
```

---

## 2. VARIABLES

```bash
NOMBRE="Juan"             # Asignación (SIN espacios alrededor de =)
readonly NOMBRE           # Variable de solo lectura
echo "$NOMBRE"            # Usar siempre comillas dobles
echo 'texto $var'         # Comillas simples: NO expande variables

LOCAL="mundo"
echo "Hola ${LOCAL}!"     # Hola mundo!
echo "Hola ${LOCAL}ton"   # Hola mundoton  (sin espacios)

VALOR=${VAR:-default}     # Si VAR no existe, usa "default"
VALOR=${VAR:=default}     # Si VAR no existe, asigna "default"
VALOR=${VAR:?error}       # Si VAR no existe, muestra error y sale
VALOR=${VAR:+alternativo} # Si VAR existe, usa "alternativo"

unset NOMBRE              # Borra variable
```

---

## 3. ARRAYS

```bash
frutas=(manzana pera uva)          # Declarar
echo "${frutas[0]}"                # manzana
echo "${frutas[@]}"                # manzana pera uva
echo "${#frutas[@]}"               # 3 (longitud)
echo "${!frutas[@]}"               # 0 1 2 (índices)
frutas+=("kiwi")                   # Añadir elemento
unset frutas[1]                    # Borrar elemento
```

---

## 4. VARIABLES ESPECIALES

| Variable | Significado |
|----------|-------------|
| `$0` | Nombre del script |
| `$1`, `$2`, ... | Argumentos posicionales |
| `$#` | Número de argumentos |
| `$@` | Todos los argumentos (como lista) |
| `$*` | Todos los argumentos (como string) |
| `$?` | Código de salida del último comando |
| `$$` | PID del script actual |
| `$!` | PID del último proceso en background |
| `$LINENO` | Línea actual del script |
| `$RANDOM` | Número aleatorio (0-32767) |
| `$SECONDS` | Segundos desde que inició el script |
| `$UID` | UID del usuario actual |

---

## 5. OPERADORES DE COMPARACIÓN

### Numéricos
```bash
-eq  -ne  -lt  -le  -gt  -ge    # ==  !=  <  <=  >  >=
```
### Strings
```bash
=     !=        # igual, distinto
-z    -n        # string vacío, no vacío
<     >         # orden alfabético ([[ ]])
```

### Archivos
```bash
-f "$file"    # existe y es archivo regular
-d "$file"    # existe y es directorio
-e "$file"    # existe
-s "$file"    # existe y no está vacío (tamaño > 0)
-r "$file"    # existe y tiene permiso de lectura
-w "$file"    # existe y tiene permiso de escritura
-x "$file"    # existe y tiene permiso de ejecución
-L "$file"    # existe y es enlace simbólico
-h "$file"    # existe y es enlace simbólico
-c "$file"    # existe y es archivo de caracteres
-b "$file"    # existe y es archivo de bloque
-p "$file"    # existe y es pipe (FIFO)
-S "$file"    # existe y es socket
-nt "$file1" "$file2"   # file1 más reciente que file2
-ot "$file1" "$file2"   # file1 más antiguo que file2
-ef "$file1" "$file2"   # mismo inodo (hardlinks)
```

---

## 6. CONDICIONALES (if / elif / else)

```bash
# Básico
if [[ $VAR -eq 10 ]]; then
    echo "Es 10"
elif [[ $VAR -gt 10 ]]; then
    echo "Mayor que 10"
else
    echo "Menor que 10"
fi

# Con operadores lógicos
if [[ -f "$file" && -r "$file" ]]; then   # AND
if [[ -d "$dir" || -L "$dir" ]]; then     # OR
if [[ ! -z "$var" ]]; then                # NOT

# Comprobar si un comando tuvo éxito
if grep -q "error" log.txt; then
    echo "Se encontró 'error'"
fi
```

### Diferencia entre [ ] y [[ ]]

| `[ ]` (POSIX) | `[[ ]]` (Bash) |
|---|---|
| No soporta `&&` `\|\|` | Soporta `&&` `\|\|` `!` |
| No soporta `=~` | Soporta regex: `[[ $var =~ ^foo ]]` |
| No soporta patrones glob | Soporta patrones: `[[ $var == *.txt ]]` |
| Necesita escapar `<` `>` | No necesita escapar `<` `>` |
| Más lento | Más rápido (es palabra reservada) |

---

## 7. BUCLES

### for
```bash
# Lista explícita
for i in 1 2 3 4 5; do echo "$i"; done

# Rango
for i in {1..10}; do echo "$i"; done
for i in {a..z}; do echo "$i"; done
for i in {1..10..2}; do echo "$i"; done  # 1 3 5 7 9

# Como C
for ((i=0; i<10; i++)); do echo "$i"; done

# Archivos
for f in *.txt; do echo "$f"; done
for f in /etc/*.conf; do echo "$f"; done
```

### while / until
```bash
while [[ $i -lt 10 ]]; do
    echo "$i"
    ((i++))
done

until [[ $i -ge 10 ]]; do
    echo "$i"
    ((i++))
done

# Leer archivo línea por línea
while IFS= read -r linea; do
    echo "$linea"
done < archivo.txt
```

### break / continue
```bash
break      # Sale del bucle
break 2    # Sale 2 niveles
continue   # Salta a siguiente iteración
```

---

## 8. CASE

```bash
case "$VAR" in
    start)   echo "Iniciando..." ;;
    stop)    echo "Deteniendo..." ;;
    restart) echo "Reiniciando..." ;;
    *)       echo "Uso: $0 {start|stop|restart}" ;;
esac

# Con patrones
case "$archivo" in
    *.png|*.jpg) echo "Imagen" ;;
    *.txt)       echo "Texto" ;;
    *)           echo "Desconocido" ;;
esac
```

---

## 9. FUNCIONES

```bash
# Definición
saludar() {
    local nombre="$1"        # local: ámbito de función
    echo "Hola, $nombre!"
}

# Llamar
saludar "Ana"

# Retornar valor
suma() {
    echo $(( $1 + $2 ))      # Usar echo para "retornar"
}
resultado=$(suma 3 5)        # Capturar con $()

# O con return (solo enteros 0-255)
check_root() {
    [[ $EUID -eq 0 ]] && return 0 || return 1
}

$FUNCNAME     # Nombre de la función actual
$FUNCNAME[]   # Stack de llamadas (índice 0 = actual)
```

---

## 10. OPERACIONES ARITMÉTICAS

```bash
echo $(( 2 + 3 ))          # 5
echo $(( 2 ** 3 ))         # 8 (potencia)
echo $(( 10 / 3 ))         # 3 (división entera)
echo $(( 10 % 3 ))         # 1 (módulo)
echo $(( (2 + 3) * 4 ))    # 20

# Con let (modifica variable directamente)
let x=2+3
let x+=5
let x++

# Para decimales (bc)
echo "scale=2; 10 / 3" | bc   # 3.33
```

---

## 11. REDIRECCIONES

```bash
comando > archivo        # stdout → archivo (sobrescribe)
comando >> archivo       # stdout → archivo (añade)
comando 2> archivo       # stderr → archivo
comando &> archivo       # stdout + stderr → archivo
comando 2>&1             # stderr → mismo que stdout
comando < archivo        # stdin  ← archivo

comando 2>/dev/null      # Descartar stderr
comando &>/dev/null      # Descartar todo

<< EOF                  # Here-document
texto multilínea
EOF

<<< "texto"             # Here-string (redirige string como stdin)

# Pipe
comando1 | comando2     # stdout de comando1 → stdin de comando2

# Pipe bidireccional (Bash 4+)
comando1 |& comando2    # stdout + stderr → stdin de comando2

# Descriptores de archivo personalizados
exec 3> archivo.txt     # Abre fd 3 para escritura
echo "texto" >&3        # Escribe en fd 3
exec 3>&-               # Cierra fd 3
```

---

## 12. SUSTITUCIÓN DE COMANDOS

```bash
# Estilo moderno ($())
archivos=$(ls)
contenido=$(cat archivo.txt)

# Estilo antiguo (``) — evitar
archivos=`ls`

# Sustitución de proceso (Bash 4+)
diff <(ls dir1) <(ls dir2)
```

---

## 13. STRINGS — MANIPULACIÓN

```bash
s="Hola Mundo"

# Longitud
echo "${#s}"                  # 10

# Substring
echo "${s:0:4}"               # Hola
echo "${s:5}"                 # Mundo
echo "${s: -5}"               # Mundo (espacio antes de -5)

# Reemplazar
echo "${s/Mundo/Amigo}"       # Hola Amigo  (primera ocurrencia)
echo "${s//o/O}"              # HOla MundO  (todas)
echo "${s/#Hola/Adios}"       # Adios Mundo (principio)
echo "${s/%Mundo/Planeta}"    # Hola Planet (final)

# Eliminar patrón
echo "${s#Hola }"             # Mundo       (corto, principio)
echo "${s##*o}"               # ndo         (largo, principio)
echo "${s% *}"                # Hola        (corto, final)
echo "${s%% *}"               # Hola        (largo, final)

# Mayúsculas / minúsculas
echo "${s^^}"                 # HOLA MUNDO
echo "${s,,}"                 # hola mundo
echo "${s^}"                  # Hola Mundo  (primera letra)
echo "${s,}"                  # hola Mundo  (primera minúscula)

# Contiene (con [[ ]])
if [[ "$s" == *"Mundo"* ]]; then
```

---

## 14. EXPANSIONES (BRACE)

```bash
{1..5}                # 1 2 3 4 5
{1..5..2}             # 1 3 5
{a..e}                # a b c d e
{manzana,pera,uva}    # manzana pera uva
{foo,bar}{1,2}        # foo1 foo2 bar1 bar2
archivo.{txt,md,pdf}  # archivo.txt archivo.md archivo.pdf
mkdir -p dir/{src,doc,test}  # Crea dir/src dir/doc dir/test
```

---

## 15. MENSAJES Y COLORES

```bash
# Códigos ANSI
ROJO='\033[0;31m'
VERDE='\033[0;32m'
AMARILLO='\033[1;33m'
AZUL='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
BLANCO='\033[1;37m'
NC='\033[0m'          # Sin color
NEGRITA='\033[1m'
SUBRAYADO='\033[4m'
PARPADEO='\033[5m'

echo -e "${VERDE} OK ${NC}"
printf "${ROJO}Error: %s${NC}\n" "$mensaje"
```

---

## 16. TRAPS (SEÑALES)

```bash
limpiar() {
    echo "Limpiando..."
    rm -f /tmp/temp_$$
    exit 0
}

trap limpiar EXIT            # Al salir del script
trap limpiar INT TERM        # Ctrl+C o kill
trap limpiar ERR             # Al ocurrir un error
trap 'echo "No puedes Ctrl+C"' INT   # Ignorar Ctrl+C
trap - INT                   # Restaurar comportamiento default

# Ignorar todas las señales
trap '' INT TERM HUP
```

| Señal | Nº | Significado |
|-------|----|-------------|
| EXIT | 0 | Salida normal |
| INT | 2 | Ctrl+C |
| TERM | 15 | Terminación |
| HUP | 1 | Colgar/recargar |
| ERR | - | Error en comando |

---

## 17. GETOPTS (ARGUMENTOS)

```bash
while getopts ":a:b:vh" opt; do
    case $opt in
        a) ARG_A="$OPTARG" ;;
        b) ARG_B="$OPTARG" ;;
        v) VERBOSE=true ;;
        h) echo "Uso: $0 [-a arg] [-b arg] [-v]"; exit 0 ;;
        :) echo "Falta argumento para -$OPTARG" >&2; exit 1 ;;
        \?) echo "Opción inválida: -$OPTARG" >&2; exit 1 ;;
    esac
done
shift $((OPTIND - 1))     # Quitar opciones, dejar args posicionales
```

---

## 18. SELECT (MENÚS)

```bash
PS3="Selecciona una opción: "
opciones=("Opción 1" "Opción 2" "Salir")
select opt in "${opciones[@]}"; do
    case $opt in
        "Opción 1") echo "Elegiste 1" ;;
        "Opción 2") echo "Elegiste 2" ;;
        "Salir")    break ;;
        *) echo "Opción inválida" ;;
    esac
done
```

---

## 19. ASSERT Y DEBUG

```bash
# Debug
bash -x script.sh            # Ejecutar con traza
set -x                        # Activar debug en línea
set +x                        # Desactivar debug

# Verbose
set -v                        # Muestra líneas antes de ejecutar

# Assert personalizado
assert() {
    if ! "$@"; then
        echo "ASSERT FALLÓ: $*" >&2
        exit 1
    fi
}
assert [[ -f "$archivo" ]]
```

---

## 20. TRUCOS ÚTILES

```bash
# Ejecutar solo si comando anterior tuvo éxito
make && make install

# Ejecutar solo si comando anterior falló
make || echo "Error al compilar"

# Encadenar comandos
comando1 && comando2 || echo "Algo falló"

# Background
comando &           # Ejecutar en background
wait $PID           # Esperar a que termine

# Comprobar existencia de comando
command -v git >/dev/null 2>&1 || { echo "git no instalado"; }

# Tiempo de ejecución
time comando

# PID del script y PPID
echo "PID: $$, PPID: $PPID"
```

---

## 21. ONE-LINERS FRECUENTES

```bash
# Renombrar .txt a .bak
for f in *.txt; do mv "$f" "${f%.txt}.bak"; done

# Eliminar archivos vacíos
find . -type f -empty -delete

# Monitorear log en tiempo real
tail -f /var/log/syslog

# Buscar archivos grandes
find / -type f -size +100M -exec ls -lh {} \; | sort -k5 -rh

# Contar archivos por tipo
find . -type f | sed 's/.*\.//' | sort | uniq -c | sort -rn

# Mostrar puertos abiertos
ss -tlnp
# o
netstat -tlnp

# Matar proceso por nombre
pkill -f "nombre_proceso"
killall nombre_proceso

# IP pública
curl -s ifconfig.me
# o
curl -s icanhazip.com

# Extraer archivos
tar xzf archivo.tar.gz
tar xjf archivo.tar.bz2
unzip archivo.zip

# Backups rápidos
cp archivo{,.bak}                     # archivo → archivo.bak
cp -r directorio{,_$(date +%F)}      # backup con fecha

# Sumar columna de números
awk '{sum += $1} END {print sum}' numeros.txt

# Reemplazar string en múltiples archivos
sed -i 's/viejo/nuevo/g' archivo.txt
sed -i 's/viejo/nuevo/g' *.txt

# Ordenar por tamaño de archivo
du -sh * | sort -rh

# Terminal multicine (tmux)
tmux new -s sesion      # Crear sesión
tmux ls                 # Listar sesiones
tmux attach -t sesion   # Adjuntar sesión
# Ctrl+b c → nueva ventana
# Ctrl+b n/p → siguiente/anterior
# Ctrl+b % → división vertical
# Ctrl+b " → división horizontal
```

---

## 22. EXPRESIONES REGULARES (con [[ ]])

```bash
# Coincidencia regex (Bash 3+)
texto="hola123"
if [[ "$texto" =~ ^hola[0-9]+$ ]]; then
    echo "Coincide"
fi

# Capturar grupos (BASH_REMATCH)
if [[ "$texto" =~ ^([a-z]+)([0-9]+)$ ]]; then
    echo "${BASH_REMATCH[1]}"   # hola
    echo "${BASH_REMATCH[2]}"   # 123
fi
```

---

## 23. SED — REFERENCIA RÁPIDA

```bash
sed -n '10p' archivo           # Imprimir línea 10
sed -n '5,10p' archivo         # Imprimir líneas 5-10
sed -n '/error/p' archivo      # Imprimir líneas con "error"
sed 's/viejo/nuevo/'           # Reemplazar primera ocurrencia por línea
sed 's/viejo/nuevo/g'          # Reemplazar todas
sed 's/viejo/nuevo/2'          # Reemplazar segunda ocurrencia
sed '/patron/d'                # Eliminar líneas con "patron"
sed 's/^  *//'                 # Eliminar espacios al inicio
sed 's/  *$//'                 # Eliminar espacios al final
sed '/^$/d'                    # Eliminar líneas vacías
sed -i 's/foo/bar/g' archivo  # Editar in-place
```

---

## 24. AWK — REFERENCIA RÁPIDA

```bash
awk '{print $1}' archivo           # Imprimir primera columna
awk '{print $NF}' archivo          # Imprimir última columna
awk 'NR==3' archivo                # Imprimir línea 3
awk '/error/' archivo              # Imprimir líneas con "error"
awk '{sum += $1} END {print sum}'  # Sumar columna
awk 'NR>1 {print $2,$1}' datos     # Saltar cabecera, invertir columnas
awk -F: '{print $1}' /etc/passwd   # Separador personalizado (:)
awk '$3 > 50' archivo              # Filtrar por valor en columna 3

# Formatear
awk '{printf "%-20s %5d\n", $1, $2}'
```

---

## 25. COMPROBACIONES RÁPIDAS

```bash
# ¿Soy root?
[[ $EUID -eq 0 ]] || { echo "No eres root"; exit 1; }

# ¿Comando existe?
command -v git >/dev/null 2>&1 || { echo "Instala git"; exit 1; }

# ¿Variable definida?
: "${VAR:?Variable VAR no definida}"

# ¿Archivo existe?
[[ -f "$archivo" ]] || { echo "Archivo no encontrado"; exit 1; }

# ¿Directorio existe?
[[ -d "$dir" ]] || mkdir -p "$dir"

# ¿Número?
[[ $var =~ ^[0-9]+$ ]] || { echo "No es un número"; exit 1; }

# ¿Estoy en un directorio específico?
[[ $(basename "$PWD") == "proyecto" ]] || { echo "No estás en proyecto"; }
```

---

## 26. MANEJO DE ERRORES — PATRÓN ROBUSTO

```bash
#!/bin/bash
set -euo pipefail

ERRORS=0
error_handler() {
    local line=$1
    local cmd=$2
    echo "Error en línea $line: $cmd"
    ((ERRORS++))
}

trap 'error_handler $LINENO "$BASH_COMMAND"' ERR

cleanup() {
    echo "Limpiando..."
}
trap cleanup EXIT

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a script.log
}
```

---

## 27. COCHINILLAS (TIPs RÁPIDOS)

```bash
!!              # Repetir último comando
!$              # Último argumento del comando anterior
!^              # Primer argumento del comando anterior
!*              # Todos los argumentos del comando anterior
!ls             # Repetir último comando que empiece por "ls"
!?archivo?      # Repetir último comando que contenga "archivo"
^foo^bar        # Repetir último comando reemplazando foo por bar
```

---

> **Creado por:** Diego J. Gonzalez.
> 
