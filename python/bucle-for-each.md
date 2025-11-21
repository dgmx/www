# 🐍 El bucle `for each` en Python


## Sintaxis Básica de un Bucle For en Python

La sintaxis de un bucle for en Python es directa y consta de tres elementos principales: el iterador, el iterable y el bloque de código a ejecutar. A continuación, se muestra la estructura básica:

```python
for i in datos:
    # Bloque de código
```
`i`: Representa el iterador, una variable que toma el valor de cada elemento del iterable en cada iteración. Puedes nombrarla como desees, aunque nombres descriptivos mejoran la legibilidad.

`datos`: Es el iterable, como una lista, tupla, conjunto, diccionario o cadena de texto.

`Bloque de código`: Las instrucciones que se ejecutan para cada elemento del iterable, **indentadas con cuatro espacios o una tabulación**.

## 🧠 ¿Qué es un bucle “for each”?

En Python, **el bucle `for` funciona como un “for each”** de otros lenguajes:  
sirve para **recorrer cada elemento** de una lista, tupla, cadena, diccionario u otro tipo de colección.

👉 La sintaxis general es:

```python
for variable in coleccion:
    # hacer algo con variable
```

La variable toma, **uno a uno**, los valores de la colección.

---

## 🔹 Ejemplo 1: Recorrer una lista

```python
frutas = ["manzana", "banana", "naranja"]

for fruta in frutas:
    print(fruta)
```

**Salida:**
```
manzana
banana
naranja
```

💡 Aquí, `fruta` va tomando cada elemento de la lista `frutas`.

---

## 🔹 Ejemplo 2: Recorrer una cadena (string)

```python
palabra = "hola"

for letra in palabra:
    print(letra)
```

**Salida:**
```
h
o
l
a
```

Cada letra de la palabra se recorre una por una.

---

## 🔹 Ejemplo 3: Recorrer un rango de números

```python
for numero in range(5):
    print(numero)
```

**Salida:**
```
0
1
2
3
4
```

💡 `range(5)` genera los números del 0 al 4.

---

## 🔹 Ejemplo 4: Recorrer un diccionario

```python
persona = {"nombre": "Ana", "edad": 25, "ciudad": "Madrid"}

for clave in persona:
    print(clave, ":", persona[clave])
```

**Salida:**
```
nombre : Ana
edad : 25
ciudad : Madrid
```

💡 Por defecto, el bucle recorre las **claves** del diccionario.

Si quieres recorrer claves y valores al mismo tiempo:

```python
for clave, valor in persona.items():
    print(clave, "->", valor)
```

---

## 🔹 Ejemplo 5: Usar `for` con una lista de listas

```python
numeros = [[1, 2, 3], [4, 5, 6]]

for fila in numeros:
    for n in fila:
        print(n, end=" ")
```

**Salida:**
```
1 2 3 4 5 6
```

💡 Aquí hay **dos bucles `for`**: el primero recorre las filas, el segundo recorre cada número dentro de la fila.

---

## 🔹 Ejemplo 6: `for each` con condición (`if` dentro del bucle)

```python
nombres = ["Ana", "Luis", "Pedro", "Lucía"]

for nombre in nombres:
    if nombre.startswith("L"):
        print(nombre)
```

**Salida:**
```
Luis
Lucía
```

💡 Puedes filtrar elementos dentro del bucle fácilmente.

---

## 🧩 En resumen

| Elemento | Qué hace el `for each` |
|-----------|-----------------------|
| Lista     | Recorre cada elemento |
| String    | Recorre cada carácter |
| Diccionario | Recorre claves o pares clave-valor |
| range()   | Recorre una secuencia de números |

---
