Cheatsheet de Arduino

*   [Cheatsheet de Arduino](#top)
    
*   [Estructura programa](#estructura-programa)
    
*   [Entradas y salidas](#entradas-y-salidas)
    
*   [Control de tiempo](#control-de-tiempo)
    
*   [Comunicación](#comunicación)
    
*   [Operadores y comparadores](#operadores-y-comparadores)
    
*   [Declaración y conversión de tipos de variables](#declaración-y-conversión-de-tipos-de-variables)
    
*   [Arrays](#arrays)
    
*   [Cadenas de texto](#cadenas-de-texto)
    
*   [Condicionales](#condicionales)
    
*   [Bucles](#bucles)
    
*   [Funciones matemáticas](#funciones-matemáticas)
    
*   [Funciones de textos](#funciones-de-textos)
    
*   [Funciones de usuario](#funciones-de-usuario)
    
*   [Tipos datos avanzados (Enum / Struct / Typedef)](#tipos-datos-avanzados-enum--struct--typedef)
    
*   [Clases](#clases)
    
*   [EEPROM](#eeprom)
    
*   [Librerías útiles](#librerías-útiles)
    



Cheatsheet de Arduino
=====================

Aquí tenéis el CheatSheet para el programador del lenguaje Arduino, con las distintas instrucciones y sentencias disponibles en el lenguaje.

Estructura programa
-------------------

**Estructura básica**
```c
    // Estructura de un programa básico
    void setup() {
      // Inicializaciones, se ejecuta una vez al iniciar
    }
    
    void loop() {
      // Código principal, se ejecuta en bucle
    }
```
**Comentarios**
```c
    // Comentarios linea
    
    /*
      Bloque de comentarios
    */
```
**Funciones**
```c
    void miFuncion() {
      // Código de la función
    }
    
    // Llamar a una función
    miFuncion();
```
Entradas y salidas
------------------

**Cambiar modo**
```c
    pinMode(pinLED, OUTPUT); // Establecer pinLED como salida
    
    // Constantes predefinidas
    HIGH, LOW, INPUT, OUTPUT, INPUT_PULLUP
```
**Digitales**
```c
    // Lectura
    int valor = digitalRead(pin);
    // Escritura 
    digitalWrite(pin, valor);
```
**Analógicas (PWM)**
```c
    // Lectura
    int valor = analogRead(pin);
    // Escritura 
    analogWrite(pin, valor);
```
Control de tiempo
-----------------

**Funciones predefinidas**
```c
    // Variables predefinidas
    millis(), delay(), delayMicroseconds()
```
**Blink sin delay**
```c
    unsigned long currentMillis = millis(); // Obtener el tiempo actual en milisegundos
    
      if (currentMillis - previousMillis >= interval) {
        previousMillis = currentMillis; // Actualizar el tiempo anterior
    
        // .. hacer lo que quieras
        
      }
```
Comunicación
------------

**Serial (UART)**
```c
    Serial.begin(9600); // Iniciar comunicación
    Serial.print("Hola"); // Enviar datos
    Serial.println(" Mundo"); // Enviar con salto de línea
    while (Serial.available()) { // Leer datos
      char dato = Serial.read();
    }
```
**I2C**
```c
    #include <Wire.h>
    
    void setup() {
      Wire.begin(); // Iniciar la comunicación I2C
    }
    
    void loop() {
      Wire.beginTransmission(8); // Dirección del dispositivo I2C
      Wire.write("Hola"); // Enviar datos
      Wire.endTransmission(); // Finalizar transmisión
    }
```
**SPI**
```c
    #include <SPI.h>
    
    void setup() {
      SPI.begin(); // Iniciar la comunicación SPI
    }
    
    void loop() {
      digitalWrite(SS, LOW); // Habilitar dispositivo
      SPI.transfer(0x0A); // Enviar datos
      digitalWrite(SS, HIGH); // Deshabilitar dispositivo
    }
```
Operadores y comparadores
-------------------------

**Comparadores**
```c
    //x igual a y
    x == y
    
    //x distinto de y
    x != y
    
    //x menor que y  
    x < y 
    
    //x mayor que y
    x > y
    
    //x menor o igual que y
    x <= y
    
    //x mayor o igual que y
    x >= y 
```
**Operadores aritméticos**
```c
    //operador de asignación
    a = b
    
    //adición
    a + b
    
    //substracción
    a - b
    
    //multiplicación
    a * b
    
    //división
    a / b
    
    //modulo
    a % b
```
**Operadores de bits**
```c
    //and binario
    a & b  
    
    //or binario
    a | b  
    
    //xor binario
    a ^ b  
    
    //not binario
    a ~ b  
    
    //desplazamiento a izquierda
    a << b 
    
    //desplazamiento a derecha
    a >> b 
```
**Operadores compuestos**
```c
    //incremento
    a++
    
    //decremento
    a--
    
    //adición compuesta
    a += b
    
    //substracción compuesta
    a -= b
    
    //multiplicación compuesta
    a *= b
    
    //división compuesta
    a /= b
    
    //and compuesto
    a &= b
    
    //or compuesto
    a |= b
```
**Operadores booleanos**
```c
    //not
    !a
    
    //and
    a && b
    
    //or
    a || b
```
**Operadores de acceso**
```c
    //operacion indirección
    *variable
    
    //operacion dirección
    &variable
```
Declaración y conversión de tipos de variables
----------------------------------------------

**Void**
```c
    //tipo vacio (solo para funciones)
    void
```
**Booleanos**
```c
    //booleano, false o true
    boolean = false;
```
**Enteros**
```c
    //entero, 16 bits, de -32,768 a 32,767
    int var = 100;
    
    //entero, 16 bits, de 0 a 65535 (excepto en Due, donde son 32 bits)
    unsigned int var = 100;
    
    //entero, 16 bits, de 0 a 65535
    short var = 100;
    
    //entero, 32 bits, de -2,147,483,648 a 2,147,483,647
    long var = 100000L;
    
    //entero, 32bits, de 0 a 4,294,967,295
    unsigned long var = 100000L;
```
**Coma flotante**
```c
    //coma floante, 32 bits, de -3.4028235E+38 a 3.4028235E+38. Precision 6 digitos
    float var = 1.117;
    
    //idéntico a float, excepto en Arduino Due donde es flotante de 64 bits
    double var = 1.117;
```
**Bytes**
```c
    //8 bits, de 0 a 255
    byte var = B10010;
    
    //16bits, sin signo, de 0 a 65535
    word var = 10000;
```
**Caracteres**
```c
    //8 bits, de -128 a 127
    char var = 'A';
    
    //8 bits, de 0 a 255
    unsigned char var = 240;
```
**Conversión entre variables**
```c
    //convierte a char
    char(variable);
    
    //convierte a byte
    byte(variable);
    
    //convierte a int
    int(variable);
    
    //convierte a word
    word(variable);
    
    //convierte a long
    long(variable);
    
    //convierte a float
    float(variable);
```
**Cualificadores de variables**
```c
    //STATIC
    //Variables visibles únicamente en el interior de una función,
    //y cuyo valor se mantiene entre llamadas a la misma.
    static int  variable;
    
    //CONST
    //Variables cuyo valor no puede ser redefinido tras la inicialización
    const float pi = 3.14;
    
    //VOLATILE
    //Variables en las que se indica al compilador que no guarde en los registros 
    //del microprocesador, sino que fuerza la actualización en memoria. Esto se 
    //hace cuando existe la posibilidad de que el valor de la variable sea 
    //modificado por otro proceso que se ejecuta concurrentemente con el actual 
    //(por ejemplo cuando se emplean hilos o interrupciones)
    volatile int variable = LOW;
```
Arrays
------

**Creación de arrays**
```c
    //declarar vector
    int miArray[5];
    
    //iniciar vector
    int miArray[] = {2, 4, 8, 3, 6};
    
    //declarar e iniciar vector
    int miArray[5] = {2, 4, -8, 3, 2};
```
**Manipulación arrays**
```c
    //asignar valor a elemento del vector
    miArray[0] = 10;
    
    //obtener valor de elemento del vector
    x = miArray[4];
```
Cadenas de texto
----------------

**Textos como vector de caracteres**
```c
    char cadena1[15];
    char cadena2[8]  = {'a', 'r', 'd', 'u', 'i', 'n', 'o'};
    char cadena3[8]  = {'a', 'r', 'd', 'u', 'i', 'n', 'o', '\0'};
    char cadena4[ ]  = "texto";
    char cadena5[8]  = "texto";
    char cadena6[15] = "texto";
    
    //vector de cadenas
    char* cadenaArray[]={"Cadena 1", "Cadena 2", "Cadena 3",
    "Cadena 4", "Cadena 5", "Cadena 6"};
```
**Textos como objeto String**
```c
    // literal de cadena de texto
    String txtMsg = "Hola";
    
    // convirtiendo un char a String
    String txtMsg =  String('a');
    
    // convirtiendo un literal a String
    String txtMsg =  String("Texto");
    
    // concatenando dos literales a String
    String txtMsg =  String("texto1" + "texto2");
```
Condicionales
-------------

**Condicional abreviado**

    condition ? true : false;

**Condicional IF**

    if (variable < 10)
    {
      // accion A
    }
    
    if (variable < 10)
    {
      // accion A
    }
    else
    {
      // accion B
    }
    
    if (variable < 10)
    {
      // accion A
    }
    else if (variable >= 100)
    {
      // accion B
    }
    else
    {
      // accion C
    }

**Condicional SWITCH / CASE OF**

    switch (variable) {
      case 1:
        // accion A
        break;
      case 2:
        //  accion B
        break;
      default: 
        // caso por defecto (opcional)
    }

Bucles
------

**Bucle FOR**

    for (int i=0; i <= 100; i++){
      // accion
    } 

**Bucle WHILE**

    variable = 0;
    
    while(variable < 100){
      // accion
      variable++;
    }

**Bucle DO WHILE**

    do
    {
      //accion
      variable++;
    } while (variable < 100);

Funciones matemáticas
---------------------

**Funciones de rango**

    //devuelve mínimo entra a y b
    min(a,b);
    
    //devuelve máximo entra a y b
    max(a,b);
    
    //devuelve valor absoluto de a
    abs(a);
    
    //devuelve x restringido a (a,b)
    constrain(x, a, b);
    
    //interpola linealmente y entre x1,y1 x2,y2
    map(x, x1, x2, y1, y2);

**Potenciación**

    //devuelve a^b (ambos tipo float)
    pow(a,b);
    
    //devuelve la raiz cuadrada de a
    sqrt(a);

**Números aleatorios**

    //inicializa la semilla del generador de numeros pseudo aleatorios
    randomSeed(semilla);
    
    //devuelve un numero aleatorio entre a y b (ambos tipo long)
    random(a, b);

**Trigonometria**

    //devuelve el seno de a (a tipo float y en radianes)
    sin(a);
    
    //devuelve el coseno de a (a tipo float y en radianes)
    cos(a);
    
    //devuelve la tangente de a (a tipo float y en radianes)
    tan(a);

**Funciones de Bits y Bytes**

    //devuelve el byte menos signiticativo de una palabra o variable.
    lowByte(variable);
    
    //devuelve el byte más significativo de una palabra
    //(o el segundo byte menos significativo en variables mayores)
    highByte(variable);
    
    //devuelve el bit n de una variable x 
    //(siendo el bit 0 el menos significativo)
    bitRead(x, n);
    
    //escribe el bit n de la variable x con el valor b
    //(siendo el bit 0 el menos significativo)
    bitWrite(x, n,b );
    
    //pone a 1 el bit n de la variable x
    bitSet(x, n);
    
    //pone a 0 el bit n de la variable x
    bitClear(x, n);
    
    //obtiene el valor del bit n (idéntico a 2^n)
    bit(n);

Funciones de textos
-------------------

    //delvuelve el caracter en la posición 3 (idéntico a txtMsg[3];)
    txtMsg.charAt(3);
    
    //sustituye el caracter en la posición 3 por "A" (idéntico a txtMsg[3]="A";)
    txtMsg.setCharAt("A", 3);
    
    //concatena texto 1 y texto 2 (idéntico a texto1=texto1+texto2;)
    texto1.concat("texto2");
    
    //devuelve la longitud de la cadena
    txtMsg.length();
    
    //devuelve la cadena convertida en minúsculas
    txtMsg.toLowerCase();
    
    //devuelve la cadena convertida en mayúsculas
    txtMsg.toUpperCase();
    
    //elimina espacios y carácteres incorrectos
    txtMsg.trim();
    
    //devuelve la cadena de texto como entero
    txtMsg.toInt();

**Comparación**

    //compara dos cadenas. Devuelve 1 si texto1 es mayor que texto2,
    //0 si son iguales, y -1 en caso contrario 
    texto1.compareTo(texto2);
    
    //compara si dos cadenas son iguales (idéntico a texto1==texto2)
    texto1.equals(texto2);
    
    //compara si dos cadenas son iguales, ignorando mayúsculas y minúsculas
    texto1.equalsIgnoreCase(texto2);

**Subcadenas**

    //devuelve una subcadena de la posicion 3 a la 10
    txtMsg.substring(3, 10);
    
    //comprueba si la cadena empieza por "texto", con offset 3
    txtMsg.startsWith("texto", 3);
    
    //comprueba si la cadena empieza por "texto", con offset 3
    txtMsg.endsWith("texto");

**Búsqueda y sustitución**

    //devuelve el índice de la primera ocurrencia de 'A',
    //a partir de la posición offset
    txtMsg.indexOf('A', offset);
    
    //devuelve el índice de la última ocurrencia de 'A'
    //previa a la posición offset
    txtMsg.lastIndexOf('A', offset);
    
    //sustituye las ocurrencias de "texto1" por "texto2"
    txtMsg.replace("texto1", "texto2");

Funciones de usuario
--------------------

**Variables globales**

    int option=1;
    
    int cambiar(){
      option=4;
    }
    
    void setup(){
      Serial.begin(9600);
    }
    
    void loop(){
      cambiar();
      Serial.print(option);  //muestra 4
      delay(10000);
    }

**Paso de parámetros por valor**

    int cambiar(var){
      var=4;
    }
    
    void setup(){
      Serial.begin(9600);
    }
    
    void loop(){
      int option=1;
      cambiar(option);
      Serial.print(option);  //muestra 1
      delay(10000);
    }

**Paso de parámetros por referencia**

    int cambiar(int &var){
      var=4;
    }
    
    void setup(){
      Serial.begin(9600);
    }
    
    void loop(){
      int option=1;
      cambiar(option);
      Serial.print(option);    //muestra 4
      delay(10000);
    }

**Paso de parámetros por puntero**

    int cambiar(int* var){
      *var=4;
    }
    
    void setup(){
      Serial.begin(9600);
    }
    
    void loop(){
      int option=1;
      cambiar(&option);
      Serial.print(option);    //muestra 4
      delay(10000);
    }

**Devolución de valores**

    int cambiar(){
      int var=4;
      return var;
    }
    
    void setup(){
      Serial.begin(9600);
    }
    
    void loop(){
      int option=1;
      option=cambiar();
      Serial.print(option);    //muestra 4
      delay(10000);
    }

Tipos datos avanzados (Enum / Struct / Typedef)
-----------------------------------------------

**Enumeraciones**

    //declaracion
    enum miEnumeracion {
      opcion1,
      opcion2,
      opcion3
    };
    
    //ejemplo de uso
    miEnumeracion variable = opcion2;
    
    if (variable==opcion2){
      //accion
    }

**Estructuras**

    //declaracion
    struct miEstructura
    {
       int  campo1;
       int  campo2;
       char campo3;
    };
    
    //ejemplo de uso
    struct miEstructura variable;
    
    variable.campo1=10;

**Definicion de tipos de datos de usuario**

    //declaraciones
    typedef int nuevotipo;
    typedef enum miEnumeracion nuevotipo;
    typedef struct miEstructura nuevotipo;
    
    //ejemplo de uso
    nuevotipo variable;

Clases
------

**Ejemplo de uso de clase**

    class MiRobot;
    
    //definicion de clase ejemplo
    class MiRobot
    {
    public:
      void saludar();   //muestra "Hola"
      void incCont();   //incrementa contador
      int  getCont();   //devuelve contador
      void sayCont();   //muestra valor contador
      void setCont(int); //inicializa contador a un valor
    private:
      int cont=0;     //variable contador privada
    };
    
    //muestra "Hola"
    void MiRobot::saludar(){
      Serial.println("Hola");
    }
    
    void MiRobot::incCont(){
      this->cont++;
    }
    
    //devuelve contador
    int MiRobot::getCont(){
      return this->cont;
    }
    
    //muestra valor contador
    void MiRobot::sayCont(){
      Serial.println(this->cont);
    }
    
    //inicializa contador a un valor
    void MiRobot::setCont(int _cont){
      this->cont=_cont;
    }
    
    MiRobot robot;
    void setup(){
      Serial.println("Iniciando");
      Serial.begin(9600); 
    
      robot.saludar();   //se muestra hola
    }
    
    void loop(){
      robot.incCont();  //se incrementa el contador
      robot.sayCont();  //muestra el valor
      delay(1000);
    }

EEPROM
------

    // EEPROM (memoria no volátil)
    EEPROM.write(address, value); // Escribir
    byte val = EEPROM.read(address); // Leer

Librerías útiles
----------------

    #include <Wire.h> // Comunicación I2C
    #include <SPI.h> // Comunicación SPI
    #include <Servo.h> // Control de servomotores
    #include <Stepper.h> // Control de motores paso a paso
    #include <LiquidCrystal.h> // Control de pantallas LCD
    #include <WiFi.h> // Conexión WiFi
    #include <Ethernet.h> // Conexión Ethernet
    #include <SoftwareSerial.h> // Comunicación serie por software