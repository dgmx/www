# Ejercicios de repaso

## Nivel 2 --- Condicionales

### Ejercicio 6
Solicita un número e indica si es positivo, negativo o cero.

```python
n = float(input("Número: "))
if n > 0:
    print("Positivo")
elif n < 0:
    print("Negativo")
else:
    print("Cero")
```

### Ejercicio 7
Solicita tres números y muestra el mayor.

```python
a = float(input("Primer número: "))
b = float(input("Segundo número: "))
c = float(input("Tercer número: "))

if a >= b and a >= c:
    mayor = a
elif b >= a and b >= c:
    mayor = b
else:
    mayor = c

print("El mayor es:", mayor)
```

### Ejercicio 8
Determina si un año es bisiesto.

```python
a = int(input("Año: "))

if a % 4 == 0:
    if a % 100 == 0:
        if a % 400 == 0:
            print("Bisiesto")
        else:
            print("No bisiesto")
    else:
        print("Bisiesto")
else:
    print("No bisiesto")
```

### Ejercicio 9
Solicita una nota entre 0 y 10 y muestra su calificación cualitativa.

```python
nota = float(input("Nota (0-10): "))

if nota < 5:
    print("Suspenso")
elif nota < 7:
    print("Aprobado")
elif nota < 9:
    print("Notable")
else:
    print("Sobresaliente")
```

### Ejercicio 10
Calcula el precio final de un producto aplicando un descuento según su precio.

```python
precio = float(input("Precio: "))

if precio > 100:
    descuento = 20
elif precio > 50:
    descuento = 10
else:
    descuento = 0

final = precio - precio * descuento / 100
print("Precio final:", final)
```

## Nivel 3 --- Bucles

### Ejercicio 11
Muestra los números del 1 al 100.

```python
i = 1
while i <= 100:
    print(i, end=" ")
    i = i + 1
```

### Ejercicio 12
Muestra todos los números pares del 1 al 100.

```python
i = 1
while i <= 100:
    if i % 2 == 0:
        print(i, end=" ")
    i = i + 1
```

### Ejercicio 13
Calcula la suma de los números del 1 al n.

```python
n = int(input("n: "))
suma = 0
i = 1
while i <= n:
    suma = suma + i
    i = i + 1
print("Suma:", suma)
```

### Ejercicio 14
Solicita números hasta que el usuario introduzca cero y muestra la suma.

```python
suma = 0
while True:
    x = float(input("Número (0 para salir): "))
    if x == 0:
        break
    suma = suma + x
print("Suma:", suma)
```

### Ejercicio 15
Calcula el factorial de un número.

```python
n = int(input("n: "))
factorial = 1
i = 1
while i <= n:
    factorial = factorial * i
    i = i + 1
print("Factorial:", factorial)
```

## Nivel 4 --- Estructuras de datos

### Ejercicio 16
Crea una lista de notas y calcula su media.

```python
notas = []
cantidad = int(input("¿Cuántas notas?: "))
i = 0
while i < cantidad:
    nota = float(input("Nota: "))
    notas.append(nota)
    i = i + 1

suma = 0
i = 0
while i < len(notas):
    suma = suma + notas[i]
    i = i + 1

media = suma / len(notas)
print("Media:", media)
```

### Ejercicio 17
Cuenta cuántas notas son iguales o superiores a 5.

```python
notas = []
cantidad = int(input("¿Cuántas notas?: "))
i = 0
while i < cantidad:
    nota = float(input("Nota: "))
    notas.append(nota)
    i = i + 1

aprobadas = 0
i = 0
while i < len(notas):
    if notas[i] >= 5:
        aprobadas = aprobadas + 1
    i = i + 1

print("Aprobadas:", aprobadas)
```

### Ejercicio 18
Encuentra el valor máximo de una lista sin utilizar max().

```python
lista = []
cantidad = int(input("¿Cuántos números?: "))
i = 0
while i < cantidad:
    num = float(input("Número: "))
    lista.append(num)
    i = i + 1

maximo = lista[0]
i = 1
while i < len(lista):
    if lista[i] > maximo:
        maximo = lista[i]
    i = i + 1

print("Máximo:", maximo)
```

### Ejercicio 19
Crea un diccionario con información de un estudiante y recorre sus elementos.

```python
estudiante = {}
estudiante["nombre"] = input("Nombre: ")
estudiante["edad"] = int(input("Edad: "))
estudiante["curso"] = input("Curso: ")

for clave in estudiante:
    print(clave, ":", estudiante[clave])
```

### Ejercicio 20
Crea una lista de diccionarios que represente un grupo de estudiantes y muestra los aprobados.

```python
grupo = []
cantidad = int(input("¿Cuántos estudiantes?: "))
i = 0
while i < cantidad:
    nombre = input("Nombre: ")
    nota = float(input("Nota: "))
    estudiante = {}
    estudiante["nombre"] = nombre
    estudiante["nota"] = nota
    grupo.append(estudiante)
    i = i + 1

i = 0
while i < len(grupo):
    if grupo[i]["nota"] >= 5:
        print(grupo[i]["nombre"], "aprobado/a")
    i = i + 1
```
