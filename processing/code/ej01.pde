void setup() {
  size(400, 400); // Configura el tamaño de la ventana
  background(200); // Establece el color de fondo
}

void draw() {
  ellipse(width/2, height/2, 100, 100); // Dibuja un círculo en el centro
}

void mousePressed() {
  fill(random(255), random(255), random(255)); // Cambia el color de relleno al hacer clic
}