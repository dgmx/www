---
title: 1. Comandos básicos Linux
parent: "Linux"
---


# 📘 **Listado de Comandos Linux por Categorías**

## 1. **Navegación por el sistema de archivos** 🌳
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `pwd` | Muestra la ruta del directorio actual. | `pwd` |
| `ls` | Lista archivos y carpetas. | `ls -l` |
| `cd` | Cambia de directorio. | `cd Documentos` |
| `tree` | Muestra estructura de carpetas en forma de árbol. | `tree` |

---

## 2. **Gestión de archivos y directorios** 📂
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `touch` | Crea un archivo vacío. | `touch notas.txt` |
| `mkdir` | Crea un directorio. | `mkdir proyectos` |
| `cp` | Copia archivos o carpetas. | `cp archivo.txt copia.txt` |
| `mv` | Mueve o renombra archivos/carpetas. | `mv archivo.txt carpeta/` |
| `rm` | Borra archivos. | `rm archivo.txt` |
| `rm -r` | Borra carpetas y su contenido. ⚠️ | `rm -r carpeta` |
| `nano` | Editor de texto en terminal. | `nano notas.txt` |
| `cat` | Muestra el contenido de un archivo. | `cat notas.txt` |
| `more` | Muestra texto página por página. | `more documento.txt` |
| `less` | Similar a `more`, permite desplazamiento. | `less documento.txt` |

---

## 3. **Permisos y propietarios** 🔐
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `ls -l` | Muestra permisos y detalles de archivos. | `ls -l` |
| `chmod` | Cambia permisos de un archivo. | `chmod 755 script.sh` |
| `chown` | Cambia el propietario de un archivo. | `chown usuario archivo.txt` |
| `chgrp` | Cambia el grupo de un archivo. | `chgrp alumnos archivo.txt` |

---

## 4. **Búsqueda de archivos y texto** 🔍
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `find` | Busca archivos y directorios. | `find /home -name "notas.txt"` |
| `locate` | Busca archivos usando una base de datos. | `locate notas.txt` |
| `grep` | Busca texto dentro de archivos. | `grep "palabra" archivo.txt` |
| `grep -r` | Busca texto en carpetas recursivamente. | `grep -r "error" /var/log` |

---

## 5. **Procesos y sistema** ⚙️
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `ps` | Muestra procesos activos. | `ps aux` |
| `top` | Monitorea procesos en tiempo real. | `top` |
| `htop` | Similar a `top`, pero más visual. | `htop` |
| `kill` | Finaliza procesos por PID. | `kill 1234` |
| `uptime` | Tiempo encendido del sistema. | `uptime` |
| `free` | Muestra memoria usada y libre. | `free -h` |
| `df` | Muestra espacio en disco. | `df -h` |
| `uname` | Información del sistema. | `uname -a` |

---

## 6. **Red y conectividad** 🌐
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `ping` | Verifica conectividad a un host. | `ping google.com` |
| `ifconfig` *(obsoleto, usar `ip`)* | Muestra configuración de red. | `ifconfig` |
| `ip a` | Muestra interfaces de red. | `ip a` |
| `netstat` *(obsoleto, usar `ss`)* | Muestra conexiones de red. | `netstat -tuln` |
| `ss` | Alternativa moderna a `netstat`. | `ss -tuln` |
| `curl` | Descarga contenido desde la web. | `curl https://example.com` |
| `wget` | Descarga archivos desde la web. | `wget archivo.zip` |

---

## 7. **Gestión de paquetes** 📦
*(Varía según la distribución)*  

| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `apt update` | Actualiza lista de paquetes (Debian/Ubuntu). | `sudo apt update` |
| `apt upgrade` | Actualiza programas instalados. | `sudo apt upgrade` |
| `apt install` | Instala un paquete. | `sudo apt install htop` |
| `apt remove` | Elimina un paquete. | `sudo apt remove nano` |
| `dnf install` | Instala paquetes (Fedora/RHEL). | `sudo dnf install htop` |

---

## 8. **Compresión y descompresión** 📦
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `tar -cvf` | Crea un archivo `.tar`. | `tar -cvf backup.tar carpeta/` |
| `tar -xvf` | Extrae un archivo `.tar`. | `tar -xvf backup.tar` |
| `gzip` | Comprime archivos `.gz`. | `gzip archivo.txt` |
| `gunzip` | Descomprime archivos `.gz`. | `gunzip archivo.txt.gz` |
| `zip` | Comprime en `.zip`. | `zip archivo.zip archivo.txt` |
| `unzip` | Descomprime `.zip`. | `unzip archivo.zip` |

---

## 9. **Comandos para usuarios y grupos** 👥
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `whoami` | Muestra el usuario actual. | `whoami` |
| `who` | Lista usuarios conectados. | `who` |
| `id` | Muestra UID y GID del usuario actual. | `id` |
| `adduser` | Crea un nuevo usuario. | `sudo adduser alumno` |
| `passwd` | Cambia contraseña de usuario. | `passwd` |
| `groups` | Muestra grupos a los que pertenece un usuario. | `groups` |

---

## 10. **Superusuario y administración** 🛡️
| **Comando** | **Descripción** | **Ejemplo** |
|-------------|----------------|-------------|
| `sudo` | Ejecuta comandos como administrador. | `sudo apt update` |
| `su` | Cambia a otro usuario (superusuario). | `su root` |
| `history` | Muestra historial de comandos. | `history` |
| `clear` | Limpia la terminal. | `clear` |

---

## 11. **Atajos útiles en terminal** ⌨️
| **Tecla** | **Función** |
|------------|------------|
| `Ctrl + C` | Detiene un comando en ejecución. |
| `Ctrl + Z` | Suspende un proceso. |
| `Ctrl + D` | Cierra la sesión actual. |
| `↑` / `↓` | Navega por historial de comandos. |
| `Tab` | Autocompleta nombres de archivos/carpetas. |
