# Ejercicios de estructuras de datos en Python

En esta tercera tanda de ejercicios trabajamos con las estructuras de datos básicas de Python: **listas**, **tuplas**, **diccionarios** y **conjuntos**. Cada ejercicio incluye una solución comentada que puedes desplegar.

## Ejercicio 1: crear una lista y consultar sus elementos

Crea una lista con cinco asignaturas. Muestra la lista completa, cuántos elementos tiene, la primera asignatura y la última.

::: details Ver solución {close}

```python
asignaturas = ["Programación", "Bases de datos", "Redes", "Sistemas", "Seguridad"]

print("Lista:", asignaturas)
print("Número de asignaturas:", len(asignaturas))
print("Primera asignatura:", asignaturas[0])
print("Última asignatura:", asignaturas[-1])
```

**Explicación:**

- Una **lista** se crea entre corchetes y mantiene el orden de los elementos.
- `len()` devuelve el número de elementos que contiene.
- Los índices empiezan en `0`, por eso el primer elemento es `asignaturas[0]`.
- El índice `-1` accede siempre al último elemento de la lista.

:::

## Ejercicio 2: modificar una lista

Partiendo de la lista `["lunes", "martes", "miércoles"]`, añade `"jueves"` al final, inserta `"festivo"` al principio, elimina `"martes"` y muestra el resultado.

::: details Ver solución {close}

```python
dias = ["lunes", "martes", "miércoles"]

dias.append("jueves")
dias.insert(0, "festivo")
dias.remove("martes")

print(dias)
```

**Explicación:**

- `append()` añade un elemento al final de la lista.
- `insert(posicion, elemento)` coloca un elemento en la posición indicada.
- `remove()` elimina la primera aparición del valor indicado.
- Las listas son **mutables**: sus elementos se pueden cambiar sin crear una lista nueva.

:::

## Ejercicio 3: recorrer una lista y calcular la media

Dada la lista de notas `[7.5, 8, 6.5, 9, 5.5]`, recórrela con un bucle para calcular la suma total y la media.

::: details Ver solución {close}

```python
notas = [7.5, 8, 6.5, 9, 5.5]

suma = 0

for nota in notas:
    suma += nota

media = suma / len(notas)

print("Suma total:", suma)
print("Media:", media)
```

**Explicación:**

- La variable `suma` actúa como **acumulador** y empieza en `0`.
- En cada vuelta del `for` se añade una nota a la suma total.
- `len(notas)` indica cuántas notas hay para poder calcular la media.
- También se podría usar directamente `sum(notas)` para obtener la suma.

:::

## Ejercicio 4: obtener porciones de una lista

Crea la lista de números del `0` al `9`. Muestra los tres primeros, los dos últimos, los elementos desde la posición `3` hasta la `7` (sin incluir esta última) y la lista completa en orden inverso.

::: details Ver solución {close}

```python
numeros = list(range(10))

print("Tres primeros:", numeros[:3])
print("Dos últimos:", numeros[-2:])
print("Desde la posición 3 hasta la 7:", numeros[3:7])
print("Orden inverso:", numeros[::-1])
```

**Explicación:**

- El **slicing** `lista[inicio:fin]` toma elementos desde `inicio` hasta `fin - 1`.
- Si se omite el inicio, se empieza desde el principio; si se omite el fin, se llega al final.
- Los índices negativos cuentan desde el final de la lista.
- `[::-1]` recorre la lista con paso `-1`, devolviéndola invertida.

:::

## Ejercicio 5: buscar un elemento en una lista

Pide al usuario el nombre de una asignatura y comprueba si está en la lista `["Programación", "Bases de datos", "Redes", "Sistemas"]`. Si está, muestra su posición; si no, indica que no se ha encontrado.

::: details Ver solución {close}

```python
asignaturas = ["Programación", "Bases de datos", "Redes", "Sistemas"]

buscada = input("Introduce una asignatura: ")

if buscada in asignaturas:
    print("Está en la posición", asignaturas.index(buscada))
else:
    print("La asignatura no está en la lista")
```

**Explicación:**

- El operador `in` comprueba si un valor pertenece a la lista.
- `index()` devuelve la posición de la primera aparición del elemento.
- Es importante comprobar antes con `in`, porque `index()` lanza un error si el valor no existe.
- La búsqueda distingue mayúsculas y minúsculas, por lo que `"redes"` no coincide con `"Redes"`.

:::

## Ejercicio 6: trabajar con listas anidadas

Dada la matriz `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`, muestra cada fila junto a su suma y extrae los elementos de la diagonal principal.

::: details Ver solución {close}

```python
matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for fila in matriz:
    print("Fila:", fila, "Suma:", sum(fila))

diagonal = [matriz[i][i] for i in range(len(matriz))]

print("Diagonal principal:", diagonal)
```

**Explicación:**

- Una **lista anidada** es una lista que contiene otras listas.
- `matriz[i][j]` accede primero a la fila `i` y después al elemento `j` de esa fila.
- `sum(fila)` suma todos los números de una fila.
- La diagonal principal está formada por los elementos con el mismo índice de fila y columna: `matriz[0][0]`, `matriz[1][1]` y `matriz[2][2]`.

:::

## Ejercicio 7: crear listas con comprensión

Genera una lista con los cuadrados de los números del `1` al `10` y otra lista solo con los cuadrados de los números pares.

::: details Ver solución {close}

```python
cuadrados = [n ** 2 for n in range(1, 11)]
cuadrados_pares = [n ** 2 for n in range(1, 11) if n % 2 == 0]

print("Cuadrados:", cuadrados)
print("Cuadrados de los pares:", cuadrados_pares)
```

**Explicación:**

- La **comprensión de listas** permite crear una lista a partir de un bucle en una sola línea.
- `n ** 2` calcula el cuadrado de cada número.
- La condición `if n % 2 == 0` filtra los números pares.
- `range(1, 11)` genera los números del `1` al `10`.

:::

## Ejercicio 8: crear y consultar una tupla

Crea una tupla con el nombre, la edad y la ciudad de una persona. Muestra la tupla completa, cada dato por separado y el número de elementos.

::: details Ver solución {close}

```python
persona = ("Lucía", 17, "Sevilla")

print("Tupla completa:", persona)
print("Nombre:", persona[0])
print("Edad:", persona[1])
print("Ciudad:", persona[2])
print("Número de datos:", len(persona))
```

**Explicación:**

- Una **tupla** se crea entre paréntesis y puede contener valores de distintos tipos.
- Al igual que las listas, se accede a sus elementos por índice.
- Las tuplas son **inmutables**: no se pueden modificar después de crearlas.
- Intentar hacer `persona[1] = 18` produciría un `TypeError`.

:::

## Ejercicio 9: desempaquetar una tupla

Dada la tupla `(4, -2)`, guarda sus valores en las variables `x` e `y`. Después intercambia los valores de dos variables `a = 10` y `b = 20` utilizando una tupla.

::: details Ver solución {close}

```python
punto = (4, -2)
x, y = punto

print("x =", x)
print("y =", y)

a = 10
b = 20

a, b = b, a

print("a =", a)
print("b =", b)
```

**Explicación:**

- El **desempaquetado** asigna cada elemento de la tupla a una variable distinta.
- `x, y = punto` equivale a `x = punto[0]` e `y = punto[1]`.
- `a, b = b, a` crea una tupla con los valores de `b` y `a`, y después los asigna en el nuevo orden.
- Así se intercambian dos variables sin necesidad de una variable auxiliar.

:::

## Ejercicio 10: crear y modificar un diccionario

Crea un diccionario con el nombre y la edad de un alumno. Añade el curso, modifica la edad, elimina la edad y muestra el diccionario, sus claves y sus valores.

::: details Ver solución {close}

```python
alumno = {"nombre": "Ana", "edad": 16}

alumno["curso"] = "1º Bachillerato"
alumno["edad"] = 17
del alumno["edad"]

print("Diccionario:", alumno)
print("Claves:", list(alumno.keys()))
print("Valores:", list(alumno.values()))
```

**Explicación:**

- Un **diccionario** guarda pares de clave y valor entre llaves.
- Asignar un valor a una clave existente la modifica; si no existe, la crea.
- `del` elimina una clave y su valor asociado.
- `keys()` devuelve las claves y `values()` los valores; se convierten a lista para mostrarlos.

:::

## Ejercicio 11: recorrer un diccionario y calcular una media

Dado el diccionario de notas `{"Programación": 8.5, "Bases de datos": 7.0, "Redes": 9.0, "Sistemas": 6.5}`, muestra cada asignatura con su nota y calcula la media.

::: details Ver solución {close}

```python
notas = {
    "Programación": 8.5,
    "Bases de datos": 7.0,
    "Redes": 9.0,
    "Sistemas": 6.5
}

suma = 0

for asignatura, nota in notas.items():
    print(f"{asignatura}: {nota}")
    suma += nota

media = suma / len(notas)

print(f"Media: {media:.2f}")
```

**Explicación:**

- `items()` devuelve cada par clave-valor del diccionario.
- En el `for`, `asignatura` recibe la clave y `nota` recibe el valor.
- Se acumulan las notas para calcular la media al final.
- `len(notas)` cuenta cuántas asignaturas hay, ya que cada clave es única.

:::

## Ejercicio 12: contar la frecuencia de palabras

Dada la lista `["python", "lista", "python", "tupla", "lista", "python"]`, cuenta cuántas veces aparece cada palabra y muestra el resultado.

::: details Ver solución {close}

```python
palabras = ["python", "lista", "python", "tupla", "lista", "python"]

frecuencias = {}

for palabra in palabras:
    if palabra in frecuencias:
        frecuencias[palabra] += 1
    else:
        frecuencias[palabra] = 1

for palabra, cantidad in frecuencias.items():
    print(palabra, "->", cantidad)
```

**Explicación:**

- El diccionario `frecuencias` usa cada palabra como clave y su número de apariciones como valor.
- Si la palabra ya existe, se incrementa su contador.
- Si es la primera vez que aparece, se crea con el valor `1`.
- Una alternativa más breve sería `frecuencias[palabra] = frecuencias.get(palabra, 0) + 1`.

:::

## Ejercicio 13: operaciones básicas con conjuntos

Dados los conjuntos `A = {1, 2, 3, 4}` y `B = {3, 4, 5, 6}`, muestra su unión, su intersección, las diferencias `A - B` y `B - A`, y la diferencia simétrica.

::: details Ver solución {close}

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print("Unión:", a | b)
print("Intersección:", a & b)
print("Diferencia A - B:", a - b)
print("Diferencia B - A:", b - a)
print("Diferencia simétrica:", a ^ b)
```

**Explicación:**

- Un **conjunto** es una colección sin orden y sin elementos duplicados.
- `|` calcula la unión: elementos que están en `a`, en `b` o en ambos.
- `&` calcula la intersección: elementos que están en los dos conjuntos.
- `-` calcula la diferencia: elementos de un conjunto que no están en el otro.
- `^` calcula la diferencia simétrica: elementos que están en uno de los dos, pero no en ambos.

:::

## Ejercicio 14: eliminar duplicados con un conjunto

Dada la lista `[3, 1, 4, 1, 5, 9, 2, 6, 5, 3]`, elimina los elementos duplicados y muestra el conjunto resultante y sus elementos ordenados. Después pide un número y comprueba si estaba en la lista original.

::: details Ver solución {close}

```python
numeros = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]

unicos = set(numeros)

print("Lista original:", numeros)
print("Sin duplicados:", unicos)
print("Elementos ordenados:", sorted(unicos))

buscado = int(input("Introduce un número: "))

if buscado in unicos:
    print("El número ya estaba en la lista")
else:
    print("El número no estaba en la lista")
```

**Explicación:**

- `set(lista)` crea un conjunto y elimina automáticamente los duplicados.
- Los conjuntos no garantizan ningún orden, por eso al mostrarlos pueden aparecer en otro orden.
- `sorted(unicos)` devuelve una **lista** ordenada con los elementos del conjunto.
- Comprobar si un elemento está en un conjunto es muy eficiente.

:::

## Ejercicio 15: analizar datos con listas, tuplas, diccionarios y conjuntos

Dada la lista de tuplas `datos`, donde cada tupla contiene el nombre de un alumno, una asignatura y su nota, muestra las asignaturas sin repetir, la nota media de cada asignatura y una lista con los alumnos aprobados.

```python
datos = [
    ("Ana", "Programación", 8.5),
    ("Luis", "Programación", 6.0),
    ("Ana", "Redes", 7.5),
    ("Luis", "Redes", 9.0),
    ("Marta", "Programación", 5.0),
    ("Marta", "Redes", 4.5)
]
```

::: details Ver solución {close}

```python
datos = [
    ("Ana", "Programación", 8.5),
    ("Luis", "Programación", 6.0),
    ("Ana", "Redes", 7.5),
    ("Luis", "Redes", 9.0),
    ("Marta", "Programación", 5.0),
    ("Marta", "Redes", 4.5)
]

asignaturas = {asignatura for _, asignatura, _ in datos}
print("Asignaturas:", sorted(asignaturas))

notas_por_asignatura = {}

for _, asignatura, nota in datos:
    notas_por_asignatura.setdefault(asignatura, []).append(nota)

for asignatura in sorted(notas_por_asignatura):
    notas = notas_por_asignatura[asignatura]
    media = sum(notas) / len(notas)
    print(f"Media de {asignatura}: {media:.2f}")

aprobados = [
    (nombre, asignatura)
    for nombre, asignatura, nota in datos
    if nota >= 5
]

print("Aprobados:")
for nombre, asignatura in aprobados:
    print(f"- {nombre} ({asignatura})")
```

**Explicación:**

- Cada elemento de `datos` es una **tupla** que se puede desempaquetar en el `for`.
- El **conjunto por comprensión** `{asignatura for ...}` obtiene las asignaturas sin repetir.
- `notas_por_asignatura` es un **diccionario** que agrupa en listas todas las notas de cada asignatura.
- `setdefault(clave, [])` crea una lista vacía si la clave no existe y devuelve la lista existente.
- La **comprensión de listas** de `aprobados` filtra las tuplas cuya nota es mayor o igual que `5`.

:::
