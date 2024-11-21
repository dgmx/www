---
title: "3. Slicing en Python"
parent: "Python"
---

# Slicing en Python

El **slicing** en Python es una técnica usada para obtener una parte o un subconjunto de elementos de una secuencia, como una lista, cadena de texto o tupla. Es una herramienta muy útil para trabajar con datos en Python, ya que permite extraer elementos de forma sencilla y precisa.

## Sintaxis básica de Slicing
La sintaxis básica para realizar slicing es:
```python
secuencia[inicio:fin:paso]
```

- **`inicio`**: El índice desde donde se empieza a extraer los elementos. Si no se especifica, se toma el primer elemento de la secuencia (índice `0`).
- **`fin`**: El índice donde se termina de extraer elementos (no incluye el índice de `fin` en el resultado). Si no se especifica, se asume hasta el final de la secuencia.
- **`paso`**: La cantidad de elementos a saltar entre cada uno (por defecto es `1`).

## Ejemplos de Slicing en Python

### 1. Extraer una subcadena de texto
```python
texto = "Python es divertido"
subcadena = texto[0:6]  # Extrae los primeros 6 caracteres
print(subcadena)  # Salida: Python
```

### 2. Slicing en una lista
```python
numeros = [10, 20, 30, 40, 50, 60, 70]
subset = numeros[1:5]  # Extrae elementos desde el índice 1 hasta el 4
print(subset)  # Salida: [20, 30, 40, 50]
```

### 3. Usar el paso para saltos
```python
lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
saltos = lista[0:10:2]  # Extrae cada 2 elementos desde el inicio hasta el índice 10
print(saltos)  # Salida: [0, 2, 4, 6, 8]
```

### 4. Slicing con índices negativos
En Python, los índices negativos permiten empezar a contar desde el final de la secuencia.
```python
letras = ["a", "b", "c", "d", "e", "f"]
inverso = letras[-4:-1]  # Extrae desde el cuarto al final hasta el segundo al final
print(inverso)  # Salida: ['c', 'd', 'e']
```

### 5. Invertir una secuencia con slicing
```python
texto = "Python"
invertido = texto[::-1]  # Al usar un paso de -1 se invierte la secuencia
print(invertido)  # Salida: nohtyP
```

### 6. Omitir `inicio` o `fin`
```python
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9]
inicio_omitido = lista[:4]  # Solo se especifica el fin
fin_omitido = lista[4:]  # Solo se especifica el inicio
print(inicio_omitido)  # Salida: [1, 2, 3, 4]
print(fin_omitido)     # Salida: [5, 6, 7, 8, 9]
```

### 7. Copiar una lista usando slicing
Una forma rápida de copiar una lista es usando el operador de slicing sin parámetros.
```python
original = [1, 2, 3, 4]
copia = original[:]
print(copia)  # Salida: [1, 2, 3, 4]
```

## Resumen de ejemplos
- **Extraer subcadena o sublista**: `secuencia[inicio:fin]`
- **Con paso**: `secuencia[inicio:fin:paso]`
- **Invertir secuencia**: `secuencia[::-1]`
- **Índices negativos**: `secuencia[-inicio:-fin]`
- **Copiar secuencia**: `secuencia[:]`
