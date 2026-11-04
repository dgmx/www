# TEMA 4: Sistemas operativos
### Bloque B. Arquitectura de ordenadores y sistemas operativos | TICO.1.B.2

> **Currículo LOMLOE - Andalucía** | Criterios: TICO.1.B.2.1 a TICO.1.B.2.7

---

## 1. Presentación de la unidad

Si el hardware es el cuerpo del ordenador, el **sistema operativo** es su sistema nervioso: coordina todas las piezas, decide quién usa la CPU, cómo se organiza la memoria, dónde se guardan los archivos, quién puede entrar y cómo se comunica con los periféricos.

En la unidad anterior estudiamos la arquitectura física. Ahora damos el paso al **software de base**: el programa que arranca al encender el equipo y que permanece activo mientras este funciona. Sin sistema operativo, el hardware sería inútil; con él, el usuario puede ejecutar aplicaciones, guardar documentos, conectarse a redes y administrar recursos de forma sencilla.

En esta unidad aprenderás qué es un sistema operativo, cómo está organizado internamente, cómo gestiona procesos, archivos, usuarios y dispositivos, cómo se monitoriza su rendimiento y cómo se instala y configura desde cero. También valorarás la diferencia entre sistemas propietarios y libres, y adquirirás criterios para elegir, mantener y proteger un sistema.

> **Idea clave:** el sistema operativo no hace el trabajo por el usuario, sino que **crea el entorno** en el que los programas pueden trabajar de forma ordenada, segura y eficiente.

---

## 2. Objetivos didácticos

Al terminar la unidad serás capaz de:

1. Explicar qué es un sistema operativo, sus funciones y su relación con el hardware y las aplicaciones.
2. Distinguir las arquitecturas internas de un sistema operativo y las interfaces de usuario.
3. Clasificar los sistemas operativos según su licencia y según sus características técnicas.
4. Comprender cómo se gestionan los procesos, los estados, la planificación de la CPU y los hilos.
5. Describir la organización lógica del almacenamiento y los sistemas de archivos más habituales.
6. Gestionar usuarios y grupos, aplicando principios de seguridad y mínimo privilegio.
7. Reconocer el papel de los controladores y la gestión de dispositivos.
8. Monitorizar el rendimiento del sistema e identificar cuellos de botella.
9. Planificar e instalar un sistema operativo, valorando requisitos y procedimiento.
10. Aplicar buenas prácticas de mantenimiento, seguridad y copia de seguridad.

---

## 3. Saberes básicos

| Código | Contenido |
|---|---|
| TICO.1.B.2.1 | Arquitecturas y funciones. Licencias. Interfaces de usuario. |
| TICO.1.B.2.2 | Gestión de procesos. |
| TICO.1.B.2.3 | Sistema de archivos. |
| TICO.1.B.2.4 | Gestión de usuarios. |
| TICO.1.B.2.5 | Gestión de dispositivos. |
| TICO.1.B.2.6 | Monitorización y rendimiento. |
| TICO.1.B.2.7 | Instalación y configuración. Requisitos y procedimiento. |

---

## 4. ¿Qué es un sistema operativo?

Un **sistema operativo (SO)** es un conjunto de programas que actúa como **intermediario entre el usuario, las aplicaciones y el hardware**. Se carga al arrancar el equipo y permanece en memoria hasta que se apaga.

Su misión principal es **gestionar los recursos** del sistema: CPU, memoria, almacenamiento, dispositivos de entrada/salida y red. Lo hace de forma que varios programas puedan convivir sin interferirse y que el usuario no tenga que conocer los detalles físicos de la máquina.

```
┌──────────────────────────────┐
│       Aplicaciones           │  (navegador, ofimática, juegos...)
├──────────────────────────────┤
│       Sistema Operativo      │  (kernel, servicios, drivers, shell)
├──────────────────────────────┤
│           Hardware           │  (CPU, RAM, disco, periféricos)
└──────────────────────────────┘
```

### 4.1. Funciones principales

- **Abstracción del hardware:** ofrece una interfaz uniforme para que los programas no dependan del modelo concreto de disco o tarjeta.
- **Gestión de recursos:** reparte CPU, memoria y dispositivos entre procesos y usuarios.
- **Ejecución de programas:** carga, ejecuta y termina aplicaciones.
- **Gestión de archivos:** organiza la información en archivos y directorios.
- **Gestión de usuarios:** controla quién puede acceder y qué puede hacer.
- **Seguridad y protección:** evita accesos no autorizados y aísla procesos.
- **Comunicación y redes:** permite conectarse a otros equipos e Internet.
- **Interfaz de usuario:** facilita la interacción mediante ventanas, comandos o menús.
- **Administración y monitorización:** proporciona herramientas para mantener el sistema.

### 4.2. Tipos según su uso

| Tipo | Descripción | Ejemplos |
|---|---|---|
| **De escritorio** | Equipos personales y portátiles. | Windows 11, macOS, Ubuntu Desktop. |
| **De servidor** | Máquinas que ofrecen servicios a otros equipos. | Windows Server, Debian, Rocky Linux. |
| **Móvil** | Teléfonos y tabletas. | Android, iOS. |
| **Empotrado (embedded)** | Dispositivos con recursos limitados. | FreeRTOS, Zephyr, Linux embebido. |
| **De tiempo real** | Respuesta garantizada en plazos estrictos. | QNX, VxWorks, RTLinux. |
| **En la nube / contenedores** | Optimizados para virtualización y microservicios. | Chrome OS, CoreOS, Container-Optimized OS. |

### 4.3. Relación con la arquitectura

El sistema operativo aprovecha todos los elementos estudiados en la unidad anterior: planifica el uso de la CPU, administra la memoria principal y virtual, organiza el almacenamiento secundario, controla periféricos mediante controladores, gestiona buses y energía, y ofrece mecanismos de seguridad.

---

## 5. Arquitecturas y funciones. Licencias. Interfaces de usuario (TICO.1.B.2.1)

### 5.1. Arquitectura interna de un sistema operativo

La **arquitectura** define cómo se organizan los componentes del sistema operativo y cómo se comunican entre sí. Las principales son:

| Arquitectura | Descripción | Ventajas | Inconvenientes | Ejemplos |
|---|---|---|---|---|
| **Monolítica** | Todo el SO se ejecuta en un único bloque y nivel de privilegio. | Alto rendimiento; llamadas directas. | Difícil de mantener; un fallo puede colgar todo. | MS-DOS, Unix clásico, Linux clásico. |
| **Por capas** | Funciones organizadas en niveles jerárquicos; cada capa usa solo la inferior. | Modularidad; fácil de probar. | Overhead entre capas; diseño complejo. | THE, Multics. |
| **Microkernel** | Solo funciones esenciales en el kernel; el resto (archivos, red, drivers) en espacio de usuario. | Mayor fiabilidad y seguridad; portable. | Mayor coste de comunicación entre procesos. | Minix, QNX, Mach (base de macOS/iOS). |
| **Híbrida** | Combina varias arquitecturas. | Equilibrio entre rendimiento y modularidad. | Complejidad interna. | Windows NT, Linux moderno, XNU (macOS). |
| **Máquinas virtuales** | El SO crea abstracciones completas del hardware para ejecutar otros sistemas. | Aislamiento; aprovechamiento del hardware. | Overhead; gestión más compleja. | VMware, Hyper-V, KVM, VirtualBox. |

**Espacio de usuario y espacio del kernel:** el kernel se ejecuta en modo privilegiado (acceso total al hardware), mientras que las aplicaciones se ejecutan en modo usuario (acceso restringido). Las aplicaciones solicitan servicios al kernel mediante **llamadas al sistema** (*system calls*).

### 5.2. Componentes funcionales

Todo sistema operativo moderno incluye, al menos, estos componentes:

- **Núcleo (kernel):** gestiona procesos, memoria, dispositivos y comunicaciones.
- **Gestor de procesos:** crea, planifica y termina procesos.
- **Gestor de memoria:** asigna memoria, protección y memoria virtual.
- **Sistema de archivos:** organiza y protege la información en disco.
- **Gestor de dispositivos:** controladores y abstracción de E/S.
- **Gestor de usuarios y seguridad:** autenticación, autorización y políticas.
- **Subsistema de red:** protocolos y comunicaciones.
- **Interfaz de usuario (shell):** CLI o GUI.

### 5.3. Licencias

Como vimos en la unidad anterior, la licencia determina qué se puede hacer con el software. En los sistemas operativos esta distinción es especialmente importante:

| Criterio | Sistema propietario | Sistema libre |
|---|---|---|
| Código fuente | Cerrado | Disponible |
| Modificación | No permitida o limitada | Permitida |
| Redistribución | Restringida | Permitida |
| Coste | Habitualmente de pago | Habitualmente gratuito, no siempre |
| Soporte | Del fabricante | Comunidad y empresas |
| Ejemplos | Windows, macOS, iOS | Linux, FreeBSD, Android (base), Chrome OS (base) |

**Licencias habituales:**

- **GPL:** copyleft; las versiones derivadas deben seguir siendo libres.
- **MIT, BSD, Apache:** permisivas; permiten uso en proyectos propietarios.
- **Propietaria/EULA:** licencia de uso restringido (Windows, macOS).
- **Freeware:** gratuito sin código fuente.
- **Shareware:** prueba gratuita con limitaciones.

> **Importante:** "gratis" no es lo mismo que "libre". Existen sistemas libres de pago (Red Hat Enterprise Linux) y sistemas propietarios gratuitos (Windows 11 Home incluido en muchos equipos).

**Ejemplos de sistemas operativos por licencia:**

- **Windows:** propietario, cerrado, amplia compatibilidad con hardware y software.
- **macOS:** propietario, basado en Darwin (kernel XNU, con componentes BSD de código abierto).
- **Linux:** libre, kernel creado por Linus Torvalds; se distribuye en **distribuciones** (Ubuntu, Debian, Fedora, Linux Mint, Arch, openSUSE) que combinan el kernel con utilidades y entornos de escritorio.
- **Android:** libre en su base (AOSP), pero las versiones comerciales incluyen componentes propietarios (servicios de Google).
- **iOS:** propietario, ecosistema cerrado y controlado.

### 5.4. Interfaces de usuario

La **interfaz de usuario** es el medio por el que la persona interactúa con el sistema operativo.

**CLI (Command Line Interface):** interacción mediante comandos de texto.

- **Ventajas:** potente, automatizable mediante scripts, consume pocos recursos, ideal para servidores.
- **Ejemplos:** Bash, Zsh, PowerShell, CMD, Fish.
- **Uso típico:** administración de servidores, tareas repetitivas, desarrollo.

**GUI (Graphical User Interface):** interacción mediante ventanas, iconos, menús y puntero.

- **Ventajas:** intuitiva, fácil de aprender, visual.
- **Ejemplos:** Explorador de Windows, Finder, GNOME, KDE Plasma, Cinnamon.
- **Uso típico:** usuarios finales, ofimática, multimedia.

**TUI (Text User Interface):** menús de texto con navegación por teclado (por ejemplo, instaladores de Linux o herramientas como `htop`).

**API (Application Programming Interface):** interfaz para que los programas pidan servicios al sistema operativo (Win32, POSIX, Android SDK).

**Entornos de escritorio en Linux:** a diferencia de Windows o macOS, en Linux el entorno gráfico es un componente separable. Ejemplos: GNOME, KDE Plasma, XFCE, Cinnamon, MATE. Se puede cambiar sin cambiar el sistema operativo.

**Accesibilidad:** los sistemas operativos incluyen herramientas para usuarios con discapacidad: lectores de pantalla (Narrador, Orca, VoiceOver), magnificadores, teclados en pantalla, control por voz, alto contraste y subtítulos.

**Actividad 1.** Clasifica como propietario o libre: Windows 11, Ubuntu, macOS, Android (AOSP), iOS, Linux Mint, Chrome OS. Justifica cada caso.

**Actividad 2.** Compara la CLI y la GUI: indica tres ventajas de cada una y un ejemplo de tarea mejor resuelta con cada interfaz.

**Actividad 3.** Un centro educativo quiere usar solo sistemas libres. Propón una combinación de SO (escritorio, servidor, móvil) y justifica la decisión.

---

## 6. Gestión de procesos (TICO.1.B.2.2)

### 6.1. Proceso y programa

Un **programa** es un archivo ejecutable almacenado en disco. Un **proceso** es un programa en ejecución: tiene código, datos, pila, registros y un estado. Un mismo programa puede generar varios procesos.

Cada proceso tiene un **PID** (*Process ID*), un identificador único, y un **PCB** (*Process Control Block*) con su información: estado, prioridad, registros, memoria asignada, archivos abiertos, etc.

### 6.2. Estados de un proceso

```
          ┌──────────┐
          │  Nuevo   │
          └────┬─────┘
               │ admitido
               ▼
          ┌──────────┐   planificado   ┌──────────┐
          │Preparado │ ──────────────► │Ejecutando│
          └──────────┘                 └────┬─────┘
               ▲                            │
               │      interrupción          │
               │      (quantum agotado)     │
               │                            │ E/S o espera
               │                            ▼
               │                       ┌──────────┐
               └─────────────────────── │Bloqueado │
                                       └──────────┘
                                              │
                                              │ terminado
                                              ▼
                                       ┌──────────┐
                                       │Terminado │
                                       └──────────┘
```

- **Nuevo:** se está creando.
- **Preparado (ready):** listo para ejecutarse, esperando CPU.
- **Ejecutando (running):** usando la CPU.
- **Bloqueado (waiting):** esperando un evento (E/S, señal, recurso).
- **Terminado (zombie):** ha finalizado; el SO libera sus recursos.

### 6.3. Planificación de la CPU

La **planificación** decide qué proceso usa la CPU y durante cuánto tiempo. Objetivos: equidad, eficiencia, tiempo de respuesta, rendimiento y uso de CPU.

| Algoritmo | Descripción | Características |
|---|---|---|
| **FIFO / FCFS** | El primero en llegar es el primero en ejecutarse. | Sencillo; puede causar efecto convoy. |
| **SJF (Shortest Job First)** | Ejecuta primero el proceso más corto. | Minimiza tiempo medio de espera; requiere conocer duración. |
| **SRTF** | Versión preemptiva de SJF. | Mejor tiempo de respuesta. |
| **Round Robin (RR)** | Cada proceso recibe un quantum de tiempo; al agotarlo vuelve a la cola. | Equitativo; ideal para tiempo compartido. |
| **Por prioridades** | El proceso con mayor prioridad se ejecuta primero. | Puede causar inanición; se mitiga con envejecimiento (*aging*). |
| **Colas multinivel** | Distintas colas con distintos algoritmos y prioridades. | Flexible; usado en sistemas reales. |
| **Colas multinivel con retroalimentación** | Los procesos pueden cambiar de cola según su comportamiento. | Adaptable; base de muchos planificadores modernos. |

**Cambio de contexto (*context switch*):** cuando el SO cambia de proceso, guarda el estado del actual y carga el del siguiente. Tiene un coste; por eso no conviene cambiar demasiado a menudo.

**Multitarea:**

- **Preemptiva:** el SO interrumpe un proceso para dar turno a otro (la mayoría de los SO modernos).
- **Cooperativa:** los procesos ceden voluntariamente el control (antigua, menos segura).

### 6.4. Hilos (threads)

Un **hilo** es la unidad básica de ejecución dentro de un proceso. Varios hilos comparten código, datos y recursos del proceso, pero tienen su propia pila y registros.

- **Ventajas:** creación y cambio más rápidos que los procesos; mejor uso de CPU multinúcleo; mayor capacidad de respuesta.
- **Modelos:** uno a uno (1:1), muchos a uno (M:1), muchos a muchos (M:N).
- **Problemas:** condiciones de carrera, secciones críticas, interbloqueos.

### 6.5. Sincronización y comunicación entre procesos

Cuando varios procesos o hilos acceden a datos compartidos, pueden producirse inconsistencias. El SO ofrece mecanismos:

- **Sección crítica:** zona de código que accede a un recurso compartido; solo un proceso puede entrar a la vez.
- **Mutex:** bloqueo mutuamente excluyente.
- **Semáforo:** contador que controla el acceso a un recurso (binario o contador).
- **Monitor:** estructura de alto nivel que encapsula datos y sincronización.
- **Memoria compartida:** varios procesos acceden a la misma zona de memoria.
- **Paso de mensajes:** los procesos se comunican enviando y recibiendo mensajes (tuberías, colas, sockets).

**Interbloqueo (*deadlock*):** situación en la que dos o más procesos esperan un recurso que otro tiene, sin poder avanzar. Condiciones de Coffman (las cuatro deben cumplirse): exclusión mutua, retención y espera, no expropiación y espera circular. Soluciones: prevención, evitación (algoritmo del banquero), detección y recuperación.

### 6.6. Herramientas de gestión

- **Windows:** Administrador de tareas, Monitor de recursos, `tasklist`, `taskkill`.
- **Linux:** `ps`, `top`, `htop`, `kill`, `nice`, `renice`, `systemctl`.

**Actividad 4.** Explica la diferencia entre programa, proceso e hilo con un ejemplo.

**Actividad 5.** Dibuja el diagrama de estados de un proceso y explica cada transición.

**Actividad 6.** Compara Round Robin y SJF: ¿cuál usarías en un servidor web y cuál en un sistema de tiempo compartido? Razona.

**Actividad 7.** ¿Qué es un interbloqueo? Pon un ejemplo cotidiano (por ejemplo, dos coches en un cruce estrecho).

---

## 7. Sistema de archivos (TICO.1.B.2.3)

### 7.1. Concepto

Un **sistema de archivos** es la forma en que el sistema operativo organiza, almacena y recupera la información en los dispositivos de almacenamiento. Proporciona la abstracción de **archivo** y **directorio**, evitando que el usuario maneje sectores físicos.

- **Archivo:** conjunto de datos con nombre, extensión y metadatos (tamaño, fechas, permisos, propietario).
- **Directorio (carpeta):** contenedor de archivos y otros directorios; forma una estructura en árbol.
- **Ruta (path):** dirección de un archivo. Absoluta (`/home/ana/foto.jpg` o `C:\Users\Ana\foto.jpg`) o relativa (`../foto.jpg`).

### 7.2. Sistemas de archivos habituales

| Sistema | Uso principal | Características |
|---|---|---|
| **FAT32** | USB, tarjetas SD | Compatible con todo; límite de 4 GB por archivo; sin permisos avanzados. |
| **exFAT** | USB y SD de gran capacidad | Sin límite práctico de archivo; compatible; sin journaling. |
| **NTFS** | Windows | Permisos, journaling, compresión, cifrado (EFS), cuotas. |
| **ReFS** | Windows Server | Alta resiliencia, integridad de datos. |
| **ext4** | Linux | Journaling, buen rendimiento, límites altos. |
| **Btrfs** | Linux | Copy-on-write, snapshots, compresión, RAID. |
| **XFS** | Linux (servidores) | Alto rendimiento con archivos grandes. |
| **APFS** | macOS / iOS | Copy-on-write, snapshots, cifrado, optimizado para SSD. |
| **HFS+** | macOS antiguo | En desuso. |

### 7.3. Particiones y volúmenes

- **Partición:** división lógica de una unidad física. Permite separar sistema y datos o instalar varios sistemas operativos.
- **Tabla de particiones:** MBR (antigua, hasta 4 particiones primarias, discos de hasta 2 TB) o GPT (moderna, hasta 128 particiones, discos grandes, UEFI).
- **Volumen:** unidad lógica que puede abarcar varias particiones o discos (LVM en Linux, espacios de almacenamiento en Windows).
- **Formateo:** crea el sistema de archivos en una partición. Rápido (solo estructura) o completo (verifica sectores).
- **Montaje:** en Linux, los sistemas de archivos se "montan" en un directorio (punto de montaje); en Windows se asignan letras de unidad (C:, D:).

### 7.4. Permisos y atributos

**En Linux (modelo UNIX):**

- Tres clases: propietario (*user*), grupo (*group*), otros (*others*).
- Tres permisos: lectura (*r*), escritura (*w*), ejecución (*x*).
- Ejemplo: `rwxr-xr--` = propietario rwx, grupo r-x, otros r--.
- Comandos: `chmod`, `chown`, `chgrp`.
- Permisos especiales: setuid, setgid, sticky bit.
- **ACL:** permisos más granulares (`setfacl`, `getfacl`).

**En Windows (NTFS):**

- Permisos básicos: control total, modificar, lectura y ejecución, lectura, escritura.
- Permisos avanzados y herencia desde la carpeta padre.
- Atributos: solo lectura, oculto, sistema, archivo.
- Propietario y grupos; listas de control de acceso (ACL).

**Principio:** por defecto, dar solo los permisos necesarios (*least privilege*).

### 7.5. Características avanzadas

- **Journaling:** registro de cambios que permite recuperar el sistema tras un fallo o corte de luz.
- **Fragmentación:** en HDD los archivos se reparten en fragmentos no contiguos; se mitiga con desfragmentación. En SSD no es necesario (y puede ser contraproducente).
- **TRIM:** comando que informa al SSD de los bloques liberados para mantener el rendimiento.
- **Compresión:** algunos sistemas de archivos comprimen archivos de forma transparente.
- **Cifrado:** NTFS (EFS/BitLocker), LUKS (Linux), FileVault (macOS).
- **Snapshots:** copias instantáneas del estado del sistema de archivos (Btrfs, ZFS, APFS, ReFS).
- **Cuotas:** límites de espacio por usuario o grupo.
- **Enlaces:** duros (mismo inodo) y simbólicos (acceso indirecto) en Linux; accesos directos en Windows.

### 7.6. Operaciones habituales

Crear, copiar, mover, renombrar, eliminar (a papelera o permanente), buscar, comprimir, cifrar, compartir. Borrar no destruye los datos inmediatamente: marca el espacio como libre, por lo que es posible recuperar archivos con herramientas forenses hasta que se sobrescriban.

**Actividad 8.** Explica la diferencia entre partición, volumen y sistema de archivos.

**Actividad 9.** ¿Por qué un disco de "1 TB" aparece con menos espacio en el sistema operativo? Calcula aproximadamente.

**Actividad 10.** Compara NTFS y ext4 en cinco criterios (permisos, journaling, compatibilidad, tamaño máximo de archivo, uso típico).

**Actividad 11.** ¿Por qué no es recomendable desfragmentar un SSD? ¿Qué mantenimiento sí conviene?

---

## 8. Gestión de usuarios (TICO.1.B.2.4)

### 8.1. Concepto

Un **usuario** es una identidad que el sistema operativo utiliza para controlar el acceso a recursos. Cada usuario tiene un identificador (UID en Linux, SID en Windows), un nombre, una contraseña (o método de autenticación), un directorio personal y un conjunto de permisos.

Los usuarios se agrupan en **grupos** para simplificar la administración de permisos.

### 8.2. Tipos de cuentas

| Tipo | Descripción | Ejemplos |
|---|---|---|
| **Administrador / root** | Control total del sistema. | root (Linux), Administrador (Windows). |
| **Usuario estándar** | Uso cotidiano; no puede modificar el sistema. | Cuenta personal del alumno. |
| **Usuario invitado** | Acceso limitado y temporal. | Guest. |
| **Cuenta de servicio** | Usada por aplicaciones y servicios. | www-data, NT SERVICE. |
| **Cuenta de sistema** | Interna del SO. | SYSTEM (Windows), daemon (Linux). |

### 8.3. Principio de mínimo privilegio

Cada usuario debe tener solo los permisos necesarios para su trabajo. Esto reduce el impacto de errores y ataques. Por eso:

- No se debe usar la cuenta de administrador para el trabajo diario.
- Windows usa **UAC** (*User Account Control*): solicita confirmación para acciones administrativas.
- Linux usa **sudo**: ejecuta un comando con privilegios de root tras autenticarse.

### 8.4. Autenticación

La **autenticación** verifica la identidad del usuario. Métodos habituales:

- **Contraseña:** la más común; debe ser robusta (longitud, variedad, no reutilizada).
- **PIN:** código numérico corto, usado en dispositivos móviles.
- **Biometría:** huella, reconocimiento facial, iris, voz.
- **Token / tarjeta inteligente:** algo que se posee.
- **Autenticación de dos factores (2FA):** combina algo que se sabe y algo que se tiene (app, SMS, clave física).
- **SSO (*Single Sign-On*):** un solo acceso para varios servicios.

**Políticas de contraseñas:** longitud mínima, complejidad, caducidad, historial, bloqueo tras intentos fallidos, no usar datos personales.

### 8.5. Autorización y permisos

La **autorización** determina qué puede hacer un usuario autenticado. Se basa en:

- Permisos de archivos y directorios.
- Membresía de grupos.
- Políticas de seguridad (GPO en Windows, sudoers en Linux).
- Listas de control de acceso (ACL).

### 8.6. Gestión en Windows

- **Herramientas:** `lusrmgr.msc` (usuarios y grupos locales), Configuración > Cuentas, `net user`, `net localgroup`.
- **Comandos útiles:**
  - `net user nombre contraseña /add` — crear usuario.
  - `net user nombre /delete` — eliminar.
  - `net localgroup Administradores nombre /add` — añadir a grupo.
- **Cuentas Microsoft vs locales:** las cuentas Microsoft permiten sincronización y servicios en la nube; las locales son independientes.

### 8.7. Gestión en Linux

- Archivos clave: `/etc/passwd` (usuarios), `/etc/shadow` (contraseñas cifradas), `/etc/group` (grupos).
- **Comandos:**
  - `useradd -m nombre` — crear usuario con directorio personal.
  - `passwd nombre` — asignar contraseña.
  - `usermod -aG grupo nombre` — añadir a grupo.
  - `userdel -r nombre` — eliminar usuario y su directorio.
  - `groupadd grupo` — crear grupo.
  - `id nombre` — ver UID, GID y grupos.
- **sudo:** configuración en `/etc/sudoers` (editar con `visudo`).
- **Perfiles:** `/etc/skel` contiene los archivos por defecto del directorio personal.

### 8.8. Seguridad de cuentas

- Deshabilitar cuentas no usadas.
- No compartir contraseñas.
- Revisar periódicamente los miembros de grupos administrativos.
- Registrar eventos de acceso (logs).
- Aplicar actualizaciones de seguridad.
- Usar cifrado de disco para proteger datos en caso de robo.

**Actividad 12.** Explica la diferencia entre autenticación y autorización con un ejemplo.

**Actividad 13.** ¿Por qué no conviene trabajar habitualmente como administrador/root? ¿Qué mecanismos usan Windows y Linux para evitarlo?

**Actividad 14.** Diseña una política de contraseñas para un centro educativo (longitud, complejidad, caducidad, bloqueo).

---

## 9. Gestión de dispositivos (TICO.1.B.2.5)

### 9.1. Concepto

La **gestión de dispositivos** es el subsistema del sistema operativo que controla los periféricos y el hardware de E/S. Su objetivo es ofrecer una interfaz uniforme independientemente del dispositivo concreto.

### 9.2. Controladores (drivers)

Un **controlador** (driver) es un programa que traduce las órdenes genéricas del sistema operativo al lenguaje específico del dispositivo.

- **Plug and Play (PnP):** el SO detecta y configura automáticamente los dispositivos.
- **Drivers genéricos:** incluidos en el SO; funcionan con muchos dispositivos estándar.
- **Drivers específicos:** proporcionados por el fabricante; ofrecen todas las funciones.
- **Firmware:** software grabado en el propio dispositivo; puede actualizarse (flashing).

**Problemas habituales:** driver incorrecto o desactualizado, conflicto de recursos, dispositivo no reconocido, firma digital no válida.

### 9.3. Clasificación de dispositivos

| Tipo | Descripción | Ejemplos |
|---|---|---|
| **De bloque** | Acceso por bloques de datos; permiten acceso aleatorio. | Discos duros, SSD, USB. |
| **De carácter** | Acceso secuencial, byte a byte. | Teclado, ratón, puertos serie. |
| **De red** | Comunicación con otros equipos. | Tarjeta de red, Wi-Fi. |
| **Virtuales** | No corresponden a hardware físico. | `/dev/null`, bucles, dispositivos de memoria. |

### 9.4. Mecanismos de E/S

- **E/S programada:** la CPU consulta continuamente al dispositivo (polling); ineficiente.
- **Interrupciones:** el dispositivo avisa a la CPU cuando necesita atención.
- **DMA (*Direct Memory Access*):** un controlador transfiere datos entre dispositivo y memoria sin intervención directa de la CPU.
- **Buffering:** almacenamiento temporal para compensar diferencias de velocidad.
- **Spooling:** gestión de dispositivos de acceso exclusivo (impresoras): las tareas se ponen en cola.

### 9.5. Gestión en Windows

- **Administrador de dispositivos:** ver, actualizar, deshabilitar o desinstalar dispositivos.
- **Windows Update:** distribuye muchos drivers.
- **Solucionadores de problemas:** diagnóstico automático.
- **Firmas de drivers:** Windows exige drivers firmados para mejorar la seguridad.

### 9.6. Gestión en Linux

- Los dispositivos se representan como archivos en `/dev`.
- **Comandos útiles:**
  - `lsblk` — listar dispositivos de bloque.
  - `lspci` — listar dispositivos PCI.
  - `lsusb` — listar dispositivos USB.
  - `dmesg` — mensajes del kernel (detección de hardware).
  - `udevadm` — gestión dinámica de dispositivos.
- Los drivers suelen estar integrados en el kernel o se cargan como módulos (`modprobe`, `lsmod`).

### 9.7. Buenas prácticas

- Mantener drivers y firmware actualizados.
- Descargar drivers solo de fuentes oficiales.
- Crear puntos de restauración antes de cambios importantes.
- No deshabilitar dispositivos desconocidos sin verificar su función.
- Comprobar compatibilidad antes de instalar hardware nuevo.

**Actividad 15.** Explica la diferencia entre un driver y el firmware de un dispositivo.

**Actividad 16.** ¿Qué es Plug and Play y qué ventajas aporta? ¿Qué hacer si un dispositivo no se detecta automáticamente?

---

## 10. Monitorización y rendimiento (TICO.1.B.2.6)

### 10.1. Concepto

La **monitorización** consiste en observar el comportamiento del sistema para detectar problemas, medir el rendimiento y planificar mejoras. El **rendimiento** se mide con métricas como uso de CPU, memoria, disco y red.

### 10.2. Métricas clave

| Métrica | Qué mide | Señal de problema |
|---|---|---|
| **Uso de CPU** | Porcentaje de tiempo que la CPU está ocupada. | 100% sostenido con lentitud. |
| **Carga (load average)** | Procesos en ejecución o espera. | Mayor que el número de núcleos. |
| **Memoria RAM** | Memoria usada, libre y caché. | Poca memoria libre + uso de swap. |
| **Swap / paginación** | Uso del disco como memoria virtual. | Actividad constante de swap (thrashing). |
| **Disco** | Lecturas/escrituras por segundo, latencia, espacio libre. | Cola de E/S alta; disco lleno. |
| **Red** | Ancho de banda, paquetes, errores. | Saturación o errores de transmisión. |
| **Procesos** | Número de procesos, hilos, descriptores abiertos. | Procesos zombi o descontrolados. |
| **Temperatura** | Calor de CPU, GPU, disco. | Sobre calentamiento y throttling. |

### 10.3. Herramientas en Windows

- **Administrador de tareas:** procesos, rendimiento, usuarios, historial de aplicaciones.
- **Monitor de recursos (resmon):** CPU, memoria, disco, red en detalle.
- **Monitor de rendimiento (perfmon):** contadores personalizables y registros.
- **Observador de eventos:** logs del sistema, seguridad y aplicación.
- **Monitor de fiabilidad:** historial de fallos y cambios.
- **PowerShell:** `Get-Process`, `Get-Counter`, `Get-EventLog`.

### 10.4. Herramientas en Linux

- **`top` / `htop`:** procesos y uso de recursos en tiempo real.
- **`ps aux`:** listado de procesos.
- **`free -h`:** memoria RAM y swap.
- **`df -h`:** espacio en disco.
- **`du -sh`:** tamaño de directorios.
- **`iostat`, `vmstat`, `sar`:** estadísticas de E/S, memoria y CPU.
- **`lsof`:** archivos abiertos por procesos.
- **`journalctl`:** logs del sistema (systemd).
- **`systemd-analyze`:** tiempo de arranque y servicios lentos.
- **`dstat`, `glances`:** monitorización avanzada.

### 10.5. Identificación de cuellos de botella

Un **cuello de botella** es el componente que limita el rendimiento global. Pasos para detectarlo:

1. Medir el estado actual (línea base).
2. Identificar el recurso saturado (CPU, RAM, disco, red).
3. Correlacionar con procesos o servicios.
4. Aplicar una mejora (más RAM, SSD, optimizar servicio).
5. Volver a medir para confirmar.

**Causas habituales de lentitud:**

- Poca memoria RAM y uso excesivo de swap.
- Disco duro mecánico (HDD) saturado o fragmentado.
- Demasiados programas en el arranque.
- Malware o procesos en segundo plano.
- Temperatura alta que reduce la frecuencia (throttling).
- Red lenta o inestable.
- Sistema de archivos dañado.

### 10.6. Optimización y mantenimiento

- **Arranque:** deshabilitar programas de inicio innecesarios.
- **Servicios:** detener servicios no usados.
- **Actualizaciones:** mantener el SO y las aplicaciones al día.
- **Limpieza:** eliminar archivos temporales y cachés.
- **TRIM:** habilitar en SSD.
- **Desfragmentación:** solo en HDD.
- **Antivirus/antimalware:** análisis periódico.
- **Copias de seguridad:** verificar y probar restauración.
- **Benchmarking:** comparar antes y después de cambios.

**Actividad 17.** Indica qué herramienta usarías en Windows y en Linux para: (a) ver procesos, (b) memoria libre, (c) espacio en disco, (d) tiempo de arranque.

**Actividad 18.** Un equipo va lento. Describe una secuencia de comprobaciones para localizar la causa.

---

## 11. Instalación y configuración. Requisitos y procedimiento (TICO.1.B.2.7)

### 11.1. Requisitos

Antes de instalar, hay que comprobar:

- **Requisitos mínimos y recomendados** del sistema operativo (CPU, RAM, almacenamiento, firmware UEFI/BIOS).
- **Compatibilidad de hardware:** procesador (arquitectura x86-64, ARM), tarjeta gráfica, red, sonido.
- **Espacio libre** suficiente para el sistema y las aplicaciones.
- **Copia de seguridad** de los datos importantes.
- **Licencia** válida (si es propietario) o medio de instalación (ISO, USB booteable).
- **Conexión a Internet** para actualizaciones y drivers.

**Ejemplo orientativo de requisitos (variables según versión):**

| Requisito | Windows 11 | Ubuntu Desktop |
|---|---|---|
| CPU | 1 GHz, 2 núcleos, 64 bits, TPM 2.0 | 2 GHz dual core, 64 bits |
| RAM | 4 GB mínimo | 4 GB mínimo (8 GB recomendado) |
| Almacenamiento | 64 GB | 25 GB mínimo |
| Firmware | UEFI, arranque seguro | UEFI o BIOS |
| Gráficos | DirectX 12 / WDDM 2.0 | Compatible con X/Wayland |

### 11.2. Tipos de instalación

- **Limpia (clean install):** borra todo y reinstala. Recomendada para equipos nuevos o con problemas graves.
- **Actualización (upgrade):** mantiene archivos y aplicaciones. Más rápida, pero puede arrastrar problemas.
- **Dual boot:** dos sistemas operativos en el mismo equipo; se elige al arrancar.
- **Máquina virtual:** instala el SO dentro de otro; ideal para pruebas y aprendizaje.
- **Instalación desatendida:** mediante archivo de respuestas (unattend.xml, preseed, kickstart) para muchos equipos.
- **Clonación / despliegue:** imagen maestra replicada en varios equipos.

### 11.3. Procedimiento general

1. **Planificación:** verificar requisitos, compatibilidad y licencia.
2. **Copia de seguridad:** guardar documentos, configuraciones y claves.
3. **Creación del medio de instalación:** descargar la ISO oficial y crear un USB booteable (Rufus, Ventoy, balenaEtcher, `dd`).
4. **Configurar el arranque:** entrar en BIOS/UEFI y seleccionar el USB como primer dispositivo de arranque; desactivar arranque rápido si es necesario.
5. **Instalación:**
   - Seleccionar idioma, región y distribución de teclado.
   - Elegir tipo de instalación (limpia, personalizada).
   - Particionar el disco (automático o manual).
   - Crear usuario y contraseña.
   - Configurar red (si procede).
6. **Primer arranque:** completar la configuración inicial (OOBE).
7. **Actualizaciones:** instalar todas las actualizaciones del sistema.
8. **Drivers:** verificar que todo el hardware funciona; instalar drivers específicos si falta alguno.
9. **Configuración de seguridad:** firewall, antivirus/antimalware, cifrado de disco, políticas de usuario.
10. **Aplicaciones:** instalar el software necesario.
11. **Copia de seguridad y punto de restauración:** crear una imagen base.
12. **Documentación:** anotar configuración, licencias y credenciales (de forma segura).

### 11.4. Instalación de Windows (resumen)

- Arrancar desde el USB.
- Seleccionar idioma y "Instalar ahora".
- Introducir clave de producto o "No tengo clave".
- Elegir edición (Home, Pro, etc.).
- Aceptar términos.
- Elegir "Personalizada" para particionar.
- Seleccionar la partición o crear una nueva.
- Esperar a la copia de archivos y configuración.
- Configurar región, teclado, red y cuenta (Microsoft o local).
- Ajustar privacidad.
- Completar y actualizar.

### 11.5. Instalación de Linux (resumen, ejemplo Ubuntu)

- Arrancar desde el USB y elegir "Probar" o "Instalar".
- Seleccionar idioma y distribución de teclado.
- Conectarse a la red.
- Elegir "Instalación normal" o "mínima".
- Decidir si se instalan actualizaciones y software de terceros.
- Tipo de instalación: borrar disco e instalar, instalar junto a otro SO, o "Más opciones" (manual).
- Particionado manual típico:
  - `/` (raíz): ext4, 30–50 GB.
  - `/home`: ext4, resto del espacio.
  - `swap`: igual a la RAM (o usar archivo de intercambio).
  - Partición EFI (FAT32) si UEFI.
- Crear usuario y contraseña.
- Esperar y reiniciar.
- Actualizar: `sudo apt update && sudo apt upgrade`.
- Instalar drivers privativos si se necesita (GPU, Wi-Fi).

### 11.6. Configuración inicial recomendada

- **Red:** verificar conectividad, DNS y proxy si procede.
- **Usuarios:** crear cuentas estándar; reservar la administrativa.
- **Actualizaciones:** activar actualizaciones automáticas de seguridad.
- **Seguridad:** firewall activo, antimalware, cifrado de disco (BitLocker, LUKS, FileVault).
- **Copias de seguridad:** configurar copia automática (Time Machine, Historial de archivos, rsync, Timeshift).
- **Energía:** ajustar suspensión, brillo y apagado de pantalla.
- **Privacidad:** revisar telemetría y permisos de aplicaciones.
- **Restauración:** crear punto de restauración o snapshot inicial.

### 11.7. Recuperación y resolución de problemas

- **Modo seguro:** arranque mínimo para diagnosticar.
- **Punto de restauración / snapshot:** volver a un estado anterior.
- **Reparación de arranque:** herramientas como `bootrec`, `bcdboot`, GRUB.
- **Live USB:** arrancar desde USB para rescatar datos o reparar.
- **Restablecer el equipo:** reinstalar conservando o borrando datos.
- **Logs:** revisar visor de eventos o `journalctl` para identificar errores.

**Actividad 19.** Elige un sistema operativo (Windows o Linux) y redacta una lista de comprobación para instalarlo en un equipo del aula.

**Actividad 20.** ¿Qué particiones crearías para un equipo con dual boot Windows + Linux? Justifica tamaños y sistemas de archivos.

---

## 12. Prácticas de laboratorio

### Práctica 1. Identificación del sistema operativo

- Averigua qué sistema operativo, versión, arquitectura y licencia tiene tu equipo.
- Comprueba la cantidad de RAM, CPU y espacio en disco.
- Anota los resultados en una tabla.

### Práctica 2. Gestión de procesos

- Abre varias aplicaciones y observa los procesos en el Administrador de tareas / `htop`.
- Finaliza un proceso no esencial y mide el efecto.
- Cambia la prioridad de un proceso y observa el cambio.

### Práctica 3. Sistema de archivos

- Crea una estructura de directorios con archivos de distintos tipos.
- Modifica permisos y comprueba el acceso con otro usuario.
- Formatea una memoria USB con FAT32 y exFAT; compara límites y compatibilidad.

### Práctica 4. Gestión de usuarios

- Crea dos usuarios (estándar y administrador) y un grupo.
- Asigna permisos a una carpeta para que solo el grupo pueda escribir.
- Prueba el acceso con cada usuario y documenta el resultado.

### Práctica 5. Dispositivos

- Conecta un dispositivo USB y localiza su driver.
- Actualiza o reinstala el driver y verifica el funcionamiento.
- Consulta los mensajes del kernel (`dmesg`) o el Administrador de dispositivos.

### Práctica 6. Monitorización

- Mide el uso de CPU, RAM y disco en reposo y bajo carga (abrir varias aplicaciones).
- Identifica el proceso que más recursos consume.
- Propón una optimización y vuelve a medir.

### Práctica 7. Instalación en máquina virtual

- Crea una máquina virtual con VirtualBox o VMware.
- Instala una distribución Linux o una edición de Windows.
- Realiza el particionado manual y documenta las decisiones.
- Crea un snapshot inicial tras la instalación.

### Práctica 8. Copia de seguridad y recuperación

- Diseña un plan de copia de seguridad 3-2-1 para un equipo del aula.
- Realiza una copia y prueba la restauración de un archivo.
- Simula un fallo (borrado accidental) y recupera el archivo.

---

## 13. Actividades de repaso

1. Define sistema operativo y explica sus funciones principales.
2. Dibuja el esquema de capas (aplicaciones, SO, hardware) y señala dónde actúa el kernel.
3. Explica la diferencia entre kernel monolítico y microkernel.
4. ¿Qué es una llamada al sistema?
5. Clasifica cinco sistemas operativos según su licencia.
6. Compara CLI y GUI indicando cuándo usar cada una.
7. Define proceso, PID y PCB.
8. Enumera los estados de un proceso y sus transiciones.
9. Explica Round Robin y el concepto de quantum.
10. ¿Qué es un hilo y qué ventajas aporta?
11. Define interbloqueo y las cuatro condiciones de Coffman.
12. Explica la diferencia entre archivo, directorio y ruta.
13. Compara FAT32, NTFS y ext4 en cinco criterios.
14. ¿Qué es el journaling y para qué sirve?
15. Explica los permisos en Linux con un ejemplo (`rwxr-xr--`).
16. ¿Qué diferencia hay entre autenticación y autorización?
17. ¿Por qué no se debe trabajar habitualmente como root/administrador?
18. Explica qué es un driver y cómo se gestiona en Windows y Linux.
19. Enumera cuatro métricas de rendimiento y qué indica cada una.
20. Describe los pasos generales para instalar un sistema operativo.
21. ¿Qué es un dual boot y qué precauciones requiere?
22. Explica la regla 3-2-1 de copias de seguridad.

---

## 14. Autoevaluación

**1.** El sistema operativo es:
a) un programa de aplicación.  
b) el intermediario entre usuario, aplicaciones y hardware.  
c) un periférico.  
d) un tipo de licencia.

**2.** El kernel se ejecuta en:
a) espacio de usuario.  
b) espacio privilegiado.  
c) la nube.  
d) la BIOS.

**3.** ¿Cuál de estas arquitecturas deja la mayoría de los servicios en espacio de usuario?
a) Monolítica.  
b) Por capas.  
c) Microkernel.  
d) Híbrida.

**4.** ¿Qué sistema operativo es libre?
a) Windows 11.  
b) macOS.  
c) Ubuntu.  
d) iOS.

**5.** Round Robin es un algoritmo de:
a) gestión de archivos.  
b) planificación de CPU.  
c) gestión de usuarios.  
d) compresión.

**6.** Un proceso en estado "bloqueado" está:
a) usando la CPU.  
b) esperando un evento o recurso.  
c) terminado.  
d) recién creado.

**7.** ¿Qué sistema de archivos usa journaling y es típico de Linux?
a) FAT32.  
b) NTFS.  
c) ext4.  
d) exFAT.

**8.** En Linux, los permisos `rwxr-xr--` significan:
a) propietario rwx, grupo r-x, otros r--.  
b) todos tienen rwx.  
c) nadie tiene permisos.  
d) solo lectura para todos.

**9.** El principio de mínimo privilegio implica:
a) dar permisos de administrador a todos.  
b) dar solo los permisos necesarios.  
c) no usar contraseñas.  
d) desactivar el firewall.

**10.** Un driver es:
a) un dispositivo físico.  
b) un programa que controla un dispositivo.  
c) un sistema de archivos.  
d) un usuario.

**11.** DMA sirve para:
a) imprimir documentos.  
b) transferir datos sin intervención directa de la CPU.  
c) cifrar archivos.  
d) crear usuarios.

**12.** ¿Qué herramienta muestra procesos en Linux?
a) `tasklist`.  
b) `htop`.  
c) `ipconfig`.  
d) `format`.

**13.** El thrashing se produce por:
a) exceso de uso de swap.  
b) demasiada memoria libre.  
c) disco SSD muy rápido.  
d) CPU a 0%.

**14.** Un dual boot permite:
a) ejecutar dos programas a la vez.  
b) tener dos sistemas operativos en el mismo equipo.  
c) duplicar los datos.  
d) aumentar la RAM.

**15.** La regla 3-2-1 se refiere a:
a) procesos.  
b) copias de seguridad.  
c) buses.  
d) permisos.

### Soluciones

1. b · 2. b · 3. c · 4. c · 5. b · 6. b · 7. c · 8. a · 9. b · 10. b · 11. b · 12. b · 13. a · 14. b · 15. b

---

## 15. Glosario

- **ACL:** lista de control de acceso; define permisos detallados.
- **API:** interfaz de programación de aplicaciones.
- **CLI:** interfaz de línea de comandos.
- **Context switch:** cambio de un proceso a otro en la CPU.
- **Deadlock:** interbloqueo entre procesos.
- **Driver:** controlador de dispositivo.
- **GUI:** interfaz gráfica de usuario.
- **Hilo (thread):** unidad de ejecución dentro de un proceso.
- **Journaling:** registro de cambios para recuperación.
- **Kernel:** núcleo del sistema operativo.
- **PID:** identificador de proceso.
- **Proceso:** programa en ejecución.
- **Quantum:** tiempo asignado a un proceso en Round Robin.
- **Shell:** intérprete de comandos.
- **Swap:** espacio en disco usado como memoria virtual.
- **UAC:** control de cuentas de usuario (Windows).
- **UID:** identificador de usuario (Linux).

---

## 16. Recursos recomendados

- Documentación oficial de Windows y de las distribuciones Linux.
- Manuales de instalación de Ubuntu, Fedora y Linux Mint.
- Herramientas de monitorización: htop, glances, Monitor de recursos, perfmon.
- Simuladores de planificación de CPU y gestión de memoria.
- Máquinas virtuales (VirtualBox, VMware) para prácticas seguras.
- Guías de seguridad y copias de seguridad.

---

## 17. Criterios de evaluación

| Criterio | Indicador | Instrumento |
|---|---|---|
| Comprende el SO | Explica funciones, componentes y arquitecturas | Prueba escrita y actividades |
| Gestiona procesos | Identifica estados, planificación e hilos | Ejercicios y práctica |
| Organiza archivos | Compara sistemas de archivos y permisos | Tabla y práctica |
| Administra usuarios | Crea usuarios, grupos y permisos | Práctica |
| Gestiona dispositivos | Reconoce drivers y mecanismos de E/S | Actividad y práctica |
| Monitoriza rendimiento | Usa herramientas y detecta cuellos de botella | Práctica |
| Instala y configura | Planifica y ejecuta una instalación | Proyecto y rúbrica |
| Trabaja con rigor | Documenta y justifica decisiones | Rúbrica de trabajo |

---

## 18. Rúbrica simplificada (0–10)

| Nivel | Descripción | Puntuación |
|---|---|---|
| Excelente | Domina los conceptos, los relaciona y los aplica con precisión; justifica sus decisiones. | 9–10 |
| Notable | Comprende los conceptos y los aplica correctamente con pequeños errores. | 7–8 |
| Aprobado | Conoce los conceptos básicos y resuelve tareas sencillas con ayuda. | 5–6 |
| Insuficiente | Confunde conceptos clave y no justifica sus respuestas. | 0–4 |

---

**Nota final:** el sistema operativo es el software más importante del equipo. Conocerlo en profundidad te permitirá instalarlo, mantenerlo, protegerlo y sacar el máximo partido a cualquier dispositivo, hoy y en el futuro.
