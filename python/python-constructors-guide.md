---
title: "7. Métodos Constructores en Python "
parent: "Python"
---

# Métodos Constructores en Python: Una Guía Completa

## 1. Introducción a los Constructores

Un constructor en Python es un método especial dentro de una clase que se llama automáticamente cuando se crea una nueva instancia de esa clase. Su propósito principal es inicializar los atributos del objeto.

### Características Principales:
- Se define utilizando el método `__init__()`
- Se ejecuta automáticamente al crear un nuevo objeto
- Permite establecer valores iniciales para los atributos del objeto
- El primer parámetro siempre es `self`

## 2. Sintaxis Básica

```python
class NombreClase:
    def __init__(self, parametros):
        # Inicialización de atributos
        self.atributo = parametros
```

## 3. Ejemplos Detallados

### 3.1 Constructor Simple

```python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

# Creación de instancias
persona1 = Persona("Juan", 30)
persona2 = Persona("María", 25)

print(persona1.nombre)  # Salida: Juan
print(persona2.edad)   # Salida: 25
```

### 3.2 Constructor con Valores Predeterminados

```python
class Estudiante:
    def __init__(self, nombre, edad=18, carrera="Sin definir"):
        self.nombre = nombre
        self.edad = edad
        self.carrera = carrera

# Diferentes formas de crear instancias
estudiante1 = Estudiante("Carlos")
estudiante2 = Estudiante("Ana", 22, "Ingeniería")
estudiante3 = Estudiante("Luis", carrera="Medicina")

print(estudiante1.edad)       # Salida: 18
print(estudiante2.carrera)    # Salida: Ingeniería
print(estudiante3.nombre)     # Salida: Luis
```

### 3.3 Constructor con Validación

```python
class CuentaBancaria:
    def __init__(self, titular, saldo_inicial=0):
        self.titular = titular
        if saldo_inicial < 0:
            raise ValueError("El saldo inicial no puede ser negativo")
        self.saldo = saldo_inicial

# Ejemplo de uso
try:
    cuenta1 = CuentaBancaria("Pedro", 1000)
    cuenta2 = CuentaBancaria("María", -500)  # Lanzará un error
except ValueError as e:
    print(e)
```

### 3.4 Constructor con Métodos Adicionales

```python
class Rectangulo:
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto
        self.calcular_area()
    
    def calcular_area(self):
        self.area = self.ancho * self.alto

# Creación de instancia
rectangulo = Rectangulo(5, 3)
print(rectangulo.area)  # Salida: 15
```

## 4. Conceptos Avanzados

### 4.1 Constructor con Herencia

```python
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

class Coche(Vehiculo):
    def __init__(self, marca, modelo, color):
        super().__init__(marca, modelo)
        self.color = color

# Uso
mi_coche = Coche("Toyota", "Corolla", "Rojo")
print(mi_coche.marca)   # Salida: Toyota
print(mi_coche.color)   # Salida: Rojo
```

## 5. Mejores Prácticas

- Usar constructores para inicializar atributos
- Validar datos de entrada
- Usar valores predeterminados cuando sea apropiado
- Utilizar `super()` en casos de herencia múltiple
- Mantener los constructores simples y enfocados

## 6. Consideraciones Finales

- El constructor no debe retornar un valor (implícitamente retorna `None`)
- Puedes tener múltiples parámetros
- Es posible usar argumentos con nombre
- La flexibilidad de Python permite constructores muy versátiles

## 7. Conclusión

Los constructores son una herramienta fundamental en la programación orientada a objetos de Python, permitiendo una inicialización clara y controlada de los objetos.
