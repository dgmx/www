---
title: "8. Métodos Especiales en Python "
parent: "Python"
---

# Métodos Especiales en Python (Programación Orientada a Objetos)

## Introducción
Los métodos especiales, también conocidos como métodos mágicos o dunder methods, permiten personalizar el comportamiento de las clases y objetos en Python.

## 1. Métodos de Inicialización y Construcción

### `__init__()` - Constructor
```python
class Ejemplo:
    def __init__(self, parametro):
        # Constructor, se llama al crear un objeto
        self.parametro = parametro
```

### `__new__()` - Método de Construcción
```python
def __new__(cls, *args, **kwargs):
    # Permite modificar la creación de instancias
    return super().__new__(cls)
```

## 2. Métodos de Representación

### `__str__()` - Representación para Humanos
```python
def __str__(self):
    # Usado por str(), print()
    return f"Representación legible"
```

### `__repr__()` - Representación para Desarrolladores
```python
def __repr__(self):
    # Representación oficial, detallada
    return f"Clase(parametro1='valor', parametro2=valor)"
```

## 3. Métodos de Comparación

```python
def __eq__(self, otro):  # Igualdad (==)
    return self.valor == otro.valor

def __lt__(self, otro):  # Menor que (<)
    return self.valor < otro.valor

def __gt__(self, otro):  # Mayor que (>)
    return self.valor > otro.valor
```

## 4. Métodos Aritméticos

```python
def __add__(self, otro):  # Suma (+)
    return Clase(self.valor + otro.valor)

def __mul__(self, escalar):  # Multiplicación (*)
    return Clase(self.valor * escalar)
```

## 5. Métodos de Acceso a Elementos

```python
def __getitem__(self, indice):
    # Acceso con corchetes []
    return self.lista[indice]

def __setitem__(self, indice, valor):
    # Asignación con corchetes []
    self.lista[indice] = valor
```

## 6. Métodos de Contexto

```python
def __enter__(self):
    # Al inicio de un bloque with
    return self.recurso

def __exit__(self, exc_type, exc_val, exc_tb):
    # Al final de un bloque with
    self.recurso.close()
```

## 7. Métodos de Llamada

```python
def __call__(self, *args, **kwargs):
    # Permite llamar a la instancia como función
    return self.procesar(*args, **kwargs)
```

## 8. Métodos de Longitud y Contenido

```python
def __len__(self):
    # Longitud (len())
    return len(self.elementos)

def __contains__(self, item):
    # Operador 'in'
    return item in self.elementos
```

## Otros Métodos Especiales Importantes

- `__del__()`: Destructor
- `__iter__()`: Hace un objeto iterable
- `__next__()`: Para iteradores
- `__getattr__()`: Manejo de atributos no existentes
- `__hash__()`: Hace un objeto hash (usable en sets)

## Conclusión
Los métodos especiales permiten personalizar profundamente el comportamiento de clases en Python, integrándose de manera natural con las características del lenguaje.

## Consejos
- Usar con moderación
- Mantener la intuitividad
- Seguir las convenciones de Python
