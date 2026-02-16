boolean terminado = false;

void setup() {
  size(1000,600);
}

void draw() {
 if (terminado == false) {
   fill(random(255), random(255),0);
   rect(random(800),random(600), random(40), random(40));
 }
 println(terminado);
 if (keyPressed) {
    if (keyCode == UP) terminado = true;
    if (keyCode == DOWN) terminado = false;
 }
 //fill(random(255), random(255), random(255));
 //ellipse(random(900), random(700), random(40), random(40));
}

//void keyPressed(){
//    if (keyCode == UP) terminado = false;
//}
