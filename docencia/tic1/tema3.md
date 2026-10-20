# Bloque B. Arquitectura de ordenadores y sistemas operativos

## Unidad didáctica: Arquitectura de ordenadores (TICO.1.B.1)

**Materia:** Tecnologías de la Información y la Comunicación I  
**Curso:** 1.º de Bachillerato  

---

## 1. Presentación de la unidad

Vivimos rodeados de ordenadores: el teléfono móvil, el portátil del aula, la consola, el televisor inteligente, el cajero automático o el sistema de un coche. Todos ellos comparten una misma idea: **un conjunto de componentes físicos (hardware) que ejecutan instrucciones (software)**.

En esta unidad vamos a abrir la "caja negra" del ordenador para entender:

- qué piezas lo forman y para qué sirve cada una;
- cómo se comunican entre sí;
- cómo se almacenan y se procesan los datos;
- por qué unos equipos son más rápidos que otros;
- qué diferencia hay entre un sistema propietario y uno libre.

Comprender la arquitectura nos permite **elegir, mantener y ampliar** equipos con criterio, y también detectar cuellos de botella y averías. Es la base sobre la que se apoyan los sistemas operativos, las redes, la programación y la seguridad informática.

> **Idea clave:** un ordenador no es magia: es una máquina que mueve datos entre memoria, procesador y periféricos siguiendo instrucciones muy sencillas, pero a una velocidad enorme.

---

## 2. Objetivos didácticos

Al terminar la unidad serás capaz de:

1. Distinguir hardware y software, y clasificar el software según su licencia.
2. Explicar la arquitectura clásica de von Neumann y relacionarla con los equipos actuales.
3. Interpretar la ley de Moore y valorar sus consecuencias y límites.
4. Describir la CPU, la unidad de control y la unidad aritmético-lógica, y explicar el ciclo de instrucción.
5. Diferenciar memoria principal y almacenamiento secundario, así como su estructura física y lógica.
6. Calcular capacidades, direcciones y anchos de banda sencillos.
7. Clasificar periféricos y reconocer los de nueva generación.
8. Identificar los buses de datos, direcciones y control y su función.
9. Justificar decisiones de compra, ampliación y copia de seguridad con argumentos técnicos.
10. Valorar el uso de estándares abiertos y de software libre.

---

## 3. Saberes básicos

| Código | Contenido |
|---|---|
| TICO.1.B.1.1 | Hardware y software. Sistemas propietarios y libres. |
| TICO.1.B.1.2 | Arquitectura: concepto clásico y ley de Moore. |
| TICO.1.B.1.3 | Unidad Central de Proceso. Unidad de control. Unidad aritmético-lógica. |
| TICO.1.B.1.4 | Memoria principal y almacenamiento secundario: estructura física y lógica. Dispositivos. Fiabilidad. |
| TICO.1.B.1.5 | Sistemas de entrada/salida: periféricos. Clasificación. Periféricos de nueva generación. |
| TICO.1.B.1.6 | Buses de comunicación: datos, control y direcciones. |

---

## 4. Hardware y software. Sistemas propietarios y libres

### 4.1. Hardware

El **hardware** es la parte física del sistema informático: todo lo que se puede tocar. Se clasifica en:

- **Componentes internos:** placa base, procesador, memoria RAM, disco, tarjeta gráfica, fuente de alimentación.
- **Periféricos:** monitor, teclado, ratón, impresora, altavoces, webcam, escáner.
- **Dispositivos de almacenamiento:** discos duros, unidades SSD, memorias USB, tarjetas SD.
- **Dispositivos de red:** tarjeta de red, router, módem, punto de acceso.
- **Equipamiento auxiliar:** SAI (sistema de alimentación ininterrumpida), regletas, cables, soportes.

### 4.2. Software

El **software** es el conjunto de instrucciones, datos y programas que hacen funcionar al hardware. Sin software, el hardware es un conjunto de piezas sin utilidad.

| Tipo de software | Función | Ejemplos |
|---|---|---|
| **Firmware** | Instrucciones grabadas en un chip que arrancan el equipo y controlan componentes. | BIOS/UEFI, firmware de un router, de una impresora. |
| **Sistema operativo** | Gestiona el hardware y ofrece servicios a los programas. | Windows, Linux, macOS, Android, iOS. |
| **Software de aplicación** | Permite realizar tareas concretas al usuario. | Navegador, procesador de textos, videojuego, hoja de cálculo. |
| **Herramientas de desarrollo** | Crean y mantienen software. | Editores de código, compiladores, depuradores. |
| **Controladores (drivers)** | Traducen las órdenes del sistema operativo al lenguaje del dispositivo. | Driver de impresora, de tarjeta gráfica. |
| **Utilidades** | Mantenimiento y seguridad del sistema. | Antivirus, compresores, copias de seguridad. |

> **Firmware:** software "atrapado" en el hardware. Se actualiza con cuidado, porque un fallo puede dejar el dispositivo inservible (por ejemplo, un router que no arranca).

### 4.3. Sistemas propietarios y sistemas libres

Cuando hablamos de **sistema** nos referimos al conjunto de hardware + software. Según su licencia, puede ser propietario o libre.

- **Sistema propietario (privativo):** el fabricante no publica el código fuente y limita su uso, copia, modificación y redistribución. Ejemplos: Windows, macOS, Microsoft Office, Adobe Photoshop.
- **Sistema libre:** se distribuye con una licencia que garantiza cuatro libertades:
  1. **Libertad 0:** usar el programa con cualquier propósito.
  2. **Libertad 1:** estudiar cómo funciona y modificarlo (acceso al código fuente).
  3. **Libertad 2:** redistribuir copias.
  4. **Libertad 3:** mejorar el programa y publicar las mejoras para toda la comunidad.

> **Importante:** "gratis" no es lo mismo que "libre". Puede haber software libre de pago y software propietario gratuito. Lo que define la libertad es la licencia, no el precio.

| Criterio | Software propietario | Software libre |
|---|---|---|
| Código fuente | Cerrado | Disponible |
| Modificación | Prohibida o muy limitada | Permitida |
| Redistribución | Restringida | Permitida |
| Coste | Habitualmente de pago | Habitualmente gratuito, no siempre |
| Soporte | Del fabricante | Comunidad y empresas |
| Ejemplos | Windows, Office, Photoshop | Linux, LibreOffice, GIMP, Firefox |

**Licencias habituales:**

- **GPL:** obliga a que las versiones modificadas sigan siendo libres (*copyleft*).
- **MIT, BSD, Apache:** permisivas; permiten usar el código en proyectos propietarios.
- **Creative Commons:** para contenidos (textos, imágenes, música), con distintas combinaciones de condiciones.
- **Freeware:** gratuito, pero sin código fuente.
- **Shareware:** prueba gratuita con limitaciones.
- **Dominio público:** sin restricciones de derechos de autor.

**Ventajas e inconvenientes (debate):**

| Aspecto | Propietario | Libre |
|---|---|---|
| Facilidad de uso | Suele estar muy cuidado | Variable |
| Compatibilidad con hardware | Muy amplia | Buena, a veces requiere ajustes |
| Seguridad y auditoría | Depende del fabricante | Código auditable por cualquiera |
| Coste total | Licencias y renovaciones | Menor, pero requiere formación |
| Dependencia | Alta (*vendor lock-in*) | Baja |
| Soporte | Contrato con el fabricante | Comunidad o empresa externa |

**Actividad 1.** Clasifica: Windows 11, Ubuntu, LibreOffice, Microsoft Word, Android, iOS, GIMP, Photoshop, Firefox, Google Chrome. Indica si son propietarios o libres y justifica la respuesta.

**Actividad 2.** Un centro educativo quiere reducir costes y fomentar la soberanía tecnológica. Redacta tres ventajas y tres inconvenientes de migrar sus aulas a software libre. Después, propón una decisión razonada.

---

## 5. Arquitectura: concepto clásico y ley de Moore

### 5.1. ¿Qué es la arquitectura de un ordenador?

La **arquitectura** define cómo se organizan los componentes de un ordenador, cómo se comunican y cómo se ejecutan las instrucciones. Incluye:

- la **organización física** (qué piezas hay y cómo se conectan);
- la **organización lógica** (qué registros, instrucciones y modos de direccionamiento existen);
- el **conjunto de instrucciones** (ISA, *Instruction Set Architecture*) que entiende el procesador.

Dos ordenadores pueden tener la misma arquitectura lógica y distinta implementación física, igual que dos coches del mismo modelo pueden fabricarse en fábricas diferentes.

### 5.2. La arquitectura clásica de von Neumann

En 1945, John von Neumann y su equipo describieron el modelo EDVAC. Su gran aportación fue el **programa almacenado**: las instrucciones y los datos se guardan en la misma memoria, y el procesador los lee de forma secuencial.

Los cinco bloques funcionales son:

1. **Unidad Central de Proceso (CPU):** interpreta y ejecuta las instrucciones. Contiene la UC, la ALU y los registros.
2. **Memoria principal:** almacena programas y datos mientras el equipo está encendido.
3. **Unidad de entrada:** introduce datos en el sistema.
4. **Unidad de salida:** presenta los resultados.
5. **Unidad de entrada/salida (E/S):** permite la comunicación con el exterior.

Todo ello se conecta mediante **buses** (datos, direcciones y control).

```
        +-----------------------------+
        |   MEMORIA PRINCIPAL         |
        |   (instrucciones + datos)   |
        +-------------+---------------+
                      |
        ==============+==============   BUSES
                      |
        +-------------+---------------+
        |            CPU              |
        |  +-------+   +-----------+  |
        |  |  UC   |   |   ALU     |  |
        |  +-------+   +-----------+  |
        |  |      REGISTROS          |  |
        |  +-------------------------+ |
        +-------------+---------------+
                      |
        +-------------+---------------+
        |     ENTRADA / SALIDA        |
        |  teclado, monitor, disco... |
        +-----------------------------+
```

**Limitaciones del modelo:**

- **Cuello de botella de von Neumann:** la CPU es mucho más rápida que la memoria y el bus, así que pasa tiempo esperando datos.
- Las instrucciones y los datos comparten el mismo camino, por lo que no pueden transferirse a la vez.

**Solución parcial:** memorias **caché** y arquitecturas **Harvard** (memorias separadas para instrucciones y datos), habituales en microcontroladores y en las cachés internas de los procesadores actuales.

### 5.3. La ley de Moore

En 1965, Gordon Moore observó que el número de transistores de un circuito integrado se duplicaba aproximadamente cada año. En 1975 revisó su predicción a **cada dos años**. Con el tiempo se popularizó la formulación de **"el número de transistores se duplica cada 18–24 meses"**.

Consecuencias:

- Más transistores implican más potencia de cálculo, más memoria y menores costes por transistor.
- Aparecen ordenadores cada vez más pequeños y asequibles (teléfonos, wearables, IoT).
- El ritmo no es infinito: existen **límites físicos** (tamaño atómico, disipación de calor, consumo, coste de fabricación).
- En los últimos años el crecimiento se ha ralentizado; el rendimiento se mejora con **paralelismo**, **especialización** (GPU, NPU) y **eficiencia energética**.

**Ejemplo de cálculo.** Si un procesador tiene 2 000 millones de transistores y se duplican cada 2 años, ¿cuántos tendrá dentro de 6 años?

$$N = N_0 \cdot 2^{t/2} = 2\,000 \cdot 2^{6/2} = 2\,000 \cdot 8 = 16\,000 \text{ millones}$$

**Actividad 3.** Un procesador de 2020 tenía 10 000 millones de transistores. Aplicando la ley de Moore (duplicación cada 2 años), estima cuántos tendría en 2026. ¿Crees que la estimación se cumplirá? Razona tu respuesta.

**Actividad 4.** Explica con tus palabras por qué la ley de Moore no puede cumplirse indefinidamente.

---

## 6. La Unidad Central de Proceso (CPU)

### 6.1. Funciones

La **CPU** (*Central Processing Unit*) es el "cerebro" del ordenador. Se encarga de:

- **leer** las instrucciones de la memoria;
- **interpretarlas**;
- **ejecutarlas**;
- **escribir** los resultados.

### 6.2. Componentes

| Componente | Función |
|---|---|
| **Unidad de Control (UC)** | Coordina todo el proceso: lee la instrucción, la decodifica y genera las señales de control para el resto de unidades. |
| **Unidad Aritmético-Lógica (ALU)** | Realiza operaciones aritméticas (suma, resta, multiplicación) y lógicas (AND, OR, NOT, comparaciones). |
| **Registros** | Memorias internas ultrarápidas y de muy poca capacidad. |
| **Caché (L1, L2, L3)** | Memoria rápida intermedia entre la CPU y la RAM. |
| **Reloj** | Genera pulsos que marcan el ritmo de trabajo. |
| **Unidad de coma flotante (FPU)** | Realiza operaciones con números decimales. |
| **Núcleos** | Cada núcleo es una CPU completa dentro del mismo chip. |
| **Controlador de memoria** | Gestiona el acceso a la RAM. |

**Registros importantes:**

- **PC** (*Program Counter*) o contador de programa: dirección de la próxima instrucción.
- **IR** (*Instruction Register*): instrucción que se está ejecutando.
- **MAR** (*Memory Address Register*): dirección de memoria que se va a consultar.
- **MDR** (*Memory Data Register*): dato leído o que se va a escribir.
- **Acumulador (ACC):** guarda resultados intermedios de la ALU.
- **Registros de estado (flags):** indican resultados especiales (cero, acarreo, desbordamiento).

### 6.3. Ciclo de instrucción

1. **Búsqueda (fetch):** la UC toma la instrucción de la dirección indicada por el PC y la lleva al IR. El PC se incrementa.
2. **Decodificación (decode):** la UC interpreta qué operación debe realizarse y qué operandos necesita.
3. **Ejecución (execute):** la ALU u otra unidad realiza la operación.
4. **Escritura (write-back):** el resultado se guarda en un registro o en memoria.

Este ciclo se repite millones de veces por segundo.

### 6.4. Rendimiento

- **Frecuencia de reloj (GHz):** número de ciclos por segundo. 3,5 GHz = 3 500 millones de ciclos por segundo.
- **IPC** (*Instructions Per Cycle*): instrucciones que se completan por ciclo.
- **Rendimiento aproximado:** frecuencia × IPC × número de núcleos (de forma simplificada).
- **Overclocking:** aumentar la frecuencia por encima de lo previsto, con riesgo de calor e inestabilidad.
- **Hyper-Threading / SMT:** simula dos hilos por núcleo para aprovechar mejor los recursos.

> **Analogía:** la CPU es un cocinero; la frecuencia es la velocidad con la que trabaja; los núcleos son varios cocineros; la caché es la encimera donde tiene lo que usa ahora; la RAM es la despensa; el disco es el supermercado.

**Actividad 5.** Ordena de mayor a menor velocidad: RAM, caché L1, disco SSD, registro, disco HDD. Justifica el orden.

**Actividad 6.** Un procesador funciona a 3,2 GHz y ejecuta 2 instrucciones por ciclo. ¿Cuántas instrucciones ejecuta por segundo, en teoría?

$$3{,}2 \times 10^9 \times 2 = 6{,}4 \times 10^9 \text{ instrucciones/s}$$

---

## 7. Memoria principal y almacenamiento secundario

### 7.1. Jerarquía de memoria

Ninguna memoria es a la vez grande, rápida y barata. Por eso se organizan en niveles:

```
+------------------+-----------+-----------+-------------------+
| Nivel            | Velocidad | Capacidad | Coste por bit     |
+------------------+-----------+-----------+-------------------+
| Registros        | Muy alta  | Muy baja  | Muy alto          |
| Caché L1/L2/L3   | Alta      | Baja      | Alto              |
| Memoria RAM      | Media     | Media     | Medio             |
| SSD              | Media-baja| Alta      | Bajo              |
| HDD / nube       | Baja      | Muy alta  | Muy bajo          |
+------------------+-----------+-----------+-------------------+
```

Cuanto más cerca de la CPU, más rápida y más cara es la memoria.

### 7.2. Memoria principal

La **memoria principal** es la RAM y la ROM. Es donde el ordenador mantiene los programas y datos en uso.

**RAM (Random Access Memory):**

- Es **volátil**: pierde el contenido al apagarse.
- Es **de acceso aleatorio**: se tarda lo mismo en acceder a cualquier posición.
- Tipos:
  - **SRAM:** basada en biestables, muy rápida y cara; se usa en caché.
  - **DRAM:** basada en condensadores, necesita refresco; se usa como RAM principal.
- Formatos: **DIMM** (sobremesa), **SO-DIMM** (portátiles), soldada (móviles y ultrabooks).
- Generaciones: DDR3, DDR4, DDR5. No son compatibles entre sí.
- Parámetros: capacidad (GB), frecuencia (MHz), latencia (CL).

**ROM (Read Only Memory):**

- No volátil. Contiene el **firmware** de arranque.
- Hoy se usan memorias **flash** actualizables (BIOS/UEFI).
- La **CMOS** guarda la configuración y la hora, alimentada por una pila.

**Memoria caché:**

- Copia las instrucciones y datos más usados.
- Niveles L1 (la más pequeña y rápida), L2 y L3 (compartida entre núcleos).
- Reduce el cuello de botella de von Neumann.

**Direccionamiento y capacidad:**

- Cada byte tiene una dirección única.
- Con un bus de direcciones de *n* bits se pueden direccionar $2^n$ posiciones.
- Con un bus de datos de *m* bits se transfieren *m* bits a la vez.

**Ejemplo:** un bus de direcciones de 32 bits permite $2^{32} = 4\,294\,967\,296$ direcciones, es decir, 4 GiB si cada dirección apunta a un byte.

**Actividad 7.** ¿Cuánta memoria se puede direccionar con un bus de 24 bits? ¿Y con uno de 36 bits?

**Actividad 8.** Un módulo RAM tiene 16 GB y una frecuencia de 3200 MHz. Explica qué significan ambos datos y por qué no basta con mirar la capacidad para valorar su rendimiento.

### 7.3. Almacenamiento secundario

El **almacenamiento secundario** es no volátil y guarda la información de forma permanente. Aquí se incluyen el sistema operativo, los programas y los archivos.

**Estructura física:**

- **HDD (disco duro magnético):** platos que giran (5400/7200 rpm), cabezales, pistas, sectores, cilindros. Tiene partes móviles, es más lento y sensible a golpes, pero ofrece gran capacidad a bajo precio.
- **SSD (unidad de estado sólido):** memoria flash NAND, sin partes móviles. Muy rápido, silencioso, resistente y con menor consumo. Se conecta por SATA o NVMe (PCIe).
- **Unidades ópticas:** CD, DVD, Blu-ray. En desuso.
- **Memorias flash y tarjetas:** USB, SD, microSD.
- **Almacenamiento en red y en la nube:** NAS, servidores remotos.

| Característica | HDD | SSD |
|---|---|---|
| Velocidad | Media | Muy alta |
| Latencia | Milisegundos | Microsegundos |
| Ruido | Sí | No |
| Resistencia a golpes | Baja | Alta |
| Consumo | Mayor | Menor |
| Precio por GB | Bajo | Mayor |
| Capacidad máxima | Muy alta | Alta |

**Estructura lógica:**

- **Partición:** división lógica de una unidad. Permite separar sistema y datos o instalar varios sistemas operativos.
- **Sistema de archivos:** organiza los archivos y carpetas. Ejemplos: FAT32, exFAT, NTFS, ext4, APFS, Btrfs.
- **Clúster (unidad de asignación):** unidad mínima que el sistema de archivos asigna a un archivo. Un archivo pequeño ocupa un clúster completo.
- **Fragmentación:** los archivos se reparten en fragmentos no contiguos; afecta más a los HDD.
- **Journaling:** registro de cambios que ayuda a recuperar el sistema tras un fallo.

**Actividad 9.** Explica la diferencia entre una partición y un sistema de archivos. ¿Puede una misma partición tener dos sistemas de archivos a la vez?

**Actividad 10.** Un archivo de 5 KB se guarda en un sistema con clústeres de 4 KB. ¿Cuánto espacio ocupa realmente? ¿Qué ocurre con muchos archivos pequeños?

### 7.4. Fiabilidad y seguridad del almacenamiento

La fiabilidad mide la probabilidad de que un dispositivo funcione correctamente durante un periodo de tiempo.

- **MTBF** (*Mean Time Between Failures*): tiempo medio entre fallos. No es una garantía de duración, sino una estimación estadística.
- **AFR** (*Annualized Failure Rate*): porcentaje estimado de fallos al año.
- **S.M.A.R.T.:** sistema de autodiagnóstico que avisa de sectores defectuosos, temperatura o errores.
- **ECC:** memoria con corrección de errores, usada en servidores.
- **Sectores defectuosos:** zonas del disco que dejan de ser fiables; los sistemas las marcan y evitan.

**RAID** (*Redundant Array of Independent Disks*): combina varios discos para mejorar rendimiento, capacidad o seguridad.

| Nivel | Discos mínimos | Característica | Tolerancia a fallos |
|---|---|---|---|
| RAID 0 | 2 | Reparte datos (striping) | Ninguna |
| RAID 1 | 2 | Duplica datos (mirroring) | Un disco |
| RAID 5 | 3 | Reparto + paridad distribuida | Un disco |
| RAID 6 | 4 | Doble paridad | Dos discos |
| RAID 10 | 4 | Espejo + reparto | Depende del conjunto |

> **RAID no es una copia de seguridad.** Protege frente al fallo de un disco, pero no frente a borrados accidentales, ransomware, incendios o errores humanos.

**Regla de copias de seguridad 3-2-1:**

- **3** copias de los datos;
- en **2** soportes diferentes;
- con **1** copia fuera del lugar habitual.

**Buenas prácticas:** verificar las copias, cifrar los datos sensibles, usar contraseñas robustas, mantener el firmware actualizado y controlar la temperatura y la humedad.

**Actividad 11.** Un centro guarda las notas de todo el alumnado en un único disco. Propón una solución de almacenamiento y copia de seguridad razonada, indicando soportes y frecuencia.

**Actividad 12.** ¿Por qué RAID 1 no sustituye a una copia de seguridad? Pon un ejemplo.

---

## 8. Sistemas de entrada/salida: periféricos

### 8.1. Concepto

Los **sistemas de E/S** permiten al ordenador comunicarse con el exterior. Incluyen:

- **periféricos** (dispositivos físicos);
- **controladores** (electrónica que gestiona el dispositivo);
- **puertos y conectores**;
- **controladores de E/S** del sistema (interrupciones, DMA).

**Interrupciones:** el dispositivo avisa a la CPU de que necesita atención, evitando que esta lo consulte continuamente.

**DMA** (*Direct Memory Access*): un controlador transfiere datos entre el dispositivo y la memoria sin intervención directa de la CPU, liberándola para otras tareas.

### 8.2. Clasificación de periféricos

| Tipo | Función | Ejemplos |
|---|---|---|
| **Entrada** | Introducen datos en el ordenador | Teclado, ratón, escáner, micrófono, webcam, lector de códigos, sensor. |
| **Salida** | Muestran o emiten resultados | Monitor, impresora, altavoces, proyector, auriculares. |
| **Entrada/salida (mixtos)** | Envían y reciben datos | Pantalla táctil, multifunción, módem, tarjeta de red, unidad de almacenamiento externa. |

También pueden clasificarse por su función:

- **de almacenamiento:** disco externo, USB, tarjeta SD;
- **de comunicación:** tarjeta de red, módem, router;
- **de interfaz de usuario:** teclado, ratón, pantalla;
- **de captura:** cámara, escáner, sensor;
- **de impresión:** impresora, plotter.

### 8.3. Conectores y puertos habituales

| Conector | Uso | Características |
|---|---|---|
| **USB-A / USB-C** | Periféricos y carga | USB 2.0 (480 Mbps), USB 3.2 (5–20 Gbps), USB4 (hasta 40 Gbps). |
| **HDMI** | Vídeo y audio | Hasta 48 Gbps en HDMI 2.1. |
| **DisplayPort** | Vídeo | Muy usado en monitores y tarjetas gráficas. |
| **Jack 3,5 mm** | Audio | Auriculares y micrófono. |
| **RJ45** | Red Ethernet | 1 Gbps o 10 Gbps. |
| **Thunderbolt 3/4** | Datos, vídeo, carga | Hasta 40 Gbps; compatible con USB-C. |
| **SATA** | Discos y SSD | Hasta 6 Gbps. |
| **M.2 NVMe** | SSD | Conectado por PCIe; muy rápido. |

**Conexiones inalámbricas:** Wi-Fi, Bluetooth, NFC, infrarrojos, redes móviles (4G/5G).

### 8.4. Periféricos de nueva generación

- **Realidad virtual y aumentada:** gafas y cascos inmersivos para formación, medicina, diseño y ocio.
- **Impresión 3D:** fabricación de piezas por deposición de material; también impresión 3D de alimentos o de tejidos en investigación.
- **Escáner 3D y LiDAR:** digitalización de objetos y espacios.
- **Wearables:** relojes, pulseras y sensores de actividad.
- **Domótica e IoT:** sensores y actuadores conectados (termostatos, cámaras, luces).
- **Biometría:** huella, reconocimiento facial, iris, voz.
- **Asistentes de voz:** altavoces inteligentes.
- **Drones:** cartografía, agricultura, salvamento, audiovisual.
- **Pantallas táctiles, plegables y de tinta electrónica.**
- **Hápticos y controladores de movimiento.**
- **Impresoras sin tinta (Zink) y dispositivos de realidad mixta.**

**Actividad 13.** Clasifica como entrada, salida o E/S: monitor, escáner 3D, pantalla táctil, impresora 3D, webcam, altavoz inteligente, lector de huella, plotter, tarjeta de red.

**Actividad 14.** Elige un periférico de nueva generación y explica qué problema resuelve, a quién beneficia y qué riesgos plantea (privacidad, coste, dependencia).

---

## 9. Buses de comunicación

### 9.1. Concepto

Un **bus** es un conjunto de conductores que transportan información entre los componentes del ordenador. Se caracteriza por:

- **anchura:** número de bits que transmite a la vez;
- **frecuencia:** número de transferencias por segundo;
- **protocolo:** reglas de comunicación;
- **topología:** forma de conexión.

### 9.2. Tipos de buses

| Bus | Función | Dirección |
|---|---|---|
| **Bus de datos** | Transporta datos e instrucciones entre CPU, memoria y E/S. | Bidireccional |
| **Bus de direcciones** | Indica la posición de memoria o el dispositivo al que se accede. | Unidireccional (CPU → memoria/E/S) |
| **Bus de control** | Transporta señales de sincronización y control: lectura, escritura, reloj, interrupción, reinicio. | Mixta |

**Ejemplo:** para leer el dato almacenado en la dirección 1024:

1. La CPU coloca 1024 en el bus de direcciones.
2. Activa la señal de lectura en el bus de control.
3. La memoria envía el contenido por el bus de datos.
4. La CPU lo recibe y lo guarda en un registro.

### 9.3. Ancho de banda

El **ancho de banda** indica cuántos datos pueden transferirse por segundo.

$$\text{Ancho de banda} = \text{anchura (bytes)} \times \text{frecuencia} \times \text{transferencias por ciclo}$$

**Ejemplo:** bus de 64 bits (8 bytes) a 1600 MHz con dos transferencias por ciclo (DDR):

$$8 \text{ B} \times 1600 \times 10^6 \times 2 = 25{,}6 \times 10^9 \text{ B/s} \approx 25{,}6 \text{ GB/s}$$

### 9.4. Buses actuales

- **Bus frontal (FSB):** en desuso; sustituido por enlaces punto a punto.
- **QPI / Infinity Fabric:** comunicación entre CPU y chipset o entre núcleos.
- **PCI Express (PCIe):** bus serie de alta velocidad para tarjetas gráficas, SSD NVMe y otros periféricos. Trabaja por carriles (x1, x4, x8, x16).
- **USB, SATA, Thunderbolt:** buses externos o de almacenamiento.
- **Bus de memoria:** conecta la CPU con la RAM.

**Tendencias:** paso de buses paralelos a **series** (más rápidos y con menos interferencias), mayor integración en el chip y uso de **conmutadores** en lugar de un único bus compartido.

**Actividad 15.** Calcula el ancho de banda de un bus de 32 bits a 800 MHz con una transferencia por ciclo.

**Actividad 16.** Explica por qué el bus de direcciones es unidireccional y el de datos es bidireccional.

**Actividad 17.** ¿Qué bus utilizarías para conectar una tarjeta gráfica de altas prestaciones? ¿Por qué?

---

## 10. Conexión con los sistemas operativos

El sistema operativo es el software que **gestiona el hardware** y ofrece servicios a las aplicaciones. Aprovecha los elementos estudiados en esta unidad:

- planifica el uso de la **CPU** entre procesos;
- administra la **memoria** (asignación, paginación, memoria virtual);
- organiza el **almacenamiento** mediante sistemas de archivos;
- controla los **periféricos** a través de controladores;
- gestiona la **energía**, los usuarios y la seguridad.

Por eso, conocer la arquitectura ayuda a entender por qué un equipo va lento, por qué se queda sin memoria o por qué un dispositivo no funciona. Este será el punto de partida del siguiente bloque dedicado a los sistemas operativos.

---

## 11. Prácticas de laboratorio

### Práctica 1. Identificación de componentes

- Abre la carcasa (con supervisión) o usa una imagen interactiva.
- Localiza placa base, CPU, RAM, disco, fuente de alimentación y ventiladores.
- Anota modelo y características.
- Contrasta la información con herramientas como CPU-Z, Speccy o HWiNFO.

### Práctica 2. Presupuesto de un equipo

- Elabora un presupuesto para tres perfiles: ofimática, diseño gráfico y gaming.
- Justifica cada componente y comprueba la compatibilidad (socket, RAM, fuente, caja).

### Práctica 3. Instalación de un sistema operativo libre en máquina virtual

- Crea una máquina virtual con VirtualBox o VMware.
- Instala una distribución Linux.
- Realiza el particionado y explica las decisiones tomadas.

### Práctica 4. Medición de rendimiento

- Mide tiempos de arranque, copia de archivos y apertura de aplicaciones en HDD y SSD (o simuladores).
- Registra los resultados en una tabla y extrae conclusiones.

### Práctica 5. Simulación de la arquitectura

- Usa un simulador sencillo (por ejemplo, un ensamblador didáctico o un simulador de von Neumann).
- Ejecuta un programa que sume dos números y describe el ciclo de instrucción paso a paso.

### Práctica 6. Copias de seguridad

- Diseña un plan de copias 3-2-1 para los datos de un pequeño negocio.
- Define soportes, frecuencia, responsables y pruebas de restauración.

---

## 12. Actividades de repaso

1. Define hardware, software y firmware con un ejemplo de cada uno.
2. Explica las cuatro libertades del software libre.
3. ¿Qué diferencia hay entre software gratuito y software libre?
4. Dibuja el esquema de von Neumann y señala sus cinco bloques.
5. ¿Qué es el cuello de botella de von Neumann y cómo se mitiga?
6. Enuncia la ley de Moore y explica dos consecuencias y dos límites.
7. Describe la función de la UC y de la ALU.
8. Enumera las fases del ciclo de instrucción.
9. Ordena de menor a mayor capacidad: caché L1, RAM, registro, SSD, HDD.
10. Explica la diferencia entre SRAM y DRAM.
11. ¿Qué significa que la RAM sea volátil?
12. Calcula cuánta memoria se puede direccionar con 20 bits.
13. Compara HDD y SSD en cinco criterios.
14. ¿Qué es un clúster y por qué puede desperdiciar espacio?
15. Explica qué es RAID y por qué no sustituye a una copia de seguridad.
16. Clasifica diez periféricos en entrada, salida o E/S.
17. Describe tres periféricos de nueva generación y su utilidad.
18. Explica la función de los buses de datos, direcciones y control.
19. Calcula el ancho de banda de un bus de 64 bits a 3200 MHz con dos transferencias por ciclo.
20. Debate: ¿debería el centro usar exclusivamente software libre? Argumenta a favor y en contra.

---

## 13. Autoevaluación

**1.** El firmware es:
a) un programa de usuario.  
b) software grabado en un dispositivo hardware.  
c) una parte de la RAM.  
d) un tipo de bus.

**2.** ¿Cuál de estas afirmaciones sobre el software libre es correcta?
a) Siempre es gratuito.  
b) No se puede vender.  
c) Permite acceder al código fuente.  
d) No tiene licencia.

**3.** En la arquitectura de von Neumann, instrucciones y datos:
a) se guardan en memorias separadas.  
b) comparten la misma memoria.  
c) se guardan solo en la caché.  
d) se guardan en el disco.

**4.** La ley de Moore se refiere a:
a) la velocidad de internet.  
b) el número de transistores por chip.  
c) la capacidad de los discos.  
d) la frecuencia del reloj.

**5.** La unidad que decodifica las instrucciones es:
a) la ALU.  
b) la UC.  
c) la RAM.  
d) el bus de datos.

**6.** La ALU realiza:
a) solo sumas.  
b) operaciones aritméticas y lógicas.  
c) la decodificación.  
d) el arranque del equipo.

**7.** La memoria volátil por excelencia es:
a) la ROM.  
b) la RAM.  
c) el SSD.  
d) el HDD.

**8.** Con un bus de direcciones de 16 bits se pueden direccionar:
a) 16 bytes.  
b) 65 536 posiciones.  
c) 32 768 posiciones.  
d) 1 024 posiciones.

**9.** Un SSD se caracteriza por:
a) tener platos giratorios.  
b) usar memoria flash.  
c) ser siempre más lento que un HDD.  
d) no poder almacenar el sistema operativo.

**10.** RAID 1:
a) reparte los datos sin redundancia.  
b) duplica los datos.  
c) usa paridad distribuida.  
d) necesita cuatro discos como mínimo.

**11.** La regla 3-2-1 se refiere a:
a) los niveles de RAID.  
b) las copias de seguridad.  
c) los buses del sistema.  
d) los tipos de RAM.

**12.** Una pantalla táctil es un periférico de:
a) entrada.  
b) salida.  
c) entrada/salida.  
d) almacenamiento.

**13.** El bus de direcciones es:
a) bidireccional.  
b) unidireccional.  
c) inexistente.  
d) solo para periféricos.

**14.** PCIe se usa principalmente para:
a) conectar teclados.  
b) tarjetas gráficas y SSD NVMe.  
c) la alimentación.  
d) la impresora.

**15.** El ancho de banda de un bus de 64 bits a 1000 MHz con una transferencia por ciclo es:
a) 8 GB/s.  
b) 4 GB/s.  
c) 16 GB/s.  
d) 64 GB/s.

### Soluciones

1. b · 2. c · 3. b · 4. b · 5. b · 6. b · 7. b · 8. b · 9. b · 10. b · 11. b · 12. c · 13. b · 14. b · 15. a

---

## 14. Glosario

- **ALU:** unidad aritmético-lógica; realiza operaciones matemáticas y lógicas.
- **BIOS/UEFI:** firmware que inicializa el hardware y arranca el sistema operativo.
- **Bus:** conjunto de conductores que transporta datos, direcciones o señales de control.
- **Caché:** memoria rápida que guarda datos de uso frecuente.
- **Clúster:** unidad mínima de asignación de un sistema de archivos.
- **CPU:** unidad central de proceso.
- **DDR:** tecnología de memoria RAM síncrona de doble transferencia.
- **DMA:** acceso directo a memoria sin intervención de la CPU.
- **Firmware:** software integrado en el hardware.
- **HDD:** disco duro magnético.
- **ISA:** conjunto de instrucciones que entiende un procesador.
- **MTBF:** tiempo medio entre fallos.
- **Partición:** división lógica de una unidad de almacenamiento.
- **PCIe:** bus serie de alta velocidad.
- **Periférico:** dispositivo externo o interno que permite la E/S de datos.
- **RAID:** combinación de discos para mejorar rendimiento o redundancia.
- **RAM:** memoria principal volátil de acceso aleatorio.
- **ROM:** memoria de solo lectura no volátil.
- **SSD:** unidad de almacenamiento de estado sólido.
- **UC:** unidad de control.
- **Von Neumann:** arquitectura con programa almacenado en memoria única.

---

## 15. Recursos recomendados

- Simuladores de montaje de equipos y de arquitectura de computadores.
- Herramientas de diagnóstico: CPU-Z, HWiNFO, CrystalDiskInfo.
- Documentación oficial de fabricantes de procesadores, placas y sistemas operativos.
- Repositorios de software libre y sus licencias.
- Guías de copias de seguridad y de seguridad de la información.

---

## 16. Criterios de evaluación

| Criterio | Indicador | Instrumento |
|---|---|---|
| Distingue hardware y software | Clasifica componentes y programas correctamente | Prueba escrita y actividades |
| Comprende la arquitectura clásica | Explica von Neumann y sus limitaciones | Esquema y preguntas |
| Analiza la CPU | Identifica UC, ALU, registros y ciclo de instrucción | Prueba y práctica |
| Diferencia memorias y almacenamiento | Compara tipos, estructura y fiabilidad | Tabla comparativa y cálculos |
| Clasifica periféricos | Distingue entrada, salida y E/S | Actividad y práctica |
| Comprende los buses | Explica tipos y calcula anchos de banda | Ejercicios |
| Aplica criterios técnicos | Justifica compras, ampliaciones y copias | Proyecto y exposición |
| Trabaja con rigor | Presenta, argumenta y cita fuentes | Rúbrica de trabajo |

---

## 17. Rúbrica simplificada (0–10)

| Nivel | Descripción | Puntuación |
|---|---|---|
| Excelente | Domina los conceptos, los relaciona y los aplica con precisión; justifica sus decisiones. | 9–10 |
| Notable | Comprende los conceptos y los aplica correctamente con pequeños errores. | 7–8 |
| Aprobado | Conoce los conceptos básicos y resuelve tareas sencillas con ayuda. | 5–6 |
| Insuficiente | Confunde conceptos clave y no justifica sus respuestas. | 0–4 |

---

**Nota final:** la tecnología cambia muy rápido, pero los principios de la arquitectura se mantienen. Entender cómo funciona un ordenador te permitirá adaptarte a cualquier dispositivo nuevo y tomar mejores decisiones como usuario, estudiante y futuro profesional.
