---
title: "1. Expansión P1"
parent: "Microbit"
---

## Trabajando con la placa de expansión para micro:bit.

### Tabla de contenidos

*   **1\. Los pines de la placa BBC micro:bit**
*   **2\. El escudo de sensores**
*   **3\. Parpadeo del sensor LED**
*   **4\. Control de brillo de un LED**
*   **5\. Parpadeo y control de intensidad en el sensor LED**
*   **6\. Test de sonido**
*   **7\. Reproducir música con el zumbador pasivo**
*   **8\. Luces de colores**
*   **9\. Botón externo**
*   **10\. Sensor de inclinación**

### 1\. Los pines de la placa BBC micro:bit

Además de todas las posibilidades que ofrece trabajar con los sensores y componentes incorporados en la micro:bit, existe la posibilidad de trabajar con las 25 conexiones externas que tienen en la parte inferior. De manera directa se puede trabajar con cuatro de ellos (pin0, pin1, pin2 y salida de 3V) y la conexión a tierra usando, por ejemplo, pinzas de cocodrilo. Pero si queremos utilizar el resto de conexiones es necesario conectarlo a una placa de expansión o shield como veremos en la siguiente sección.

Muchos de los pines tienen alguna funcionalidad específica o están asociados directamente a algún componente de la placa como los botones o las columnas del panel LED de la propia placa. Esto es conveniente tenerlo en cuenta porque si conectamos algún sensor a uno de estos pines, por ejemplo al 3, se activará la acción de el componente asociado, la columna 1 en el panel frontal de LED en este caso.

Cuando se desee programar la placa micro:bit utilizando uno de estos pines, habrá que desactivar el panel LED para que no se quede encendida una de las columnas. En las distintas actividades propuestas en las que se use alguna de estas conexiones se podrá ver esta acción programada en la propuesta de actividad.

Fíjate en la siguiente imagen para saber la utilidad de cada uno de los pines.

![](images/Img%2001%20-%20Pines.jpg)

Si quieres más información sobre las conexiones externas de la micro:bit puedes consultar [esta página](https://makecode.microbit.org/device/pins).

### 2\. El escudo de sensores

Este escudo es muy fácil para el realizar el cableado necesario para utilizar las conexiones externas de la micro:bit. Dispone de conexiones para todos los pines, pero además incluye otras interfaces de comunicación como puerto serie I2C y cabezales de pines SPI.

Se puede alimentar con el cable USB o con una alimentación externa incluido en el kit de sensores (DC7-9V). Cuando se alimenta el escudo directamente con una de estas dos opciones, es posible elegir el voltaje para las salidas V1 y V2 con 3.3V ó 5 V. Para cambiarlo basta con colocar las piezas de color naranja que hay en la parte inferior derecha del escudo en la posición adecuada, tal y como se puede ver en la siguiente imagen

![](images/Img%2003%20-%20voltajes.jpg)

La conexión necesaria varía para cada uno de los sensores. Pero en las prácticas propuestas para cada uno de los componentes y sensores verás un diagrama de conexión en el que se identifica el voltaje necesario para cada caso.

### 3\. Parpadeo del sensor LED

### Sensor: Led blanco

![](images/Img%2004%20-%20LED.png)

Este primer experimento es una de las prácticas más comunes para empezar a utilizar sensores. Además de los leds que incluye la propia micro:bit en su frontal, podemos conectar otros sensores con leds para ampliar esta funcionalidad. Vamos a ver cómo hacer que un pin externo se encienda y se apague repetidas veces. Para realizar esta práctica, asegúrate de que V1 está a 3.3 V.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2005%20-%20con%20LED.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2006%20-%20cod%20LED.png)

##### _Archivo hexadecimal con la solución listo para descargar_

[microbit-01 Parpadero-LED](hex/microbit-01%20Parpadero-LED.hex)

### 4\. Control de brillo de un LED

### Sensor: LED rojo

![](images/Img%2007%20-%20Led%20rojo.png)

Esta práctica es parecida a la anterior en el sentido en que vamos a utilizar un sensor similar: un led pero en esta ocasión de color rojo. Para ver otra posibilidad de trabajo, vamos a controlar la intensidad de brillo del led para que vaya variando de manera gradual. Para ello, a diferencia de la práctica anterior, se usará una escritura analógica para el Pin 0.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2008%20-%20con%20Led%20rojo.png)  

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2009%20-%20cod%20Led%20rojo.png)

##### _Archivo hexadecimal con la solución listo para descargar:_

[microbit-02 control-brillo-led-rojo](hex/microbit-02%20control-brillo-led-rojo.hex)

### 5\. Parpadeo y control de intensidad en el sensor LED

### Sensor: LED 3W

![](images/Img%2010%20-%20Led%20brillo.png)  

En esta actividad se utiliza un sensor LED de 3W, el cual puede ser utilizado de iluminación porque, a diferencia de los anteriores, tiene mucho más brillo. La práctica consiste en una combinación de las dos anteriores, por lo que la programación es la misma solo que veremos la diferencia de comportamiento de este sensor con respecto a los otros dos.

Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2011%20-%20con%20Led%20brillo.png)  

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2012%20%20-%20cod%20Led%20brillo.png)  

##### _Archivo hexadecimal con la solución listo para descargar:_

[microbit-03 LED-Brillo](images/microbit-03%20LED-Brillo.hex)

### 6\. Test de sonido

### Sensor: Zumbador activo

![](images/Img%2013%20-%20zum%20act.png)

De manera similar a las primeras prácticas realizadas con el sensor LED, vamos a ver cómo funciona un zumbador activo controlado con nuestra micro:bit con un sonido intermitente.

Este sensor se caracteriza por tener una fuente oscilante incorporada, por lo que genera un sonido cuando le llega corriente. Este tipo de sensores es muy utilizado en aparatos electrónicos cotidianos como en los temporizadores, móviles o PC.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema. En esta ocasión vamos a conectar el pin S del zumbador con el pin 7 de nuestra micro:bit.

![](images/Img%2014%20-%20con%20zum%20act.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2015%20-%20cod%20zum%20act.png)

##### _Archivo hexadecimal con la solución listo para descargar:_

[microbit-04 zumbador-activo](images/microbit-04%20zumbador-activo.hex)

### 7\. Reproducir música con el zumbador pasivo

### Sensor: zumbador pasivo

![](images/Img%2016%20-%20zum%20pas.png)

En esta práctica aprenderás controlar el zumbador pasivo y a reproducir una melodía musical.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2017%20-%20con%20zum%20pas.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2018%20-%20cod%20zum%20pas.png)

##### _Archivo hexadecimal con la solución listo para descargar:_

[microbit-05 zumbador-pasivo](images/microbit-05%20zumbador-pasivo.hex)

### 8\. Luces de colores

### Sensor: Led RGB

![](images/Img%2019%20-%20Led%20RGB%20.png)

Ene sta práctica vamos a ver cómo funciona un LED RGB y cómo controlar el cambio de color.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema. Fíjate que las conexiones son: P0 con B, P1 con R y P2 con G.

![](images/Img%2020%20-%20con%20Led%20RGB%20.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Para esta práctica se ha definido una función con tres campos numéricos los cuales se han denominado la letra correspondiente a las conexiones anteriores.

Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2021%20-%20cod%20Led%20RGB%20.png)

##### _Archivo hexadecimal con la solución listo para descargar:_

[microbit-06-Led-RGB](images/microbit-06-Led-RGB.hex)

### 9\. Botón externo

### Sensor: Botón

![](images/Img%2022%20-%20bot%C3%B3n.png)

A pesar de que la micro:bit tiene dos botones incorporados en su frontal, para algunos proyectos puede ser necesario disponer de un botón externo. En esta actividad podrás conocer cómo funciona este tipo de sensor.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema.

![](images/Img%2023%20-%20con%20bot%C3%B3n.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2024%20-%20cod%20bot%C3%B3n.png)

##### _Archivo hexadecimal con la solución listo para descargar:_

[microbit-07-botón](images/microbit-07-bot%C3%B3n.hex)

### 10\. Sensor de inclinación

### ![](images/Captura%20de%20pantalla%202025-01-12%20a%20las%2020.35.08.png)

Sensor: inclinación digital

A pesar de que el propio micro:bit puede detectar la inclinación de la propia placa en una u otra dirección, cuando creamos proyectos con varios sensores conectados puede ser necesario saber si un componente está inclinado. Con esta práctica aprenderemos a utilizar el sensor de incluinación digital para poder incorporarlo en nuestras construcciones.

#### Cómo conectarlo y programación

Conecta el cableado con el escudo de sensores como aparece en el siguiente esquema. Ten en cuenta que apra este sensor es conveniente tener el voltaje a 5V.

![](images/Img%2026%20-%20con%20inclinaci%C3%B3n.png)

Para programar este sensor, puedes realizar el siguiente código en la plataforma Make Code. Una vez completado, descárgalo en la BBC micro:bit, inserta la placa en el escudo y comprueba que funciona correctamente.

![](images/Img%2027%20-%20cod%20inclinaci%C3%B3n.png)

##### _Archivo hexadecimal con la solución listo para descargar:_

[microbit-08-inclinación](images/microbit-08-inclinaci%C3%B3n.hex)
