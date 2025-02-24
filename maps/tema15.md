# Tema 15: Sistemas Operativos

## 1. Introducción
- Importancia de los sistemas operativos
- Relación con la evolución del hardware
- Ejemplo: Windows 11 IoT en dispositivos embebidos

## 2. Sistemas Operativos

### 2.1. Componentes
- **Núcleo**: Interactúa con el hardware y gestiona recursos
- **Servicios**: Controlados por el nucleo
  - Gestión procesos: creación y eliminación de procesos. Comunicacion y sincronización.
  - Memoria: Asignación de memoria a los procesos que lo requieren
  - E/S: Interfaz para el control de los dispositivos hardware E/S
  - Archivos: Gestión del almacenamiento
- **Interfaces**: Permiten la interacción usuario-sistema
  - CLI (Bash, PowerShell) 
  - GUI (Windows, macOS)

### 2.2. Estructura
#### 2.2.1. Sistemas Monolíticos
- Todo el sistema en un solo programa en modo kernel
- Ejemplo: Linux, FreeBSD

#### 2.2.2. Sistemas de Capas
- Organización jerárquica de funciones
- Ejemplo: THE, MULTICS

#### 2.2.3. Microkernels
- Dividen el sistema en módulos pequeños y confiables
- Ejemplo: AIX, Symbian

#### 2.2.4. Modelo Cliente-Servidor
- Diferencia entre clientes y servidores de procesos
- Ejemplo: Diseño de Windows NT

#### 2.2.5. Máquinas Virtuales
- Hipervisores permiten múltiples SO en un solo hardware
- Tipo 1 (VMware ESXi) vs Tipo 2 (VirtualBox)

#### 2.2.6. Núcleos Híbridos (Macrokernels)
- Combinación de monolítico y microkernel
- Ejemplo: Windows NT, macOS

### 2.3. Funciones
- **Desde el usuario**: Facilidad de uso, ejecución de programas
- **Desde la máquina**: Administración eficiente de recursos

### 2.4. Tipos de SO
#### 2.4.1. Según el Número de Usuarios
- **Monousuario** (Windows 98)
- **Multiusuario** (Linux, Unix)

#### 2.4.2. Según el Número de Procesos/Tareas
- **Monotarea** (MS-DOS)
- **Multitarea** (Windows, Linux)

#### 2.4.3. Según el Número de Procesadores
- **Monoprocesador**
- **Multiprocesador** (Linux en servidores)

#### 2.4.4. Según la Forma de Ofrecer Servicios
- **Red**: Conectividad básica (Windows Server)
- **Distribuido**: Integración transparente de recursos (Google Cloud)

## 3. Sistemas Operativos Actuales
- **Windows 11** (Microsoft)
- **macOS Sonoma 14.5** (Apple)
- **Ubuntu 24.04 LTS, Debian 12.5, openSuse 15** (Linux)

## 4. Aplicación en Contexto Escolar y Laboral
### Contexto Escolar
- Enseñanza básica en primaria y secundaria
- Formación profesional en administración de sistemas

### Contexto Laboral
- Administración de servidores y redes
- Desarrollo de software multiplataforma
- Innovaciones en IoT y virtualización

## 5. Conclusión
- Papel fundamental del SO en la gestión de hardware y software
- Su estudio es esencial en informática y comunicaciones

## 6. Bibliografía
- Tanenbaum, A. (2023). *Modern Operating Systems*. Pearson.
- Stallings, W. (2017). *Operating Systems: Internals and Design Principles*. Pearson.
- Prieto, A. (2006). *Introducción a la informática*. McGraw-Hill.
  
### Webs de interés
- [Apple - macOS](https://www.apple.com/macos)
- [Debian](https://www.debian.org/)
- [Microsoft - Windows](https://www.microsoft.com/windows/)
- [Ubuntu](https://ubuntu.com/)
- [VMware](https://www.vmware.com/)
- [VirtualBox](https://www.virtualbox.org/)

