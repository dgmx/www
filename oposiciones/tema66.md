# TEMA 66. FUNCIONES Y SERVICIOS EN NIVELES SESIÓN, PRESENTACIÓN Y APLICACIÓN. PROTOCOLOS. ESTÁNDARES  
``` 
1. INTRODUCCIÓN y JUSTIFICACIÓN

2. NIVEL DE SESIÓN  
  2.1. FUNCIONES Y SERVICIOS  
  2.2. PROTOCOLOS Y ESTÁNDARES  

3. NIVEL DE PRESENTACIÓN  
  3.1. FUNCIONES Y SERVICIOS  
  3.2. PROTOCOLOS Y ESTÁNDARES  

4. NIVEL DE APLICACIÓN   
  4.1. FUNCIONES Y SERVICIOS  
  4.2. PROTOCOLOS Y  ESTÁNDARES  

5. CONCLUSIÓN

6. BIBLIOGRAFÍA  
```
## 1. INTRODUCCIÓN  
El presente tema forma parte del temario oficial publicado en el BOE de 13 de 
febrero de 1996, donde se aprueba el temario de acceso a la especialidad de 
Informática.

A su vez, el actual tema 66 se ubica  dentro del bloque temático de redes , a 
continuación del tema  “Funciones y servicios del nivel de red y del nivel de 
transporte. Técnicas. Protocolos ” 

A lo largo de este tema, a través de autores como  Stallings, Tanenbaum  y Prieto,  
se realizará una presentación general sobre las funciones y servicios del nivel de 
sesión, presentación y aplicación, a sí como los principales  protocolos de cada 
uno de estos niveles y los estándares.  

En el modelo OSI, las capas de sesión, presentación y aplicación cumplen 
funciones críticas para la comunicación entre aplicaciones en una red. 

**La capa de sesión**  se encarga de establecer, gestionar  y finalizar las sesiones de comunicación entre dispositivos, garantizando una conexión organizada y 
controlada.

 **La capa de presentación**  actúa como traductor, asegurando que los 
datos se presenten de manera coherente entre sistemas distintos mediante la 
conversión de formatos, cifrado y compresión de datos. 

Por último, **la capa de aplicación**  es el nivel más cercano al usuario y facilita el acceso a servicios y protocolos esenciales para la red, como HTTP, FTP y DNS, permitiendo la transferencia de datos, acc eso a sitios web y servicios de correo electrónico. 


Lo expuesto anteriormente justifica la importancia  del tema y es por ello que el 
estudio de las funciones y servicios del nivel de red y transporte están presente s 
dentro del currículo de la familia profesional de Informática y Comunicaciones. 
Concretamente se pueden ubicar dentro de los siguientes ciclos  formativos:  

**CFGM de Sistemas Microinformáticos y Redes** ( Real Decreto 1691/2007 
y Orden/Decreto autonómico)  
- Módulo: Redes locales  
  
**CFGS de Administración de Sistemas Informáticos en Red** ( Real Decreto 
1629/2009 y Orden/Decreto autonómico)  
- Módulo: Planificación y administración de redes  
 
## 2. NIVEL DE SESIÓN  
Esta capa proporciona sus servicios a la capa de presentación, facilitando el 
medio necesario para que las  entidades de presentación de dos máquinas 
diferentes organicen y sincronicen su diálogo y  procedan al  intercambio de datos, 
mediante el establecimiento de sesiones.  
 
### 2.1. FUNCIONES Y SERVICIOS  
La función principal de la capa de sesión es el establecimiento, administración y 
finalización ordenada de sesiones entre dos máquinas.  
Una sesión perm ite el transporte ordinario de datos, como efectuar un login a  un 
sistema remoto o transferir un archivo entre dos nodos, pero también proporciona 
servicios mejorados, útiles  en algunas aplicaciones, como los que se detallan a 
continuación:  
- **Manejo  del control  del diálogo**. Las sesiones pueden permitir que el tráfico vaya en una única dirección, comunicaciones bidireccionales alternadas (half 
duplex), o en ambas direcciones al mismo tiempo, comunicaciones 
bidireccionales simultáneas (full duplex). 
- **Sincronización  del diálogo** , mediante la inserción de puntos de 
verificación en la corriente de datos, de modo que si se produce una 
interrupción sólo es necesario repetir la transferencia de los datos 
después del último punto de verificación. 

### 2.2. PROTOCOLOS Y ESTÁNDARES  
- **RPC  (Remote Procedure Call)**es un protocolo que permite a un programa de 
ordenador ejecutar código en o tra máquina remota sin tener que preocuparse 
por las comunicaciones entre ambos. Las RPC son muy utilizadas dentro del 
paradigma cliente -servidor. Siendo el cliente el que inicia el proceso solicitando 
al servidor que ejecute cierto procedimiento o función  y enviando éste de vuelta 
el resultado de dicha operación al cliente.  Su estandarización aparece recogida 
en la RFC 1057.  

- **SCP**: El protocolo SCP (Secure Copy Protocol) permite la transferencia segura de 
archivos entre dos equipos, empleando el protoc olo SSH para cifrar la 
información transmitida. El protocolo en si mismo no provee autenticación ni 
seguridad (delega estas tareas en SSH), su única función es establecer la 
conexión entre el cliente y el servidor y gestionar la transferencia de los archiv os. 
 
- **ASP (AppleTalk Session Protocol)** es un protocolo de la familia AppleTalk que 
ofrece las funciones del nivel de sesión  (establecimiento, control y desconexión 
de la sesión) a los protocolos de los niveles superiores.  
(AppleTalk es un conjunto de protocolos desarrollado por Apple para la conexión 
de sus equipos en redes locales, aunque actualmente ha sido reemplazado  por 
las redes TCP/IP)  
 
- **NETBIOS:** El protocolo NetBIOS (Network Basic Input/Output System) es un estándar 
definido inicialmente por  IBM que define una interfaz para el acceso a servicios 
de red.  NetBIOS provee los servicios de sesión de la capa 5 del modelo OSI, ya 
que se encarga de establecer la sesión y mantener las conexiones entre los 
equipos.  Su  principal objetivo es aislar los programas de aplicación de cualquier 
dependencia respecto del hardware.  

## 3. NIVEL DE PRESENTACIÓN  

A diferencia de lo s niveles  inferiores que se ocupan sólo del movimiento fiable 
de bits  de un lado a otro, la capa de presentación se encarga de la sintaxis y la 
semántica de la información que se  transmite. Además, aísla a dichas capas 
inferiores del formato de los datos de las aplicaciones específicas.  

### 3.1. FUNCIONES Y SERVICIOS  
Las estructuras de datos a intercambiar s e deben definir de forma abstracta, 
mediante la codificación de estos  datos de una manera estándar acordada, 
haciendo posible así la comunicación entre computadoras con  representaciones 
locales diferentes. La capa de presentación maneja estas estructuras d e datos 
abstractas y las  convierte de la representación de la computadora a la 
representación estándar de la red y viceversa.  
Además de esta funcionalidad, la capa de presentación ofrece a la de aplicación 
los servicios de:  
- Garantía de que la información que envía la capa de aplicación de un 
sistema pueda ser entendida.
- Acuerdo y negociación de la sintaxis de transferencia.
- Definición del código a utilizar para representar una cadena de caracteres 
(ASCII, EBCDIC, etc.)  
- Interpretación de formatos de números
- Compresión de los datos, si es necesario.  
- Cifrado y descifrado.   
- Formateo de la información para su visualización o impresión.  
 
 
### 3.2 PROTOCOLOS y ESTÁNDARES  
- **TLS : El protocolo de seguridad de la capa de transporte** es crucial para la  ciberseguridad,  garantizando la confidencialidad, integridad y autenticación en la transmisión de  datos en redes públicas. TLS utiliza criptografía simétrica , como AES para cifrar datos.
La versión 1.3 de TLS mejora la seguridad y  eficiencia al eliminar cifrados inseguros. TLS es esencial en comunicaciones  HTTPS, correos electrónicos 
seguros y VPNs, garantizando  la seguridad y privacidad de los datos . 
 
- **ASN.1 (Abstract Syntax Notation One)** es un protocolo de nivel de presentación 
en el modelo OSI para la representación de datos de forma independiente de la 
máquina y su codificación interna.  
Este estándar no define como se han de codificar esos datos, sino que define 
una sintaxis abstracta para indicar el significado de los datos. Permite emplear 
tipos de datos simples, complejos y tipos de datos definidos por el usuario. El 
protocolo SNMP usa el ASN.1 para representar sus objetos gestionables.  
 

- **MIME Extensiones Multipropósito de 
Correo de Internet** es un estándar para expandir las capacidades limitadas del correo electrónico y en particular para permitir la inserción de documentos (como imágenes, sonido y texto) en un mensaje. 
Incorpora diversas características al servicio de correo  electrónico, como capacidad de enviar múltiples adjuntos en un solo mensaje; 
longitud ilimitada del mensaje; uso de conjuntos de caracteres no pertenecientes 
al código ASCII; uso de texto enriquecido (diseños, fuentes, colores, etc.); 
adjuntos binarios (ejecutables, imágenes, archivos de audio o vídeo, etc.), que 
se pueden dividir de ser necesario.  

Otros protocolos de la capa de presentación son: **Gzip** para compresión de datos, **X.509** para la emisión de certificados o **Base64** para la codificación de binario a texto.


## 4. NIVEL DE APLICACIÓN  
El nivel de aplicación es el último nivel del modelo OSI. Es la capa más cercana 
al usuario, no proporciona servicios a 
ninguna otra capa, sino que suministra servicios de red a las aplicaciones del 
usuario, ofreciéndoles también la posibilidad de acceder a los servicios ofrecidos 
por el resto de capas de la pila OSI.  

En este nivel se definen los protocolos que emplearán las aplicaciones de 
usuario para comunicarse entre ellas, acceder a información de bases de datos, 
transferir archivos, etc.  

El usuario normalmente no interactúa directamente con el nivel de aplicación, 
sino que emplea aplicaciones que as u vez interactúan con el nivel de aplicación, 
haciendo transparente al usuario el uso de la red.  

Las funciones  y servicios ofrecidos en esta capa vienen dados por los diferentes 
protocolos de nivel de aplicación existentes: la función de la capa es proveer 
servicios, y normalmente cada protocolo definido en este nivel ofrece un servicio 
diferente.  


### 4.1. FUNCIONES Y  SERVICIOS  
Las funciones del nivel de aplicación pueden ser ofrecidas por medio de 
aplicaciones o servicios:  
Las aplicaciones son programas que implementan protocolos del nivel de 
aplicación lo que les permite trabajar directamente a través de la red, 
como  pueden ser:  
- Aplicaciones de administración de la red  
  - Servicios de directorio  
  - Acceso remoto  
  - Etc. 
- Aplicaciones de mensajería electrónica  
  - Correo electrónico  
  - Mensajería instantánea  
  - Etc. 

Los servicios son programas que pueden ser invocados por las 
aplicaciones  de usuario para utilizar los recursos o funciones de la red. 
Entre los servicios más empleados podemos destacar:  
- Seguridad y cifrado  
- Identificación de  equipos (asignación dinámica de direcciones, 
resolución de nombres, traducción de direcciones, etc.)  
- Uso compartido de recursos (archivos, impresoras, etc.)  
- Comunicación entre procesos  
- Etc. 
 
### 4.2. PROTOCOLOS Y ESTÁNDARES  
La estandarización de protocolos se realiza mediante la publicación de RFCs 
(Request for Comments) . 
Entre los principales protocolos de esta  capa podemos citar DNS , Telnet, FTP, 
HTTP, etc.  
 
- DNS: El protocolo DNS  (Domain Name System)  consiste en una base de datos global, 
distribuida y jerárquica que contiene registros agrupados por zonas para permitir 
la resolución directa de nombre de má quina a IP o viceversa (resolución inversa). 
Los RFCs originales que definen este servicio son RFC 1034 y 1035.  
Desde su publicación, se han introducido numerosas actualizaciones y 
extensiones al DNS. Por ejemplo, el RFC 4033 y sus sucesores introducen 
DNSSEC, que añade seguridad al DNS.  
DNSSEC (Domain Name System Security Extensions) es un conjunto de 
extensiones de seguridad para el protocolo DNS (Domain Name System) que 
proporciona autenticidad e integridad a las respuestas de DNS, protegiendo así 
contra ciertos tipos de ataques, como el envenenamiento de caché y los ataques 
de suplantación de DNS (DNS spoofing). 
 

- SSH: Secure Shell. Permite la administración remota segura de equipos. Sustituye al obsoleto TELNET que transmitía los datos en texto plano, incluyendo credenciales, susceptibles de se interceptados. Utiliza el puerto 22, está basado en infraestructura de clave pública.

- FTP (File Transfer Protocol) , definido en el RFC 959, permite el intercambio de 
archivos entre equipos a través de TCP. Aunque sigue siendo utilizado, su falta 
de cifrado lo hace inseguro para transferencias sensibles. Por ello, se 
recomienda el uso de alternativas más seguras como FTPS (FTP Secure) o 
SFTP (SSH File Transfer Protocol), que incorporan cifrado en las transferencias. Utiliza puerto 20 para datos y el 21 para el canal de control. 
 
- HTTP (HyperText Transfer Protocol) es fundamental para la transferencia de 
páginas web entre servidores y navegadores. Las especificaciones de HTTP han 
evolucionado con el tiempo:  
Ultima versión HTTP/3 : Definido en el RFC 9114, utiliza el protocolo QUIC basado en UDP para mejorar la velocidad y seguridad de las conexione, mejora la latencia y la seguridad de las conexiones web.  Puerto 80 y su versión segura HTTPS puero 443


- OTROS  
Algunos otros protocolos que se encuentran definidos en el nivel de aplicación 
son: 
  - IMAP: Protocolo de acceso a mensajes de Internet, sustituye a POP3
  - SMTP (Simple Mail Transport Protocol) para envío de correo electrónico.  
  - DHCP: Protocolo de configuración dinámica de host, configura automáticamente los parámetros de la red, como dirección IP, mascara de red y puerta de enlace
  - SNMP: Protocolo de administración simple de red.

 

## 5. CONCLUSIÓN  
En este tema se ha presentado una visión global de los tres niveles superiores 
del modelo OSI (sesión, presentación y aplicación), los cuales son niveles 
orientados a la aplicación y que realizan funciones directamente vinculadas con 
los procesos de comunicación.  Para cada uno de estos niveles se han detallado 
sus funciones y servicios más importantes, así como los protocolos más 
representativos de cada nivel.  
 
 
## 6. BIBLIOGRAFÍA  
- Tanenbaum, A.  (2021).  Computer Networks.  Editorial Pearson   
- Stallings, W.  (2017).  Data and Computer Communications . Ed. Pearson . 
- Prieto,  A. (2006). Introducción a la informática.  Editorial McGraw -Hill 
- Martinez, E. (2022). Planificación y administración de redes. Editorial Síntesis.
 
 
 
 
 
 

