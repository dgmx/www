# Curso práctico de Python con Visual Studio Code
## De principiante a avanzado

## Objetivo general

Aprender Python desde cero utilizando Visual Studio Code como entorno de desarrollo, pasando progresivamente desde los fundamentos del lenguaje hasta la creación de aplicaciones estructuradas, consumo de APIs, bases de datos, pruebas y buenas prácticas.

## Itinerario

| Nivel | Contenido | Proyecto principal |
|---|---|---|
| 1 | Fundamentos | Calculadora y conversor |
| 2 | Estructuras de datos y funciones | Gestor de tareas |
| 3 | Programación orientada a objetos | Sistema de biblioteca |
| 4 | Archivos, bases de datos y APIs | Gestor de inventario |
| 5 | Desarrollo profesional | API REST |
| 6 | Proyecto final | Aplicación completa |

# NIVEL 1 — FUNDAMENTOS

## Objetivos

- Crear y ejecutar programas Python.
- Utilizar variables.
- Trabajar con tipos de datos.
- Realizar operaciones matemáticas.
- Utilizar condicionales y bucles.
- Leer información del usuario.
- Utilizar el depurador de VS Code.

## 1.1 Primer programa

```python
print("Hola, mundo")
```

### Ejercicios

1. Mostrar dos mensajes de bienvenida.
2. Mostrar el nombre del alumno.

## 1.2 Variables y tipos

Tipos principales:

- `str`
- `int`
- `float`
- `bool`
- `None`

Ejemplo:

```python
nombre = "Ana"
edad = 18
altura = 1.72
estudiante = True
```

### Ejercicios

1. Crear variables para nombre, edad y ciudad.
2. Mostrar todas las variables.
3. Calcular el año de nacimiento.
4. Calcular el precio final con descuento.

## 1.3 Entrada de datos

```python
nombre = input("Nombre: ")
print(f"Hola, {nombre}")
```

Conversión:

```python
edad = int(input("Edad: "))
```

### Ejercicio

Solicitar nombre, edad y ciudad y mostrar una frase utilizando esos datos.

## 1.4 Operadores

```text
+ - * / // % **
```

Comparación:

```text
== != > < >= <=
```

### Ejercicio

Crear una calculadora con suma, resta, multiplicación, división y resto.

## 1.5 Condicionales

```python
edad = int(input("Edad: "))

if edad >= 18:
    print("Mayor de edad")
else:
    print("Menor de edad")
```

### Ejercicios

1. Positivo, negativo o cero.
2. Par o impar.
3. Mayor de tres números.
4. Convertir una calificación numérica en categoría.

## 1.6 Bucles

```python
for numero in range(1, 11):
    print(numero)
```

```python
contador = 1

while contador <= 10:
    print(contador)
    contador += 1
```

### Ejercicios

1. Números del 1 al 100.
2. Números pares.
3. Suma del 1 al 100.
4. Tabla de multiplicar.
5. Solicitar una contraseña hasta acertarla.

## Proyecto nivel 1: Calculadora multifunción

Menú:

```text
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Calcular porcentaje
6. Salir
```

Debe mostrar un menú, solicitar datos, realizar operaciones, gestionar divisiones por cero y repetirse hasta salir.

# NIVEL 2 — ESTRUCTURAS DE DATOS Y FUNCIONES

## Objetivos

- Listas.
- Tuplas.
- Diccionarios.
- Conjuntos.
- Funciones.
- Parámetros.
- Valores de retorno.
- Comprensiones.
- Excepciones.

## 2.1 Listas

```python
frutas = ["manzana", "pera", "naranja"]
frutas.append("plátano")
frutas.remove("pera")
```

### Ejercicios

1. Gestionar una lista de alumnos.
2. Calcular la media de notas.
3. Encontrar máximo y mínimo.
4. Eliminar duplicados.

## 2.2 Diccionarios

```python
alumno = {
    "nombre": "Ana",
    "edad": 20,
    "curso": "Python"
}
```

### Ejercicio

Crear un producto con nombre, precio, categoría y stock y funciones para consultar y modificar sus datos.

## 2.3 Funciones

```python
def saludar(nombre):
    return f"Hola, {nombre}"
```

### Ejercicios

Crear funciones para:

- Promedio.
- Número primo.
- Factorial.
- Conversión de temperaturas.
- Validación de contraseñas.

## 2.4 Excepciones

```python
try:
    numero = int(input("Número: "))
except ValueError:
    print("Debes introducir un número")
```

### Ejercicio

Mejorar la calculadora del nivel 1 para gestionar entradas incorrectas.

## Proyecto nivel 2: Gestor de tareas

Menú:

```text
1. Añadir tarea
2. Mostrar tareas
3. Completar tarea
4. Eliminar tarea
5. Buscar tarea
6. Salir
```

Modelo:

```python
{
    "id": 1,
    "titulo": "Estudiar Python",
    "completada": False
}
```

### Ampliaciones

- Prioridad.
- Fecha.
- Categoría.
- Búsqueda.
- Ordenación.

# NIVEL 3 — PROGRAMACIÓN ORIENTADA A OBJETOS

## Objetivos

- Clases.
- Objetos.
- Atributos.
- Métodos.
- Constructores.
- Encapsulación.
- Herencia.
- Polimorfismo.

## 3.1 Clases

```python
class Persona:

    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        print(f"Hola, soy {self.nombre}")
```

Crear objetos:

```python
persona = Persona("Ana", 20)
persona.saludar()
```

## 3.2 Herencia

```python
class Animal:

    def hablar(self):
        print("Sonido")


class Perro(Animal):

    def hablar(self):
        print("Guau")
```

### Ejercicios

Crear clases para:

1. Cuenta bancaria.
2. Vehículo.
3. Empleado.
4. Producto.
5. Alumno.

## Proyecto nivel 3: Sistema de biblioteca

Clases:

```text
Libro
Autor
Usuario
Biblioteca
Préstamo
```

Funciones:

- Registrar libros.
- Registrar usuarios.
- Prestar libros.
- Devolver libros.
- Buscar libros.
- Mostrar disponibilidad.
- Mostrar préstamos.

### Ampliación

Añadir tipos de usuarios y reglas de préstamo.

# NIVEL 4 — ARCHIVOS, BASES DE DATOS Y APIs

## Objetivos

- Archivos de texto.
- JSON.
- CSV.
- SQLite.
- `requests`.
- APIs REST.
- Serialización.
- Variables de entorno.

## 4.1 Archivos

```python
with open("datos.txt", "w", encoding="utf-8") as archivo:
    archivo.write("Hola Python")
```

Lectura:

```python
with open("datos.txt", encoding="utf-8") as archivo:
    contenido = archivo.read()
```

## 4.2 JSON

```python
import json

datos = {
    "nombre": "Ana",
    "edad": 20
}
```

### Ejercicio

Modificar el gestor de tareas para guardar y recuperar tareas mediante JSON.

## 4.3 SQLite

```python
import sqlite3

conexion = sqlite3.connect("datos.db")
```

### Ejercicios

Crear bases de datos de:

- Alumnos.
- Productos.
- Clientes.

## 4.4 APIs

Instalar:

```text
python -m pip install requests
```

Ejemplo:

```python
import requests

respuesta = requests.get("https://api.example.com")

print(respuesta.status_code)
```

Estudiar:

- GET.
- POST.
- PUT.
- DELETE.
- JSON.
- Códigos HTTP.
- Autenticación.

## Proyecto nivel 4: Gestor de inventario

Datos:

```text
ID
Nombre
Categoría
Precio
Stock
```

Funciones:

- Crear.
- Modificar.
- Eliminar.
- Buscar.
- Mostrar inventario.
- Filtrar.
- Calcular valor total.

Persistencia mediante SQLite.

### Ampliación

Integrar una API externa.

# NIVEL 5 — PYTHON PROFESIONAL

## Objetivos

- Organización de proyectos.
- Módulos y paquetes.
- Type hints.
- `dataclasses`.
- Logging.
- Testing.
- Linters.
- Formateadores.
- Git.
- Variables de entorno.
- Documentación.

## 5.1 Organización

```text
mi_aplicacion/
├── src/
│   └── app/
│       ├── __init__.py
│       ├── models.py
│       ├── services.py
│       └── database.py
├── tests/
│   ├── test_models.py
│   └── test_services.py
├── .venv/
├── .env
├── .gitignore
├── requirements.txt
└── README.md
```

## 5.2 Type hints

```python
def sumar(a: int, b: int) -> int:
    return a + b
```

## 5.3 Dataclasses

```python
from dataclasses import dataclass

@dataclass
class Producto:
    nombre: str
    precio: float
    stock: int
```

## 5.4 Logging

```python
import logging

logging.basicConfig(level=logging.INFO)
logging.info("Aplicación iniciada")
```

## 5.5 Testing

Instalar:

```text
python -m pip install pytest
```

Ejemplo:

```python
def sumar(a, b):
    return a + b

def test_sumar():
    assert sumar(2, 3) == 5
```

Ejecutar:

```text
pytest
```

## 5.6 Calidad

Introducir progresivamente:

- Formateadores.
- Linters.
- Type checking.
- Docstrings.
- PEP 8.
- Revisiones de código.

## Proyecto nivel 5: API REST de gestión de tareas

Endpoints:

```text
GET    /tasks
GET    /tasks/{id}
POST   /tasks
PUT    /tasks/{id}
DELETE /tasks/{id}
```

Datos:

```text
id
title
description
completed
priority
```

Requisitos:

- API REST.
- SQLite.
- Validación.
- Manejo de errores.
- Tests.
- Documentación.
- Variables de entorno.
- Estructura modular.

Se puede introducir FastAPI como framework.

# NIVEL 6 — PROYECTO FINAL

## Objetivo

Construir una aplicación completa aplicando todos los conocimientos.

### Opción A — Gestión de biblioteca

- Libros.
- Usuarios.
- Préstamos.
- Devoluciones.
- Búsquedas.
- Estadísticas.

### Opción B — Gestión de inventario

- Productos.
- Categorías.
- Stock.
- Proveedores.
- Movimientos.
- Informes.

### Opción C — Gestor de gastos

- Registrar gastos.
- Categorizar.
- Consultar movimientos.
- Filtrar por fechas.
- Calcular totales.
- Estadísticas.

### Opción D — Sistema de reservas

- Clientes.
- Recursos.
- Reservas.
- Disponibilidad.
- Cancelaciones.

## Requisitos del proyecto final

### Código

- Python.
- Funciones.
- Clases.
- Módulos.
- Type hints.
- Manejo de excepciones.

### Datos

- SQLite.
- Operaciones CRUD.

### Calidad

- Tests.
- Logging.
- Formateo.
- Análisis estático.

### Desarrollo

- Entorno virtual.
- `requirements.txt`.
- Git.
- `.gitignore`.
- README.

### Documentación

El README debe explicar:

1. Qué hace la aplicación.
2. Requisitos.
3. Instalación.
4. Configuración.
5. Ejecución.
6. Tests.
7. Estructura.

# PLAN DE TRABAJO

| Semana | Tema | Práctica |
|---:|---|---|
| 1 | Sintaxis básica | Ejercicios |
| 2 | Condicionales | Calculadora |
| 3 | Bucles | Problemas matemáticos |
| 4 | Listas y diccionarios | Gestión de datos |
| 5 | Funciones | Refactorización |
| 6 | Proyecto nivel 2 | Gestor de tareas |
| 7 | Clases | POO |
| 8 | Herencia | Modelado |
| 9 | Proyecto nivel 3 | Biblioteca |
| 10 | Archivos y JSON | Persistencia |
| 11 | SQLite | Bases de datos |
| 12 | APIs | Consumo de servicios |
| 13 | Proyecto nivel 4 | Inventario |
| 14 | Testing | pytest |
| 15 | Código profesional | Calidad |
| 16 | API REST | Backend |
| 17–20 | Proyecto final | Aplicación completa |

# METODOLOGÍA

Cada unidad debe seguir:

1. Concepto.
2. Ejemplo.
3. Ejercicio guiado.
4. Ejercicios individuales.
5. Reto.
6. Proyecto.
7. Refactorización.

# PROGRESIÓN

**Nivel 1:** crear programas sencillos.

**Nivel 2:** dividir problemas en funciones y estructuras de datos.

**Nivel 3:** modelar entidades mediante clases.

**Nivel 4:** guardar y recuperar información.

**Nivel 5:** crear software estructurado, probado y mantenible.

**Nivel 6:** diseñar y desarrollar una aplicación completa.

# RETOS ADICIONALES

1. Juego de adivinar números.
2. Tres en raya.
3. Agenda de contactos.
4. Conversor de monedas mediante API.
5. Analizador de CSV.
6. Sistema de autenticación.
7. API REST completa.
8. Aplicación con interfaz gráfica o web.

# RESULTADO FINAL

Al terminar el itinerario, el alumno debería poder pasar de una especificación como:

> Necesito una aplicación para gestionar productos y controlar su stock.

a:

1. Analizar el problema.
2. Diseñar los datos.
3. Crear la estructura.
4. Crear el entorno virtual.
5. Diseñar las clases.
6. Crear la base de datos.
7. Implementar funciones.
8. Crear una API si es necesario.
9. Escribir tests.
10. Depurar errores.
11. Documentar.
12. Utilizar Git.
