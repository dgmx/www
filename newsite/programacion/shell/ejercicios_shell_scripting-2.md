# Shell Scripting - Parte 2 (Casos Prácticos)

## Nivel Básico

### 1. Contar líneas de un log
**Ejercicio:** Cuenta cuántas líneas tiene un archivo log.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
wc -l archivo.log
```
:::

---

### 2. Buscar errores en logs
**Ejercicio:** Muestra las líneas que contienen "ERROR".

::: details  Mostrar solución {close}
```bash
#!/bin/bash
grep "ERROR" archivo.log
```
:::

---

### 3. Copia de seguridad simple
**Ejercicio:** Copia un archivo a una carpeta backup.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
cp archivo.txt backup/
```
:::

---

## Nivel Intermedio

### 4. Backup con fecha
**Ejercicio:** Guarda una copia con fecha.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
fecha=$(date +%Y-%m-%d)
cp archivo.txt backup/archivo_$fecha.txt
```
:::

---

### 5. Monitor de uso de disco
**Ejercicio:** Muestra el uso del disco.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
df -h
```
:::

---

### 6. Automatizar limpieza de logs
**Ejercicio:** Borra logs mayores a 7 días.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
find /ruta/logs -name "*.log" -mtime +7 -delete
```
:::

---

## Nivel Práctico Profesional

### 7. Script de backup completo
**Ejercicio:** Comprime un directorio como backup.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
tar -czf backup.tar.gz /ruta/directorio
```
:::

---

### 8. Monitor de procesos
**Ejercicio:** Verifica si un proceso está activo.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
if pgrep nginx > /dev/null
then
  echo "Nginx activo"
else
  echo "Nginx no está corriendo"
fi
```
:::

---

### 9. Alerta por uso de CPU
**Ejercicio:** Muestra alerta si CPU > 80%.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
uso=$(top -bn1 | grep "Cpu" | awk '{print $2}' | cut -d. -f1)

if [ $uso -gt 80 ]; then
  echo "Alerta: CPU alta"
fi
```
:::

---

### 10. Pipeline de logs
**Ejercicio:** Filtra errores y cuenta ocurrencias.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
grep "ERROR" archivo.log | wc -l
```
:::
