
 
  

## 1. INTRODUCCIÓN
El presente tema forma parte del temario oficial publicado en el BOE de 13 de 
febrero de 1996, donde se aprueban el temario de acceso a la especialidad de 
Informática.

A su vez, el actual tema 70 se ubica dentro del bloque temático de redes. A lo largo de este tema, a través de autores como Stallings y Tanenbaum, se 
realizará una presentación general sobre el diseño, instalación y configuración 
de un sistema en red local.  

La evolución de la informática ha pasado de sistemas aislados a entornos totalmente interconectados.

Los sistemas en red, mediante los sistemas de cableado, equipos de 
interconexión y otros componentes, constituyen el esqueleto y aparato 
circulatorio de cualquier organización, de forma que permiten y simplifican el 
desarrollo de su actividad. Hoy en día es impensable la existencia de una 
organización o empresa que no contemple la instalación de una red que 
proporcione servicios de transporte de datos y servicios multimedia.  

Por este motivo, los sistemas en red requieren de una adecuada sistematización 
basada en el orden, planificación y profundo conocimiento de las TIC, para 
proporcionar a la organización una capacidad constante de absorción de la 
demanda creciente de nuevos servicios de información. Equivocaciones 
originadas por una planificación poco previsora, la elección de hardware y/o 
software no adecuados, errores en la instalación, una mala administración o 
mantenimiento de la red, producen costes elevados y gastos adicionales a los 
presupuestados, e incluso pueden llegar a poner en peligro la propia existencia 
de una organización.  

Este tema aborda desde la concepción teórica y el diseño hasta la puesta en marcha física y lógica de una red local

Lo expuesto anteriormente justifica la importancia del tema y es por ello que el 
estudio de la instalación y configuración de sistemas en red loca l está presente 

dentro del currículo de la familia profesional de Informática y Comunicaciones.
Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:  
- CFGM de Sistemas Microinformáticos y Redes ( Real Decreto 1691/2007 
y Orden/Decreto autonómico)  
  - Módulo: Redes locales  
- CFGS de Administración de Sistemas Informáticos en Red ( Real Decreto 
1629/2009 y Orden/Decreto autonómico)  
  - Módulo: Planificación y administración de redes  
- CFGS de Desarrollo de Aplicaciones Multiplataforma ( Real Decreto 
450/2010, Real Decreto 405/2023 y  Orden/Decreto autonómico ) 
  - Módulo: Sistemas informáticos  
- CFGS de Desarrollo de Aplicaciones Web ( Real Decreto 686/2010, Real 
Decreto 405/2023 y  Orden/Decreto autonómico ) 
  - Módulo: Sistemas informáticos  
 
## 2. SISTEMAS EN RED  

Un sistema en red es un conjunto de dispositivos de computación 
interconectados y autónomos llamados nodos. Se dice que dos dispositivos  están 
interconectados si pueden intercambiar información. La interconexión puede 
darse a través de una variedad de medios de transmisión , como par trenzado , 
fibra óptica y ondas de radio (por ejemplo, microondas, infrarrojos, satélites de 
comunicación)  (Tanenbaum, 2021).  

Las arquitecturas y componentes básicos de un sistema en red son los siguientes:
- Arquitectura: Principalmente Cliente / Servidor o P2P
- Componentes básicos:
  - Hardware de red: NICs, dispositivos de interconexión (switches, routers) y estaciones de trabajo y servidores
  - Software de red: Sistemas operativos de red como Windows Server o Linux
  - Medios de transmisión: Cableados o inalámbricos.
  
Los beneficios que se obtienen al disponer de sistemas en red son:  
- Permiten compartir información, recursos, como impresoras, dispositivos 
de almacenamiento, etc.  
- Permiten mayor flexibilidad, ya que se permite el acceso a los recursos de 
la red desde diferentes nodos.  
- Permiten reducir costes . 


## 3. PLANIFICACIÓN Y DISEÑO  DE UN SISTEMA EN RED

El diseño de un sistema en red debe seguir un enfoque jerárquico y estructurado para garantizar la escalabilidad.
 
**Análisis de la situación de partida** Donde se analizarán los siguientes aspectos:  
- Servicios de red proporcionados por la instalación actual y sus problemas 
asociados  
- Hardware de la instalación actual: características de los servidores, de los 
puestos de trabajo de los clientes, electrónica de red, cableado, etc.  
- Software de la instalación actual: sistemas operativos de servidor, 
sistemas operativos de equipos clientes, aplicaciones, etc.  
- Cantidad de información que manejan  
- Número actual de usuarios: servicios que demandan y tráfico que generan  
- Etc. 
 
**Análisis de necesidades detectadas** A tener en cuenta los siguientes aspectos:

- Uso de la red : habrá que determinar el tipo  de aplicaciones que van a 
hacer uso de la red y qué servicios va a ofrecer la red.  
- Capacidad de la red : habrá que estimar las necesidades de carga, 
almacenamiento de datos y tipo de tráfico que generará.  
- Recursos : habrá que determinar el tipo y número estimado de equipos y 
otros dispositivos necesarios, así como los recursos humanos asociados 
necesarios para dar soporte y garantizar el buen funcionamiento de la red.  
- Usuarios : habrá que determinar el número y tipo de usuarios que harán 
uso de la red, haciendo una estimación por lo alto en cuanto a número de 
usuarios.  
- Conectividad : habrá que determinar las necesidades de conexión entre 
los dispositivos de cada subred dentro de la red y con el exterior.  
- Otros aspectos : habrá que determinar otros aspectos relacionados con 
la disponibilidad de la información y los servicios, confidencialidad, calidad 
de servicio (QoS), etc.  
 
**Diseño lógico** : dentro del diseño lógico se ubican las siguientes tareas:  
- Diseño de la topología lógica de red . 
- Diseño de direccionamientos y nombres . 
- Segmentación VLAN y enrutamiento.  
- Estrategias de seguridad de la red . 
- Estrategias para el mantenimiento de la red.  

**Diseño físico** : implementación del diseño lógico.  

- Ubicación de los armarios de comunicaciones
- Canalizaciones
- Tomas de usuario
- Puntos de acceso inalámbricos

## 4. PARÁMETROS DE DISEÑO

Para que la red sea eficiente, se tendrán en cuenta los siguientes factores técnicos:

- Topología: La topología en estrella extendida es el estándar actual en las redes de área local.
- Medios de transmisión: Se emplean medios guiados (cable) para la estructura básica de la red y no guiados para los dispositivos móviles o portátiles.
- Ancho de banda: Se tendrá en cuenta para evitar cuellos de botella en la red. Cableado categoría 6 o 7 1000BASE-T
- Latencia: Crucial para VoIP y videoconferencias.
- Seguridad: Implementación de cortafuegos, listas de control de acceso (ACL) y cifrado.
- Escalabilidad: Para crecimiento de la red sin modificar la estructura base.
- Disponibilidad y redundancia: Enlaces de respaldo y uso de protocolos STP para evitar bucles.
- Servidores y estaciones de trabajo, número de equipos necesarios.
- Sistemas operativos de red. Software libre o propietario.
- Conexión al exterior. Salida a Internet, teniendo en cuenta las políticas de seguridad.



## 5. INSTALACIÓN Y CONFIGURACIÓN  DE UN SISTEMA EN RED  LOCAL  

La implantación de un sistema en red consiste en la instalación y configuración 
de todos los elementos de la red (hardware y software) conforme a lo acordado 
en las fases de análisis y diseño.  

De este modo, la fase de instalación y configuración  dará como resultado el 
montaje de la  infraestructura de red,  junto con la instalación del software, así 
como la puesta  en funcionamiento de los  servicios de red.  

La instalación y configuración de la red se llevará a cabo en varios pasos:  
- Instalación de la infraestructura de red  
- Interconexión de equipos  
- Instalación y configuración de equipos  
 
 
 
 

## 5.1. INSTALACIÓN DE LA INFRAESTRUCTURA DE RED  

Se basa en el cableado estructurado (Normas ANSI 586)

- Subsistemas: Cableado horizontal (hasta el puesto de trabajo), cableado vertical (cableado entre plantas) y el cuarto de telecomunicaciones
- Categoría: Uso de cableado UTP/FTP categorías 6 y 7 para velocidades de 1Gigabit a 10 Gigabits
- Instalación física: Montaje de armarios rack, paneles de parcheo y etiquetado bajo norma
 
## 5.2. INTERCONEXIÓN DE EQUIPOS  

Se realiza mediante dispositivos de capa 2 (enlace) y capa 3 (red) del modelo OSI.
- Conmutadores: (Switches) Segmentan dominios de colisión. Configuración de puertos, agregación de enlaces y gestión de VLANs. Gestionables para administración web o ssh.
- Encaminadores: (routers) Interconectan diferentes redes, configuración de rutas estáticas o protocolos de enrutamiento dinámico.  DHCP para configuración dinámimica de host.
- Puntos de acceso. Para conexiones inalámbricas.
  
## 5.3. INSTALACIÓN Y CONFIGURACIÓN DE LOS EQUIPOS  

Incluye tanto los servidores como las estaciones de trabajo
- Configuración IP: Asignación estática para servidores e impresoras, dinámica para clientes
- Sistemas operativos de red: Instalación de roles y características. Gestión de usuarios AD/LDAP, archivos NFS/SMB, bases de datos, servidores web, etc.
- Seguridad de host; Configuración de firewall locales, antivirus y políticas de grupo (GPO)

## 5.4. DIAGNÓSTICO DE INCIDENCIAS  

El proceso de monitorización y resolución de incidencias en los sistemas de red se realiza en 3 niveles:
- **Capa física**: Comprobación del cableado con certificadores, comprobación de tarjetas de red y conectores.
- **Capa de enlace** Uso de comandos como:
  - Ping: comprueba conectividad básica
  - tracert / traceroute: Localiza saltos y puntos de fallo en la ruta
  - ipconfig / ifconfig / ip : Verifica los parámetros de red locales, comprobamos que los equipos tienen una IP correcta. No tipo APIPA. Podemos liberar la ip con los comandos `ipconfig /release`o `dhclient -v -r`
  - nslookup / dig. Diagnóstico de problemas de resolución de nombres (DNS)
- **Analizadores de protocolos**: Uso de herramientas avanzadas para capturar y analizar tráfico como Wireshark y puertos abiertos con nmap. Uso del protocolo snmp para monitorización y alertas
 

## 6. CONCLUSIÓN  
Los sistemas en red juegan un papel de vital importancia para el correcto funcionamiento de una organización.

El diseño y gestión de una red local no es un proceso estático, los responsables de la red deben prever el crecimiento tecnológico y garantizar que la infraestructura sea robusta, segura y eficiente, siguiendo siempre los estándares de telecomunicaciones para facilitar el mantenimiento, la escalabilidad y la interoperabilidad.

El tema recoge el proceso de diseño de un sistema de red local, desde la planificación inicial, los parámetros de diseño y la puesta en marcha de la instalación.


 
## 7. BIBLIOGRAFÍA  
- Tanenbaum, A.  (2021).  Computer  Networks.  Editorial Pearson   
- Stallings, W.  (2017).  Data and Computer Communications . Ed. Pearson . 
- Prieto,  A. (2006). Introducción a la informática.  Editorial McGraw -Hill 
- Martínez, E. (2022). Planificación y administración de redes. Editorial Síntesis  
 

