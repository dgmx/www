float r;
float g;
float b;
float a;
float diam;
float x;
float y;

void setup() {
  size(1000,600);
  background(255);
  smooth();
}

void draw() {
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  diam = random(20);
  x = random(width);
  y = random(height);

// dibuja la elipse con los valores aleatorios de diametro, posición y color
  noStroke();
  fill(r,g,b,a);
  ellipse(x,y,diam,diam);
}
