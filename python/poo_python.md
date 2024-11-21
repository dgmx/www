---
title: "6. Programación Orientada a Objetos "
parent: "Python"
---

# Introduccion a la Programación Orientada a Objetos (POO) en Python

La **Programación Orientada a Objetos (POO)** es un paradigma que organiza el código en **objetos** que combinan datos (atributos) y comportamientos (métodos). En Python, la POO es una forma popular y sencilla de estructurar programas más complejos.

## Conceptos principales de POO

### 1. Clase
Una **clase** es un modelo o plantilla a partir del cual se crean los objetos. Define los atributos y métodos comunes a los objetos de ese tipo.
```python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre  # Atributo
        self.edad = edad      # Atributo

    def saludar(self):  # Método
        print(f"Hola, mi nombre es {self.nombre} y tengo {self.edad} años.")
```

### 2. Objeto
Un **objeto** es una instancia de una clase.
```python
# Crear un objeto de la clase Persona
persona1 = Persona("Carlos", 25)
persona1.saludar()  # Salida: Hola, mi nombre es Carlos y tengo 25 años.
```

### 3. Atributos
Los **atributos** son las variables asociadas a una clase u objeto que almacenan datos.
```python
persona1.nombre  # Salida: Carlos
persona1.edad    # Salida: 25
```

### 4. Métodos
Los **métodos** son funciones definidas dentro de una clase que actúan sobre los objetos.
```python
persona1.saludar()  # Salida: Hola, mi nombre es Carlos y tengo 25 años.
```
El método `__init__()` es especial en Python y se llama automáticamente cuando se crea un nuevo objeto de la clase. Se utiliza habitualmente para inicializar los atributos del objeto.

### 5. Herencia
La **herencia** permite que una clase (hija) herede atributos y métodos de otra clase (padre).
```python
class Estudiante(Persona):  # Clase hija
    def __init__(self, nombre, edad, grado):
        super().__init__(nombre, edad)  # Heredar atributos
        self.grado = grado

    def estudiar(self):  # Nuevo método
        print(f"{self.nombre} está estudiando en {self.grado}.")

# Crear un objeto de la clase Estudiante
estudiante1 = Estudiante("Ana", 20, "Universidad")
estudiante1.saludar()   # Salida: Hola, mi nombre es Ana y tengo 20 años.
estudiante1.estudiar()  # Salida: Ana está estudiando en Universidad.
```

### 6. Encapsulamiento
El **encapsulamiento** protege los atributos de una clase para que no puedan ser modificados directamente. Se implementa mediante prefijos como `_` o `__` en los nombres de los atributos.
```python
class CuentaBancaria:
    def __init__(self, saldo):
        self.__saldo = saldo  # Atributo privado

    def depositar(self, monto):
        self.__saldo += monto

    def obtener_saldo(self):
        return self.__saldo

cuenta = CuentaBancaria(1000)
cuenta.depositar(500)
print(cuenta.obtener_saldo())  # Salida: 1500
```

### 7. Polimorfismo
El **polimorfismo** permite que diferentes clases tengan métodos con el mismo nombre pero comportamientos distintos.
```python
class Perro:
    def hacer_sonido(self):
        print("Guau!")

class Gato:
    def hacer_sonido(self):
        print("Miau!")

# Uso de polimorfismo
animales = [Perro(), Gato()]
for animal in animales:
    animal.hacer_sonido()
# Salida:
# Guau!
# Miau!
```

## Resumen
- **Clase**: Plantilla para crear objetos.
- **Objeto**: Instancia de una clase.
- **Atributos**: Variables asociadas a un objeto.
- **Métodos**: Funciones asociadas a un objeto.
- **Herencia**: Reutilización de código entre clases.
- **Encapsulamiento**: Protección de atributos.
- **Polimorfismo**: Métodos con el mismo nombre y diferentes comportamientos.

¡La POO es una herramienta poderosa para organizar y reutilizar código en proyectos grandes!

