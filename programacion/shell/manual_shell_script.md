# Programación en Shell Script para Linux

> **Asignatura:** Administración de Sistemas Operativos  
> **Ciclo:** Grado Superior — Administración de Sistemas Informáticos en Red (ASIR)  
> **Nivel:** Formación Profesional  
> **Autor:** Departamento de Informática  



## 1. Introducción al Shell de Linux

### ¿Qué es el Shell?

El **shell** es un intérprete de comandos que actúa como intermediario entre el usuario y el núcleo (kernel) del sistema operativo. Permite ejecutar programas, gestionar ficheros y automatizar tareas mediante scripts.

### Tipos de Shell más comunes

| Shell | Ejecutable | Descripción |
|-------|-----------|-------------|
| Bash | `/bin/bash` | Bourne Again SHell. El más usado en Linux. |
| sh | `/bin/sh` | Bourne Shell original. Muy portable. |
| zsh | `/bin/zsh` | Z Shell. Potente y personalizable. |
| ksh | `/bin/ksh` | Korn Shell. Muy usado en entornos Unix. |
| fish | `/usr/bin/fish` | Friendly Interactive SHell. Moderno. |

### Ver el shell actual

```bash
echo $SHELL
echo $0
cat /etc/shells   # Lista todos los shells instalados
```

### El shebang (`#!`)

La primera línea de cualquier script indica al sistema qué intérprete debe usarse para ejecutarlo:

```bash
#!/bin/bash
```

Esta línea se llama **shebang** (o hashbang). Es obligatoria en scripts que se vayan a ejecutar directamente.

### Dar permisos de ejecución a un script

```bash
chmod +x mi_script.sh
chmod 755 mi_script.sh    # rwxr-xr-x
./mi_script.sh            # Ejecutar
```

### Ejecutar sin permisos de ejecución

```bash
bash mi_script.sh
sh mi_script.sh
source mi_script.sh       # Ejecutar en el shell actual (afecta variables del entorno)
. mi_script.sh            # Equivalente a source
```

---

## 2. Primeros pasos: Hola Mundo

### Ejemplo 1 — Script básico

```bash
#!/bin/bash
# Primer script en Bash
# Autor: Alumno ASIR
# Fecha: 2024

echo "Hola, Mundo!"
echo "Bienvenido al módulo de Administración de Sistemas Operativos"
```

**Guardar como:** `hola_mundo.sh`

```bash
chmod +x hola_mundo.sh
./hola_mundo.sh
```

**Salida:**
```
Hola, Mundo!
Bienvenido al módulo de Administración de Sistemas Operativos
```

### Ejemplo 2 — Opciones de `echo`

```bash
#!/bin/bash

echo "Texto normal"
echo -n "Este texto no añade salto de línea al final"
echo ""
echo -e "Texto con\tTabulación"
echo -e "Línea 1\nLínea 2\nLínea 3"
echo -e "\033[1;32mTexto en Verde y Negrita\033[0m"
echo -e "\033[1;31mTexto en Rojo\033[0m"
echo -e "\033[1;34mTexto en Azul\033[0m"
```

### Ejemplo 3 — Comentarios

```bash
#!/bin/bash

# Esto es un comentario de una línea

# Los comentarios son ignorados por el intérprete
# Se usan para documentar el código

echo "Los comentarios no se muestran en pantalla"

# También se pueden hacer comentarios al final de una línea de código
echo "Hola"  # Este comentario va al final de la línea
```

---

## 3. Variables

### Declaración y uso de variables

En Bash, las variables se declaran sin tipo. No se usan espacios alrededor del `=`.

```bash
#!/bin/bash

# Declaración de variables
nombre="Carlos"
edad=22
pi=3.14159
es_admin=true

# Uso de variables (con $)
echo "Nombre: $nombre"
echo "Edad: $edad años"
echo "Número PI: $pi"
echo "Es administrador: $es_admin"

# Forma alternativa con llaves (recomendada para evitar ambigüedades)
echo "Bienvenido, ${nombre}!"
echo "El alumno ${nombre} tiene ${edad} años"
```

### Variables de entorno

```bash
#!/bin/bash

echo "Usuario actual: $USER"
echo "Directorio home: $HOME"
echo "Directorio actual: $PWD"
echo "Directorio anterior: $OLDPWD"
echo "Shell en uso: $SHELL"
echo "Hostname: $HOSTNAME"
echo "PATH: $PATH"
echo "PID del script: $$"
echo "PID del proceso padre: $PPID"
```

### Variables especiales de scripts

```bash
#!/bin/bash
# Ejecutar como: ./variables_especiales.sh arg1 arg2 arg3

echo "Nombre del script: $0"
echo "Primer argumento: $1"
echo "Segundo argumento: $2"
echo "Tercer argumento: $3"
echo "Número de argumentos: $#"
echo "Todos los argumentos (como una cadena): $*"
echo "Todos los argumentos (como lista): $@"
echo "Código de retorno del último comando: $?"
```

**Ejemplo de ejecución:**
```bash
./variables_especiales.sh servidor1 192.168.1.10 admin
```

### Ejemplo 4 — Variable de solo lectura y eliminación

```bash
#!/bin/bash

# Variable de solo lectura
readonly VERSION="1.0.0"
echo "Versión del script: $VERSION"

# Intentar modificarla genera error
# VERSION="2.0.0"  # ERROR: readonly variable

# Eliminar una variable
mi_variable="temporal"
echo "Variable: $mi_variable"
unset mi_variable
echo "Después de unset: ${mi_variable:-vacía}"
```

### Ejemplo 5 — Sustitución de comandos

```bash
#!/bin/bash

# Guardar la salida de un comando en una variable
fecha_actual=$(date +%Y-%m-%d)
hora_actual=$(date +%H:%M:%S)
usuario=$(whoami)
num_procesos=$(ps aux | wc -l)
espacio_libre=$(df -h / | awk 'NR==2{print $4}')

echo "Fecha: $fecha_actual"
echo "Hora: $hora_actual"
echo "Usuario: $usuario"
echo "Procesos en ejecución: $num_procesos"
echo "Espacio libre en /: $espacio_libre"

# Forma antigua (menos recomendada pero válida)
kernel=`uname -r`
echo "Kernel: $kernel"
```

### Ejemplo 6 — Aritmética

```bash
#!/bin/bash

a=10
b=3

# Con $(( ))
suma=$((a + b))
resta=$((a - b))
mult=$((a * b))
div=$((a / b))        # División entera
mod=$((a % b))        # Módulo (resto)
potencia=$((a ** b))  # Potencia

echo "a=$a, b=$b"
echo "Suma: $suma"
echo "Resta: $resta"
echo "Multiplicación: $mult"
echo "División entera: $div"
echo "Módulo: $mod"
echo "Potencia: $potencia"

# Incremento y decremento
contador=5
((contador++))
echo "Después de ++: $contador"
((contador--))
echo "Después de --: $contador"
((contador += 10))
echo "Después de += 10: $contador"

# Con 'let'
let resultado=a*b+2
echo "Resultado con let: $resultado"

# Para decimales: usar bc
resultado_decimal=$(echo "scale=4; $a / $b" | bc)
echo "División decimal: $resultado_decimal"
```

---

## 4. Entrada y Salida de Datos

### El comando `read`

```bash
#!/bin/bash

# Lectura básica
echo "¿Cuál es tu nombre?"
read nombre
echo "Hola, $nombre!"

# Lectura con prompt (-p)
read -p "Introduce tu edad: " edad
echo "Tienes $edad años"

# Lectura silenciosa para contraseñas (-s)
read -s -p "Introduce tu contraseña: " password
echo ""  # Salto de línea tras password
echo "Contraseña introducida (longitud: ${#password} caracteres)"

# Lectura con tiempo límite (-t)
read -t 5 -p "Tienes 5 segundos para responder: " respuesta
if [ $? -eq 0 ]; then
    echo "Respondiste: $respuesta"
else
    echo ""
    echo "Tiempo agotado!"
fi

# Lectura de múltiples variables
read -p "Introduce nombre y apellido: " nombre apellido
echo "Nombre: $nombre"
echo "Apellido: $apellido"
```

### Ejemplo 7 — Menú interactivo

```bash
#!/bin/bash

echo "=============================="
echo "  MENÚ DEL SISTEMA"
echo "=============================="
echo "1. Ver fecha y hora"
echo "2. Ver usuario actual"
echo "3. Ver espacio en disco"
echo "4. Ver memoria RAM"
echo "5. Salir"
echo "=============================="
read -p "Selecciona una opción [1-5]: " opcion

case $opcion in
    1) echo "Fecha y hora: $(date)" ;;
    2) echo "Usuario: $(whoami)" ;;
    3) df -h ;;
    4) free -h ;;
    5) echo "Saliendo..."; exit 0 ;;
    *) echo "Opción no válida" ;;
esac
```

### Formato de salida con `printf`

```bash
#!/bin/bash

# printf es más potente que echo para formatear
printf "Nombre: %s\n" "Juan García"
printf "Edad: %d años\n" 25
printf "Nota: %.2f\n" 8.5678
printf "%-20s %5d %8.2f\n" "Servidor01" 95 99.87
printf "%-20s %5d %8.2f\n" "Servidor02" 102 98.12
printf "%-20s %5d %8.2f\n" "Servidor03" 87 100.00

# Tabla formateada
printf "\n%-15s %-15s %-10s\n" "HOSTNAME" "IP" "ESTADO"
printf "%-15s %-15s %-10s\n" "---------------" "---------------" "----------"
printf "%-15s %-15s %-10s\n" "web01" "192.168.1.10" "Activo"
printf "%-15s %-15s %-10s\n" "db01" "192.168.1.20" "Activo"
printf "%-15s %-15s %-10s\n" "backup01" "192.168.1.30" "Inactivo"
```

---

## 5. Operadores

### Operadores de comparación numérica

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| `-eq` | Igual a | `[ $a -eq $b ]` |
| `-ne` | Distinto de | `[ $a -ne $b ]` |
| `-gt` | Mayor que | `[ $a -gt $b ]` |
| `-lt` | Menor que | `[ $a -lt $b ]` |
| `-ge` | Mayor o igual | `[ $a -ge $b ]` |
| `-le` | Menor o igual | `[ $a -le $b ]` |

### Operadores de comparación de cadenas

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| `=` o `==` | Igual | `[ "$a" = "$b" ]` |
| `!=` | Distinto | `[ "$a" != "$b" ]` |
| `<` | Menor (orden alfabético) | `[[ "$a" < "$b" ]]` |
| `>` | Mayor (orden alfabético) | `[[ "$a" > "$b" ]]` |
| `-z` | Cadena vacía | `[ -z "$a" ]` |
| `-n` | Cadena no vacía | `[ -n "$a" ]` |

### Operadores de ficheros

| Operador | Significado |
|----------|-------------|
| `-e fichero` | El fichero existe |
| `-f fichero` | Es un fichero regular |
| `-d directorio` | Es un directorio |
| `-r fichero` | Tiene permiso de lectura |
| `-w fichero` | Tiene permiso de escritura |
| `-x fichero` | Tiene permiso de ejecución |
| `-s fichero` | El fichero no está vacío |
| `-L fichero` | Es un enlace simbólico |
| `f1 -nt f2` | f1 es más reciente que f2 |
| `f1 -ot f2` | f1 es más antiguo que f2 |

### Operadores lógicos

| Operador | Significado | Con `[ ]` | Con `[[ ]]` |
|----------|-------------|-----------|-------------|
| AND | Y lógico | `-a` | `&&` |
| OR | O lógico | `-o` | `\|\|` |
| NOT | Negación | `!` | `!` |

```bash
#!/bin/bash

a=10
b=20
fichero="/etc/passwd"

# Numéricos
[ $a -eq 10 ] && echo "a es igual a 10"
[ $a -lt $b ] && echo "a es menor que b"
[ $a -ne $b ] && echo "a es distinto de b"

# Cadenas
nombre="admin"
[ "$nombre" = "admin" ] && echo "Es administrador"
[ -z "" ] && echo "La cadena está vacía"
[ -n "$nombre" ] && echo "La cadena no está vacía"

# Ficheros
[ -e "$fichero" ] && echo "$fichero existe"
[ -f "$fichero" ] && echo "$fichero es un fichero regular"
[ -r "$fichero" ] && echo "$fichero tiene permiso de lectura"

# Lógicos combinados
edad=18
pais="España"
[[ $edad -ge 18 && "$pais" = "España" ]] && echo "Puede votar en España"
```

---

## 6. Estructuras Condicionales

### `if / elif / else`

```bash
#!/bin/bash

# Estructura básica if-else
read -p "Introduce un número: " num

if [ $num -gt 0 ]; then
    echo "El número $num es POSITIVO"
elif [ $num -lt 0 ]; then
    echo "El número $num es NEGATIVO"
else
    echo "El número es CERO"
fi
```

### Ejemplo 8 — Comprobación de usuario root

```bash
#!/bin/bash

# Comprobar si el script se ejecuta como root
if [ "$(id -u)" -ne 0 ]; then
    echo "ERROR: Este script debe ejecutarse como root."
    echo "Usa: sudo $0"
    exit 1
fi

echo "Ejecutando con privilegios de root..."
# Aquí iría el código que requiere root
```

### Ejemplo 9 — Verificar si un servicio está activo

```bash
#!/bin/bash

read -p "Introduce el nombre del servicio: " servicio

if systemctl is-active --quiet "$servicio"; then
    echo "✓ El servicio '$servicio' está ACTIVO"
elif systemctl is-enabled --quiet "$servicio"; then
    echo "⚠ El servicio '$servicio' está habilitado pero INACTIVO"
else
    echo "✗ El servicio '$servicio' está INACTIVO o no existe"
fi
```

### Ejemplo 9b — Verificar si un servicio está activo pasado como argumento. 
```bash
#!/bin/bash

# read -p "Introduce el nombre del servicio: " servicio
if [ $# -eq 1 ]; then

    if systemctl is-active --quiet "$1"; then
        echo "✓ El servicio '$1' está ACTIVO"
    elif systemctl is-enabled --quiet "$1"; then
        echo "⚠ El servicio '$1' está habilitado pero INACTIVO"
    else
        echo "✗ El servicio '$1' está INACTIVO o no existe"
    fi

else 
    echo "El programa $0 requiere de un argumento"
fi
```

### Ejemplo 10 — Validación de fichero de configuración

```bash
#!/bin/bash

CONFIG="/etc/nginx/nginx.conf"

if [ ! -e "$CONFIG" ]; then
    echo "ERROR: El fichero $CONFIG no existe"
    exit 1
elif [ ! -f "$CONFIG" ]; then
    echo "ERROR: $CONFIG no es un fichero regular"
    exit 1
elif [ ! -r "$CONFIG" ]; then
    echo "ERROR: Sin permisos de lectura sobre $CONFIG"
    exit 1
else
    echo "Fichero de configuración OK: $CONFIG"
    echo "Tamaño: $(wc -c < "$CONFIG") bytes"
    echo "Líneas: $(wc -l < "$CONFIG")"
fi
```

### `case`

La estructura `case` es más limpia que múltiples `elif` cuando se compara una variable con varios valores fijos.

```bash
#!/bin/bash

read -p "Introduce el día de la semana (lun/mar/mie/jue/vie/sab/dom): " dia

case "$dia" in
    lun | lunes)
        echo "Lunes: inicio de semana laboral"
        ;;
    mar | martes)
        echo "Martes: segundo día laboral"
        ;;
    mie | miercoles | miércoles)
        echo "Miércoles: mitad de semana"
        ;;
    jue | jueves)
        echo "Jueves: casi viernes!"
        ;;
    vie | viernes)
        echo "Viernes: ¡fin de semana laboral!"
        ;;
    sab | sabado | sábado | dom | domingo)
        echo "Fin de semana: ¡a descansar!"
        ;;
    *)
        echo "Día no reconocido: $dia"
        exit 1
        ;;
esac
```

### Ejemplo 11 — Gestor de servicios con `case`

```bash
#!/bin/bash

if [ $# -lt 2 ]; then
    echo "Uso: $0 <servicio> <acción>"
    echo "Acciones: start | stop | restart | status | enable | disable"
    exit 1
fi

SERVICIO="$1"
ACCION="$2"

case "$ACCION" in
    start)
        echo "Iniciando $SERVICIO..."
        systemctl start "$SERVICIO" && echo "OK" || echo "ERROR"
        ;;
    stop)
        echo "Deteniendo $SERVICIO..."
        systemctl stop "$SERVICIO" && echo "OK" || echo "ERROR"
        ;;
    restart)
        echo "Reiniciando $SERVICIO..."
        systemctl restart "$SERVICIO" && echo "OK" || echo "ERROR"
        ;;
    status)
        systemctl status "$SERVICIO"
        ;;
    enable)
        echo "Habilitando $SERVICIO en el arranque..."
        systemctl enable "$SERVICIO" && echo "OK" || echo "ERROR"
        ;;
    disable)
        echo "Deshabilitando $SERVICIO en el arranque..."
        systemctl disable "$SERVICIO" && echo "OK" || echo "ERROR"
        ;;
    *)
        echo "Acción no reconocida: $ACCION"
        exit 1
        ;;
esac
```

---

## 7. Bucles

### Bucle `for`

```bash
#!/bin/bash

# Bucle for básico con lista
echo "=== Lista de frutas ==="
for fruta in manzana pera naranja uva melocotón; do
    echo "  - $fruta"
done

# Bucle for con rango numérico
echo ""
echo "=== Conteo del 1 al 10 ==="
for i in {1..10}; do
    echo -n "$i "
done
echo ""

# Bucle for con paso (incremento)
echo ""
echo "=== Múltiplos de 5 (0 al 50) ==="
for i in {0..50..5}; do
    echo -n "$i "
done
echo ""

# Bucle for estilo C
echo ""
echo "=== Estilo C (0 al 9) ==="
for ((i=0; i<10; i++)); do
    echo -n "$i "
done
echo ""

# Bucle for sobre ficheros
echo ""
echo "=== Ficheros en /etc que empiezan por 'h' ==="
for fichero in /etc/h*; do
    if [ -f "$fichero" ]; then
        echo "  Fichero: $fichero"
    fi
done
```

### Ejemplo 12 — Ping a una lista de hosts

```bash
#!/bin/bash

# Lista de hosts a verificar
HOSTS=("192.168.1.1" "192.168.1.10" "8.8.8.8" "8.8.4.4" "1.1.1.1")

echo "================================================"
printf "%-20s %-10s\n" "HOST" "ESTADO"
echo "================================================"

for host in "${HOSTS[@]}"; do
    if ping -c 1 -W 1 "$host" &>/dev/null; then
        printf "%-20s \033[1;32m%-10s\033[0m\n" "$host" "ACTIVO"
    else
        printf "%-20s \033[1;31m%-10s\033[0m\n" "$host" "CAÍDO"
    fi
done

echo "================================================"
```

### Bucle `while`

```bash
#!/bin/bash

# Contador básico con while
echo "=== Contador while ==="
contador=1
while [ $contador -le 5 ]; do
    echo "Iteración: $contador"
    ((contador++))
done

# Leer fichero línea a línea
echo ""
echo "=== Leyendo /etc/shells ==="
while IFS= read -r linea; do
    echo "Shell disponible: $linea"
done < /etc/shells

# Bucle infinito con break
echo ""
echo "=== Menú con bucle infinito ==="
while true; do
    read -p "Introduce 'salir' para terminar: " input
    if [ "$input" = "salir" ]; then
        echo "Saliendo del bucle..."
        break
    fi
    echo "Escribiste: $input"
done
```

### Ejemplo 13 — Monitor de recursos

```bash
#!/bin/bash

INTERVALO=3
ITERACIONES=5

echo "Monitor de sistema (${ITERACIONES} muestras, cada ${INTERVALO}s)"
echo "============================================================"

i=1
while [ $i -le $ITERACIONES ]; do
    echo ""
    echo "--- Muestra $i / $ITERACIONES --- $(date '+%H:%M:%S') ---"
    
    # CPU
    cpu=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1)
    echo "  CPU en uso: ${cpu}%"
    
    # Memoria
    mem_total=$(free -m | awk 'NR==2{print $2}')
    mem_usada=$(free -m | awk 'NR==2{print $3}')
    mem_pct=$(( mem_usada * 100 / mem_total ))
    echo "  RAM: ${mem_usada}MB / ${mem_total}MB (${mem_pct}%)"
    
    # Disco
    disco=$(df -h / | awk 'NR==2{print $5}')
    echo "  Disco /: $disco usado"
    
    ((i++))
    [ $i -le $ITERACIONES ] && sleep $INTERVALO
done

echo ""
echo "Monitor finalizado."
```

### Bucle `until`

```bash
#!/bin/bash

# until se ejecuta MIENTRAS la condición sea FALSA
# (opuesto a while)

intentos=0
max_intentos=3
password_correcto="admin123"

echo "Sistema de autenticación"
echo "------------------------"

until [ "$password" = "$password_correcto" ]; do
    ((intentos++))
    
    if [ $intentos -gt $max_intentos ]; then
        echo "Demasiados intentos fallidos. Acceso bloqueado."
        exit 1
    fi
    
    read -s -p "Contraseña (intento $intentos/$max_intentos): " password
    echo ""
    
    if [ "$password" != "$password_correcto" ]; then
        echo "Contraseña incorrecta."
    fi
done

echo "Acceso concedido. Bienvenido!"
```

### Comandos de control de bucles

```bash
#!/bin/bash

echo "=== Ejemplo de break y continue ==="

for i in {1..10}; do
    # Saltar números pares (continue)
    if [ $((i % 2)) -eq 0 ]; then
        continue
    fi
    
    # Parar en 9 (break)
    if [ $i -eq 9 ]; then
        echo "Encontrado el 9, saliendo del bucle."
        break
    fi
    
    echo "Número impar: $i"
done
```

---

## 8. Funciones

Las funciones permiten reutilizar código y estructurar los scripts.

### Definición y llamada básica

```bash
#!/bin/bash

# Definición de función
saludar() {
    echo "Hola desde la función saludar()"
}

# Función con parámetros
saludar_usuario() {
    local nombre="$1"    # Variable local
    local apellido="$2"
    echo "Bienvenido, $nombre $apellido"
}

# Función con valor de retorno
suma() {
    local a="$1"
    local b="$2"
    local resultado=$((a + b))
    echo "$resultado"    # Retornar valor con echo
}

# Llamadas a las funciones
saludar
saludar_usuario "Carlos" "García"

resultado=$(suma 15 27)
echo "15 + 27 = $resultado"
```

### Ejemplo 14 — Biblioteca de funciones de utilidad

```bash
#!/bin/bash

# ============================================================
# BIBLIOTECA DE FUNCIONES DE UTILIDAD PARA ADMINISTRACIÓN
# ============================================================

# Colores
ROJO='\033[0;31m'
VERDE='\033[0;32m'
AMARILLO='\033[1;33m'
AZUL='\033[0;34m'
NC='\033[0m'  # Sin color

# Función: Mostrar mensaje de éxito
log_ok() {
    echo -e "${VERDE}[OK]${NC} $1"
}

# Función: Mostrar mensaje de error
log_error() {
    echo -e "${ROJO}[ERROR]${NC} $1" >&2
}

# Función: Mostrar advertencia
log_warn() {
    echo -e "${AMARILLO}[WARN]${NC} $1"
}

# Función: Mostrar información
log_info() {
    echo -e "${AZUL}[INFO]${NC} $1"
}

# Función: Verificar si un paquete está instalado
paquete_instalado() {
    local paquete="$1"
    if dpkg -l "$paquete" &>/dev/null 2>&1 || rpm -q "$paquete" &>/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Función: Crear directorio si no existe
crear_directorio() {
    local dir="$1"
    if [ ! -d "$dir" ]; then
        mkdir -p "$dir" && log_ok "Directorio creado: $dir" || log_error "No se pudo crear: $dir"
    else
        log_warn "El directorio ya existe: $dir"
    fi
}

# Función: Hacer backup de un fichero
backup_fichero() {
    local fichero="$1"
    local backup="${fichero}.bak.$(date +%Y%m%d_%H%M%S)"
    
    if [ ! -f "$fichero" ]; then
        log_error "El fichero no existe: $fichero"
        return 1
    fi
    
    cp "$fichero" "$backup" && log_ok "Backup creado: $backup" || log_error "Error al crear backup"
}

# Función: Verificar conectividad
verificar_conectividad() {
    local host="${1:-8.8.8.8}"
    if ping -c 1 -W 2 "$host" &>/dev/null; then
        log_ok "Conectividad OK ($host)"
        return 0
    else
        log_error "Sin conectividad con $host"
        return 1
    fi
}

# ============================================================
# PROGRAMA PRINCIPAL (uso de las funciones)
# ============================================================

log_info "Iniciando verificaciones del sistema..."
log_ok "Script cargado correctamente"
log_warn "Algunos servicios pueden tardar en responder"

verificar_conectividad "8.8.8.8"
crear_directorio "/tmp/backups_test"

if paquete_instalado "curl"; then
    log_ok "curl está instalado"
else
    log_warn "curl no está instalado"
fi
```

### Ejemplo 15 — Función recursiva (factorial)

```bash
#!/bin/bash

# Función recursiva: factorial
factorial() {
    local n="$1"
    
    if [ $n -le 1 ]; then
        echo 1
    else
        local prev=$(factorial $((n - 1)))
        echo $((n * prev))
    fi
}

# Función recursiva: Fibonacci
fibonacci() {
    local n="$1"
    
    if [ $n -le 0 ]; then
        echo 0
    elif [ $n -eq 1 ]; then
        echo 1
    else
        local a=$(fibonacci $((n - 1)))
        local b=$(fibonacci $((n - 2)))
        echo $((a + b))
    fi
}

echo "=== Factoriales ==="
for i in 0 1 2 3 4 5 6 7 8 9 10; do
    echo "$i! = $(factorial $i)"
done

echo ""
echo "=== Fibonacci (primeros 10 términos) ==="
for i in {0..9}; do
    echo -n "$(fibonacci $i) "
done
echo ""
```

---

## 9. Arrays

### Arrays indexados

```bash
#!/bin/bash

# Declarar e inicializar un array
servidores=("web01" "web02" "db01" "db02" "mail01")

# También se puede declarar vacío y añadir elementos
declare -a configuraciones
configuraciones[0]="nginx"
configuraciones[1]="apache"
configuraciones[2]="mysql"

# Acceder a elementos
echo "Primer servidor: ${servidores[0]}"
echo "Tercer servidor: ${servidores[2]}"
echo "Último servidor: ${servidores[-1]}"

# Todos los elementos
echo "Todos: ${servidores[@]}"
echo "Todos: ${servidores[*]}"

# Número de elementos
echo "Total de servidores: ${#servidores[@]}"

# Longitud de un elemento
echo "Longitud de 'web01': ${#servidores[0]}"

# Índices del array
echo "Índices: ${!servidores[@]}"

# Recorrer el array
echo ""
echo "=== Lista de servidores ==="
for servidor in "${servidores[@]}"; do
    echo "  Servidor: $servidor"
done

# Recorrer con índice
echo ""
echo "=== Lista con índice ==="
for i in "${!servidores[@]}"; do
    echo "  [$i] ${servidores[$i]}"
done

# Añadir elemento
servidores+=("ftp01")
echo ""
echo "Después de añadir: ${servidores[@]}"

# Eliminar elemento
unset servidores[1]
echo "Después de eliminar índice 1: ${servidores[@]}"

# Slicing (subarray)
echo "Servidores del 1 al 3: ${servidores[@]:1:3}"
```

### Arrays asociativos (diccionarios)

```bash
#!/bin/bash

# Declarar array asociativo (requiere bash 4+)
declare -A ips_servidores

ips_servidores["web01"]="192.168.1.10"
ips_servidores["web02"]="192.168.1.11"
ips_servidores["db01"]="192.168.1.20"
ips_servidores["mail01"]="192.168.1.30"

# Acceso
echo "IP de web01: ${ips_servidores[web01]}"

# Todas las claves
echo "Claves: ${!ips_servidores[@]}"

# Todos los valores
echo "Valores: ${ips_servidores[@]}"

# Recorrer
echo ""
echo "=== Tabla de IPs ==="
printf "%-15s %s\n" "HOSTNAME" "IP"
printf "%-15s %s\n" "---------------" "-------------"
for host in "${!ips_servidores[@]}"; do
    printf "%-15s %s\n" "$host" "${ips_servidores[$host]}"
done
```

---

## 10. Manejo de Cadenas de Texto

```bash
#!/bin/bash

cadena="Administración de Sistemas Operativos"

# Longitud
echo "Longitud: ${#cadena}"

# Mayúsculas y minúsculas
echo "Mayúsculas: ${cadena^^}"
echo "Minúsculas: ${cadena,,}"
echo "Primera letra mayúscula: ${cadena^}"

# Subcadenas
echo "Desde pos 0, 14 chars: ${cadena:0:14}"
echo "Desde pos 19: ${cadena:19}"
echo "Últimos 10 chars: ${cadena: -10}"

# Reemplazar
echo "Reemplazar primera 'a' por 'A': ${cadena/a/A}"
echo "Reemplazar todas las 'a' por 'A': ${cadena//a/A}"

# Eliminar patrón
fichero="informe_2024_final.txt"
echo "Sin extensión: ${fichero%.txt}"
echo "Sin prefijo: ${fichero#informe_}"
echo "Sin todo hasta el último _: ${fichero##*_}"

# Comprobar si contiene subcadena
if [[ "$cadena" == *"Sistemas"* ]]; then
    echo "La cadena contiene 'Sistemas'"
fi

# Dividir cadena por delimitador
IFS=',' read -ra partes <<< "web01,192.168.1.10,activo"
echo "Host: ${partes[0]}, IP: ${partes[1]}, Estado: ${partes[2]}"

# Valores por defecto
nombre=""
echo "Nombre o 'Desconocido': ${nombre:-Desconocido}"
echo "Nombre o asigna 'root': ${nombre:=root}"
echo "Ahora nombre es: $nombre"
```

---

## 11. Manejo de Ficheros y Directorios

### Ejemplo 16 — Gestor de ficheros

```bash
#!/bin/bash

# ============================================================
# SCRIPT DE GESTIÓN DE FICHEROS Y DIRECTORIOS
# ============================================================

BASE_DIR="/tmp/demo_asir"

echo "=== CREACIÓN DE ESTRUCTURA ==="

# Crear estructura de directorios
mkdir -p "$BASE_DIR"/{logs,backups,configs,scripts}
echo "Estructura creada en $BASE_DIR"

# Crear ficheros de prueba
for i in {1..5}; do
    echo "Contenido del log $i - $(date)" > "$BASE_DIR/logs/log_$i.txt"
done
echo "Creados 5 ficheros de log"

echo ""
echo "=== LISTADO DE FICHEROS ==="
ls -la "$BASE_DIR/logs/"

echo ""
echo "=== BÚSQUEDA DE FICHEROS ==="
# Buscar ficheros .txt
echo "Ficheros .txt en $BASE_DIR:"
find "$BASE_DIR" -name "*.txt" -type f

# Buscar ficheros modificados en los últimos 5 minutos
echo ""
echo "Ficheros modificados recientemente:"
find "$BASE_DIR" -newer "$BASE_DIR" -type f

echo ""
echo "=== OPERACIONES CON FICHEROS ==="

# Copiar ficheros
cp "$BASE_DIR/logs/log_1.txt" "$BASE_DIR/backups/log_1.bak"
echo "Fichero copiado a backups"

# Mover ficheros
mv "$BASE_DIR/logs/log_5.txt" "$BASE_DIR/backups/"
echo "Fichero log_5.txt movido a backups"

# Contar líneas/palabras/caracteres
echo ""
echo "Estadísticas de log_1.txt:"
wc "$BASE_DIR/logs/log_1.txt"

echo ""
echo "=== PERMISOS ==="
chmod 644 "$BASE_DIR/logs/"*.txt
chmod 640 "$BASE_DIR/backups/"*
echo "Permisos establecidos"
ls -la "$BASE_DIR/logs/"

echo ""
echo "=== LIMPIEZA ==="
read -p "¿Eliminar la estructura de demo? [s/N]: " respuesta
if [[ "$respuesta" =~ ^[sS]$ ]]; then
    rm -rf "$BASE_DIR"
    echo "Estructura eliminada"
else
    echo "Estructura conservada en $BASE_DIR"
fi
```

### Ejemplo 17 — Script de backup

```bash
#!/bin/bash

# ============================================================
# SCRIPT DE BACKUP AUTOMÁTICO
# Uso: ./backup.sh <directorio_origen> [directorio_destino]
# ============================================================

# Configuración
ORIGEN="${1:-$HOME}"
DESTINO="${2:-/tmp/backups}"
FECHA=$(date +%Y%m%d_%H%M%S)
NOMBRE_BACKUP="backup_$(basename "$ORIGEN")_${FECHA}.tar.gz"
LOG_FILE="/tmp/backup_${FECHA}.log"

# Función de log
log() {
    local nivel="$1"
    local msg="$2"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] [$nivel] $msg" | tee -a "$LOG_FILE"
}

# Verificaciones previas
log "INFO" "Iniciando backup de: $ORIGEN"

if [ ! -d "$ORIGEN" ]; then
    log "ERROR" "El directorio origen no existe: $ORIGEN"
    exit 1
fi

mkdir -p "$DESTINO" || { log "ERROR" "No se puede crear $DESTINO"; exit 1; }

# Calcular tamaño antes
TAMANIO_ORIGEN=$(du -sh "$ORIGEN" 2>/dev/null | cut -f1)
log "INFO" "Tamaño del origen: $TAMANIO_ORIGEN"

# Crear backup
log "INFO" "Creando backup: $DESTINO/$NOMBRE_BACKUP"
tar -czf "$DESTINO/$NOMBRE_BACKUP" "$ORIGEN" 2>>"$LOG_FILE"

if [ $? -eq 0 ]; then
    TAMANIO_BACKUP=$(du -sh "$DESTINO/$NOMBRE_BACKUP" | cut -f1)
    log "OK" "Backup completado exitosamente"
    log "INFO" "Tamaño del backup: $TAMANIO_BACKUP"
    log "INFO" "Ubicación: $DESTINO/$NOMBRE_BACKUP"
else
    log "ERROR" "El backup falló. Revisa el log: $LOG_FILE"
    exit 1
fi

# Limpiar backups antiguos (más de 7 días)
log "INFO" "Limpiando backups con más de 7 días..."
deleted=$(find "$DESTINO" -name "backup_*.tar.gz" -mtime +7 -delete -print | wc -l)
log "INFO" "Backups eliminados: $deleted"

log "INFO" "Proceso completado. Log: $LOG_FILE"
```

---

## 12. Redirecciones y Tuberías

### Redirecciones

```bash
#!/bin/bash

# Salida estándar (stdout) a fichero
echo "Esto va al fichero" > /tmp/salida.txt
echo "Esto se añade al fichero" >> /tmp/salida.txt

# Errores (stderr) a fichero
ls /directorio_inexistente 2> /tmp/errores.txt

# Tanto stdout como stderr al mismo fichero
ls /etc/ /directorio_inexistente > /tmp/todo.txt 2>&1
# Forma moderna (bash 4+):
ls /etc/ /directorio_inexistente &> /tmp/todo.txt

# Descartar salida (enviar a /dev/null)
ls /etc/ > /dev/null              # Descartar stdout
ls /directorio_inexistente 2>/dev/null  # Descartar stderr
ls /etc/ /x 2>/dev/null           # Sólo mostrar stdout

# Entrada estándar desde fichero
while read -r linea; do
    echo "Línea: $linea"
done < /etc/shells

# Here-document (bloque de texto como entrada)
cat > /tmp/fichero_demo.txt << EOF
Esto es un here-document.
Permite escribir texto multilínea.
Fecha de creación: $(date)
Usuario: $(whoami)
EOF

cat /tmp/fichero_demo.txt

# Here-string (cadena como entrada)
read nombre <<< "Carlos García"
echo "Nombre leído: $nombre"
```

### Tuberías (pipes)

```bash
#!/bin/bash

echo "=== Ejemplos de tuberías ==="

# Contar ficheros en /etc
echo "Ficheros en /etc:"
ls /etc | wc -l

# Buscar procesos de un usuario
echo ""
echo "Procesos del usuario root:"
ps aux | grep "^root" | head -5

# Los 5 directorios más grandes
echo ""
echo "Los 5 directorios más grandes en /var:"
du -sh /var/* 2>/dev/null | sort -rh | head -5

# Usuarios conectados (únicos)
echo ""
echo "Usuarios conectados:"
who | awk '{print $1}' | sort -u

# Las 10 IPs que más aparecen en auth.log
echo ""
echo "IPs con intentos fallidos (requiere root para /var/log/auth.log):"
# grep "Failed password" /var/log/auth.log | awk '{print $11}' | sort | uniq -c | sort -rn | head -10

# Procesar CSV simple
echo ""
echo "Procesando datos:"
echo -e "carlos,admin,madrid\nana,user,barcelona\nluis,admin,valencia" | \
    awk -F',' '{printf "Usuario: %-10s Rol: %-10s Ciudad: %s\n", $1, $2, $3}'
```

---

## 13. Expresiones Regulares y sed/awk

### `grep` con expresiones regulares

```bash
#!/bin/bash

echo "=== Ejemplos con grep ==="

# Buscar patrón básico
grep "root" /etc/passwd

# Ignorar mayúsculas/minúsculas (-i)
grep -i "bash" /etc/passwd

# Mostrar número de línea (-n)
grep -n "nologin" /etc/passwd | head -5

# Invertir la búsqueda (-v)
grep -v "^#" /etc/hosts | grep -v "^$"

# Contar ocurrencias (-c)
echo "Número de usuarios con bash:"
grep -c "/bash$" /etc/passwd

# Expresiones regulares extendidas (-E)
grep -E "^root|^daemon" /etc/passwd

# Mostrar solo la parte que coincide (-o)
echo ""
echo "IPs en /etc/hosts:"
grep -oE "[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}" /etc/hosts

# Buscar recursivamente (-r)
# grep -r "PermitRootLogin" /etc/ssh/
```

### `sed` — Stream Editor

```bash
#!/bin/bash

echo "=== Ejemplos con sed ==="

# Sustituir texto
echo "Hola Mundo" | sed 's/Mundo/Linux/'

# Sustituir todas las ocurrencias (flag g)
echo "gato perro gato" | sed 's/gato/felino/g'

# Eliminar líneas con un patrón
echo "=== /etc/hosts sin comentarios ==="
sed '/^#/d' /etc/hosts | sed '/^$/d'

# Mostrar solo ciertas líneas
echo ""
echo "Líneas 1-3 de /etc/passwd:"
sed -n '1,3p' /etc/passwd

# Añadir texto antes/después de una línea
echo "linea2" | sed 'i\linea_antes'
echo "linea2" | sed 'a\linea_despues'

# Modificar fichero en sitio (-i)
# CUIDADO: esto modifica el fichero real
# sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config

# Eliminar espacios en blanco al inicio y al final
echo "   texto con espacios   " | sed 's/^[[:space:]]*//;s/[[:space:]]*$//'
```

### `awk` — Procesamiento de texto avanzado

```bash
#!/bin/bash

echo "=== Ejemplos con awk ==="

# Imprimir columnas específicas
echo "Usuarios y shells:"
awk -F':' '{print $1, $7}' /etc/passwd | head -10

# Condición en awk
echo ""
echo "Usuarios con UID >= 1000:"
awk -F':' '$3 >= 1000 {print $1, $3}' /etc/passwd

# Contar con awk
echo ""
echo "Número de usuarios con /bin/bash:"
awk -F':' '$7 == "/bin/bash" {count++} END {print count}' /etc/passwd

# Calcular suma
echo "1 100
2 200
3 150
4 300" | awk '{suma += $2} END {print "Total:", suma, "Media:", suma/NR}'

# Procesar salida de df
echo ""
echo "Particiones con más del 50% de uso:"
df -h | awk 'NR>1 && $5+0 > 50 {print $6, "usa", $5}'

# Informe de /etc/passwd formateado
echo ""
printf "%-20s %-6s %-6s %-30s\n" "USUARIO" "UID" "GID" "HOME"
printf "%-20s %-6s %-6s %-30s\n" "--------------------" "------" "------" "------------------------------"
awk -F':' 'NR<=10 {printf "%-20s %-6s %-6s %-30s\n", $1, $3, $4, $6}' /etc/passwd
```

---

## 14. Procesos y Señales

```bash
#!/bin/bash

# ============================================================
# GESTIÓN DE PROCESOS
# ============================================================

echo "=== Información de procesos ==="

# PID del script actual
echo "PID de este script: $$"
echo "PPID (padre): $PPID"

# Ver procesos
echo ""
echo "Top 5 procesos por uso de CPU:"
ps aux --sort=-%cpu | head -6

echo ""
echo "Top 5 procesos por uso de RAM:"
ps aux --sort=-%mem | head -6

# Ejecutar proceso en segundo plano
sleep 30 &
BGPID=$!
echo ""
echo "Proceso sleep lanzado en background con PID: $BGPID"

# Ver jobs en background
jobs

# Matar proceso
kill $BGPID
echo "Proceso $BGPID terminado"

# Captura de señales (trap)
echo ""
echo "=== Ejemplo de trap ==="

limpiar() {
    echo ""
    echo "Señal recibida. Limpiando y saliendo..."
    rm -f /tmp/script_temp_$$
    exit 0
}

# Capturar CTRL+C (SIGINT) y terminación (SIGTERM)
trap limpiar INT TERM

echo "Script en ejecución (PID: $$). Presiona CTRL+C para salir limpiamente."
echo "Creando fichero temporal: /tmp/script_temp_$$"
touch /tmp/script_temp_$$

# Simulación de trabajo
for i in {1..10}; do
    echo "Trabajando... $i/10"
    sleep 1
done

# Limpiar si termina normalmente
limpiar
```

---

## 15. Scripts de Administración del Sistema

### Ejemplo 18 — Informe del sistema

```bash
#!/bin/bash

# ============================================================
# INFORME COMPLETO DEL SISTEMA
# Genera un informe detallado del sistema Linux
# ============================================================

OUTPUT_FILE="/tmp/informe_sistema_$(date +%Y%m%d_%H%M%S).txt"

# Función de sección
seccion() {
    echo ""
    echo "============================================================"
    echo "  $1"
    echo "============================================================"
}

{
    echo "============================================================"
    echo "  INFORME DEL SISTEMA"
    echo "  Generado: $(date '+%d/%m/%Y %H:%M:%S')"
    echo "  Por: $(whoami)@$(hostname)"
    echo "============================================================"

    seccion "INFORMACIÓN DEL SISTEMA"
    echo "Hostname:      $(hostname -f)"
    echo "Sistema:       $(uname -o)"
    echo "Kernel:        $(uname -r)"
    echo "Arquitectura:  $(uname -m)"
    echo "Distribución:  $(cat /etc/os-release | grep PRETTY_NAME | cut -d'"' -f2)"
    echo "Uptime:        $(uptime -p)"
    echo "Fecha/Hora:    $(date)"

    seccion "RECURSOS DE HARDWARE"
    echo "--- CPU ---"
    echo "Modelo: $(grep 'model name' /proc/cpuinfo | head -1 | cut -d: -f2 | xargs)"
    echo "Núcleos físicos: $(grep 'cpu cores' /proc/cpuinfo | head -1 | awk '{print $4}')"
    echo "Núcleos lógicos: $(nproc)"
    
    echo ""
    echo "--- MEMORIA ---"
    free -h
    
    echo ""
    echo "--- DISCO ---"
    df -hT | grep -v tmpfs

    seccion "RED"
    echo "--- Interfaces de red ---"
    ip -br addr
    echo ""
    echo "--- Tabla de rutas ---"
    ip route
    echo ""
    echo "--- Puertos en escucha ---"
    ss -tlnp 2>/dev/null | head -20

    seccion "USUARIOS"
    echo "--- Usuarios conectados ---"
    who
    echo ""
    echo "--- Últimos 5 accesos ---"
    last -5

    seccion "SERVICIOS SYSTEMD (activos)"
    systemctl list-units --type=service --state=active --no-pager | head -20

    seccion "TOP 10 PROCESOS POR CPU"
    ps aux --sort=-%cpu | head -11

    seccion "TOP 10 PROCESOS POR MEMORIA"
    ps aux --sort=-%mem | head -11

    echo ""
    echo "============================================================"
    echo "  FIN DEL INFORME"
    echo "============================================================"

} | tee "$OUTPUT_FILE"

echo ""
echo "Informe guardado en: $OUTPUT_FILE"
```

### Ejemplo 19 — Gestión de usuarios

```bash
#!/bin/bash

# ============================================================
# SCRIPT DE GESTIÓN DE USUARIOS
# ============================================================

# Verificar privilegios root
[ "$(id -u)" -ne 0 ] && { echo "ERROR: Requiere root"; exit 1; }

# Función: Crear usuario
crear_usuario() {
    local usuario="$1"
    local nombre_completo="$2"
    local grupo="$3"
    local shell="${4:-/bin/bash}"
    
    # Validar que el usuario no existe
    if id "$usuario" &>/dev/null; then
        echo "ERROR: El usuario '$usuario' ya existe"
        return 1
    fi
    
    # Crear usuario
    useradd -m -c "$nombre_completo" -g "$grupo" -s "$shell" "$usuario"
    
    if [ $? -eq 0 ]; then
        echo "Usuario '$usuario' creado correctamente"
        # Forzar cambio de contraseña en el primer acceso
        chage -d 0 "$usuario"
        echo "Se solicitará cambio de contraseña en el primer acceso"
    else
        echo "ERROR al crear el usuario '$usuario'"
        return 1
    fi
}

# Función: Listar usuarios del sistema (UID >= 1000)
listar_usuarios() {
    echo ""
    printf "%-20s %-6s %-20s %-15s\n" "USUARIO" "UID" "NOMBRE" "SHELL"
    printf "%-20s %-6s %-20s %-15s\n" "--------------------" "------" "--------------------" "---------------"
    
    while IFS=: read -r usuario pass uid gid nombre home shell; do
        if [ "$uid" -ge 1000 ] && [ "$uid" -lt 65534 ]; then
            nombre_corto=$(echo "$nombre" | cut -d',' -f1)
            printf "%-20s %-6s %-20s %-15s\n" "$usuario" "$uid" "$nombre_corto" "$shell"
        fi
    done < /etc/passwd
}

# Función: Bloquear usuario
bloquear_usuario() {
    local usuario="$1"
    
    if ! id "$usuario" &>/dev/null; then
        echo "ERROR: El usuario '$usuario' no existe"
        return 1
    fi
    
    passwd -l "$usuario" && echo "Usuario '$usuario' bloqueado" || echo "ERROR al bloquear"
}

# Función: Informe de contraseñas
informe_contrasenas() {
    echo ""
    printf "%-20s %-15s %-15s %-10s\n" "USUARIO" "ÚLTIMO CAMBIO" "EXPIRA" "ESTADO"
    printf "%-20s %-15s %-15s %-10s\n" "--------------------" "---------------" "---------------" "----------"
    
    while IFS=: read -r usuario pass uid gid nombre home shell; do
        if [ "$uid" -ge 1000 ] && [ "$uid" -lt 65534 ]; then
            info=$(chage -l "$usuario" 2>/dev/null)
            ultimo=$(echo "$info" | grep "Last password change" | cut -d: -f2 | xargs)
            expira=$(echo "$info" | grep "Password expires" | cut -d: -f2 | xargs)
            estado=$(passwd -S "$usuario" 2>/dev/null | awk '{print $2}')
            printf "%-20s %-15s %-15s %-10s\n" "$usuario" "$ultimo" "$expira" "$estado"
        fi
    done < /etc/passwd
}

# Menú principal
echo "=============================="
echo "  GESTIÓN DE USUARIOS"
echo "=============================="
echo "1. Listar usuarios"
echo "2. Crear usuario"
echo "3. Bloquear usuario"
echo "4. Informe de contraseñas"
echo "5. Salir"
echo "=============================="
read -p "Opción: " opcion

case "$opcion" in
    1) listar_usuarios ;;
    2)
        read -p "Nombre de usuario: " usr
        read -p "Nombre completo: " nombre
        read -p "Grupo principal: " grp
        crear_usuario "$usr" "$nombre" "$grp"
        ;;
    3)
        read -p "Usuario a bloquear: " usr
        bloquear_usuario "$usr"
        ;;
    4) informe_contrasenas ;;
    5) exit 0 ;;
    *) echo "Opción no válida" ;;
esac
```

### Ejemplo 20 — Script de monitorización con alertas

```bash
#!/bin/bash

# ============================================================
# MONITOR DE SISTEMA CON ALERTAS
# ============================================================

# Umbrales de alerta (en porcentaje)
UMBRAL_CPU=80
UMBRAL_RAM=85
UMBRAL_DISCO=90

# Correo para alertas (configurar)
EMAIL_ALERTAS="admin@empresa.local"

# Fichero de log
LOG="/var/log/monitor_sistema.log"

# Función de log con timestamp
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG"
}

# Función: Verificar CPU
check_cpu() {
    local cpu_uso=$(top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1 | cut -d'.' -f1)
    
    if [ "$cpu_uso" -ge "$UMBRAL_CPU" ]; then
        log "ALERTA: CPU al ${cpu_uso}% (umbral: ${UMBRAL_CPU}%)"
        # mail -s "ALERTA CPU en $(hostname)" "$EMAIL_ALERTAS" <<< "CPU al ${cpu_uso}%"
        return 1
    else
        log "OK: CPU al ${cpu_uso}%"
        return 0
    fi
}

# Función: Verificar RAM
check_ram() {
    local total=$(free | awk 'NR==2{print $2}')
    local usado=$(free | awk 'NR==2{print $3}')
    local pct=$((usado * 100 / total))
    
    if [ "$pct" -ge "$UMBRAL_RAM" ]; then
        log "ALERTA: RAM al ${pct}% (umbral: ${UMBRAL_RAM}%)"
        return 1
    else
        log "OK: RAM al ${pct}%"
        return 0
    fi
}

# Función: Verificar disco
check_disco() {
    local alertas=0
    
    while read -r linea; do
        local uso=$(echo "$linea" | awk '{print $5}' | tr -d '%')
        local particion=$(echo "$linea" | awk '{print $6}')
        
        if [ "$uso" -ge "$UMBRAL_DISCO" ]; then
            log "ALERTA: Disco $particion al ${uso}% (umbral: ${UMBRAL_DISCO}%)"
            ((alertas++))
        else
            log "OK: Disco $particion al ${uso}%"
        fi
    done < <(df -h | grep -vE "^Filesystem|tmpfs|udev")
    
    return $alertas
}

# Función: Verificar servicios críticos
check_servicios() {
    local servicios=("ssh" "cron" "rsyslog")
    local alertas=0
    
    for servicio in "${servicios[@]}"; do
        if systemctl is-active --quiet "$servicio" 2>/dev/null; then
            log "OK: Servicio $servicio activo"
        else
            log "ALERTA: Servicio $servicio INACTIVO"
            ((alertas++))
        fi
    done
    
    return $alertas
}

# === EJECUCIÓN ===
log "--- Iniciando monitorización ---"
check_cpu
check_ram
check_disco
check_servicios
log "--- Monitorización completada ---"
```

---

## 16. Depuración de Scripts

```bash
#!/bin/bash

# ============================================================
# TÉCNICAS DE DEPURACIÓN
# ============================================================

# OPCIÓN 1: Ejecutar con -x (muestra cada comando antes de ejecutarlo)
# bash -x mi_script.sh

# OPCIÓN 2: Activar/desactivar depuración dentro del script
set -x  # Activar modo debug
echo "Este comando se mostrará con su traza"
fecha=$(date)
set +x  # Desactivar modo debug
echo "Esto ya no muestra traza"

# OPCIÓN 3: Modo estricto (recomendado en producción)
set -euo pipefail
# -e: Salir si cualquier comando falla
# -u: Error si se usa variable no definida
# -o pipefail: Error si falla cualquier comando en una tubería

# OPCIÓN 4: Variable DEBUG
DEBUG="${DEBUG:-false}"

debug() {
    if [ "$DEBUG" = "true" ]; then
        echo "[DEBUG] $*" >&2
    fi
}

# Uso: DEBUG=true ./script.sh
debug "Iniciando proceso..."
nombre="test"
debug "Variable nombre = $nombre"

# OPCIÓN 5: Verificar código de retorno
comando_que_puede_fallar() {
    ls /directorio_inexistente
}

if ! comando_que_puede_fallar 2>/dev/null; then
    echo "El comando falló con código: $?"
fi

# OPCIÓN 6: trap para detectar errores y línea donde ocurren
error_handler() {
    echo "ERROR en línea $1: Código de salida $2"
    echo "Script: $0"
}

trap 'error_handler $LINENO $?' ERR
```

### Plantilla base para scripts robustos

```bash
#!/bin/bash
# ==============================================================
# NOMBRE: nombre_script.sh
# DESCRIPCIÓN: Breve descripción del script
# USO: ./nombre_script.sh [opciones] <argumento>
# OPCIONES:
#   -h, --help    Mostrar esta ayuda
#   -v, --verbose Modo detallado
# AUTOR: Tu nombre
# FECHA: $(date +%Y-%m-%d)
# VERSIÓN: 1.0
# ==============================================================

set -euo pipefail

# ---------- CONSTANTES Y CONFIGURACIÓN ----------
readonly SCRIPT_NAME=$(basename "$0")
readonly SCRIPT_DIR=$(cd "$(dirname "$0")" && pwd)
readonly VERSION="1.0"
readonly LOG_FILE="/tmp/${SCRIPT_NAME%.sh}.log"

# ---------- COLORES ----------
readonly ROJO='\033[0;31m'
readonly VERDE='\033[0;32m'
readonly AMARILLO='\033[1;33m'
readonly NC='\033[0m'

# ---------- VARIABLES DE OPCIONES ----------
VERBOSE=false

# ---------- FUNCIONES ----------

uso() {
    cat << EOF
Uso: $SCRIPT_NAME [opciones] <argumento>

Opciones:
  -h, --help     Mostrar esta ayuda
  -v, --verbose  Modo detallado
  --version      Mostrar versión

Ejemplos:
  $SCRIPT_NAME -v servidor01
  $SCRIPT_NAME --help

EOF
    exit 0
}

log_info()  { echo -e "${VERDE}[INFO]${NC}  $*" | tee -a "$LOG_FILE"; }
log_warn()  { echo -e "${AMARILLO}[WARN]${NC}  $*" | tee -a "$LOG_FILE"; }
log_error() { echo -e "${ROJO}[ERROR]${NC} $*" >&2 | tee -a "$LOG_FILE"; }
log_debug() { $VERBOSE && echo "[DEBUG] $*" || true; }

limpiar() {
    log_debug "Ejecutando limpieza..."
    # Añadir aquí limpieza de ficheros temporales, etc.
}

trap limpiar EXIT

# ---------- PARSEO DE ARGUMENTOS ----------
while [[ $# -gt 0 ]]; do
    case "$1" in
        -h|--help)    uso ;;
        -v|--verbose) VERBOSE=true; shift ;;
        --version)    echo "$SCRIPT_NAME v$VERSION"; exit 0 ;;
        -*)           log_error "Opción desconocida: $1"; uso ;;
        *)            ARGUMENTO="$1"; shift ;;
    esac
done

# Verificar argumento obligatorio
if [ -z "${ARGUMENTO:-}" ]; then
    log_error "Falta el argumento requerido"
    uso
fi

# ---------- VERIFICACIONES ----------
[ "$(id -u)" -eq 0 ] || { log_error "Requiere privilegios root"; exit 1; }

# ---------- PROGRAMA PRINCIPAL ----------
log_info "Iniciando $SCRIPT_NAME v$VERSION"
log_debug "Argumento: $ARGUMENTO"
log_debug "Verbose: $VERBOSE"

# === Tu código aquí ===
log_info "Procesando: $ARGUMENTO"

log_info "Proceso completado correctamente"
```

---

## 17. Buenas Prácticas

### Guía de estilo y recomendaciones

```bash
#!/bin/bash

# ============================================================
# BUENAS PRÁCTICAS EN SHELL SCRIPTING
# ============================================================

# 1. SIEMPRE incluir shebang y modo estricto
set -euo pipefail

# 2. Documentar el script al inicio (ya visto en la plantilla)

# 3. Usar variables en MAYÚSCULAS para constantes
readonly MAX_REINTENTOS=3
readonly DIRECTORIO_LOG="/var/log/mi_app"

# 4. Usar minúsculas con guiones bajos para variables locales
nombre_usuario="carlos"
num_intentos=0

# 5. Siempre usar comillas en variables (especialmente con espacios)
fichero_con_espacios="/tmp/mi fichero.txt"
touch "$fichero_con_espacios"       # CORRECTO
# touch $fichero_con_espacios       # INCORRECTO: falla con espacios

# 6. Usar [[ ]] en lugar de [ ] para mayor robustez
nombre=""
[[ -z "$nombre" ]] && echo "Nombre vacío"

# 7. Usar $(comando) en lugar de `comando`
fecha=$(date +%Y-%m-%d)            # CORRECTO
# fecha=`date +%Y-%m-%d`           # FUNCIONA pero menos legible

# 8. Verificar el código de retorno de comandos críticos
if ! cp fichero_origen fichero_destino 2>/dev/null; then
    echo "Error al copiar el fichero"
    exit 1
fi

# 9. Usar funciones para código repetido
mostrar_separador() {
    printf '%0.s-' {1..50}
    echo ""
}

# 10. Manejar señales con trap
trap 'echo "Script interrumpido"; exit 1' INT TERM

# 11. Variables locales en funciones
mi_funcion() {
    local variable_local="solo visible aquí"
    echo "$variable_local"
}

# 12. Validar argumentos de entrada
validar_ip() {
    local ip="$1"
    local regex="^([0-9]{1,3}\.){3}[0-9]{1,3}$"
    if [[ "$ip" =~ $regex ]]; then
        echo "IP válida: $ip"
        return 0
    else
        echo "IP no válida: $ip"
        return 1
    fi
}

validar_ip "192.168.1.10"
validar_ip "999.999.999.999"
validar_ip "no_es_ip"

# 13. Dar nombres descriptivos a las funciones y variables
# MAL: f1() { ... }  /  x=5
# BIEN: verificar_servicio() { ... }  /  num_servicios_activos=5

# 14. Nunca parsear la salida de 'ls' para ficheros
# MAL:
# for f in $(ls /etc/*.conf); do ...

# BIEN:
for f in /etc/*.conf; do
    [ -f "$f" ] && echo "Conf: $f"
done
```

---

## 18. Ejercicios Propuestos

### Ejercicios de nivel básico

**Ejercicio 1.** Crea un script que solicite al usuario su nombre y apellidos, y muestre un saludo personalizado con la fecha y hora actual.

**Ejercicio 2.** Crea un script que reciba dos números como argumentos y muestre el resultado de las cuatro operaciones básicas (suma, resta, multiplicación y división).

**Ejercicio 3.** Escribe un script que muestre todos los números del 1 al 100 que sean divisibles por 3 y por 5 simultáneamente.

**Ejercicio 4.** Crea un script que lea una lista de nombres desde un fichero (uno por línea) y los muestre ordenados alfabéticamente.

---

### Ejercicios de nivel intermedio

**Ejercicio 5.** Desarrolla un script que compruebe si una dirección IP introducida por el usuario tiene formato válido (IPv4). El script debe aceptar la IP como argumento o pedirla de forma interactiva.

**Ejercicio 6.** Crea un script que analice el fichero `/etc/passwd` y genere un informe indicando:
- Número total de usuarios
- Número de usuarios con acceso a shell
- Número de usuarios de sistema (UID < 1000)
- Listado de usuarios ordenados por UID

**Ejercicio 7.** Escribe un script que monitorice un directorio y registre en un fichero de log cada vez que se cree, modifique o elimine un fichero dentro de él. El script debe ejecutarse durante un tiempo determinado.

**Ejercicio 8.** Desarrolla un script que realice backups incrementales de un directorio, comprobando qué ficheros han cambiado desde el último backup y copiando solo esos.

---

### Ejercicios de nivel avanzado

**Ejercicio 9.** Crea un script completo de administración de usuarios que permita:
- Crear usuarios con contraseña inicial aleatoria
- Listar usuarios con su información
- Bloquear/desbloquear usuarios
- Establecer fecha de expiración de contraseñas
- Generar informe en CSV

**Ejercicio 10.** Desarrolla un script de monitorización del sistema que:
- Compruebe el estado de una lista de servicios configurable
- Monitorice el uso de CPU, RAM y disco
- Envíe alertas por correo cuando se superen umbrales
- Registre toda la actividad en un fichero de log con rotación
- Pueda ejecutarse como tarea cron

**Ejercicio 11.** Escribe un script que automatice el despliegue de una aplicación web simple:
- Verifique que el sistema cumple los requisitos (paquetes instalados)
- Instale dependencias si faltan
- Configure el servidor web
- Copie los ficheros de la aplicación
- Reinicie los servicios necesarios
- Verifique que todo funciona correctamente

**Ejercicio 12.** Crea un script que analice ficheros de log de Apache/Nginx y genere estadísticas como:
- Las 10 IPs con más peticiones
- Los 10 recursos más solicitados
- Distribución de códigos de respuesta HTTP
- Peticiones por hora del día

---

## Apéndice A — Referencia Rápida de Comandos

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `echo` | Imprimir texto | `echo "Hola"` |
| `read` | Leer entrada | `read -p "Nombre: " n` |
| `printf` | Salida formateada | `printf "%d\n" 42` |
| `cat` | Mostrar fichero | `cat /etc/hosts` |
| `grep` | Buscar patrón | `grep "root" /etc/passwd` |
| `sed` | Editar texto | `sed 's/a/A/g' fichero` |
| `awk` | Procesar columnas | `awk '{print $1}' fichero` |
| `cut` | Extraer columnas | `cut -d: -f1 /etc/passwd` |
| `sort` | Ordenar | `sort -n fichero` |
| `uniq` | Eliminar duplicados | `sort f \| uniq -c` |
| `wc` | Contar | `wc -l fichero` |
| `head` | Primeras líneas | `head -10 fichero` |
| `tail` | Últimas líneas | `tail -f /var/log/syslog` |
| `find` | Buscar ficheros | `find /etc -name "*.conf"` |
| `xargs` | Pasar argumentos | `find . -name "*.log" \| xargs rm` |
| `tee` | Duplicar salida | `ls \| tee listado.txt` |
| `tr` | Traducir caracteres | `echo "abc" \| tr 'a-z' 'A-Z'` |
| `date` | Fecha y hora | `date +%Y-%m-%d` |
| `sleep` | Pausar | `sleep 5` |
| `exit` | Salir del script | `exit 1` |

## Apéndice B — Códigos de Salida Estándar

| Código | Significado |
|--------|-------------|
| `0` | Éxito |
| `1` | Error genérico |
| `2` | Uso incorrecto del comando |
| `126` | Permiso denegado (no ejecutable) |
| `127` | Comando no encontrado |
| `128+n` | Señal `n` recibida (ej: 130 = CTRL+C) |
| `130` | Script interrumpido con CTRL+C |

## Apéndice C — Atajos de Teclado en Bash

| Atajo | Acción |
|-------|--------|
| `CTRL+C` | Interrumpir proceso actual |
| `CTRL+Z` | Suspender proceso (enviar a background) |
| `CTRL+D` | Fin de entrada / Cerrar sesión |
| `CTRL+L` | Limpiar pantalla |
| `CTRL+A` | Ir al inicio de la línea |
| `CTRL+E` | Ir al final de la línea |
| `CTRL+R` | Buscar en el historial |
| `!!` | Repetir último comando |
| `!$` | Último argumento del comando anterior |
| `TAB` | Autocompletar |

---

> **Nota:** Este manual está pensado como referencia práctica. Se recomienda practicar todos los ejemplos en un entorno de laboratorio antes de aplicarlos en sistemas en producción.  
> Para profundizar, consulta: `man bash`, `info bash`, y la documentación oficial en [https://www.gnu.org/software/bash/manual/](https://www.gnu.org/software/bash/manual/)

---
