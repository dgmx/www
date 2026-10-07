# TEMA 5: Arte generativo, fractales y procesamiento de imágenes

### Bloque B. Creación digital y pensamiento computacional | CDPC.1.A.6

> **Currículo LOMLOE - Andalucía** | Criterios: CDPC.1.A.6

---

## 1. Arte generativo en la naturaleza

### 1.1. La secuencia de Fibonacci

La **secuencia de Fibonacci** es una sucesión de números en la que cada término es la suma de los dos anteriores, empezando por 0 y 1:

$$F_0 = 0,\quad F_1 = 1,\quad F_n = F_{n-1} + F_{n-2} \;\text{ para } n \geq 2$$

Así se obtiene: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Dos propiedades la hacen especialmente interesante para el diseño:

- El **cociente entre dos términos consecutivos** se aproxima cada vez más al **número áureo**:

$$\varphi = \frac{1 + \sqrt{5}}{2} \approx 1{,}6180339887\ldots$$

- A partir de cierto término, la secuencia permite construir **rectángulos áureos** encadenados, base de la **espiral áurea**.

### 1.2. Espirales áureas en la naturaleza

Los **girosores**, las **piñas**, las **conchas** o los **cascos de los girasoles** presentan espirales que giran en sentidos opuestos y cuyo número suele ser un par de números consecutivos de Fibonacci (por ejemplo, 34 y 55). La razón es evolutiva: los elementos (semillas, escamas, hojas) se disponen con un giro de unos 137,5° —el llamado **ángulo áureo**, $360°\,(1-\varphi)^{-2} \bmod 360° \approx 137{,}5°$— respecto al anterior, lo que maximiza el espacio ocupado y la exposición a la luz.

```java
// Semilla de girasol generada con el ángulo áureo y la secuencia de Fibonacci.
size(640, 640);
background(255, 240, 200);
noStroke();

int n = 600;                 // número de semillas
float phi = (1 + sqrt(5)) / 2;   // número áureo

for (int i = 0; i < n; i++) {
  // ángulo: giro acumulado de unos 137,5 grados por semilla
  float angulo = i * radians(137.50776405);
  // radio: proporcional a la raíz de i (distribución uniforme en el área)
  float radio = 6 * sqrt(i);
  float x = width / 2 + radio * cos(angulo);
  float y = height / 2 + radio * sin(angulo);
  // el color y el tamaño crecen hacia el exterior
  float t = map(i, 0, n, 0, 1);
  fill(60 + 60 * t, 40 + 40 * t, 20, 255);
  ellipse(x, y, 4 + 8 * t, 4 + 8 * t);
}
```

```java
// Rectángulos áureos encadenados: base de la espiral áurea.
size(640, 400);
background(255);
stroke(40);
strokeWeight(2);
noFill();

float a = 233;                 // término de Fibonacci como lado inicial
float b = a * (1 + sqrt(5)) / 2;  // lado según el número áureo
float x = 20, y = 60;

for (int i = 0; i < 6; i++) {
  if (i % 2 == 0) {
    rect(x, y, b, a);
    x += a;                    // el siguiente rectángulo va a la derecha
  } else {
    rect(x, y, a, b);
    y += b - a;
  }
  float t = a; a = b - a; b = t;   // paso al siguiente par de Fibonacci
}
```

> **Idea clave**: no es que la naturaleza «sepa» matemáticas, sino que la **selección premia** las disposiciones que aprovechan mejor el espacio. El arte generativo imita ese procedimiento: definir una regla numérica y dejar que el algoritmo despliegue la forma.

---

## 2. Fractales

### 2.1. ¿Qué es un fractal?

Un **fractal** es una estructura geométrica que presenta **autosemejanza**: una porción cualquiera de la figura, ampliada, se parece al conjunto completo. Se generan a partir de un procedimiento repetido muchas veces, normalmente mediante **recursión**.

Rasgos característicos:

- **Detalle a cualquier escala**: cuanto más se amplía, más estructura aparece.
- **Dimensión fractal**: a diferencia de una curva (dimensión 1) o una superficie (dimensión 2), muchos fractales tienen dimensión **no entera**. Por ejemplo, la curva de Koch tiende a $D = \dfrac{\ln 4}{\ln 3} \approx 1{,}2619$, porque con cada iteración multiplica su longitud por 4 mientras se mantiene dentro de una escala acotada: «llena» más que una línea pero no llega a llenar una superficie.
- **Origen simple**: reglas cortas aplicadas de forma iterativa producen complejidad emergente.

Ejemplos naturales: costas, ramificaciones de los ríos, nerviuras de las hojas, copos de nieve, retículo pulmonar, relámpagos.

### 2.2. Recursión: el motor de los fractales

Una **función recursiva** es la que **se llama a sí misma** con un argumento más pequeño, hasta alcanzar un caso base en el que deja de repetirse. En Processing (sintaxis tipo Java), la recursión se escribe igual que en cualquier otro lenguaje:

```java
// Ejemplo mínimo de recursión: cuenta hacia atrás hasta 0.
void cuenta(int n) {
  if (n <= 0) {          // caso base: detiene la recursión
    println("¡Fin!");
    return;
  }
  println(n);
  cuenta(n - 1);         // llamada recursiva
}
```

::: warning Regla de oro
Toda función recursiva necesita un **caso base** y debe **acercarse** a él en cada llamada. Si falta una de las dos cosas, el programa entra en bucle infinito y el sistema operativo terminará cerrando el sketch.
:::

### 2.3. Árbol binario recursivo

```java
// Árbol binario: cada rama genera dos ramas hijas más cortas y giradas.
size(700, 500);
background(20, 25, 40);
stroke(220, 200, 160);
strokeWeight(3);
noFill();

translate(width / 2, height - 40);   // base del tronco
rama(150, radians(-90));             // ángulo inicial: hacia arriba

void rama(float largo, float angulo) {
  pushMatrix();
  rotate(angulo);
  line(0, 0, largo, 0);              // trazo de la rama
  translate(largo, 0);               // nos situamos en el extremo

  if (largo > 4) {                   // caso base: longitud mínima
    strokeWeight(max(1, strokeWeight - 0.4));
    rama(largo * 0.72, radians(-25));   // rama izquierda
    rama(largo * 0.72, radians(25));    // rama derecha
  }
  popMatrix();
}
```

Conviene probar variaciones: cambiar el factor `0.72`, el ángulo de bifurcación o el número de ramas (3 en lugar de 2) produce especies vegetales muy distintas.

### 2.4. Curva de Koch

La **curva de Koch** se construye dividiendo cada segmento en tres partes iguales y reemplazando el tercio central por dos segmentos que forman un triángulo equilátero. Iterando sobre los seis lados de un triángulo inicial se obtiene el **copo de nieve de Koch**.

```java
// Copo de nieve de Koch: recursión sobre un segmento inicial.
size(700, 700);
background(10, 20, 40);
stroke(230, 245, 255);
strokeWeight(1.5);
noFill();

// triángulo equilátero inicial inscrito en el lienzo
float lado = 480;
float x1 = width / 2 - lado / 2, y1 = height / 2 + lado / 4;
float x2 = width / 2 + lado / 2, y2 = y1;
float x3 = width / 2,            y3 = height / 2 - lado / 2 + lado / 4;

koch(x1, y1, x2, y2, 5);   // nivel de detalle 5
koch(x2, y2, x3, y3, 5);
koch(x3, y3, x1, y1, 5);

void koch(float ax, float ay, float bx, float by, int nivel) {
  if (nivel == 0) {                     // caso base: dibuja el segmento
    line(ax, ay, bx, by);
    return;
  }
  // puntos de división en tercios
  float dx = (bx - ax) / 3, dy = (by - ay) / 3;
  float px = ax + dx, py = ay + dy;          // primer tercio
  float qx = ax + 2 * dx, qy = ay + 2 * dy;  // segundo tercio
  // vértice del triángulo equilátero (rotación de 60° del vector px->qx)
  float vx = px + (qx - px) * cos(radians(-60)) - (qy - py) * sin(radians(-60));
  float vy = py + (qx - px) * sin(radians(-60)) + (qy - py) * cos(radians(-60));

  koch(ax, ay, px, py, nivel - 1);
  koch(px, py, vx, vy, nivel - 1);
  koch(vx, vy, qx, qy, nivel - 1);
  koch(qx, qy, bx, by, nivel - 1);
}
```

---

## 3. Imagen de mapa de bits

### 3.1. Píxel, resolución, canal y profundidad de color

Una **imagen de mapa de bits** (*bitmap*) es una rejilla rectangular de puntos de color indivisibles llamados **píxeles**. Cuatro magnitudes la definen:

| Concepto | Definición | Ejemplo |
|---|---|---|
| **Píxel** | Mínima unidad de información de la imagen | Un cuadradito con un color |
| **Resolución** | Número de píxeles en alto × ancho | 1920 × 1080 px |
| **Canal** | Valor de un componente de color (R, G, B, A) | Rojo = 200 |
| **Profundidad de color** | Bits por píxel → número de colores posibles | 8 bits = 256 colores; 24 bits = 16 777 216 colores |

En el modelo **RGB** aditivo, cada píxel almacena tres valores de 0 a 255:

- **R** (rojo), **G** (verde), **B** (azul).
- `color(255, 0, 0)` es rojo puro; `color(0, 0, 0)` es negro; `color(255)` es gris claro y `color(255, 255, 255)` blanco.
- Profundidad de **24 bits** = 8 bits por canal × 3 canales = $2^{24} = 16\,777\,216$ colores posibles. Si se añade el canal alfa (transparencia) hablamos de **32 bits**.

### 3.2. Acceso a los píxeles en Processing

Processing gestiona la imagen con la clase `PImage`. Las dos formas de trabajar con sus píxeles son:

- **Método directo (sencillo)**: `img.get(x, y)` devuelve el color de una posición y `img.set(x, y, c)` lo escribe. Ideal para operaciones puntuales, pero lento si se recorre la imagen entera (llamada a función por píxel).
- **Método masivo (rápido)**: `img.loadPixels()` carga el array `img.pixels[]` en memoria; se recorre con un bucle y, al terminar, `img.updatePixels()` lo escribe de vuelta. El índice de un píxel es `i = x + y * img.width`.

```java
// Carga de una imagen del directorio data/ y visualización con ambas técnicas.
// Guarda la foto como "foto.jpg" dentro de una carpeta data/ junto al sketch.
size(800, 400);
PImage img = loadImage("foto.jpg");
image(img, 0, 0);                      // imagen original a la izquierda

// copia pixel a pixel usando get()/set()
PImage copia = createImage(img.width, img.height, RGB);
for (int x = 0; x < img.width; x++) {
  for (int y = 0; y < img.height; y++) {
    color c = img.get(x, y);
    copia.set(x, y, c);
  }
}
image(copia, img.width, 0);
```

---

## 4. Filtros pixel a pixel

### 4.1. Estructura común de un filtro

Todo filtro sigue el mismo esquema:

1. Cargar la imagen con `loadImage()`.
2. Llamar a `loadPixels()` para traer los píxeles al array.
3. Recorrer la imagen con dos bucles anidados.
4. Leer el color, **extraer sus canales** con `red()`, `green()`, `blue()`.
5. Calcular el nuevo valor y guardarlo en `pixels[i]`.
6. Llamar a `updatePixels()` y mostrar con `image()`.

Toda la diferencia entre filtros está en el paso 4: la **fórmula** que transforma los canales.

### 4.2. Escala de grises (luminancia)

Convertir a gris no consiste en promediar simplemente: el ojo humano es más sensible al verde. Se usa la fórmula de **luminancia**:

```java
// Filtro: escala de grises por luminancia.
size(800, 400);
PImage img = loadImage("foto.jpg");

img.loadPixels();
for (int i = 0; i < img.pixels.length; i++) {
  float r = red(img.pixels[i]);
  float g = green(img.pixels[i]);
  float b = blue(img.pixels[i]);
  // pesos de la luminancia: 0,3·R + 0,59·G + 0,11·B
  float gris = 0.3 * r + 0.59 * g + 0.11 * b;
  img.pixels[i] = color(gris, gris, gris);
}
img.updatePixels();
image(img, 0, 0);
```

### 4.3. Negativo (inversión)

```java
// Filtro: negativo, invirtiendo cada canal con 255 - valor.
size(800, 400);
PImage img = loadImage("foto.jpg");

img.loadPixels();
for (int i = 0; i < img.pixels.length; i++) {
  float r = 255 - red(img.pixels[i]);
  float g = 255 - green(img.pixels[i]);
  float b = 255 - blue(img.pixels[i]);
  img.pixels[i] = color(r, g, b);
}
img.updatePixels();
image(img, 0, 0);
```

### 4.4. Umbral (binarización)

El filtro de **umbral** convierte la imagen en blanco y negro puros: si la luminancia supera un valor crítico el píxel es blanco, en caso contrario negro. Es la base de la **segmentación** y del reconocimiento de siluetas.

```java
// Filtro: umbral (binarización) con valor de corte 128.
size(800, 400);
PImage img = loadImage("foto.jpg");

int umbral = 128;
img.loadPixels();
for (int i = 0; i < img.pixels.length; i++) {
  float r = red(img.pixels[i]);
  float g = green(img.pixels[i]);
  float b = blue(img.pixels[i]);
  float gris = 0.3 * r + 0.59 * g + 0.11 * b;
  if (gris > umbral) {
    img.pixels[i] = color(255);        // blanco
  } else {
    img.pixels[i] = color(0);          // negro
  }
}
img.updatePixels();
image(img, 0, 0);
```

### 4.5. Sepia

El tono sepia se obtiene aplicando una **mezcla ponderada** de los canales y reduciendo el contraste hacia los marrones:

```java
// Filtro: sepia con combinación lineal de canales.
size(800, 400);
PImage img = loadImage("foto.jpg");

img.loadPixels();
for (int i = 0; i < img.pixels.length; i++) {
  float r = red(img.pixels[i]);
  float g = green(img.pixels[i]);
  float b = blue(img.pixels[i]);
  // fórmula clásica de sepia
  float nr = min(255, 0.393 * r + 0.769 * g + 0.189 * b);
  float ng = min(255, 0.349 * r + 0.686 * g + 0.168 * b);
  float nb = min(255, 0.272 * r + 0.534 * g + 0.131 * b);
  img.pixels[i] = color(nr, ng, nb);
}
img.updatePixels();
image(img, 0, 0);
```

### 4.6. Extracción de un canal

Aislamos un solo canal y lo replicamos en los tres para obtener una imagen dominada por ese componente:

```java
// Filtro: canal rojo dominante.
size(800, 400);
PImage img = loadImage("foto.jpg");

img.loadPixels();
for (int i = 0; i < img.pixels.length; i++) {
  float r = red(img.pixels[i]);
  img.pixels[i] = color(r, r * 0.3, r * 0.3);   // rojo puro atenuado
}
img.updatePixels();
image(img, 0, 0);
```

### 4.7. Comparativa de filtros

| Filtro | Operación sobre los canales | Efecto visual |
|---|---|---|
| **Escala de grises** | $0{,}3R + 0{,}59G + 0{,}11B$ en los tres canales | Blanco y negro con matices |
| **Negativo** | $255 - R,\; 255 - G,\; 255 - B$ | Inversión tipo película rayada |
| **Umbral** | Si luminancia > T → 255, si no → 0 | Dos niveles, siluetas marcadas |
| **Sepia** | Combinación lineal con pesos ~0,3 / 0,7 / 0,18 | Fotografía antigua |
| **Canal rojo** | Se conserva R y se atenúan G y B | Tono rojizo dominante |

---

## 5. Síntesis

| Aprendizaje | Herramienta |
|---|---|
| Fibonacci y número áureo | Secuencia $F_n = F_{n-1} + F_{n-2}$, ángulo de 137,5° |
| Espirales y rosetas generativas | `sqrt(i)`, `cos()`, `sin()` con giro acumulado |
| Fractales y recursión | Función que se llama a sí misma + caso base |
| Fractal típico en Processing | Árbol binario, curva de Koch / copo de nieve |
| Imagen de mapa de bits | `PImage`, píxel, resolución, canal RGB, profundidad |
| Acceso a píxeles | `get()/set()` (puntual) o `loadPixels()/pixels[]/updatePixels()` (masivo) |
| Filtros | Escala de grises, negativo, umbral, sepia, canales |

---

## Ejercicios

1. **Sucesor de Fibonacci.** Escribe un sketch en Processing que almacene los 30 primeros términos de la secuencia en un `int[]` usando un bucle (sin recursión) y los muestre en pantalla en dos columnas: el término y el cociente aproximado con su siguiente. Observa a partir de qué posición el cociente se estabiliza en torno a 1,618.

2. **Girasol paramétrico.** Modifica el ejemplo de la sección 1.1 para que el número de semillas, el paso angular y el tamaño inicial se lean de variables al inicio del código. Experimenta con `137,5°`, `90°` y `60°` y explica qué patrón visual produce cada valor.

3. **Árbol con tres ramas.** Partiendo del árbol binario de la sección 2.3, haz que cada rama genere **tres** ramas hijas con ángulos de −30°, 0° y +30°. Controla el nivel de profundidad con un parámetro adicional en lugar de limitar solo la longitud, y dibuja las ramas finales en verde y el tronco en marrón.

4. **Copo de nieve de Minkowski.** Investiga brevemente una variante de la curva de Koch y descríbela como pseudocódigo antes de programarla. Implementa la versión básica con nivel de detalle 3 y dibuja los seis lados de un hexágono regular en lugar de un triángulo.

5. **Comparador de filtros.** Crea un sketch que muestre **tres copias** de la misma imagen en pantalla: original, escala de grises y negativo. Usa `get()` y `set()` en una de las copias y `loadPixels()/pixels[]` en otra; mide con `millis()` el tiempo de cada proceso y anota cuál es más rápido y por qué.

6. **Filtro propio: duotono.** Implementa un filtro que convierta la imagen en dos colores fijos (por ejemplo, azul oscuro para las zonas oscuras y naranja claro para las claras) usando la luminancia como valor de interpolación con `lerpColor(colorA, colorB, gris / 255)`. Añade una tecla para alternar entre el filtro y la imagen original.
