# Funciones Fundamentales de Processing: setup() y draw()

En Processing, `setup()` y `draw()` son dos funciones esenciales que forman la estructura básica de la mayoría de los sketches. Entender estas funciones es crucial para crear cualquier programa en Processing.

## setup()

La función `setup()` se ejecuta una sola vez cuando el programa inicia.

### Características principales:

- Se usa para definir las propiedades iniciales del sketch.
- Es el lugar ideal para realizar configuraciones que solo necesitas hacer una vez.
- Se ejecuta automáticamente al inicio del programa.

### Usos comunes:

1. Definir el tamaño de la ventana con `size()`.
2. Establecer el modo de color.
3. Cargar medios como imágenes o fuentes.
4. Inicializar variables.

### Ejemplo:

```processing
void setup() {
  size(400, 300);  // Establece el tamaño de la ventana a 400x300 píxeles
  background(200); // Establece el color de fondo a gris claro
  noStroke();      // Desactiva el trazo para las formas
}
```

## draw()

La función `draw()` se ejecuta continuamente después de que `setup()` haya finalizado.

### Características principales:

- Se ejecuta repetidamente, por defecto 60 veces por segundo.
- Es el corazón de la mayoría de los programas, donde ocurre la animación y la interactividad.
- Puedes controlar la velocidad de ejecución con la función `frameRate()`.

### Usos comunes:

1. Dibujar formas y patrones.
2. Actualizar variables para crear animaciones.
3. Responder a entradas del usuario (ratón, teclado, etc.).
4. Actualizar el estado del programa.

### Ejemplo:

```processing
void draw() {
  // Dibuja un círculo en la posición del ratón
  ellipse(mouseX, mouseY, 50, 50);
}
```

## Ejemplo combinando setup() y draw()

Aquí tienes un ejemplo que muestra cómo `setup()` y `draw()` trabajan juntos:

```processing
float x = 0;  // Variable para la posición x

void setup() {
  size(400, 200);  // Tamaño de la ventana
  background(220); // Fondo gris claro
}

void draw() {
  // Dibuja un rectángulo que se mueve de izquierda a derecha
  fill(0, 100, 200);  // Color azul
  rect(x, height/2, 50, 50);
  
  x = x + 1;  // Incrementa la posición x
  
  // Reinicia la posición cuando el rectángulo sale de la pantalla
  if (x > width) {
    x = -50;
  }
}
```

En este ejemplo:
- `setup()` se ejecuta una vez para configurar el tamaño de la ventana y el color de fondo.
- `draw()` se ejecuta repetidamente, moviendo un rectángulo azul de izquierda a derecha.
- Cuando el rectángulo sale de la pantalla, su posición se reinicia.

### Notas importantes:

1. `setup()` siempre se ejecuta primero, y solo una vez.
2. `draw()` se ejecuta inmediatamente después de `setup()` y continúa ejecutándose hasta que el programa termina.
3. Si no necesitas una actualización continua, puedes omitir `draw()`. En ese caso, el programa se ejecutará una vez y se detendrá después de `setup()`.
4. Puedes usar `noLoop()` para detener la ejecución de `draw()`, y `loop()` para reanudarla.

Entender y utilizar correctamente `setup()` y `draw()` es fundamental para crear sketches dinámicos e interactivos en Processing.
