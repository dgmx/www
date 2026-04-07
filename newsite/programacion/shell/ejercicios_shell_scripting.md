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
**Ejercicio:** Imprime del 1 al 10.

::: details  Mostrar solución {close}
```bash
#!/bin/bash
for i in {1..10}; do
  echo $i
done
```
:::

---

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
