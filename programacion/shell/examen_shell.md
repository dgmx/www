# Ejercicios de Shell Scripting para ASIR

## Nivel Básico

### Ejercicio 1: Hola Mundo
Crea un script que muestre "Hola, [nombre]" donde el nombre se pase como argumento.

```bash
#!/bin/bash
echo "Hola, $1"
```

**Uso:** `./hola.sh Juan`

---

### Ejercicio 2: Calculadora Básica
Script que reciba dos números y una operación (+, -, *, /) y muestre el resultado.

```bash
#!/bin/bash

if [ $# -ne 3 ]; then
    echo "Uso: $0 <num1> <operador> <num2>"
    exit 1
fi

case $2 in
    +) resultado=$(($1 + $3)) ;;
    -) resultado=$(($1 - $3)) ;;
    *) resultado=$(($1 * $3)) ;;
    /) resultado=$(echo "scale=2; $1 / $3" | bc) ;;
    *) echo "Operador no válido"; exit 1 ;;
esac

echo "Resultado: $resultado"
```

---

### Ejercicio 3: Información del Sistema
Muestra información básica del sistema (hostname, usuario, fecha, uptime).

```bash
#!/bin/bash

echo "=== Información del Sistema ==="
echo "Hostname: $(hostname)"
echo "Usuario: $(whoami)"
echo "Fecha: $(date)"
echo "Uptime: $(uptime)"
```

---

## Nivel Intermedio

### Ejercicio 4: Backup de Directorio
Crea un script que haga backup de un directorio comprimiéndolo con tar.

```bash
#!/bin/bash

DIRECTORIO=$1
FECHA=$(date +%Y%m%d_%H%M%S)

if [ -z "$DIRECTORIO" ]; then
    echo "Uso: $0 <directorio>"
    exit 1
fi

if [ ! -d "$DIRECTORIO" ]; then
    echo "Error: El directorio no existe"
    exit 1
fi

NOMBRE_BACKUP="backup_$(basename $DIRECTORIO)_$FECHA.tar.gz"

tar -czf "$NOMBRE_BACKUP" "$DIRECTORIO"

if [ $? -eq 0 ]; then
    echo "Backup creado: $NOMBRE_BACKUP"
else
    echo "Error al crear el backup"
    exit 1
fi
```

---

### Ejercicio 5: Monitor de Espacio en Disco
Script que alerte si el uso del disco supera un umbral (ej: 80%).

```bash
#!/bin/bash

UMBRAL=80

echo "=== Uso de Disco ==="

df -h | grep '^/dev' | while read linea; do
    uso=$(echo "$linea" | awk '{print $5}' | tr -d '%')
    particion=$(echo "$linea" | awk '{print $1}')
    
    if [ $uso -ge $UMBRAL ]; then
        echo "ALERTA: $particion al ${uso}%"
    else
        echo "OK: $particion al ${uso}%"
    fi
done
```

---

### Ejercicio 6: Gestor de Usuarios
Script para crear usuarios en lote desde un archivo de texto.

```bash
#!/bin/bash

ARCHIVO=$1

if [ -z "$ARCHIVO" ]; then
    echo "Uso: $0 <archivo_usuarios.txt>"
    exit 1
fi

if [ ! -f "$ARCHIVO" ]; then
    echo "Error: El archivo no existe"
    exit 1
fi

while read usuario; do
    if ! id "$usuario" &>/dev/null; then
        sudo useradd -m "$usuario"
        echo "Usuario $usuario creado"
    else
        echo "Usuario $usuario ya existe"
    fi
done < "$ARCHIVO"
```

**archivo_usuarios.txt:**
```
alumno1
alumno2
alumno3
```

---

### Ejercicio 7: Log Rotator
Script que rote logs cuando superen un tamaño máximo.

```bash
#!/bin/bash

LOG_FILE=$1
MAX_SIZE=10485760  # 10MB en bytes

if [ -z "$LOG_FILE" ]; then
    echo "Uso: $0 <archivo_log>"
    exit 1
fi

if [ -f "$LOG_FILE" ]; then
    SIZE=$(stat -f%z "$LOG_FILE" 2>/dev/null || stat -c%s "$LOG_FILE" 2>/dev/null)
    
    if [ $SIZE -ge $MAX_SIZE ]; then
        FECHA=$(date +%Y%m%d_%H%M%S)
        mv "$LOG_FILE" "${LOG_FILE}.${FECHA}"
        touch "$LOG_FILE"
        echo "Log rotado: ${LOG_FILE}.${FECHA}"
    fi
fi
```

---

## Nivel Avanzado

### Ejercicio 8: Monitor de Procesos
Script que monitorice procesos y envíe alerta si consumen mucha CPU.

```bash
#!/bin/bash

UMBRAL_CPU=50
EMAIL="admin@example.com"

ps aux --sort=-%cpu | head -11 | tail -10 | while read linea; do
    cpu=$(echo "$linea" | awk '{print $3}' | cut -d. -f1)
    proceso=$(echo "$linea" | awk '{print $11}')
    pid=$(echo "$linea" | awk '{print $2}')
    
    if [ $cpu -ge $UMBRAL_CPU ]; then
        echo "ALERTA: Proceso $proceso (PID: $pid) al ${cpu}% CPU"
        # mail -s "Alerta CPU" $EMAIL <<< "Proceso: $proceso, PID: $pid, CPU: ${cpu}%"
    fi
done
```

---

### Ejercicio 9: Script de Deploy
Automatiza el despliegue de una aplicación web.

```bash
#!/bin/bash

set -e  # Salir en caso de error

APP_DIR="/var/www/miapp"
BACKUP_DIR="/backups"
REPO_URL="https://github.com/usuario/repo.git"

echo "=== Iniciando Deploy ==="

# Crear backup
if [ -d "$APP_DIR" ]; then
    echo "Creando backup..."
    tar -czf "$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).tar.gz" "$APP_DIR"
fi

# Clonar/Actualizar repositorio
if [ -d "$APP_DIR/.git" ]; then
    cd "$APP_DIR"
    git pull origin main
else
    git clone "$REPO_URL" "$APP_DIR"
fi

# Instalar dependencias
cd "$APP_DIR"
npm install --production

# Reiniciar servicio
sudo systemctl restart nginx

echo "=== Deploy Completado ==="
```

---

### Ejercicio 10: Health Check de Servidores
Script que verifique el estado de múltiples servidores.

```bash
#!/bin/bash

SERVIDORES=(
    "192.168.1.10:web01"
    "192.168.1.11:db01"
    "192.168.1.12:app01"
)

PUERTOS=(
    "web01:80,443"
    "db01:3306"
    "app01:8080,8443"
)

echo "=== Health Check $(date) ==="

for servidor in "${SERVIDORES[@]}"; do
    IP=$(echo $servidor | cut -d: -f1)
    NOMBRE=$(echo $servidor | cut -d: -f2)
    
    if ping -c 1 -W 1 $IP &>/dev/null; then
        echo "✓ $NOMBRE ($IP) - ONLINE"
    else
        echo "✗ $NOMBRE ($IP) - OFFLINE"
    fi
done

echo ""
echo "=== Verificación de Puertos ==="

for entrada in "${PUERTOS[@]}"; do
    NOMBRE=$(echo $entrada | cut -d: -f1)
    PUERTOS_LISTA=$(echo $entrada | cut -d: -f2)
    
    for puerto in $(echo $PUERTOS_LISTA | tr ',' ' '); do
        if nc -z 127.0.0.1 $puerto 2>/dev/null; then
            echo "✓ $NOMBRE:$puerto - ABIERTO"
        else
            echo "✗ $NOMBRE:$puerto - CERRADO"
        fi
    done
done
```

---

## Ejercicios Prácticos

### Práctica 1: Script de Inicialización
Crea un script que:
1. Verifique si se ejecuta como root
2. Actualice el sistema
3. Instale paquetes básicos (git, curl, vim)
4. Cree un usuario específico
5. Configure el firewall básico

### Práctica 2: Monitor de Logs
Desarrolla un script que:
1. Monitoree un archivo de log en tiempo real
2. Detecte patrones de error específicos
3. Cuente la frecuencia de errores
4. Envíe notificaciones si supera un threshold
5. Genere un reporte diario

### Práctica 3: Gestor de Servicios
Crea un script que:
1. Liste todos los servicios del sistema
2. Permita iniciar/parar/reiniciar servicios
3. Verifique el estado de servicios críticos
4. Genere alertas si un servicio está caído
5. Guarde un historial de estados

---

## Comandos Útiles para Recordar

```bash
# Variables
$1, $2, $3    # Argumentos posicionales
$#            # Número de argumentos
$@            # Todos los argumentos
$?            # Código de salida del último comando
$$            # PID del script actual

# Estructuras de control
if [ condición ]; then
    # código
elif [ condición ]; then
    # código
else
    # código
fi

for i in {1..10}; do
    echo $i
done

while [ condición ]; do
    # código
done

case $variable in
    valor1) comando ;;
    valor2) comando ;;
    *) comando_por_defecto ;;
esac

# Operadores de comparación numérica
-eq  # igual
-ne  # diferente
-gt  # mayor que
-lt  # menor que
-ge  # mayor o igual
-le  # menor o igual

# Operadores de comparación de strings
=    # igual
!=   # diferente
-z   # string vacío
-n   # string no vacío

# Operadores de archivos
-e   # existe
-f   # es archivo regular
-d   # es directorio
-r   # tiene permiso de lectura
-w   # tiene permiso de escritura
-x   # tiene permiso de ejecución
```

---

## Recursos Adicionales

- [Bash Guide for Beginners](https://tldp.org/LDP/Bash-Beginners-Guide/html/)
- [Advanced Bash-Scripting Guide](https://tldp.org/LDP/abs/html/)
- [ShellCheck](https://www.shellcheck.net/) - Linter para scripts bash
- [Explain Shell](https://explainshell.com/) - Explicación de comandos
