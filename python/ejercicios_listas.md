---
title: "E2 Ejercicios resueltos sobre estructuras de listas"
parent: "Python"
nav_exclude: true
---

## Ejercicios resueltos sobre estructuras de listas


Tabla de contenidos
-------------------

- [Ejercicios resueltos sobre estructuras de listas](#ejercicios-resueltos-sobre-estructuras-de-listas)
- [Tabla de contenidos](#tabla-de-contenidos)
- [Ejercicio 1: sumar todos los elementos de una lista de números](#ejercicio-1-sumar-todos-los-elementos-de-una-lista-de-números)
- [Ejercicio 2: encontrar el número más grande en una lista](#ejercicio-2-encontrar-el-número-más-grande-en-una-lista)
- [Ejercicio 3: reemplazar todos los elementos negativos de una lista por 0](#ejercicio-3-reemplazar-todos-los-elementos-negativos-de-una-lista-por-0)
- [Ejercicio 4: contar cuántas veces aparece un número en una lista](#ejercicio-4-contar-cuántas-veces-aparece-un-número-en-una-lista)
- [Ejercicio 5: eliminar todos los elementos repetidos de una lista](#ejercicio-5-eliminar-todos-los-elementos-repetidos-de-una-lista)
- [Ejercicio 6: invertir una lista](#ejercicio-6-invertir-una-lista)
- [Ejercicio 7: ordenar una lista de menor a mayor](#ejercicio-7-ordenar-una-lista-de-menor-a-mayor)
- [Ejercicio 8: combinar dos listas](#ejercicio-8-combinar-dos-listas)
- [Ejercicio 9: verificar si una lista está vacía](#ejercicio-9-verificar-si-una-lista-está-vacía)
- [Ejercicio 10: crear una lista con los cuadrados de los números del 1 al 10](#ejercicio-10-crear-una-lista-con-los-cuadrados-de-los-números-del-1-al-10)
- [Ejercicio 11: contar las vocales en una lista de caracteres](#ejercicio-11-contar-las-vocales-en-una-lista-de-caracteres)
- [Ejercicio 12: concatenar todas las palabras en una lista](#ejercicio-12-concatenar-todas-las-palabras-en-una-lista)
- [Ejercicio 13: convertir una lista de caracteres en una palabra](#ejercicio-13-convertir-una-lista-de-caracteres-en-una-palabra)

Para que puedas practicar sobre los conceptos vistos sobre la estructura de datos Lista en Python, aquí tienes una batería de ejercicios resueltos con explicaciones detalladas de cada uno.

Ejercicio 1: sumar todos los elementos de una lista de números
--------------------------------------------------------------

Escribe un programa que defina una lista de números y calcule la suma de todos los elementos de la lista.

Solución
```python
# Definir una lista de números
numeros = [3, 5, 7, 9, 11]

# Inicializar la suma
suma_total = 0

# Recorrer la lista y sumar los elementos
for numero in numeros:
    suma_total += numero

# Mostrar el resultado
print(f"La suma de todos los números es: {suma_total}")
```
Primero definimos una lista de números. Luego, inicializamos una variable `suma_total` en cero, que será donde acumularemos la suma de los elementos de la lista. Utilizamos un bucle `for` para recorrer la lista, sumando cada número a `suma_total` en cada iteración. Finalmente, imprimimos el valor total de la suma utilizando `print()`.

Ejercicio 2: encontrar el número más grande en una lista
--------------------------------------------------------

Escribe un programa que defina una lista de números y encuentre el número más grande de la lista.

Solución
```python
# Definir una lista de números
numeros = [23, 56, 12, 89, 4]

# Inicializar el número mayor con el primer valor de la lista
mayor = numeros[0]

# Recorrer la lista para encontrar el mayor número
for numero in numeros:
    if numero > mayor:
        mayor = numero

# Mostrar el número mayor
print(f"El número mayor es: {mayor}")
```
Comenzamos definiendo una lista de números y asignamos a la variable `mayor` el primer elemento de la lista. Luego, recorremos la lista usando un bucle `for`. Durante cada iteración, si encontramos un número mayor que el valor actual de `mayor`, actualizamos esa variable. Al final, mostramos el valor más alto encontrado en la lista.

Ejercicio 3: reemplazar todos los elementos negativos de una lista por 0
------------------------------------------------------------------------

Escribe un programa que defina una lista de números (positivos y negativos) y reemplace los números negativos por 0.

Solución
```python
# Definir una lista con números positivos y negativos
numeros = [10, -5, 3, -7, 0, 8]

# Reemplazar los números negativos por 0
for i in range(len(numeros)):
    if numeros[i] < 0:
        numeros[i] = 0

# Mostrar la lista modificada
print(f"Lista después de reemplazar negativos: {numeros}")
```
Primero definimos una lista con números positivos y negativos. Usamos un bucle `for` con el índice `i` para recorrer la lista. En cada iteración, comprobamos si el número en la posición `i` es negativo (`numeros[i] < 0`). Si lo es, lo reemplazamos por 0. Finalmente, mostramos la lista modificada.

Ejercicio 4: contar cuántas veces aparece un número en una lista
----------------------------------------------------------------

Escribe un programa que pida un número al usuario y cuente cuántas veces aparece ese número en una lista predefinida.

Solución
```python
# Definir una lista de números
numeros = [4, 2, 7, 4, 9, 4, 1, 4]

# Pedir un número al usuario
numero = int(input("Introduce un número: "))

# Contar cuántas veces aparece el número en la lista
contador = numeros.count(numero)

# Mostrar el resultado
print(f"El número {numero} aparece {contador} veces en la lista.")
```
Definimos una lista de números y pedimos al usuario que introduzca un número. Luego, usamos el método `.count()` de las listas para contar cuántas veces aparece el número en la lista. El resultado se almacena en la variable `contador` y lo mostramos con un `print()`.

Ejercicio 5: eliminar todos los elementos repetidos de una lista
----------------------------------------------------------------

Escribe un programa que defina una lista de números y elimine todos los elementos repetidos, dejando solo uno de cada.

Solución
```python
# Definir una lista con números repetidos
numeros = [1, 2, 2, 3, 4, 4, 5, 6, 6]

# Crear una nueva lista sin duplicados
numeros_sin_repetidos = []

# Añadir solo los números que no están ya en la nueva lista
for numero in numeros:
    if numero not in numeros_sin_repetidos:
        numeros_sin_repetidos.append(numero)

# Mostrar la lista sin elementos repetidos
print(f"Lista sin repetidos: {numeros_sin_repetidos}")
```
Definimos una lista con algunos números repetidos. Creamos una nueva lista vacía llamada `numeros_sin_repetidos` para almacenar los números sin duplicados. Recorremos la lista original con un bucle `for`, y en cada iteración comprobamos si el número actual no está ya en la nueva lista (`if numero not in numeros_sin_repetidos`). Si no está, lo añadimos con `.append()`. Finalmente, mostramos la lista sin duplicados.

Ejercicio 6: invertir una lista
-------------------------------

Escribe un programa que defina una lista de números y la invierta, de modo que el último elemento sea el primero y así sucesivamente.

Solución
```python
# Definir una lista de números
numeros = [1, 2, 3, 4, 5]

# Invertir la lista
numeros_invertidos = numeros[::-1]

# Mostrar la lista invertida
print(f"Lista invertida: {numeros_invertidos}")
```
Definimos una lista de números y la invertimos utilizando un “slice” (`[::-1]`), que recorre la lista desde el último elemento hasta el primero. Esto crea una nueva lista llamada `numeros_invertidos`. Mostramos la lista invertida con `print()`.

Ejercicio 7: ordenar una lista de menor a mayor
-----------------------------------------------

Escribe un programa que defina una lista de números y la ordene de menor a mayor sin utilizar funciones predefinidas de Python como `sort()`.

Solución
```python
# Definir una lista de números
numeros = [5, 2, 9, 1, 7]

# Ordenar la lista usando el algoritmo de la burbuja
for i in range(len(numeros)):
    for j in range(0, len(numeros)-i-1):
        if numeros[j] > numeros[j+1]:
            numeros[j], numeros[j+1] = numeros[j+1], numeros[j]

# Mostrar la lista ordenada
print(f"Lista ordenada: {numeros}")
```
Usamos el algoritmo de la burbuja para ordenar la lista. Este algoritmo compara cada par de elementos adyacentes y los intercambia si están en el orden incorrecto. Recorremos la lista con dos bucles anidados: el bucle externo reduce el número de elementos a verificar, y el interno compara e intercambia elementos si es necesario. Al finalizar, la lista estará ordenada y la mostramos con `print()`.

Ejercicio 8: combinar dos listas
--------------------------------

Escribe un programa que defina dos listas de números y las combine en una sola lista.

Solución
```python
# Definir dos listas
lista1 = [1, 3, 5]
lista2 = [2, 4, 6]

# Combinar las dos listas
lista_combinada = lista1 + lista2

# Mostrar la lista combinada
print(f"Lista combinada: {lista_combinada}")
```
Creamos dos listas, `lista1` y `lista2`. Luego, combinamos ambas listas usando el operador `+`, que concatena las listas, formando una nueva lista llamada `lista_combinada`. Finalmente, mostramos la lista combinada con `print()`.

Ejercicio 9: verificar si una lista está vacía
----------------------------------------------

Escribe un programa que defina una lista y verifique si está vacía o no.

Solución
```python
# Definir una lista
lista = []

# Verificar si la lista está vacía
if len(lista) == 0:
    print("La lista está vacía.")
else:
    print("La lista no está vacía.")
```
Definimos una lista vacía y usamos la función `len()` para verificar su longitud. Si la longitud es 0, imprimimos que la lista está vacía; de lo contrario, indicamos que no lo está.

Ejercicio 10: crear una lista con los cuadrados de los números del 1 al 10
--------------------------------------------------------------------------

Escribe un programa que cree una lista con los cuadrados de los números del 1 al 10.

Solución
```python
# Crear una lista vacía
cuadrados = []

# Llenar la lista con los cuadrados de los números del 1 al 10
for numero in range(1, 11):
    cuadrados.append(numero ** 2)

# Mostrar la lista de cuadrados
print(f"Los cuadrados de los números del 1 al 10 son: {cuadrados}")
```
Creamos una lista vacía llamada `cuadrados` y usamos un bucle `for` para iterar sobre los números del 1 al 10. En cada iteración, calculamos el cuadrado del número (`numero ** 2`) y lo añadimos a la lista con `.append()`. Finalmente, mostramos la lista con los cuadrados.

Ejercicio 11: contar las vocales en una lista de caracteres
-----------------------------------------------------------

Escribe un programa que defina una lista de caracteres y cuente cuántas vocales hay en la lista.

Solución
```python
# Definir una lista de caracteres
caracteres = ['a', 'b', 'c', 'e', 'i', 'o', 'u', 'x', 'z']

# Definir las vocales
vocales = ['a', 'e', 'i', 'o', 'u']

# Inicializar el contador de vocales
contador_vocales = 0

# Recorrer la lista de caracteres y contar las vocales
for caracter in caracteres:
    if caracter in vocales:
        contador_vocales += 1

# Mostrar el resultado
print(f"Hay {contador_vocales} vocales en la lista.")
```
En este programa, primero definimos una lista de caracteres donde algunos son vocales y otros no. Aparte, creamos una lista de referencia con las cinco vocales. Luego inicializamos una variable `contador_vocales` en cero para contar las vocales. A continuación, usamos un bucle `for` para recorrer la lista de caracteres. Dentro del bucle, comprobamos si el carácter actual está en la lista de vocales usando `if caracter in vocales`. Si es así, incrementamos el contador. Al final, mostramos cuántas vocales se encontraron en la lista.

Ejercicio 12: concatenar todas las palabras en una lista
--------------------------------------------------------

Escribe un programa que defina una lista de palabras (strings) y las concatene en una sola cadena de texto, separadas por un espacio.

Solución
```python
# Definir una lista de palabras
palabras = ["Hola", "mundo", "esto", "es", "Python"]

# Inicializar la cadena resultante
cadena_concatenada = ""

# Recorrer la lista y concatenar cada palabra
for palabra in palabras:
    cadena_concatenada += palabra + " "

# Eliminar el espacio final
cadena_concatenada = cadena_concatenada.strip()

# Mostrar la cadena concatenada
print(f"Cadena resultante: {cadena_concatenada}")
```
Primero definimos una lista de palabras. Luego, inicializamos una cadena vacía `cadena_concatenada` para ir acumulando las palabras. Utilizamos un bucle `for` para recorrer cada palabra de la lista y concatenarla a la cadena, añadiendo un espacio después de cada palabra para que estén separadas. Al final del bucle, usamos el método `strip()` para eliminar el espacio en blanco sobrante al final de la cadena resultante. Finalmente, mostramos la cadena completa.

Ejercicio 13: convertir una lista de caracteres en una palabra
--------------------------------------------------------------

Escribe un programa que defina una lista de caracteres y los convierta en una palabra (cadena de texto).

Solución
```python
# Definir una lista de caracteres
letras = ['P', 'y', 't', 'h', 'o', 'n']

# Convertir la lista de caracteres en una cadena
palabra = ''.join(letras)

# Mostrar la palabra resultante
print(f"La palabra formada es: {palabra}")
```
En este caso, tenemos una lista de caracteres individuales que forman la palabra “Python”. Para convertir esta lista en una cadena, usamos el método `''.join(letras)`, que une todos los elementos de la lista en una única cadena sin espacios entre ellos. El método `join()` toma como argumento la lista y los une usando el separador indicado antes de la llamada (`''`, en este caso, sin espacios). El resultado es la palabra “Python”, que mostramos utilizando la función `print()`.

Genial, ya dominas tu primera estructura de datos. A continuación, necesitas aprender la otra estructura de datos más común que usamos los programadores, el Diccionario. 