# TEMA 3: Funciones e introducción a Processing

### Bloque B. Creación digital y pensamiento computacional | CDPC.1.A.4

> **Currículo LOMLOE - Andalucía** | Criterios: CDPC.1.A.4

---

## PARTE I. Funciones en Python

## 1. ¿Qué es una función?

Una **función** es un bloque de código con nombre que realiza una tarea concreta y que podemos **reutilizar** cuantas veces haga falta. Programar con funciones aplica la **abstracción** (ocultar detalles tras un nombre) y la **reutilización** (escribir una vez, usar muchas). Ya usamos funciones integradas (`print()`, `input()`, `range()`...); ahora **crearemos las nuestras** con `def`.

### 1.1. Definición y llamada

```python
def saludar():
    """Muestra un saludo por pantalla."""
    print("Hola, bienvenido a CDPC")

saludar()          # Primera llamada
saludar()          # Podemos llamarla tantas veces como queramos
```

Recuerda: `def` inicia la definición; el nombre va seguido de paréntesis y **dos puntos**; el cuerpo se indenta 4 espacios; la llamada se hace con `saludar()`. Las comillas `"""..."""` iniciales son el **docstring**: documentación opcional muy recomendable.

### 1.2. Parámetros y argumentos

Los **parámetros** son las variables de la definición; los **argumentos**, los valores reales de la llamada.

```python
def saludar(nombre):
    print("Hola,", nombre, "¡qué alegría verte!")

saludar("Lucía")     # argumento "Lucía"
def calcular_area_rectangulo(base, altura):
    area = base * altura
    print("El área es", area)

calcular_area_rectangulo(5, 3)     # 15
```

### 1.3. Valores por defecto

Un parámetro con valor por defecto **puede omitirse** en la llamada. Deben ir siempre después de los parámetros obligatorios.

```python
def presentar(nombre, curso="1º Bachillerato", materia="CDPC"):
    print(nombre, "|", curso, "|", materia)

presentar("Ana")                              # usa ambos valores por defecto
presentar("Ana", "1º B")                      # cambia solo el curso
presentar("Ana", materia="Creación Digital")  # cambia solo la materia (por nombre)
```

### 1.4. `return`: devolver un resultado

`print()` **muestra** un valor; `return` **devuelve** un valor al lugar de la llamada, de modo que puede guardarse en una variable o usarse en una expresión. Un `return` además **corta** la ejecución de la función.

```python
def sumar(a, b):
    return a + b

def es_par(numero):
    if numero % 2 == 0:
        return True
    return False

resultado = sumar(3, 4)
print("La suma es", resultado)            # 7
print("¿Es par el 8?", es_par(8))         # True
print("¿Es par el 15?", es_par(15))       # False
```

A diferencia de `print()`, que solo **muestra** el valor, `return` lo **devuelve** al código que llama para poder guardarlo. Una función sin `return` explícito devuelve `None`.

### 1.5. Ámbito de las variables

El **ámbito** (*scope*) determina dónde es visible una variable: las variables **locales** creadas dentro de una función solo existen dentro de ella, mientras que las **globales** (creadas fuera) son accesibles desde cualquier parte.

```python
contador = 10                    # variable global

def incrementar():
    contador = 0                 # variable local: NO afecta a la global
    contador += 1
    print("Dentro:", contador)   # 1

incrementar()
print("Fuera:", contador)        # 10
```

> **Buena práctica**: evita `global`. Prefiere que las funciones **reciban datos por parámetros** y **devuelvan resultados con `return`**: así son independientes y fáciles de probar.

### 1.6. Funciones integradas útiles

| Función | Qué hace | Ejemplo |
|---|---|---|
| `len(x)` | Número de elementos | `len("hola")` → `4` |
| `type(x)` | Tipo del dato | `type(3.14)` → `<class 'float'>` |
| `abs(x)` | Valor absoluto | `abs(-7)` → `7` |
| `round(x, n)` | Redondeo a `n` decimales | `round(3.14159, 2)` → `3.14` |
| `range(a, b, p)` | Secuencia de números | `range(0, 10, 2)` |
| `int(x)` / `float(x)` / `str(x)` | Conversión de tipo | `int("7")` → `7` |
| `max(...)` / `min(...)` / `sum(...)` | Máximo, mínimo y suma | `max(3, 9, 1)` → `9` |

```python
notas = [6.5, 8.0, 4.5, 9.25]
print(len(notas), max(notas), min(notas))                            # 4 9.25 4.5
print(round(sum(notas) / len(notas), 2), abs(notas[0] - notas[2]))   # 7.06 2.0
```

### 1.7. El módulo `math`

Las funciones matemáticas avanzadas viven en **módulos**, que se importan con `import`. También se puede hacer `from math import pi, sqrt` para usarlas sin prefijo, o `import math as m` con un alias corto.

```python
import math

print(math.sqrt(144))         # 12.0      raíz cuadrada
print(math.ceil(4.2), math.floor(4.8))   # 5 y 4: techo y suelo
print(math.factorial(5))      # 120       5!
print(math.gcd(12, 18))       # 6         máximo común divisor
print(math.sin(math.pi / 2))  # 1.0       seno (en radianes)
```

### 1.8. Ejemplo integrador

```python
# factura.py
import math

def calcular_precio_final(precio_base, iva=0.21, descuento=0.0):
    """Precio final aplicando IVA y descuento."""
    return round(precio_base * (1 + iva) * (1 - descuento), 2)

base = float(input("Precio base del producto: "))
final = calcular_precio_final(base)                  # IVA 21 %
rebaja = calcular_precio_final(base, descuento=0.1)  # +10 % de descuento
print("Precio con IVA:", final, "€")
print("Con descuento:", rebaja, "€")
print("Raíz cuadrada del precio:", round(math.sqrt(final), 2))
```

---

## PARTE II. Introducción a Processing

## 2. ¿Qué es Processing?

**Processing** ([processing.org](https://processing.org)) es un **entorno de programación y un lenguaje** creado en el MIT (Ben Fry y Casey Reas, 2001) para aprender a programar generando **imágenes, animaciones e instalaciones interactivas**. Su sintaxis se basa en Java pero sin el aparato de clases y métodos `main`: con un mínimo código se obtiene un resultado visual. Es **código abierto, gratuito y multiplataforma**, base de **p5.js** y **Processing.py**, y su **ejecución en tiempo real** refresca el dibujo decenas de veces por segundo.

**Instalación**: descarga desde `processing.org/download`, instala y abre el programa. En el editor, el botón **▶ Ejecutar** (`Ctrl/Cmd + R`) lanza el *sketch* y **■ Detener** lo detiene.

### 2.1. Estructura de un *sketch*

Cada programa se llama **sketch** y tiene dos funciones obligatorias:

```java
void setup() {
  // Se ejecuta UNA SOLA vez al arrancar
  size(600, 400);      // tamaño de la ventana
  background(220);     // color de fondo
}

void draw() {
  // Se ejecuta EN BUCLE (unas 60 veces por segundo)
  // Aquí va el dibujo y la animación
}
```

`setup()` se ejecuta **una sola vez** (tamaño, fondo, valores iniciales) y `draw()` lo hace **en bucle continuo** (dibujo, animación, eventos). Además existen funciones de **eventos** (`mousePressed()`, `keyPressed()`) que Processing invoca automáticamente y que estudiaremos en temas posteriores.

### 2.2. Funciones de color

```java
void setup() {
  size(640, 300);
  background(30, 30, 60);       // fondo azul oscuro RGB
  fill(255, 80, 80);            // interior rojo desde aquí
  ellipse(140, 150, 160, 160);
  fill(80, 200, 120);           // interior verde
  ellipse(320, 150, 160, 160);
  noFill();                     // sin interior: solo contorno
  ellipse(500, 150, 160, 160);
  stroke(255);                  // contorno blanco
  strokeWeight(4);              // grosor de 4 píxeles
  line(20, 20, 620, 20);
  noStroke();                   // sin contorno desde aquí
  fill(120, 160, 255);
  rect(240, 220, 160, 60);
}
```

| Función | Efecto |
|---|---|
| `background(r, g, b)` | Borra y pinta **toda la ventana** |
| `fill(r, g, b)` | Color del **interior** de las figuras |
| `stroke(r, g, b)` | Color del **contorno** |
| `noFill()` / `noStroke()` | Suprime el interior o el contorno |
| `strokeWeight(n)` | Grosor del contorno en píxeles |

`fill(255)` es blanco, `fill(0)` es negro, `fill(128)` gris medio; con tres valores se usa el modelo **RGB** (0–255) y también vale el hexadecimal `fill(#1E90FF)`.

---

## 3. Funciones gráficas básicas

**Coordenadas**: el origen `(0, 0)` es la **esquina superior izquierda**; el eje X crece hacia la derecha y el **eje Y hacia abajo**. `width` y `height` son variables con el tamaño de la ventana.

### 3.1. Punto: `point(x, y)`

```java
void setup() {
  size(400, 200);
  background(255);
  stroke(0);
  strokeWeight(4);
  for (int x = 20; x < 380; x += 10) {
    point(x, 100);     // fila de puntos cada 10 píxeles
  }
}
```

### 3.2. Línea: `line(x1, y1, x2, y2)`

```java
void setup() {
  size(400, 300);
  background(255);
  stroke(0, 100, 200);
  strokeWeight(3);
  line(50, 50, 350, 50);    // horizontal
  line(50, 50, 50, 250);    // vertical
  line(50, 250, 350, 50);   // diagonal
}
```

### 3.3. Triángulo: `triangle(x1, y1, x2, y2, x3, y3)`

Recibe las coordenadas de sus **tres vértices**, en cualquier orden:

```java
void setup() {
  size(400, 300);
  background(255);
  fill(255, 180, 60);
  stroke(120, 70, 0);
  strokeWeight(2);
  triangle(200, 40, 60, 260, 340, 260);
}
```

### 3.4. Rectángulo: `rect()` y cuadrado: `square()`

`rect(x, y, w, h)` toma la **esquina superior izquierda** `(x, y)`, el **ancho** `w` y el **alto** `h`; `square(x, y, s)` es lo mismo con ancho = alto.

```java
void setup() {
  size(500, 300);
  background(255);
  fill(120, 200, 255);
  rect(40, 40, 200, 120);         // rectángulo 200x120
  fill(255, 150, 180);
  square(280, 40, 120);           // cuadrado de lado 120
  fill(180, 240, 160);
  rect(40, 200, 420, 70, 20);     // radio de esquina 20
}
```

### 3.5. Círculo: `circle()` y elipse: `ellipse()`

Ambas toman el **centro**: `circle(x, y, d)` usa el **diámetro** `d`; `ellipse(x, y, w, h)` usa ancho y alto (si `w == h`, es un círculo).

```java
void setup() {
  size(500, 300);
  background(255);
  fill(255, 220, 100);
  stroke(200, 150, 0);
  circle(120, 150, 160);          // círculo de diámetro 160
  fill(200, 160, 255);
  ellipse(340, 150, 240, 120);    // elipse ancha
  noFill();
  stroke(0);
  ellipse(340, 150, 120, 240);    // elipse alta
}
```

### 3.6. Arco y sector: `arc()`

`arc(x, y, w, h, inicio, fin, [modo])` dibuja la porción de elipse entre dos ángulos.

```java
void setup() {
  size(600, 240);
  background(255);
  noStroke();

  fill(255, 120, 120);
  arc(100, 120, 160, 160, 0, PI/2, PIE);     // sector relleno
  fill(120, 200, 255);
  arc(300, 120, 160, 160, 0, PI/2, CHORD);   // arco cerrado con cuerda
  fill(150, 240, 150);
  arc(500, 120, 160, 160, 0, PI/2, OPEN);    // solo el trazo
}
```
#### Ángulos en radianes

Processing mide los ángulos en **radianes**: `360º = 2π`, `180º = π`, `90º = π/2`. Piensa en **sectores circulares**: el ángulo **0 apunta a la derecha** y crece en sentido **horario** (porque el eje Y apunta hacia abajo). Por eso `arc(x, y, w, h, 0, HALF_PI)` ocupa el cuarto situado abajo a la derecha del centro.

| Grados | Radianes | Constante |
|---|---|---|
| 0º | 0 | `0` |
| 90º | 1.5708... | `HALF_PI` |
| 180º | 3.14159... | `PI` |
| 270º | 4.712... | `PI + HALF_PI` |
| 360º | 6.283... | `TWO_PI` |

#### Modos de `arc()`: sectores y arcos

| Modo | Resultado |
|---|---|
| `PIE` | **Sector relleno**: une los extremos con el centro |
| `CHORD` | **Arco cerrado**: une los extremos con una cuerda recta |
| `OPEN` | **Arco abierto**: solo dibuja la curva (necesita `stroke`) |

Con `arc(x, y, w, h, 0, TWO_PI, PIE)` se dibuja exactamente un círculo relleno.

---

## 4. Sketch completo de ejemplo

```java
// composicion.pde
void setup() {
  size(700, 400);
  background(30, 40, 60);           // fondo azul noche

  stroke(255);
  strokeWeight(3);
  for (int i = 0; i < 10; i++) {
    point(40 + i * 30, 40);         // diez puntos alineados
  }
  stroke(255, 200, 0);              // línea horizontal
  strokeWeight(2);
  line(40, 70, 660, 70);

  noStroke();                       // figuras con relleno
  fill(255, 120, 120);
  triangle(90, 130, 40, 230, 140, 230);   // triángulo
  fill(120, 220, 160);
  rect(180, 130, 120, 100);               // rectángulo
  fill(120, 170, 255);
  square(330, 130, 100);                  // cuadrado
  fill(255, 210, 90);
  circle(500, 180, 100);                  // círculo
  fill(220, 150, 255);
  ellipse(620, 180, 110, 70);             // elipse

  fill(255, 150, 150);              // arcos y sectores
  arc(90, 330, 120, 120, 0, HALF_PI, PIE);   // sector de 90º
  fill(150, 220, 255);
  arc(250, 330, 120, 120, 0, PI, CHORD);     // media elipse con cuerda
  noFill();
  stroke(200, 255, 200);
  strokeWeight(4);
  arc(430, 330, 120, 120, PI, TWO_PI, OPEN); // arco superior abierto
  fill(255, 235, 120);
  noStroke();
  arc(610, 330, 120, 120, 0, TWO_PI, PIE);   // círculo relleno
}
```

::: tip Consejo de trabajo
Escribe los sketches **por partes** y ejecuta tras cada figura que añadas: si esperas a escribir el código entero, localizar el error será mucho más costoso.
:::

---

## Ejercicios

1. **Función `saludar`.** Define `def saludar(nombre, lenguaje="Python"):` que muestre `"Hola <nombre>, estás aprendiendo <lenguaje>"`. Llámala con los dos argumentos, solo con el nombre y usando el nombre del parámetro `lenguaje`.
2. **Función con `return`.** Escribe una función `convertir_temperatura(valor, origen)` que convierta Celsius a Fahrenheit (`F = C * 9/5 + 32`) y viceversa según si `origen` vale `"C"` o `"F"`. Devuelve el resultado con `return` redondeado a un decimal y compruébalo con los valores 0, 37 y 100.
3. **Ámbito de variables.** Predice qué imprime este fragmento y justifícalo mencionando los ámbitos local y global. Comprueba después ejecutándolo:

   ```python
   x = 5
   def funcion_a():
       x = 10
       print("A:", x)
   def funcion_b():
       print("B:", x)
   funcion_a()
   funcion_b()
   print("Global:", x)
   ```
4. **Módulo `math`.** Escribe un programa que pida la base y la altura de un triángulo y muestre su área, la hipotenusa (`math.sqrt`) y el ángulo en grados del vértice superior respecto a la base usando `math.degrees(math.atan(...))`.
5. **Sketch con figuras.** Crea un sketch de 600 × 400 que dibuje: fondo a tu elección, tres círculos de distinto tamaño y color, dos rectángulos, un cuadrado, un triángulo, cuatro líneas en cruz y un punto de grosor 10 en el centro. Usa `fill()`, `stroke()`, `strokeWeight()`, `noFill()` y `noStroke()`.
6. **Tarta de sectores.** Crea un sketch que dibuje una "tarta" de 4 sectores (`PIE`) con aperturas 0–`HALF_PI`, `HALF_PI`–`PI`, `PI`–`PI + HALF_PI` y `PI + HALF_PI`–`TWO_PI`, cada uno de un color. Repite la misma figura con `CHORD` y con `OPEN` y explica por escrito las diferencias visuales entre los tres modos.