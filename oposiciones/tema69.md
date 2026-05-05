# Tema 69. Integración de sistemas. Medios de interconexión. Estándares. Protocolos de acceso a redes de área extensa

## Índice
1. Introducción
2. Integración de sistemas
   
   2.1 Concepto

   2.2 Tipos de integración

   2.3 Tecnologías actuales

   2.4 Tecnologías en desuso o legado

3. Medios de interconexión

   3.1 Clasificación
   
   3.2 Dispositivos de interconexión
4. Estándares en redes

   4.1 Importancia
   
   4.2 Organismos de estandarización
   
   4.3 Principales estándares
5. Redes de área extensa (WAN)
   
   5.1 Concepto
   
   5.2 Características
   
   5.3 Tecnologías WAN
6. Protocolos de acceso a redes de área extensa

   6.1 Protocolos clásicos

   6.2 Protocolos modernos
   
   6.3 Protocolos de acceso remoto
7. Tendencias actuales
8. Conclusión
9. Bibliografía orientativa


## 1. Introducción
La integración de sistemas constituye un pilar fundamental en los entornos informáticos modernos, permitiendo la interoperabilidad entre plataformas heterogéneas, aplicaciones y redes. En el contexto de redes, esta integración se materializa mediante el uso de medios de interconexión, estándares y protocolos que garantizan la comunicación eficiente, segura y escalable, especialmente en redes de área extensa (WAN).

El desarrollo histórico de estos elementos ha estado marcado por la evolución tecnológica, desde soluciones propietarias y circuitos dedicados hasta arquitecturas abiertas basadas en Internet.

---

## 2. Integración de sistemas

### 2.1 Concepto
La integración de sistemas consiste en el proceso de conectar distintos subsistemas físicos o lógicos para que funcionen como un todo coherente. Incluye hardware, software, redes y datos.

### 2.2 Tipos de integración
- **Integración horizontal**: conexión entre sistemas similares.
- **Integración vertical**: conexión entre distintos niveles de una organización.
- **Integración mediante middleware**: uso de software intermedio.
- **Integración basada en servicios (SOA / microservicios)**: arquitectura moderna basada en APIs.

### 2.3 Tecnologías actuales
- APIs REST y GraphQL
- Contenedores (Docker) y orquestación (Kubernetes)
- Mensajería (Kafka, RabbitMQ)

### 2.4 Tecnologías en desuso o legado
- CORBA (en desuso)
- DCOM (en desuso)
- Integración basada en EDI clásico (uso reducido)

---

## 3. Medios de interconexión

### 3.1 Clasificación

#### 3.1.1 Medios guiados
- Par trenzado (actual)
- Cable coaxial (en desuso en LAN modernas)
- Fibra óptica (muy actual y en expansión)

#### 3.1.2 Medios no guiados
- Radiofrecuencia (WiFi, LTE, 5G)
- Microondas
- Satélite (actual en entornos remotos)

### 3.2 Dispositivos de interconexión

#### 3.2.1 Nivel físico y enlace
- Repetidores (en desuso)
- Hubs (obsoletos)
- Switches (actuales)

#### 3.2.2 Nivel de red
- Routers (esenciales en WAN)

#### 3.2.3 Nivel superior
- Gateways
- Firewalls
- Balanceadores de carga

---

## 4. Estándares en redes

### 4.1 Importancia
Los estándares garantizan la interoperabilidad entre dispositivos de distintos fabricantes.

### 4.2 Organismos de estandarización
- ISO (modelo OSI)
- IEEE (familia 802)
- IETF (protocolos de Internet)
- ITU-T (telecomunicaciones)

### 4.3 Principales estándares

#### 4.3.1 Modelo OSI
Define 7 capas: física, enlace, red, transporte, sesión, presentación y aplicación.

#### 4.3.2 IEEE 802
- 802.3 (Ethernet) – actual
- 802.11 (WiFi) – actual

#### 4.3.3 TCP/IP
Modelo de referencia práctico de Internet.

---

## 5. Redes de área extensa (WAN)

### 5.1 Concepto
Una WAN permite la interconexión de redes a gran escala geográfica.

### 5.2 Características
- Alta latencia respecto a LAN
- Uso de infraestructuras públicas
- Dependencia de operadores

### 5.3 Tecnologías WAN

#### 5.3.1 Tecnologías actuales
- MPLS
- VPN (IPsec, SSL)
- SD-WAN
- 5G

#### 5.3.2 Tecnologías en desuso
- Frame Relay (obsoleto)
- ATM (uso residual)
- X.25 (obsoleto)

---

## 6. Protocolos de acceso a redes de área extensa

### 6.1 Protocolos clásicos
- PPP (aún en uso en ciertos entornos)
- HDLC (uso limitado)

### 6.2 Protocolos modernos
- IP (protocolo base)
- TCP/UDP
- BGP (enrutamiento entre sistemas autónomos)
- OSPF (uso interno)

### 6.3 Protocolos de acceso remoto
- PPPoE
- L2TP
- IPsec
- SSL/TLS

---

## 7. Tendencias actuales

- Virtualización de redes (NFV)
- Redes definidas por software (SDN)
- Edge Computing
- Seguridad Zero Trust

---

## 8. Conclusión

La integración de sistemas y redes WAN ha evolucionado hacia modelos abiertos, virtualizados y definidos por software. Aunque muchas tecnologías tradicionales han quedado obsoletas, su comprensión sigue siendo clave para entender los sistemas actuales.

---

## 9. Bibliografía orientativa

- Tanenbaum, A. - Redes de Computadores
- Kurose & Ross - Computer Networking
- RFCs del IETF
- Documentación IEEE

