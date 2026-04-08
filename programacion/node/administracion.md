# Manual de Administración de Node.js

::: info ℹ️

Comandos básicos para el administrador

:::
---

## 1. Instalación y Gestión de Versiones

### 1.1 Verificar instalación

| Comando | Descripción |
|---------|-------------|
| `node -v` | Muestra la versión instalada de Node.js |
| `npm -v` | Muestra la versión del gestor de paquetes npm |
| `npx -v` | Muestra la versión de npx (ejecutor de paquetes) |
| `node --version` | Versión completa de Node.js |
| `which node` | Ruta del binario de Node (Linux/macOS) |
| `where node` | Ruta del binario de Node (Windows) |

### 1.2 NVM — Node Version Manager

NVM permite instalar y cambiar entre múltiples versiones de Node.js:

| Comando | Descripción |
|---------|-------------|
| `nvm install 20` | Instala Node.js versión 20 (LTS) |
| `nvm install --lts` | Instala la última versión LTS |
| `nvm use 20` | Activa la versión 20 en la sesión actual |
| `nvm use --lts` | Activa la versión LTS actual |
| `nvm ls` | Lista todas las versiones instaladas localmente |
| `nvm ls-remote` | Lista versiones disponibles para instalar |
| `nvm alias default 20` | Establece la versión 20 como predeterminada |
| `nvm current` | Muestra la versión activa actualmente |
| `nvm uninstall 18` | Desinstala una versión específica |

::: info 💡 

**Nota:** Se recomienda siempre usar versiones LTS (Long Term Support) en entornos de producción.

:::
---

## 2. Gestión de Paquetes con npm

### 2.1 Inicializar un proyecto

| Comando | Descripción |
|---------|-------------|
| `npm init` | Inicia un proyecto de forma interactiva |
| `npm init -y` | Inicia el proyecto con valores predeterminados |
| `npm init --scope=@mi-org` | Inicia un paquete con alcance de organización |

### 2.2 Instalar paquetes

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala todas las dependencias del package.json |
| `npm install express` | Instala un paquete como dependencia |
| `npm install -D eslint` | Instala como dependencia de desarrollo |
| `npm install -g nodemon` | Instala un paquete de forma global |
| `npm install express@4.18.2` | Instala una versión específica |
| `npm install --production` | Instala solo dependencias de producción |
| `npm ci` | Instalación limpia y reproducible (ideal para CI/CD) |

### 2.3 Actualizar y desinstalar

| Comando | Descripción |
|---------|-------------|
| `npm update` | Actualiza todos los paquetes según semver |
| `npm update express` | Actualiza un paquete específico |
| `npm uninstall express` | Desinstala un paquete |
| `npm uninstall -g nodemon` | Desinstala un paquete global |
| `npm outdated` | Lista los paquetes con actualizaciones disponibles |

### 2.4 Auditoría y seguridad

| Comando | Descripción |
|---------|-------------|
| `npm audit` | Analiza vulnerabilidades en las dependencias |
| `npm audit fix` | Corrige vulnerabilidades automáticamente |
| `npm audit fix --force` | Fuerza correcciones (puede romper compatibilidad) |
| `npm audit --json` | Resultado del audit en formato JSON |

### 2.5 Información de paquetes

| Comando | Descripción |
|---------|-------------|
| `npm list` | Lista dependencias del proyecto actual |
| `npm list --depth=0` | Lista solo dependencias de primer nivel |
| `npm list -g` | Lista paquetes instalados globalmente |
| `npm info express` | Muestra información detallada de un paquete |
| `npm search lodash` | Busca paquetes en el registro de npm |
| `npm view express version` | Muestra la versión publicada más reciente |

### 2.6 Scripts y ejecución

| Comando | Descripción |
|---------|-------------|
| `npm start` | Ejecuta el script `start` del package.json |
| `npm run dev` | Ejecuta el script `dev` personalizado |
| `npm test` | Ejecuta los tests definidos en el proyecto |
| `npm run build` | Ejecuta el script de construcción |
| `npm run lint` | Ejecuta el linter del proyecto |
| `npx <paquete>` | Ejecuta un paquete sin instalarlo globalmente |

---

## 3. Configuración de npm

| Comando | Descripción |
|---------|-------------|
| `npm config list` | Muestra la configuración activa de npm |
| `npm config get registry` | Muestra el registro actual de paquetes |
| `npm config set registry <url>` | Cambia el registro de paquetes (ej. Nexus, Artifactory) |
| `npm config set cache <ruta>` | Define el directorio de caché |
| `npm cache clean --force` | Limpia la caché de npm |
| `npm config delete proxy` | Elimina una configuración específica |
| `npm config edit` | Abre el archivo de configuración en el editor |
| `npm whoami` | Muestra el usuario autenticado en el registro |
| `npm login` | Inicia sesión en el registro de npm |
| `npm logout` | Cierra la sesión del registro actual |

::: info  💡 

**Nota:** Usa un archivo `.npmrc` en la raíz del proyecto para configuración específica por proyecto.

:::
---

## 4. Ejecución y Administración de Procesos

### 4.1 Ejecución básica

| Comando | Descripción |
|---------|-------------|
| `node app.js` | Ejecuta un archivo JavaScript directamente |
| `node -e "console.log('Hola')"` | Ejecuta código Node.js en línea |
| `node --inspect app.js` | Inicia el depurador de Node.js |
| `node --inspect-brk app.js` | Depurador que pausa al inicio |
| `node --max-old-space-size=4096 app.js` | Aumenta el límite de memoria a 4 GB |

### 4.2 PM2 — Gestor de procesos para producción

PM2 es el estándar de la industria para mantener aplicaciones Node.js en producción:

| Comando | Descripción |
|---------|-------------|
| `pm2 start app.js` | Inicia una aplicación con PM2 |
| `pm2 start app.js --name api` | Inicia con un nombre descriptivo |
| `pm2 start app.js -i max` | Inicia en modo cluster (todos los cores) |
| `pm2 list` | Lista todos los procesos administrados |
| `pm2 status` | Estado detallado de los procesos |
| `pm2 stop api` | Detiene un proceso por nombre o ID |
| `pm2 restart api` | Reinicia un proceso |
| `pm2 reload api` | Recarga sin downtime (zero-downtime) |
| `pm2 delete api` | Elimina un proceso de la lista de PM2 |
| `pm2 logs` | Muestra los logs en tiempo real |
| `pm2 logs api --lines 200` | Muestra las últimas 200 líneas de un proceso |
| `pm2 monit` | Monitor interactivo de CPU y memoria |
| `pm2 save` | Guarda la lista de procesos para auto-arranque |
| `pm2 startup` | Genera el script de arranque automático del sistema |
| `pm2 unstartup` | Deshabilita el arranque automático |
| `pm2 restart api --update-env` | Reinicia actualizando las variables de entorno |

::: info 💡 

**Nota:** Ejecuta `pm2 save` después de cada cambio de configuración para persistir el estado tras un reinicio del servidor.

:::
---

## 5. Diagnóstico y Monitoreo

### 5.1 Información del entorno

| Comando | Descripción |
|---------|-------------|
| `node -p process.versions` | Muestra versiones de Node y sus dependencias (V8, OpenSSL, etc.) |
| `node -p process.env` | Imprime todas las variables de entorno |
| `node -p process.memoryUsage()` | Uso actual de memoria del proceso |
| `node -p os.cpus().length` | Número de núcleos disponibles |
| `node -p os.totalmem()` | Memoria total del sistema en bytes |
| `node --print "process.platform"` | Sistema operativo (linux, darwin, win32) |

### 5.2 Depuración y profiling

| Comando | Descripción |
|---------|-------------|
| `node --inspect app.js` | Activa el depurador remoto (puerto 9229) |
| `node --prof app.js` | Genera un perfil de rendimiento (V8) |
| `node --prof-process isolate-*.log` | Procesa el log de profiling generado |
| `node --trace-warnings app.js` | Muestra el stack trace de cada advertencia |
| `node --experimental-vm-modules` | Habilita soporte experimental de ES modules |
| `node --pending-deprecation app.js` | Advierte sobre APIs que serán deprecadas |

---

## 6. Variables de Entorno

| Comando | Descripción |
|---------|-------------|
| `NODE_ENV=production node app.js` | Establece el entorno de ejecución |
| `NODE_ENV=development node app.js` | Modo desarrollo (más logs, sin optimizaciones) |
| `PORT=8080 node app.js` | Define el puerto de escucha |
| `NODE_OPTIONS=--max-old-space-size=4096` | Opciones globales para todos los procesos Node |
| `DEBUG=express:* node app.js` | Activa logs de debug de módulos que usan `debug` |
| `NODE_TLS_REJECT_UNAUTHORIZED=0` | Deshabilita verificación TLS (¡solo para desarrollo!) |

::: warning 💡

  **Nota:** Usa archivos `.env` junto con la librería `dotenv` o el flag `--env-file` (Node 20+) para gestionar variables de entorno de forma segura.

:::
---

## 7. Referencia Rápida — Flujo de Trabajo

Ciclo típico de administración en producción:

1. Clonar repositorio e instalar: `npm ci`
2. Construir la aplicación: `npm run build`
3. Iniciar con PM2: `pm2 start dist/index.js --name mi-app -i max`
4. Configurar arranque automático: `pm2 save && pm2 startup`
5. Monitorear: `pm2 monit`
6. Actualizar sin downtime: `git pull && npm ci && npm run build && pm2 reload mi-app`
7. Revisar logs ante errores: `pm2 logs mi-app --lines 500`
8. Auditar seguridad periódicamente: `npm audit`

> 💡 **Nota:** Siempre usa `npm ci` en lugar de `npm install` en servidores y pipelines de CI/CD para garantizar instalaciones reproducibles y deterministas.


[Manual Node JS](programacion)
