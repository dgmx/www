# Tema 68. Software de sistemas en red. Componentes. Funciones. Estructura

1. Introducción y justificación

2. Software de sistemas en red 

3. Componentes del software de sistemas en red  
   - 3.1.Sistema operativo de red (NOS)  
   - 3.2.Controladores y firmware de dispositivos de red  
   - 3.3.Protocolos de comunicación  
   - 3.4.Servicios de red  
   - 3.5.Software de gestión y monitorización de red  
   - 3.6.Aplicaciones cliente de red

4. Funciones del software de sistemas en red  

5. Estructura del software de sistemas en red  
   - 5.1.Arquitectura cliente-servidor  
   - 5.2.Arquitectura peer-to-peer (P2P)  
   - 5.3.Arquitectura orientada a servicios y microservicios  
   - 5.4.Infraestructura en la nube e híbrida

6. Conclusión

7. Bibliografía 

## 1 Introducción y justificación
   

El presente tema forma parte del temario oficial publicado en el BOE de 13 de febrero de 1996, donde se aprueba el temario de acceso a la especialidad de Informática. A su vez, el actual tema 68 se ubica dentro del bloque temático de redes, a continuación del tema, denominado “Redes de área local. Componentes. Topologías. Estándares. Protocolos.

A lo largo de este tema, a través de autores como Stallings, Tanenbaum y Prieto, se realizará una presentación general sobre el software presente en los sistemas en red, detallando sus componentes, funciones y estructura.

El vertiginoso desarrollo de las tecnologías de la información durante las últimas décadas ha transformado radicalmente el modo en que las organizaciones gestionan sus recursos y servicios. En el centro de esta transformación se encuentra el software de sistemas en red: el conjunto de programas, protocolos y servicios que hacen posible que los equipos informáticos cooperen, compartan recursos y se comuniquen de forma eficiente, segura y fiable.

Desde los primeros sistemas de los años sesenta y el nacimiento de Internet, hasta los actuales entornos de computación en la nube, contenedores y redes definidas por software, el software de sistemas en red ha evolucionado de forma continua respondiendo a las exigencias de conectividad, escalabilidad y seguridad de cada época. Hoy, en un mundo donde el trabajo remoto, los servicios digitales y el Internet de las Cosas son realidades cotidianas, su dominio resulta imprescindible para cualquier profesional de la informática.

El presente tema se estructura en torno a los tres ejes que enuncia su título. En primer lugar, abordaremos el concepto del software de sistemas en red. A continuación analizaremos sus componentes principales: el sistema operativo de red, controladores de red, los protocolos de comunicación,etc.  Seguidamente describiremos sus funciones esenciales, desde la gestión de recursos compartidos o la autenticación de usuarios. Por último, estudiaremos su estructura, examinando las distintas arquitecturas de despliegue —cliente-servidor, peer-to-peer, SOA y microservicios—, la organización en capas según los modelos OSI y TCP/IP, y la integración con infraestructuras en la nube e híbridas.

Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio del software de sistemas en red está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:

CFGM de Sistemas Microinformáticos y Redes (**Real Decreto 1691/2007)**

* Módulo: Sistemas operativos en red

CFGS de Administración de Sistemas Informáticos y Redes (**Real Decreto 500/2024)**

* Módulo: Planificación y administración de redes.

## 2. Software de sistemas en red

El software de sistemas en red es el conjunto de programas, protocolos y servicios que gestionan los recursos de un sistema informático distribuido, permitiendo la comunicación, la compartición de recursos y la administración centralizada entre múltiples nodos interconectados.

Reside en la frontera entre el hardware de red y las aplicaciones de usuario. Actúa como intermediario que abstrae la complejidad física de la red y ofrece interfaces de programación estables (sockets, llamadas al sistema) a las capas superiores. Se extiende desde los drivers de dispositivo en el kernel hasta los demonios de sistema (DNS, DHCP, LDAP) que corren en espacio de usuario.

El software de sistemas en red gestiona y proporciona infraestructura, opera de forma invisible para el usuario final y suele requerir privilegios elevados porque interactúa con el hardware o gestiona recursos compartidos críticos.

A continuación vamos a detallar los componentes del software de sistemas en red, haciendo una clasificación de los diferentes tipos, continuaremos con sus funciones y para terminar nos centraremos en las diferentes estructuras donde los ubicamos.

## 3. Componentes

**3.1 Sistema operativo de red (NOS).** 

Es el componente fundacional: proporciona la plataforma sobre la que se ejecutan todos los demás elementos. A las funciones clásicas de un SO —gestión de procesos, memoria, sistema de archivos y dispositivos— añade capacidades específicas de red: gestión de protocolos de comunicación, control de acceso remoto, administración centralizada de usuarios, directivas de grupo y servicios de autenticación integrados.

*Windows Server* (2019, 2022\) integra Active Directory, DNS, DHCP, IIS y Hyper-V como roles del sistema. Las distribuciones *Linux* de uso empresarial (Red Hat Enterprise Linux, Debian, Ubuntu Server) implementan el stack TCP/IP en el kernel y ofrecen los mismos servicios mediante demonios del sistema (BIND para DNS, isc-dhcp-server, OpenLDAP). Los sistemas *Unix* (Solaris, AIX) mantienen presencia en entornos de misión crítica por su robustez y madurez.

3.2 **Controladores (drivers) y firmware de dispositivos de red.** 

Son el componente más cercano al hardware: el puente entre el mundo físico (señales eléctricas, ópticas o radiofrecuencias) y el mundo lógico del software.

El **driver de tarjeta de red** (NIC driver) es un módulo del kernel que implementa la capa de enlace: gestiona la transmisión y recepción de tramas Ethernet o Wi-Fi, controla los búferes DMA, gestiona las interrupciones hardware y expone al kernel una interfaz estándar. Un fallo en el driver se manifiesta como pérdida de paquetes, errores CRC o incapacidad para establecer enlace.

El **firmware** de los dispositivos de red (conmutadores, routers, puntos de acceso) es el software embebido en el propio dispositivo que implementa su lógica de funcionamiento: tablas MAC, enrutamiento, QoS, spanning tree. Su actualización es crítica para la seguridad, ya que las vulnerabilidades en el firmware pueden comprometer toda la red. Ejemplos: firmware de switches Cisco IOS, Mikrotik, o firmware open source como OpenWrt para routers domésticos.

**3.3 Protocolos de comunicación.** 

Son el lenguaje común que permite la interoperabilidad entre sistemas de distintos fabricantes. Se organizan en dos marcos de referencia:

El **modelo OSI** (ISO/IEC 7498\) define siete capas con responsabilidades bien delimitadas: física (bits), enlace (tramas, MAC), red (paquetes, IP), transporte (segmentos, TCP/UDP), sesión, presentación y aplicación. Es el marco conceptual de referencia para el análisis y la documentación.

El **modelo TCP/IP** consolida esas siete capas en cuatro (acceso a red, internet, transporte, aplicación) y es el modelo que rige el funcionamiento real de Internet y de la práctica totalidad de las redes actuales. Su implementación en el kernel del SO es el núcleo técnico del software de sistemas en red.

En la capa de aplicación destacan: *HTTP/HTTPS* (web), *FTP/SFTP* (transferencia de archivos), *SMTP/IMAP/POP3* (correo), *DNS* (resolución de nombres), *DHCP* (configuración dinámica), *SSH* (administración remota segura) y *SNMP* (gestión de red). Cada protocolo está normalizado mediante RFCs del IETF, que son sus fuentes primarias.

**3.4 Servicios de red**

Los servicios de red son aplicaciones o funciones instaladas en servidores que permiten a los equipos compartir recursos (archivos, impresoras, internet), comunicarse y gestionar redes. Operan bajo un modelo cliente-servidor, facilitando tareas como el correo electrónico, la navegación web (HTTP/HTTPS), el almacenamiento y la transferencia de archivos (FTP).   
Los servicios de red más comunes incluyen:

* **DNS (Domain Name System):** Traduce nombres de dominio en direcciones IP, esencial para la navegación en Internet.  
* **DHCP (Dynamic Host Configuration Protocol):** Asigna direcciones IP automáticamente a los dispositivos conectados.  
* **Correo electrónico (SMTP, IMAP, POP3):**  
   Gestiona el envío y recepción de correos.  
* **Servicios de Archivos y Recursos (SMB/CIFS, NFS):** Permiten el almacenamiento y el acceso compartido a carpetas o impresoras.  
* **Servicios de Directorio (ej. Active Directory):** Gestionan usuarios, permisos y recursos en una red corporativa.  
* **Servicios de Conexión Remota (VPN, RDP):** Permiten el acceso seguro a una red interna desde ubicaciones externas.  
* **Servicios Web y FTP:** Servidores web (como Apache o Nginx) para sitios y FTP para la transferencia de archivos. 

Estos servicios se basan en sistemas operativos de red y son fundamentales para el funcionamiento tanto de redes locales (LAN) como de la infraestructura de Internet. 

**3.5 Software de gestión y monitorización de red.** 

Proporciona visibilidad sobre el estado de la red y automatiza la administración. Sin él, gestionar una red de tamaño medio a grande es inviable.

El protocolo *SNMP (Simple Network Management Protocol)*, permite consultar y configurar dispositivos de red de forma remota mediante un modelo agente-gestor. Los agentes SNMP corren en cada dispositivo y exponen variables organizadas en una MIB (Management Information Base). SNMPv3 añade autenticación y cifrado, subsanando las graves debilidades de seguridad de las versiones anteriores.

Las plataformas de monitorización como *Nagios, Zabbix o Prometheus* recopilan métricas (latencia, ancho de banda, uso de CPU y memoria, estado de interfaces) y generan alertas cuando se superan los umbrales. El sistema *syslog* centraliza los registros de eventos de múltiples dispositivos en un servidor de logs, base de cualquier proceso de auditoría o respuesta a incidentes.

Otras herramientas de administración son:

* Diagnóstico: ss, ping, ip, traceroute…  
* Descubrimiento de redes:nmap  
* Cortafuegos: IPtables, UFW  
* Análisis de tráfico de red: Wireshark, tcpdump.  
* Detección de intrusiones: Snort, suricata.

**3.6 Aplicaciones cliente de red**

Las aplicaciones cliente de red son software que se ejecuta en dispositivos finales (PC, móviles) para enviar peticiones y acceder a servicios (web, correo, archivos) alojados en servidores. Funcionan bajo una arquitectura cliente-servidor, siendo los navegadores web (Chrome, Firefox) y clientes de correo los ejemplos más comunes.   
**Principales Aplicaciones y Ejemplos:**

* **Navegadores Web (Clientes HTTP/HTTPS):** Google Chrome, Mozilla Firefox,   
* **Clientes de Correo Electrónico:** Microsoft Outlook, Mozilla Thunderbird,   
* **Transferencia de Archivos (Clientes FTP/SFTP):** FileZilla.  
* **Aplicaciones de Comunicación y Colaboración:** Slack, Discord, Microsoft Teams.  
* **Acceso Remoto:** Clientes SSH, PuTTY, TeamViewer, VNC, MS RDP  
* **Clientes de bases de datos**

**Características:**

* **Interfaz de Usuario:** Proporcionan la interfaz gráfica (Frontend) para interactuar con el usuario.  
* **Iniciación de Peticiones:** El cliente siempre inicia la comunicación enviando mensajes al servidor.  
* **Funcionalidad en Capa de Aplicación:** Operan en la parte superior del modelo de red, interactuando con APIs para procesar información.  
* **Independencia de la Red:** La ubicación de los datos es transparente para el usuario. 

## 4. Funciones

Un sistema operativo en red presta varios servicios esenciales para facilitar la
comunicación y el uso compartido de recursos entre diferentes dispositivos en
una red. Los servicios más habituales incluyen (Núñez, 2019):

- **Gestión de archivos compartidos:** Permite que múltiples usuarios
accedan, lean y escriban archivos en un servidor desde sus
computadoras o dispositivos. Servicios como NFS (Network File System)
o SMB/CIFS permiten compartir archivos entre distintos sistemas.

- **Gestión de impresoras y recursos compartidos:** Facilita el acceso a
impresoras y otros dispositivos periféricos en red, para que varios
usuarios puedan utilizarlos sin estar directamente conectados.

- **Autenticación y control de acceso:** Servicios como LDAP (Lightweight
Directory Access Protocol) o Active Directory (AD) permiten gestionar
usuarios, contraseñas y permisos en la red, garantizando que solo los
usuarios autorizados puedan acceder a ciertos recursos.

- **Servicios de comunicación:** Un sistema operativo en red puede incluir
servicios como correo electrónico, mensajería instantánea o telefonía IP
(VoIP), facilitando la comunicación entre usuarios.

- **Servicio DHCP (Dynamic Host Configuration Protocol):** Asigna
automáticamente direcciones IP a los dispositivos conectados a la red,
simplificando la administración de la misma.

- **Servicio DNS (Domain Name System):** Traduce nombres de dominio a
direcciones IP, facilitando la navegación y la resolución de nombres en
una red (Stallings, 2017).

- **Servidor web:** Permite que el servidor aloje sitios web o aplicaciones
accesibles a través de internet o de una red interna (intranet).

- **Servidores de bases de datos:** Sistemas operativos en red también
gestionan servicios de bases de datos, permitiendo el acceso y la
manipulación de datos desde múltiples clientes de forma simultánea.

## 5. Estructura

**5.1. Arquitectura cliente-servidor**

Es el paradigma dominante en las redes corporativas y en Internet. La idea central es la **especialización de roles**: el servidor concentra recursos, procesamiento y lógica; el cliente proporciona la interfaz al usuario y realiza peticiones.

**Modelo de dos capas (cliente-servidor clásico).** El cliente se comunica directamente con el servidor. Es simple y eficiente para entornos pequeños, pero presenta problemas de escalabilidad: si hay miles de clientes, el servidor se convierte en cuello de botella. Ejemplos típicos: un cliente FTP frente a un servidor FTP, o una aplicación de escritorio conectada a un SGBD.

**Modelo de tres capas.** Separa la presentación (interfaz de usuario), la lógica de negocio (servidor de aplicaciones) y los datos (servidor de base de datos). Esta separación permite escalar cada capa de forma independiente, actualizar la lógica sin tocar la interfaz y distribuir la carga. Es el modelo de referencia en aplicaciones web empresariales: navegador → servidor web (Apache, Nginx) → servidor de base de datos (MySQL, PostgreSQL).

**Servidores dedicados frente a servidores de propósito general.** Un servidor dedicado ejecuta exclusivamente un servicio (servidor DNS, servidor de correo), lo que maximiza el rendimiento y simplifica la administración. Los servidores de propósito general pueden alojar múltiples servicios, optimizando el uso del hardware a costa de mayor complejidad en la gestión de recursos y seguridad.

El software de sistemas en red implementa esta arquitectura proporcionando los servicios de red, el sistema operativo de red (NOS), los protocolos de comunicación y los mecanismos de gestión de conexiones simultáneas 

**2. Arquitectura peer-to-peer (P2P)**

En la arquitectura P2P cada nodo (par) actúa simultáneamente como cliente y como servidor. No existe un punto central de control, lo que elimina el cuello de botella del modelo cliente-servidor y aporta robustez ante fallos: si un nodo cae, el sistema continúa funcionando.

Se distinguen tres variantes. En el **P2P puro** (Gnutella) no hay ningún servidor central; los mensajes de búsqueda se propagan por inundación entre nodos, lo que genera tráfico elevado. En el **P2P híbrido** (BitTorrent) existe un servidor de seguimiento (tracker) que facilita el descubrimiento inicial de peers, pero la transferencia de datos es directamente entre nodos. En el **P2P estructurado** se utiliza una tabla hash distribuida (DHT, como en el protocolo Chord) para localizar recursos de forma eficiente sin servidor central y sin inundación.

El software de sistemas en entornos P2P gestiona el descubrimiento de pares, el encaminamiento de peticiones, la replicación de contenido y los mecanismos de incentivo para evitar el problema de nodos que consumen sin aportar. La comparativa con cliente-servidor es un punto habitual en los tribunales: el P2P escala mejor horizontalmente y es más tolerante a fallos, pero es más difícil de administrar, de securizar y de garantizar la calidad de servicio.

**5.3. Arquitectura orientada a servicios y microservicios**

Ambas arquitecturas responden al mismo principio: descomponer el software en unidades funcionales independientes con interfaces bien definidas, de forma que puedan desarrollarse, desplegarse y escalarse de forma autónoma.

**SOA** organiza el software en servicios que se comunican a través de un bus de servicios empresarial 

**Microservicios**, requiere herramientas de orquestación como Kubernetes.

Desde el punto de vista del software de sistemas en red, tanto SOA como microservicios implican una infraestructura de red sofisticada: balanceo de carga, service mesh , descubrimiento de servicios, etc


**5.4. Infraestructura en la nube e híbrida**

La estructura del software de sistemas en red ya no puede entenderse sin el paradigma cloud. Los modelos de servicio determinan qué parte del software gestiona el proveedor y cuál el usuario:

En **IaaS** (Infrastructure as a Service) el proveedor ofrece máquinas virtuales, almacenamiento y red. El usuario instala y gestiona el sistema operativo, el middleware y las aplicaciones. Ejemplos: Amazon EC2, Microsoft Azure Virtual Machines, Google Compute Engine.

En **PaaS** (Platform as a Service) el proveedor gestiona también el sistema operativo y el middleware. El usuario solo despliega su aplicación. El software de sistemas en red subyacente es completamente transparente. Ejemplos: Heroku, Google App Engine, Azure App Service.

En **SaaS** (Software as a Service) todo el stack es gestionado por el proveedor, incluyendo la propia aplicación. El usuario la consume a través de un navegador. Ejemplos: Microsoft 365, Google Workspace, etc.

Los **contenedores** (Docker) y su orquestación (Kubernetes) han transformado la forma en que se despliega el software de sistemas en red. Un contenedor empaqueta el software y todas sus dependencias en una unidad portable y reproducible, con un tamaño mínimo respecto a las máquinas virtuales tradicionales. 

Kubernetes automatiza el despliegue, el escalado y la gestión de la salud de los contenedores en clústeres de nodos, proporcionando funciones de software de sistemas (balanceo de carga, descubrimiento de servicios, gestión de almacenamiento) de forma nativa. En la infraestructura híbrida, el mismo software puede ejecutarse parcialmente en servidores propios y parcialmente en la nube pública, con el software de sistemas gestionando la coherencia y la seguridad entre ambos entornos.

## 6. Conclusión

## 7. Bibliografía

