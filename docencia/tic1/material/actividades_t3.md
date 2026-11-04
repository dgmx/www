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
