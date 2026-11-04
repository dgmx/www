# Situación de Aprendizaje. "Monta, instala y optimiza tu aula"

**TIC · 1.º de Bachillerato · Bloque B. Arquitectura de ordenadores y sistemas operativos · 14 sesiones**

> Situación de aprendizaje que integra los temas 3 (Arquitectura de ordenadores) y 4 (Sistemas operativos). El marco curricular completo y los demás temas se recogen en `docencia/tic1/`.

---

## 1. Datos e identificación

- **Título:** Monta, instala y optimiza tu aula
- **Materia:** Tecnologías de la Información y la Comunicación (TIC).
- **Curso:** 1.º de Bachillerato.
- **Bloque:** B. Arquitectura de ordenadores y sistemas operativos.
- **Saberes básicos:** TICO.1.B.1.1 a TICO.1.B.1.6 y TICO.1.B.2.1 a TICO.1.B.2.7.
- **Duración:** 14 sesiones de 55 minutos (aprox. 13 horas).
- **Agrupamiento:** individual, parejas y grupos de 3–4.
- **Espacios:** aula de informática con equipos reales o virtuales, proyector, acceso a Internet.

## 2. Contexto y justificación

El centro educativo va a renovar el aula de informática y necesita criterio técnico para elegir equipos, instalar el sistema operativo y mantenerlos. A partir de este contexto real, el alumnado asume el rol de **técnico/a informático** y debe tomar decisiones justificadas sobre hardware, software, licencias, instalación y optimización.

La situación integra de forma natural los contenidos de arquitectura (CPU, memoria, almacenamiento, periféricos, buses) con los de sistemas operativos (procesos, archivos, usuarios, dispositivos, monitorización, instalación), evitando el estudio aislado de conceptos. Se fomenta el pensamiento crítico, el trabajo en equipo, la toma de decisiones técnicas y la comunicación de resultados.

## 3. Reto / pregunta motriz

> **¿Qué equipo, sistema operativo y configuración elegirías para el aula de informática del centro, y cómo demostrarías que funciona de forma eficiente y segura?**

## 4. Producto final

Cada grupo entrega y defiende:

1. **Informe técnico** (4–6 páginas) con:
   - presupuesto justificado de un equipo para un perfil (ofimática, diseño o gaming);
   - comparativa de sistemas operativos (propietario vs libre) con decisión razonada;
   - plan de particionado, usuarios y permisos;
   - plan de monitorización y copias de seguridad (regla 3-2-1).
2. **Máquina virtual** con un sistema operativo instalado y configurado (usuarios, actualizaciones, firewall, snapshot inicial).
3. **Presentación oral** de 8–10 minutos con demostración práctica.
4. **Rúbrica de autoevaluación y coevaluación** completada.

## 5. Concreción curricular

| Saber básico | Contenido | Sesiones |
|---|---|---|
| TICO.1.B.1.1 | Hardware y software. Sistemas propietarios y libres. | 1, 2 |
| TICO.1.B.1.2 | Arquitectura clásica y ley de Moore. | 3 |
| TICO.1.B.1.3 | CPU, unidad de control, ALU. | 4 |
| TICO.1.B.1.4 | Memoria principal y almacenamiento secundario. | 5 |
| TICO.1.B.1.5 | Periféricos y nueva generación. | 6 |
| TICO.1.B.1.6 | Buses de comunicación. | 6 |
| TICO.1.B.2.1 | Arquitecturas y funciones. Licencias. Interfaces. | 7 |
| TICO.1.B.2.2 | Gestión de procesos. | 8 |
| TICO.1.B.2.3 | Sistema de archivos. | 9 |
| TICO.1.B.2.4 | Gestión de usuarios. | 9 |
| TICO.1.B.2.5 | Gestión de dispositivos. | 10 |
| TICO.1.B.2.6 | Monitorización y rendimiento. | 11 |
| TICO.1.B.2.7 | Instalación y configuración. | 12, 13 |

**Criterios de evaluación asociados:** distinguir hardware/software y licencias; comprender la arquitectura; analizar la CPU; diferenciar memorias y almacenamiento; clasificar periféricos; comprender buses; comprender el SO; gestionar procesos; organizar archivos; administrar usuarios; gestionar dispositivos; monitorizar rendimiento; instalar y configurar.

## 6. Secuenciación didáctica

### Fase inicial (Sesiones 1–2)

**Sesión 1 — "¿Qué es un sistema informático?"**
- Presentación del reto y del producto final.
- Diagnóstico inicial: cuestionario de ideas previas (hardware, software, SO).
- Conceptos de hardware, software, firmware y licencias.
- Debate: propietario vs libre en el aula.
- *Agrupamiento:* gran grupo. *Evaluación:* diagnóstica.

**Sesión 2 — "Arquitectura y ley de Moore"**
- Arquitectura de von Neumann y cuello de botella.
- Ley de Moore: cálculo y límites.
- Actividad: estimar transistores y discutir tendencias.
- *Producto:* esquema anotado de la arquitectura.

### Fase de desarrollo (Sesiones 3–12)

**Sesión 3 — "La CPU por dentro"**
- UC, ALU, registros, caché, ciclo de instrucción.
- Cálculo de instrucciones por segundo.
- Práctica: ordenar memorias por velocidad.

**Sesión 4 — "Memoria y almacenamiento"**
- Jerarquía de memoria, RAM/ROM, HDD/SSD.
- Particiones, sistemas de archivos, clústeres, RAID.
- Actividad: calcular espacio real ocupado por archivos.

**Sesión 5 — "Periféricos y buses"**
- Clasificación de periféricos y nueva generación.
- Buses de datos, direcciones y control; ancho de banda.
- Práctica: calcular ancho de banda de un bus.

**Sesión 6 — "Presupuesto de un equipo"**
- Elaborar presupuesto para tres perfiles.
- Justificar compatibilidad y decisiones.
- *Producto:* tabla comparativa y presupuesto.

**Sesión 7 — "El sistema operativo"**
- Concepto, funciones, arquitecturas internas.
- Licencias e interfaces (CLI/GUI).
- Actividad: comparar Windows, macOS y Linux.

**Sesión 8 — "Procesos y rendimiento"**
- Estados de un proceso, planificación, hilos.
- Interbloqueos y sincronización (nivel básico).
- Práctica: observar procesos con el gestor de tareas / `htop`.

**Sesión 9 — "Archivos, usuarios y permisos"**
- Sistemas de archivos, permisos en Windows y Linux.
- Gestión de usuarios y grupos.
- Práctica: crear usuarios y asignar permisos en una carpeta compartida.

**Sesión 10 — "Dispositivos y monitorización"**
- Drivers, Plug and Play, mecanismos de E/S.
- Métricas de rendimiento y herramientas.
- Práctica: detectar un cuello de botella en un equipo.

**Sesión 11 — "Optimización"**
- Limpieza, arranque, servicios, TRIM, desfragmentación.
- Copias de seguridad y regla 3-2-1.
- Diseño de un plan de copias para el aula.

**Sesión 12 — "Instalación en máquina virtual"**
- Requisitos, medio de instalación, particionado.
- Instalación guiada de un SO libre.
- Configuración inicial: usuarios, actualizaciones, firewall, snapshot.
- *Producto:* VM funcional.

### Fase final (Sesiones 13–14)

**Sesión 13 — "Elaboración del informe"**
- Redacción del informe técnico en grupo.
- Revisión por pares (coevaluación).
- Preparación de la presentación.

**Sesión 14 — "Defensa y cierre"**
- Presentaciones orales con demostración.
- Autoevaluación y coevaluación.
- Reflexión final: sostenibilidad y soberanía tecnológica.
- *Evaluación:* sumativa.

## 7. Metodología

- **ABP:** el reto guía todo el proceso.
- **Aprendizaje cooperativo:** grupos con roles rotatorios (coordinador, técnico, documentador, portavoz).
- **Aula invertida:** vídeos cortos sobre instalación y licencias para casa.
- **Gamificación:** Kahoot de repaso y "escape room" del disco corrupto.
- **Práctica en laboratorio:** uso de máquinas virtuales y herramientas de diagnóstico.

## 8. Evaluación

### Instrumentos

- Cuestionario diagnóstico (sesión 1).
- Rúbrica del informe técnico.
- Rúbrica de la presentación oral.
- Lista de cotejo de la máquina virtual.
- Autoevaluación y coevaluación.
- Registro de observación del trabajo en equipo.

### Rúbrica simplificada (0–10)

| Criterio | Excelente (9–10) | Notable (7–8) | Aprobado (5–6) | Insuficiente (0–4) |
|---|---|---|---|---|
| Comprensión técnica | Domina y relaciona conceptos de arquitectura y SO. | Comprende con pequeños errores. | Conoce lo básico. | Confunde conceptos clave. |
| Toma de decisiones | Justifica hardware, SO, particionado y seguridad. | Decisiones razonables con lagunas. | Decisiones simples. | Sin justificación. |
| Instalación y configuración | VM funcional, segura y documentada. | Funcional con pequeños fallos. | Funciona parcialmente. | No funciona. |
| Trabajo en equipo | Colaboración efectiva y roles claros. | Buena colaboración. | Colaboración irregular. | Escasa colaboración. |
| Comunicación | Presentación clara, técnica y bien estructurada. | Clara con pequeñas mejoras. | Comprensible. | Desorganizada. |

## 9. DUA (Diseño Universal para el Aprendizaje)

- **Representación:** esquemas, tablas, vídeos, simuladores y glosario.
- **Acción y expresión:** informe escrito, presentación oral, práctica en VM, opción de entrega alternativa.
- **Implicación:** elección de perfil de equipo, roles de grupo, gamificación y contexto real del centro.

## 10. Recursos

- Aula de informática con equipos o máquinas virtuales (VirtualBox/VMware).
- ISO de un sistema operativo libre (Ubuntu, Linux Mint) y/o Windows.
- Herramientas de diagnóstico: CPU-Z, HWiNFO, CrystalDiskInfo, `htop`, Monitor de recursos.
- Documentación oficial de fabricantes y distribuciones.
- Rúbricas y listas de cotejo.

## 11. Productos y evidencias

- Esquemas de arquitectura.
- Presupuesto y tabla comparativa.
- Informe técnico.
- Máquina virtual configurada.
- Presentación oral.
- Autoevaluación y coevaluación.

---

**Nota final:** esta situación convierte la teoría en práctica: el alumnado no solo estudia cómo funciona un ordenador, sino que toma decisiones reales y demuestra que sabe instalar, configurar y mantener un sistema.
