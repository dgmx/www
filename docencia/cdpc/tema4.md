# TEMA 4: Eventos, gráficos vectoriales y transformaciones

### Bloque B. Creación digital y pensamiento computacional | CDPC.1.A.5

> **Currículo LOMLOE - Andalucía** | Criterios: CDPC.1.A.5

---

## 1. Gráficos vectoriales y diseño generativo

### 1.1. Gráficos vectoriales frente a mapa de bits

En procesamiento de imágenes conviven dos grandes familias de representación:

| Característica | **Gráfico vectorial** | **Imagen de mapa de bits** |
|---|---|---|
| Elemento básico | Primitivas geométricas (punto, línea, curva) | Píxeles en una rejilla |
| Escalado | Sin pérdida de calidad | Se pixela y se degrada |
| Edición | Se modifican los objetos por separado | Se modifican píxeles sueltos |
| Tamaño de archivo | Suele ser menor en dibujos técnicos | Crece con la resolución |
| Uso típico | Logotipos, ilustración, tipografía, croquis | Fotografías, capturas, texturas |

En Processing trabajamos sobre todo con **gráficos vectoriales**: cada forma se describe mediante coordenadas y parámetros (`line(x1, y1, x2, y2)`), de modo que podemos redibujarla a otra escala sin que se deteriore. La imagen de mapa de bits se estudia en el Tema 5.

### 1.2. Diseño digital generativo basado en algoritmos

Un **diseño generativo** es aquel cuya apariencia final la define un **algoritmo**: el artista no dibuja cada trazo a mano, sino que fija reglas, parámetros y grados de azar, y el programa produce la obra. Sus rasgos fundamentales son:

- **Regla explícita**: el diseño se describe como una secuencia finita de instrucciones (CDPC.1.A.2).
- **Iteración**: se repiten módulos, simetrías o variaciones mediante bucles (CDPC.1.A.3).
- **Parámetros variables**: colores, longitudes, densidades o semillas aleatorias que producen familias enteras de composiciones.
- **Emergencia**: de reglas simples aparecen estructuras visuales complejas y difíciles de prever a simple vista.

Ejemplos habituales: tramas de líneas con variación de grosor, mosaicos irregulares, estelas de partículas, composiciones tipográficas repetidas, mapas abstractos generados a partir de datos o de números aleatorios.

```java
// Composición generativa: rejilla de cuadrados con tamaño y tono aleatorios.
// Cada ejecución produce una variante distinta de la misma regla.
size(600, 600);
noStroke();
int celda = 40;                     // tamaño de celda de la rejilla
for (int x = 0; x < width; x += celda) {
  for (int y = 0; y < height; y += celda) {
    float t = random(0.2, 1.0);     // parámetro aleatorio por celda
    fill(40 + 180 * t, 90, 160 + 70 * t);
    float lado = celda * t;         // el lado depende del parámetro
    rect(x + (celda - lado) / 2, y + (celda - lado) / 2, lado, lado);
  }
}
```

---

## 2. Eventos: ratón y teclado

### 2.1. ¿Qué es un evento?

Un **evento** es cualquier acción del usuario (pulsar el ratón, moverlo, teclear) que interrumpe el flujo normal del programa. Processing ofrece una solución sencilla: basta con **definir una función con un nombre concreto** y el entorno la ejecutará automáticamente cada vez que ocurra ese suceso. No hay que registrar ningún oyente ni escribir un bucle de espera.

Las funciones de evento se escriben **fuera** de `setup()` y de `draw()`, normalmente al final del archivo:

```java
void mousePressed() { ... }   // al pulsar un botón del ratón
void mouseDragged()  { ... }   // al arrastrar con un botón pulsado
void mouseReleased() { ... }   // al soltar el botón
void keyPressed()    { ... }   // al pulsar una tecla
void keyReleased()   { ... }   // al soltar la tecla
```

### 2.2. Variables disponibles del ratón y del teclado

| Variable | Tipo | Significado |
|---|---|---|
| `mouseX`, `mouseY` | `int` | Posición actual del puntero en el lienzo |
| `pmouseX`, `pmouseY` | `int` | Posición del puntero en el **frame** anterior |
| `mousePressed` | `boolean` | `true` mientras hay un botón pulsado |
| `mouseButton` | `int` | Botón activo: `LEFT`, `RIGHT` o `CENTER` |
| `key` | `char` | Última tecla pulsada (carácter) |
| `keyCode` | `int` | Código numérico de la tecla (flechas, MAYÚS...) |

> **Consejo**: `pmouseX/pmouseY` es la clave para dibujar trazos continuos: conectando la posición actual con la anterior obtenemos un segmento por cada fotograma.

### 2.3. Ejemplo: pintar al arrastrar y borrar con la barra espaciadora

```java
// Pizarra con eventos de ratón y teclado.
// - Arrastrar el ratón dibuja un trazo.
// - Pulsa 'c' o la barra espaciadora para limpiar el lienzo.
size(640, 400);
background(30);
stroke(255);
strokeWeight(3);

void draw() {
  // Dibujo continuo: se actualiza solo cuando el botón está pulsado
  if (mousePressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

void mousePressed() {
  // Un punto inicial evita el "salto" de la primera línea
  point(mouseX, mouseY);
}

void keyPressed() {
  if (key == 'c' || key == 'C' || key == ' ') {
    background(30);              // borrar el lienzo
  }
}
```

### 2.4. Ejemplo: dibujo a mano alzada combinando `point()` y `line()`

El dibujo a mano alzada es el ejemplo clásico de uso conjunto de **punto** y **línea**: se coloca un punto en la posición actual y se traza un segmento hacia ella desde la anterior.

```java
// Dibujo a mano alzada con cambio de color y grosor por teclado.
// Teclas: '+' engrosa el trazo, '-' lo adelgaza, 'l' limpia.
size(700, 450);
background(255);
stroke(20, 60, 140);
strokeWeight(4);
noFill();

void draw() {
  if (mousePressed) {
    // punto en la posición actual del ratón
    point(mouseX, mouseY);
    // y segmento desde la posición del fotograma anterior
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

void mouseDragged() {
  // coloreamos el trazo según la posición horizontal
  stroke(mouseX * 255 / width, 80, 180);
}

void keyPressed() {
  if (key == '+') strokeWeight(strokeWeight + 1);
  if (key == '-') strokeWeight(max(1, strokeWeight - 1));
  if (key == 'l' || key == 'L') {
    background(255);
    strokeWeight(4);
  }
}
```

::: warning Atención
Si en `mousePressed()` no dibujas nada, al hacer clic y arrastrar de golpe puede aparecer un **hueco** en el trazo: `pmouseX/pmouseY` aún no se ha actualizado. Por eso se marca primero un `point()` en la posición actual.
:::

---

## 3. Transformaciones espaciales

### 3.1. El sistema de coordenadas y la matriz de transformación

De forma predeterminada, el origen `(0, 0)` está en la esquina superior izquierda y el eje **X** crece hacia la derecha y el eje **Y** hacia abajo. Las transformaciones no modifican los datos de las figuras: modifican el **sistema de referencia** en el que se dibuja, mediante una **matriz** interna que Processing multiplica por cada coordenada.

Las tres transformaciones fundamentales son:

- **`translate(dx, dy)`**: desplaza el origen del sistema (traslación).
- **`rotate(ángulo)`**: gira el sistema alrededor del origen, en **radianes** (giro positivo = sentido horario porque Y apunta hacia abajo).
- **`scale(sx, sy)`**: escala el sistema (ampliación o reducción).

```java
// Las tres transformaciones básicas aplicadas a un rectángulo.
size(640, 360);
background(20);
stroke(255);
noFill();

// Traslación: el rectángulo se dibuja desplazado
translate(120, 180);
rect(0, 0, 80, 50);

// Rotación: giramos el sistema 45 grados y volvemos a dibujar
rotate(radians(45));
rect(140, 0, 80, 50);

// Escalado: ampliamos el sistema 2 veces
scale(2);
rect(0, -140, 30, 20);
```

> **Unidad de ángulo**: Processing trabaja en **radianes**. `radians(90)` convierte 90 grados a `PI/2` radianes; a la inversa, `degrees(PI)` devuelve 180.

### 3.2. El orden importa

Las transformaciones se aplican en el **orden en que se escriben**, de arriba abajo. Si cambiamos el orden, el resultado es distinto:

```java
// Comparación del orden de las transformaciones.
size(640, 240);
background(20);
stroke(255);
noFill();

// Caso A: primero trasladar y después girar -> gira alrededor del nuevo origen
translate(160, 120);
rotate(radians(45));
rect(-30, -30, 60, 60);

// Caso B: primero girar y después trasladar -> rota en torno al origen original
translate(480, 120);
rect(-30, -30, 60, 60);
rotate(radians(45));
rect(-30, -30, 60, 60);
```

### 3.3. `pushMatrix()` y `popMatrix()`

Cada transformación es **acumulativa**: si trasladas 100 px y vuelves a trasladar 100 px, acabas en 200 px. Para que una figura quede aislada del efecto de las transformaciones anteriores se **guarda el estado** con `pushMatrix()` y se **restaura** con `popMatrix()`:

```java
// Estado de transformación: cada estrella se dibuja en su propio sistema.
size(640, 360);
background(15, 25, 45);
stroke(255, 210, 90);
strokeWeight(2);
fill(255, 120, 60, 90);

for (int i = 0; i < 6; i++) {
  pushMatrix();                  // guardo el sistema actual
  translate(90 + i * 95, 180);   // me muevo a la posición de la figura
  rotate(radians(i * 15));       // giro local, no afecta a las demás
  scale(0.6 + i * 0.15);         // escala local
  rect(-35, -35, 70, 70);
  ellipse(0, 0, 30, 30);
  popMatrix();                   // restauro el sistema anterior
}
```

La regla práctica es: **todo lo que se dibuje entre `pushMatrix()` y `popMatrix()` vive en su propio sistema de coordenadas**.

---

## 4. Diseño de patrones

### 4.1. Patrones con bucles y transformaciones

Un **patrone** es una estructura visual que se repite según una regla. Combinando bucles (repeticiones) con transformaciones (desplazamientos, giros, escalados) obtenemos tres familias clásicas:

1. **Rejillas**: dos bucles anidados que desplazan el origen.
2. **Espirales**: un solo bucle que acumula rotación y traslación.
3. **Rosetas**: giros sucesivos alrededor de un mismo centro (simetría rotacional).

### 4.2. Rejilla de motivos

```java
// Rejilla 8x5 con rotación alternada: patrón textil sencillo.
size(640, 400);
background(250, 245, 235);
stroke(30);
strokeWeight(1.5);
fill(90, 160, 200);

int filas = 5, columnas = 8;
float ancho = width / columnas;
float alto = height / filas;

for (int f = 0; f < filas; f++) {
  for (int c = 0; c < columnas; c++) {
    pushMatrix();
    translate(c * ancho + ancho / 2, f * alto + alto / 2);
    // alternamos la orientación para crear ritmo visual
    if ((f + c) % 2 == 0) rotate(radians(45));
    rect(-18, -18, 36, 36);
    popMatrix();
  }
}
```

### 4.3. Espiral de cuadrados

```java
// Espiral construida acumulando rotación y traslación en cada paso.
size(640, 640);
background(10);
noFill();
strokeWeight(2);

translate(width / 2, height / 2);   // centro de la espiral
float angulo = 0;
float distancia = 0;

for (int i = 0; i < 220; i++) {
  angulo += radians(13);            // giro acumulado (ángulo áureo aproximado)
  distancia += 2.4;                 // radio creciente
  stroke(80 + i, 200 - i / 2, 255);
  pushMatrix();
  rotate(angulo);
  translate(distancia, 0);
  rect(-6, -6, 12, 12);
  popMatrix();
}
```

### 4.4. Roseta con simetría rotacional

```java
// Roseta de 12 pétalos: se dibuja una vez y se replica rotando.
size(600, 600);
background(20, 12, 30);
stroke(255, 190, 80);
strokeWeight(1.5);
fill(255, 90, 140, 70);

translate(width / 2, height / 2);   // centro del lienzo
int n = 12;                         // número de pétalos

for (int i = 0; i < n; i++) {
  pushMatrix();
  rotate(TWO_PI * i / n);           // giro equiespaciado (360° / n)
  ellipse(70, 0, 140, 40);          // pétalo desplazado sobre el eje X
  popMatrix();
}

// centro decorativo
fill(255, 220, 120);
ellipse(0, 0, 60, 60);
```

---

## 5. Síntesis

| Aprendizaje | Herramienta en Processing |
|---|---|
| Gráficos vectoriales | Figuras definidas por coordenadas, escalables sin pérdida |
| Diseño generativo | Algoritmo + parámetros + azar controlado |
| Eventos de ratón | `mousePressed()`, `mouseDragged()`, `mouseReleased()`, `mouseX/Y`, `pmouseX/Y` |
| Eventos de teclado | `keyPressed()`, `keyReleased()`, `key`, `keyCode` |
| Dibujo a mano alzada | `point()` + `line(pmouseX, pmouseY, mouseX, mouseY)` |
| Transformaciones | `translate()`, `rotate()`, `scale()` |
| Aislamiento de estado | `pushMatrix()` / `popMatrix()` |
| Patrones | Bucles + transformaciones (rejilla, espiral, roseta) |

---

## Ejercicios

1. **Mural interactivo.** Crea un sketch donde, al mantener pulsado el ratón y arrastrarlo, se dibujen cuadrados de 20 px de lado en la posición del puntero, con un color que dependa de `mouseY`. Al pulsar la tecla `g`, el lienzo debe limpiarse. Incluye un comentario que explique por qué se usa `pmouseX/pmouseY`.

2. **Retrato a mano alzada.** Diseña una herramienta de dibujo con tres modos seleccionados por teclas: `1` trazo fino y azul, `2` trazo grueso y rojo, `3` borrador (color del fondo). Añade una función `mouseReleased()` que dibuje un círculo pequeño en el punto de soltado para marcar el final del trazo.

3. **Patrón de damero rotado.** Genera una rejilla de 10 × 10 celdas en la que solo se dibuje un cuadrado cuando la suma de los índices de fila y columna sea par. Aplica `rotate(radians(45))` dentro de `pushMatrix()/popMatrix()` de modo que cada cuadrado gire sobre su propio centro. Explica con una frase qué ocurriría si eliminaras las llamadas a `pushMatrix()` y `popMatrix()`.

4. **Roseta de pétalos elípticos.** Dibuja una roseta con 20 pétalos usando `ellipse()` y rotaciones de `TWO_PI * i / 20`. Para cada pétalo, varía el color con `map(i, 0, 19, 0, 255)` y la longitud del eje mayor entre 60 y 160 px. El resultado debe quedar centrado en el lienzo.

5. **Espiral de Fibonacci visual.** Partiendo del bucle de la espiral de la sección 4.3, sustituye el incremento lineal de la distancia por el incremento que proporciona la **secuencia de Fibonacci** (1, 1, 2, 3, 5, 8, 13, 21...). Genera la secuencia con un bucle y dibuja un cuadrado por cada término. (Se conecta con el Tema 5.)

6. **Analiza el siguiente código** y describe, sin ejecutarlo, qué se verá en pantalla y por qué. Después modifícalo para que la figura resultante sea el doble de grande y esté desplazada 50 px a la derecha:

```java
size(500, 300);
background(255);
translate(250, 150);
rotate(radians(30));
rect(-40, -40, 80, 80);
```
