---
title: Instalación de MongoDB
parent: NoSQL
---

# Instalación de MongoDB

MongoDB es una base de datos documental NoSQL que almacena datos en documentos BSON (Binary JSON). En esta guía aprenderás a instalar MongoDB en diferentes entornos.

## 1. Instalación Local en Linux

### 1.1 Añadir el repositorio de MongoDB

```bash
# Actualizar paquetes
sudo apt update

# Instalar gnupg y curl si no están instalados
sudo apt install gnupg curl

# Añadir la clave GPG de MongoDB
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor

# Crear el archivo de repositorio
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] \
   https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
   sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
```

### 1.2 Instalar MongoDB

```bash
# Actualizar repositorios
sudo apt update

# Instalar MongoDB
sudo apt install -y mongodb-org
```

### 1.3 Iniciar el servicio

```bash
# Iniciar MongoDB
sudo systemctl start mongod

# Habilitar inicio automático
sudo systemctl enable mongod

# Verificar estado
sudo systemctl status mongod
```

### 1.4 Conectar a MongoDB

```bash
# Abrir shell de MongoDB
mongosh
```

## 2. Instalación en macOS

### 2.1 Con Homebrew

```bash
# Actualizar Homebrew
brew update

# Instalar MongoDB Community Edition
brew install mongodb-community@7.0

# Iniciar como servicio
brew services start mongodb-community@7.0

# O ejecutar manualmente en segundo plano
mongod --dbpath /usr/local/var/mongodb
```

### 2.2 Verificar instalación

```bash
mongosh
```

## 3. Instalación en Windows

### 3.1 Usando MongoDB Community Installer

1. Descarga el instalador desde [mongodb.com](https://www.mongodb.com/try/download/community)
2. Selecciona la versión "Community Edition" y "MSI"
3. Ejecuta el instalador y sigue los pasos
4. Asegúrate de marcar "Install MongoDB as a Service"

### 3.2 Configurar variables de entorno

```powershell
# Añadir al PATH de Windows
C:\Program Files\MongoDB\Server\7.0\bin
```

### 3.3 Iniciar MongoDB

```powershell
# Crear directorio de datos
mongod --dbpath C:\data\db

# En Windows también puedes usar el servicio instalado automáticamente
```

## 4. Instalación con Docker

### 4.1 Instalación básica con Docker

```bash
# Descargar imagen oficial de MongoDB
docker pull mongo:7.0

# Ejecutar contenedor
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secretpassword \
  mongo:7.0
```

### 4.2 Instalación con Docker Compose

Crea un archivo `docker-compose.yml`:

```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:7.0
    container_name: mongodb
    restart: unless-stopped
    ports:
      - "27017:27017"
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: secretpassword
      MONGO_INITDB_DATABASE: admin
    volumes:
      - mongodb_data:/data/db
      - ./mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro
    networks:
      - mongodb_network

  mongodb-express:
    image: mongo-express:latest
    container_name: mongo-express
    restart: unless-stopped
    ports:
      - "8081:8081"
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin
      ME_CONFIG_MONGODB_ADMINPASSWORD: secretpassword
      ME_CONFIG_MONGODB_URL: mongodb://admin:secretpassword@mongodb:27017
    networks:
      - mongodb_network
    depends_on:
      - mongodb

volumes:
  mongodb_data:

networks:
  mongodb_network:
    driver: bridge
```

### 4.3 Script de inicialización (opcional)

Crea `mongo-init.js` para ejecutar comandos iniciales:

```javascript
// mongo-init.js
// Este script se ejecuta al crear el contenedor por primera vez

// Cambiar a la base de datos de administración
db = db.getSiblingDB('admin');

// Crear un usuario de aplicación
db.createUser({
  user: 'appuser',
  pwd: 'apppassword',
  roles: [
    { role: 'readWrite', db: 'mydatabase' }
  ]
});

// Crear una base de datos y colección de ejemplo
db = db.getSiblingDB('mydatabase');

db.createCollection('users');

db.users.insertMany([
  { nombre: 'Juan', edad: 25, email: 'juan@ejemplo.com' },
  { nombre: 'María', edad: 30, email: 'maria@ejemplo.com' },
  { nombre: 'Carlos', edad: 28, email: 'carlos@ejemplo.com' }
]);

print('Base de datos inicializada correctamente');
```

### 4.4 Comandos útiles de Docker Compose

```bash
# Iniciar los contenedores
docker-compose up -d

# Ver logs
docker-compose logs -f mongodb

# Detener los contenedores
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v

# Reiniciar
docker-compose restart mongodb
```

## 5. Instalación con Podman

### 5.1 Instalación básica con Podman

```bash
# Descargar imagen oficial
podman pull docker.io/library/mongo:7.0

# Ejecutar contenedor
podman run -d \
  --name mongodb \
  -p 27017:27017 \
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=secretpassword \
  -v mongodb_data:/data/db \
  localhost/mongo:7.0
```

### 5.2 Podman Compose (compatible con Docker Compose)

```bash
# Instalar podman-compose si no está instalado
pip install podman-compose

# Usar el mismo docker-compose.yml
podman-compose up -d
```

## 6. Verificar la Instalación

### 6.1 Probar conexión

```bash
# Conectar con mongosh
mongosh mongodb://admin:secretpassword@localhost:27017

# O simplemente
mongosh
```

### 6.2 Comandos de verificación

```javascript
// Ver versión de MongoDB
db.version()

// Ver bases de datos disponibles
show dbs

// Ver ayuda
help
```

### 6.3 MongoDB Express (Interfaz web)

Después de iniciar con Docker/Podman, accede a MongoDB Express en:

```
http://localhost:8081
```

- **Usuario:** admin
- **Contraseña:** secretpassword

## 7. Desinstalar MongoDB

### Linux

```bash
# Detener servicio
sudo systemctl stop mongod

# Deshabilitar servicio
sudo systemctl disable mongod

# Eliminar paquetes
sudo apt purge mongodb-org*

# Eliminar directorios
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb
```

### Docker

```bash
# Detener y eliminar contenedor
docker stop mongodb && docker rm mongodb

# Eliminar imagen
docker rmi mongo:7.0

# Eliminar volúmenes (datos)
docker volume rm mongodb_data
```

## 8. Configuración Avanzada

### 8.1 Archivo de configuración (mongod.conf)

```yaml
# /etc/mongod.conf

systemLog:
  destination: file
  logAppend: true
  path: /var/log/mongodb/mongod.log

storage:
  dbPath: /var/lib/mongodb
  journal:
    enabled: true

processManagement:
  timeZoneInfo: /usr/share/zoneinfo

net:
  port: 27017
  bindIp: 127.0.0.1

# Descomentar para habilitar autenticación
# security:
#   authorization: enabled
```

### 8.2 Habilitar autenticación

```bash
# Crear usuario administrador
mongosh

use admin
db.createUser({
  user: "admin",
  pwd: "contraseña_segura",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "dbAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" }
  ]
})

exit
```

Luego editar `mongod.conf` y descomentar la sección security.

---

## Resumen de Comandos Rápidos

| Acción | Docker | Podman |
|--------|--------|--------|
| Iniciar | `docker-compose up -d` | `podman-compose up -d` |
| Detener | `docker-compose down` | `podman-compose down` |
| Ver logs | `docker logs -f mongodb` | `podman logs -f mongodb` |
| Conectar | `mongosh mongodb://localhost:27017` | `mongosh mongodb://localhost:27017` |
