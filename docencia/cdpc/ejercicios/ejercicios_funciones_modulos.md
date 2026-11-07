# 10 ejercicios de funciones y módulos en Python para Bachillerato

Material introductorio para practicar funciones, parámetros, argumentos, valores de retorno, módulos y estructuras básicas de programación. Los ejercicios están ordenados de menor a mayor dificultad.

# PARTE 1. ENUNCIADOS

## Ejercicio 1. Sumar dos números

Crea una función llamada `sumar()` que reciba dos números como parámetros y devuelva su suma.

El programa principal debe solicitar dos números al usuario, llamar a la función y mostrar el resultado.

## Ejercicio 2. Calcular el área de un rectángulo

Crea una función llamada `area_rectangulo()` que reciba la base y la altura de un rectángulo y devuelva su área.

El programa principal solicitará la base y la altura al usuario y mostrará el resultado.

Fórmula: `Área = base * altura`.

## Ejercicio 3. Comprobar si un número es par o impar

Crea una función llamada `es_par()` que reciba un número entero y devuelva `True` si es par y `False` si es impar.

El programa principal solicitará un número y mostrará si es par o impar.

## Ejercicio 4. Calcular el mayor de tres números

Crea una función llamada `mayor()` que reciba tres números y devuelva el mayor de ellos.

El programa principal solicitará tres números al usuario y mostrará cuál es el mayor. No se debe utilizar la función `max()` de Python.

## Ejercicio 5. Calcular el factorial de un número

Crea una función llamada `factorial()` que reciba un número entero no negativo y calcule su factorial.

El factorial se calcula multiplicando todos los números enteros desde 1 hasta el número indicado.

Ejemplo: `5! = 5 * 4 * 3 * 2 * 1 = 120`.

El programa principal solicitará un número y mostrará su factorial.

## Ejercicio 6. Convertir grados Celsius a Fahrenheit

Crea una función llamada `celsius_a_fahrenheit()` que reciba una temperatura en grados Celsius y devuelva su equivalente en Fahrenheit.

Fórmula: `F = (9 / 5) * C + 32`.

El programa principal solicitará una temperatura y mostrará el resultado.

## Ejercicio 7. Utilizar el módulo math

Importa el módulo `math` de Python. Crea una función llamada `calcular_raiz()` que reciba un número y calcule su raíz cuadrada mediante `math.sqrt()`.

El programa principal solicitará un número y mostrará el resultado. Debe comprobar que el número no sea negativo.

## Ejercicio 8. Generar números aleatorios

Utiliza el módulo `random` de Python. Define una función llamada `generar_numero()` que genere y devuelva un número entero aleatorio entre 1 y 10, ambos incluidos.

El programa principal llamará a la función y mostrará el número generado.

## Ejercicio 9. Calcular la longitud de una circunferencia

Crea una función llamada `longitud_circunferencia()` que reciba el radio de una circunferencia y devuelva su longitud. Para obtener el valor de pi, utiliza el módulo `math`.

Fórmula: `L = 2 * pi * r`.

El programa principal solicitará el radio y mostrará la longitud. Debe comprobar que el radio no sea negativo.

## Ejercicio 10. Crear un módulo propio de operaciones matemáticas

Crea dos archivos Python:

- `operaciones.py`: contendrá cuatro funciones: `sumar(a, b)`, `restar(a, b)`, `multiplicar(a, b)` y `dividir(a, b)`.
- `principal.py`: importará el módulo `operaciones` y permitirá al usuario elegir qué operación realizar.

El programa solicitará dos números, realizará la operación seleccionada y mostrará el resultado. Debe comprobar que no se puede dividir entre cero.

---

# PARTE 2. SOLUCIONES DESARROLLADAS

## Solución 1. Sumar dos números

```python
def sumar(a, b):
    resultado = a + b
    return resultado

# Programa principal
num1 = float(input("Introduce el primer numero: "))
num2 = float(input("Introduce el segundo numero: "))

resultado = sumar(num1, num2)
print("La suma es:", resultado)
```

**Explicación:**
- `def` permite definir una función.
- `a` y `b` son los parámetros.
- `return` devuelve el resultado.
- `sumar(num1, num2)` llama a la función.

**Ejemplo de ejecución:**

```text
Introduce el primer numero: 5
Introduce el segundo numero: 3
La suma es: 8.0
```

## Solución 2. Área de un rectángulo

```python
def area_rectangulo(base, altura):
    area = base * altura
    return area

# Programa principal
base = float(input("Introduce la base: "))
altura = float(input("Introduce la altura: "))

resultado = area_rectangulo(base, altura)
print("El area del rectangulo es:", resultado)
```

**Explicación:** La función recibe dos parámetros, multiplica sus valores y devuelve el área calculada.

**Ejemplo de ejecución:**

```text
Introduce la base: 5
Introduce la altura: 4
El area del rectangulo es: 20.0
```

## Solución 3. Comprobar si un número es par o impar

```python
def es_par(numero):
    if numero % 2 == 0:
        return True
    else:
        return False

# Programa principal
num = int(input("Introduce un numero: "))

if es_par(num):
    print("El numero es par")
else:
    print("El numero es impar")
```

**Explicación:**
- El operador `%` calcula el resto de una división.
- Si el resto de dividir entre 2 es cero, el número es par.
- La función devuelve un valor booleano (`True` o `False`).

**Ejemplo de ejecución:**

```text
Introduce un numero: 8
El numero es par
```

## Solución 4. Calcular el mayor de tres números

```python
def mayor(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

# Programa principal
num1 = float(input("Introduce el primer numero: "))
num2 = float(input("Introduce el segundo numero: "))
num3 = float(input("Introduce el tercer numero: "))

resultado = mayor(num1, num2, num3)
print("El numero mayor es:", resultado)
```

**Explicación:** Se utilizan `if`, `elif` y `else` para comparar los tres números. No se utiliza `max()`.

**Ejemplo de ejecución:**

```text
Introduce el primer numero: 12
Introduce el segundo numero: 7
Introduce el tercer numero: 15
El numero mayor es: 15.0
```

## Solución 5. Calcular el factorial de un número

```python
def factorial(numero):
    resultado = 1

    for i in range(1, numero + 1):
        resultado = resultado * i

    return resultado

# Programa principal
num = int(input("Introduce un numero: "))

if num >= 0:
    resultado = factorial(num)
    print("El factorial es:", resultado)
else:
    print("El numero debe ser no negativo")
```

**Explicación:**
- Se utiliza un bucle `for`.
- La variable `resultado` comienza en 1.
- En cada repetición se multiplica por el siguiente número.
- El factorial de 0 también es 1.

**Ejemplo de ejecución:**

```text
Introduce un numero: 5
El factorial es: 120
```

## Solución 6. Convertir Celsius a Fahrenheit

```python
def celsius_a_fahrenheit(celsius):
    fahrenheit = (9 / 5) * celsius + 32
    return fahrenheit

# Programa principal
temperatura = float(input("Introduce los grados Celsius: "))

resultado = celsius_a_fahrenheit(temperatura)
print("Temperatura en Fahrenheit:", resultado)
```

**Explicación:** La función recibe una temperatura y aplica la fórmula de conversión.

**Ejemplo de ejecución:**

```text
Introduce los grados Celsius: 25
Temperatura en Fahrenheit: 77.0
```

## Solución 7. Utilizar el módulo math

```python
import math

def calcular_raiz(numero):
    resultado = math.sqrt(numero)
    return resultado

# Programa principal
num = float(input("Introduce un numero: "))

if num >= 0:
    resultado = calcular_raiz(num)
    print("La raiz cuadrada es:", resultado)
else:
    print("No se puede calcular la raiz cuadrada real")
```

**Explicación:**
- `import math` importa el módulo matemático.
- `math.sqrt()` calcula la raíz cuadrada.
- Se comprueba que el número no sea negativo.

**Ejemplo de ejecución:**

```text
Introduce un numero: 25
La raiz cuadrada es: 5.0
```

## Solución 8. Generar números aleatorios

```python
import random

def generar_numero():
    numero = random.randint(1, 10)
    return numero

# Programa principal
resultado = generar_numero()
print("Numero aleatorio:", resultado)
```

**Explicación:**
- `import random` importa el módulo de números aleatorios.
- `random.randint(1, 10)` genera un entero entre 1 y 10, incluidos ambos extremos.
- La función devuelve el número generado.

**Ejemplo de ejecución:**

```text
Numero aleatorio: 7
```

El resultado puede cambiar en cada ejecución.

## Solución 9. Calcular la longitud de una circunferencia

```python
import math

def longitud_circunferencia(radio):
    longitud = 2 * math.pi * radio
    return longitud

# Programa principal
radio = float(input("Introduce el radio: "))

if radio >= 0:
    resultado = longitud_circunferencia(radio)
    print("La longitud de la circunferencia es:", resultado)
else:
    print("El radio no puede ser negativo")
```

**Explicación:**
- `math.pi` proporciona el valor de pi.
- La función recibe el radio.
- Se aplica la fórmula de la longitud de una circunferencia.

**Ejemplo de ejecución:**

```text
Introduce el radio: 5
La longitud de la circunferencia es: 31.41592653589793
```

## Solución 10. Crear un módulo propio de operaciones matemáticas

En este ejercicio se trabaja con dos archivos independientes, que deben guardarse en la misma carpeta.

**Archivo 1: `operaciones.py`**

```python
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
        return None
```

**Archivo 2: `principal.py`**

```python
import operaciones

print("MENU DE OPERACIONES")
print("1. Sumar")
print("2. Restar")
print("3. Multiplicar")
print("4. Dividir")

opcion = int(input("Elige una opcion: "))

num1 = float(input("Introduce el primer numero: "))
num2 = float(input("Introduce el segundo numero: "))

if opcion == 1:
    resultado = operaciones.sumar(num1, num2)
    print("Resultado:", resultado)

elif opcion == 2:
    resultado = operaciones.restar(num1, num2)
    print("Resultado:", resultado)

elif opcion == 3:
    resultado = operaciones.multiplicar(num1, num2)
    print("Resultado:", resultado)

elif opcion == 4:
    resultado = operaciones.dividir(num1, num2)

    if resultado is not None:
        print("Resultado:", resultado)
    else:
        print("Error: no se puede dividir entre cero")

else:
    print("Opcion incorrecta")
```

**Explicación:**
- `operaciones.py` contiene las funciones.
- `principal.py` contiene el programa principal.
- `import operaciones` permite utilizar las funciones del otro archivo.
- Para llamar a una función se escribe `operaciones.nombre_funcion()`.

**Ejemplo de ejecución:**

```text
MENU DE OPERACIONES
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
Elige una opcion: 3
Introduce el primer numero: 6
Introduce el segundo numero: 4
Resultado: 24.0
```

---

# PARTE 3. RESUMEN DE LOS CONTENIDOS TRABAJADOS

| Ejercicio | Contenido principal | Estructura utilizada |
|---|---|---|
| 1 | Funciones y parámetros | `return` |
| 2 | Funciones matemáticas | Multiplicación |
| 3 | Valores booleanos | `if-else` |
| 4 | Comparación de valores | `if-elif-else` |
| 5 | Funciones y factoriales | `for` |
| 6 | Funciones y conversiones | Operaciones matemáticas |
| 7 | Módulo `math` | `import` |
| 8 | Módulo `random` | Números aleatorios |
| 9 | Módulo `math` | Constante `pi` |
| 10 | Módulos propios | Importación de funciones |

## Conceptos fundamentales

1. **Función:** bloque de código reutilizable que realiza una tarea concreta.
2. **Parámetros:** variables que recibe una función para trabajar.
3. **Argumentos:** valores que se pasan a una función cuando se llama.
4. **`return`:** instrucción que devuelve un resultado.
5. **Módulo:** archivo que contiene código Python reutilizable.
6. **`import`:** instrucción que permite utilizar módulos.
7. **Biblioteca estándar:** conjunto de módulos que incorpora Python, como `math` y `random`.

## Propuesta didáctica

Se recomienda que los alumnos intenten resolver primero los diez enunciados sin consultar las soluciones. Después, pueden ejecutar cada programa, probar distintos valores y comprobar los resultados. Así podrán identificar errores y comprender mejor el funcionamiento de las funciones y los módulos.
