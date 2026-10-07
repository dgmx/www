# TEMA 7: Vídeo, audio y animaciones
### Bloque B. Creación digital y pensamiento computacional | CDPC.1.A.8

> **Currículo LOMLOE - Andalucía** | Criterios: CDPC.1.A.8

---

## 1. Animación por ordenador

### 1.1. La ilusión de movimiento

La **animación** es la técnica que da la sensación de movimiento a una serie de imágenes estáticas. El cerebro humano percibe continuidad cuando ve imágenes sucesivas cambiando a una velocidad suficiente: es el mismo principio que usaban las **linternas mágicas** o los **zoológropos** del siglo XIX, y el que sigue en la base de cualquier vídeo o videojuego.

- **Animación tradicional:** cada fotograma se dibuja a mano (o se modela) y después se fotografían en orden.
- **Animación digital:** se escribe un **algoritmo** que calcula cómo cambia la escena en cada instante; el ordenador genera los fotogramas automáticamente. Cambiar una variable del programa cambia toda la animación.

En programación, animar significa que en cada **ciclo de dibujo** modifiquemos un poco el estado del programa (posición, color, tamaño) antes de volver a pintar la escena.

### 1.2. Velocidad de refresco y fps

La **velocidad de refresco** es el número de imágenes (fotogramas o *frames*) que se muestran por segundo. Se mide en **fps** (*frames per second*):

| fps | Contexto típico | Sensación |
|-----|-----------------|-----------|
| 12-15 | Animación muy estilizada | Movimiento entrecortado |
| 24 | Cine tradicional | Estándar cinematográfico |
| 25 | Vídeo PAL (Europa) | Televisión clásica |
| 30 | Vídeo web, redes sociales | Fluido para grabaciones |
| 60 | Videojuegos, realidad virtual | Muy fluido, poco *motion blur* |

Por debajo de unas **10-12 fps** el ojo deja de ver movimiento continuo y percibe imágenes sucesivas. La persistencia retiniana (la imagen sigue en la retina una décima de segundo aproximadamente) y el **fenómeno del phi** completan la ilusión.

### 1.3. Cuadros de dibujo en Processing

En Processing, el método `draw()` se ejecuta de forma repetida, normalmente **60 veces por segundo** por defecto. Cada ejecución es un cuadro de dibujo. Disponemos de varias herramientas para controlar el tiempo:

- **`frameRate(n)`** — fija cuántos fotogramas por segundo se dibujan (se llama en `setup()`).
- **`frameCount`** — variable global con el número de fotograma dibujado desde el arranque; útil para hacer cosas que ocurren "cada N fotogramas".
- **`millis()`** — devuelve los milisegundos transcurridos desde que arrancó el sketch; ideal para temporizadores.
- **`deltaTime`** — milisegundos transcurridos entre el fotograma anterior y el actual. Permite que el movimiento sea **independiente de la velocidad de refresco**: si la pantalla dibuja a 30 o a 60 fps, el objeto recorre la misma distancia en el mismo tiempo real.

```java
float x = 0;
float velocidad = 0.25;   // píxeles por milisegundo

void setup() {
  size(700, 300);
  frameRate(60);
}

void draw() {
  background(20, 24, 40);
  fill(255, 200, 60);
  noStroke();
  circle(x, height / 2, 50);

  // deltaTime hace el movimiento independiente de los fps
  x += velocidad * deltaTime;

  // reinicio al salir de la ventana
  if (x > width + 25) {
    x = -25;
  }

  fill(255);
  textSize(14);
  text("fps: " + int(frameRate) + "  |  fotograma: " + frameCount, 10, 20);
}
```

**Cuidado:** un bucle infinito mal planteado (por ejemplo, un `while` dentro de `draw()` que nunca termina) bloquea el programa y deja de refrescar la pantalla. En animación, el "bucle" es `draw()` mismo.

---

## 2. Animar formas con variables y trigonometría

### 2.1. Movimiento circular con sin() y cos()

Para mover algo en círculo no hay que "adivinar" coordenadas: basta con un **ángulo** que avanza en cada fotograma y las funciones trigonométricas. Un punto del círculo de centro $(x_c, y_c)$ y radio $r$ situado en el ángulo $\theta$ (en radianes) está en:

$$x = x_c + r \cdot \cos(\theta), \qquad y = y_c + r \cdot \sin(\theta)$$

```java
float angulo = 0;           // ángulo actual (radianes)
float radio = 160;
float centroX, centroY;

void setup() {
  size(600, 400);
  centroX = width / 2;
  centroY = height / 2;
}

void draw() {
  background(10, 12, 30);

  // órbita de referencia
  noFill();
  stroke(80);
  ellipse(centroX, centroY, radio * 2, radio * 2);

  // posición calculada con trigonometría
  float x = centroX + cos(angulo) * radio;
  float y = centroY + sin(angulo) * radio;

  noStroke();
  fill(90, 200, 255);
  circle(x, y, 36);

  // el ángulo avanza en cada fotograma
  angulo += 0.04;           // ≈ 0,04 rad por fotograma
  if (angulo > TWO_PI) {
    angulo -= TWO_PI;
  }
}
```

En Processing, `sin()` y `cos()` esperan **radianes** (2π radianes = 360°; `radians(grados)` convierte). Si en lugar de avanzar por fotograma hacemos `angulo = millis() * 0.001`, el movimiento depende del tiempo real, no de los fps.

### 2.2. Oscilaciones y trayectorias variadas

Combinando amplitud, frecuencia y desfase obtenemos muchos patrones:

```java
void setup() {
  size(700, 400);
}

void draw() {
  background(15);
  float t = millis() * 0.001;   // tiempo en segundos

  // 1) Oscilación vertical tipo muelle (movimiento armónico)
  float yResorte = height / 2 + sin(t * 3) * 80;
  fill(255, 120, 120);
  circle(150, yResorte, 40);

  // 2) Curva de Lissajous: dos oscilaciones con distinta frecuencia
  for (int i = 0; i < 200; i++) {
    float u = i * 0.03 + t;
    float x = 450 + sin(u * 3) * 120;
    float y = height / 2 + sin(u * 2) * 90;
    stroke(120, 255, 180, 150);
    point(x, y);
  }

  // 3) Respiración: amplitud modulada por otra onda
  float amp = map(sin(t * 0.7), -1, 1, 40, 110);
  float xRes = 600 + cos(t * 2) * amp;
  float yRes = height / 2 + sin(t * 2) * amp;
  noStroke();
  fill(255, 210, 90);
  circle(xRes, yRes, 34);
}
```

Trucos habituales:

- **`sin(t)`** entre -1 y 1 → con `map()` se lleva a cualquier rango (tamaño, color, opacidad).
- Cambiar la **frecuencia** (`t * 3`) acelera la oscilación; cambiar la **fase** (`t + HALF_PI`) la desplaza en el tiempo.
- Sumar varios senos de distinta frecuencia da movimientos orgánicos (base del **ruido de Perlin**, que verás en arte generativo).

---

## 3. El vídeo como vector de fotogramas

### 3.1. Fotograma, fps y resolución

Un archivo de vídeo no es más que una **secuencia ordenada de imágenes (fotogramas)** junto con información de reproducción. Tratar el vídeo "como vector de fotogramas" significa que podemos recorrerlo, contarlo, extraerlo y operar con cada imagen de forma individual.

- **Fotograma:** una imagen individual del vídeo.
- **fps:** fotogramas por segundo del archivo (p. ej. 25 fps → 1500 fotogramas en un minuto).
- **Resolución:** número de píxeles de cada fotograma, p. ej. `1920 × 1080` (Full HD). A mayor resolución, más píxeles hay que procesar por fotograma.
- **Duración:** se relaciona por $$\text{nº de fotogramas} = \text{fps} \times \text{duración en segundos}$$ (p. ej. un clip de 10 s a 30 fps contiene 300 fotogramas de 1920 × 1080 píxeles).

### 3.2. Códec y contenedor

- **Contenedor:** el "embalaje" del archivo (`.mp4`, `.avi`, `.mov`, `.mkv`); dentro lleva vídeo, audio y metadatos.
- **Códec:** el algoritmo que comprime y descomprime el flujo de vídeo (`H.264`, `H.265/HEVC`, `VP9`, `AV1`). Al ser **compresión con pérdida**, no debemos editar muchas veces el mismo archivo sin pasar a un formato intermedio sin pérdida. En Processing lo habitual es un `.mp4` con códec **H.264**, compatible con casi todo.

### 3.3. Tratamientos del vídeo

| Tratamiento | Qué se hace | Ejemplo de uso |
|-------------|-------------|----------------|
| **Recorte** | Conservar un intervalo de tiempo (por ejemplo, del segundo 5 al 15) | Ajustar una grabación a la escena útil |
| **Extracción de fotogramas** | Guardar los fotogramas como imágenes `.png` o `.jpg` | Análisis píxel a píxel, hojas de sprites |
| **Reproducción** | Reproducir, pausar, buscar (`jump`), cambiar velocidad | Instalación que reproduce vídeo en bucle |
| **Captura con cámara** | Grabar la webcam como nueva secuencia de imágenes | Mirror interactivo, filtro en tiempo real |
| **Superposición / mezcla** | Dibujar encima del vídeo, alterar sus píxeles | Videoremix, visor con filtros |

Existen programas específicos (ffmpeg, Shotcut, DaVinci Resolve) para estas tareas; en esta asignatura aprenderás a hacer buena parte de ellas **programando**, lo que te da control total.

---

## 4. Vídeo en Processing: librería Video

La librería **Video** de Processing (`import processing.video.*;`) aporta dos clases principales:

- **`Movie`** — reproduce archivos de vídeo (`.mp4`, `.mov`…).
- **`Capture`** — captura imágenes de una cámara (webcam) o de una fuente de vídeo en directo.

Antes de empezar, instala la librería desde *Sketch → Import Library → Manage Libraries* y busca **Video**.

### 4.1. Reproducir un archivo .mp4 con Movie

```java
import processing.video.*;

Movie miVideo;

void setup() {
  size(800, 450);
  // el archivo debe estar en la pestaña del sketch (data/) o en la raíz
  miVideo = new Movie(this, "paisaje.mp4");
  miVideo.loop();          // reproducción en bucle: play(), pause(), stop(), jump(s)
}

void draw() {
  // solo leemos cuando hay un fotograma nuevo disponible
  if (miVideo.available()) {
    miVideo.read();        // carga el fotograma actual en el Movie
  }
  image(miVideo, 0, 0, width, height);   // dibuja el último fotograma

  fill(255);
  text("Tiempo: " + nf(miVideo.time(), 1, 1) + " / "
       + nf(miVideo.duration(), 1, 1) + " s", 10, 20);
}

void mousePressed() {
  // pausa/reanudación con clic
  if (miVideo.isPlaying()) {
    miVideo.pause();
  } else {
    miVideo.play();
  }
}
```

Puntos clave:

- **`available()` + `read()`**: Processing no lee el vídeo en bucle infinito; solo actualiza cuando hay fotograma nuevo, para no saturar la CPU.
- **`image()`** dibuja el fotograma como si fuera una variable de tipo imagen: puede escalarse, recortarse o mezclarse.
- **`time()`** y **`duration()`** devuelven segundos, lo que permite construir una barra de progreso o extraer fotogramas por tiempo con `jump(segundos)`.

### 4.2. La cámara como secuencia de imágenes con Capture

```java
import processing.video.*;

Capture camara;

void setup() {
  size(640, 480);

  String[] dispositivos = Capture.list();   // lista las cámaras disponibles
  println(dispositivos);

  if (dispositivos.length > 0) {
    camara = new Capture(this, dispositivos[0]);
  } else {
    camara = new Capture(this, width, height);  // cámara por defecto
  }
  camara.start();       // empieza a capturar
}

void draw() {
  if (camara.available()) {
    camara.read();      // nuevo fotograma de la cámara
  }
  image(camara, 0, 0, width, height);

  // ejemplo de tratamiento: invertir los colores píxel a píxel
  loadPixels();
  for (int i = 0; i < pixels.length; i++) {
    float r = red(pixels[i]);
    float g = green(pixels[i]);
    float b = blue(pixels[i]);
    pixels[i] = color(255 - r, 255 - g, 255 - b);
  }
  updatePixels();
}
```

La cámara se comporta exactamente igual que un vídeo: es una **secuencia de imágenes** que llega fotograma a fotograma. Por eso las técnicas de procesado de imágenes (filtros, umbral, detección de movimiento) sirven igual para un archivo grabado que para la webcam en tiempo real.

**Nota sobre la librería:** las versiones recientes de *Video* usan GStreamer y en algunos sistemas pedirá permisos de cámara/micrófono. Si `Capture.list()` está vacío, comprueba los permisos del sistema operativo.

---

## 5. Tratamiento de audio en Processing

### 5.1. Cargar y reproducir sonido con la librería Sound

La librería **Sound** (incluida con Processing) permite cargar archivos (`SoundFile`), generar tonos (`SinOsc`, `SawOsc`…), analizar el volumen (`Amplitude`) y el espectro (`FFT`).

```java
import processing.sound.*;

SoundFile efecto;
SoundFile musica;
float volumen = 0.5;

void setup() {
  size(600, 300);
  textAlign(CENTER, CENTER);

  // los archivos se colocan en la pestaña data/ del sketch
  efecto = new SoundFile(this, "boton.wav");
  musica = new SoundFile(this, "ambiental.mp3");
  musica.loop();                  // suena en bucle de fondo
  musica.amp(volumen);            // volumen entre 0.0 y 1.0
}

void draw() {
  background(30, 34, 50);
  fill(255);
  text("ESPACIO: pausar/reanudar   ↑/↓: volumen   P: efecto", width / 2, height / 2);
}

void keyPressed() {
  if (key == ' ') {
    if (musica.isPlaying()) {
      musica.pause();
    } else {
      musica.resume();            // continúa donde se quedó
    }
  }
  if (keyCode == UP) {
    volumen = constrain(volumen + 0.1, 0, 1);
    musica.amp(volumen);
  }
  if (keyCode == DOWN) {
    volumen = constrain(volumen - 0.1, 0, 1);
    musica.amp(volumen);
  }
  if (key == 'p' || key == 'P') {
    efecto.stop();                // reinicia por si ya sonaba
    efecto.play();
  }
}
```

Operaciones básicas cubiertas: **cargar** (`new SoundFile`), **reproducir** (`play()`, `loop()`), **pausar/reanudar** (`pause()`, `resume()`), **detener** (`stop()`) y **volumen** (`amp()`). Con `rate(1.5)` también se cambia la velocidad de reproducción (afecta a tono y duración).

> En lugar de *Sound*, muchos proyectos usan **Minim**, otra librería histórica de Processing con una API similar (`AudioPlayer`, `AudioSnippet`). Elige una y consolídate con ella; los conceptos son los mismos.

### 5.2. Vídeo y sonido sincronizados

Cuando reproducimos un `.mp4` con `Movie`, su pista de audio se reproduce junto al vídeo de forma automática. Si queremos música propia encima de un vídeo mudo, creamos un `SoundFile` independiente y lo lanzamos cuando empieza el vídeo: la sincronización se controla con `millis()` o con `miVideo.time()`.

---

## 6. Aplicaciones de vídeo, audio y animación

- **Visualizadores de música:** análisis del audio en tiempo real (`FFT`) para dibujar barras, ondas o partículas rítmicas. Base de los visualizadores de concierto.
- **Instalaciones audiovisuales:** proyecciones mapeadas y pantallas interactivas que reaccionan a la presencia del público (los antecedentes de estas instalaciones aparecen en el Tema 8).
- **Videojuegos:** animación de sprites, cinemáticas con vídeo, efectos de sonido y música dinámica por estados.
- **Publicidad y motion graphics:** piezas animadas con audio envolvente, muy usadas en marketing digital.
- **Educación y divulgación:** tutoriales grabados con webcam, pizarra digital y voz en off.
- **Realidad aumentada y vídeo interactivo:** la cámara como entrada del programa, procesada fotograma a fotograma.

La idea transversal de todo el tema: **vídeo = vector de fotogramas** y **audio = señal que se carga, se controla y se analiza**; ambos son datos que tu programa puede leer, modificar y generar.

---

## Ejercicios

1. Crea un sketch donde un cuadrado recorra una trayectoria circular completa en 8 segundos usando `sin()` y `cos()`, con un segundo círculo que lo siga con medio segundo de retraso (diferencia de fase). Ajusta la velocidad para que ambos tarden exactamente lo mismo en dar la vuelta.

2. Implementa una animación de un "resorte" vertical (movimiento armónico con `sin()`), añade una barra que muestre el valor de `frameRate` y comprueba cómo cambia al añadir bucles costosos. Usa `deltaTime` para que el movimiento sea idéntico a 30 y a 60 fps.

3. Reproduce un vídeo `.mp4` con `Movie` e implementa: barra de progreso de la reproducción, pausa con clic izquierdo y salto a distintos puntos del vídeo con las teclas 1, 2 y 3 (25 %, 50 % y 75 % de la duración).

4. Extrae fotogramas de un vídeo: cada 50 fotogramas dibujados, guarda una copia del fotograma actual con `saveFrame("fotograma-###.png")` durante la reproducción. Anota cuántos archivos se generan y con qué fps estaba el vídeo.

5. Captura la webcam con `Capture` y aplica un efecto distinto a la imagen en función de la tecla pulsada: 1 = negativo, 2 = escala de grises, 3 = umbral (blanco y negro puro). Documenta con comentarios cada efecto.

6. Diseña un "visualizador minimalista": una pista en bucle con `SoundFile` y un círculo cuyo tamaño oscile con `sin(millis())`; si consigues usar `Amplitude`, haz que el tamaño responda de verdad al volumen del archivo de sonido.
