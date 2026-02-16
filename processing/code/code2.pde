float x, y;
float easing = 0.05;
float diametro = 60;

void setup () {
  size (1000, 600);
}

void draw() {
  background (0);
  float targetX = mouseX;
  float targetY = mouseY;
  x +=(targetX -x) * easing;
  y +=(targetY -y) * easing;
 
  fill (220);
  ellipse (x, y, diametro, diametro);
  fill (200, 0, 0);
 
  ellipse (mouseX, mouseY, diametro/2, diametro/2);
 

}