---
title: "12. Movimiento de figuras"
parent: "Processing"
---
# Movimiento de Figuras en Processing Usando Variables

## Introducción
El movimiento de figuras en Processing es una técnica fundamental para crear animaciones. Utilizando variables, podemos controlar las posiciones de las figuras y actualizar sus valores a lo largo del tiempo, lo que genera la ilusión de movimiento.

## Conceptos Clave

1. **Variables de Posición:**
   Variables que almacenan las coordenadas `(x, y)` de una figura. Estas se actualizan en cada frame para mover la figura.

2. **Velocidad:**
   Variables que controlan cuánto cambia la posición de la figura en cada frame, determinando la dirección y rapidez del movimiento.

3. **Límite de Pantalla:**
   Comprobaciones para asegurarse de que las figuras no se salgan de los límites de la ventana.

## Paso a Paso para Crear Movimiento

1. **Declaración de Variables:**
   Declaramos variables para la posición `(x, y)` y la velocidad `(velX, velY)`.

   ```java
   float x, y; // Posición
   float velX, velY; // Velocidad
   ```

2. **Inicialización en `setup()`:**
   Establecemos los valores iniciales de posición y velocidad.

   ```java
   void setup() {
     size(800, 800);
     x = width / 2;
     y = height / 2;
     velX = 2;
     velY = 3;
   }
   ```

3. **Actualización en `draw()`:**
   En el bloque `draw()`, actualizamos la posición sumando la velocidad a las coordenadas.

   ```java
   void draw() {
     background(255); // Fondo blanco
     ellipse(x, y, 50, 50); // Dibuja un círculo

     x += velX;
     y += velY;
   }
   ```

4. **Límites de Pantalla:**
   Comprobamos si la figura alcanza los límites de la pantalla y, si es así, invertimos la dirección.

   ```java
   void draw() {
     background(255);
     ellipse(x, y, 50, 50);

     x += velX;
     y += velY;

     // Comprueba los límites horizontales
     if (x > width || x < 0) {
       velX *= -1;
     }

     // Comprueba los límites verticales
     if (y > height || y < 0) {
       velY *= -1;
     }
   }
   ```

## Ejemplo Completo
Este ejemplo muestra un círculo que se mueve y rebota en los bordes de la ventana:

```java
float x, y;
float velX, velY;

void setup() {
  size(800, 800);
  x = width / 2;
  y = height / 2;
  velX = 2;
  velY = 3;
}

void draw() {
  background(255);
  ellipse(x, y, 50, 50);

  x += velX;
  y += velY;

  if (x > width || x < 0) {
    velX *= -1;
  }

  if (y > height || y < 0) {
    velY *= -1;
  }
}
```

## Mejoras del Programa
Podemos cambiar el color de la elipse y dejar un rastro con las generadas previamente, obteniendo así un efecto artístico colorido.

Para eso eliminamos el `background(255)` del metodo `draw()` y le damos un color aleatorio a la elipse con la funcion `random()`

Para que el efecto rebote contra las paredes sea mas realista, le restamos el valor del radio de la elipse a las posiciones de `x` e `y`
## Expansión: Control de Velocidad y Dirección
Podemos mejorar el control sobre el movimiento usando el teclado para cambiar la velocidad o dirección.

**Ejemplo de Control con Teclado:**
```java
void keyPressed() {
  if (key == 'w') velY -= 1; // Mover hacia arriba
  if (key == 's') velY += 1; // Mover hacia abajo
  if (key == 'a') velX -= 1; // Mover hacia la izquierda
  if (key == 'd') velX += 1; // Mover hacia la derecha
}
```
Este sería el ejemplo completo
```java
float x, y;
float velX, velY;
int radio = 50; 

void setup() {
  size(800, 600);
  x = width / 2;
  y = height / 2;
  velX = 5;
  velY = 7;
}

void draw() {
  //background(255);
  fill(random(255),random(255),0);
  ellipse(x, y, radio, radio);

  x += velX;
  y += velY;

  if (x > width - radio/2 || x < 0 + radio/2) {
    velX *= -1;
  }

  if (y > height - radio/2 || y < 0 + radio/2) {
    velY *= -1;
  }
}

void keyPressed() {
  if (key == 'w') velY -= 1; // Mover hacia arriba
  if (key == 's') velY += 1; // Mover hacia abajo
  if (key == 'a') velX -= 1; // Mover hacia la izquierda
  if (key == 'd') velX += 1; // Mover hacia la derecha
}
```
## Conclusión
Mover figuras en Processing usando variables es una técnica esencial para crear animaciones dinámicas. Controlar las posiciones mediante variables de posición y velocidad, junto con comprobaciones de límites, permite crear efectos visuales interactivos y atractivos. Con práctica, estos principios pueden expandirse a movimientos más complejos y realistas.
