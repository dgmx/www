# TEMA 69. INTEGRACIÓN DE SISTEMAS. MEDIOS DE INTERCONEXIÓN. ESTÁNDARES. PROTOCOLOS DE ACCESO A REDES DE ÁREA EXTENSA.

1. Introducción   
2. Integración de sistemas 

3. Medios de interconexión   
   - 3.1.Medios guiados  
   - 3.2.Medios no guiados (inalámbricos)  
   - 3.3.Dispositivos de interconexión

4. Estándares de interconexión   
   - 4.1.Estándares de red de área local (LAN)  
   - 4.2.Estándares de red de área extensa (WAN)

5. Protocolos de acceso a redes de área extensa (WAN)   
   - 5.1 Protocolos clásicos de acceso WAN  
   - 5.2 Protocolos de nivel de enlace y red para WAN modernas  
   - 5.3 Protocolos de acceso inalámbrico WAN
   - 5.4 Protocolos de enrutamiento WAN

6. Conclusión

7. Bibliografía y referencias normativas

## 1. INTRODUCCIÓN Y JUSTIFICACIÓN

El presente tema forma parte del temario de la especialidad de Informática aprobado en el BOE de 13 de febrero de 1996\. A su vez, el actual tema 69 se ubica dentro del bloque temático de redes.

A lo largo de este tema, a través de autores como Stallings, Tanenbaum y Prieto,se realizará una presentación general sobre la integración de sistemas y medios de interconexión estándares.

La evolución tecnológica ha desplazado el foco desde equipos aislados hacia ecosistemas hiperconectados y distribuidos. La **integración de sistemas** y el uso de redes de área extensa (**WAN**) son los pilares que permiten la globalización de la información, garantizando que datos y aplicaciones fluyan de forma segura y eficiente entre ubicaciones geográficamente distantes.

La **integración de sistemas** es el proceso de conectar diferentes subsistemas informáticos, dispositivos, redes y aplicaciones, que en origen fueron diseñados de manera independiente, para que funcionen de forma coordinada y compartan información de manera eficiente y transparente para el usuario final.

Las redes de área extensa conectan sistemas de diferentes organizaciones, países e incluso continentes. Sin interoperabilidad:

* No sería posible enviar un correo electrónico desde Gmail a Outlook.  
* No funcionaría la banca online entre entidades distintas.  
* Las redes móviles no permitirían roaming internacional.

Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de la integración de sistemas y medios de interconexión está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos de grado superior (en adelante CFGS) y grado medio (en adelante CFGM):

GFGS de Administración de Sistemas Informáticos en Red (**Real Decreto 1629/2009 )**

* Módulo: Administración de sistemas operativos

CFGM de Sistemas Microinformáticos y Redes (**Real Decreto 1691/2007 )**

* Módulo: Sistemas operativos en red

## 2. INTEGRACIÓN DE SISTEMAS

Cuando se habla de integración de sistemas nos referimos a redes mixtas que combinan distintos tipos de dispositivos, sistemas operativos y tecnologías de conexión, como redes cableadas e inalámbricas o diferentes plataformas (Windows, Linux, macOS). Compartir recursos en este tipo de redes requiere atención a la compatibilidad, la seguridad y la configuración adecuada.

La integración de sistemas está justificada por la enorme cantidad de arquitecturas de red diferentes que existen.

Entre las ventajas que se logran con la integración de sistemas están principalmente: reducir costes al usar y compartir recursos de otras redes y facilitar la ampliación de la cobertura geográfica.

Según el ámbito de aplicación se habla de interconexión de área local o de área extensa. En el caso de la interconexión de área local se conectan redes que están geográficamente cerca, creando una red metropolitana (MAN). En el caso de la interconexión de área extensa se refiere a conectar redes geográficamente dispersas.

## 3. MEDIOS DE INTERCONEXIÓN

El soporte físico por el que viaja la señal es determinante para la velocidad y la distancia.

### **3.1. Medios guiados**

Utilizan cables para conducir la señal:

* **Par trenzado (UTP/STP):** Económico, muy común en LAN (Categorías 6, 6a, 7).

Es el medio guiado más extendido en redes de área local por su equilibrio entre prestaciones, coste y facilidad de instalación. Consiste en pares de conductores de cobre trenzados entre sí: el trenzado reduce la diafonía (crosstalk) y la interferencia electromagnética por cancelación de campos magnéticos opuestos.

* **Cable Coaxial:** Mayor blindaje, usado en redes de TV por cable (HFC).

Formado por un conductor central de cobre rodeado por un dieléctrico, una malla metálica y una cubierta exterior. Esta estructura coaxial le otorga mayor ancho de banda y mejor inmunidad EMI que el par trenzado, pero a costa de mayor rigidez y coste.

* **Fibra Óptica:** El estándar de oro. Utiliza pulsos de luz. Es el medio de interconexión más usado en las WAN. La fibra monomando alcanza desde 400 Gbps a 1.2 Tbps

Transmite información mediante pulsos de luz a través de un núcleo de vidrio o plástico de muy bajo índice de absorción. Sus ventajas sobre el cobre son radicales: inmunidad total a interferencias electromagnéticas, atenuación muy baja (lo que permite alcances de decenas de kilómetros sin repetidores), ancho de banda potencialmente ilimitado y seguridad intrínseca (interceptar la fibra produce pérdida de señal detectable).

### **3.2. Medios no guiados (inalámbricos)**

La señal viaja por el espacio mediante ondas electromagnéticas:

* **Radiofrecuencia:** Wi-Fi, Bluetooth.

La familia **IEEE 802.11** define los estándares Wi-Fi. La evolución va desde 802.11b (11 Mbps, 2.4 GHz, 1999\) hasta el actual 802.11ax (Wi-Fi 6/6E).

Wi-Fi 7 (802.11be) incorpora la banda de 6 GHz como canal principal y MLO (Multi-Link Operation). El mecanismo de acceso al medio es CSMA/CA, a diferencia de Ethernet que usa CSMA/CD.

WPAN Bluetooth esta definido por la IEEE 802.15 (Baja potencia y corto alcance)

* **Microondas:** Terrestres o Satelitales (Starlink, VSAT).

Las microondas terrestres operan en la banda de 1 GHz a 40 GHz con propagación en línea de visión directa (LOS). Enlazan puntos fijos separados decenas de kilómetros mediante antenas parabólicas directivas. Se usan como alternativa al cableado en enlaces punto a punto entre edificios o entre torres de telecomunicaciones.

* **Infrarrojos:** Corto alcance, línea de visión directa.

La transmisión por infrarrojo (IrDA, Infrared Data Association) fue el primer estándar de comunicación inalámbrica de corto alcance, con velocidades de hasta 16 Mbps pero exigiendo línea de visión directa y alcances inferiores a 1 metro. Ha sido completamente desplazado por Bluetooth y Wi-Fi en las comunicaciones entre dispositivos.

### **3.3. Dispositivos de interconexión**

Actúan en diferentes capas del modelo OSI:

* **Repetidores/Hubs:** Capa 1 (Física).

El repetidor es el dispositivo de interconexión más elemental: recibe una señal eléctrica degradada, la regenera y la retransmite. Opera exclusivamente en la capa física del modelo OSI, sin ninguna noción de direcciones ni protocolos. Su función es ampliar el alcance de un segmento de red más allá del límite impuesto por la atenuación del medio. Obsoletos

* **Bridges/Switches:** Capa 2 (Enlace). Segmentan el tráfico mediante direcciones MAC.

El puente (bridge) segmenta el dominio de colisión dividiendo la red en dos segmentos con tráfico independiente. Aprende las direcciones MAC de los dispositivos de cada segmento y solo reenvía las tramas cuyo destino está en el segmento opuesto, filtrando el tráfico local. Esta capacidad de aprendizaje y filtrado lo eleva a la capa de enlace de datos.

* **Routers:** Capa 3 (Red). Encaminan paquetes basándose en direcciones IP.

El router es el dispositivo que interconecta redes distintas tomando decisiones de enrutamiento basadas en las direcciones IP de los paquetes, no en las direcciones MAC de las tramas. Opera en la capa de red del modelo OSI y constituye la frontera entre dominios de broadcast: ningún tráfico de broadcast cruza un router.

* **Gateways:** Capas superiores. Traductores entre protocolos distintos.

La pasarela o **gateway** es el dispositivo más complejo de interconexión: opera en las capas superiores del modelo OSI (transporte, sesión, presentación, aplicación) y puede traducir entre protocolos completamente heterogéneos. Un gateway de correo electrónico convierte entre formatos SMTP y X.400; un gateway VoIP convierte entre telefonía clásica RTC y VoIP sobre IP. Conceptualmente, un gateway realiza una conversión semántica del tráfico, no solo un reenvío.

## 4. ESTÁNDARES DE INTERCONEXIÓN

Un **estándar** es un conjunto de reglas, especificaciones técnicas o procedimientos aceptados oficialmente (por un organismo reconocido) o de facto (por la industria) que garantizan la interoperabilidad entre sistemas de diferentes fabricantes.

En el contexto de las WAN, los estándares son esenciales porque:

* Permiten la comunicación entre redes de distintas organizaciones o países.  
* Reducen la dependencia de un único proveedor (interoperabilidad).  
* Facilitan la evolución tecnológica sin romper la compatibilidad.  
* Disminuyen los costes al fomentar la competencia.

### **4.1. Estándares de red de área local (LAN)**

Dominados por el comité **IEEE 802**:

* **802.3 (Ethernet):** El estándar de cableado. `1GBASE-T`
* **802.11 (Wi-Fi):** Estándares inalámbricos (a, b, g, n, ac, ax, be).  Bandas de 2.4, 5 y 6 GHz
* **802.1Q VLANs y 802.1W Rapid Spanning Tree**

### **4.2. Estándares de red de área extensa (WAN)**

Emitidos por organismos como la **ITU-T** y el **IETF**. Se centran en la transmisión a larga distancia y la gestión de la congestión.

* **X.25:** Desarrollado en los años 70 por la CCITT (actual ITU-T), fue el primer estándar global para redes de datos de conmutación de paquetes.  
* **X.75 (1980)**: Define interconexión entre redes X.25 (gateways). Permite roaming entre redes de distintos países/operadores.  
* **Frame Relay: Eficiencia mediante circuitos virtuales:** Surgió en los 90 como una evolución simplificada de X.25 para líneas digitales de mayor calidad (T1/E1).  
* **ATM (Asynchronous Transfer Mode):** Alta velocidad y celdas fijas. Diseñado para transportar voz, video y datos de forma simultánea en redes de alta velocidad

## 5. PROTOCOLOS DE ACCESO A REDES DE ÁREA EXTENSA

Un **protocolo de acceso WAN** es un conjunto de reglas que define cómo un dispositivo (generalmente un router o conmutador) se conecta y transmite datos a través de una red de área extensa proporcionada por un operador de telecomunicaciones.

**Funciones principales:**

* Establecer, mantener y finalizar la conexión física/lógica con el operador.  
* Encapsular los datos de niveles superiores (generalmente datagramas IP) dentro de tramas adecuadas para la WAN.  
* Detectar y corregir errores (según el protocolo).

Hay 2 tipos, los orientados a conexión: X.25, Frame Relay, ATM, MPLS y sin conexión: HDLC o PPP

### **5.1. Protocolos clásicos de acceso WAN**

*  **PPP (Point-to-Point Protocol):** Protocolo de nivel de enlace (capa 2\) para enlaces punto a punto, como líneas serie (RS-232, T1/E1, módems DSL, etc.). Reemplazó a SLIP. Enlaces serie y marcado telefónico.
*  **HDLC (High-Level Data Link Control):** Protocolo de nivel de enlace de la ISO, Existe una variante propietaria de Cisco (Cisco HDLC)
*  **Frame Relay:** Tecnología WAN de conmutación de tramas orientada a conexión (circuitos virtuales), optimizada para alta velocidad, baja latencia y control de congestión.
*  **ATM (Asynchronous Transfer Mode)** — celdas fijas de 53 bytes, QoS, usado en redes backbone

### **5.2. Protocolos de nivel de enlace y red para WAN modernas**

* **MPLS (Multiprotocol Label Switching).** Protocolo de nivel 2.5 (entre enlace y red) que acelera el reenvío mediante etiquetas. No usa direcciones IP en cada salto (solo en los bordes).  
* **DSL: (ADSL, VDSL)** Familia de protocolos que permiten transmisión digital de alta velocidad sobre par trenzado de cobre (línea telefónica tradicional), utilizando frecuencias superiores a la voz.  
* **SD-WAN (Software-Defined WAN).** La evolución moderna de las WAN. Separa el **plano de control** del **plano de datos**. Permite gestionar múltiples conexiones (MPLS, Fibra, 5G) de forma centralizada mediante software, optimizando el tráfico según la aplicación (ej. priorizar Zoom sobre descargas de archivos).
* **PPPoE (PPP over Ethernet)**. Encapsula PPP sobre tramas Ethernet, permitiendo autenticar, gestionar y facturar a los usuarios en redes modernas como DSL y fibra.
* **Ethernet WAN** (Carrier Ethernet / VPLS / EVPN) — extensión de Ethernet sobre infraestructura del operador
* **VXLAN / GENEVE** — túneles de capa 2 sobre capa 3 para sobrelays

### **5.3. Protocolos de acceso inalámbrico WAN**

- **LTE / 5G NR** — acceso celular como enlace WAN primario o respaldo
- **WiMAX (IEEE 802.16)** — banda ancha inalámbrica metropolitana (menos usado hoy)
- **Satélite (Starlink, VSAT)** — enlaces WAN vía satélite con protocolos como TCP PEP para mitigar latencia
- **LoRaWAN / NB-IoT** — WAN de baja potencia para IoT (LPWAN)

### **5.4. Protocolos de enrutamiento WAN**

Internet no es una red única, está formada por unas 70.000 redes individuales gestionadas por ISP, Universidades y grandes empresas tecnológicas, cada una con un número de identificación de sistema autónomo ASN, que gestionan su propia política de enrutamiento en internet, utilizando el protocolo BGP para intercambiar información con otros sistemas.

Permiten la comunicación entre redes geográficas dispersas:
* **BGP (Puerta de enlace de frontera)** Conecta sistemas autónomos, estándar en WAN/Internet
* **OSPF** (Open Shortest Path First) — protocolo de estado de enlace (LS), convergencia rápida, jerárquico (áreas)
* **IS-IS** — similar a OSPF, usado en ISPs y grandes redes
* **EIGRP** — protocolo híbrido Cisco (distancia vector + estado de enlace), propietario


## 6. CONCLUSIÓN

La necesidad de intercambiar información entre equipos, ubicados a distancias que van desde unos pocos metros a decenas e incluso centenares de kilómetros, ha dado lugar a la aparición de diversas tecnologías que pretenden satisfacerla. 

Conforme ha ido evolucionando la tecnología, las fronteras entre LAN, MAN Y WAN se han ido difuminando paulatinamente. Las redes de área metropolitana comparten en la actualidad campo de aplicación con las redes de área local y de área extensa. Las tecnologías de red de área local, en especial Ethernet, tratan de abarcar alcances cada vez más amplios e imponer su presencia en todos los ámbitos. Dentro de las tecnologías de área extensa, los nuevos desarrollos basados en MPLS tienden a integrarse con el nivel de red de las redes locales de las organizaciones, para proporcionar un tránsito más sencillo del entorno local al nacional e incluso global, todo ello al abrigo de la tecnología IP.

La integración de sistemas sobre WAN no es un concepto estático, sino una disciplina en continua evolución impulsada por el crecimiento de datos, la movilidad, la nube y la inteligencia artificial. Comprender los medios, estándares y protocolos actuales es la base para diseñar y operar las redes del futuro.

## 7. BIBLIOGRAFÍA

- Tanenbaum, A. (2021). *Computer Networks.* Editorial Pearson  
- Stallings, W. (2017). *Data and Computer Communications*. Ed. Pearson.  
- Prieto, A. (2006). *Introducción a la informática.* Editorial McGraw-Hill  
- Núñez, M. (2019) *Sistemas operativos en red*. Editorial Síntesis.  
- Martinez, E. (2022) Planificación y administración de redes. Editorial Síntesis

