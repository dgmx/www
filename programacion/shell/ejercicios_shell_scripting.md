# Ejercicios de Shell Scripting (con soluciones)

## 1. Variables (Muy fácil)
**Ejercicio:** Define dos variables (nombre y edad) y muéstralas.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
nombre="Juan"
edad=25
echo "Me llamo $nombre y tengo $edad años"
```
:::

---

## 2. Entrada y Salida (Muy fácil)
**Ejercicio:** Pide el nombre al usuario y salúdalo.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
echo "¿Cómo te llamas?"
read nombre
echo "Hola, $nombre"
```
:::

---

## 3. Operadores (Fácil)
**Ejercicio:** Pide dos números y muestra operaciones básicas.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
read -p "Número 1: " a
read -p "Número 2: " b

echo "Suma: $((a+b))"
echo "Resta: $((a-b))"
echo "Multiplicación: $((a*b))"
echo "División: $((a/b))"
```
:::

---

## 4. Condicionales (Fácil)
**Ejercicio:** Determina si un número es positivo, negativo o cero.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
read -p "Número: " n

if [ $n -gt 0 ]; then
  echo "Positivo"
elif [ $n -lt 0 ]; then
  echo "Negativo"
else
  echo "Cero"
fi
```
:::

---

## 5. Bucles (Fácil)
**Ejercicio 1 :** Imprime del 1 al 10.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
for i in {1..10}; do
  echo $i
done
```
:::

::: details  Mostrar solución Tipo C {close}
```bash
echo -e "\n=== Estilo C (0 al 9) ===\n"
for ((i=0; i<10; i++)); do
    echo -n "$i "
done
```
:::

**Ejercicio 2 :** Imprime múltiplos de 5 entre 0 y 50

::: details  Mostrar solución {close}
```bash
echo "=== Múltiplos de 5 (0 al 50) ==="
for i in {0..50..5}; do
    echo -n "$i "
done
```
:::

**Ejercicio 3 :** Tabla de multiplicar

::: details  Mostrar solución {close}
```bash
#!/usr/bin/bash
echo "* Introduce la tabla de multiplicar: "
read tabla
for i in {1..10}; do
	echo "$tabla x $i = $(( tabla * i ))"
done
```
:::


**Ejercicio 4 :** Buscando ficheros que empiezan por s en home

::: details  Mostrar solución {close}

```bash
#!/bin/bash
echo "=== Ficheros en /etc que empiezan por 'h' ==="
for fichero in ~/s*; do
    if [ -f "$fichero" ]; then
        echo "  Fichero: $fichero"
    fi
done
```
:::


**Ejercicio 5 :** Buscando divisibles de 3 y 5 entre 0 y 100

::: details  Mostrar solución {close}
```bash
#!/bin/bash
for i in {1..100}; do
    if (( i % 3 == 0 && i % 5 == 0 )); then
        echo "$i"
    fi
done

## 6. Funciones (Media)
**Ejercicio:** Función que calcule el cuadrado.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
cuadrado() {
  echo $(($1 * $1))
}

resultado=$(cuadrado 5)
echo "Resultado: $resultado"
```
:::

---

## 7. Arrays (Media)
**Ejercicio:** Recorre un array de nombres.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
nombres=("Ana" "Luis" "Carlos" "Marta" "Sofía")

for nombre in "${nombres[@]}"; do
  echo $nombre
done
```
:::

---

## 8. Cadenas de texto (Media)
**Ejercicio:** Analiza una cadena.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
read -p "Introduce texto: " texto

echo "Longitud: ${#texto}"
echo "Mayúsculas: ${texto^^}"
echo "Minúsculas: ${texto,,}"
```
:::

---

## 9. Ficheros y directorios (Media)
**Ejercicio:** Crear directorio y archivo.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
mkdir mi_directorio
touch mi_directorio/archivo.txt
ls mi_directorio
```
:::

---

## 10. Redirecciones, tuberías y regex (Media-Alta)
**Ejercicio:** Filtrar líneas con números.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
grep '[0-9]' archivo.txt > resultado.txt
echo "Filtrado completado"
```
:::
