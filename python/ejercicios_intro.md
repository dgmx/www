---
title: "Ejercicios resueltos de Python básico"
parent: "Python"
nav_exclude: true
---

## Ejercicios resueltos de Python básico


Tabla de contenidos
-------------------

- [Ejercicios resueltos de Python básico](#ejercicios-resueltos-de-python-básico)
- [Tabla de contenidos](#tabla-de-contenidos)
- [Ejercicio 1: calcular la suma de dos números](#ejercicio-1-calcular-la-suma-de-dos-números)
- [Ejercicio 2: calcular el área de un círculo](#ejercicio-2-calcular-el-área-de-un-círculo)
- [Ejercicio 3: convertir grados Celsius a Fahrenheit](#ejercicio-3-convertir-grados-celsius-a-fahrenheit)
- [Ejercicio 4: calcular el doble y el triple de un número](#ejercicio-4-calcular-el-doble-y-el-triple-de-un-número)
- [Ejercicio 5: calcular la media de tres números](#ejercicio-5-calcular-la-media-de-tres-números)
- [Ejercicio 6: multiplicar dos números](#ejercicio-6-multiplicar-dos-números)
- [Ejercicio 7: concatenar dos cadenas de texto](#ejercicio-7-concatenar-dos-cadenas-de-texto)
- [Ejercicio 10: calcular el perímetro de un rectángulo](#ejercicio-10-calcular-el-perímetro-de-un-rectángulo)

Para que puedas practicar sobre los conceptos de variables, constantes, operadores, expresiones y la entrada/salida de datos usando Python, aquí tienes una batería de ejercicios resueltos con explicaciones detalladas de cada uno.

Ejercicio 1: calcular la suma de dos números
--------------------------------------------

Escribe un programa que pida al usuario dos números y luego muestre la suma de ambos.

Solución
```python
# Solicitar dos números al usuario
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))

# Calcular la suma
suma = numero1 + numero2

# Mostrar el resultado
print(f"La suma de {numero1} y {numero2} es: {suma}")
```
Primero pedimos al usuario que introduzca dos números. Usamos la función `input()` para obtener los valores, y `float()` para convertirlos en números decimales. Luego, sumamos ambos números y mostramos el resultado utilizando una F-string en `print()` para una salida más legible.

Ejercicio 2: calcular el área de un círculo
-------------------------------------------

Escribe un programa que pida al usuario el radio de un círculo y calcule su área.

Solución
```python
# Definir la constante PI
PI = 3.14159

# Solicitar el radio al usuario
radio = float(input("Introduce el radio del círculo: "))

# Calcular el área
area = PI \* (radio \*\* 2)

# Mostrar el resultado
print(f"El área del círculo es: {area}")
```
Definimos la constante `PI` y pedimos el radio del círculo. Usamos la fórmula del área de un círculo πr2 y calculamos el resultado. Luego, lo mostramos con `print()`.

Ejercicio 3: convertir grados Celsius a Fahrenheit
--------------------------------------------------

Escribe un programa que convierta una temperatura introducida en grados Celsius a grados Fahrenheit.

Solución
```python
# Solicitar los grados Celsius al usuario
celsius = float(input("Introduce la temperatura en grados Celsius: "))

# Convertir a Fahrenheit
fahrenheit = (celsius \* 9/5) + 32

# Mostrar el resultado
print(f"{celsius} grados Celsius son {fahrenheit} grados Fahrenheit.")
```
Solicitamos la temperatura en Celsius, luego usamos la fórmula de conversión F=C×9/5+32 para obtener los grados Fahrenheit. El resultado se muestra usando una F-string.

Ejercicio 4: calcular el doble y el triple de un número
-------------------------------------------------------

Escribe un programa que pida un número al usuario y muestre tanto el doble como el triple de ese número.

Solución
```python
# Solicitar un número al usuario
numero = float(input("Introduce un número: "))

# Calcular el doble y el triple
doble = numero \* 2
triple = numero \* 3

# Mostrar los resultados
print(f"El doble de {numero} es: {doble}")
print(f"El triple de {numero} es: {triple}")
```
El programa solicita un número, luego calcula el doble y el triple usando operaciones de multiplicación. Posteriormente, muestra ambos resultados.

Ejercicio 5: calcular la media de tres números
----------------------------------------------

Escribe un programa que pida tres números al usuario y calcule su media.

Solución
```python
# Solicitar tres números al usuario
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))
numero3 = float(input("Introduce el tercer número: "))

# Calcular la media
media = (numero1 + numero2 + numero3) / 3

# Mostrar el resultado
print(f"La media de los tres números es: {media}")
```
Solicitamos tres números, los sumamos y dividimos entre 3 para obtener la media. Luego, mostramos el resultado con `print()`.

Ejercicio 6: multiplicar dos números
------------------------------------

Escribe un programa que pida al usuario dos números y muestre su producto.

Solución
```python
# Solicitar dos números al usuario
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))

# Calcular el producto
producto = numero1 \* numero2

# Mostrar el resultado
print(f"El producto de {numero1} y {numero2} es: {producto}")
```
Solicitamos los dos números, los multiplicamos y mostramos el producto usando la función `print()`.

Ejercicio 7: concatenar dos cadenas de texto
--------------------------------------------

Escribe un programa que pida al usuario dos frases y luego muestre ambas frases concatenadas en una sola línea.

Solución
```python
# Solicitar dos frases al usuario
frase1 = input("Introduce la primera frase: ")
frase2 = input("Introduce la segunda frase: ")

# Concatenar las frases
frases\_concatenadas = frase1 + " " + frase2

# Mostrar el resultado
print(f"Las frases concatenadas son: {frases\_concatenadas}")

El programa solicita dos cadenas de texto al usuario y las une usando el operador de concatenación `+`. Posteriormente, muestra la cadena resultante.

Ejercicio 8: mostrar un número repetido varias veces
----------------------------------------------------

Escribe un programa que pida al usuario un número y luego muestre ese número repetido 5 veces.

Solución

\# Solicitar un número al usuario
numero = input("Introduce un número: ")

# Repetir el número 5 veces
numero\_repetido = numero \* 5

# Mostrar el resultado
print(f"El número repetido 5 veces es: {numero\_repetido}")

Usamos el operador `*` para repetir la cadena que representa el número introducido por el usuario cinco veces. El resultado es una concatenación del número 5 veces seguidas.

Ejercicio 9: calcular el área de un rectángulo
----------------------------------------------

Escribe un programa que calcule el área de un rectángulo a partir de su base y altura proporcionadas por el usuario.

Solución

\# Solicitar base y altura al usuario
base = float(input("Introduce la base del rectángulo: "))
altura = float(input("Introduce la altura del rectángulo: "))

# Calcular el área
area = base \* altura

# Mostrar el resultado
print(f"El área del rectángulo es: {area}")
```
Pedimos al usuario la base y la altura, y usamos la fórmula del área del rectángulo base×altura. Mostramos el resultado con `print()`.

Ejercicio 10: calcular el perímetro de un rectángulo
----------------------------------------------------

Escribe un programa que pida al usuario la base y la altura de un rectángulo y luego calcule su perímetro.

Solución
```python
# Solicitar base y altura al usuario
base = float(input("Introduce la base del rectángulo: "))
altura = float(input("Introduce la altura del rectángulo: "))

# Calcular el perímetro
perimetro = 2 \* (base + altura)

# Mostrar el resultado
print(f"El perímetro del rectángulo es: {perimetro}")
```
El programa solicita la base y la altura del rectángulo, luego calcula el perímetro usando la fórmula 2×(base+altura). El resultado se muestra al usuario.

Perfecto, ya tienes claro algunos de los conceptos más importantes, pero todavía queda mucho camino por recorrer. Lo siguiente que vamos a aprender es indicarle a nuestro programa caminos distintos que puede tomar en función de las condiciones que hayamos establecido, así como realizar bucles para repetir ciertos bloques de código.