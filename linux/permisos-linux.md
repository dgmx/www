---
title: 5. Permisos Linux
parent: "Linux"
---

# Guía Completa de Permisos en Linux

## Introducción

En sistemas Linux y Unix, cada archivo y directorio tiene permisos que determinan quién puede leer, escribir o ejecutar ese archivo. Existen dos formas de modificar estos permisos: **modo simbólico** y **modo numérico**.

[![Permisos](permisos.png)]()



## Conceptos Básicos

### Tipos de Usuarios

- **u** (user/owner): Usuario propietario del archivo
- **g** (group): Grupo al que pertenece el archivo
- **o** (others): Otros usuarios del sistema
- **a** (all): Todos los usuarios (propietario, grupo y otros)

### Tipos de Permisos

- **r** (read): Permiso de lectura - permite ver el contenido del archivo
- **w** (write): Permiso de escritura - permite modificar el archivo
- **x** (execute): Permiso de ejecución - permite ejecutar el archivo como programa

---

## Modo Simbólico

El modo simbólico utiliza letras y símbolos para modificar permisos de forma intuitiva.

### Sintaxis Básica

```bash
chmod [usuario][operador][permiso] nombre-archivo
```

### Operadores

- **+** : Añade permisos
- **-** : Quita permisos
- **=** : Establece permisos exactos (elimina los demás)

### Ejemplos Prácticos

#### Dar acceso completo al propietario
```bash
chmod u+rwx archivo.txt
```
Añade permisos de lectura, escritura y ejecución para el usuario propietario.

#### Dar acceso de lectura a todos y quitar ejecución
```bash
chmod ugo+r-x archivo.txt
```
Añade permiso de lectura al propietario, grupo y otros, mientras elimina el permiso de ejecución para todos.

#### Eliminar todos los permisos para otros
```bash
chmod o-rwx archivo.txt
```
Quita lectura, escritura y ejecución para usuarios que no son el propietario ni están en el grupo.

#### Dar permisos de lectura y escritura solo al grupo
```bash
chmod g+rw archivo.txt
```

#### Establecer permisos exactos
```bash
chmod u=rwx,g=rx,o=r archivo.txt
```
El propietario tiene todos los permisos, el grupo puede leer y ejecutar, otros solo pueden leer.

---

## Modo Numérico

El modo numérico representa los permisos mediante números octales (0-7). Cada permiso tiene un valor:

- **4** = lectura (r)
- **2** = escritura (w)
- **1** = ejecución (x)
- **0** = sin permisos

### Cálculo de Permisos

Los permisos se suman para obtener un número del 0 al 7: (Octal)

| Número | Permisos | Cálculo | Significado |
|--------|----------|---------|-------------|
| 0 | --- | 0+0+0 | Sin permisos |
| 1 | --x | 0+0+1 | Solo ejecución |
| 2 | -w- | 0+2+0 | Solo escritura |
| 3 | -wx | 0+2+1 | Escritura y ejecución |
| 4 | r-- | 4+0+0 | Solo lectura |
| 5 | r-x | 4+0+1 | Lectura y ejecución |
| 6 | rw- | 4+2+0 | Lectura y escritura |
| 7 | rwx | 4+2+1 | Todos los permisos |

### Sintaxis

```bash
chmod [propietario][grupo][otros] nombre-archivo
```

### Ejemplos Prácticos

#### Acceso completo para todos (777)
```bash
chmod 777 archivo.txt
```
- Propietario: rwx (7 = 4+2+1)
- Grupo: rwx (7 = 4+2+1)
- Otros: rwx (7 = 4+2+1)

**⚠️ Advertencia:** Este permiso es muy inseguro, úsalo solo cuando sea absolutamente necesario.

#### Lectura y ejecución para todos (555)
```bash
chmod 555 archivo.txt
```
- Propietario: r-x (5 = 4+1)
- Grupo: r-x (5 = 4+1)
- Otros: r-x (5 = 4+1)

Nadie puede modificar el archivo, ideal para scripts de solo lectura.

#### Lectura y escritura para propietario y grupo, sin acceso para otros (660)
```bash
chmod 660 archivo.txt
```
- Propietario: rw- (6 = 4+2)
- Grupo: rw- (6 = 4+2)
- Otros: --- (0 = sin permisos)

#### Permisos típicos para archivos ejecutables (755)
```bash
chmod 755 script.sh
```
- Propietario: rwx (7 = 4+2+1)
- Grupo: r-x (5 = 4+1)
- Otros: r-x (5 = 4+1)

#### Permisos seguros para archivos privados (600)
```bash
chmod 600 privado.txt
```
- Propietario: rw- (6 = 4+2)
- Grupo: --- (0 = sin permisos)
- Otros: --- (0 = sin permisos)

---

## Comandos Relacionados

### Cambiar Propietario y Grupo

#### chown - Cambiar propietario
```bash
chown nuevo-propietario archivo.txt
```

#### chown - Cambiar propietario y grupo
```bash
chown nuevo-propietario:nuevo-grupo archivo.txt
```

Si no especificas el grupo (solo pones el propietario), el grupo permanece sin cambios.

#### chgrp - Cambiar solo el grupo
```bash
chgrp nuevo-grupo archivo.txt
```

Cambia el grupo del archivo sin modificar su propietario.

### Opciones Útiles

#### Recursivo (-R)
Aplica los cambios a todos los archivos y subdirectorios:
```bash
chmod -R 755 /ruta/directorio/
chown -R usuario:grupo /ruta/directorio/
```

#### Verbose (-v)
Muestra información detallada de los cambios:
```bash
chmod -v 644 archivo.txt
```

---

## Ver Permisos Actuales

### Comando ls -l
```bash
ls -l archivo.txt
```

Salida ejemplo:
```
-rw-r--r-- 1 usuario grupo 1234 ene 20 10:30 archivo.txt
```

Desglose:
- `-` : tipo de archivo (- = archivo, d = directorio, l = enlace)
- `rw-` : permisos del propietario (lectura y escritura)
- `r--` : permisos del grupo (solo lectura)
- `r--` : permisos de otros (solo lectura)
- `usuario` : propietario del archivo
- `grupo` : grupo del archivo

---

## Permisos Comunes y Sus Usos

| Permiso | Numérico | Uso típico |
|---------|----------|------------|
| rwx------ | 700 | Archivos privados ejecutables |
| rw------- | 600 | Archivos privados de datos |
| rwxr-xr-x | 755 | Scripts públicos |
| rw-rw-r-- | 664 | Archivos compartidos en grupo |
| rw-r--r-- | 644 | Archivos de lectura pública |
| rwxrwxrwx | 777 | Acceso total (⚠️ inseguro) |

---

## Consejos de Seguridad

1. **Nunca uses 777** a menos que sea absolutamente necesario y temporal
2. **Protege archivos sensibles** con permisos 600 o 400
3. **Directorios compartidos** suelen usar 755 o 775
4. **Archivos de configuración** típicamente usan 644
5. **Scripts ejecutables** generalmente necesitan 755 o 700

---

## Ejemplos Prácticos Completos

### Crear un script ejecutable
```bash
# Crear el archivo
touch mi-script.sh

# Darle permisos de ejecución
chmod +x mi-script.sh

# O de forma numérica
chmod 755 mi-script.sh
```

### Compartir archivos con un grupo
```bash
# Cambiar el grupo del archivo
chgrp desarrolladores proyecto.txt

# Dar permisos de lectura y escritura al grupo
chmod g+rw proyecto.txt
```

### Proteger archivo confidencial
```bash
# Solo el propietario puede leer y escribir
chmod 600 secreto.txt

# Verificar
ls -l secreto.txt
```

---

## Resumen Rápido

**Modo Simbólico:**
- Intuitivo y fácil de leer
- Útil para añadir/quitar permisos específicos
- Ejemplo: `chmod u+x,g-w archivo.txt`

**Modo Numérico:**
- Rápido y preciso
- Establece todos los permisos de una vez
- Ejemplo: `chmod 644 archivo.txt`

**Elige el método que te resulte más cómodo según la situación. Ambos son igualmente válidos y poderosos.**

---

*Última actualización: Enero 2026*