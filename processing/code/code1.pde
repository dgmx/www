float posX=100;
float posY=100;
float dirX=1.0;
float dirY=1.0;
float velocidad = 3.0;
int radio=30;

void setup() {
  size(1000, 600);
}

void draw() {
  background(50);
  //X-eje calculo
  posX=posX+dirX*velocidad;
  if ((posX>width)|| (posX<0)) {
    radio = radio + 5 ;
    dirX = dirX*(-1);
  }
  //Y-eje calculo
  posY=posY+dirY*velocidad;
  if ((posY>height)|| (posY<0)){
    radio = radio + 5 ;
    dirY = dirY *(-1);
  }
  fill (255, posX-50, posY);
  ellipse(posX, posY, radio, radio);
}