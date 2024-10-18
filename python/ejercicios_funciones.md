Tabla de contenidos
-------------------

- [Tabla de contenidos](#tabla-de-contenidos)
- [Ejercicio 1: calcular el salario total de un trabajador con horas extras](#ejercicio-1-calcular-el-salario-total-de-un-trabajador-con-horas-extras)
- [Ejercicio 2: crear un módulo con funciones de conversión de temperatura](#ejercicio-2-crear-un-módulo-con-funciones-de-conversión-de-temperatura)
- [Ejercicio 3: contar cuántos elementos de una lista son pares e impares](#ejercicio-3-contar-cuántos-elementos-de-una-lista-son-pares-e-impares)
- [Ejercicio 4: verificar si una palabra es un palíndromo](#ejercicio-4-verificar-si-una-palabra-es-un-palíndromo)
- [Ejercicio 5: función que devuelva el número mayor de tres valores](#ejercicio-5-función-que-devuelva-el-número-mayor-de-tres-valores)
- [Ejercicio 6: crear una calculadora simple con funciones](#ejercicio-6-crear-una-calculadora-simple-con-funciones)
- [Ejercicio 7: generar una tabla de multiplicar usando funciones](#ejercicio-7-generar-una-tabla-de-multiplicar-usando-funciones)
- [Ejercicio 8: calcular el promedio de una lista de números con una función](#ejercicio-8-calcular-el-promedio-de-una-lista-de-números-con-una-función)
- [Ejercicio 9: crear una función que invierta una cadena de texto](#ejercicio-9-crear-una-función-que-invierta-una-cadena-de-texto)
- [Ejercicio 10: crear un módulo con operaciones matemáticas simples](#ejercicio-10-crear-un-módulo-con-operaciones-matemáticas-simples)

Para que puedas practicar sobre los conceptos vistos sobre funciones y módulos en Python, aquí tienes una batería de ejercicios resueltos con explicaciones detalladas de cada uno.

Ejercicio 1: calcular el salario total de un trabajador con horas extras
------------------------------------------------------------------------

Escribe una función llamada `calcular_salario` que reciba el número de horas trabajadas y la tarifa por hora. Si las horas son mayores a 40, las horas adicionales se pagarán al 150% de la tarifa normal. La función debe devolver el salario total. Luego, llama a la función y muestra el resultado.

Solución
```python
# Definir la función para calcular el salario total
def calcular_salario(horas, tarifa):
    if horas > 40:
        horas_extras = horas - 40
        salario = 40 * tarifa + horas_extras * tarifa * 1.5
    else:
        salario = horas * tarifa
    return salario

# Pedir los datos al usuario
horas = float(input("Introduce el número de horas trabajadas: "))
tarifa = float(input("Introduce la tarifa por hora: "))

# Llamar a la función y mostrar el resultado
salario_total = calcular_salario(horas, tarifa)
print(f"El salario total es: {salario_total}")
```
La función calcula el salario total considerando horas extra. Si el trabajador trabaja más de 40 horas, las horas adicionales se pagan a una tarifa del 150%. La función retorna el salario total y el programa lo muestra.

Ejercicio 2: crear un módulo con funciones de conversión de temperatura
-----------------------------------------------------------------------

Crea un módulo llamado `conversor_temperaturas.py` que contenga dos funciones: `celsius_a_fahrenheit(celsius)` y `fahrenheit_a_celsius(fahrenheit)`. Luego, escribe un programa principal que importe el módulo y permita al usuario elegir entre ambas conversiones.

Solución
```python
# Código del módulo conversor_temperaturas.py
# --------------------------------------------

# Función para convertir de Celsius a Fahrenheit
def celsius_a_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Función para convertir de Fahrenheit a Celsius
def fahrenheit_a_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

# Código del programa principal
# --------------------------------------------

# Importar el módulo de conversión de temperaturas
import conversor_temperaturas

# Pedir al usuario que elija una conversión
opcion = input("Elige una conversión (1: Celsius a Fahrenheit, 2: Fahrenheit a Celsius): ")

if opcion == "1":
    celsius = float(input("Introduce la temperatura en Celsius: "))
    print(f"La temperatura en Fahrenheit es: {conversor_temperaturas.celsius_a_fahrenheit(celsius)}")
elif opcion == "2":
    fahrenheit = float(input("Introduce la temperatura en Fahrenheit: "))
    print(f"La temperatura en Celsius es: {conversor_temperaturas.fahrenheit_a_celsius(fahrenheit)}")
else:
    print("Opción no válida.")
```
El módulo `conversor_temperaturas.py` contiene dos funciones para convertir temperaturas entre Celsius y Fahrenheit. En el programa principal, el usuario elige una conversión y el módulo se utiliza para realizar el cálculo.

Ejercicio 3: contar cuántos elementos de una lista son pares e impares
----------------------------------------------------------------------

Escribe una función llamada `contar_pares_impares` que reciba una lista de números y devuelva cuántos de ellos son pares y cuántos son impares. El programa debe mostrar ambos valores.

Solución
```python
# Definir la función para contar pares e impares
def contar_pares_impares(numeros):
    pares = 0
    impares = 0
    for numero in numeros:
        if numero % 2 == 0:
            pares += 1
        else:
            impares += 1
    return pares, impares

# Pedir la lista de números al usuario
numeros = [int(x) for x in input("Introduce una lista de números separados por espacio: ").split()]

# Llamar a la función y mostrar el resultado
pares, impares = contar_pares_impares(numeros)
print(f"Hay {pares} números pares y {impares} números impares.")
```
La función recorre la lista de números y usa una condición para contar cuántos son pares e impares. El resultado es devuelto como una tupla y luego se muestra en el programa principal.

Ejercicio 4: verificar si una palabra es un palíndromo
------------------------------------------------------

Escribe una función llamada `es_palindromo` que reciba una palabra y devuelva `True` si es un palíndromo (se lee igual al derecho y al revés) o `False` si no lo es. El programa debe mostrar el resultado.

Solución
```python
# Definir la función para verificar si una palabra es un palíndromo
def es_palindromo(palabra):
    palabra = palabra.lower()  # Convertir a minúsculas
    return palabra == palabra[::-1]

# Pedir una palabra al usuario
palabra = input("Introduce una palabra: ")

# Llamar a la función y mostrar el resultado
if es_palindromo(palabra):
    print(f"{palabra} es un palíndromo.")
else:
    print(f"{palabra} no es un palíndromo.")
```
La función convierte la palabra a minúsculas para evitar errores de mayúsculas y luego verifica si la palabra es igual a su inversa utilizando `[::-1]`. Si es así, la función retorna `True`, indicando que es un palíndromo.

Ejercicio 5: función que devuelva el número mayor de tres valores
-----------------------------------------------------------------

Escribe una función llamada `numero_mayor` que reciba tres números como parámetros y devuelva el mayor de ellos. Luego, muestra el resultado en el programa principal.

Solución
```python
# Definir la función para encontrar el número mayor
def numero_mayor(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

# Pedir tres números al usuario
a = int(input("Introduce el primer número: "))
b = int(input("Introduce el segundo número: "))
c = int(input("Introduce el tercer número: "))

# Llamar a la función y mostrar el resultado
mayor = numero_mayor(a, b, c)
print(f"El número mayor es: {mayor}")
```
La función compara tres números utilizando condicionales `if` para encontrar el mayor. Luego, retorna ese número. En el programa principal, pedimos tres números al usuario y llamamos a la función para encontrar el mayor.

Ejercicio 6: crear una calculadora simple con funciones
-------------------------------------------------------

Escribe un programa que defina cuatro funciones: `sumar(a, b)`, `restar(a, b)`, `multiplicar(a, b)` y `dividir(a, b)`. El programa debe permitir al usuario elegir una operación y realizar el cálculo.

Solución
```python
# Definir las funciones de la calculadora
def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b != 0:
        return a / b
    else:
        return "Error: División por cero"

# Pedir al usuario que elija una operación
operacion = input("Elige una operación (sumar, restar, multiplicar, dividir): ")

# Pedir los dos números
a = float(input("Introduce el primer número: "))
b = float(input("Introduce el segundo número: "))

# Realizar la operación elegida
if operacion == "sumar":
    print(f"El resultado es: {sumar(a, b)}")
elif operacion == "restar":
    print(f"El resultado es: {restar(a, b)}")
elif operacion == "multiplicar":
    print(f"El resultado es: {multiplicar(a, b)}")
elif operacion == "dividir":
    print(f"El resultado es: {dividir(a, b)}")
else:
    print("Operación no válida.")
```
Creamos cuatro funciones para las operaciones básicas. Dependiendo de la elección del usuario, se llama a la función correspondiente para realizar la operación. La función `dividir` incluye una comprobación para evitar divisiones por cero.

Ejercicio 7: generar una tabla de multiplicar usando funciones
--------------------------------------------------------------

Escribe una función llamada `tabla_multiplicar` que reciba un número y devuelva su tabla de multiplicar del 1 al 10 en forma de lista. El programa principal debe mostrar la tabla.

Solución
```python
# Definir la función para generar una tabla de multiplicar
def tabla_multiplicar(numero):
    tabla = []
    for i in range(1, 11):
        tabla.append(numero * i)
    return tabla

# Pedir el número al usuario
numero = int(input("Introduce un número para ver su tabla de multiplicar: "))

# Llamar a la función y mostrar la tabla
tabla = tabla_multiplicar(numero)
for i, valor in enumerate(tabla, 1):
    print(f"{numero} x {i} = {valor}")
```
La función `tabla_multiplicar` genera una lista que contiene la tabla de multiplicar del número recibido. Luego, en el programa principal, mostramos la tabla usando un bucle `for`.

Ejercicio 8: calcular el promedio de una lista de números con una función
-------------------------------------------------------------------------

Escribe una función llamada `calcular_promedio` que reciba una lista de números y devuelva el promedio de los números. El programa debe mostrar el promedio calculado.

Solución
```python
# Definir la función para calcular el promedio
def calcular_promedio(numeros):
    total = 0
    for numero in numeros:
        total += numero
    promedio = total / len(numeros)
    return promedio

# Pedir una lista de números al usuario
numeros = [float(x) for x in input("Introduce una lista de números separados por espacio: ").split()]

# Llamar a la función y mostrar el resultado
promedio = calcular_promedio(numeros)
print(f"El promedio es: {promedio}")
```
La función recorre la lista de números sumando cada uno y luego divide el total por el número de elementos para calcular el promedio. Finalmente, el resultado se muestra en el programa principal.

Ejercicio 9: crear una función que invierta una cadena de texto
---------------------------------------------------------------

Escribe una función llamada `invertir_cadena` que reciba una cadena de texto y devuelva la cadena invertida.

Solución
```python
# Definir la función para invertir una cadena de texto
def invertir_cadena(cadena):
    return cadena[::-1]

# Pedir una cadena de texto al usuario
cadena = input("Introduce una cadena de texto: ")

# Llamar a la función y mostrar el resultado
cadena_invertida = invertir_cadena(cadena)
print(f"La cadena invertida es: {cadena_invertida}")
```
La función usa `[::-1]` para invertir la cadena recibida y devuelve el resultado. En el programa principal, pedimos al usuario una cadena, la invertimos usando la función y mostramos el resultado.

Ejercicio 10: crear un módulo con operaciones matemáticas simples
-----------------------------------------------------------------

Crea un módulo llamado `operaciones_matematicas.py` que contenga cuatro funciones: `sumar(a, b)`, `restar(a, b)`, `multiplicar(a, b)` y `dividir(a, b)`. Luego, escribe un programa principal que importe el módulo y permita al usuario elegir una operación.

Solución
```python

# Código del módulo operaciones_matematicas.py
# --------------------------------------------

# Definir las funciones de operaciones matemáticas
def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b != 0:
        return a / b
    else:
        return "Error: División por cero"

# Importar el módulo de operaciones matemáticas
import operaciones_matematicas

# Pedir al usuario que elija una operación
operacion = input("Elige una operación (sumar, restar, multiplicar, dividir): ")

# Pedir los dos números
a = float(input("Introduce el primer número: "))
b = float(input("Introduce el segundo número: "))

# Realizar la operación elegida
if operacion == "sumar":
    print(f"El resultado es: {operaciones_matematicas.sumar(a, b)}")
elif operacion == "restar":
    print(f"El resultado es: {operaciones_matematicas.restar(a, b)}")
elif operacion == "multiplicar":
    print(f"El resultado es: {operaciones_matematicas.multiplicar(a, b)}")
elif operacion == "dividir":
    print(f"El resultado es: {operaciones_matematicas.dividir(a, b)}")
else:
    print("Operación no válida.")
```
El módulo contiene funciones para realizar operaciones matemáticas. En el programa principal, el usuario elige una operación y se llama a la función correspondiente del módulo para realizar el cálculo. El resultado se muestra en pantalla.

