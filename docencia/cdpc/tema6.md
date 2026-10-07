# TEMA 6: Modelado 3D

### Bloque B. Creación digital y pensamiento computacional | CDPC.1.A.7

> **Currículo LOMLOE - Andalucía** | Criterios: CDPC.1.A.7

---

## 1. Fundamentos del modelado tridimensional

### 1.1. Los tres ejes y el espacio de coordenadas

En un sistema de coordenadas **tridimensional** necesitamos tres valores para localizar cualquier punto. Sobre la pantalla seguimos usando el origen en la esquina superior izquierda, pero añadimos un tercer eje:

| Eje | Dirección | Equivalencia |
|---|---|---|
| **X** | Horizontal, hacia la derecha | Igual que en 2D |
| **Y** | Vertical, hacia abajo | Igual que en 2D (en Processing) |
| **Z** | Hacia delante / hacia el espectador | Novedad del 3D |

Un punto se escribe como `(x, y, z)`; por ejemplo, `translate(100, 50, -80)` mueve el origen 100 px en X, 50 px en Y y 80 px **hacia atrás** (porque el valor de Z es negativo).

### 1.2. Cámara, proyección y solapamiento

Tres conceptos son imprescindibles para comprender cómo se dibuja una escena 3D:

- **Cámara**: es el punto de vista desde el que observamos la escena. Cambiar la cámara es como mover la cámara de un vídeo: la escena no cambia, cambia lo que vemos. En Processing se controla con `camera()`.
- **Proyección**: es la operación matemática que **aplantra** el espacio 3D sobre la pantalla 2D, asignando un tamaño a cada objeto según su distancia. La predeterminada es la **perspectiva**: los objetos lejanos se ven más pequeños y las líneas paralelas convergen. Existe también la **proyección ortogonal** (sin profundidad aparente), útil en planos técnicos.
- **Solapamiento y ocultamiento**: los objetos más cercanos **taparán** a los lejanos. Processing resuelve el **test de profundidad** (*z-buffer*) automáticamente: descarta los fragmentos que quedan detrás de otros ya dibujados. Por eso el orden de dibujo importa mucho menos que en 2D.

::: tip Dibujo no visible
Aunque estemos en 3D, Processing sigue dibujando sobre una superficie de 2 dimensiones: lo 3D es una simulación. Los fragmentos que quedan fuera del volumen visible se recortan (*clipping*) y no se muestran.
:::

---

## 2. Processing en 3D

### 2.1. Activar el modo 3D: `P3D`

Para trabajar en tres dimensiones hay que declarar el motor de renderizado en `size()`:

```java
// Lienzo 3D. El tercer parámetro activa el renderer P3D.
size(800, 600, P3D);
```

Sin `P3D` las funciones 3D no funcionarán correctamente.

### 2.2. Primitivas y sólidos

| Función | Descripción |
|---|---|
| `box(w)`, `box(w, h, d)` | Caja (cubo o paralelepípedo) centrada en el origen |
| `sphere(r)` | Esfera de radio `r` |
| `sphereDetail(n)` | Calidad de la esfera (número de segmentos) |
| `ellipse()`, `rect()` | Siguen funcionando, dibujadas sobre el plano XY |

`cylinder()` **no es una función nativa** de Processing. Se puede aproximar con `ellipse() + rect()` o construir una función propia con `beginShape(QUAD_STRIP)`, como se muestra a continuación:

```java
// Función propia: cilindro vertical de radio r y altura h, centrado en el origen.
void cylinder(float r, float h) {
  int n = 40;                    // número de segmentos del borde
  beginShape(QUAD_STRIP);
  for (int i = 0; i <= n; i++) {
    float angulo = TWO_PI * i / n;
    float x = cos(angulo) * r;
    float z = sin(angulo) * r;
    vertex(x, -h / 2, z);        // círculo superior
    vertex(x,  h / 2, z);        // círculo inferior
  }
  endShape();
  // tapas
  ellipse(0, -h / 2, r * 2, r * 2);
  ellipse(0,  h / 2, r * 2, r * 2);
}
```

### 2.3. Transformaciones en 3D

Se reutilizan las transformaciones del Tema 4 y se añaden las versiones con eje explícito:

- `translate(x, y, z)` — desplazamiento en los tres ejes.
- `rotateX(a)`, `rotateY(a)`, `rotateZ(a)` — rotación alrededor de un eje concreto.
- `rotate(a)` — equivale a `rotateZ(a)`.
- `scale(s)` o `scale(sx, sy, sz)` — escalado.
- `pushMatrix()` / `popMatrix()` — guardan y restauran el estado, igual que en 2D.

### 2.4. Luces

Sin luces, los sólidos se ven planos y monocromos. Processing ofrece varios tipos:

| Función | Efecto |
|---|---|
| `ambientLight(r, g, b)` | Luz difusa uniforme desde todos los lados |
| `directionalLight(r, g, b, dx, dy, dz)` | Luz paralela en una dirección (sol) |
| `pointLight(r, g, b, x, y, z)` | Luz que emite desde un punto (bombilla) |
| `specular(r, g, b)` + `shininess(n)` | Brillo especular de la superficie |
| `noLights()` | Apaga todas las luces |

```java
// Sólidos iluminados: esfera con luz direccional y caja con luz puntual.
size(700, 450, P3D);
background(10, 12, 20);

directionalLight(255, 230, 200, -0.5, -0.5, -1);   // luz tipo sol
pointLight(120, 180, 255, 300, -100, 300);         // luz azulada

noStroke();
fill(220, 120, 60);
translate(-140, 0, 0);
sphere(90);

fill(80, 200, 160);
translate(300, 0, 0);
box(140);
```

### 2.5. Cámara y perspectiva

```java
// Cámara personalizada: la función camera(eye, center, up) define el punto de vista.
//   eyeX, eyeY, eyeZ    -> posición del observador
//   centerX, centerY, centerZ -> punto al que mira
//   upX, upY, upZ       -> vector "arriba" (normalmente 0, -1, 0)
size(700, 450, P3D);
background(15);

camera(0, -250, 400,  0, 0, 0,  0, 1, 0);   // vista cenital
// perspective(PI/3, width/float(height), 10, 5000);  // descomentar para ajustar la proyección

noStroke();
fill(230, 90, 110);
box(160);
fill(90, 170, 230);
translate(0, 0, -200);
sphere(90);
```

Parámetros de `perspective(fovy, aspect, zNear, zFar)`:

- `fovy`: ángulo vertical del campo de visión (en radianes; `PI/3` es un valor habitual).
- `aspect`: proporción ancho/alto, normalmente `width / float(height)`.
- `zNear` / `zFar`: planos de recorte; todo lo más cercano o más lejano no se dibuja.

---

## 3. Ejemplo completo: escena 3D animada

```java
// Escena 3D animada: plataforma giratoria con cajas y una esfera orbital.
// Teclas: '+' y '-' aceleran o frenan la rotación; 'p' alterna la cámara.
float velocidad = 0.01;
float anguloPlataforma = 0;
float anguloOrbita = 0;
boolean camaraAlta = true;

void setup() {
  size(800, 550, P3D);
  noStroke();
}

void draw() {
  background(8, 10, 18);

  // luces de la escena
  ambientLight(70, 70, 80);
  directionalLight(255, 240, 220, -0.4, -0.8, -0.6);

  // cámara: dos puntos de vista alternativos
  if (camaraAlta) {
    camera(0, -320, 520,  0, 0, 0,  0, 1, 0);
  } else {
    camera(450, -60, 350,  0, 0, 0,  0, 1, 0);
  }

  // --- plataforma giratoria ---
  pushMatrix();
  rotateY(anguloPlataforma);

  fill(60, 65, 80);
  translate(0, 60, 0);
  box(340, 20, 340);           // base

  // ocho cajas dispuestas en círculo
  for (int i = 0; i < 8; i++) {
    pushMatrix();
    float a = TWO_PI * i / 8;
    translate(cos(a) * 130, 0, sin(a) * 130);
    rotateY(-a);               // cada caja mira hacia fuera
    fill(200 - i * 15, 110 + i * 12, 90);
    box(50, 60, 50);
    popMatrix();
  }

  // --- esfera en órbita alrededor del conjunto ---
  pushMatrix();
  float eo = anguloOrbita;
  translate(cos(eo) * 220, -80 + 30 * sin(eo * 2), sin(eo) * 220);
  fill(120, 220, 255);
  sphereDetail(30);
  sphere(45);
  popMatrix();

  popMatrix();

  anguloPlataforma += velocidad;   // animación
  anguloOrbita += 0.03;
}

void keyPressed() {
  if (key == '+') velocidad += 0.005;
  if (key == '-') velocidad = max(0, velocidad - 0.005);
  if (key == 'p' || key == 'P') camaraAlta = !camaraAlta;
}
```

---

## 4. Herramientas de modelado 3D

El **modelado 3D** consiste en construir una representación matemática de un objeto volumétrico. Existen dos grandes familias:

- **Modelado por cajas / *mesh***: se parte de primitivas (cubo, esfera) que se deforman y combinan (Blender, SketchUp, Tinkercad).
- **Modelado paramétrico / procedural**: el objeto se define mediante restricciones o código, lo que permite regenerarlo variando parámetros (OpenSCAD, FreeCAD).

### 4.1. Tabla comparativa

| Herramienta | Tipo | Para qué sirve | Curva de aprendizaje | Licencia | Coste |
|---|---|---|---|---|---|
| **Tinkercad** | Cajas en el navegador | Piezas sencillas, iniciación educativa, electrónica y circuitos | **Muy baja** (arrastrar y soltar) | Propietaria (Autodesk) | Gratuita (nube) |
| **Blender** | *Mesh* y escena completa | Animación, modelado orgánico, renderizado, VFX, impresión 3D | **Alta** (muy amplia) | GPL v2+ | Gratuita y código abierto |
| **OpenSCAD** | Código / programático | Piezas técnicas y mecánicas descritas con script; ideal para quien programa | **Media-alta** (pensar en código, no en dibujo) | GPL v2+ | Gratuita y código abierto |
| **FreeCAD** | Paramétrico CAD técnico | Ingeniería, piezas con cotas y restricciones, arquitectura técnica | **Media-alta** | LGPL v2.1 / GPL | Gratuita y código abierto |
| **SketchUp** | Cajas / polígonos | Arquitectura, interiores, maquetas rápidas y presentaciones | **Baja** | Propietaria (Trimble) | Gratuita (versión web) y de pago |

### 4.2. ¿Cuándo usar cada una?

- **Tinkercad**: primeras piezas, aula de informática sin instalación, bloques lógicos y placas.
- **SketchUp**: edificios, habitaciones y mobiliario con medidas reales.
- **Blender**: personajes, escenas orgánicas, animación y texturizado de alta calidad.
- **FreeCAD**: piezas mecánicas con tolerancias, tornillos, engranajes, planos acotados.
- **OpenSCAD**: cuando el diseño **es un algoritmo** —piezas generadas por fórmulas, variaciones masivas, adaptación a datos—. Es el más afin con lo visto en esta asignatura.

Ejemplo mínimo en OpenSCAD, equivalente programático a un sólido de revolución:

```c
// Plato con agujero central: operaciones booleanas de sustracción.
difference() {
  cylinder(h = 12, r = 40, $fn = 64);   // cilindro exterior
  translate([0, 0, -1])
    cylinder(h = 20, r = 12, $fn = 64);  // agujero que se resta
}
```

### 4.3. Exportación de modelos: formato STL

El **STL** (*STereoLithography*) es el formato de intercambio más extendido para objetos 3D. Describe la superficie como una **malla de triángulos** (vértices y normales), sin colores ni texturas.

**Ruta de trabajo habitual:**

1. Se modela en la herramienta elegida.
2. Se **exporta** a STL (`File > Export` / `Export STL`).
3. Se abre el STL en un **slicer** (Cura, PrusaSlicer, Bambu Studio) que lo convierte en **G-code**: capas, rellenos, soportes y temperatura.
4. La impresora 3D ejecuta ese G-code.

::: warning Comprueba la escala
El STL **no guarda unidades**: los programas asientan milímetros o pulgadas por convención. Antes de imprimir, verifica en el slicer que la pieza mide lo que debe.
:::

**STL y Processing:**

- Processing **no lee STL de forma nativa**; `loadShape()` admite formatos como **OBJ**, **DAE**, **SVG** y fuentes **TTF**:

```java
// Carga de un modelo OBJ (misma carpeta data/) con cámara orbital sencilla.
size(700, 500, P3D);
PShape modelo = loadShape("pieza.obj");
background(30);

translate(width / 2, height / 2);
rotateY(frameCount * 0.01);      // giro continuo para inspeccionar la pieza
scale(1.5);
shape(modelo);
```

- Para importar STL en Processing se recurre a **librerías de terceros** (disponibles en *Sketch > Import Library...*), que convierten la malla a una `PShape`.
- Otra vía habitual es **exportar desde Processing** un modelo OBJ con librerías de mallas y llevarlo a un slicer o a Blender.
- Los formatos **OBJ** y **STL** son interoperables: Blender, FreeCAD, Tinkercad y SketchUp trabajan con ambos (y con **3MF**, más moderno y con metadatos).

---

## 5. Síntesis

| Aprendizaje | Herramienta |
|---|---|
| Espacio 3D | Ejes X, Y, Z; punto `(x, y, z)` |
| Punto de vista | `camera(eye, center, up)` |
| Proyección | `perspective(fovy, aspect, zNear, zFar)` |
| Motor de render | `size(w, h, P3D)` |
| Sólidos | `box()`, `sphere()`, `sphereDetail()`; cilindro propio |
| Transformaciones | `translate()`, `rotateX/Y/Z()`, `scale()`, `push/popMatrix()` |
| Iluminación | `ambientLight()`, `directionalLight()`, `pointLight()` |
| Herramientas | Tinkercad, Blender, OpenSCAD, FreeCAD, SketchUp |
| Intercambio | STL (impresión 3D), OBJ (Processing/`loadShape`) |

---

## Ejercicios

1. **Primeros sólidos.** Crea una escena con tres piezas: una caja de 100×40×60 px, una esfera de radio 50 y un cilindro construido con la función propia de la sección 2.2. Sitúalas sin solaparse y asígnales colores distintos. Explica con una frase qué ocurriría si olvidaras `pushMatrix()/popMatrix()` en el cilindro.

2. **Giro en los tres ejes.** Dibuja una pirámide (con `beginShape()` y `vertex()`) que rote simultáneamente con `rotateX()`, `rotateY()` y `rotateZ()` a velocidades distintas. Añade `directionalLight()` y describe cómo cambia la percepción del volumen al apagar las luces con `noLights()`.

3. **Órbita lunar.** Diseña una escena con un planeta fijo en el origen, una luna que orbite a su alrededor y un satélite que orbite a su vez alrededor de la luna. Las órbitas deben animarse con variables acumulativas, no con `frameCount` directamente dentro de las transformaciones.

4. **Comparativa crítica.** Elige una pieza que te gustaría fabricar (por ejemplo, un llavero, un soporte de auriculares o una caja organizadora) y redacta una tabla de decisión con dos columnas: **Tinkercad** y **OpenSCAD**. Indica en qué casos elegirías cada herramienta, justificando la respuesta con la curva de aprendizaje, la necesidad de variaciones paramétricas y la licencia.

5. **De la nube a la impresora.** Documenta por escrito el flujo completo: (a) modela la pieza del ejercicio anterior en la herramienta elegida, (b) expórtala a STL, (c) ábrela en un slicer e indica qué parámetros configurarías (altura de capa, relleno, soportes), (d) explica por qué Processing no puede sustituir a un slicer. Si dispones de impresora, imprime la pieza.

6. **Mini visor 3D con cámara.** Partiendo del ejemplo de la sección 2.5, programa una escena que cargue un archivo `pieza.obj` con `loadShape()` y permita cambiar la cámara con las teclas `1` (vista frontal), `2` (vista lateral) y `3` (vista cenital), alterando los argumentos de `camera()`. Añade la tecla `l` para encender y apagar las luces.
