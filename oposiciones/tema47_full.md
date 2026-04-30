# Tema 47: Instalación y Explotación de Aplicaciones Informáticas

## 1. INTRODUCCION Y JUSTIFICACIÓN

## 2. CONCEPTO DE APLICACIÓN

Una aplicación (o app) es un programa informático diseñado para facilitar tareas específicas en ordenadores, smartphones o tablets, actuando como una herramienta digital para el usuario. Se caracteriza por ser software de uso práctico (productividad, entretenimiento, redes sociales) que se instala o ejecuta en un dispositivo, diferenciándose de los sistemas operativos. 
Ejemplos de Aplicaciones y sus usos:

- Productividad: Procesadores de texto (Microsoft Word), hojas de cálculo (Excel), gestores de correo.
- Comunicación: WhatsApp, Telegram, Skype.
- Redes Sociales: Instagram, TikTok, Facebook.
- Entretenimiento: Plataformas de streaming (Netflix, Spotify) y videojuegos.
- Servicios/Herramientas: Aplicaciones bancarias, mapas (Google Maps), calendarios y navegadores web. 

## 3. INSTALACIÓN DE APLICACIONES INFORMÁTICAS

### 3.1. Concepto y objetivo
La instalación de una aplicación informática es el proceso de preparar, configurar y desplegar un programa software en un sistema informático para que pueda ser ejecutado por el usuario. No se trata únicamente de copiar archivos al disco, sino de un conjunto de operaciones que incluyen la verificación de dependencias, la configuración del entorno, la creación de accesos, el registro en el sistema y la integración con otros componentes.

### 3.2. Fases del proceso de instalación

### a) Preparación previa
- **Verificación de requisitos del sistema**
  - Arquitectura del procesador (x86, x64, ARM)
  - Versión del sistema operativo
  - Espacio en disco disponible
  - Memoria RAM mínima
  - Dependencias de software (frameworks, librerías, runtimes como .NET, Java, Visual C++ Redistributable)
  - Permisos de administrador
  - Conexión a red (si requiere descarga de componentes adicionales)

- **Análisis de compatibilidad**
  - Conflictos con software previamente instalado
  - Versiones previas existentes (actualización vs instalación limpia)
  - Compatibilidad con hardware específico (drivers, dispositivos periféricos)

- **Creación de puntos de restauración y copias de seguridad**
  - Snapshots del sistema antes de proceder
  - Backup de registros y configuraciones críticas

### b) Ejecución del instalador
- **Tipos de instalación**
  - **Típica/Estándar**: el instalador toma decisiones por defecto (ruta, componentes, configuraciones)
  - **Personalizada/Avanzada**: el usuario selecciona qué componentes instalar, ruta de destino, configuraciones específicas
  - **Silenciosa/Desatendida**: se ejecuta sin interacción del usuario mediante parámetros o scripts (útil para despliegues masivos)
  - **Portátil**: no requiere instalación propiamente dicha, se ejecuta directamente desde un directorio o dispositivo extraíble

- **Métodos de distribución**
  - Medios físicos (CD, DVD, USB)
  - Descarga directa desde el sitio del fabricante
  - Repositorios de paquetes (apt, yum, dnf en Linux)
  - Tiendas de aplicaciones (Microsoft Store, App Store, Google Play)
  - Imágenes de disco (ISO, DMG)
  - Despliegue corporativo (SCCM, Active Directory Group Policy, MDM)

### c) Operaciones internas de la instalación
- **Copia de archivos**
  - Ejecutables (.exe, .bin, scripts)
  - Librerías compartidas (.dll, .so, .dylib)
  - Recursos (imágenes, plantillas, localizaciones)
  - Archivos de configuración

- **Registro en el sistema**
  - Claves de registro en Windows (HKLM, HKCU)
  - Entradas en bases de datos de paquetes (dpkg, rpm)
  - Variables de entorno
  - Rutas del sistema (PATH)

- **Configuración del sistema**
  - Creación de servicios del sistema
  - Registro de extensiones de archivo
  - Configuración de firewall (reglas de entrada/salida)
  - Tareas programadas
  - Permisos de archivos y directorios

- **Creación de accesos**
  - Accesos directos en escritorio y menú de inicio
  - Iconos en barra de tareas
  - Entradas en el panel de desinstalación
  - Integración con el explorador de archivos (shell extensions)

### d) Post-instalación
- **Verificación de la instalación**
  - Ejecución de la aplicación para confirmar funcionamiento
  - Verificación de logs de instalación
  - Comprobación de versiones instaladas

- **Configuración inicial**
  - Activación/licenciamiento (serial number, cuenta, suscripción)
  - Configuración de preferencias del usuario
  - Descarga de actualizaciones iniciales
  - Importación de datos o migración desde versiones anteriores

- **Documentación**
  - Registro de la instalación (fecha, versión, opciones elegidas)
  - Anotación de incidencias o desviaciones del proceso estándar

## 3.3. Instaladores y tecnologías de empaquetado

### a). Tecnologías en Windows
- **InstallShield**: uno de los más antiguos y extendidos en entornos empresariales
- **Inno Setup**: gratuito, basado en scripts, ligero
- **NSIS (Nullsoft Scriptable Install System)**: open source, usado por proyectos como Winamp o Firefox
- **WiX Toolset**: basado en XML, genera paquetes MSI nativos
- **MSI (Microsoft Installer)**: formato estándar corporativo, permite gestión mediante políticas de grupo
- **MSIX**: formato moderno de Microsoft, combina ventajas de MSI y App-V con mejor seguridad y gestión

### b). Tecnologías en Linux
- **Paquetes .deb** (Debian/Ubuntu): gestionados por APT
- **Paquetes .rpm** (Red Hat/Fedora/SUSE): gestionados por DNF/YUM/Zypper
- **Snap** (Canonical): empaquetado universal con dependencias incluidas, autocontenido
- **Flatpak**: empaquetado universal enfocado en aplicaciones de escritorio, con sandboxing
- **AppImage**: formato portátil que no requiere instalación
- **Tarballs** (.tar.gz, .tar.xz): distribución de código fuente o binarios precompilados

### c). Tecnologías en macOS
- **DMG**: imagen de disco que contiene la aplicación
- **PKG**: instalador nativo de macOS
- **Homebrew**: gestor de paquetes desde línea de comandos
- **Mac App Store**: tienda oficial de Apple

## 3.4. Instalación avanzada: servicios de Windows Installer

El modelo de Windows Installer organiza las aplicaciones en tres bloques lógicos:

- **Componentes**: unidades mínimas de instalación. Cada componente contiene archivos, claves de registro y recursos relacionados. Se instalan o desinstalan como una unidad indivisible. Los componentes compartidos entre aplicaciones se rastrean mediante contadores de referencia: no se eliminan hasta que ninguna aplicación los use.

- **Funciones (Features)**: agrupaciones lógicas de componentes que representan una capacidad de la aplicación (por ejemplo, "Herramientas de edición", "Corrector ortográfico", "Plantillas"). El usuario puede seleccionar instalar solo ciertas funciones, ahorrando espacio en disco.

- **Productos**: representan la aplicación completa. Se definen mediante un archivo de paquete (.msi) que actúa como base de datos relacional describiendo todas las relaciones entre funciones, componentes, condiciones de instalación, secuencias de acciones y requisitos.

### Ventajas de este modelo
- **Autoreparación**: el sistema detecta componentes faltantes o corruptos y los repara automáticamente al invocar la aplicación
- **Instalación bajo demanda**: componentes que se instalan solo la primera vez que el usuario los necesita
- **Gestión de recursos compartidos**: evita la eliminación de archivos compartidos y los archivos huérfanos
- **Desinstalación limpia**: elimina solo lo que corresponde a esa aplicación
- **Rollback**: si la instalación falla, revierte todos los cambios realizados

## 3.5. Desinstalación y gestión del ciclo de vida

- **Desinstalación estándar**: a través del sistema operativo (Programas y Características, gestores de paquetes)
- **Desinstalación limpia**: uso de herramientas especializadas que eliminan residuos (registros huérfanos, carpetas temporales, configuraciones persistentes)
- **Consideraciones**: datos del usuario, bases de datos locales, licencias, certificados digitales

---

## 4. EXPLOTACIÓN DE APLICACIONES INFORMÁTICAS

## 4.1. Concepto y objetivo
La explotación de aplicaciones informáticas es la fase operativa en la que el software se utiliza de forma continuada para producir los resultados esperados. Abarca desde el arranque diario de la aplicación hasta su mantenimiento, actualización, monitorización y optimización. No basta con instalar correctamente: hay que garantizar que la aplicación funcione de forma eficiente, segura y alineada con los objetivos de la organización.

## 4.2. Características de una correcta explotación

### a). Multifuncionalidad
La aplicación debe ser capaz de cubrir múltiples necesidades dentro del flujo de trabajo. Cuantas más tareas pueda resolver una sola herramienta, menor será la fragmentación, el coste de formación y la complejidad de mantenimiento.

### b). Productividad
Se mide por la relación entre los resultados obtenidos y los recursos empleados (tiempo, esfuerzo, coste). Una aplicación bien explotada debe:
- Automatizar tareas repetitivas
- Reducir errores humanos
- Acelerar procesos frente a métodos manuales
- Generar informes y métricas útiles

### c). Flexibilidad
Capacidad de adaptación ante cambios:
- Actualizaciones del sistema operativo
- Nuevos requisitos de negocio
- Escalabilidad (más usuarios, más datos)
- Integración con nuevas herramientas o APIs

### d). Facilidad de uso y aprendizaje
- Interfaces intuitivas
- Documentación accesible y actualizada
- Curva de aprendizaje razonable
- Soporte y ayuda contextual integrada

## 4.3. Recursos para una correcta explotación

### a). Consultoría de sistemas de información
Las organizaciones pueden recurrir a expertos externos para:
- **Planificación estratégica**: definir hoja de ruta tecnológica alineada con objetivos de negocio
- **Análisis y diseño de procesos**: identificar cuellos de botella, automatizar flujos de trabajo
- **Seguridad informática**: auditorías, políticas de acceso, cifrado, gestión de vulnerabilidades
- **Gestión del conocimiento**: capturar, organizar y compartir el saber organizacional

### b). Ingeniería e implantación de soluciones
Desarrollo e integración de sistemas a medida o parametrización de software existente:
- Uso de herramientas CASE (Computer-Aided Software Engineering)
- Metodologías ágiles o cascada según el proyecto
- Pruebas de aceptación y validación
- Despliegue progresivo (pilotos, rollout por fases)

### c). Formación de usuarios
Elemento crítico y frecuentemente subestimado:
- **Formación inicial**: al implantar una nueva aplicación
- **Formación continua**: con cada actualización o nueva funcionalidad
- **Formación especializada**: para administradores y usuarios avanzados
- **Formatos**: presencial, online, e-learning, tutoriales, simuladores

### d). La empresa "online"
Transformación digital que implica:
- Migración de aplicaciones locales a la nube
- Implementación de e-business y e-commerce
- Teletrabajo y acceso remoto seguro
- Digitalización de procesos (facturación electrónica, firma digital)

### e). Outsourcing (subcontratación)
Delegación de funciones técnicas en terceros especializados:
- **Mantenimiento de infraestructura**: servidores, redes, copias de seguridad
- **Soporte técnico**: helpdesk, mesa de ayuda (Service Desk, niveles L1/L2/L3)
- **Desarrollo y programación**: equipos externos para proyectos puntuales
- **Alojamiento y hosting**: centros de datos, cloud providers (AWS, Azure, GCP)
- **Ventajas**: reducción de costes, acceso a expertise, enfoque en negocio principal
- **Riesgos**: pérdida de control, dependencia del proveedor, seguridad de datos

## 4.4. Operaciones diarias de explotación

### a). Monitorización y seguimiento
- Rendimiento de la aplicación (tiempos de respuesta, uso de CPU/RAM)
- Disponibilidad (uptime, SLA)
- Logs y registros de actividad
- Alertas automáticas ante fallos o anomalías

### b). Mantenimiento
- **Correctivo**: resolución de incidencias y bugs
- **Preventivo**: revisiones periódicas, limpieza de datos, optimización de bases de datos
- **Evolutivo**: actualización a nuevas versiones, implementación de mejoras

### c). Gestión de copias de seguridad
- Políticas de backup (completas, incrementales, diferenciales)
- Frecuencia según criticidad de los datos
- Pruebas de restauración periódicas
- Almacenamiento en ubicaciones separadas (regla 3-2-1: 3 copias, 2 medios, 1 offsite)

### d) Gestión de usuarios y permisos
- Altas, bajas y modificaciones de cuentas
- Asignación de roles y privilegios (principio de mínimo privilegio)
- Revisión periódica de accesos
- Cumplimiento normativo (RGPD, LOPDGDD)

### e). Gestión de licencias
- Control de licencias vigentes y vencimientos
- Cumplimiento de términos de uso
- Optimización de costes (licencias por usuario, concurrentes, por dispositivo)
- Auditorías de software

## 4.5. Métricas e indicadores de explotación (KPIs)

| Indicador | Descripción |
|---|---|
| Disponibilidad | Porcentaje de tiempo operativo (ej. 99,9%) |
| MTBF | Tiempo medio entre fallos |
| MTTR | Tiempo medio de reparación |
| Tasa de error | Número de errores por período |
| Tiempo de respuesta | Latencia media de la aplicación |
| Satisfacción del usuario | Encuestas, NPS, quejas |
| Uso de recursos | CPU, memoria, disco, red |
| Coste por usuario | Ratio coste total / nº de usuarios |

## 4.6. Buenas prácticas en la explotación

- Documentar procedimientos operativos estándar (SOP)
- Mantener un registro de incidencias y su resolución
- Realizar revisiones periódicas de seguridad
- Planificar ventanas de mantenimiento con mínimo impacto
- Establecer planes de contingencia y recuperación ante desastres (DRP)
- Fomentar la comunicación entre equipos técnicos y usuarios finales
- Evaluar periódicamente si la aplicación sigue cubriendo las necesidades actuales


## 5. COMPARTICIÓN DE DATOS

## 5.1. Concepto y contexto

La compartición de datos es la capacidad de un sistema informático de permitir que múltiples procesos, usuarios o aplicaciones accedan simultáneamente a los mismos datos o recursos, garantizando la coherencia, la integridad y la seguridad de la información. Es un pilar fundamental de los sistemas operativos modernos, las redes de ordenadores y la computación distribuida.

La necesidad de compartir datos surge de situaciones cotidianas: varios empleados editando un mismo documento, múltiples procesos accediendo a una base de datos, o equipos de trabajo colaborando en proyectos desde ubicaciones geográficas distintas. Sin mecanismos adecuados de compartición, cada usuario o proceso necesitaría su propia copia independiente de los datos, lo que generaría duplicidad, inconsistencia y desperdicio de recursos.

## 5.2. Sistemas multiusuario

Un sistema multiusuario es aquel que permite que varios usuarios utilicen el mismo sistema informático de forma simultánea o cuasi-simultánea, cada uno con su propio entorno de trabajo, permisos y recursos asignados. Los sistemas operativos como Linux, UNIX, Windows Server y macOS son intrínsecamente multiusuario.

### a). Gestión de usuarios

- **Identificación y autenticación**
  - Nombre de usuario (login/username)
  - Contraseñas (hashing con algoritmos como bcrypt, SHA-256)
  - Autenticación multifactor (MFA): tokens, biométrica, OTP
  - Directorios centralizados: LDAP, Active Directory, Kerberos
  - Certificados digitales

- **Perfiles y entornos individuales**
  - Directorio home personal (/home/usuario en Linux, C:\Users\usuario en Windows)
  - Variables de entorno específicas
  - Configuraciones de usuario (preferencias, temas, accesibilidad)
  - Cuotas de disco por usuario

- **Grupos de usuarios**
  - Agrupación lógica para gestión simplificada de permisos
  - Usuarios pueden pertenecer a múltiples grupos
  - Grupos predeterminados: administradores, invitados, usuarios estándar

### b). Derechos de acceso

Los derechos de acceso determinan qué acciones puede realizar cada usuario sobre cada recurso del sistema (archivos, directorios, dispositivos, servicios).

- **Modelo DAC (Discretionary Access Control)**
  - El propietario del recurso decide quién accede y cómo
  - Implementado en Linux (rwx para owner/group/others) y Windows (ACLs)
  - Flexible pero susceptible a errores de configuración

- **Modelo MAC (Mandatory Access Control)**
  - El sistema operativo impone políticas inmodificables por el usuario
  - Ejemplos: SELinux, AppArmor (Linux), TrustedBSD (FreeBSD)
  - Usado en entornos de alta seguridad

- **Modelo RBAC (Role-Based Access Control)**
  - Los permisos se asignan a roles, y los roles se asignan a usuarios
  - Reduce complejidad administrativa en organizaciones grandes
  - Ejemplo: rol "contable" tiene acceso a ficheros de nóminas; rol "comercial" no

- **Modelo ABAC (Attribute-Based Access Control)**
  - Las decisiones se basan en atributos del usuario, recurso, acción y contexto
  - Ejemplo: "solo se permite acceso al archivo X si el usuario es del departamento Y, está en la red corporativa y son horas laborales"

#### Derechos específicos en sistemas de archivos
- **Lectura (Read)**: visualizar el contenido de un archivo o listar un directorio
- **Escritura (Write)**: modificar el contenido de un archivo o crear/eliminar archivos en un directorio
- **Ejecución (Execute)**: ejecutar un archivo como programa o entrar en un directorio (cd)
- **Borrado (Delete)**: eliminar el archivo o directorio
- **Conocimiento/Lista**: saber que el archivo existe, sin poder leer su contenido
- **Ningún derecho (None)**: acceso denegado totalmente
- **Control total**: todos los derechos posibles, incluyendo modificación de permisos

#### Permisos en Linux
```
-rwxr-xr--  1  user  group  4096  Jan 15 10:30  documento.txt
  │  │  │
  │  │  └─ Otros: lectura (r--)
  │  └─ Grupo: lectura y ejecución (r-x)
  └─ Propietario: lectura, escritura y ejecución (rwx)
```

#### Permisos en Windows (ACLs - Access Control Lists)
- ACE (Access Control Entry): cada entrada individual de una ACL
- DACL (Discretionary ACL): lista de permisos
- SACL (System ACL): auditoría de accesos
- Permisos NTFS: Control total, Modificar, Leer y ejecutar, Leer, Escribir

### c). Gestión de accesos simultáneos

Cuando múltiples usuarios acceden a los mismos datos simultáneamente, es necesario implementar mecanismos que garanticen la consistencia y eviten conflictos.

- **Bloqueo de archivos completo (File-level locking)**
  - Cuando un usuario abre un archivo para escritura, se bloquea para todos los demás
  - Simple pero restrictivo: impide cualquier acceso concurrente
  - Usado en editores de texto simples (Word con bloqueo exclusivo)

- **Bloqueo de registros (Record-level locking)**
  - Solo se bloquea la fila o registro concreto que se está modificando
  - Permite que otros usuarios trabajen con registros diferentes del mismo archivo
  - Fundamental en sistemas de bases de datos relacionales

- **Bloqueo optimista (Optimistic locking)**
  - No se bloquea durante la lectura; al intentar escribir se verifica si el dato cambió
  - Si cambió, se rechaza la operación y se notifica al usuario
  - Útil cuando los conflictos son raros

- **Bloqueo pesimista (Pessimistic locking)**
  - Se bloquea el recurso preventivamente antes de modificarlo
  - Garantiza que nadie más puede modificar el dato durante la edición
  - Útil en entornos con alta contención

- **Control de versiones (Versioning)**
  - Cada modificación crea una nueva versión del archivo
  - Permite recuperar versiones anteriores
  - Herramientas: Git, SVN, sistemas de archivos con snapshot (Btrfs, ZFS)

- **Transacciones ACID (en bases de datos)**
  - **Atomicidad**: la transacción se completa entera o no se ejecuta
  - **Consistencia**: el sistema pasa de un estado válido a otro estado válido
  - **Aislamiento**: las transacciones concurrentes no interfieren entre sí
  - **Durabilidad**: los cambios persisten incluso ante fallos del sistema

- **Niveles de aislamiento en SQL**
  - Read Uncommitted: permite lecturas sucias (dirty reads)
  - Read Committed: solo lee datos confirmados (nivel por defecto en muchos SGBD)
  - Repeatable Read: garantiza que lecturas repetidas devuelven el mismo valor
  - Serializable: ejecución equivalente a secuencial (máximo aislamiento, menor rendimiento)

### d). Compartición de recursos en red

- **SMB/CIFS (Server Message Block / Common Internet File System)**
  - Protocolo estándar en Windows para compartir archivos e impresoras
  - Versiones actuales: SMB 3.x con cifrado integrado

- **NFS (Network File System)**
  - Protocolo de compartición de archivos en entornos UNIX/Linux
  - Versiones: NFSv3 (stateless), NFSv4 (stateful, con seguridad mejorada)

- **FTP/SFTP/FTPS**
  - Protocolos de transferencia de archivos sobre red
  - SFTP: sobre SSH (cifrado); FTPS: FTP sobre TLS/SSL

- **WebDAV (Web Distributed Authoring and Versioning)**
  - Extensión de HTTP que permite edición colaborativa de archivos en servidores web

### e) Problemas asociados a la compartición multiusuario

- **Condiciones de carrera (Race conditions)**: el resultado depende del orden de ejecución de procesos concurrentes
- **Interbloqueo (Deadlock)**: dos o más procesos se bloquean mutuamente esperando recursos
- **Inanición (Starvation)**: un proceso nunca obtiene acceso al recurso porque otros procesos lo monopolizan
- **Consistencia de caché**: cuando varios nodos almacenan copias cacheadas de los mismos datos, mantener la coherencia es complejo

## 5.3. Sistemas multitarea

Un sistema multitarea es capaz de ejecutar múltiples procesos o hilos de forma aparentemente simultánea, compartiendo los recursos del sistema (CPU, memoria, E/S, datos). La multitarea puede ser:

- **Preemptiva**: el sistema operativo decide cuándo cambia de proceso (time-slicing)
- **Cooperativa**: cada proceso cede voluntariamente el control al sistema

### a). Recursos compartidos en sistemas multitarea

- **Procesador (CPU)**: se distribuye entre procesos mediante planificación (scheduling)
- **Memoria**: espacio de direcciones, memoria virtual, memoria compartida
- **Dispositivos de E/S**: discos, impresoras, interfaces de red
- **Programas**: librerías compartidas, ejecutables en memoria
- **Datos**: archivos, variables compartidas, buffers, pipes

### b). Niveles de protección

La compartición de recursos introduce riesgos de seguridad y estabilidad. El sistema debe implementar mecanismos de protección a distintos niveles:

- **Ninguna protección**
  - Todos los procesos acceden libremente a cualquier recurso
  - Típico de sistemas antiguos como MS-DOS o CP/M
  - Un proceso erróneo puede corromper la memoria de otro o bloquear el sistema

- **Aislamiento (Isolation)**
  - Cada proceso opera en su propio espacio de direcciones
  - Ningún recurso se comparte entre procesos
  - Máxima seguridad pero mínima colaboración
  - Implementado con protección de memoria hardware (MMU)

- **Compartir todo o nada**
  - Los procesos pueden compartir todos los recursos o ninguno
  - Sin granularidad intermedia
  - Simple pero poco flexible

- **Compartir por limitación del acceso**
  - Se definen permisos específicos para cada recurso y cada proceso
  - Modelo de matriz de acceso (Matriz de protección)
  - Filas: dominios (procesos); Columnas: objetos (recursos)
  - Cada celda: conjunto de derechos (lectura, escritura, ejecución)

- **Compartir por capacidades dinámicas (Capability-based)**
  - Cada proceso posee "capacidades" (tokens) que le otorgan derechos sobre recursos específicos
  - Las capacidades pueden transferirse entre procesos
  - Los derechos son dinámicos: se pueden crear, revocar o delegar en tiempo de ejecución
  - Implementado en sistemas como Fuchsia OS, seL4

- **Uso limitado de un objeto**
  - Se permite el acceso pero con restricciones cuantitativas
  - Ejemplo: límite de tiempo de CPU, cuota de disco, número máximo de conexiones
  - Implementado mediante contadores y semáforos

### c). Mecanismos de sincronización entre procesos

- **Semáforos** (Dijkstra)
  - Variables enteras que controlan el acceso a recursos compartidos
  - Operaciones: wait (P) y signal (V)
  - Pueden ser binarios (mutex) o contadores

- **Mutex (Mutual Exclusion)**
  - Garantiza que solo un proceso accede a la sección crítica
  - El proceso que adquiere el mutex debe liberarlo

- **Monitores**
  - Construcción de alto nivel que encapsula datos compartidos y sus operaciones
  - Solo un proceso puede estar activo dentro del monitor en un momento dado

- **Pipes y tuberías**
  - Canales de comunicación unidireccionales entre procesos
  - Pipes anónimos: entre procesos padre-hijo
  - Pipes con nombre (FIFO en Linux): entre procesos no relacionados

- **Memoria compartida**
  - Región de memoria accesible por múltiples procesos
  - Mecanismo de IPC más rápido pero requiere sincronización explícita

- **Señales**
  - Notificaciones asíncronas entre procesos (SIGTERM, SIGKILL, SIGUSR1)

### d). Gestión de memoria en sistemas multitarea

- **Memoria virtual**: cada proceso cree que tiene toda la memoria disponible
- **Paginación**: división de memoria en páginas de tamaño fijo
- **Segmentación**: división lógica por tipo de contenido (código, datos, pila)
- **Swapping**: intercambio de páginas entre RAM y disco cuando la memoria física se agota
- **Copy-on-Write**: las páginas se comparten hasta que un proceso intenta modificarlas

## 5.4. Compartición de datos en la nube

La computación en la nube (cloud computing) permite compartir datos y aplicaciones a través de Internet, eliminando la necesidad de infraestructura local. Los datos se almacenan en centros de datos distribuidos globalmente y se accede a ellos mediante protocolos web.

### a). Modelos de servicio

- **SaaS (Software as a Service)**
  - Aplicaciones completas accesibles desde el navegador
  - Ejemplos: Google Workspace, Microsoft 365, Salesforce, Slack
  - El usuario no gestiona infraestructura ni software base

- **PaaS (Platform as a Service)**
  - Plataformas de desarrollo y ejecución en la nube
  - Ejemplos: Google App Engine, Heroku, AWS Elastic Beanstalk
  - Los desarrolladores despliegan aplicaciones sin gestionar servidores

- **IaaS (Infrastructure as a Service)**
  - Infraestructura virtualizada bajo demanda (máquinas virtuales, almacenamiento, redes)
  - Ejemplos: AWS EC2, Google Compute Engine, Azure Virtual Machines
  - El usuario gestiona el sistema operativo y las aplicaciones

### b). Plataformas de compartición de datos en la nube

#### Office 365 (Microsoft 365)
- **Descripción**: Suite ofimática completa en la nube
- **Aplicaciones incluidas**: Word Online, Excel Online, PowerPoint Online, Outlook, Teams
- **Compartición**: enlaces con permisos (solo lectura, edición), control de versiones, coautoría en tiempo real
- **Almacenamiento**: SharePoint (equipos) y OneDrive (personal)
- **Seguridad**: cifrado en tránsito (TLS) y en reposo, cumplimiento de normativas (ISO 27001, SOC 2)
- **Modelo de precios**: Suscripción mensual/anual por usuario

#### OneDrive
- **Descripción**: Servicio de almacenamiento en la nube de Microsoft
- **Espacio gratuito**: 5 GB
- **Integración**: nativa con Windows 10/11 y Microsoft 365
- **Funcionalidades**: sincronización de carpetas, compartición por enlace, historial de versiones, Paperplane (recuperación de archivos eliminados)
- **Límites**: archivos de hasta 250 GB

#### Google Drive
- **Descripción**: Servicio de almacenamiento y colaboración de Google
- **Espacio gratuito**: 15 GB (compartido con Gmail y Google Photos)
- **Aplicaciones integradas**: Google Docs, Sheets, Slides, Forms, Drawings
- **Colaboración**: coautoría en tiempo real, comentarios, sugerencias, chat integrado
- **Compartición**: control granular de permisos (lector, comentador, editor), enlaces con caducidad
- **APIs**: extensas para integración con aplicaciones de terceros

#### Dropbox
- **Descripción**: Servicio de sincronización y almacenamiento de archivos
- **Espacio gratuito**: 2 GB
- **Fortalezas**: sincronización rápida (delta sync), interfaz limpia, integración con múltiples plataformas
- **Funcionalidades empresariales**: Dropbox Business, Smart Sync, Paper (documentos colaborativos)
- **Seguridad**: cifrado AES-256, autenticación en dos pasos, recuperación de archivos hasta 180 días

#### Zyncro
- **Descripción**: Plataforma de colaboración empresarial
- **Funcionalidades**: almacenamiento, mensajería corporativa, gestión de tareas, gestión de reuniones, wiki corporativa
- **Enfoque**: intranet social para empresas, con control total por parte de la organización
- **Ventaja**: todos los datos residen en servidores controlados por la empresa (on-premise o cloud privada)

#### Salesforce
- **Descripción**: Plataforma CRM (Customer Relationship Management) en la nube
- **Funcionalidades**: gestión de clientes potenciales, seguimiento de ventas, automatización de marketing, análisis y reporting
- **Compartición**: datos de clientes compartidos entre equipos de ventas, marketing y soporte
- **Personalización**: AppExchange (marketplace de aplicaciones), Force.com (plataforma de desarrollo)

### c). Consideraciones de seguridad en la nube

- **Cifrado de datos**
  - En tránsito: TLS/SSL para comunicaciones
  - En reposo: AES-256 en los servidores del proveedor
  - Gestión de claves: propias (BYOK) o del proveedor

- **Control de acceso**
  - Autenticación multifactor (MFA)
  - Políticas de contraseñas robustas
  - Revisión periódica de permisos
  - Principio de mínimo privilegio

- **Cumplimiento normativo**
  - RGPD (Reglamento General de Protección de Datos) en la UE
  - LOPDGDD (Ley Orgánica de Protección de Datos) en España
  - HIPAA (salud), PCI-DSS (pagos), SOX (financiero) según sector
  - Cláusulas contractuales estándar para transferencias internacionales

- **Riesgos específicos**
  - Pérdida de datos por eliminación accidental o ataque
  - Acceso no autorizado por credenciales comprometidas
  - Vendor lock-in (dependencia del proveedor)
  - Interrupción del servicio (caída del proveedor)
  - Cumplimiento de la soberanía de datos (ubicación geográfica de los servidores)

- **Buenas prácticas**
  - Copias de seguridad independientes del proveedor (backup 3-2-1)
  - Políticas de compartición claras y revisadas periódicamente
  - Auditorías de acceso y actividad
  - Formación de usuarios en seguridad en la nube
  - Plan de respuesta ante incidentes

### d) Tendencias en compartición de datos

- **Almacenamiento híbrido**: combinación de almacenamiento local y en la nube
- **Edge computing**: procesamiento de datos cerca del origen, reduciendo latencia
- **Zero Trust**: modelo de seguridad que no confía en ningún usuario o dispositivo por defecto
- **Sincronización peer-to-peer**: compartir datos directamente entre dispositivos sin servidor central
- **Blockchain para integridad**: uso de registros distribuidos para garantizar la inmutabilidad de datos compartidos
- **Espacios de trabajo colaborativos integrados**: plataformas como Notion, Miro, Figma que combinan almacenamiento, edición y comunicación en un solo entorno


## 6. CONCLUSIÓN

## 7. BIBLIOGRAFÍA