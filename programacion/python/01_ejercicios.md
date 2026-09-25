# Ejercicios básicos de Python

## Tabla de contenidos

- [Ejercicio 1: calcular la suma de dos números](#ejercicio-1-calcular-la-suma-de-dos-números)
- [Ejercicio 2: calcular el área de un círculo](#ejercicio-2-calcular-el-área-de-un-círculo)
- [Ejercicio 3: convertir grados Celsius a Fahrenheit](#ejercicio-3-convertir-grados-celsius-a-fahrenheit)
- [Ejercicio 4: calcular el doble y el triple de un número](#ejercicio-4-calcular-el-doble-y-el-triple-de-un-número)
- [Ejercicio 5: calcular la media de tres números](#ejercicio-5-calcular-la-media-de-tres-números)
- [Ejercicio 6: multiplicar dos números](#ejercicio-6-multiplicar-dos-números)
- [Ejercicio 7: concatenar dos cadenas de texto](#ejercicio-7-concatenar-dos-cadenas-de-texto)
- [Ejercicio 8: mostrar un número repetido varias veces](#ejercicio-8-mostrar-un-número-repetido-varias-veces)
- [Ejercicio 9: calcular el área de un rectángulo](#ejercicio-9-calcular-el-área-de-un-rectángulo)
- [Ejercicio 10: calcular el perímetro de un rectángulo](#ejercicio-10-calcular-el-perímetro-de-un-rectángulo)

Para que puedas practicar sobre los conceptos de variables, constantes, operadores, expresiones y la entrada/salida de datos usando Python, aquí tienes una batería de ejercicios resueltos con explicaciones detalladas de cada uno.

## Ejercicio 1: calcular la suma de dos números

Escribe un programa que pida al usuario dos números y luego muestre la suma de ambos.

::: details Ver solución {close}

```python
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))

suma = numero1 + numero2

print("La suma es:", suma)
```

**Explicación:**

- `input()` permite introducir datos desde el teclado.
- `float()` convierte el texto recibido en un número decimal.
- El operador `+` suma los dos valores.
- El resultado se guarda en la variable `suma` y se muestra con `print()`.

:::

## Ejercicio 2: calcular el área de un círculo

Escribe un programa que pida al usuario el radio de un círculo y calcule su área.

::: details Ver solución {close}

```python
import math

radio = float(input("Introduce el radio del círculo: "))
PI = math.pi

area = PI * radio ** 2

print("El área del círculo es:", area)
```

**Explicación:**

- El módulo `math` ofrece constantes y funciones matemáticas.
- `math.pi` representa la constante pi.
- La fórmula del área de un círculo es `área = pi × radio²`.
- El operador `**` calcula una potencia.

:::

## Ejercicio 3: convertir grados Celsius a Fahrenheit

Escribe un programa que convierta una temperatura introducida en grados Celsius a grados Fahrenheit.

::: details Ver solución {close}

```python
celsius = float(input("Introduce la temperatura en grados Celsius: "))

fahrenheit = (celsius * 9 / 5) + 32

print("La temperatura en Fahrenheit es:", fahrenheit)
```

**Explicación:**

- La fórmula de conversión es `Fahrenheit = Celsius × 9/5 + 32`.
- El operador `/` realiza la división.
- Los paréntesis indican que primero se debe multiplicar y dividir por 9/5.
- Después se suma el valor constante `32`.

:::

## Ejercicio 4: calcular el doble y el triple de un número

Escribe un programa que pida un número al usuario y muestre tanto el doble como el triple de ese número.

::: details Ver solución {close}

```python
numero = float(input("Introduce un número: "))

doble = numero * 2
triple = numero * 3

print("El doble es:", doble)
print("El triple es:", triple)
```

**Explicación:**

- El operador `*` multiplica el número introducido por 2 y por 3.
- El doble y el triple se guardan en variables diferentes.
- `print()` muestra ambos resultados por separado.

:::

## Ejercicio 5: calcular la media de tres números

Escribe un programa que pida tres números al usuario y calcule su media.

::: details Ver solución {close}

```python
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))
numero3 = float(input("Introduce el tercer número: "))

media = (numero1 + numero2 + numero3) / 3

print("La media es:", media)
```

**Explicación:**

- Los tres números se suman dentro de los paréntesis.
- El resultado de la suma se divide entre 3.
- La operación completa se guarda en la variable `media`.

:::

## Ejercicio 6: multiplicar dos números

Escribe un programa que pida al usuario dos números y muestre su producto.

::: details Ver solución {close}

```python
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))

producto = numero1 * numero2

print("El producto es:", producto)
```

**Explicación:**

- Los dos valores se convierten en números decimales.
- El operador `*` calcula su producto.
- El resultado se almacena en la variable `producto` antes de mostrarlo.

:::

## Ejercicio 7: concatenar dos cadenas de texto

Escribe un programa que pida al usuario dos frases y luego muestre ambas frases concatenadas en una sola línea.

::: details Ver solución {close}

```python
frase1 = input("Introduce la primera frase: ")
frase2 = input("Introduce la segunda frase: ")

frase_completa = frase1 + " " + frase2

print(frase_completa)
```

**Explicación:**

- `input()` puede devolver directamente una cadena de texto.
- El operador `+` también concatena cadenas.
- El espacio entre comillas evita que las dos frases queden juntas sin separación.

:::

## Ejercicio 8: mostrar un número repetido varias veces

Escribe un programa que pida al usuario un número y luego muestre ese número repetido 5 veces.

::: details Ver solución {close}

```python
numero = int(input("Introduce un número: "))

for _ in range(5):
    print(numero, end=" ")

print()
```

**Explicación:**

- `range(5)` genera cinco iteraciones, con valores del 0 al 4.
- La variable `_` se utiliza porque su valor concreto no se necesita.
- `end=" "` coloca un espacio detrás de cada número.
- El último `print()` añade un salto de línea al finalizar.

:::

## Ejercicio 9: calcular el área de un rectángulo

Escribe un programa que calcule el área de un rectángulo a partir de su base y altura proporcionadas por el usuario.

::: details Ver solución {close}

```python
base = float(input("Introduce la base del rectángulo: "))
altura = float(input("Introduce la altura del rectángulo: "))

area = base * altura

print("El área del rectángulo es:", area)
```

**Explicación:**

- El área de un rectángulo se calcula con `área = base × altura`.
- El operador `*` realiza la multiplicación.
- El resultado se guarda en la variable `area` para poder mostrarlo.

:::

## Ejercicio 10: calcular el perímetro de un rectángulo

Escribe un programa que pida al usuario la base y la altura de un rectángulo y luego calcule su perímetro.

::: details Ver solución {close}

```python
base = float(input("Introduce la base del rectángulo: "))
altura = float(input("Introduce la altura del rectángulo: "))

perimetro = 2 * (base + altura)

print("El perímetro del rectángulo es:", perimetro)
```

**Explicación:**

- El perímetro es la suma de todos los lados del rectángulo.
- Como hay dos lados de base y dos de altura, la fórmula es `perímetro = 2 × (base + altura)`.
- Los paréntesis aseguran que primero se sumen la base y la altura.

:::
