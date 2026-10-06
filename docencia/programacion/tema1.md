

# Programación y Computación. Andalucía

### Bloque A. Programación

**Referencia curricular**

-   **PRYC.2.A.1.1.** Tipos de lenguajes. Estructura de un programa
    informático y elementos básicos del lenguaje. Tipos básicos de
    datos. Constantes y variables. Operadores y expresiones.
    Comentarios.
-   **PRYC.2.A.1.2.** Estructuras de control condicionales e iterativas.
    Estructuras de datos.
-   **PRYC.2.A.1.3.** Funciones y reutilización de código. Manipulación
    de archivos.

**Lenguaje de referencia:** Python 3.   

[Introducción a los lenguajes de programación](tema1_conceptos.md)

------------------------------------------------------------------------

# Índice

1.  Introducción a la programación
2.  Lenguajes de programación y estructura de un programa
3.  Variables, constantes y tipos de datos
4.  Operadores y expresiones
5.  Entrada, salida y comentarios
6.  Estructuras condicionales
7.  Estructuras iterativas
8.  Estructuras de datos
9.  Funciones y reutilización de código
10. Manipulación de archivos
11. Buenas prácticas, depuración y pruebas
12. Proyecto final
13. Ejercicios de repaso
14. Solucionario
15. Glosario

------------------------------------------------------------------------

# 1. Introducción a la programación

## 1.1. ¿Qué es programar?

Programar consiste en diseñar un conjunto ordenado de instrucciones que
un ordenador puede ejecutar para resolver un problema o realizar una
tarea.

Un programa suele seguir este esquema:

**Entrada → Procesamiento → Salida**

Por ejemplo, para calcular el precio final de un producto:

-   Entrada: precio y porcentaje de descuento.
-   Procesamiento: cálculo del descuento.
-   Salida: precio final.

``` python
precio = float(input("Precio: "))
descuento = float(input("Descuento (%): "))

precio_final = precio * (1 - descuento / 100)

print("Precio final:", precio_final)
```

## 1.2. Algoritmo

Un algoritmo es una secuencia finita y ordenada de pasos que permite
resolver un problema.

Un buen algoritmo debe ser:

-   preciso;
-   ordenado;
-   finito;
-   comprensible;
-   eficaz.

Antes de escribir código conviene identificar:

1.  Qué datos conocemos.
2.  Qué datos necesitamos solicitar.
3.  Qué proceso debemos realizar.
4.  Qué resultado debemos mostrar.

## 1.3. Del problema al programa

Una estrategia habitual es:

1.  Comprender el problema.
2.  Identificar entradas y salidas.
3.  Diseñar el algoritmo.
4.  Dividir el problema en partes.
5.  Implementar el código.
6.  Probar el programa.
7.  Corregir errores.
8.  Documentar y mejorar.

------------------------------------------------------------------------

# 2. Lenguajes de programación y estructura de un programa

## 2.1. Lenguajes de bajo y alto nivel

Los lenguajes de bajo nivel están más próximos al funcionamiento interno
del ordenador.

Los lenguajes de alto nivel utilizan estructuras más cercanas al
lenguaje humano y permiten desarrollar programas con mayor facilidad.

Ejemplos de lenguajes de alto nivel:

-   Python
-   Java
-   C#
-   JavaScript
-   C++

## 2.2. Compiladores e intérpretes

Un **compilador** traduce el programa a un código que posteriormente
puede ejecutarse.

Un **intérprete** ejecuta el programa mediante un proceso de
interpretación del código.

En la práctica, los lenguajes modernos pueden utilizar sistemas
híbridos. Por ello, la distinción no siempre es absoluta.

## 2.3. Python

Python es un lenguaje:

-   de alto nivel;
-   de propósito general;
-   interpretado mediante una implementación como CPython;
-   con tipado dinámico;
-   con una sintaxis relativamente sencilla;
-   compatible con programación estructurada, orientada a objetos y
    otros paradigmas.

Ejemplo:

``` python
nombre = "Ana"
edad = 17

print(nombre, edad)
```

## 2.4. Estructura básica de un programa

Un programa sencillo puede contener:

1.  Comentarios.
2.  Importaciones.
3.  Definición de constantes.
4.  Definición de funciones.
5.  Código principal.

Ejemplo:

``` python
# Programa para calcular el área de un círculo

import math

PI = math.pi

def area_circulo(radio):
    return PI * radio ** 2

radio = float(input("Radio: "))
resultado = area_circulo(radio)

print("Área:", resultado)
```

## 2.5. Sintaxis e indentación

Python utiliza la indentación para delimitar bloques de código.

Correcto:

``` python
edad = 18

if edad >= 18:
    print("Mayor de edad")
```

Incorrecto:

``` python
edad = 18

if edad >= 18:
print("Mayor de edad")
```

La indentación forma parte de la sintaxis del lenguaje.

------------------------------------------------------------------------

# 3. Variables, constantes y tipos de datos

## 3.1. Variables

Una variable es un nombre asociado a un valor que puede cambiar durante
la ejecución.

``` python
edad = 17
edad = 18
```

Después de la segunda asignación, `edad` contiene `18`.

## 3.2. Identificadores

Los nombres de variables deben seguir las reglas del lenguaje.

Buenas prácticas:

``` python
nombre_alumno = "Lucía"
numero_alumnos = 25
nota_media = 7.8
```

Evita nombres poco descriptivos:

``` python
x = 7.8
a = 25
```

salvo que el contexto lo justifique, por ejemplo, en una fórmula
matemática.

## 3.3. Constantes

Python no impone constantes mediante una palabra reservada específica.
Por convención se escriben en mayúsculas:

``` python
IVA = 0.21
PI = 3.141592653589793
```

La convención indica que esos valores no deberían modificarse.

## 3.4. Tipos básicos

### Enteros: `int`

``` python
edad = 17
numero = -8
```

### Reales: `float`

``` python
altura = 1.78
precio = 12.95
```

### Cadenas: `str`

``` python
nombre = "María"
```

### Booleanos: `bool`

Solo pueden tomar dos valores:

``` python
aprobado = True
activo = False
```

## 3.5. Comprobar el tipo

``` python
valor = 25

print(type(valor))
```

Resultado aproximado:

``` text
<class 'int'>
```

## 3.6. Conversión de tipos

``` python
numero = int("25")
decimal = float("3.14")
texto = str(100)
```

Es especialmente importante al utilizar `input()`.

``` python
edad = input("Edad: ")
```

El resultado de `input()` es siempre una cadena.

Para realizar operaciones numéricas:

``` python
edad = int(input("Edad: "))
```

------------------------------------------------------------------------

# 4. Operadores y expresiones

## 4.1. Operadores aritméticos

  Operador   Significado       Ejemplo
  ---------- ----------------- ----------
  `+`        suma              `5 + 2`
  `-`        resta             `5 - 2`
  `*`        multiplicación    `5 * 2`
  `/`        división real     `5 / 2`
  `//`       división entera   `5 // 2`
  `%`        resto             `5 % 2`
  `**`       potencia          `5 ** 2`

Ejemplo:

``` python
a = 17
b = 5

print(a + b)
print(a / b)
print(a // b)
print(a % b)
print(a ** 2)
```

## 4.2. Operadores de comparación

  Operador   Significado
  ---------- ---------------
  `==`       igual
  `!=`       distinto
  `<`        menor
  `>`        mayor
  `<=`       menor o igual
  `>=`       mayor o igual

Ejemplo:

``` python
edad = 18

print(edad >= 18)
```

## 4.3. Operadores lógicos

  Operador   Significado
  ---------- -------------
  `and`      Y
  `or`       O
  `not`      Negación

Ejemplo:

``` python
edad = 20
tiene_carnet = True

puede_conducir = edad >= 18 and tiene_carnet
```

## 4.4. Asignación

``` python
x = 10
x += 5
x -= 2
x *= 3
x /= 2
```

## 4.5. Precedencia

Las operaciones siguen un orden de evaluación. Como regla general:

1.  Paréntesis.
2.  Potencias.
3.  Multiplicaciones, divisiones, divisiones enteras y restos.
4.  Sumas y restas.
5.  Comparaciones.
6.  Operadores lógicos.

Cuando exista duda, utiliza paréntesis:

``` python
resultado = (a + b) * c
```

------------------------------------------------------------------------

# 5. Entrada, salida y comentarios

## 5.1. Entrada con `input()`

``` python
nombre = input("Nombre: ")
```

## 5.2. Salida con `print()`

``` python
print("Hola", nombre)
```

## 5.3. Formateo de cadenas

La forma recomendada es utilizar f-strings:

``` python
nombre = "Luis"
nota = 8.5

print(f"{nombre} ha obtenido un {nota}")
```

## 5.4. Comentarios

Los comentarios explican el código y no son ejecutados.

``` python
# Calculamos el precio con IVA
precio_final = precio * 1.21
```

Un comentario útil explica el **porqué** cuando este no resulta evidente
en el código.

------------------------------------------------------------------------

# 6. Estructuras condicionales

## 6.1. Condicional simple

``` python
edad = int(input("Edad: "))

if edad >= 18:
    print("Es mayor de edad")
```

## 6.2. `if ... else`

``` python
edad = int(input("Edad: "))

if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
```

## 6.3. `if ... elif ... else`

``` python
nota = float(input("Nota: "))

if nota < 5:
    print("Insuficiente")
elif nota < 7:
    print("Aprobado")
elif nota < 9:
    print("Notable")
else:
    print("Sobresaliente")
```

## 6.4. Condiciones compuestas

``` python
edad = int(input("Edad: "))

if 16 <= edad <= 18:
    print("Edad entre 16 y 18")
```

También:

``` python
usuario = input("Usuario: ")
contraseña = input("Contraseña: ")

if usuario == "admin" and contraseña == "1234":
    print("Acceso concedido")
else:
    print("Acceso denegado")
```

## 6.5. Condicionales anidados

``` python
nota = float(input("Nota: "))

if nota >= 5:
    if nota >= 9:
        print("Sobresaliente")
    else:
        print("Aprobado")
else:
    print("Suspenso")
```

Siempre que sea posible, conviene evitar una anidación innecesariamente
compleja.

------------------------------------------------------------------------

# 7. Estructuras iterativas

Una estructura iterativa permite repetir un bloque de instrucciones.

## 7.1. Bucle `for`

``` python
for i in range(5):
    print(i)
```

Produce:

``` text
0
1
2
3
4
```

## 7.2. `range()`

``` python
range(fin)
range(inicio, fin)
range(inicio, fin, paso)
```

Ejemplo:

``` python
for i in range(2, 11, 2):
    print(i)
```

Salida:

``` text
2
4
6
8
10
```

## 7.3. Recorrer una lista

``` python
notas = [7, 8.5, 6, 9]

for nota in notas:
    print(nota)
```

## 7.4. Bucle `while`

Se utiliza cuando la repetición depende de una condición.

``` python
numero = 1

while numero <= 5:
    print(numero)
    numero += 1
```

Es fundamental modificar adecuadamente la condición para evitar bucles
infinitos.

## 7.5. `break`

Interrumpe el bucle:

``` python
while True:
    numero = int(input("Número positivo: "))

    if numero > 0:
        break
```

## 7.6. `continue`

Salta a la siguiente iteración:

``` python
for numero in range(1, 11):
    if numero % 2 == 0:
        continue

    print(numero)
```

## 7.7. Contadores y acumuladores

Contador:

``` python
contador = 0

for numero in range(1, 11):
    if numero % 2 == 0:
        contador += 1

print("Hay", contador, "números pares")
```

Acumulador:

``` python
suma = 0

for numero in range(1, 6):
    suma += numero

print(suma)
```

------------------------------------------------------------------------

# 8. Estructuras de datos

## 8.1. Listas

Una lista almacena una colección ordenada y modificable.

``` python
frutas = ["manzana", "pera", "plátano"]
```

Acceso mediante índices:

``` python
print(frutas[0])
print(frutas[-1])
```

Modificar:

``` python
frutas[1] = "naranja"
```

Añadir:

``` python
frutas.append("kiwi")
```

Eliminar:

``` python
frutas.remove("manzana")
```

Longitud:

``` python
print(len(frutas))
```

## 8.2. Recorrer listas

``` python
notas = [6, 7, 8, 9]

for nota in notas:
    print(nota)
```

También puede utilizarse `enumerate()`:

``` python
for posicion, nota in enumerate(notas):
    print(posicion, nota)
```

## 8.3. Tuplas

Las tuplas son secuencias ordenadas que no se pueden modificar después
de crearse.

``` python
coordenadas = (10, 20)
```

Son apropiadas para representar agrupaciones de datos que no deben
cambiar.

## 8.4. Diccionarios

Un diccionario almacena pares **clave-valor**.

``` python
alumno = {
    "nombre": "Laura",
    "edad": 17,
    "nota": 8.5
}
```

Acceso:

``` python
print(alumno["nombre"])
```

Modificar:

``` python
alumno["nota"] = 9
```

Añadir:

``` python
alumno["curso"] = "2º Bachillerato"
```

Recorrer:

``` python
for clave, valor in alumno.items():
    print(clave, valor)
```

## 8.5. Conjuntos

Un conjunto (`set`) almacena elementos sin duplicados.

``` python
numeros = {1, 2, 3, 3, 4}

print(numeros)
```

El resultado contiene cada elemento una sola vez.

## 8.6. Estructuras anidadas

Las estructuras pueden combinarse:

``` python
alumnos = [
    {"nombre": "Ana", "nota": 8},
    {"nombre": "Luis", "nota": 6.5},
    {"nombre": "Marta", "nota": 9}
]

for alumno in alumnos:
    print(alumno["nombre"], alumno["nota"])
```

Este patrón es especialmente útil en pequeños programas de gestión de
datos.

------------------------------------------------------------------------

# 9. Funciones y reutilización de código

## 9.1. ¿Qué es una función?

Una función es un bloque de código identificado por un nombre que puede
ejecutarse cuando sea necesario.

``` python
def saludar():
    print("Hola")
```

Llamada:

``` python
saludar()
```

## 9.2. Parámetros

``` python
def saludar(nombre):
    print(f"Hola, {nombre}")
```

Uso:

``` python
saludar("Ana")
saludar("Luis")
```

## 9.3. Retorno de valores

``` python
def sumar(a, b):
    return a + b
```

Uso:

``` python
resultado = sumar(4, 7)
print(resultado)
```

## 9.4. Parámetros por defecto

``` python
def saludar(nombre, saludo="Hola"):
    print(f"{saludo}, {nombre}")
```

## 9.5. Ámbito de las variables

Una variable creada dentro de una función normalmente tiene ámbito
local:

``` python
def ejemplo():
    mensaje = "Hola"
    print(mensaje)
```

`mensaje` no debe considerarse una variable global disponible para todo
el programa.

## 9.6. Modularización

Un programa grande debe dividirse en funciones con responsabilidades
claras.

Ejemplo:

``` python
def pedir_numero():
    return float(input("Número: "))

def calcular_cuadrado(numero):
    return numero ** 2

def mostrar_resultado(resultado):
    print(f"Resultado: {resultado}")

numero = pedir_numero()
resultado = calcular_cuadrado(numero)
mostrar_resultado(resultado)
```

La modularización mejora:

-   legibilidad;
-   reutilización;
-   mantenimiento;
-   pruebas;
-   detección de errores.

------------------------------------------------------------------------

# 10. Manipulación de archivos

## 10.1. ¿Por qué utilizar archivos?

Las variables desaparecen al terminar el programa. Los archivos permiten
conservar información.

Ejemplos:

-   notas;
-   listas de alumnado;
-   configuraciones;
-   resultados;
-   registros.

## 10.2. Abrir un archivo

La forma recomendada es:

``` python
with open("datos.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()
```

`with` garantiza que el archivo se gestione correctamente al terminar el
bloque.

## 10.3. Modos habituales

  Modo   Función
  ------ --------------------------------------
  `r`    lectura
  `w`    escritura, sustituyendo el contenido
  `a`    añadir al final
  `x`    crear si no existe

## 10.4. Leer todo el contenido

``` python
with open("datos.txt", "r", encoding="utf-8") as archivo:
    contenido = archivo.read()

print(contenido)
```

## 10.5. Leer línea a línea

``` python
with open("datos.txt", "r", encoding="utf-8") as archivo:
    for linea in archivo:
        print(linea.strip())
```

## 10.6. Escribir

``` python
with open("salida.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Primera línea\n")
    archivo.write("Segunda línea\n")
```

## 10.7. Añadir contenido

``` python
with open("salida.txt", "a", encoding="utf-8") as archivo:
    archivo.write("Nueva línea\n")
```

## 10.8. Procesar un archivo

Supongamos que `notas.txt` contiene una nota por línea:

``` text
7
8.5
6
9
```

Podemos calcular la media:

``` python
notas = []

with open("notas.txt", "r", encoding="utf-8") as archivo:
    for linea in archivo:
        notas.append(float(linea.strip()))

media = sum(notas) / len(notas)

print(f"Media: {media:.2f}")
```

------------------------------------------------------------------------

# 11. Buenas prácticas, depuración y pruebas

## 11.1. Errores frecuentes

### Error de sintaxis

El programa no respeta las reglas del lenguaje.

``` python
if edad >= 18
    print("Mayor")
```

Falta `:`.

### Error de ejecución

El programa comienza a ejecutarse pero se produce un problema.

``` python
numero = int("hola")
```

### Error lógico

El programa funciona, pero produce un resultado incorrecto.

``` python
media = suma / cantidad + 1
```

Si el algoritmo requiere otra operación, el programa puede ejecutarse
sin lanzar una excepción y, aun así, estar equivocado.

## 11.2. Pruebas

Un programa debe probarse con distintos casos:

-   valores normales;
-   valores mínimos;
-   valores máximos;
-   valores límite;
-   entradas inesperadas.

Ejemplo: para comprobar si un número es positivo:

    Entrada Resultado esperado
  --------- --------------------
          8 positivo
          1 positivo
          0 no positivo
         -4 no positivo

## 11.3. Validación de datos

``` python
while True:
    edad = int(input("Edad: "))

    if 0 <= edad <= 120:
        break

    print("Edad no válida.")
```

------------------------------------------------------------------------

# 12. Proyecto final: gestor de notas

## 12.1. Objetivo

Desarrollar un programa que permita gestionar las notas de un grupo de
estudiantes.

El programa deberá:

1.  Añadir estudiantes.
2.  Consultar estudiantes.
3.  Mostrar la media.
4.  Indicar quién ha aprobado.
5.  Guardar los datos en un archivo.
6.  Recuperar los datos desde un archivo.
7.  Utilizar funciones.
8.  Utilizar estructuras de datos.
9.  Incorporar un menú.

## 12.2. Diseño de los datos

Podemos utilizar una lista de diccionarios:

``` python
alumnos = [
    {"nombre": "Ana", "nota": 8.5},
    {"nombre": "Luis", "nota": 6.0}
]
```

## 12.3. Funciones previstas

``` text
mostrar_menu()
añadir_alumno()
mostrar_alumnos()
calcular_media()
guardar_archivo()
cargar_archivo()
```

## 12.4. Implementación orientativa

``` python
def mostrar_menu():
    print("\n--- GESTOR DE NOTAS ---")
    print("1. Añadir alumno")
    print("2. Mostrar alumnos")
    print("3. Calcular media")
    print("4. Guardar")
    print("5. Salir")


def añadir_alumno(alumnos):
    nombre = input("Nombre: ")
    nota = float(input("Nota: "))

    alumnos.append({
        "nombre": nombre,
        "nota": nota
    })


def mostrar_alumnos(alumnos):
    if not alumnos:
        print("No hay alumnos.")
        return

    for alumno in alumnos:
        print(f"{alumno['nombre']}: {alumno['nota']}")


def calcular_media(alumnos):
    if not alumnos:
        return 0

    return sum(alumno["nota"] for alumno in alumnos) / len(alumnos)


def guardar_archivo(alumnos, nombre_archivo="alumnos.txt"):
    with open(nombre_archivo, "w", encoding="utf-8") as archivo:
        for alumno in alumnos:
            archivo.write(
                f"{alumno['nombre']};{alumno['nota']}\n"
            )


def cargar_archivo(nombre_archivo="alumnos.txt"):
    alumnos = []

    try:
        with open(nombre_archivo, "r", encoding="utf-8") as archivo:
            for linea in archivo:
                nombre, nota = linea.strip().split(";")
                alumnos.append({
                    "nombre": nombre,
                    "nota": float(nota)
                })
    except FileNotFoundError:
        pass

    return alumnos


alumnos = cargar_archivo()

while True:
    mostrar_menu()
    opcion = input("Opción: ")

    if opcion == "1":
        añadir_alumno(alumnos)

    elif opcion == "2":
        mostrar_alumnos(alumnos)

    elif opcion == "3":
        media = calcular_media(alumnos)
        print(f"Media: {media:.2f}")

    elif opcion == "4":
        guardar_archivo(alumnos)
        print("Datos guardados.")

    elif opcion == "5":
        guardar_archivo(alumnos)
        print("Programa finalizado.")
        break

    else:
        print("Opción no válida.")
```

## 12.5. Mejoras propuestas

Una vez terminado el programa básico, se pueden añadir:

-   validación de notas entre 0 y 10;
-   búsqueda por nombre;
-   eliminación de estudiantes;
-   cálculo de máxima y mínima;
-   número de aprobados;
-   porcentaje de aprobados;
-   ordenación por nota;
-   estadísticas;
-   separación del código en varios módulos;
-   gestión de errores de entrada.

------------------------------------------------------------------------

# 13. Ejercicios de repaso

## Nivel 1 --- Fundamentos

### Ejercicio 1

Solicita el nombre y la edad de una persona y muestra un mensaje con
ambos datos.

### Ejercicio 2

Solicita dos números y muestra suma, resta, multiplicación y división.

### Ejercicio 3

Calcula el área de un círculo a partir de su radio.

### Ejercicio 4

Convierte una cantidad de minutos en horas y minutos.

### Ejercicio 5

Solicita una nota y determina si está aprobada.

------------------------------------------------------------------------

## Nivel 2 --- Condicionales

### Ejercicio 6

Solicita un número e indica si es positivo, negativo o cero.

### Ejercicio 7

Solicita tres números y muestra el mayor.

### Ejercicio 8

Determina si un año es bisiesto.

### Ejercicio 9

Solicita una nota entre 0 y 10 y muestra su calificación cualitativa.

### Ejercicio 10

Calcula el precio final de un producto aplicando un descuento según su
precio.

------------------------------------------------------------------------

## Nivel 3 --- Bucles

### Ejercicio 11

Muestra los números del 1 al 100.

### Ejercicio 12

Muestra todos los números pares del 1 al 100.

### Ejercicio 13

Calcula la suma de los números del 1 al `n`.

### Ejercicio 14

Solicita números hasta que el usuario introduzca cero y muestra la suma.

### Ejercicio 15

Calcula el factorial de un número.

------------------------------------------------------------------------

## Nivel 4 --- Estructuras de datos

### Ejercicio 16

Crea una lista de notas y calcula su media.

### Ejercicio 17

Cuenta cuántas notas son iguales o superiores a 5.

### Ejercicio 18

Encuentra el valor máximo de una lista sin utilizar `max()`.

### Ejercicio 19

Crea un diccionario con información de un estudiante y recorre sus
elementos.

### Ejercicio 20

Crea una lista de diccionarios que represente un grupo de estudiantes y
muestra los aprobados.

------------------------------------------------------------------------

## Nivel 5 --- Funciones

### Ejercicio 21

Crea una función que reciba un número y devuelva su cuadrado.

### Ejercicio 22

Crea una función que determine si un número es primo.

### Ejercicio 23

Crea una función que reciba una lista de notas y devuelva la media.

### Ejercicio 24

Divide un programa de gestión de notas en varias funciones.

------------------------------------------------------------------------

## Nivel 6 --- Archivos

### Ejercicio 25

Crea un archivo de texto con diez números y calcula su suma.

### Ejercicio 26

Lee un archivo y cuenta sus líneas.

### Ejercicio 27

Lee un archivo de notas y calcula la media.

### Ejercicio 28

Crea un programa que permita añadir líneas a un archivo.

------------------------------------------------------------------------

# 14. Solucionario

## Solución 1

``` python
nombre = input("Nombre: ")
edad = int(input("Edad: "))

print(f"{nombre} tiene {edad} años.")
```

## Solución 2

``` python
a = float(input("Primer número: "))
b = float(input("Segundo número: "))

print("Suma:", a + b)
print("Resta:", a - b)
print("Multiplicación:", a * b)

if b != 0:
    print("División:", a / b)
else:
    print("No se puede dividir entre cero.")
```

## Solución 3

``` python
import math

radio = float(input("Radio: "))
area = math.pi * radio ** 2

print(f"Área: {area:.2f}")
```

## Solución 5

``` python
nota = float(input("Nota: "))

if nota >= 5:
    print("Aprobado")
else:
    print("Suspenso")
```

## Solución 6

``` python
numero = float(input("Número: "))

if numero > 0:
    print("Positivo")
elif numero < 0:
    print("Negativo")
else:
    print("Cero")
```

## Solución 7

``` python
a = float(input("Número 1: "))
b = float(input("Número 2: "))
c = float(input("Número 3: "))

mayor = a

if b > mayor:
    mayor = b

if c > mayor:
    mayor = c

print("Mayor:", mayor)
```

## Solución 11

``` python
for numero in range(1, 101):
    print(numero)
```

## Solución 13

``` python
n = int(input("n: "))

suma = 0

for numero in range(1, n + 1):
    suma += numero

print("Suma:", suma)
```

## Solución 15

``` python
n = int(input("Número: "))

factorial = 1

for numero in range(1, n + 1):
    factorial *= numero

print("Factorial:", factorial)
```

## Solución 16

``` python
notas = [7, 8.5, 6, 9, 5]

media = sum(notas) / len(notas)

print(f"Media: {media:.2f}")
```

## Solución 18

``` python
numeros = [8, 3, 12, 5, 9]

mayor = numeros[0]

for numero in numeros[1:]:
    if numero > mayor:
        mayor = numero

print("Mayor:", mayor)
```

## Solución 21

``` python
def cuadrado(numero):
    return numero ** 2


resultado = cuadrado(5)

print(resultado)
```

## Solución 22

``` python
def es_primo(numero):
    if numero < 2:
        return False

    for divisor in range(2, int(numero ** 0.5) + 1):
        if numero % divisor == 0:
            return False

    return True


numero = int(input("Número: "))

if es_primo(numero):
    print("Es primo")
else:
    print("No es primo")
```

## Solución 25

``` python
suma = 0

with open("numeros.txt", "r", encoding="utf-8") as archivo:
    for linea in archivo:
        suma += float(linea.strip())

print("Suma:", suma)
```

------------------------------------------------------------------------

# 15. Glosario

**Algoritmo:** conjunto finito y ordenado de pasos para resolver un
problema.

**Argumento:** valor que se proporciona a una función cuando se llama.

**Bucle:** estructura que permite repetir instrucciones.

**Compilador:** programa que traduce código fuente a otra representación
ejecutable o intermedia.

**Condición:** expresión cuyo resultado permite decidir qué
instrucciones ejecutar.

**Constante:** valor que, por convención, no se modifica durante la
ejecución.

**Diccionario:** estructura de datos basada en pares clave-valor.

**Función:** bloque reutilizable de código que realiza una tarea.

**Índice:** posición utilizada para acceder a un elemento de una
secuencia.

**Iteración:** repetición de un conjunto de instrucciones.

**Lista:** colección ordenada y modificable de elementos.

**Parámetro:** variable definida en la declaración de una función.

**Programa:** conjunto de instrucciones que puede ejecutar un ordenador.

**Variable:** nombre asociado a un valor que puede cambiar.

------------------------------------------------------------------------

# Relación con el currículo

Este manual desarrolla directamente los saberes básicos proporcionados
para el **Bloque A. Programación**:

## PRYC.2.A.1.1

Se trabajan:

-   tipos de lenguajes;
-   estructura de programas;
-   elementos básicos del lenguaje;
-   tipos básicos de datos;
-   variables;
-   constantes;
-   operadores;
-   expresiones;
-   comentarios.

## PRYC.2.A.1.2

Se trabajan:

-   estructuras condicionales;
-   estructuras iterativas;
-   contadores y acumuladores;
-   listas;
-   tuplas;
-   diccionarios;
-   conjuntos;
-   estructuras anidadas.

## PRYC.2.A.1.3

Se trabajan:

-   funciones;
-   parámetros;
-   retorno de valores;
-   ámbito;
-   modularización;
-   reutilización de código;
-   lectura de archivos;
-   escritura de archivos;
-   procesamiento de información almacenada.

------------------------------------------------------------------------

# Recomendaciones para el aprendizaje

La programación se aprende principalmente **programando**. La lectura de
teoría debe acompañarse de experimentación y resolución de problemas.

Una metodología recomendable es:

1.  Leer el problema.
2.  Identificar entradas y salidas.
3.  Escribir el algoritmo en lenguaje natural.
4.  Transformarlo en código.
5.  Ejecutarlo con datos sencillos.
6.  Comprobar casos límite.
7.  Analizar los errores.
8.  Mejorar la solución.
9.  Dividir el código en funciones cuando sea necesario.
10. Documentar las decisiones relevantes.

## Checklist antes de entregar un programa

-   [ ] El programa resuelve el problema planteado.
-   [ ] Las variables tienen nombres descriptivos.
-   [ ] El código está correctamente indentado.
-   [ ] Las funciones tienen responsabilidades claras.
-   [ ] Se validan las entradas cuando es necesario.
-   [ ] Se han probado casos normales y casos límite.
-   [ ] No existen errores de sintaxis.
-   [ ] No existen errores lógicos conocidos.
-   [ ] Los archivos se abren utilizando `with`.
-   [ ] Los comentarios aportan información útil.
-   [ ] El código es legible y mantenible.

------------------------------------------------------------------------

# Proyecto de ampliación

Como actividad final del bloque, desarrolla una aplicación de gestión
académica que permita:

-   registrar estudiantes;
-   almacenar varias notas por estudiante;
-   calcular medias;
-   determinar aprobados y suspensos;
-   buscar estudiantes;
-   ordenar resultados;
-   guardar información en archivos;
-   recuperar información al iniciar el programa;
-   utilizar un menú;
-   dividir la aplicación en funciones.

### Requisitos técnicos mínimos

El proyecto deberá incluir obligatoriamente:

-   variables;
-   operadores y expresiones;
-   condicionales;
-   bucles;
-   al menos dos estructuras de datos;
-   funciones con parámetros;
-   funciones con valores de retorno;
-   lectura de archivos;
-   escritura de archivos;
-   tratamiento básico de errores;
-   comentarios y nombres descriptivos.

### Reto adicional

Añade un sistema de estadísticas que muestre:

-   número total de estudiantes;
-   media del grupo;
-   nota máxima;
-   nota mínima;
-   número de aprobados;
-   porcentaje de aprobados;
-   estudiante con mayor nota.

------------------------------------------------------------------------

## Fin del manual

**Programación y Computación --- 2.º de Bachillerato**

**Bloque A. Programación · Python 3**
