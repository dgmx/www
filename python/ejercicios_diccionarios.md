---
title: "E4 Ejercicios resueltos sobre Diccionarios"
parent: "Python"
nav_exclude: true
---

## Ejercicios resueltos sobre Diccionarios

Tabla de contenidos
-------------------

- [Ejercicio 1: agregar estudiantes y sus calificaciones a un diccionario](#ejercicio-1-agregar-estudiantes-y-sus-calificaciones-a-un-diccionario)
- [Ejercicio 2: buscar un valor en un diccionario](#ejercicio-2-buscar-un-valor-en-un-diccionario)
- [Ejercicio 3: actualizar los precios de productos en un diccionario](#ejercicio-3-actualizar-los-precios-de-productos-en-un-diccionario)
- [Ejercicio 4: eliminar claves con valores negativos en un diccionario](#ejercicio-4-eliminar-claves-con-valores-negativos-en-un-diccionario)
- [Ejercicio 5: contar la frecuencia de letras en una palabra](#ejercicio-5-contar-la-frecuencia-de-letras-en-una-palabra)
- [Ejercicio 6: intercambiar claves y valores de un diccionario](#ejercicio-6-intercambiar-claves-y-valores-de-un-diccionario)
- [Ejercicio 7: crear un diccionario a partir de dos listas](#ejercicio-7-crear-un-diccionario-a-partir-de-dos-listas)
- [Ejercicio 8: sumar los valores numéricos de un diccionario](#ejercicio-8-sumar-los-valores-numéricos-de-un-diccionario)
- [Ejercicio 9: encontrar la clave con el valor más alto](#ejercicio-9-encontrar-la-clave-con-el-valor-más-alto)
- [Ejercicio 10: combinar dos diccionarios](#ejercicio-10-combinar-dos-diccionarios)

Para que puedas practicar sobre los conceptos vistos sobre la estructura de datos Diccionario en Python, aquí tienes una batería de ejercicios resueltos con explicaciones detalladas de cada uno.

Ejercicio 1: agregar estudiantes y sus calificaciones a un diccionario
----------------------------------------------------------------------

Crea un programa que permita agregar nombres de estudiantes como claves y sus calificaciones como valores en un diccionario. Luego, imprime el diccionario.

Solución
```python
# Crear un diccionario vacío
calificaciones = {}

# Pedir el número de estudiantes
num_estudiantes = int(input("¿Cuántos estudiantes quieres agregar?: "))

# Agregar estudiantes y calificaciones al diccionario
for i in range(num_estudiantes):
    nombre = input(f"Introduce el nombre del estudiante {i + 1}: ")
    calificacion = int(input(f"Introduce la calificación de {nombre}: "))
    calificaciones[nombre] = calificacion

# Mostrar el diccionario con las calificaciones
print("Diccionario de estudiantes y calificaciones:", calificaciones)
```
Primero, creamos un diccionario vacío. Luego, pedimos al usuario que introduzca el número de estudiantes. En un bucle, pedimos el nombre del estudiante y su calificación, añadiéndolos al diccionario. Finalmente, mostramos el diccionario completo.

Ejercicio 2: buscar un valor en un diccionario
----------------------------------------------

Escribe un programa que permita al usuario buscar una clave en un diccionario de frutas y colores. Si la clave existe, muestra el color; de lo contrario, muestra un mensaje indicando que no se encontró.

Solución
```python
# Definir un diccionario de frutas y colores
frutas_colores = {
    "manzana": "rojo",
    "platano": "amarillo",
    "pera": "verde",
    "naranja": "naranja"
}

# Pedir al usuario una fruta
fruta = input("Introduce el nombre de una fruta: ")

# Verificar si la fruta está en el diccionario
if fruta in frutas_colores:
    print(f"El color de la {fruta} es: {frutas_colores[fruta]}")
else:
    print("Esa fruta no está en el diccionario.")
```
Definimos un diccionario con frutas como claves y colores como valores. Luego pedimos al usuario que introduzca una fruta. Usamos el condicional `if fruta in frutas_colores` para verificar si la fruta está en el diccionario, y mostramos su color si existe, o un mensaje de error si no.

Ejercicio 3: actualizar los precios de productos en un diccionario
------------------------------------------------------------------

Escribe un programa que permita actualizar el precio de un producto en un diccionario de productos y precios. Si el producto no existe, se debe añadir.

Solución
```python
# Definir un diccionario de productos y precios
productos = {
    "pan": 1.20,
    "leche": 0.99,
    "huevos": 2.50
}

# Pedir al usuario el nombre del producto y el nuevo precio
producto = input("Introduce el nombre del producto: ")
precio = float(input(f"Introduce el nuevo precio de {producto}: "))

# Actualizar el precio o agregar el producto
productos[producto] = precio

# Mostrar el diccionario actualizado
print("Diccionario de productos y precios actualizado:", productos)
```
Definimos un diccionario con productos y sus precios. Luego, pedimos al usuario un producto y un precio. Usamos `productos[producto] = precio` para actualizar el precio si el producto existe, o para agregarlo si no existe. Finalmente, mostramos el diccionario actualizado.

Ejercicio 4: eliminar claves con valores negativos en un diccionario
--------------------------------------------------------------------

Escribe un programa que elimine las claves de un diccionario que tienen valores negativos. Usa un diccionario con números enteros como ejemplo.

Solución
```python
# Definir un diccionario con números enteros
numeros = {
    "a": 5,
    "b": -3,
    "c": 8,
    "d": -1
}

# Crear una lista de claves a eliminar
claves_a_eliminar = [clave for clave, valor in numeros.items() if valor < 0]

# Eliminar las claves con valores negativos
for clave in claves_a_eliminar:
    del numeros[clave]

# Mostrar el diccionario actualizado
print("Diccionario sin valores negativos:", numeros)
```
Primero, creamos un diccionario con números enteros, algunos de ellos negativos. Luego, usamos una comprensión de listas para identificar las claves cuyos valores son negativos y las almacenamos en una lista. Finalmente, eliminamos esas claves del diccionario con `del`.

Ejercicio 5: contar la frecuencia de letras en una palabra
----------------------------------------------------------

Escribe un programa que cuente cuántas veces aparece cada letra en una palabra dada por el usuario, usando un diccionario.

Solución
```python
# Pedir una palabra al usuario
palabra = input("Introduce una palabra: ")

# Crear un diccionario para almacenar la frecuencia de letras
frecuencia_letras = {}

# Contar la frecuencia de cada letra
for letra in palabra:
    if letra in frecuencia_letras:
        frecuencia_letras[letra] += 1
    else:
        frecuencia_letras[letra] = 1

# Mostrar el diccionario con la frecuencia de letras
print("Frecuencia de letras:", frecuencia_letras)
```
Creamos un diccionario vacío para almacenar la frecuencia de letras. Recorremos la palabra introducida por el usuario y, si la letra ya está en el diccionario, aumentamos su valor. Si no, la añadimos con valor 1. Finalmente, mostramos el diccionario resultante.

Ejercicio 6: intercambiar claves y valores de un diccionario
------------------------------------------------------------

Escribe un programa que intercambie las claves y valores de un diccionario, es decir, que los valores pasen a ser las claves y las claves pasen a ser los valores.

Solución
```python
# Definir un diccionario de ejemplo
diccionario = {
    "nombre": "Juan",
    "edad": 30,
    "ciudad": "Madrid"
}

# Intercambiar las claves y los valores
diccionario_invertido = {valor: clave for clave, valor in diccionario.items()}

# Mostrar el diccionario invertido
print("Diccionario invertido:", diccionario_invertido)
```
Utilizamos una comprensión de diccionario para intercambiar las claves y los valores. Durante el recorrido del diccionario original con `items()`, asignamos los valores originales como claves y las claves como valores en el nuevo diccionario `diccionario_invertido`.

Ejercicio 7: crear un diccionario a partir de dos listas
--------------------------------------------------------

Escribe un programa que tome dos listas, una de claves y otra de valores, y cree un diccionario uniendo ambas listas.

Solución
```python
# Definir dos listas
claves = ["nombre", "edad", "ciudad"]
valores = ["Ana", 28, "Barcelona"]

# Crear un diccionario vacío
diccionario = {}

# Usar un bucle para agregar pares clave-valor al diccionario
for i in range(len(claves)):
    diccionario[claves[i]] = valores[i]

# Mostrar el diccionario resultante
print("Diccionario creado:", diccionario)
```
Primero definimos dos listas, una con las claves y otra con los valores. Creamos un diccionario vacío. Luego, recorremos ambas listas usando un índice en un bucle `for`. En cada iteración, usamos las posiciones correspondientes de ambas listas para asignar las claves y los valores al diccionario. Finalmente, mostramos el diccionario.

Ejercicio 8: sumar los valores numéricos de un diccionario
----------------------------------------------------------

Escribe un programa que sume todos los valores numéricos de un diccionario dado.

Solución
```python
# Definir un diccionario con valores numéricos
diccionario = {
    "a": 5,
    "b": 12,
    "c": 3,
    "d": 7
}

# Inicializar la variable suma
suma_total = 0

# Recorrer los valores del diccionario y sumarlos
for valor in diccionario.values():
    suma_total += valor

# Mostrar la suma total
print(f"La suma de los valores es: {suma_total}")
```
Primero definimos un diccionario con valores numéricos. Inicializamos una variable `suma_total` en 0. Luego, recorremos los valores del diccionario usando un bucle `for` y el método `.values()`, sumando cada valor a `suma_total`. Finalmente, mostramos el resultado.

Ejercicio 9: encontrar la clave con el valor más alto
-----------------------------------------------------

Escribe un programa que encuentre la clave asociada al valor más alto en un diccionario dado.

Solución
```python
# Definir un diccionario con valores numéricos
diccionario = {
    "a": 10,
    "b": 25,
    "c": 3,
    "d": 18
}

# Inicializar la clave con el mayor valor y el mayor valor
clave_mayor_valor = None
mayor_valor = None

# Recorrer el diccionario para encontrar la clave con el valor más alto
for clave, valor in diccionario.items():
    if mayor_valor is None or valor > mayor_valor:
        mayor_valor = valor
        clave_mayor_valor = clave

# Mostrar la clave con el mayor valor
print(f"La clave con el valor más alto es: {clave_mayor_valor}")
```
Definimos un diccionario con claves y valores numéricos. Inicializamos dos variables, `clave_mayor_valor` y `mayor_valor`, con `None`. Usamos un bucle `for` para recorrer el diccionario con el método `.items()` y en cada iteración comparamos el valor actual con `mayor_valor`. Si encontramos un valor mayor, actualizamos ambas variables. Finalmente, mostramos la clave con el valor más alto.

Ejercicio 10: combinar dos diccionarios
---------------------------------------

Escribe un programa que combine dos diccionarios. Si alguna clave está repetida, la clave del segundo diccionario debe sobrescribir la del primero.

Solución
```python
# Definir dos diccionarios
diccionario1 = {"a": 1, "b": 2, "c": 3}
diccionario2 = {"b": 4, "d": 5}

# Combinar los dos diccionarios manualmente
for clave, valor in diccionario2.items():
    diccionario1[clave] = valor

# Mostrar el diccionario combinado
print("Diccionario combinado:", diccionario1)
```
Primero definimos dos diccionarios. Luego, usamos un bucle `for` para recorrer los pares clave-valor del segundo diccionario con `.items()`. En cada iteración, actualizamos el valor de la clave en el primer diccionario o añadimos la clave si no existe. Finalmente, mostramos el diccionario combinado.

