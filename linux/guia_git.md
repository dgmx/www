---
title: 03. Guia de Git
parent: "Linux"
---
# 🌱 Guía de Comandos Git – De Principiante a Avanzado

## 1. Configuración Inicial
Antes de usar Git, debes configurarlo en tu máquina:

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git --version` | Verificar la versión instalada. | `git --version` |
| `git config --global user.name "Tu Nombre"` | Configurar el nombre de usuario global. | `git config --global user.name "Juan Pérez"` |
| `git config --global user.email "tu@email.com"` | Configurar tu correo. | `git config --global user.email "juan@correo.com"` |
| `git config --list` | Ver la configuración actual. | `git config --list` |

---

## 2. Crear y Clonar Repositorios

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git init` | Inicializa un nuevo repositorio en la carpeta actual. | `git init` |
| `git clone <url>` | Clona un repositorio remoto a tu máquina. | `git clone https://github.com/usuario/proyecto.git` |

---

## 3. Flujo Básico de Trabajo (Add → Commit → Push)
**Flujo típico:**  
`git add` → `git commit` → `git push`

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git status` | Ver el estado de los archivos. | `git status` |
| `git add <archivo>` | Agregar un archivo específico al área de *staging*. | `git add index.html` |
| `git add .` | Agregar **todos los archivos modificados**. | `git add .` |
| `git commit -m "mensaje"` | Confirmar cambios con un mensaje. | `git commit -m "Agregado login"` |
| `git log` | Ver historial de commits. | `git log` |
| `git push origin main` | Subir cambios a la rama `main` del remoto. | `git push origin main` |

---

## 4. Trabajando con Ramas (Branches)

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git branch` | Lista las ramas existentes. | `git branch` |
| `git branch <nombre>` | Crear una nueva rama. | `git branch feature-login` |
| `git checkout <rama>` | Cambiar de rama. | `git checkout feature-login` |
| `git checkout -b <rama>` | Crear y cambiar a la rama nueva en un solo paso. | `git checkout -b hotfix-error` |
| `git merge <rama>` | Fusionar una rama con la actual. | `git merge feature-login` |
| `git branch -d <rama>` | Eliminar una rama local. | `git branch -d feature-login` |

💡 **Tip:** Para ramas remotas usa:
```bash
git push origin feature-login
git push origin --delete feature-login
```

---

## 5. Trabajar con Remotos

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git remote -v` | Ver repositorios remotos configurados. | `git remote -v` |
| `git remote add origin <url>` | Conectar repo local a uno remoto. | `git remote add origin https://github.com/user/proyecto.git` |
| `git pull origin main` | Descargar cambios remotos y fusionarlos. | `git pull origin main` |
| `git fetch` | Descargar cambios remotos **sin fusionar**. | `git fetch` |

---

## 6. Deshacer y Revertir Cambios

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git checkout -- <archivo>` | Deshacer cambios en un archivo antes de hacer *add*. | `git checkout -- index.html` |
| `git reset HEAD <archivo>` | Quitar un archivo del área de *staging*. | `git reset HEAD index.html` |
| `git reset --soft HEAD~1` | Deshacer último commit, manteniendo cambios en staging. | `git reset --soft HEAD~1` |
| `git reset --hard HEAD~1` | Deshacer commit y borrar cambios por completo. **Cuidado**. | `git reset --hard HEAD~1` |
| `git revert <id_commit>` | Crear un commit nuevo que deshace uno previo. | `git revert a1b2c3d` |

---

## 7. Stash (Guardar cambios sin hacer commit)

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git stash` | Guardar cambios temporales. | `git stash` |
| `git stash list` | Ver lista de stashes. | `git stash list` |
| `git stash pop` | Recuperar último stash y eliminarlo de la lista. | `git stash pop` |
| `git stash apply stash@{2}` | Recuperar un stash específico sin borrarlo. | `git stash apply stash@{2}` |

---

## 8. Comparar Cambios

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git diff` | Ver cambios no añadidos al *staging*. | `git diff` |
| `git diff --staged` | Ver cambios que ya están en *staging*. | `git diff --staged` |
| `git log --oneline` | Ver historial resumido. | `git log --oneline` |
| `git log --graph --oneline --decorate --all` | Ver ramas gráficamente. | `git log --graph --oneline --decorate --all` |

---

## 9. Etiquetas (Tags)

Las **tags** se usan para marcar versiones importantes, como `v1.0`.

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git tag` | Lista todas las etiquetas. | `git tag` |
| `git tag v1.0` | Crear una etiqueta simple. | `git tag v1.0` |
| `git tag -a v1.0 -m "Versión estable"` | Crear una etiqueta anotada con mensaje. | `git tag -a v1.0 -m "Versión estable"` |
| `git push origin v1.0` | Subir una etiqueta al remoto. | `git push origin v1.0` |

---

## 10. Comandos Avanzados

| Comando | Descripción | Ejemplo |
|----------|-------------|---------|
| `git rebase <rama>` | Reaplicar commits sobre otra rama. | `git rebase main` |
| `git cherry-pick <id_commit>` | Copiar un commit específico a la rama actual. | `git cherry-pick a1b2c3d` |
| `git bisect start` | Buscar commit que introdujo un bug. | `git bisect start` |
| `git blame <archivo>` | Ver quién modificó cada línea de un archivo. | `git blame index.html` |
| `git clean -f` | Eliminar archivos sin seguimiento (*untracked*). **Cuidado**. | `git clean -f` |

---

## 11. Buenas Prácticas

- Usar commits pequeños y descriptivos.  
- Crear ramas para nuevas funcionalidades (`feature/`) y bugs (`fix/`).  
- Usar `.gitignore` para excluir archivos innecesarios:
  ```
  node_modules/
  *.log
  .env
  ```

---

## 12. Flujo de Trabajo Típico
```bash
# Clonar proyecto
git clone https://github.com/user/proyecto.git
cd proyecto

# Crear rama para nueva funcionalidad
git checkout -b feature-login

# Trabajar y guardar cambios
git add .
git commit -m "Agregada funcionalidad de login"

# Subir cambios al remoto
git push origin feature-login

# Fusionar cambios en main
git checkout main
git merge feature-login
git push origin main
```
