# Tema 15: Sistemas Operativos. Componentes. Estructura. Funciones. Tipos

## Índice

1. [Introducción](#1-introducción)
2. [Sistemas Operativos](#2-sistemas-operativos)
3. [Componentes de un Sistema Operativo](#3-componentes-de-un-sistema-operativo)
4. [Estructura de un Sistema Operativo](#4-estructura-de-un-sistema-operativo)
5. [Funciones de un Sistema Operativo](#5-funciones-de-un-sistema-operativo)
6. [Tipos de Sistemas Operativos](#6-tipos-de-sistemas-operativos)
7. [Conclusión](#7-conclusión)
8. [Bibliografía](#8-bibliografía)

## 1. Introducción

### Evolución Histórica

Los sistemas operativos han recorrido un largo camino desde sus orígenes en la década de 1950. Los primeros computadores no tenían SO; los programas se cargaban directamente mediante interruptores o tarjetas perforadas. La aparición de los **sistemas por lotes** (batch) automatizó la transición entre trabajos, eliminando los tiempos muertos del operador humano.

En los años 60 surgieron los **sistemas de tiempo compartido** (como CTSS y Multics), que permitieron la interactividad y el acceso multiusuario por primera vez. Unix, desarrollado en Bell Labs en 1969, estableció los principios de diseño que dominan hasta hoy: filosofía de herramientas pequeñas, texto plano como interfaz universal, y jerarquía de archivos.

Los años 80 trajeron los SO personales: **MS-DOS** dominó el mercado del PC, mientras que **Mac OS** popularizó la interfaz gráfica. La década de 1990 fue revolucionaria con la aparición de **Linux** (1991), desarrollado por Linus Torvalds, que democratizó el acceso a un SO tipo Unix de código abierto. Simultáneamente, **Windows NT** sentó las bases de los sistemas Windows modernos.

El siglo XXI ha estado marcado por la diversificación: **Android** e **iOS** dominaron la revolución móvil, mientras la virtualización y los contenedores transformaron la infraestructura de servidores.

### Importancia en los Dispositivos Actuales

Hoy no existe un dispositivo electrónico sin un sistema operativo, desde los más evidentes hasta los más invisibles:

- **Computadores personales y portátiles**: Windows, macOS, Linux.
- **Dispositivos móviles**: Android (basado en Linux) con más del 70% del mercado global, iOS.
- **Dispositivos empotrados e IoT**: Smart TVs, routers, electrodomésticos, vehículos. Un coche moderno ejecuta decenas de SO embebidos.
- **Wearables y dispositivos médicos**: relojes inteligentes, marcapasos, monitores.

El SO es el **cimiento de toda la computación moderna**: sin él, el hardware sería inútil. Gestiona la seguridad, la conectividad, la eficiencia energética y la experiencia del usuario en cada dispositivo.

### Linux y su Dominio en Servidores

Linux es, sin duda, el sistema operativo más importante de la infraestructura tecnológica mundial:

- **Servidores web**: más del 96% de los servidores web del mundo ejecutan Linux.
- **Supercomputadoras**: el 100% de las 500 supercomputadoras más potentes del mundo (TOP500) usan Linux.
- **Nube**: AWS, Google Cloud, Azure y todas las grandes plataformas cloud se ejecutan sobre Linux.
- **Entornos corporativos**: la mayoría de la infraestructura backend de empresas como Google, Facebook, Amazon y Netflix funciona con Linux.

Las razones de este dominio son claras: **estabilidad**, **seguridad**, **rendimiento**, **gratuidad**, **flexibilidad** y un **ecosistema de código abierto** que permite personalizar cada aspecto del sistema.

### Virtualización y Contenedores

La evolución reciente más transformadora en la gestión de sistemas operativos ha sido la **virtualización** y la **contenedorización**:

- **Virtualización**

    Permite ejecutar múltiples sistemas operativos completos sobre un único hardware físico mediante un **hipervisor**. Cada máquina virtual tiene su propio kernel aislado.

    - **Tecnologías**: VMware, KVM, Hyper-V, VirtualBox.
    - **Ventajas**: aislamiento total, ejecución de diferentes SO, snapshots.
    - **Inconvenientes**: overhead significativo (cada VM ejecuta un SO completo).

- **Contenedores**

    Los contenedores representan una evolución más ligera. En lugar de virtualizar el hardware completo, **comparten el kernel del SO host** y aíslan los procesos y recursos a nivel de sistema operativo.

    - **Tecnologías**: Docker (estándar de facto), Kubernetes (orquestación), Podman, LXC.
    - **Ventajas**: arranque en segundos, consumo mínimo de recursos, portabilidad, densidad muy superior a las VMs.
    - **Ecosistema**: imágenes reutilizables, registros (Docker Hub, GHCR), CI/CD integrado, microservicios.

La combinación de **Linux + contenedores + Kubernetes** se ha convertido en el estándar de la industria para el despliegue de aplicaciones modernas, permitiendo arquitecturas de microservicios escalables y portables entre cualquier entorno (desarrollo, pruebas, producción, nube, on-premise).




## 2. Sistemas Operativos

Un **Sistema Operativo (SO)** es un conjunto de programas que actúa como intermediario entre el usuario y el hardware de un computador. Sus objetivos principales son:

- Hacer que el sistema de computación sea **fácil de usar**.
- Proporcionar un entorno en el que los programas puedan ejecutarse de forma **eficiente**.

Desde un punto de vista formal, el SO es un **gestor de recursos**: controla y asigna los recursos del hardware (CPU, memoria, dispositivos de E/S, almacenamiento) entre los distintos programas y usuarios que los solicitan.

El sistema operativo se sitúa entre el hardware y las aplicaciones del usuario:

```
┌─────────────────────────────────┐
│         Aplicaciones            │
├─────────────────────────────────┤
│      Sistema Operativo          │
├─────────────────────────────────┤
│          Hardware               │
└─────────────────────────────────┘
```

Históricamente, los SO han evolucionado desde los sistemas por lotes de los años 50 hasta los modernos sistemas multitarea, multiprocesador y distribuidos de la actualidad.

---

## 3. Componentes de un Sistema Operativo

Un sistema operativo está formado por varios componentes interrelacionados, cada uno responsable de una función específica:

### 3.1. Núcleo (Kernel)

Es el **componente central** del SO y el primero que se carga en memoria durante el arranque. Permanece en memoria durante toda la ejecución y proporciona los servicios básicos del sistema.

El kernel gestiona directamente:

- **Procesos**: creación, planificación, sincronización y terminación.
- **Memoria**: asignación, protección y memoria virtual.
- **Dispositivos**: controladores (drivers) y gestión de interrupciones.
- **Comunicaciones interprocesos**: paso de mensajes, tuberías, señales.

Existen dos enfoques principales:

- **Kernel monolítico**: todas las funciones del SO se ejecutan en el mismo espacio de direcciones (ej. Linux tradicional, Unix).
- **Microkernel**: solo se incluyen las funciones esenciales en el kernel; el resto se ejecuta en espacio de usuario (ej. Minix, QNX, Mach).

### 3.2. Gestor de Procesos

Un **proceso** es un programa en ejecución. El gestor de procesos se encarga de:

- Crear y destruir procesos.
- Planificar la ejecución de procesos en la CPU (planificación a corto, medio y largo plazo).
- Gestionar la suspensión y reanudación de procesos.
- Proporcionar mecanismos de **sincronización** (semáforos, monitores) y **comunicación** entre procesos.
- Gestionar **interbloqueos** (deadlocks): prevención, detección y recuperación.

### 3.3. Gestor de Memoria

La memoria principal es un recurso crítico que debe gestionarse cuidadosamente:

- **Gestión de memoria física**: asignación de marcos de página a los procesos.
- **Memoria virtual**: permite ejecutar programas que requieren más memoria de la disponible físicamente, usando el disco como extensión (paginación, segmentación).
- **Protección de memoria**: evita que un proceso acceda a la memoria de otro.
- **Algoritmos de reemplazo de páginas**: LRU, FIFO, Óptimo, Clock.

### 3.4. Sistema de Archivos

Proporciona una **abstracción del almacenamiento secundario** (discos duros, SSD, USB):

- Organiza los datos en **archivos** y **directorios**.
- Gestiona el espacio libre y asignado en el disco.
- Proporciona operaciones básicas: crear, eliminar, leer, escribir, abrir, cerrar.
- Implementa permisos y control de acceso.
- Sistemas de archivos comunes: **ext4**, **NTFS**, **FAT32**, **APFS**, **XFS**.

### 3.5. Gestor de Dispositivos (E/S)

Abstrae los detalles del hardware y proporciona una interfaz uniforme:

- **Controladores (drivers)**: software específico para cada dispositivo.
- **Buffering y caching**: mejora el rendimiento de las operaciones de E/S.
- **Spooling**: gestiona dispositivos de acceso exclusivo (impresoras).
- **Interrupciones**: mecanismo por el cual los dispositivos notifican eventos al procesador.

### 3.6. Intérprete de Comandos (Shell)

Proporciona la interfaz entre el usuario y el kernel:

- **CLI** (Command Line Interface): bash, zsh, PowerShell, cmd.exe.
- **GUI** (Graphical User Interface): GNOME, KDE, Finder, Explorador de Windows.

El shell interpreta las órdenes del usuario y las traduce en llamadas al sistema.

---

## 4. Estructura de un Sistema Operativo

La estructura de un SO define cómo se organizan internamente sus componentes y cómo interactúan entre sí. Las principales arquitecturas son:

### 4.1. Estructura Monolítica

Todo el SO se ejecuta en un **único nivel de privilegio** y en el mismo espacio de direcciones. Todas las funciones están integradas en un solo bloque ejecutable.

**Ventajas:**
- Alto rendimiento (llamadas directas entre funciones).
- Simplicidad de diseño inicial.

**Inconvenientes:**
- Difícil de mantener, depurar y ampliar.
- Un fallo en cualquier componente puede colgar todo el sistema.

**Ejemplos:** MS-DOS, Unix tradicional, Linux clásico.

### 4.2. Estructura por Capas

El SO se organiza en **niveles jerárquicos**. Cada capa utiliza únicamente los servicios de la capa inferior y proporciona servicios a la capa superior.

```
┌─────────────────┐
│     Usuario     │
├─────────────────┤
│   Aplicaciones  │
├─────────────────┤
│    Nivel 5      │
├─────────────────┤
│    Nivel 4      │
├─────────────────┤
│    Nivel 3      │
├─────────────────┤
│    Nivel 2      │
├─────────────────┤
│    Nivel 1      │
├─────────────────┤
│    Hardware     │
└─────────────────┘
```

**Ventajas:**
- Modularidad y facilidad de depuración.
- Cada capa se puede probar independientemente.

**Inconvenientes:**
- Overhead por el paso entre capas.
- Definir las capas correctamente es complejo.

**Ejemplo:** THE (Technische Hogeschool Eindhoven), Multics.

### 4.3. Microkernel

Se minimiza el kernel dejando en él **solo las funciones esenciales**:

- Gestión básica de memoria.
- Planificación de procesos.
- Comunicación interprocesos (IPC).

El resto de servicios (sistema de archivos, drivers, red) se ejecutan en **espacio de usuario** como servidores.

**Ventajas:**
- Mayor fiabilidad y seguridad.
- Fácil de ampliar sin modificar el kernel.
- Portabilidad.

**Inconvenientes:**
- Mayor overhead por la comunicación entre procesos.
- Rendimiento inferior al monolítico.

**Ejemplos:** Minix, QNX, Mach (base de macOS/iOS), GNU Hurd.

### 4.4. Estructura Híbrida

Combina características de varias arquitecturas. Es el enfoque más utilizado en los SO modernos.

**Ejemplos:**
- **Windows NT**: mezcla de monolítico con capas y objetos.
- **Linux moderno**: kernel monolítico con módulos cargables (simula ciertas ventajas del microkernel).
- **macOS**: XNU (Mach + BSD).

### 4.5. Máquinas Virtuales

El SO crea **abstracciones completas del hardware**, permitiendo ejecutar múltiples sistemas operativos simultáneamente sobre la misma máquina física.

- **Hipervisor de tipo 1** (bare-metal): VMware ESXi, Hyper-V, KVM.
- **Hipervisor de tipo 2** (hosted): VirtualBox, VMware Workstation.

---

## 5. Funciones de un Sistema Operativo

### 5.1. Gestión del Procesador

El SO es responsable de la **planificación de la CPU** entre los procesos competidores:

- **Planificación a largo plazo**: decide qué procesos entran en la cola de preparados.
- **Planificación a medio plazo**: gestiona el swapping (intercambio con disco).
- **Planificación a corto plazo**: decide qué proceso se ejecuta en cada instante (algoritmos: FIFO, Round Robin, SJF, prioridades, colas multinivel).

También gestiona:
- Cambios de contexto (context switch).
- Gestión de interrupciones y excepciones.
- Sistemas multiprocesador (SMP) y multinúcleo.

### 5.2. Gestión de la Memoria

- **Asignación de memoria**: estática y dinámica.
- **Protección**: registros base y límite, modos usuario/supervisor.
- **Memoria virtual**: paginación, segmentación, TLB.
- **Algoritmos de reemplazo**: FOLIFO, Óptimo, LRU, Clock.
- **Fragmentación**: interna y externa; compactación.

### 5.3. Gestión de Dispositivos de E/S

- Abstracción del hardware mediante **drivers**.
- **Buffering**: almacenamiento temporal de datos.
- **Caching**: almacenamiento de datos frecuentemente accedidos.
- **Spooling**: gestión de dispositivos de acceso exclusivo.
- Planificación de disco: SCAN, C-SCAN, SSTF.

### 5.4. Gestión del Sistema de Archivos

- Organización lógica de la información.
- Espacio de nombres (rutas absolutas y relativas).
- Métodos de acceso: secuencial, directo, indexado.
- Gestión de directorios: lineal, hash, árbol.
- Integridad y consistencia del sistema de archivos (fsck, journaling).

### 5.5. Gestión de Procesos

- Creación y terminación de procesos (fork, exec, exit).
- Estados de un proceso: nuevo, preparado, ejecutando, bloqueado, terminado.
- **Hilos (threads)**: unidades básicas de ejecución dentro de un proceso.
- **Sincronización**: semáforos, monitores, regiones críticas, mutex.
- **Comunicación entre procesos**: memoria compartida, paso de mensajes.
- **Interbloqueos (deadlocks)**: condiciones de Coffman, prevención, evitación (algoritmo del banquero), detección y recuperación.

### 5.6. Seguridad y Protección

- **Autenticación**: contraseñas, biometría, certificados.
- **Autorización**: permisos de lectura, escritura, ejecución (rwx).
- **Cifrado**: protección de datos en reposo y en tránsito.
- **Firewalls** y sistemas de detección de intrusiones.
- **Auditoría**: registro de eventos (logs).
- Principio de **mínimo privilegio**.

### 5.7. Interfaz con el Usuario

- **Llamadas al sistema (system calls)**: interfaz programática entre aplicaciones y kernel.
- **CLI**: intérpretes de comandos, scripting.
- **GUI**: entornos gráficos, gestión de ventanas, eventos.
- **APIs**: POSIX, Win32, Java API.

### 5.8. Gestión de Red

- Pila de protocolos (TCP/IP).
- Sockets y comunicaciones en red.
- Sistemas de archivos en red (NFS, SMB/CIFS).
- Acceso remoto (SSH, RDP).

---

## 6. Tipos de Sistemas Operativos

### 6.1. Según el Número de Usuarios

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Monousuario** | Un solo usuario puede utilizar el sistema a la vez | MS-DOS, Windows Home (tradicional) |
| **Multiusuario** | Varios usuarios pueden utilizar el sistema simultáneamente | Linux, Unix, Windows Server |

### 6.2. Según el Número de Tareas

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Monotarea** | Solo puede ejecutar un programa a la vez | MS-DOS |
| **Multitarea** | Puede ejecutar varios programas concurrentemente | Linux, Windows, macOS |

La multitarea puede ser:
- **Preemptiva**: el SO decide cuándo cambiar de proceso (la mayoría de los SO modernos).
- **Cooperativa**: los procesos ceden voluntariamente el control.

### 6.3. Según la Gestión de Procesadores

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **Monoprocesador** | Gestionan un único procesador | Windows tradicional |
| **Multiprocesador** | Gestionan varios procesadores (SMP, AMP) | Linux, Windows Server, Solaris |

### 6.4. Sistemas Operativos por Lotes (Batch)

Fueron los primeros SO. Los trabajos se agrupan en **lotes** y se ejecutan secuencialmente sin interacción del usuario.

- **Características**: alto rendimiento en procesamiento masivo, sin interactividad.
- **Ejemplos históricos**: IBM OS/360, GM-NAA I/O.

### 6.5. Sistemas Operativos de Tiempo Compartido

Permiten que múltiples usuarios interactúen con el sistema simultáneamente. El tiempo de CPU se divide en **quantums** que se asignan rotativamente.

- **Características**: interactividad, planificación por Round Robin.
- **Ejemplos**: Unix, Linux, Windows.

### 6.6. Sistemas Operativos de Tiempo Real

Diseñados para aplicaciones donde el **tiempo de respuesta** es crítico.

- **Tiempo real estricto (hard)**: el incumplimiento de un plazo provoca fallo catastrófico (control aéreo, marcapasos).
- **Tiempo real flexible (soft)**: se toleran retrasos ocasionales (streaming, videojuegos).

**Ejemplos**: VxWorks, QNX, FreeRTOS, RTLinux.

### 6.7. Sistemas Operativos Distribuidos

Gestionan un conjunto de computadores independientes que aparecen ante el usuario como un **único sistema coherente**.

- **Características**: transparencia (acceso, ubicación, concurrencia), tolerancia a fallos, escalabilidad.
- **Comunicación**: paso de mensajes, RPC (Remote Procedure Call).
- **Ejemplos**: Amoeba, Plan 9, sistemas basados en middleware (CORBA).

### 6.8. Sistemas Operativos en Red (NOS)

Permiten que computadores independientes se comuniquen y compartan recursos, pero cada uno mantiene su propio SO.

- **Ejemplos**: Windows Server, Novell NetWare, Linux con Samba/NFS.

### 6.9. Sistemas Operativos para Dispositivos Móviles

Optimizados para dispositivos con recursos limitados y interfaces táctiles.

**Características**:
- Eficiencia energética.
- Gestión de conectividad (WiFi, Bluetooth, 4G/5G).
- Sandboxing de aplicaciones.
- Actualizaciones OTA.

**Ejemplos**:
- **Android**: basado en Linux, máquina virtual Dalvik/ART.
- **iOS**: basado en Darwin (XNU), ecosistema cerrado.
- Otros: HarmonyOS (Huawei), KaiOS.

### 6.10. Sistemas Operativos Empotrados (Embedded)

Diseñados para sistemas con recursos muy limitados y funciones específicas.

- **Características**: tamaño reducido, bajo consumo, tiempo real frecuentemente.
- **Ejemplos**: FreeRTOS, Zephyr, Embedded Linux, VxWorks.
- **Aplicaciones**: IoT, electrodomésticos, automóviles, robótica.

### 6.11. Sistemas Operativos en la Nube

No son un tipo convencional, sino SO optimizados para entornos de virtualización y contenedores en centros de datos.

- **Ejemplos**: Chrome OS, CoreOS, Container-Optimized OS.
- **Características**: mínimo footprint, actualización atómica, gestión declarativa.

---

## 7. Conclusión

Los sistemas operativos han pasado de ser simples gestores de lotes a convertirse en la plataforma fundamental sobre la que se construye toda la tecnología moderna. Su evolución continúa con la nube, los contenedores, la computación en el borde (edge computing) y los sistemas embebidos inteligentes. Comprender los SO es comprender los cimientos de la informática actual.

En el tema actual hemos realizado una presentación global de los sistemas operativos describiendo sus componentes mas importantes, estructuras, funciones que desarrollan y los diferentes tipos que existen.

El sistema operativo es pues el software más importante de un sistema informático y la habilidad de administrarlo de forma eficiente y segura proporciona una ventaja competitiva en el mundo laboral, especialmente en sector de la informática.

## 8. Bibliografía

1. Silberschatz, A., Galvin, P. B., & Gagne, G. (2018). *Operating System Concepts* (10th ed.). Wiley.
2. Tanenbaum, A. S., & Bos, H. (2014). *Modern Operating Systems* (4th ed.). Pearson.
3. Stallings, W. (2017). *Operating Systems: Internals and Design Principles* (9th ed.). Pearson.
4. Tanenbaum, A. S. (2006). *Sistemas Operativos Modernos* (2ª ed.). Pearson Educación.
5. Documentación oficial de Linux: https://www.kernel.org/doc/html/latest/
6. Microsoft Docs - Windows Internals: https://learn.microsoft.com/en-us/windows/win32/internals/
