# Tema 63: Funciones y servicios del nivel físico

## ÍNDICE 
```bash
1. Introducción
2. Funciones y servicios del nivel físico
3. Tipos y medios de transmisión
    3.1. Tipos de transmisión
    3.2. Medios de transmisión
4. Adaptación al medio de transmisión
    4.1. Modulación
    4.2. Codificación
    4.3. Multiplexación
5. Limitaciones a la transmisión
6. Estándares
7. Conclusión
8. Bibliografía
```

---

## 1. Introducción
- Temario oficial BOE 13 febrero 1996 (Informática)
- Bloque temático de redes
- Autores de referencia: Stallings, Tanenbaum, Prieto
- Ciclos formativos
  - CFGM Sistemas Microinformáticos y Redes
    - Módulo: Redes locales
  - CFGS Administración de Sistemas Informáticos en Red
    - Módulo: Planificación y administración de redes
## 2. Funciones y servicios del nivel físico
- Transmitir bits puros a través de un canal
- Definir medio físico
  - Cable de pares trenzados
  - Coaxial
  - Guías de onda
  - Aire
  - Fibra óptica
- Definir características materiales y eléctricas
- Definir características funcionales de la interfaz
  - Establecimiento del enlace físico
  - Mantenimiento del enlace físico
  - Liberación del enlace físico
- Transmitir flujo de bits a través del medio
- Manejar señales eléctricas/electromagnéticas
- Especificar cables, conectores y componentes de interfaz
- Garantizar la conexión (no la fiabilidad)
## 3. Tipos y medios de transmisión
### 3.1. Tipos de transmisión
#### 3.1.1. Según la dirección
- Simplex: una sola dirección
- Half duplex: dos sentidos, no simultáneamente
- Full duplex: flujo simultáneo en ambas direcciones
#### 3.1.2. Según el modo
- Serie: señales por una única línea secuencialmente
- Paralelo: varios bits simultáneamente, uno por línea
#### 3.1.3. Según la sincronización
- Síncrona: mismo reloj, velocidad constante, sin separación entre caracteres
- Asíncrona: half duplex, bits de paridad en vez de reloj
#### 3.1.4. Según la naturaleza de la señal
- Analógica: variación continua, todos los valores del rango
- Digital: variación discontinua, número finito de valores
### 3.2. Medios de transmisión
#### 3.2.1. Medios guiados (cableados)
- Cable de par trenzado
  - 4 pares trenzados con material aislante
  - Tipos según blindaje (X/XTP)
    - U/UTP: No apantallado / No apantallado
    - U/FTP: No apantallado / Con lámina
    - F/UTP: Con lámina / No apantallado
    - F/FTP: Con lámina / Con lámina
    - S/UTP: Con malla / Sin apantallado
    - S/FTP: Con malla / Con lámina
    - SF/UTP: Con malla y lámina / No apantallados
  - Categorías
    - Cat 5e: hasta 100 MHz
    - Cat 6: hasta 10 Gbps / 250 MHz
    - Cat 6a: 10 Gbps / 100 metros
    - Cat 7: hasta 600 MHz
    - Cat 8: 25-40 Gbps / hasta 30 m / 2000 MHz
  - Conector: RJ-45
  - Norma TIA/EIA-568-B
    - Terminación T568A
    - Terminación T568B
  - Tipos de cables
    - Cable directo: misma terminación en ambos extremos (dispositivos diferentes)
    - Cable cruzado: diferente terminación en cada extremo (dispositivos del mismo tipo)
- Cable coaxial
  - Alambre de cobre rígido (núcleo)
  - Material aislante
  - Malla de tejido trenzado (conductor cilíndrico)
  - Funda protectora de plástico
  - Obsoleto para redes de ordenadores
- Fibra óptica
  - Núcleo circular de vidrio
  - Cubierta de otro tipo de vidrio
  - Revestimiento opaco
  - Reflexión total interna
  - Dispersión modal
  - Tipos (ISO/IEC 11801)
    - Monomodo
      - Núcleo: 8-10 micrómetros
      - Un solo modo de luz
      - Reducción de dispersión
      - Largo alcance y altas velocidades
      - Aplicaciones: telecomunicaciones, redes de alta velocidad
    - Multimodo
      - Núcleo: 50 o 62,5 micrómetros
      - Varios modos de luz simultáneos
      - Más dispersión
      - Distancias cortas
      - Aplicaciones: LAN, edificios
      - Subtipos: OM1, OM2, OM3, OM4, OM5
  - Conectores: ST, SC, FC, LC
#### 3.2.2. Medios no guiados (inalámbricos)
- Radiofrecuencia (10 KHz - 300 MHz)
  - Poco direccional
  - Atraviesa obstáculos
  - Larga distancia
- Microondas (300 MHz - 300 GHz)
  - Más direccional
  - Sensible a obstáculos
  - Requiere línea de visión directa
- Infrarrojo (300 GHz - 400 THz)
  - Completamente direccional
  - Fuerte absorción atmosférica
  - Distancias cortas sin obstáculos
- Regulación en España: Secretaría de Estado de Telecomunicaciones e Infraestructuras Digitales
## 4. Adaptación al medio de transmisión
### 4.1. Modulación
- Moduladora analógica
  - AM: cambia la amplitud de la portadora
  - FM: altera la frecuencia de la portadora
  - PM: modifica la fase de la portadora
- Moduladora digital (desplazamiento)
  - Amplitud: cada nivel lógico cambia la amplitud
  - Frecuencia: cada nivel lógico cambia la frecuencia
  - Fase: cada nivel lógico cambia la fase
  - Amplitud en cuadratura: combina amplitud, frecuencia y fase (N estados definidos por n bits)
### 4.2. Codificación
- NRZ (No retorno a cero)
  - 1 y 0 con señales positivas y negativas
  - Pierde sincronismo con secuencias largas
- AMI (Bipolar)
  - 0 = 0, 1 alterna positivo/negativo
  - Sincroniza bien unos, falla con muchos ceros
- Manchester
  - Transiciones a mitad de cada bit
  - 1: negativo a positivo
  - 0: positivo a negativo
  - Eficiencia: 0,5
- Manchester diferencial
  - Transición en mitad del bit siempre
  - Transición adicional al principio para el 0
### 4.3. Multiplexación
- Multiplexación en frecuencia: diferentes espectros sin solapamiento
- Multiplexación en longitud de onda: aplicada a transmisiones ópticas
- Multiplexación en tiempo: intervalos de tiempo para señales digitales
## 5. Limitaciones a la transmisión
- Atenuación
  - Pérdida de potencia con la distancia
  - Par trenzado: resistencia y emisiones electromagnéticas
  - Fibra óptica: absorción de luz
- Desfase
  - Velocidad de propagación varía según frecuencia
  - Afecta a alta velocidad y grandes distancias
- Interferencia electromagnética
  - Cables de cobre sensibles a interferencias externas
  - Se mitiga con pantallas protectoras
- Diafonía (crosstalk)
  - Interferencia entre señales de cables paralelos
  - Común en cables de pares
## 6. Estándares
- Organismos
  - ISO (International Organization for Standardization)
  - TIA/EIA (Telecommunications Industry Association/Electronic Industries Association)
  - UIT (International Telecommunication Union)
  - ANSI (American National Standards Institute)
  - IEEE (Institute of Electrical and Electronic Engineers)
  - Autoridades nacionales (FCC, ETSI)
- Normas
  - EIA/TIA-568-B: cableado en edificios comerciales
  - ANSI/TIA-570-E: cableado en edificios residenciales
  - ISO/IEC 11801
  - CENELEC EN-50173

## 7. Conclusión
- El medio de transmisión es la parte más perdurable del diseño de red
- Necesidad de estimación objetiva de necesidades actuales y futuras
- Valoración adecuada de tecnologías (relación coste/prestaciones)
## 8. Bibliografía
- Tanenbaum, A. (2021). Computer Networks. Editorial Pearson
- Stallings, W. (2017). Data and Computer Communications. Ed. Pearson
- Prieto, A. (2006). Introducción a la informática. Editorial McGraw-Hill
- www.itu.int
- https://tiaonline.org/
- www.ieee802.org
- https://www.submarinecablemap.com/# Tema 63 INF: Funciones y servicios del nivel físico
