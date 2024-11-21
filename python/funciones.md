---
title: "4. Funciones en Python"
parent: "Python"
---

# Programación con Python: Funciones


Las funciones son bloques de código reutilizables en Python que pueden tener argumentos de entrada, realizar un conjunto de acciones y devolver un resultado. Son una parte fundamental de la programación, ya que nos permiten dividir tareas complejas en piezas más pequeñas y organizadas. A continuación analizaremos la sintaxis básica de las funciones en Python, con explicaciones y ejemplos prácticos.


## 1. Definición de funciones
-----------------------

En Python podemos definir una función utilizando la palabra clave `def` , seguida del nombre de la función y los paréntesis de apertura y cierre, que pueden contener los argumentos de la función. A continuación debemos añadir dos puntos `:` y el bloque de código que forma el cuerpo de la función:
```python
def saludar():
    print("¡Hola! Bienvenido.")
```
## 2. Llamadas a funciones


Para ejecutar el código de la función simplemente debemos realizar una llamada utilizando su nombre seguido de paréntesis:
```python
def saludar():
    print("¡Hola!")
    saludar()  # Salida: ¡Hola!
```

## 3. Argumentos de funciones


Las funciones pueden aceptar argumentos de entrada, que son valores que se pasan a la función cuando se llama. Los parámetros que recibirán esos argumentos se escriben entre paréntesis en la definición de la función:
```python
def saludar(nombre):
    print(f"¡Hola, {nombre}!")

saludar("Juan")   # Salida: ¡Hola, Juan!
saludar("María")  # Salida: ¡Hola, María!
```
### Parámetros con valores predeterminados

Podemos asignar valores predeterminados a los parámetros de una función. Si un valor no se proporciona al llamar a la función, se utilizará el valor predeterminado:
```python
def saludar(nombre="Invitado"):
    print(f"¡Hola, {nombre}!")

saludar()          # Salida: ¡Hola, Invitado!
saludar("Carlos")  # Salida: ¡Hola, Carlos!
```
### Parámetros posicionales

Los parámetros posicionales son la forma más básica y común de pasar argumentos a una función en Python. Estos parámetros reciben sus valores en el orden en que son pasados cuando se llama a la función:
```python
def nombre_de_funcion(parametro1, parametro2, parametro3):
    # Cuerpo de la función
    # Podemos usar los parámetros dentro de la función
    print(parametro1, parametro2, parametro3)

nombre_de_funcion("a", "b", "c") # Salida: a b c
```
Por ejemplo, si queremos realizar una división entre dos números, podemos definir los parámetros posicionales `a` y `b` de la función `dividir()` . Cuando llamamos a la función `dividir(10, 5)` , los valores `10` y `5` se asignan a los parámetros `a` y `b` , respectivamente:
```python
def dividir(a, b):
    resultado = a / b
    return resultado

resultado = dividir(10, 5)
print(resultado)  # Salida: 2.0
```
#### Orden de los argumentos en una función

El orden de los argumentos en una función es esencial cuando se utilizan parámetros posicionales. Si cambiamos el orden, los valores se asignarán a los parámetros de forma diferente y la función puede no producir los resultados esperados:
```python
def restar(a, b):
    resultado = a - b
    return resultado

resultado_resta1 = restar(10, 3)
print(resultado_resta1)  # Salida: 7

resultado_resta2 = restar(3, 10)
print(resultado_resta2)  # Salida: -7
```
En el segundo caso, se asignaron los valores `3` y `10` a `a` y `b` , respectivamente. Como la operación en la función es `a - b` , obtuvimos `-7` en lugar de `7` .

#### Orden de los parámetros en la definición de la función

El orden en que definamos los parámetros posicionales en la declaración de la función también es importante. En el siguiente ejemplo definimos la función `potencia` , recibiendo los parámetros `(a, b)` en el primer caso, y `(b, a)` en el segundo:
```python
def potencia(a, b):
    resultado = a ** b
    return resultado

resultado1 = potencia(2, 3)
print(resultado1)  # Salida: 8

# Cambio en el orden de los parámetros
def potencia(b, a):
    resultado = a ** b
    return resultado

resultado2 = potencia(2, 3)
print(resultado2)  # Salida: 9
```
En el segundo caso, se asignaron los valores `3` y `2` a `a` y `b` , respectivamente. Como la operación en la función es `a ** b` , obtuvimos `9` en lugar de `8` .

### Parámetros nominales

Los parámetros nominales son una característica relativamente nueva en Python que se introdujo en la versión 3.8. Nos permiten pasar argumentos a una función utilizando sus nombres en lugar de su posición. Esto puede hacer que el código sea más legible y menos propenso a errores, especialmente cuando tenemos muchas opciones de argumentos o valores predeterminados en una función.

Para definir una función con parámetros nominales, debemos usar un símbolo de igual `=` después del nombre del parámetro y proporcionar un valor predeterminado:
```python
def saludar(nombre="Invitado", apellido=""):
    print(f"¡Hola, {nombre}!")

saludar(nombre="Juan", apellido="Ruiz")    # Salida: ¡Hola, Juan Ruiz!
saludar(apellido="Rubio", nombre="María")  # Salida: ¡Hola, María Rubio!

# En la siguiente llamada se usarán los valores predeterminados
saludar()  # Salida: ¡Hola, Invitado!
```
En el ejemplo, la función `saludar` tiene dos parámetros nominales `nombre` y `apellido` , con valores predeterminados establecidos. Podemos llamar a la función pasando los argumentos utilizando sus nombres. Esto hace que el orden de los argumentos no sea relevante y permite que el código sea más claro.

Los parámetros nominales también son útiles cuando una función tiene muchos argumentos, algunos de los cuales pueden tener valores predeterminados que no deseas cambiar. En lugar de pasar valores específicos para todos los argumentos, simplemente pasas los valores que necesitas cambiar.

### Paso de argumentos variables

Si no estamos seguro de cuántos argumentos recibirás, puedes utilizar `*args` para pasar un número variable de argumentos posicionales y `**kwargs` para pasar un número variable de argumentos clave-valor:
```python
def funcion(*args, **kwargs):
    print(args)     # Una tupla con argumentos posicionales
    print(kwargs)   # Un diccionario con argumentos clave-valor

funcion(1, 2, 3, nombre="Ana", edad=30)
# Salida:
# (1, 2, 3)
# {'nombre': 'Ana', 'edad': 30}
```

## 4. Valor de retorno


Las funciones pueden devolver un valor utilizando la palabra clave `return` . Esto es útil cuando queremos que una función realice un cálculo o una tarea y devuelva el resultado para su posterior uso:
```python
def sumar(a, b):
    resultado = a + b
    return resultado

resultado_suma = sumar(3, 5)
print(resultado_suma)  # Salida: 8
```
Podemos devolver múltiples valores utilizando la instrucción `return` con una tupla:
```python
def calcular(a, b):
    suma = a + b
    resta = a - b
    multiplicacion = a * b
    return suma, resta, multiplicacion

resultado = calcular(10, 5)
print(resultado)  # Salida: (15, 5, 50)
```
Además, podemos definir el valor y el tipo que devolverá la función dependiendo del flujo de código. A continuación vamos a ver un ejemplo más complejo donde utilizamos una sentencia `match case` para calcular el área de diferentes figuras geométricas, y devolvemos el resultado como valor de retorno. Vamos a crear una función llamada `calcular_area` que recibe el nombre de la figura geométrica («cuadrado», «rectángulo», «círculo» o «triángulo») y las medidas necesarias para calcular el área. Dependiendo del caso, el `match case` realiza el cálculo del área y lo utiliza como valor de retorno de la función. Incluso contemplamos la posibilidad de que la figura que se reciba como parámetro no exista, en cuyo caso se devolverá el valor por defecto con el tipo `None` :
```python
def calcular_area(figura, medida1, medida2=None):
    match figura:
        case "cuadrado":
            return medida1 ** 2
        case "rectangulo":
            return medida1 * medida2
        case "circulo":
             return 3.1416 * medida1 ** 2
        case "triangulo":
            return 0.5 * medida1 * medida2
        case _:
             return None

area_cuadrado = calcular_area("cuadrado", 5)
area_rectangulo = calcular_area("rectangulo", 4, 6)
area_circulo = calcular_area("circulo", 3)
area_triangulo = calcular_area("triangulo", 2, 8)

print("Área del cuadrado:", area_cuadrado)     # Área del cuadrado: 25
print("Área del rectángulo:", area_rectangulo) # Área del rectángulo: 24
print("Área del círculo:", area_circulo)       # Área del círculo: 28.2744
print("Área del triángulo:", area_triangulo)   # Área del triángulo: 8.0
```
En este último ejemplo, el `match case` nos permite realizar los cálculos del área de diferentes formas geométricas de manera sencilla y legible. Cada caso corresponde a una forma geométrica específica, y el resultado se calcula utilizando las medidas proporcionadas. Al utilizar el `match case` , evitamos la necesidad de utilizar una serie de sentencias `if-elif-else` para identificar la forma geométrica y realizar el cálculo correspondiente. El código resultante es más limpio y más claro.


## 5. Ámbito de variables


Las variables declaradas dentro de una función tienen un alcance local y solo existen dentro de la función:
```python
def funcion():
    variable_local = "Soy local"
    print(variable_local)

funcion()  # Salida: Soy local

# La siguiente línea generaría un error ya que variable_local no está definida en este ámbito
# print(variable_local)
```
Las variables declaradas fuera de una función tienen un alcance global y son accesibles desde cualquier parte del programa. Si queremos utilizar una variable global dentro de una función, debemos usar la palabra clave `global` antes de la variable:
```python
contador_global = 0

def incrementar_contador():
    global contador_global
    contador_global += 1

incrementar_contador()
print(contador_global)  # Salida: 1
```
## 6. Funciones anidadas


Podemos definir funciones dentro de otras funciones, lo que se conoce como funciones anidadas:
```python
def funcion_principal():
    print("Función principal")

    def funcion_anidada():
        print("Función anidada")

    funcion_anidada()

funcion_principal()
# Salida:
# Función principal
# Función anidada
```
## 7. Funciones lambda


Las funciones lambda son funciones anónimas y pequeñas que pueden tener cualquier número de parámetros, pero solo pueden tener una expresión. Se definen utilizando la palabra clave `lambda` :
```python
# Función lambda que devuelve el cuadrado de un número
cuadrado = lambda x: x ** 2

resultado = cuadrado(5)
print(resultado)  # Salida: 25
```

