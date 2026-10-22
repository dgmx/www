# Ejercicios de funciones y módulos en Python

En esta tercera tanda de ejercicios trabajamos con **funciones** (`def`, parámetros, `return`) y con **módulos**, es decir, archivos `.py` que contienen funciones reutilizables. Cada ejercicio incluye una solución comentada que puedes desplegar.


## Ejercicio 1: calcular el salario total de un trabajador con horas extras

Escribe una función llamada `calcular_salario` que reciba el número de horas trabajadas y la tarifa por hora. Si las horas son mayores a 40, las horas adicionales se pagarán al 150% de la tarifa normal. La función debe devolver el salario total. Luego, llama a la función y muestra el resultado.

::: details Ver solución {close}

```python
def calcular_salario(horas, tarifa):
    if horas > 40:
        horas_normales = 40
        horas_extra = horas - 40
        salario = horas_normales * tarifa + horas_extra * tarifa * 1.5
    else:
        salario = horas * tarifa
    return salario

horas = float(input("Introduce las horas trabajadas: "))
tarifa = float(input("Introduce la tarifa por hora: "))

total = calcular_salario(horas, tarifa)

print(f"El salario total es: {total:.2f} €")
```

**Explicación:**

- La función recibe dos **parámetros**: las horas trabajadas y la tarifa.
- El `if` separa los dos casos: hasta 40 horas se paga la tarifa normal; por encima, las horas adicionales se pagan al **150%** (`tarifa * 1.5`).
- `return` devuelve el resultado al programa principal, donde se guarda en `total`.
- `:.2f` muestra el salario con dos decimales.
- Si se trabaja exactamente 40 horas, se cumple el `else` y no se paga ninguna hora extra.

:::

## Ejercicio 2: crear un módulo con funciones de conversión de temperatura

Crea un módulo llamado `conversor_temperaturas.py` que contenga dos funciones: `celsius_a_fahrenheit(celsius)` y `fahrenheit_a_celsius(fahrenheit)`. Luego, escribe un programa principal que importe el módulo y permita al usuario elegir entre ambas conversiones.

::: details Ver solución {close}

**conversor_temperaturas.py**

```python
def celsius_a_fahrenheit(celsius):
    return celsius * 9 / 5 + 32

def fahrenheit_a_celsius(fahrenheit):
    return (fahrenheit - 32) * 5 / 9
```

**main.py**

```python
import conversor_temperaturas

print("1. Convertir de Celsius a Fahrenheit")
print("2. Convertir de Fahrenheit a Celsius")

opcion = input("Elige una opción (1 o 2): ")

if opcion == "1":
    celsius = float(input("Temperatura en grados Celsius: "))
    resultado = conversor_temperaturas.celsius_a_fahrenheit(celsius)
    print(f"{celsius} °C equivalen a {resultado:.1f} °F")
elif opcion == "2":
    fahrenheit = float(input("Temperatura en grados Fahrenheit: "))
    resultado = conversor_temperaturas.fahrenheit_a_celsius(fahrenheit)
    print(f"{fahrenheit} °F equivalen a {resultado:.1f} °C")
else:
    print("Opción no válida")
```

**Explicación:**

- Un **módulo** es un archivo `.py` con funciones que otro programa puede importar.
- `import conversor_temperaturas` carga el archivo y permite usar sus funciones con la sintaxis `modulo.funcion()`.
- Los dos archivos deben estar en la **misma carpeta** para que la importación funcione.
- Cada función aplica su fórmula y devuelve el resultado con `return`.
- También se podría usar `from conversor_temperaturas import celsius_a_fahrenheit` y llamar a la función sin el prefijo del módulo.

:::

## Ejercicio 3: contar cuántos elementos de una lista son pares e impares

Escribe una función llamada `contar_pares_impares` que reciba una lista de números y devuelva cuántos de ellos son pares y cuántos son impares. El programa debe mostrar ambos valores.

::: details Ver solución {close}

```python
def contar_pares_impares(numeros):
    pares = 0
    impares = 0

    for numero in numeros:
        if numero % 2 == 0:
            pares += 1
        else:
            impares += 1

    return pares, impares

numeros = [4, 7, 10, 13, 8, 21, 6]

pares, impares = contar_pares_impares(numeros)

print("Números pares:", pares)
print("Números impares:", impares)
```

**Explicación:**

- La función recibe una **lista** y recorre cada uno de sus elementos con un `for`.
- El operador `%` obtiene el resto de la división entre 2: si es `0`, el número es par.
- `pares += 1` es equivalente a `pares = pares + 1`; lo mismo ocurre con los impares.
- `return pares, impares` devuelve una **tupla** con dos valores.
- En la llamada, `pares, impares = ...` **desempaqueta** esa tupla en dos variables.
- También se podría escribir con comprensiones de listas: `len([n for n in numeros if n % 2 == 0])`.

:::

## Ejercicio 4: verificar si una palabra es un palíndromo

Escribe una función llamada `es_palindromo` que reciba una palabra y devuelva `True` si es un palíndromo (se lee igual al derecho y al revés) o `False` si no lo es. El programa debe mostrar el resultado.

::: details Ver solución {close}

```python
def es_palindromo(palabra):
    palabra = palabra.lower().replace(" ", "")
    return palabra == palabra[::-1]

palabra = input("Introduce una palabra o frase: ")

if es_palindromo(palabra):
    print("Es un palíndromo")
else:
    print("No es un palíndromo")
```

**Explicación:**

- `lower()` convierte la cadena a minúsculas para que `"Ana"` y `"ana"` se traten igual.
- `replace(" ", "")` elimina los espacios, de modo que también funcione con frases como `"anita lava la tina"`.
- `palabra[::-1]` crea la cadena invertida usando un slicing con paso `-1`.
- La función devuelve directamente el resultado de la comparación `==`, que es un booleano.
- El programa principal usa ese `True` o `False` como condición del `if`.

:::

## Ejercicio 5: función que devuelva el número mayor de tres valores

Escribe una función llamada `numero_mayor` que reciba tres números como parámetros y devuelva el mayor de ellos. Luego, muestra el resultado en el programa principal.

::: details Ver solución {close}

```python
def numero_mayor(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))
numero3 = float(input("Introduce el tercer número: "))

mayor = numero_mayor(numero1, numero2, numero3)

print("El número mayor es:", mayor)
```

**Explicación:**

- La función recibe tres parámetros y compara el primero con los otros dos.
- `and` exige que se cumplan **las dos** condiciones para considerar que `a` es el mayor.
- Se usa `>=` en lugar de `>` para que, si hay empate, también se devuelva un resultado correcto.
- Si `a` no es el mayor, se comprueba `b`; si tampoco lo es, el mayor tiene que ser `c`.
- Una alternativa más corta sería `return max(a, b, c)`.

:::

## Ejercicio 6: crear una calculadora simple con funciones

Escribe un programa que defina cuatro funciones: `sumar(a, b)`, `restar(a, b)`, `multiplicar(a, b)` y `dividir(a, b)`. El programa debe permitir al usuario elegir una operación y realizar el cálculo.

::: details Ver solución {close}

```python
def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return None
    return a / b

print("1. Sumar")
print("2. Restar")
print("3. Multiplicar")
print("4. Dividir")

opcion = input("Elige una operación (1-4): ")

numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))

if opcion == "1":
    print("Resultado:", sumar(numero1, numero2))
elif opcion == "2":
    print("Resultado:", restar(numero1, numero2))
elif opcion == "3":
    print("Resultado:", multiplicar(numero1, numero2))
elif opcion == "4":
    resultado = dividir(numero1, numero2)
    if resultado is None:
        print("No se puede dividir entre cero")
    else:
        print("Resultado:", resultado)
else:
    print("Opción no válida")
```

**Explicación:**

- Cada operación vive en su propia **función**, lo que evita repetir código y facilita probarlas por separado.
- Todas reciben dos parámetros y devuelven el resultado con `return`.
- `dividir` comprueba si el divisor es `0` y, en ese caso, devuelve `None` para indicar que no hay resultado válido.
- En el programa principal se comprueba `resultado is None` antes de mostrarlo, evitando imprimir un valor engañoso.
- El menú con `if` / `elif` / `else` selecciona la función que se debe llamar.

:::

## Ejercicio 7: generar una tabla de multiplicar usando funciones

Escribe una función llamada `tabla_multiplicar` que reciba un número y devuelva su tabla de multiplicar del 1 al 10 en forma de lista. El programa principal debe mostrar la tabla.

::: details Ver solución {close}

```python
def tabla_multiplicar(numero):
    tabla = []

    for i in range(1, 11):
        tabla.append(numero * i)

    return tabla

numero = int(input("Introduce un número: "))
tabla = tabla_multiplicar(numero)

for i, resultado in enumerate(tabla, start=1):
    print(f"{numero} x {i} = {resultado}")
```

**Explicación:**

- La función crea una **lista vacía** y la va rellenando con `append()` en cada vuelta del bucle.
- `range(1, 11)` genera los números del 1 al 10, ambos incluidos en la tabla.
- La función devuelve la lista completa, no la imprime: así puede reutilizarse en otro programa.
- `enumerate(tabla, start=1)` proporciona a la vez el índice y el valor; `start=1` hace que el multiplicador empiece en 1.
- La misma función se podría escribir con una comprensión: `return [numero * i for i in range(1, 11)]`.

:::

## Ejercicio 8: calcular el promedio de una lista de números con una función

Escribe una función llamada `calcular_promedio` que reciba una lista de números y devuelva el promedio de los números. El programa debe mostrar el promedio calculado.

::: details Ver solución {close}

```python
def calcular_promedio(numeros):
    if len(numeros) == 0:
        return None
    return sum(numeros) / len(numeros)

numeros = [7, 8, 6, 9, 5]

promedio = calcular_promedio(numeros)

if promedio is None:
    print("La lista está vacía, no se puede calcular el promedio")
else:
    print("El promedio es:", promedio)
```

**Explicación:**

- `sum(numeros)` suma todos los elementos de la lista.
- `len(numeros)` indica cuántos elementos hay.
- El promedio se obtiene dividiendo la suma entre la cantidad de elementos.
- La función comprueba primero si la lista está vacía para evitar una división entre cero.
- En ese caso devuelve `None`, y el programa principal lo detecta con `is None`.
- En Python 3, la división con `/` siempre devuelve un número decimal, aunque el resultado sea entero.

:::

## Ejercicio 9: crear una función que invierta una cadena de texto

Escribe una función llamada `invertir_cadena` que reciba una cadena de texto y devuelva la cadena invertida.

::: details Ver solución {close}

```python
def invertir_cadena(cadena):
    return cadena[::-1]

texto = input("Introduce un texto: ")

print("Texto original:", texto)
print("Texto invertido:", invertir_cadena(texto))
```

**Explicación:**

- El slicing `[::-1]` recorre la cadena desde el final hasta el principio con paso `-1`.
- Es la forma más corta y habitual de invertir una cadena en Python.
- La función no modifica el texto original, ya que las cadenas son **inmutables**: devuelve una cadena nueva.
- Otra alternativa equivalente sería `return "".join(reversed(cadena))`.
- Si se introducen espacios, también se invierten y quedan al principio del resultado.

:::

## Ejercicio 10: crear un módulo con operaciones matemáticas simples

Crea un módulo llamado `operaciones_matematicas.py` que contenga cuatro funciones: `sumar(a, b)`, `restar(a, b)`, `multiplicar(a, b)` y `dividir(a, b)`. Luego, escribe un programa principal que importe el módulo y permita al usuario elegir una operación.

::: details Ver solución {close}

**operaciones_matematicas.py**

```python
def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return None
    return a / b
```

**main.py**

```python
import operaciones_matematicas

print("1. Sumar")
print("2. Restar")
print("3. Multiplicar")
print("4. Dividir")

opcion = input("Elige una operación (1-4): ")

numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))

if opcion == "1":
    print("Resultado:", operaciones_matematicas.sumar(numero1, numero2))
elif opcion == "2":
    print("Resultado:", operaciones_matematicas.restar(numero1, numero2))
elif opcion == "3":
    print("Resultado:", operaciones_matematicas.multiplicar(numero1, numero2))
elif opcion == "4":
    resultado = operaciones_matematicas.dividir(numero1, numero2)
    if resultado is None:
        print("No se puede dividir entre cero")
    else:
        print("Resultado:", resultado)
else:
    print("Opción no válida")
```

**Explicación:**

- El módulo agrupa las cuatro operaciones en un archivo independiente y reutilizable.
- `import operaciones_matematicas` carga el módulo; después se accede a cada función con `operaciones_matematicas.funcion()`.
- Los dos archivos deben guardarse en la **misma carpeta**.
- También se puede importar solo lo necesario: `from operaciones_matematicas import sumar, restar`.
- La comprobación de la división entre cero se hace dentro de `dividir`, de modo que cualquier programa que use el módulo quede protegido.
- Este ejercicio es la versión modular del ejercicio 6: el mismo comportamiento, pero con el código organizado en dos archivos.

:::
