---
title: "2. Expansión P2"
parent: "Microbit"
---


Trabajando con la placa de expansión para micro:bit Parte 2
===========================================================

Abrir índice del curso

Abrir cajón de bloques

Requisitos de finalización

##### Tabla de contenidos

*   **11\. Botón de contacto**
*   **12\. Control de un semáforo**
*   **13\. Detección de objetos**
*   **14\. Ver la línea negra**
*   **15\. Detectar un campo magnético**
*   **16\. Control de luminosidad**
*   **17\. Medir la temperatura**
*   **18\. Final del recorrido**
*   **19\. Detectar el movimiento**
*   **20\. Intensidad de luz**

### 11\. Botón de contacto

![](images/Img%2028%20-%20capacitivo.png)

### Sensor: Sensor táctil capacitivo

Otra opción para poner un pulsador en nuestro proyecto, dependerá del tipo de trabajo que estemos realizando, puede ser el pulsador táctil capacitivo. El funcionamiento es muy similar al pulsador, pero con una apariencia diferente.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2029%20-%20con%20capacitivo.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente. Fíjate que con acercar el dedo al sensor puede activarse, pero si lo dejas pulsado la lectura será constante.

![](images/Img%2030%20-%20cod%20capacitivo.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-09-capacitivo](images/microbit-09-capacitivo.hex)

### 12\. Control de un semáforo

![](images/Img%2031%20-%20sem%C3%A1foro.png)

En esta práctica verás cómo podemos controlar el sensor con tres luces de semáforo para hacer una secuencia similar a la que nos podemos encontrar en cualquier cruce de una ciudad.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2032%20-%20con%20sem%C3%A1foro.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2033%20-%20cod%20sem%C3%A1foro.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-10-semáforo](images/microbit-10-sem%C3%A1foro.hex)

### 13\. Detección de objetos

![](images/Img%2034%20-%20detec.png)

### Sensor: Sensor infrarrojos detector de obstáculos

El sensor de obstáculos es un componente muy útil para cualquier construcción. Tiene muchas posibilidades, se puede utilizar en un vehículo para sortear un obstáculo o para crear una mascota con nuestro micro:bit. En esta práctica vas a hacer que al detectar una distancia inferior a cierto valor  comprendido entre 2 y 40 cm (es lo que detecta este sensor) aparezca una imagen en la pantalla de la micro:bit y reproduzca un sonido.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2035%20-%20con%20detec.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente. Ten en cuenta que el sensor devolverá una lectura igual a 1 cuando detecte un objeto.

![](images/Img%2036%20-%20cod%20detec.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-11-detec](images/microbit-11-detec.hex)

### 14\. Ver la línea negra

![](images/Img%2037%20-%20linea.png)

### Sensor: sigue de seguimiento de líneas

El sensor sigue líneas es muy utilizado en robótica ya que muchos productos similares a un coche lo traen incorporados. Pero disponer de este sensor para nuestros proyectos de construcción puede ofrecernos otras posibilidades. Por ejemplo, en esta actividad vamos a programar la micro:bit para que muestre una cruz en pantalla a no ser que detecte una línea negra con el sensor. Puedes dibujarla en un papel para pasarla por encima y comprobar el resultado. 

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2038%20-%20con%20linea.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2039%20-%20cod%20linea.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-12-linea](images/microbit-12-linea.hex)

### 15\. Detectar un campo magnético

![](images/Img%2040.1%20-%20mag1.png)

![](images/Img%2040.2%20-%20mag2.png)

### Sensor: sensor de hall magnético ó módulo de interruptor láminas

En esta práctica verás cómo poder utilizar el sensor de campo magnético para incluirlo en algún proyecto. Este sensor detecta la presencia de un campo magnético. 

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema. La conexión con uno u otro sensor es la misma.

![](images/Img%2041.1%20-%20con%20mag1.png)

![](images/Img%2041.2%20-%20con%20mag2.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente. Para ponerlo a prueba basta con colocar el sensor en un campo margnético. La programación con uno u otro sensor es la misma.

![](images/Img%2042%20-%20cod%20mag.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-13-mag](images/microbit-13-mag.hex)

### 16\. Control de luminosidad

![](images/Img%2043%20-%20rota.png)

### Sensor: sensor de rotación analógico

En esta práctica aprenderás a usar el sensor de rotación analógico para controlar algún parámetro de la micro:bit como el brillo del panel led. Solo tendrás que tener en cuenta que el brillo va en una escala de 0 a 255 y el sensor tiene una lectura analógica entre 0 y 1023.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2044%20-%20con%20rota.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente. 

![](images/Img%2045%20-%20cod%20rota.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-14-rota](images/microbit-14-rota.hex)

### 17\. Medir la temperatura

![](images/Img%2046%20-%20temp%20ana.png)

### Sensor: sensor de temperatura analógico

Como sabemos, la placa micro:bit tiene incorporado un sensor de temperatura. Pero en muchas ocasiones puede ser útil tener un sensor externo para poder tomar datos de la temperatura ambiente. En esta actividad vas a poder ver cómo recopilar la temperatura registtrada cone ste sensor y mostrarla en pantalla.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2047%20-%20con%20temp%20ana.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente. Ten en cuenta que el valor que devuelve está comprendido entre 0 y 1023. Por lo que la cifra no corresponde exactamente con la temperatura ambiente en grados centígrados.

![](images/Img%2048%20-%20cod%20temp%20ana.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-15-temp-ana](images/microbit-15-temp-ana.hex)

### 18\. Final del recorrido

![](images/Img%2049%20-%20col.png)

### Sensor: sensor de colisión

En muchos ocasiones utilizamos este sensor para marcar el final de un recorrido. Por ejemplo, al montar una impresora 3D utilizamos este componente para indicar el origen de cada una de las direcciones x, y o z. Pero además, este tipo de sensores pueden ser muy útiles para cualquier proyecto y se puede combinar fácilmente con otros. En esta actividad vamos a ver cómo hacer que se emita una señal de sonido utilizando el zumbador visto en una práctica anterior cuando se active el sensor de colisión.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2050%20-%20con%20col.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente. 

![](images/Img%2051%20-%20cod%20col.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-16-col](images/microbit-16-col.hex)

### 19\. Detectar el movimiento

![](images/Img%2052%20-%20mov.png)

### Sensor: sensor de movimiento PIR

Una acción muy atractiva para cualquier proyecto es la de colocar un sensor de movimiento. Podemos usarlo como alarma o para crear un contador de vueltas de un circuito. En esta actividad vamos a ver cómo usar este sensor para mostrar una imagen en la pantalla del micro:bit y reproducir un sonido.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2053%20-%20con%20mov.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente. 

![](images/Img%2054%20-%20cod%20mov.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-17-mov](images/microbit-17-mov.hex)

### 20\. Intensidad de luz

![](images/Img%2055%20-%20luz.png)

### Sensor: Sensor de fotocélula

Como en los ejemplos anteriores, disponer de un sensor de detección lumínica puede ser muy interesante para nuestros proyectos. Por ejemplo, puede servir para activar una luz cuando la intensidad lumínica en el ambiente baje de un cierto valor. Es algo similar a lo que utilizan muchas farolas que podemos encontrarnos en la calle. En esta actividad aprenderás a utilizar este sensor para mostrar en la pantalla de la micro:bit el valor registrado por el sensor. Para ver la variación puedes taparlo de diferentes maneras.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2056%20-%20con%20luz.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente. 

![](images/Img%2057%20-%20cod%20luz.png)

##### _Archivo hexadecimal con la solución listo para descargar:_ 

[microbit-18-luz](images/microbit-18-luz.hex)