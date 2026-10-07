# TEMA 8: Sonido, mini-juegos e instalaciones generativas
### Bloque B. Creación digital y pensamiento computacional | CDPC.1.A.9

> **Currículo LOMLOE - Andalucía** | Criterios: CDPC.1.A.9

---

## 1. Fundamentos del sonido

### 1.1. Onda, frecuencia, amplitud y timbre

El **sonido** es una onda mecánica que necesita un medio (aire, agua, sólido) para propagarse. En un ordenador la tratamos como una señal continua que después **digitalizamos**. Las propiedades que nos interesan programar son:

- **Amplitud:** la "altura" de la onda; se asocia al **volumen**. En código es el valor máximo que puede alcanzar la señal (en Processing, `amp()` trabaja entre 0.0 y 1.0).
- **Frecuencia:** número de ciclos por segundo, medida en **hercios (Hz)**; se asocia al **tono**. El oído humano percibe aproximadamente entre 20 Hz y 20.000 Hz.
  - 220 Hz → La (A3), 440 Hz → La (A4, tono de referencia)
- **Timbre:** la "huella dactilar" del sonido; es lo que permite distinguir un piano de una flauta tocando la misma nota. Depende de los **armónicos**, frecuencias superiores que se suman a la fundamental. En síntesis, cambiamos el timbre cambiando la **forma de onda** (seno, sierra, cuadrada, ruido).

### 1.2. Digitalización: muestreo y profundidad de bits

Para guardar sonido en un ordenador muestreamos la onda: tomamos una muestra de amplitud cada cierto intervalo.

- **Frecuencia de muestreo ($f_s$):** muestras por segundo. Según el **teorema de muestreo de Nyquist–Shannon**, para reconstruir correctamente la señal hace falta:

$$f_s \geq 2 \cdot f_{\text{máx}}$$

  Por eso el CD usa **44.100 Hz** (cubre hasta 22.05 kHz, por encima del oído humano) y el vídeo digital suele usar 48.000 Hz.

- **Profundidad de bits:** cuántos niveles discretos tiene cada muestra. Con **16 bits** hay $2^{16} = 65.536$ niveles (rango −32.768 a 32.767); con 24 bits, más de 16 millones. Más profundidad = menor **ruido de cuantización**.

Cálculo de tamaño de una pista PCM sin comprimir: $$\text{tamaño} = f_s \times \frac{\text{bits}}{8} \times \text{canales} \times \text{duración}$$ — un minuto a 44.100 Hz, 16 bits y estéreo ocupa $44100 \times 2 \times 2 \times 60 \approx 10{,}6$ MB.

### 1.3. Formatos de audio

| Formato | Compresión | Calidad | Tamaño | Uso típico |
|---------|-----------|---------|--------|------------|
| **WAV** (PCM) | Sin pérdida | Máxima | Grande | Efectos cortos, edición, grabación |
| **MP3** | Con pérdida | Muy buena | Pequeño | Música, podcasts, distribución |
| **OGG** (Vorbis) | Con pérdida | Muy buena | Pequeño | Videojuegos, software libre |
| **AAC/M4A** | Con pérdida | Muy buena | Pequeño | Vídeo, plataformas de streaming |

Criterio de decisión en nuestros proyectos: **WAV** para sonidos cortos que se disparan muchas veces (menos latencia), **MP3/OGG** para música de fondo larga.

---

## 2. Síntesis básica de sonido en Processing

### 2.1. Osciladores con la librería Sound

La librería **Sound** no solo reproduce archivos: puede **generar** sonido desde cero con **osciladores**, funciones que producen una onda periódica de la frecuencia que indiquemos.

| Oscilador | Forma de onda | Característica |
|-----------|---------------|----------------|
| `SinOsc` | Seno | Tono puro, suave; base de la síntesis aditiva |
| `SawOsc` | Sierra | Rica en armónicos, sonido "eléctrico" |
| `SqrOsc` | Cuadrada | Armónicos impares, timbre clásico de 8 bits |
| `Noise` | Ruido | Todas las frecuencias; golpes, viento, estática |

```java
import processing.sound.*;

SinOsc tono;
float frecuencia = 440;

void setup() {
  size(600, 300);
  textAlign(CENTER, CENTER);
  tono = new SinOsc(this);
  tono.play();          // empieza a sonar
  tono.amp(0.2);        // volumen inicial bajo (nunca por encima de 0.5)
}

void draw() {
  tono.freq(frecuencia);                     // fijar frecuencia en Hz
  background(20, 24, 40);
  fill(255);
  text("Frecuencia: " + int(frecuencia) + " Hz  |  ↑↓ tono  |  ←→ volumen",
       width / 2, height / 2);
}

void keyPressed() {
  if (keyCode == UP)    frecuencia = min(frecuencia + 40, 2000);
  if (keyCode == DOWN)  frecuencia = max(frecuencia - 40, 80);
  if (keyCode == RIGHT) tono.amp(min(tono.amp() + 0.1, 0.5));
  if (keyCode == LEFT)  tono.amp(max(tono.amp() - 0.1, 0.0));
}
```

**Atención al oído:** trabaja siempre con amplitudes bajas (por debajo de 0.5) y usa auriculares o volumen moderado para evitar molestias.

### 2.2. Envolventes: hacer que un sonido viva

Un tono que empieza y termina de golpe suena artificial. Una **envolvente** (ADSR) modula la amplitud en el tiempo: **ataque** (sube), **sostenido** (se mantiene), **caída/liberación** (baja). La clase `Env` de la librería Sound la aplica automáticamente a un oscilador:

```java
import processing.sound.*;

SinOsc osc;
Env envolvente;

void setup() {
  size(500, 300);
  textAlign(CENTER, CENTER);
  osc = new SinOsc(this);
  envolvente = new Env(this);
}

void draw() {
  background(30);
  fill(255);
  text("Clic o ESPACIO para disparar un tono con envolvente", width / 2, height / 2);
}

void mousePressed() { disparar(); }
void keyPressed()   { disparar(); }

void disparar() {
  // oscilador, ataque 0.02 s, sostenido 0.2 s, nivel 0.6, caída 0.4 s
  envolvente.play(osc, 0.02, 0.2, 0.6, 0.4);
}
```

Cambiando la frecuencia del oscilador antes de `disparar()` obtenemos notas distintas: ya tenemos un **instrumento sintético** básico.

---

## 3. Reactividad sonora

La idea central de este apartado: **el sonido responde al ratón y al teclado**. Mapeamos las entradas del usuario a parámetros del audio con `map()`, reutilizando el oscilador `osc` del apartado anterior (si no está sonando, lanza `osc.play()` una vez en `setup()`):

```java
void draw() {
  // la altura del ratón controla el tono (agudo arriba, grave abajo)
  float frecuencia = map(mouseY, 0, height, 1200, 110);
  // el ancho del ratón controla el volumen
  float volumen = map(mouseX, 0, width, 0.0, 0.4);
  osc.freq(frecuencia);
  osc.amp(volumen);

  // el dibujo "canta" lo que suena
  background(map(mouseY, 0, height, 30, 90), 25, 60);
  fill(255);
  text("Frecuencia: " + int(frecuencia) + " Hz   Volumen: " + nf(volumen, 1, 2),
       width / 2, 30);
}

void keyPressed() {
  osc.amp(0);   // tecla pulsada → silencio instantáneo
}
```

Otros patrones de reactividad muy usados:

- **Teclado → notas:** cada tecla (`a, s, d, f…`) dispara una frecuencia de una escala; es el típico *piano minimalista*.
- **Datos → sonido:** mapear un valor de un fichero CSV o una lectura de sensor a frecuencia o volumen (puente con las instalaciones del apartado 5).

---

## 4. Diseño de mini-juegos

### 4.1. Arquitectura de un juego

Todo juego, por pequeño que sea, se apoya en tres piezas:

1. **Estados del juego:** `INICIO` (menú), `JUGANDO`, `PAUSA`, `FIN` (game over). Se representan con una variable entera o un enumerado y se cambia mediante condiciones.
2. **Bucle de juego:** en Processing ya existe: `draw()` se ejecuta fotograma a fotograma. En cada vuelta se **actualiza** el estado (mover, comprobar colisiones) y se **dibuja** la escena. Patrón clásico: *actualizar → dibujar*.
3. **Entradas:** ratón y teclado actualizan la posición del jugador o disparan acciones. En Processing se modelan con una variable `estado` y funciones distintas según su valor.

### 4.2. Colisiones punto-círculo

La colisión más sencilla y útil: un jugador es un **punto** (o un círculo) y un obstáculo otro círculo. Hay colisión si la distancia entre centros es menor que la suma de los radios: `dist(x1, y1, x2, y2) < r1 + r2`. También se puede usar un rectángulo para el jugador "encajando" el punto del obstáculo con `constrain()`, técnica llamada *AABB con radio*.

### 4.3. Puntuación, vidas y dificultad creciente

- **Puntuación:** variable entera que aumenta según la acción (sobrevivir, acertar). Se muestra con `text()`.
- **Vidas:** contador que decrementa en cada colisión; al llegar a 0, cambio de estado a `FIN`.
- **Dificultad creciente:** aumentar progresivamente la **velocidad** de los obstáculos, reducir el **intervalo** entre apariciones o disminuir el **tamaño** de la zona segura. Fórmula típica: `velocidad = base + tiempo * incremento`.

### 4.4. Juego completo: "Esquiva"

Juego de esquivar obstáculos que caen desde arriba, controlado con ← y →, con 3 vidas, puntuación y dificultad creciente.

```java
// ESQUIVA - mini-juego completo para Processing
// Estados: 0 = inicio, 1 = jugando, 2 = fin de partida

float px, py;              // posición del jugador
float pr = 16;             // radio del jugador
int puntos = 0;
int vidas = 3;
int estado = 0;

ArrayList<Obstaculo> lista;
int intervalo = 800;       // milisegundos entre obstáculos
int ultimo = 0;            // timestamp del último obstáculo
float dificultad = 1.0;    // multiplicador de velocidad

void setup() {
  size(600, 500);
  textAlign(CENTER, CENTER);
  textSize(16);
  lista = new ArrayList<Obstaculo>();
  reiniciar();
}

void reiniciar() {
  px = width / 2;
  py = height - 60;
  puntos = 0; vidas = 3;
  dificultad = 1.0; intervalo = 800;
  lista.clear();
  ultimo = millis();
}

void draw() {
  background(12, 16, 34);

  if (estado == 0) {
    texto("E S Q U I V A", "Pulsa ESPACIO para empezar");
  } else if (estado == 1) {
    jugar();
  } else {
    texto("FIN DE LA PARTIDA", "Puntos: " + puntos + " - ESPACIO para reiniciar");
  }
}

void jugar() {
  // 1) MOVIMIENTO del jugador con el teclado
  if (keyPressed) {
    if (keyCode == LEFT)  px -= 7;
    if (keyCode == RIGHT) px += 7;
  }
  px = constrain(px, pr, width - pr);

  // 2) GENERAR obstáculos cada menos tiempo (dificultad creciente)
  if (millis() - ultimo > intervalo) {
    float xAleatoria = random(30, width - 30);
    float velocidad = random(3, 6) * dificultad;
    float radio = random(12, 26);
    lista.add(new Obstaculo(xAleatoria, -30, velocidad, radio));
    ultimo = millis();
    dificultad += 0.03;
    intervalo = max(250, intervalo - 15);
  }

  // 3) ACTUALIZAR y comprobar colisiones (recorrido inverso para poder borrar)
  for (int i = lista.size() - 1; i >= 0; i--) {
    Obstaculo o = lista.get(i);
    o.mover();
    o.mostrar();

    if (colisiona(px, py, pr, o.x, o.y, o.r)) {
      lista.remove(i);
      vidas--;
      if (vidas <= 0) {
        estado = 2;
      }
      continue;
    }

    if (o.y > height + o.r) {   // ha pasado sin tocarnos: +1 punto
      lista.remove(i);
      puntos++;
    }
  }

  // 4) INTERFAZ (HUD)
  fill(255);
  textAlign(LEFT, TOP);
  text("Puntos: " + puntos + "   Vidas: " + vidas, 10, 10);
  textAlign(CENTER, CENTER);

  // jugador
  fill(80, 210, 255);
  noStroke();
  circle(px, py, pr * 2);
}

boolean colisiona(float x1, float y1, float r1, float x2, float y2, float r2) {
  return dist(x1, y1, x2, y2) < r1 + r2;
}

void texto(String titulo, String subtitulo) {
  fill(255);
  textSize(40);
  text(titulo, width / 2, height / 2 - 40);
  textSize(18);
  fill(180);
  text(subtitulo, width / 2, height / 2 + 20);
}

void keyPressed() {
  if (key == ' ' && (estado == 0 || estado == 2)) {
    reiniciar();
    estado = 1;
  }
}

// Clase que describe cada obstáculo que cae
class Obstaculo {
  float x, y, velocidad, r;

  Obstaculo(float x, float y, float velocidad, float r) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.r = r;
  }

  void mover() {
    y += velocidad;
  }

  void mostrar() {
    fill(255, 90, 100);
    noStroke();
    circle(x, y, r * 2);
  }
}
```

Mejoras posibles: temporizador de supervivencia, movimiento del jugador con `mouseX`, partículas al chocar o modo para dos jugadores.

---

## 5. Instalaciones artísticas generativas e interactivas

### 5.1. Concepto

Una **instalación artística** es una obra que ocupa un espacio físico y se experimenta in situ, no en una pantalla suelta. Cuando su lógica se define con **algoritmos** hablamos de **instalación generativa**, y cuando responde a la presencia o acciones del público, de **instalación interactiva**: el espectador deja de ser observador y se convierte en **parte del sistema**.

Características principales:

- **Generatividad:** la obra no muestra siempre lo mismo; reglas + azar (o datos en vivo) producen resultados siempre nuevos.
- **Interacción:** entrada de datos (movimiento, sonido, distancia, redes) que modifica la salida.
- **Espacio y tiempo:** se piensan la escala (proyección, sonido, luz), la ubicación, el recorrido del público y la duración: la obra puede funcionar horas seguidas sin repetirse ni "romperse".
- **Concepto:** la técnica está al servicio de una idea; sin ella es solo una demostración tecnológica.

### 5.2. Ejemplos de referencia

| Artista/colectivo | Obra clave | Idea |
|-------------------|-----------|------|
| **teamLab** (Japón) | *Borderless* (Tokio) | Florales inmersivos que reaccionan al paso del visitante; lo que tocas florece o se desvanece |
| **Rafael Lozano-Hemmer** (México/Canadá) | *Pulse* series, *Voz Alta* | Biometría (pulso, voz) y sensores que conectan al público con la obra a gran escala |
| **Refik Anadol** | *Unsupervised* | Datos masivos convertidos en esculturas lumínicas generativas |

### 5.3. Sensores: la entrada del mundo físico

Para que un programa "viva" fuera del ordenador necesitamos **sensores**, dispositivos que convierten magnitudes físicas en datos que el software lee:

- **Sensores de presencia y de distancia** (ultrasonidos, infrarrojos, **cámara** con visión por ordenador): detectan cuánta gente hay, a qué distancia está o qué se mueve (diferencia entre fotogramas).
- **Micrófono → librería Sound (`Amplitude`, `FFT`):** el volumen o el espectro del ambiente mueve la imagen.
- **Sensores sencillos con Arduino** (LDR de luz, PIR de presencia, ultrasonidos): lectura en serie que Processing recibe por puerto serie.
- **Datos de red:** clima, aforos, redes sociales… la obra se genera con información externa.

### 5.4. Cómo plantear un proyecto de instalación en el aula

1. **Idea y mensaje:** ¿qué queremos que sienta o entienda quien la vea? Una frase basta.
2. **Interacción:** define qué hará el público (acercarse, hablar, pasar la mano) y qué responderá la obra.
3. **Diagrama del sistema:** entradas, programa, salidas y requisitos técnicos (espacio, proyector, altavoz, luz).
4. **Prototipo en Processing:** primero en el aula con `mouseX/mouseY` y teclado simulando el sensor; después, sustitúyelos por la entrada real (`Capture`, `Amplitude`, puerto serie).
5. **Prueba con "usuarios":** pide a compañeros de otra clase que la prueben sin instrucciones y observa dónde se pierden.
6. **Montaje y documentación:** vídeo de la instalación funcionando, README con montaje y código comentado. Proyectos de aula asequibles: un espejo que distorsiona el reflejo con la voz, un jardín generativo que crece con el silencio de la clase o un muro de luz que reaccione a la distancia de quien pasa.

---

## Ejercicios

1. Investiga y resume en una tabla las diferencias entre WAV, MP3 y OGG en cuanto a compresión, calidad y uso. Justifica qué formato elegirías para (a) un efecto de sonido de un juego, (b) la banda sonora de una instalación de 30 minutos y (c) un podcast.

2. Programa un "teclado de senos": con las teclas A S D F G H J K reproduce 8 notas de una escala con `SinOsc` y una envolvente `Env`; la tecla ESPACIO silencia todo. Incluye un dibujo que muestre la onda de la nota que está sonando.

3. Crea un efecto reactivo: el volumen del sonido (con `Amplitude` sobre un `SoundFile` en bucle) debe controlar la altura de una barra central y el color de fondo del sketch. Comprueba que al subir el volumen del archivo con `amp()` la barra responde más.

4. Amplía el juego "Esquiva" con estas mejoras: (a) sonido de impacto y de punto conseguido, (b) power-up que otorga +1 vida, (c) pantalla de pausa con la tecla P, (d) dificultad basada en el tiempo transcurrido en lugar de un contador fijo.

5. Diseña por escrito (esquema + descripción) una instalación interactiva para el hall de tu centro: indica entradas (sensores), salidas (proyección/sonido), qué hará el público, qué cambiará la obra y qué idea comunica. Identifica al menos un artista de referencia que te haya inspirado.

6. Desarrolla el prototipo en Processing de tu instalación usando la webcam y `Amplitude` como "falsos sensores": por ejemplo, que el ruido de la clase genere partículas y que el movimiento detectado por la cámara las disperse. Documenta el código con comentarios en español.
