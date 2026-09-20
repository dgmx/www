# BLOQUE 1. REPRESENTACIÓN DIGITAL DE LA INFORMACIÓN

## 1. Introducción

Vivimos en una sociedad en la que prácticamente toda la información que utilizamos puede ser almacenada, procesada y transmitida mediante dispositivos informáticos: fotografías, vídeos, mensajes, documentos, música, páginas web, videojuegos o datos científicos.

Pero los ordenadores no entienden directamente palabras, imágenes o sonidos tal como los percibimos las personas. En el interior de un sistema informático, toda esta información se transforma en **datos digitales**, representados mediante números.

La base de esta representación es el **sistema binario**, formado únicamente por dos valores: **0 y 1**.

En este tema estudiaremos:

- La Sociedad del Conocimiento.
- El papel de la Computación en la innovación tecnológica.
- El impacto social y económico de la tecnología.
- El sistema binario.
- Los bits y los bytes.
- La representación de números, textos e imágenes.
- El almacenamiento y la transmisión de información.
- La representación hexadecimal.
- El tamaño de los archivos y las unidades de información.
- Algunos mecanismos utilizados para detectar errores en la información digital.

---

# 2. La Sociedad del Conocimiento

## 2.1. De la Sociedad de la Información a la Sociedad del Conocimiento

La sociedad actual se caracteriza por la enorme cantidad de información que se genera y se comparte continuamente.

La **Sociedad de la Información** es aquella en la que la creación, distribución y acceso a la información tienen una importancia fundamental.

Sin embargo, disponer de mucha información no significa necesariamente poseer conocimiento.

Podemos diferenciar:

**Dato → Información → Conocimiento**

Por ejemplo:

- `25` es un **dato**.
- "La temperatura es de 25 ºC" es **información**.
- "25 ºC es una temperatura elevada para esta época del año" puede formar parte de un **conocimiento**, si conocemos el contexto.

La Computación permite recopilar, almacenar, organizar, procesar y analizar enormes cantidades de datos para convertirlos en información útil.

## 2.2. Características de la Sociedad del Conocimiento

Entre sus principales características encontramos:

- Gran cantidad de información disponible.
- Comunicación prácticamente instantánea.
- Uso generalizado de Internet.
- Automatización de tareas.
- Importancia creciente de los datos.
- Desarrollo de la inteligencia artificial.
- Digitalización de empresas y administraciones.
- Trabajo y aprendizaje mediante plataformas digitales.
- Necesidad de formación tecnológica continua.

### ¿Sabías que...?

Cada vez que realizamos una búsqueda en Internet, enviamos un mensaje, hacemos una fotografía o utilizamos una aplicación estamos generando o utilizando datos digitales.

---

# 3. El papel de la Computación en la innovación tecnológica

La **Computación** estudia los métodos y sistemas utilizados para representar, procesar, almacenar y transmitir información mediante sistemas automáticos.

La Computación está presente en numerosas tecnologías actuales:

| Tecnología | Papel de la Computación |
|---|---|
| Teléfonos inteligentes | Procesamiento de datos, aplicaciones y comunicaciones |
| Inteligencia artificial | Procesamiento y análisis de grandes cantidades de datos |
| Robótica | Control de sensores, actuadores y algoritmos |
| Vehículos inteligentes | Procesamiento de sensores y toma de decisiones |
| Medicina | Análisis de imágenes y datos clínicos |
| Videojuegos | Gráficos, simulaciones y procesamiento en tiempo real |
| Internet | Comunicación y transmisión de información |
| Domótica | Automatización y control de viviendas |
| Ciencia | Simulación y análisis de datos |

La innovación tecnológica suele surgir de la combinación de diferentes áreas: Computación, electrónica, matemáticas, telecomunicaciones, ingeniería, ciencias y diseño.

---

# 4. Impacto social y económico de la Computación

La digitalización ha transformado profundamente nuestra sociedad.

## 4.1. Impactos positivos

Entre los principales beneficios podemos destacar:

- Comunicación rápida y global.
- Acceso a grandes cantidades de información.
- Nuevas formas de aprendizaje.
- Teletrabajo.
- Automatización de tareas repetitivas.
- Mejora de determinados procesos médicos.
- Nuevos modelos de negocio.
- Mayor productividad.
- Creación de nuevos sectores profesionales.
- Acceso a servicios digitales.

## 4.2. Riesgos y desafíos

La tecnología también plantea problemas que deben ser considerados:

- Brecha digital.
- Pérdida o transformación de determinados empleos.
- Dependencia tecnológica.
- Problemas de privacidad.
- Ciberseguridad.
- Desinformación.
- Uso excesivo de dispositivos.
- Gestión de enormes cantidades de datos.
- Impacto medioambiental de los centros de datos y dispositivos electrónicos.

Por tanto, la innovación tecnológica no debe analizarse únicamente desde el punto de vista técnico. También es necesario considerar sus consecuencias **sociales, económicas, éticas y medioambientales**.

---

# 5. ¿Cómo entiende un ordenador la información?

Un ordenador trabaja internamente con señales que pueden distinguir entre diferentes estados.

Una forma sencilla de representar estos estados es:

**0 → apagado / ausencia de señal**

**1 → encendido / presencia de señal**

Por este motivo se utiliza el **sistema binario**.

El sistema decimal que utilizamos habitualmente tiene diez símbolos:

> 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9

El sistema binario solamente tiene:

> 0 y 1

---

# 6. El bit

La unidad mínima de información digital es el **bit**.

La palabra bit procede de la expresión inglesa *binary digit*.

Un bit puede tener dos valores:

> **0 o 1**

Por ejemplo:

```text
10110100
```

es una secuencia formada por **8 bits**.

Los bits suelen representarse con una `b` minúscula:

> 8 b = 8 bits

---

# 7. El byte

Un **byte (B)** está formado por:

> **1 byte = 8 bits**

Por ejemplo:

```text
10101100
```

representa 1 byte.

El byte es una unidad especialmente importante porque permite representar **256 combinaciones diferentes**.

¿Por qué?

Cada posición puede contener 0 o 1:

```text
2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 2⁸ = 256
```

Por tanto, con 8 bits podemos representar los valores:

> **0 – 255**

---

# 8. Unidades de almacenamiento

A partir del byte podemos utilizar unidades mayores.

| Unidad | Equivalencia habitual |
|---|---:|
| 1 byte | 8 bits |
| 1 KB | 1.024 bytes |
| 1 MB | 1.024 KB |
| 1 GB | 1.024 MB |
| 1 TB | 1.024 GB |
| 1 PB | 1.024 TB |

En algunos contextos comerciales se utilizan también múltiplos decimales:

- 1 kB = 1.000 bytes
- 1 MB = 1.000.000 bytes
- 1 GB = 1.000.000.000 bytes

En informática conviene prestar atención a si se está utilizando la escala decimal o binaria.

---

# 9. Conversión de decimal a binario

Para convertir un número decimal a binario podemos realizar divisiones sucesivas entre 2.

### Ejemplo: convertir 13 a binario

| División | Cociente | Resto |
|---|---:|---:|
| 13 ÷ 2 | 6 | 1 |
| 6 ÷ 2 | 3 | 0 |
| 3 ÷ 2 | 1 | 1 |
| 1 ÷ 2 | 0 | 1 |

Leemos los restos **de abajo hacia arriba**:

> **13₁₀ = 1101₂**

---

# 10. Conversión de binario a decimal

Cada posición de un número binario representa una potencia de 2.

Por ejemplo:

**1101₂**

| Bit | Potencia | Valor |
|---:|---:|---:|
| 1 | 2³ | 8 |
| 1 | 2² | 4 |
| 0 | 2¹ | 0 |
| 1 | 2⁰ | 1 |

Sumamos:

**8 + 4 + 0 + 1 = 13**

Por tanto:

> **1101₂ = 13₁₀**

---

# 11. Los números en un ordenador

Los números pueden representarse utilizando secuencias de bits.

Por ejemplo, utilizando 8 bits:

| Decimal | Binario |
|---:|---:|
| 0 | 00000000 |
| 1 | 00000001 |
| 2 | 00000010 |
| 3 | 00000011 |
| 4 | 00000100 |
| 5 | 00000101 |
| 10 | 00001010 |
| 15 | 00001111 |
| 16 | 00010000 |
| 25 | 00011001 |
| 100 | 01100100 |
| 255 | 11111111 |

### Importante

En este ejemplo estamos hablando de **números enteros sin signo**. La representación de números negativos y números reales requiere técnicas adicionales.

---

# 12. ¿Cómo se representa un texto?

Los ordenadores también necesitan representar caracteres:

- Letras.
- Números.
- Espacios.
- Signos de puntuación.
- Símbolos.

Para ello se utilizan **sistemas de codificación de caracteres**.

## 12.1. ASCII

Uno de los sistemas históricos más conocidos es **ASCII**.

Por ejemplo:

> A → 65

En binario:

> 65₁₀ = 01000001₂

Otro ejemplo:

> B → 66 → 01000010₂

ASCII utiliza originalmente 7 bits para representar 128 caracteres.

## 12.2. Unicode

ASCII resulta insuficiente para representar todos los alfabetos y símbolos del mundo.

Por eso surgió **Unicode**, que permite representar una enorme variedad de caracteres.

Unicode incluye, entre otros:

- Español.
- Griego.
- Árabe.
- Chino.
- Japonés.
- Cirílico.
- Símbolos matemáticos.
- Emojis.

Unicode no es exactamente un único formato de almacenamiento. Existen diferentes formas de codificación, como **UTF-8**, UTF-16 y UTF-32.

UTF-8 es especialmente importante en Internet y en el desarrollo de aplicaciones.

---

# 13. ¿Cómo se representan las imágenes?

Una imagen digital puede representarse mediante una cuadrícula de pequeños elementos llamados **píxeles**.

Cada píxel contiene información sobre su color.

Por ejemplo, una imagen en blanco y negro podría utilizar:

> 0 = negro  
> 1 = blanco

Una imagen de 8 × 8 píxeles tendría:

```text
8 × 8 = 64 píxeles
```

Si cada píxel necesitara 1 bit:

```text
64 píxeles × 1 bit = 64 bits = 8 bytes
```

En imágenes en color se necesitan más bits por píxel.

---

# 14. Color RGB

Una forma muy habitual de representar colores en imágenes digitales es el modelo **RGB**:

- **R** = Red (rojo)
- **G** = Green (verde)
- **B** = Blue (azul)

Cada componente puede representarse habitualmente mediante 8 bits.

Por tanto:

```text
8 bits + 8 bits + 8 bits = 24 bits
```

Esto permite:

```text
2²⁴ = 16.777.216 colores
```

Por ejemplo:

```text
RGB(255, 0, 0)       → rojo
RGB(0, 255, 0)       → verde
RGB(0, 0, 255)       → azul
RGB(255, 255, 255)   → blanco
RGB(0, 0, 0)         → negro
```

---

# 15. Resolución y tamaño de una imagen

La resolución indica el número de píxeles de una imagen.

Por ejemplo:

```text
1920 × 1080
```

significa:

```text
1920 × 1080 = 2.073.600 píxeles
```

Si utilizamos 24 bits por píxel:

```text
2.073.600 × 24 = 49.766.400 bits
```

Dividimos entre 8:

```text
49.766.400 ÷ 8 = 6.220.800 bytes
```

Esto equivale aproximadamente a:

> **5,93 MiB**

Este sería el tamaño aproximado de la información de los píxeles **sin compresión ni información adicional del archivo**.

En la práctica, formatos como JPEG o PNG pueden reducir considerablemente el tamaño.

---

# 16. Compresión de la información

Los archivos pueden ocupar mucho espacio, por lo que se utilizan técnicas de **compresión**.

## 16.1. Compresión sin pérdida

Permite recuperar exactamente la información original.

Ejemplos:

- ZIP.
- PNG.
- FLAC.

Si comprimimos un documento y después lo descomprimimos, obtenemos exactamente el documento original.

## 16.2. Compresión con pérdida

El archivo comprimido puede perder parte de la información original para conseguir una reducción de tamaño mayor.

Ejemplos:

- JPEG.
- Algunos formatos de audio.
- Algunos formatos de vídeo.

La pérdida puede ser prácticamente imperceptible o muy evidente, dependiendo del nivel de compresión.

---

# 17. Ficheros

Un **fichero o archivo** es una colección organizada de datos almacenada en un dispositivo.

Ejemplos:

```text
trabajo.pdf
foto.jpg
programa.py
cancion.mp3
datos.csv
video.mp4
```

La extensión suele proporcionar información sobre el formato del archivo.

Sin embargo, la extensión por sí sola no determina completamente el contenido: el sistema operativo y los programas utilizan estructuras internas y metadatos para interpretar los datos.

---

# 18. Almacenamiento de la información

La información digital puede almacenarse en diferentes dispositivos:

- Discos duros.
- SSD.
- Memorias USB.
- Tarjetas de memoria.
- Servidores.
- Centros de datos.
- Servicios de almacenamiento en la nube.

Aunque físicamente la información se almacene de diferentes maneras, desde el punto de vista lógico todos estos sistemas trabajan con datos digitales.

---

# 19. Transmisión de información digital

La información digital también debe poder viajar de un dispositivo a otro.

Por ejemplo:

```text
Móvil → router → Internet → servidor
```

Durante la transmisión, los datos se organizan en estructuras que permiten enviarlos y reconstruirlos en el destino.

La información puede transmitirse mediante:

- Cable de cobre.
- Fibra óptica.
- Ondas de radio.
- Wi-Fi.
- Redes móviles.
- Enlaces por satélite.

La velocidad de transmisión suele expresarse en:

> **bits por segundo (bit/s)**

Por ejemplo:

> 100 Mbit/s

No debemos confundir:

> **Mb/s → megabits por segundo**

con:

> **MB/s → megabytes por segundo**

Como:

> **1 byte = 8 bits**

100 Mb/s equivalen idealmente a:

```text
100 ÷ 8 = 12,5 MB/s
```

---

# 20. Representación hexadecimal

El sistema hexadecimal utiliza **16 símbolos**:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

Las letras representan:

| Hexadecimal | Decimal |
|---:|---:|
| A | 10 |
| B | 11 |
| C | 12 |
| D | 13 |
| E | 14 |
| F | 15 |

Por ejemplo:

> **10₁₆ = 16₁₀**

El hexadecimal resulta especialmente útil en informática porque permite representar grupos de bits de forma compacta.

---

# 21. Relación entre binario y hexadecimal

Cada dígito hexadecimal equivale exactamente a **4 bits**.

| Binario | Hexadecimal |
|---|---:|
| 0000 | 0 |
| 0001 | 1 |
| 0010 | 2 |
| 0011 | 3 |
| 0100 | 4 |
| 0101 | 5 |
| 0110 | 6 |
| 0111 | 7 |
| 1000 | 8 |
| 1001 | 9 |
| 1010 | A |
| 1011 | B |
| 1100 | C |
| 1101 | D |
| 1110 | E |
| 1111 | F |

### Ejemplo

Convertimos:

```text
11010110₂
```

Agrupamos de cuatro en cuatro:

```text
1101 0110
```

Buscamos cada grupo:

```text
1101 = D
0110 = 6
```

Por tanto:

> **11010110₂ = D6₁₆**

---

# 22. Hexadecimal y colores

El sistema hexadecimal se utiliza mucho en informática para representar colores.

Un color RGB puede escribirse utilizando seis dígitos hexadecimales:

```text
#RRGGBB
```

Por ejemplo:

```text
#FF0000
```

significa:

- `FF` → 255 de rojo.
- `00` → 0 de verde.
- `00` → 0 de azul.

Por tanto:

> **#FF0000 = rojo**

Otros ejemplos:

```text
#00FF00 → verde
#0000FF → azul
#FFFFFF → blanco
#000000 → negro
```

Esta representación aparece habitualmente en HTML y CSS.

---

# 23. Del mundo real al mundo digital

Podemos resumir el proceso de digitalización de la siguiente manera:

```text
REALIDAD
   ↓
CAPTURA
   ↓
CODIFICACIÓN
   ↓
ALMACENAMIENTO
   ↓
PROCESAMIENTO
   ↓
TRANSMISIÓN
   ↓
INTERPRETACIÓN
```

Por ejemplo, al hacer una fotografía:

1. La cámara recibe la luz.
2. El sensor captura la información.
3. La información se convierte en valores digitales.
4. Se procesa la imagen.
5. Se comprime.
6. Se almacena en un archivo.
7. El archivo puede enviarse por Internet.
8. Otro dispositivo interpreta los datos y muestra la imagen.

---

# 24. Información digital y errores

Los datos pueden sufrir errores durante su almacenamiento o transmisión.

Por ejemplo, imaginemos que queremos transmitir:

```text
10110010
```

pero durante la transmisión se produce un error:

```text
10100010
```

Un solo bit ha cambiado.

Para detectar o corregir determinados errores se utilizan técnicas como:

- Bit de paridad.
- Sumas de comprobación (*checksums*).
- Códigos de detección y corrección de errores.
- Redundancia.

Estos mecanismos son fundamentales en sistemas de comunicación y almacenamiento.

---

# 25. Conceptos clave

Al finalizar este bloque debes comprender especialmente:

**Bit**  
Unidad mínima de información digital, con valor 0 o 1.

**Byte**  
Grupo de 8 bits.

**Binario**  
Sistema de numeración de base 2.

**Hexadecimal**  
Sistema de numeración de base 16.

**Píxel**  
Elemento mínimo de una imagen digital.

**RGB**  
Modelo de representación de colores mediante rojo, verde y azul.

**Codificación**  
Proceso mediante el cual una información se representa utilizando un determinado sistema.

**Compresión**  
Proceso destinado a reducir el tamaño de los datos.

**Archivo**  
Conjunto organizado de información almacenada.

**Unicode**  
Estándar utilizado para representar caracteres de diferentes sistemas de escritura.

