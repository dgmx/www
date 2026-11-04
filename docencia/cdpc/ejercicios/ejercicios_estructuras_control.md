# Ejercicios resueltos sobre estructuras de control en Python

Batería de ejercicios resueltos sobre estructuras de control en Python, con enunciado, solución y salida esperada.

## Ejercicio 1: determinar si un número es positivo, negativo o cero

Escribe un programa que pida un número al usuario y determine si es positivo, negativo o cero.

### Solución

```python
# Solicitar un número al usuario
numero = float(input("Introduce un número: "))

# Condición para evaluar si es positivo, negativo o cero
if numero > 0:
    print("El número es positivo.")
elif numero < 0:
    print("El número es negativo.")
else:
    print("El número es cero.")
```

Usamos una estructura condicional `if`, `elif` y `else` para verificar si el número es mayor, menor o igual a cero y mostramos el mensaje correspondiente.

### Salida esperada (ejemplo)

```
Introduce un número: -3
El número es negativo.
```

## Ejercicio 2: comprobar si un número es par o impar

Escribe un programa que pida un número al usuario y determine si es par o impar.

### Solución

```python
# Solicitar un número al usuario
numero = int(input("Introduce un número entero: "))

# Verificar si el número es par o impar
if numero % 2 == 0:
    print("El número es par.")
else:
    print("El número es impar.")
```

Usamos el operador módulo `%` para dividir el número entre 2. Si el resto es 0, el número es par; si no, es impar.

### Salida esperada (ejemplo)

```
Introduce un número entero: 8
El número es par.
```

## Ejercicio 3: calcular el factorial de un número

Escribe un programa que calcule el factorial de un número introducido por el usuario usando un bucle `while`.

### Solución

```python
# Solicitar un número entero
numero = int(input("Introduce un número entero: "))

# Inicializar el resultado del factorial
factorial = 1

# Usar un bucle while para calcular el factorial
while numero > 0:
    factorial *= numero
    numero -= 1

# Mostrar el resultado
print(f"El factorial es: {factorial}")
```

Usamos un bucle `while` para multiplicar el número por los valores decrecientes hasta que llega a 1. El resultado se almacena en la variable `factorial`.

### Salida esperada (ejemplo)

```
Introduce un número entero: 5
El factorial es: 120
```

## Ejercicio 4: contar cuántos números son mayores que 10

Escribe un programa que pida cinco números y cuente cuántos de ellos son mayores que 10.

### Solución

```python
# Inicializar el contador
contador = 0

# Usar un bucle for para pedir 5 números
for i in range(5):
    numero = float(input(f"Introduce el número {i + 1}: "))
    if numero > 10:
        contador += 1

# Mostrar cuántos números fueron mayores que 10
print(f"Has introducido {contador} números mayores que 10.")
```

Usamos un bucle `for` para pedir cinco números al usuario y un condicional `if` para aumentar el contador si el número es mayor que 10.

### Salida esperada (ejemplo)

```
Introduce el número 1: 5
Introduce el número 2: 12
Introduce el número 3: 8
Introduce el número 4: 15
Introduce el número 5: 3
Has introducido 2 números mayores que 10.
```

## Ejercicio 5: calcular la suma de los números pares del 1 al 100

Escribe un programa que calcule la suma de todos los números pares entre 1 y 100.

### Solución

```python
# Inicializar la suma
suma = 0

# Usar un bucle for para recorrer los números del 1 al 100
for numero in range(1, 101):
    if numero % 2 == 0:
        suma += numero

# Mostrar el resultado
print(f"La suma de los números pares del 1 al 100 es: {suma}")
```

Usamos un bucle `for` para recorrer los números del 1 al 100 y un condicional `if` para sumar solo los números pares.

### Salida esperada

```
La suma de los números pares del 1 al 100 es: 2550
```

## Ejercicio 6: encontrar el mayor de tres números

Escribe un programa que pida tres números y determine cuál es el mayor.

### Solución

```python
# Solicitar tres números al usuario
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))
numero3 = float(input("Introduce el tercer número: "))

# Determinar cuál es el mayor
if numero1 >= numero2 and numero1 >= numero3:
    mayor = numero1
elif numero2 >= numero1 and numero2 >= numero3:
    mayor = numero2
else:
    mayor = numero3

# Mostrar el mayor número
print(f"El número mayor es: {mayor}")
```

Usamos condiciones compuestas con operadores `and` para comparar los tres números y determinar cuál es el mayor.

### Salida esperada (ejemplo)

```
Introduce el primer número: 4
Introduce el segundo número: 9
Introduce el tercer número: 7
El número mayor es: 9.0
```

## Ejercicio 7: contar los múltiplos de 3 entre dos números

Escribe un programa que pida dos números y cuente cuántos múltiplos de 3 hay entre ellos.

### Solución

```python
# Solicitar los dos números
numero1 = int(input("Introduce el primer número: "))
numero2 = int(input("Introduce el segundo número: "))

# Asegurar que el primer número es menor que el segundo
if numero1 > numero2:
    numero1, numero2 = numero2, numero1

# Contar los múltiplos de 3
contador = 0
for numero in range(numero1, numero2 + 1):
    if numero % 3 == 0:
        contador += 1

# Mostrar el resultado
print(f"Hay {contador} múltiplos de 3 entre {numero1} y {numero2}.")
```

Primero aseguramos que el primer número es menor que el segundo intercambiando sus valores si es necesario. Luego, usamos un bucle `for` para contar los múltiplos de 3.

### Salida esperada (ejemplo)

```
Introduce el primer número: 1
Introduce el segundo número: 10
Hay 3 múltiplos de 3 entre 1 y 10.
```

## Ejercicio 8: suma de dígitos de un número

Escribe un programa que pida un número entero y calcule la suma de sus dígitos.

### Solución

```python
# Solicitar un número entero al usuario
numero = input("Introduce un número entero: ")

# Inicializar la suma
suma = 0

# Recorrer los dígitos y sumarlos
for digito in numero:
    suma += int(digito)

# Mostrar la suma de los dígitos
print(f"La suma de los dígitos es: {suma}")
```

Convertimos el número en una cadena para poder recorrer sus dígitos con un bucle `for`. Cada dígito se convierte de nuevo en entero para sumarlo.

### Salida esperada (ejemplo)

```
Introduce un número entero: 1234
La suma de los dígitos es: 10
```

## Ejercicio 9: imprimir los números del 1 al 10 en orden inverso

Escribe un programa que imprima los números del 1 al 10 en orden inverso.

### Solución

```python
# Usar un bucle for para imprimir los números en orden inverso
for numero in range(10, 0, -1):
    print(numero)
```

Usamos un bucle `for` con un tercer parámetro negativo en la función `range()` para contar hacia atrás desde 10 hasta 1.

### Salida esperada

```
10
9
8
7
6
5
4
3
2
1
```

## Ejercicio 10: menú para elegir una operación matemática

Escribe un programa que muestre un menú con tres opciones: sumar dos números, restar dos números o multiplicar dos números. El programa debe repetirse hasta que el usuario elija salir.

### Solución

```python
# Inicializar la opción seleccionada
opcion = 0

# Repetir el menú hasta que el usuario elija salir
while opcion != 4:
    # Mostrar el menú
    print("Menú de operaciones:")
    print("1. Sumar dos números")
    print("2. Restar dos números")
    print("3. Multiplicar dos números")
    print("4. Salir")
    
    opcion = int(input("Elige una opción (1-4): "))
    
    if opcion == 1:
        numero1 = float(input("Introduce el primer número: "))
        numero2 = float(input("Introduce el segundo número: "))
        print(f"La suma es: {numero1 + numero2}")
    
    elif opcion == 2:
        numero1 = float(input("Introduce el primer número: "))
        numero2 = float(input("Introduce el segundo número: "))
        print(f"La resta es: {numero1 - numero2}")
    
    elif opcion == 3:
        numero1 = float(input("Introduce el primer número: "))
        numero2 = float(input("Introduce el segundo número: "))
        print(f"La multiplicación es: {numero1 * numero2}")
    
    elif opcion == 4:
        print("Saliendo del programa...")
    
    else:
        print("Opción no válida. Intenta de nuevo.")
```

El programa utiliza un bucle `while` que repite un menú de opciones hasta que el usuario elija salir. Dependiendo de la opción seleccionada, se realizan distintas operaciones matemáticas básicas.

### Salida esperada (ejemplo)

```
Menú de operaciones:
1. Sumar dos números
2. Restar dos números
3. Multiplicar dos números
4. Salir
Elige una opción (1-4): 1
Introduce el primer número: 5
Introduce el segundo número: 3
La suma es: 8.0
Menú de operaciones:
1. Sumar dos números
2. Restar dos números
3. Multiplicar dos números
4. Salir
Elige una opción (1-4): 4
Saliendo del programa...
```

## Ejercicio 11: adivinar un número con límite de intentos

Escribe un programa que permita al usuario adivinar un número secreto entre 1 y 10, con un máximo de 5 intentos. Si el usuario acierta el número, el programa debe finalizar con un mensaje de felicitación. Es obligatorio el uso de la instrucción `break`.

### Solución

```python
# Definir el número secreto
numero_secreto = 7

# Inicializar el número de intentos
intentos = 0

# Usar un bucle para permitir hasta 5 intentos
while intentos < 5:
    numero = int(input("Adivina el número (entre 1 y 10): "))
    
    if numero == numero_secreto:
        print("¡Felicidades! Has adivinado el número.")
        break  # Salir del bucle si el número es correcto
    else:
        print("Número incorrecto. Inténtalo de nuevo.")
    
    intentos += 1

if intentos == 5 and numero != numero_secreto:
    print("Lo siento, has agotado todos los intentos.")
```

El bucle `while` permite que el usuario adivine el número secreto en un máximo de 5 intentos. Si el usuario acierta, usamos `break` para detener el bucle y terminar el programa. Si no, el bucle continúa hasta agotar los intentos.

### Salida esperada (ejemplo)

```
Adivina el número (entre 1 y 10): 3
Número incorrecto. Inténtalo de nuevo.
Adivina el número (entre 1 y 10): 7
¡Felicidades! Has adivinado el número.
```

## Ejercicio 12: imprimir números impares entre 1 y 10

Escribe un programa que imprima los números impares entre 1 y 10, usando `continue` para omitir los números pares.

### Solución

```python
# Usar un bucle for para recorrer los números del 1 al 10
for numero in range(1, 11):
    if numero % 2 == 0:
        continue  # Omitir el resto del bucle si el número es par
    print(numero)
```

En este bucle `for`, usamos `continue` para saltar la iteración actual si el número es par. Esto asegura que solo se imprimen los números impares entre 1 y 10.

### Salida esperada

```
1
3
5
7
9
```

## Ejercicio 13: buscar un número múltiplo de 7 y menor que 100

Escribe un programa que busque el primer número múltiplo de 7 que también sea mayor que 50 y menor que 100. El programa debe saltar los números que no son múltiplos de 7 y detenerse al encontrar el primero.

### Solución

```python
# Usar un bucle for para recorrer los números del 51 al 100
for numero in range(51, 101):
    if numero % 7 != 0:
        continue  # Saltar si el número no es múltiplo de 7
    print(f"El primer múltiplo de 7 mayor que 50 es: {numero}")
    break  # Detener el bucle al encontrar el primer múltiplo de 7
```

El bucle `for` recorre los números desde 51 hasta 100. Si el número no es múltiplo de 7, `continue` salta a la siguiente iteración. Cuando encuentra un múltiplo de 7, lo imprime y luego usa `break` para detener el bucle, ya que no necesitamos buscar más números.

### Salida esperada

```
El primer múltiplo de 7 mayor que 50 es: 56
```
