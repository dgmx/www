# Ejercicios de condicionales y bucles en Python

En esta segunda tanda de ejerciciosAmpliamos lo aprendido: aquí trabajamos con **condicionales** (`if`, `elif`, `else`) y **bucles** (`for`, `while`) para tomar decisiones y repetir acciones en Python.

## Tabla de contenidos

- [Ejercicio 1: determinar si un número es positivo, negativo o cero](#ejercicio-1-determinar-si-un-numero-es-positivo-negativo-o-cero)
- [Ejercicio 2: comprobar si un número es par o impar](#ejercicio-2-comprobar-si-un-numero-es-par-o-impar)
- [Ejercicio 3: calcular el factorial de un número](#ejercicio-3-calcular-el-factorial-de-un-numero)
- [Ejercicio 4: contar cuántos números son mayores que 10](#ejercicio-4-contar-cuantos-numeros-son-mayores-que-10)
- [Ejercicio 5: calcular la suma de los números pares del 1 al 100](#ejercicio-5-calcular-la-suma-de-los-numeros-pares-del-1-al-100)
- [Ejercicio 6: encontrar el mayor de tres números](#ejercicio-6-encontrar-el-mayor-de-tres-numeros)
- [Ejercicio 7: contar los múltiplos de 3 entre dos números](#ejercicio-7-contar-los-multiplos-de-3-entre-dos-numeros)
- [Ejercicio 8: suma de dígitos de un número](#ejercicio-8-suma-de-digitos-de-un-numero)
- [Ejercicio 9: imprimir los números del 1 al 10 en orden inverso](#ejercicio-9-imprimir-los-numeros-del-1-al-10-en-orden-inverso)
- [Ejercicio 10: menú para elegir una operación matemática](#ejercicio-10-menu-para-elegir-una-operacion-matematica)
- [Ejercicio 11: adivinar un número con límite de intentos](#ejercicio-11-adivinar-un-numero-con-limite-de-intentos)
- [Ejercicio 12: imprimir números impares entre 1 y 10](#ejercicio-12-imprimir-numeros-impares-entre-1-y-10)
- [Ejercicio 13: buscar un número múltiplo de 7 y menor que 100](#ejercicio-13-buscar-un-numero-multiplo-de-7-y-menor-que-100)

## Ejercicio 1: determinar si un número es positivo, negativo o cero

Escribe un programa que pida un número al usuario y muestre por pantalla si ese número es positivo, negativo o cero.

::: details Ver solución {close}

```python
numero = float(input("Introduce un número: "))

if numero > 0:
    print("El número es positivo")
elif numero < 0:
    print("El número es negativo")
else:
    print("El número es cero")
```

**Explicación:**

- `if numero > 0` comprueba la primera condición: si el número es mayor que cero.
- `elif` introduce una condición alternativa que solo se evalúa si la anterior es falsa.
- `else` se ejecuta cuando ninguna de las condiciones anteriores se cumple, es decir, cuando el número es cero.
- Solo se muestra **una** de las tres frases, porque las ramas de un condicional son excluyentes.

:::

## Ejercicio 2: comprobar si un número es par o impar

Escribe un programa que pida un número entero al usuario y determine si es par o impar.

::: details Ver solución {close}

```python
numero = int(input("Introduce un número entero: "))

if numero % 2 == 0:
    print("El número es par")
else:
    print("El número es impar")
```

**Explicación:**

- El operador `%` (módulo o resto) devuelve el resto de una división.
- Si el resto de dividir entre 2 es `0`, el número es par; en caso contrario es impar.
- La comparación `==` sirve para comprobar si dos valores son iguales, no para asignar.
- Recuerda usar `int()` porque los restos solo tienen sentido con números enteros.

:::

## Ejercicio 3: calcular el factorial de un número

Escribe un programa que pida un número entero no negativo y calcule su factorial (`n!`), es decir, el producto de todos los números desde `1` hasta `n`.

::: details Ver solución {close}

```python
numero = int(input("Introduce un número entero no negativo: "))

factorial = 1

for i in range(1, numero + 1):
    factorial = factorial * i

print("El factorial de", numero, "es:", factorial)
```

**Explicación:**

- El factorial se inicializa a `1`, que es el elemento neutro de la multiplicación.
- `range(1, numero + 1)` genera los números desde `1` hasta `numero` (el segundo límite no se incluye).
- En cada vuelta del bucle, el valor de `factorial` se multiplica por el número actual.
- `0! = 1` porque el bucle no llega a ejecutarse y la variable conserva su valor inicial.
- Si `numero` es negativo, el bucle no se ejecuta y el resultado es `1`; por eso conviene pedir un número no negativo.

:::

## Ejercicio 4: contar cuántos números son mayores que 10

Escribe un programa que pida al usuario cinco números y muestre cuántos de ellos son mayores que 10.

::: details Ver solución {close}

```python
numeros = []
contador = 0

for i in range(5):
    numero = float(input(f"Introduce el número {i + 1}: "))
    numeros.append(numero)
    if numero > 10:
        contador = contador + 1

print("Los números introducidos son:", numeros)
print("Hay", contador, "números mayores que 10")
```

**Explicación:**

- `numeros.append(numero)` añade el valor al final de la lista.
- Un `contador` inicializado a `0` se incrementa cada vez que se cumple la condición.
- El bucle realiza exactamente 5 vueltas gracias a `range(5)`.
- La cadena `f"..."` (cadena con formato) permite insertar variables directamente usando `{}`.
- Al terminar, se muestran la lista completa y el resultado de la cuenta.

:::

## Ejercicio 5: calcular la suma de los números pares del 1 al 100

Escribe un programa que recorra los números del 1 al 100 y muestre la suma de todos los números pares.

::: details Ver solución {close}

```python
suma = 0

for numero in range(1, 101):
    if numero % 2 == 0:
        suma = suma + numero

print("La suma de los números pares del 1 al 100 es:", suma)
```

**Explicación:**

- `range(1, 101)` recorre los números del 1 al 100, ya que el 101 queda excluido.
- La variable `suma` comienza en `0` porque es el valor neutro de la suma.
- El condicional anidado en el bucle solo añade los números pares al total.
- El resultado es `2 + 4 + ... + 100 = 2550`.

:::

## Ejercicio 6: encontrar el mayor de tres números

Escribe un programa que pida tres números al usuario y muestre cuál es el mayor de los tres.

::: details Ver solución {close}

```python
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))
numero3 = float(input("Introduce el tercer número: "))

mayor = numero1

if numero2 > mayor:
    mayor = numero2

if numero3 > mayor:
    mayor = numero3

print("El mayor número es:", mayor)
```

**Explicación:**

- Se toma el primer número como valor inicial de `mayor`, ya que es el mayor de los conocidos hasta ese momento.
- Cada `if` compara el siguiente número con el máximo acumulado y lo actualiza si es superior.
- Al terminar, `mayor` contiene el valor más alto de los tres.
- La función `max(numero1, numero2, numero3)` también resolvería el ejercicio en una sola línea.

:::

## Ejercicio 7: contar los múltiplos de 3 entre dos números

Escribe un programa que pida dos números al usuario y muestre cuántos múltiplos de 3 hay entre ambos (ambos incluidos).

::: details Ver solución {close}

```python
inicio = int(input("Introduce el número inicial: "))
fin = int(input("Introduce el número final: "))

contador = 0

for numero in range(inicio, fin + 1):
    if numero % 3 == 0:
        contador = contador + 1

print(f"Hay {contador} múltiplos de 3 entre {inicio} y {fin}")
```

**Explicación:**

- `range(inicio, fin + 1)` incluye el número final en el recorrido.
- Un número es múltiplo de 3 si al dividirlo entre 3 el resto es `0`.
- El contador se incrementa una vez por cada múltiplo encontrado.
- Si el número inicial es mayor que el final, el bucle no se ejecuta y el contador vale `0`.

:::

## Ejercicio 8: suma de dígitos de un número

Escribe un programa que pida un número entero y muestre la suma de sus dígitos. Por ejemplo, para `408` el resultado es `4 + 0 + 8 = 12`.

::: details Ver solución {close}

```python
numero = int(input("Introduce un número entero: "))

suma = 0

while numero > 0:
    digito = numero % 10
    suma = suma + digito
    numero = numero // 10

print("La suma de los dígitos es:", suma)
```

**Explicación:**

- `numero % 10` obtiene el último dígito del número.
- `numero // 10` elimina ese último dígito, dejando el resto de los dígitos.
- El bucle `while` se repite hasta que el número llega a `0`, es decir, hasta que ya no quedan dígitos.
- Por ejemplo, con `408`: se suman `8`, luego `0` y finalmente `4`, dando un total de `12`.

:::

## Ejercicio 9: imprimir los números del 1 al 10 en orden inverso

Escribe un programa que muestre los números del 10 al 1, uno por línea y en orden descendente.

::: details Ver solución {close}

```python
for numero in range(10, 0, -1):
    print(numero)
```

**Explicación:**

- `range(inicio, fin, paso)` permite indicar un paso distinto de 1.
- Con el paso `-1` el bucle cuenta hacia atrás desde el 10 hasta el 1.
- El límite final (`0`) tampoco se imprime, igual que ocurre con el 101 en el ejercicio 5.
- `print()` sin argumentos dentro del bucle también sirve para mostrar una línea en blanco entre números.

:::

## Ejercicio 10: menú para elegir una operación matemática

Escribe un programa que muestre un menú con cuatro operaciones (sumar, restar, multiplicar y dividir) y ejecute la opción elegida por el usuario.

::: details Ver solución {close}

```python
print("1 - Sumar")
print("2 - Restar")
print("3 - Multiplicar")
print("4 - Dividir")

opcion = int(input("Elige una opción (1-4): "))

numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))

if opcion == 1:
    print("El resultado es:", numero1 + numero2)
elif opcion == 2:
    print("El resultado es:", numero1 - numero2)
elif opcion == 3:
    print("El resultado es:", numero1 * numero2)
elif opcion == 4:
    if numero2 != 0:
        print("El resultado es:", numero1 / numero2)
    else:
        print("No se puede dividir entre cero")
else:
    print("Opción no válida")
```

**Explicación:**

- `if` / `elif` / `else` permiten crear un menú: cada opción se ejecuta solo si se cumple su condición.
- La rama `else` final avisa al usuario cuando la opción introducida no está en el menú.
- El condicional anidado comprueba que el divisor no sea `0`, evitando un error de división.
- Validar la entrada del usuario es una de las aplicaciones más habituales de los condicionales.

:::

## Ejercicio 11: adivinar un número con límite de intentos

Escribe un programa que genere un número aleatorio entre 1 y 100 y pida al usuario que lo adivine, permitiendo un máximo de 5 intentos.

::: details Ver solución {close}

```python
import random

secreto = random.randint(1, 100)
intentos = 5

while intentos > 0:
    numero = int(input(f"Quedan {intentos} intentos. ¿Qué número es? "))
    if numero == secreto:
        print("¡Has acertado! El número era", secreto)
        break
    elif numero > secreto:
        print("El número secreto es menor")
    else:
        print("El número secreto es mayor")
    intentos = intentos - 1
else:
    print("Se han agotado los intentos. El número era", secreto)
```

**Explicación:**

- El módulo `random` permite generar números aleatorios; `randint(1, 100)` incluye ambos extremos.
- El bucle `while` se ejecuta mientras queden intentos disponibles.
- `break` termina el bucle en cuanto el usuario acierta, evitando que se Gasten intentos innecesarios.
- La estructura `while ... else` ejecuta su `else` solo si el bucle terminó por agotar la condición, es decir, sin `break`.
- Las pistas "es menor" o "es mayor" convierten el juego en una búsqueda binaria.

:::

## Ejercicio 12: imprimir números impares entre 1 y 10

Escribe un programa que muestre todos los números impares comprendidos entre 1 y 10, uno por línea.

::: details Ver solución {close}

```python
for numero in range(1, 11, 2):
    print(numero)
```

**Explicación:**

- `range(1, 11, 2)` avanza de dos en dos desde el 1, justo el valor de los impares.
- También se puede escribir con un condicional: `if numero % 2 != 0: print(numero)`.
- El operador `!=` significa "distinto de", por eso se compara con `0` en lugar de usar `==`.
- El resultado es 1, 3, 5, 7 y 9.

:::

## Ejercicio 13: buscar un número múltiplo de 7 y menor que 100

Escribe un programa que busque el primer múltiplo de 7 que sea menor que 100 y lo muestre por pantalla.

::: details Ver solución {close}

```python
for numero in range(1, 100):
    if numero % 7 == 0:
        print("El primer múltiplo de 7 menor que 100 es:", numero)
        break
else:
    print("No hay ningún múltiplo de 7 menor que 100")
```

**Explicación:**

- `range(1, 100)` recorre los números del 1 al 99, es decir, todos los menores que 100.
- `numero % 7 == 0` comprueba si el número es múltiplo de 7.
- `break` detiene el bucle en cuanto se encuentra el primer resultado, así que solo se muestra el más pequeño.
- El `else` del bucle se ejecuta solo si el recorrido termina sin haber encontrado ningún caso (es decir, sin `break`).
- El número buscado es el `7`, que es el primer múltiplo de 7 mayor que cero.
