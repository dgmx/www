# Ejemplos Básicos de Métodos de Listas en Python

## 1. `append()`

Agrega un elemento al final de la lista.

``` python
frutas = ["manzana", "pera"]
frutas.append("uva")
print(frutas)
```

## 2. `extend()`

Agrega varios elementos.

``` python
numeros = [1, 2]
numeros.extend([3, 4])
print(numeros)
```

## 3. `insert()`

Inserta un elemento en una posición específica.

``` python
letras = ["a", "c"]
letras.insert(1, "b")
print(letras)
```

## 4. `remove()`

Elimina la primera aparición de un valor.

``` python
colores = ["rojo", "azul", "verde", "azul"]
colores.remove("azul")
print(colores)
```

## 5. `pop()`

Elimina un elemento por índice.

``` python
nombres = ["Ana", "Luis", "Mar"]
nombres.pop(1)
print(nombres)
```

## 6. `clear()`

Vacía completamente la lista.

``` python
lista = [1, 2, 3]
lista.clear()
print(lista)
```

## 7. `index()`

Obtiene la posición de un elemento.

``` python
numeros = [10, 20, 30]
pos = numeros.index(20)
print(pos)
```

## 8. `count()`

Cuenta cuántas veces aparece un valor.

``` python
datos = [1, 2, 2, 3]
print(datos.count(2))
```

## 9. `sort()`

Ordena la lista.

``` python
numeros = [3, 1, 2]
numeros.sort()
print(numeros)
```

## 10. `reverse()`

Invierte el orden de la lista.

``` python
dias = ["lunes", "martes", "miércoles"]
dias.reverse()
print(dias)
```

## 11. `copy()`

Crea una copia de la lista.

``` python
original = [1, 2, 3]
copia = original.copy()
print(copia)
```

## 12. Slicing

``` python
numeros = [0, 1, 2, 3, 4]
sublista = numeros[1:4]
print(sublista)
```
