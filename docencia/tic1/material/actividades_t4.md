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
