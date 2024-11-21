---
title: "5. Retorno de Funciones "
parent: "Python"
---

# Retornos en Funciones de Python: Guía Completa

## 1. Retorno Básico de un Valor

En Python, la forma más simple de devolver un valor es usando la palabra clave `return`:

```python
def suma(a, b):
    return a + b

resultado = suma(5, 3)  # resultado será 8
```

## 2. Retorno de Múltiples Valores

Python permite devolver múltiples valores como una tupla:

```python
def operaciones(a, b):
    return a + b, a - b, a * b

suma, resta, multiplicacion = operaciones(10, 5)
# suma = 15, resta = 5, multiplicacion = 50
```

## 3. Retorno de Estructuras de Datos

Puedes devolver cualquier tipo de estructura de datos:

```python
def crear_diccionario():
    return {"nombre": "Juan", "edad": 30}

def crear_lista():
    return [1, 2, 3, 4, 5]
```

## 4. Retorno Condicional

Puedes usar condiciones para diferentes tipos de retorno:

```python
def validar_edad(edad):
    if edad >= 18:
        return "Mayor de edad"
    else:
        return "Menor de edad"
```

## 5. Retorno de Funciones (Funciones de Orden Superior)

Las funciones pueden devolver otras funciones:

```python
def crear_multiplicador(factor):
    def multiplicar(x):
        return x * factor
    return multiplicar

doble = crear_multiplicador(2)
resultado = doble(5)  # resultado será 10
```

## 6. Retorno con Valor por Defecto

Si no se especifica un `return`, la función devuelve `None`:

```python
def funcion_sin_return():
    print("Hola")
    # Implícitamente devuelve None

resultado = funcion_sin_return()  # resultado será None
```

## 7. Retorno Temprano

Puedes usar `return` para salir de una función en cualquier momento:

```python
def buscar_elemento(lista, elemento):
    for item in lista:
        if item == elemento:
            return True
    return False
```

## 8. Retorno de Generadores

Usando `yield`, puedes crear funciones generadoras:

```python
def generador_pares(limite):
    for i in range(limite):
        if i % 2 == 0:
            yield i

for numero in generador_pares(10):
    print(numero)  # Imprimirá 0, 2, 4, 6, 8
```

## Consejos Importantes

- Un `return` termina inmediatamente la ejecución de la función
- Puedes tener múltiples puntos de retorno en una función
- El tipo de retorno en Python es dinámico
- Usa retornos para proporcionar resultados significativos de tus funciones

## Buenas Prácticas

1. Sé consistente con los tipos de retorno
2. Documenta el tipo de retorno esperado
3. Maneja los casos de retorno de manera clara y predecible
4. Usa anotaciones de tipo para mayor claridad

```python
def suma(a: int, b: int) -> int:
    """
    Suma dos números enteros y devuelve el resultado.
    
    Args:
        a (int): Primer número
        b (int): Segundo número
    
    Returns:
        int: Suma de a y b
    """
    return a + b
```

## Consideraciones Finales

Los retornos son fundamentales en Python para:
- Transferir datos entre funciones
- Encapsular lógica de cálculo
- Crear funciones reutilizables y modulares
