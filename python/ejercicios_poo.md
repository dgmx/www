---
title: "E6 Ejercicios Programación Orientada a Objetos"
parent: "Python"
nav_exclude: true
---

## Ejercicios Programación Orientada a Objetos

**Ejercicio 1**

Diseña una clase `Libro` que contenga los atributos `autor`, `titulo`, `ubicacion`. 
Prepara un cuerpo de programa que cree un objeto de la clase `Libro`, les dé valores y a continuación, 
los muestre. También tendrá un método `contiene`, que devolverá `True` o `False`, según si lo indicado como
 parámetro forma parte de alguno de los tres datos del libro.

```python
class Libro:
    def __init__(self, titulo, autor, ubicacion):
        self.titulo = titulo
        self.autor = autor
        self.ubicacion = ubicacion

    def mostrar_informacion(self):
        # Muestra los atributos del libro
        print(f"Autor: {self.autor}")
        print(f"Título: {self.titulo}")
        print(f"Ubicación: {self.ubicacion}")
    
    def contiene(self, texto):
        # Verifica si el texto está en alguno de los atributos
        return (texto in self.autor) or (texto in self.titulo) or (texto in self.ubicacion)

libro1 = Libro("El principito", "Antoine de Saint-Exupéry", "Estanteria 3, Seccion Literatura")

libro1.mostrar_informacion()

busqueda = "soledad"
if libro1.contiene(busqueda):
    print(f"El libro contiene la palabra '{busqueda}'.")
else:
    print(f"El libro NO contiene la palabra '{busqueda}'.")

```

**Ejercicio 2**

Crea una clase `Enciclopedia` que herede de la clase `Libro` y añada un atributo `cantidadDeTomos`
(un número entero). A continuación, elabora un cuerpo de programa adecuado que permita probarla.

```python
from libro import Libro

class Enciclopedia(Libro):
    def __init__(self, titulo, autor, ubicacion, cantidadDeTomos):
        super().__init__(titulo, autor, ubicacion)
        self.cantidadDeTomos = cantidadDeTomos
   
    def mostrar_informacion(self):
        # Muestra la información de la clase base y el nuevo atributo
        super().mostrar_informacion()
        print(f"Cantidad de tomos: {self.cantidadDeTomos}")

mi_enciclopedia = Enciclopedia(
    autor="Varios autores",
    titulo="Enciclopedia Universal",
    ubicacion="Estantería 1, Sección Referencia",
    cantidadDeTomos=20
)

# Mostrar la información de la enciclopedia
mi_enciclopedia.mostrar_informacion()

# Probar el método contiene
busqueda = "Universal"
if mi_enciclopedia.contiene(busqueda):
    print(f"La enciclopedia contiene la palabra '{busqueda}'.")
else:
    print(f"La enciclopedia NO contiene la palabra '{busqueda}'.")
```

**Ejercicio 3**

Realizar un programa que conste de una clase llamada `Estudiante`, que tenga como atributos 
el `nombre` y la `nota` del alumno. Definir los métodos para inicializar sus atributos, imprimirlos 
y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.

```python

class Estudiante():
    def __init__(self , nombre , nota):
        self.nombre=nombre
        self.nota=nota

    def imprimir(self):
        print("Nombre:{self.nombre} ")
        print("Nota: {self.nota}")

    def resultados(self):
        if self.nota >= 5:
            print("Has APROBADO!")
        else:
            print("Has SUSPENDIDO!")

estudiante1=Estudiante("Pedro" , 5)
estudiante1.imprimir()
estudiante1.resultados()

estudiante2=Estudiante("Elizabeth" , 7)
estudiante2.imprimir()
estudiante2.resultados()

```

**Ejercicio 4**

Crea una clase `Persona` con atributos `nombre` y `edad`. Además, hay que crear un método `cumpleaños` que aumente en 1 la edad de la persona cuando se invoque sobre un objeto creado 
con `Persona`.


```python
class Persona:
  def __init__(self, n, e):
    self.nombre=n
    self.edad=e

  def cumpleaños(self):
    self.edad += 1

nombre = input("Nombre: ")
edad = int(input("Edad: "))

p = Persona(nombre,edad)
print(p.nombre, p.edad)
p.cumpleaños()
print(p.nombre, p.edad)
```

**Ejercicio 5**

Crea la clase Coche que contenga las siguientes propiedades:
`matrícula` (string), `marca` (string), `kilometros_recorridos` (float) y `gasolina` (float)

La clase tendrá un método llamado `avanzar()` que recibirá como argumento el número de kilómetros a conducir y sumará los kilómetros recorridos al valor de la propiedad `kilometros_recorridos`. El método también restará al valor de gasolina el resultado de los kilómetros multiplicado por 0'1. La clase también contendrá otro método llamado `repostar()` que recibirá como argumento los litros introducidos que deberán sumarse a la variable `gasolina`. Por último, será necesario controlar que el método `avanzar` nunca obtendrá un número negativo en la `gasolina`. En dicho caso, deberá mostrar el siguiente mensaje: "Es necesario repostar para recorrer la cantidad indicada de kilómetros".

Ejemplo:
```bash
coche1.avanzar(100) # kilometros_recorridos = 100, gasolina = 40
coche1.avanzar(180) # kilometros_recorridos = 280, gasolina = 22
coche1.avanzar(280) # Es necesario repostar para recorrer la cantidad indicada de kilómetros
coche1.repostar(20) # gasolina = 42
````
Solución:
```python
class Coche:
    def __init__(self, matricula, marca, km, gasolina):
        self.matricula = matricula
        self.marca = marca
        self.km = km
        self.gasolina = gasolina
    
    def mostrar_informacion(self):
        print(f"Matrícula: {self.matricula}")
        print(f"Marca: {self.marca}")
        print(f"Kilómetros recorridos: {self.km}")
        print(f"Gasolina: {self.gasolina}")

    def mostrar_kilometros(self):
        print(f"Kilómetros recorridos: {self.km}")

    def mostrar_gasolina(self):
        print(f"Gasolina: {self.gasolina}")

    def avanzar(self, kms):
        if self.gasolina - kms * 0.1 < 0:
            print("Es necesario repostar para recorrer la cantidad indicada de kilómetros")
        else:
            self.km += kms
            self.gasolina -= kms * 0.1
        self.mostrar_kilometros()

    def repostar(self, litros):
        self.gasolina += litros
        self.mostrar_gasolina()

coche1 = Coche("1234ABC", "Ford", 0, 50)

coche1.avanzar(100) 
coche1.avanzar(180) 
coche1.avanzar(280)
coche1.repostar(20) 

```


**Ejercicio 6**

Crea una clase Robot que simule los movimientos de un robot y calcule la posición en la que se encuentra cada momento. El robot se moverá por un tablero infinito de coordenadas X e Y, podrá realizar los siguientes movimientos:

- Avanzar hacia adelante (A)
- Retroceder (R)
- Avanzar hacia la izquierda (I) o hacia la derecha (D)

El robot tendrá un método llamado mueve() que recibirá la orden como parámetro y otro método, posicion_actual(), que indicará su posición en las coordenadas X e Y. Al crear el robot este se inicializará a las coordenadas (0,0).

```python
class Robot:
    def __init__(self):
        # Inicializa el robot en la posición (0, 0)
        self.x = 0
        self.y = 0

    def mueve(self, orden):
        # Realiza el movimiento según la orden recibida
        if orden == "A":  # Avanzar hacia adelante
            self.y += 1
        elif orden == "R":  # Retroceder
            self.y -= 1
        elif orden == "I":  # Avanzar hacia la izquierda
            self.x -= 1
        elif orden == "D":  # Avanzar hacia la derecha
            self.x += 1
        else:
            print("Orden no válida. Usa A, R, I o D.")

    def posicion_actual(self):
        # Devuelve la posición actual del robot
        return f"Posición actual: ({self.x}, {self.y})"


# Cuerpo del programa
robot = Robot()  # Crear un objeto de la clase Robot
print("Posición inicial: (0, 0)")
print("Mueve al robot")
print("Introduce un movimiento (A: Adelante, R: Retroceder, I: Izquierda, D: Derecha) o 'end' para terminar: ")
while True:
    # Solicitar al usuario que ingrese un movimiento
    orden = input(":>").strip().upper()

    # Terminar el programa si el usuario escribe 'end'
    if orden == "END":
        print("Programa terminado.")
        break

    # Verificar si la orden es válida
    if orden in ["A", "R", "I", "D"]:
        robot.mueve(orden)  # Mover el robot
        print(robot.posicion_actual())  # Mostrar la posición actual
    else:
        print("Orden invalida. Usa A, R, I o D.")

```

Version 1.2. Usando vectores (lista)

```python
class Robot:
    def __init__(self):
        self.posicion = (0, 0)

    def mueve(self, orden):
        if orden == "A":
            self.posicion = (self.posicion[0], self.posicion[1] + 1)
        elif orden == "R":
            self.posicion = (self.posicion[0], self.posicion[1] - 1)
        elif orden == "I":
            self.posicion = (self.posicion[0] - 1, self.posicion[1])
        elif orden == "D":
            self.posicion = (self.posicion[0] + 1, self.posicion[1])
        else:
            print("Orden no válida. Usa A, R, I o D.")

    def posicion_actual(self):
        return self.posicion

# Cuerpo del programa (igual que la versión anterior)
```

**Ejercicio 6**

Crear una clase llamada `Persona`. Sus atributos son: nombre, edad y DNI. Construye los siguientes métodos para la clase:

Un constructor, donde los datos pueden estar vacíos.
Los setters y getters para cada uno de los atributos. Hay que validar las entradas de datos.

`mostrar()`: Muestra los datos de la persona.

`esMayorDeEdad()`: Devuelve un valor lógico indicando si es mayor de edad. """

```python
class Persona():

    def __init__(self,nombre="",edad=0,dni=""):
        self.nombre=nombre
        self.edad=edad
        self.dni=dni
    
    @property
    def nombre(self):
        return self.__nombre

    @property
    def edad(self):
        return self.__edad

    @property
    def dni(self):
        return self.__dni
    
    @nombre.setter
    def nombre(self,nombre):
        self.__nombre=nombre

    def validar_dni(self):
        letras = "TRWAGMYFPDXBNJZSQVHLCKE"
        if len(self.__dni)!=9:
            print("DNI incorrecto")
            self.__dni = ""
        else:
            letra = self.__dni[8]
            num = int(self.__dni[:8])
            if letra.upper() != letras[num % 23]:
                print("DNI incorrecto")
                self.__dni = ""

    @dni.setter
    def dni(self,dni):
        self.__dni=dni
        self.validar_dni()
      
    @edad.setter
    def edad(self,edad):
        if edad < 0:
            print("Edad incorrecta")
            self.__edad=0
        else:
            self.__edad=edad
    
    
    def mostrar(self):
        return "Nombre:"+self.nombre+" - Edad:"+str(self.edad)+" - DNI:"+self.dni

    def esMayorDeEdad(self):
        return self.edad>=18

```
