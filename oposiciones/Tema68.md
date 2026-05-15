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
   - 4.1.Gestión de recursos compartidos  
   - 4.2.Gestión de usuarios, permisos y autenticación  
   - 4.3.Administración y configuración de la red  
   - 4.4.Enrutamiento y conmutación de paquetes  
   - 4.5.Seguridad y monitorización

5. Estructura del software de sistemas en red  
   - 5.1.Arquitectura cliente-servidor  
   - 5.2.Arquitectura peer-to-peer (P2P)  
   - 5.3.Arquitectura orientada a servicios y microservicios  
   - 5.4.Estructura en capas del software de red  
   - 5.5.Infraestructura en la nube e híbrida

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

**E**l software de sistemas en red es el conjunto de programas, protocolos y servicios que gestionan los recursos de un sistema informático distribuido, permitiendo la comunicación, la compartición de recursos y la administración centralizada entre múltiples nodos interconectados.

**R**eside en la frontera entre el hardware de red y las aplicaciones de usuario. Actúa como intermediario que abstrae la complejidad física de la red y ofrece interfaces de programación estables (sockets, llamadas al sistema) a las capas superiores. Se extiende desde los drivers de dispositivo en el kernel hasta los demonios de sistema (DNS, DHCP, LDAP) que corren en espacio de usuario.

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

### **4.1. Gestión de recursos compartidos**

Es la función primordial y razón de ser histórica de las redes. El software de sistemas permite que múltiples usuarios accedan de forma simultánea y controlada a recursos físicos y lógicos que de otro modo serían exclusivos de un solo equipo.

En cuanto a la compartición de sistemas de archivos, los protocolos más relevantes son NFS (Network File System), estándar en entornos Unix/Linux, y SMB/CIFS (Server Message Block / Common Internet File System), utilizado por Windows. Ambos permiten montar unidades remotas como si fueran locales, abstrayendo la red de cara al usuario. El software gestiona la concurrencia de accesos, la coherencia de caché y los bloqueos de archivo.

Respecto a los periféricos, el software implementa colas de impresión (spooling) que secuencian los trabajos, evitan conflictos y notifican el estado al usuario. Esta lógica aplica también a escáneres, plotters y almacenamiento en red (NAS/SAN).

### **4.2. Gestión de usuarios, permisos y autenticación**

El software de sistemas es el guardián del acceso a la red. Distingue quién puede entrar, a qué puede acceder y qué operaciones puede realizar.

La autenticación verifica la identidad del usuario. Los mecanismos van desde contraseñas simples hasta Kerberos (protocolo de autenticación por tickets, base de Active Directory), certificados digitales X.509 y autenticación multifactor (MFA). El SSO (Single Sign-On) permite que una única autenticación dé acceso a todos los servicios de la organización.

La autorización se implementa a través de modelos de control de acceso: el DAC (Discretionary Access Control) deja que el propietario del recurso otorgue permisos; el MAC (Mandatory Access Control) los impone el sistema según etiquetas de seguridad; y el RBAC (Role-Based Access Control) asigna permisos por roles, el modelo dominante en entornos empresariales. Las listas de control de acceso (ACL) son el mecanismo técnico concreto con el que se materializan estos modelos en el sistema de archivos y los recursos de red.

### **4.3. Administración y configuración de la red**

El software automatiza tareas que manualmente serían inviables a escala. Dos servicios son centrales:

El DHCP (Dynamic Host Configuration Protocol) asigna dinámicamente parámetros de red a cada dispositivo que se conecta: dirección IP, máscara de subred, puerta de enlace predeterminada y servidores DNS. Evita conflictos de direccionamiento y facilita la administración centralizada. Opera con un mecanismo de arrendamiento temporal que libera IPs no utilizadas.

El DNS (Domain Name System) resuelve nombres de dominio a direcciones IP. Sin él, los usuarios deberían memorizar IPs numéricas. El proceso de resolución sigue una jerarquía: servidor local → servidor raíz → servidor TLD → servidor autoritativo. El software de sistemas puede alojar servidores DNS primarios, secundarios (redundancia) y de caché.

### **4.4. Enrutamiento y conmutación de paquetes**

El software de sistemas determina el camino óptimo que deben seguir los paquetes desde el origen al destino. Los protocolos de enrutamiento dinámico (RIP, OSPF, BGP) calculan y actualizan las tablas de enrutamiento automáticamente según el estado de la red.

La conmutación opera a nivel de capa 2 (enlace), distribuyendo tramas dentro de una misma red local según las tablas MAC. El software gestiona mecanismos de calidad de servicio (QoS) que priorizan tráfico crítico (voz, vídeo) sobre tráfico de menor importancia.

### **4.5. Seguridad, control de acceso a la red y monitorización**

Esta función ha adquirido una importancia central en los últimos años. El software implementa múltiples capas de defensa:

Los cortafuegos (firewalls) filtran el tráfico según reglas definidas por el administrador. Los modernos son de inspección de estado (stateful), analizando el contexto de cada conexión, no solo paquete a paquete. Los sistemas IDS/IPS (Intrusion Detection/Prevention System) monitorizan el tráfico en busca de patrones anómalos o firmas de ataques conocidos, reaccionando de forma pasiva (IDS, solo alerta) o activa (IPS, bloquea el tráfico). Las VPN (Virtual Private Network) cifran las comunicaciones entre nodos remotos creando un túnel seguro sobre redes públicas, usando protocolos como IPsec y OpenVPN.

El modelo Zero Trust, cada vez más extendido, parte de la premisa de que ninguna entidad, ni interna ni externa, debe ser confiada por defecto: toda solicitud de acceso es verificada explícitamente.

Con respecto a la monitorización, el software recoge continuamente métricas de rendimiento (ancho de banda, latencia, uso de CPU y memoria, número de conexiones activas) y las pone a disposición del administrador. El protocolo SNMP es el estándar para la consulta y configuración remota de dispositivos de red. Los logs del sistema registran eventos relevantes: inicios de sesión, accesos denegados, cambios de configuración y errores. La auditoría permite reconstruir qué ocurrió, cuándo y quién lo realizó.

## 5. Estructura

### **5.1. Arquitectura cliente-servidor**

Es el paradigma dominante en las redes corporativas y en Internet. La idea central es la **especialización de roles**: el servidor concentra recursos, procesamiento y lógica; el cliente proporciona la interfaz al usuario y realiza peticiones.

**Modelo de dos capas (cliente-servidor clásico).** El cliente se comunica directamente con el servidor. Es simple y eficiente para entornos pequeños, pero presenta problemas de escalabilidad: si hay miles de clientes, el servidor se convierte en cuello de botella. Ejemplos típicos: un cliente FTP frente a un servidor FTP, o una aplicación de escritorio conectada a un SGBD.

**Modelo de tres capas.** Separa la presentación (interfaz de usuario), la lógica de negocio (servidor de aplicaciones) y los datos (servidor de base de datos). Esta separación permite escalar cada capa de forma independiente, actualizar la lógica sin tocar la interfaz y distribuir la carga. Es el modelo de referencia en aplicaciones web empresariales: navegador → servidor web (Apache, Nginx) → servidor de base de datos (MySQL, PostgreSQL).

**Servidores dedicados frente a servidores de propósito general.** Un servidor dedicado ejecuta exclusivamente un servicio (servidor DNS, servidor de correo), lo que maximiza el rendimiento y simplifica la administración. Los servidores de propósito general pueden alojar múltiples servicios, optimizando el uso del hardware a costa de mayor complejidad en la gestión de recursos y seguridad.

El software de sistemas en red implementa esta arquitectura proporcionando los servicios de red, el sistema operativo de red (NOS), los protocolos de comunicación y los mecanismos de gestión de conexiones simultáneas 

**2\. Arquitectura peer-to-peer (P2P)**

En la arquitectura P2P cada nodo (par) actúa simultáneamente como cliente y como servidor. No existe un punto central de control, lo que elimina el cuello de botella del modelo cliente-servidor y aporta robustez ante fallos: si un nodo cae, el sistema continúa funcionando.

Se distinguen tres variantes. En el **P2P puro** (Gnutella) no hay ningún servidor central; los mensajes de búsqueda se propagan por inundación entre nodos, lo que genera tráfico elevado. En el **P2P híbrido** (BitTorrent) existe un servidor de seguimiento (tracker) que facilita el descubrimiento inicial de peers, pero la transferencia de datos es directamente entre nodos. En el **P2P estructurado** se utiliza una tabla hash distribuida (DHT, como en el protocolo Chord) para localizar recursos de forma eficiente sin servidor central y sin inundación.

El software de sistemas en entornos P2P gestiona el descubrimiento de pares, el encaminamiento de peticiones, la replicación de contenido y los mecanismos de incentivo para evitar el problema de nodos que consumen sin aportar. La comparativa con cliente-servidor es un punto habitual en los tribunales: el P2P escala mejor horizontalmente y es más tolerante a fallos, pero es más difícil de administrar, de securizar y de garantizar la calidad de servicio.

### **5.3. Arquitectura orientada a servicios y microservicios**

Ambas arquitecturas responden al mismo principio: descomponer el software en unidades funcionales independientes con interfaces bien definidas, de forma que puedan desarrollarse, desplegarse y escalarse de forma autónoma.

**SOA** organiza el software en servicios que se comunican a través de un bus de servicios empresarial 

**Microservicios**, requiere herramientas de orquestación como Kubernetes.

Desde el punto de vista del software de sistemas en red, tanto SOA como microservicios implican una infraestructura de red sofisticada: balanceo de carga, service mesh , descubrimiento de servicios, etc

**5.4. Estructura en capas del software de red**

La organización en capas es el principio arquitectónico fundamental del software de sistemas en red. Permite que cada capa se ocupe de un problema bien delimitado, que los cambios en una capa no afecten a las demás y que diferentes implementaciones puedan interoperar si respetan las interfaces.

El **modelo OSI** define siete capas. Las tres inferiores (física, enlace de datos, red) se ocupan del transporte de bits, tramas y paquetes entre nodos. La capa de transporte (TCP, UDP) garantiza la entrega extremo a extremo. Las tres superiores (sesión, presentación, aplicación) gestionan el diálogo entre procesos, el formato de los datos y los servicios de usuario. Este modelo es de referencia conceptual; en la práctica, el software de sistemas se implementa según TCP/IP.

El **modelo TCP/IP** consolida las siete capas OSI en cuatro: acceso a la red (equivale a físico \+ enlace), internet (IP, ICMP, ARP), transporte (TCP, UDP) y aplicación (HTTP, FTP, SMTP, DNS…). El software de sistemas en red implementa principalmente las capas de internet y transporte en el núcleo del sistema operativo (el stack de red del kernel), mientras que los protocolos de aplicación se implementan en espacio de usuario. 

**5.5. Infraestructura en la nube e híbrida**

La estructura del software de sistemas en red ya no puede entenderse sin el paradigma cloud. Los modelos de servicio determinan qué parte del software gestiona el proveedor y cuál el usuario:

En **IaaS** (Infrastructure as a Service) el proveedor ofrece máquinas virtuales, almacenamiento y red. El usuario instala y gestiona el sistema operativo, el middleware y las aplicaciones. Ejemplos: Amazon EC2, Microsoft Azure Virtual Machines, Google Compute Engine.

En **PaaS** (Platform as a Service) el proveedor gestiona también el sistema operativo y el middleware. El usuario solo despliega su aplicación. El software de sistemas en red subyacente es completamente transparente. Ejemplos: Heroku, Google App Engine, Azure App Service.

En **SaaS** (Software as a Service) todo el stack es gestionado por el proveedor, incluyendo la propia aplicación. El usuario la consume a través de un navegador. Ejemplos: Microsoft 365, Google Workspace, etc.

Los **contenedores** (Docker) y su orquestación (Kubernetes) han transformado la forma en que se despliega el software de sistemas en red. Un contenedor empaqueta el software y todas sus dependencias en una unidad portable y reproducible, con un tamaño mínimo respecto a las máquinas virtuales tradicionales. 

Kubernetes automatiza el despliegue, el escalado y la gestión de la salud de los contenedores en clústeres de nodos, proporcionando funciones de software de sistemas (balanceo de carga, descubrimiento de servicios, gestión de almacenamiento) de forma nativa. En la infraestructura híbrida, el mismo software puede ejecutarse parcialmente en servidores propios y parcialmente en la nube pública, con el software de sistemas gestionando la coherencia y la seguridad entre ambos entornos.

## 6. Conclusión

## 7. Bibliografía

