---
title: "E5 Ejercicios resueltos sobre Funciones 2"
parent: "Python"
nav_exclude: true
---


# 10 Ejercicios de Funciones en Python

## 1. Promedio de calificaciones
**Enunciado:**  
Crear una función que pida 5 calificaciones, las guarde en una lista y muestre si el alumno aprobó o reprobó.

---

## 2. Contador de palabras
**Enunciado:**  
Crear una función que pida una frase al usuario, separe las palabras en una lista y cuente cuántas veces aparece cada palabra usando un diccionario. Mostrar los resultados.

---

## 3. Lista de números pares e impares
**Enunciado:**  
Crear una función que pida números al usuario hasta que ingrese 0. Guardar los números pares e impares en listas separadas y mostrar ambas listas.

---

## 4. Registro de alumnos
**Enunciado:**  
Crear una función que permita registrar alumnos con sus notas en un diccionario. El programa debe permitir agregar varios alumnos hasta que el usuario decida terminar y luego mostrar todos los alumnos y sus notas.

---

## 5. Buscador en diccionario
**Enunciado:**  
Crear una función que busque el nombre de un alumno en un diccionario de alumnos con sus notas. Si el alumno existe, mostrar su nota; si no, mostrar "Alumno no encontrado".

---

## 6. Conversor de temperaturas
**Enunciado:**  
Crear una función que pida varias temperaturas en °C y las guarde en una lista. Luego convertir cada temperatura a °F y guardarlas en un diccionario donde la clave sea la temperatura en °C y el valor la temperatura en °F. Mostrar el diccionario resultante.

---

## 7. Eliminación de duplicados
**Enunciado:**  
Crear una función que pida 10 números al usuario, los guarde en una lista y luego elimine los duplicados usando un bucle. Mostrar la lista final sin duplicados.

---

## 8. Menú interactivo
**Enunciado:**  
Crear una función que muestre un menú con opciones: sumar, restar, salir. El usuario elige una opción y se realiza la operación. Guardar los resultados en una lista y mostrar la lista al final.

---

## 9. Contador de vocales
**Enunciado:**  
Crear una función que pida una palabra al usuario y cuente cuántas veces aparece cada vocal usando un diccionario. Mostrar el conteo de cada vocal.

---

## 10. Tienda virtual
**Enunciado:**  
Crear una función que permita agregar productos con su precio a un diccionario, calcular el total de la compra y mostrar una “factura” con todos los productos y el total.



## 1. Promedio de calificaciones

**Enunciado:**  
Crear una función que pida 5 calificaciones, las guarde en una lista y muestre si el alumno aprobó.

```python
def promedio():
    calificaciones = []
    for i in range(5):
        nota = float(input(f"Ingrese la calificación {i+1}: "))
        calificaciones.append(nota)

    prom = sum(calificaciones) / len(calificaciones)
    print("Promedio:", prom)

    if prom >= 6:
        print("Aprobado")
    else:
        print("Reprobado")

promedio()

```
## 2. Contador de palabras

```python

def contar_palabras():
    frase = input("Ingrese una frase: ")
    palabras = frase.split()
    contador = {}

    for palabra in palabras:
        contador[palabra] = contador.get(palabra, 0) + 1

    print(contador)

contar_palabras()

```

## 3. Lista de números pares e impares
```python

def pares_impares():
    pares = []
    impares = []

    while True:
        num = int(input("Ingrese un número (0 para salir): "))
        if num == 0:
            break
        if num % 2 == 0:
            pares.append(num)
        else:
            impares.append(num)

    print("Pares:", pares)
    print("Impares:", impares)

pares_impares()

```
## 4. Registro de alumnos
```python

def registro_alumnos():
    alumnos = {}

    while True:
        nombre = input("Nombre del alumno: ")
        nota = float(input("Nota: "))
        alumnos[nombre] = nota

        continuar = input("¿Desea agregar otro alumno? (si/no): ")
        if continuar.lower() != "si":
            break

    print(alumnos)

registro_alumnos()

```
## 5. Buscador en diccionario

```python


def buscar_alumno():
    alumnos = {"Ana": 7, "Luis": 5, "Carlos": 8}

    nombre = input("Buscar alumno: ")
    if nombre in alumnos:
        print("Nota:", alumnos[nombre])
    else:
        print("Alumno no encontrado")

buscar_alumno()

```
## 6. Conversor de temperaturas

```python

def conversor():
    temperaturas = []
    conversiones = {}

    for i in range(5):
        temp = float(input("Temperatura en °C: "))
        temperaturas.append(temp)

    for t in temperaturas:
        f = (t * 9/5) + 32
        conversiones[t] = f

    print(conversiones)

conversor()

```
## 7. Eliminación de duplicados

```python

def eliminar_duplicados():
    numeros = []

    for i in range(10):
        num = int(input("Ingrese un número: "))
        if num not in numeros:
            numeros.append(num)

    print("Lista sin duplicados:", numeros)

eliminar_duplicados()

```
## 8. Menú interactivo
```python

def menu():
    resultados = []

    while True:
        print("1. Sumar")
        print("2. Restar")
        print("3. Salir")

        opcion = input("Opción: ")

        if opcion == "1":
            a = int(input("a: "))
            b = int(input("b: "))
            resultados.append(a + b)

        elif opcion == "2":
            a = int(input("a: "))
            b = int(input("b: "))
            resultados.append(a - b)

        elif opcion == "3":
            break

    print("Resultados:", resultados)

menu()

```
## 9. Contador de vocales
```python

def contar_vocales():
    palabra = input("Ingrese una palabra: ")
    vocales = {"a": 0, "e": 0, "i": 0, "o": 0, "u": 0}

    for letra in palabra.lower():
        if letra in vocales:
            vocales[letra] += 1

    print(vocales)

contar_vocales()

```
## 10. Tienda virtual
```python

def tienda():
    carrito = {}
    total = 0

    while True:
        producto = input("Producto: ")
        precio = float(input("Precio: "))
        carrito[producto] = precio

        continuar = input("¿Agregar otro? (si/no): ")
        if continuar.lower() != "si":
            break

    print("Factura:")
    for producto, precio in carrito.items():
        print(producto, " - $", precio)
        total += precio

    print("Total: $", total)

tienda()
