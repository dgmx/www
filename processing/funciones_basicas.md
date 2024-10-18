---
title: 5. Funciones Básicas
parent: "Processing"
---


# 5. Funciones Básicas de Processing

## background()

La función `background()` establece el color de fondo para la ventana de visualización de Processing.

### Sintaxis
```java
background(rgb)
background(gray)
background(v1, v2, v3)
```

### Parámetros
- `rgb`: color en formato RGB (int)
- `gray`: valor de gris entre 0 y 255 (int)
- `v1`, `v2`, `v3`: valores de rojo, verde y azul respectivamente (int)

### Ejemplos
```java
background(255);        // Fondo blanco
background(0);          // Fondo negro
background(255, 0, 0);  // Fondo rojo
```

### Notas
- Se suele llamar al inicio de `draw()` para limpiar la ventana en cada frame.
- Si no se llama a `background()`, los dibujos anteriores permanecerán visibles.

## fill()

La función `fill()` establece el color de relleno para las formas que se dibujen después de llamarla.

### Sintaxis
```java
fill(rgb)
fill(gray)
fill(v1, v2, v3)
```

### Parámetros
- `rgb`: color en formato RGB (int)
- `gray`: valor de gris entre 0 y 255 (int)
- `v1`, `v2`, `v3`: valores de rojo, verde y azul respectivamente (int)

### Ejemplos
```java
fill(255);        // Relleno blanco
fill(0);          // Relleno negro
fill(255, 0, 0);  // Relleno rojo
```

### Notas
- Afecta a todas las formas dibujadas después de llamar a `fill()` hasta que se llame de nuevo con un color diferente.
- Para dibujar formas sin relleno, usa `noFill()`.

## stroke()

La función `stroke()` establece el color del trazo (contorno) para las formas que se dibujen después de llamarla.

### Sintaxis
```java
stroke(rgb)
stroke(gray)
stroke(v1, v2, v3)
```

### Parámetros
- `rgb`: color en formato RGB (int)
- `gray`: valor de gris entre 0 y 255 (int)
- `v1`, `v2`, `v3`: valores de rojo, verde y azul respectivamente (int)

### Ejemplos
```java
stroke(255);        // Trazo blanco
stroke(0);          // Trazo negro
stroke(255, 0, 0);  // Trazo rojo
```

### Notas
- Afecta al contorno de todas las formas dibujadas después de llamar a `stroke()` hasta que se llame de nuevo con un color diferente.
- Para dibujar formas sin contorno, usa `noStroke()`.

## Ejemplo combinando las tres funciones

```java
void setup() {
  size(400, 400);
}

void draw() {
  background(200);           // Fondo gris claro
  fill(255, 0, 0);           // Relleno rojo
  stroke(0, 0, 255);         // Contorno azul
  rect(100, 100, 200, 200);  // Dibuja un rectángulo
}
```

Este ejemplo crea una ventana de 400x400 píxeles con un fondo gris claro, y dibuja un rectángulo rojo con contorno azul en el centro.
