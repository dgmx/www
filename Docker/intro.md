---
title: 1. Introducción a Docker
parent: "Docker"
---

# Manual de Introducción a Docker

## 1. ¿Qué es Docker?

Docker es una plataforma de virtualización ligera basada en
contenedores. Permite empaquetar una aplicación junto con todas sus
dependencias para que se ejecute de forma consistente en cualquier
entorno.

### Ventajas principales

-   Portabilidad
-   Aislamiento
-   Escalabilidad
-   Rapidez de despliegue
-   Uso eficiente de recursos

------------------------------------------------------------------------

## 2. Conceptos Fundamentales

### Imagen

Una imagen es una plantilla inmutable que contiene todo lo necesario
para ejecutar una aplicación.

Ejemplo:

``` bash
docker pull nginx
```

### Contenedor

Un contenedor es una instancia en ejecución de una imagen.

Ejemplo:

``` bash
docker run -d -p 8080:80 nginx
```

### Dockerfile

Archivo de texto que define cómo construir una imagen.

Ejemplo:

``` dockerfile
FROM ubuntu:22.04
RUN apt update && apt install -y nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Volúmenes

Permiten persistir datos fuera del contenedor.

Ejemplo:

``` bash
docker volume create datos
docker run -v datos:/var/lib/mysql mysql
```

### Redes

Permiten comunicación entre contenedores.

Ejemplo:

``` bash
docker network create redapp
docker run --network redapp --name web nginx
```

------------------------------------------------------------------------

## 3. Instalación de Docker

### En Linux (Ubuntu)

``` bash
sudo apt update
sudo apt install docker.io
sudo systemctl enable docker
sudo systemctl start docker
```

Verificación:

``` bash
docker --version
```

------------------------------------------------------------------------

## 4. Comandos Básicos

  Comando          Descripción
  ---------------- ----------------------
  docker ps        Contenedores activos
  docker images    Imágenes disponibles
  docker stop ID   Detener contenedor
  docker rm ID     Eliminar contenedor
  docker rmi ID    Eliminar imagen

Ejemplo práctico:

``` bash
docker run hello-world
```

------------------------------------------------------------------------

## 5. Creación de una Aplicación de Ejemplo

### Paso 1: Crear archivo app.py

``` python
print("Hola desde Docker")
```

### Paso 2: Crear Dockerfile

``` dockerfile
FROM python:3.11
WORKDIR /app
COPY app.py .
CMD ["python", "app.py"]
```

### Paso 3: Construir imagen

``` bash
docker build -t ejemplo-python .
```

### Paso 4: Ejecutar contenedor

``` bash
docker run ejemplo-python
```

------------------------------------------------------------------------

## 6. Docker Compose

Permite definir múltiples contenedores.

Ejemplo docker-compose.yml:

``` yaml
version: "3"
services:
  web:
    image: nginx
    ports:
      - "8080:80"
```

Ejecutar:

``` bash
docker compose up -d
```

------------------------------------------------------------------------

## 7. Buenas Prácticas

-   Usar imágenes oficiales.
-   Minimizar tamaño de imagen.
-   Versionar Dockerfile.
-   Usar volúmenes para datos persistentes.
-   No ejecutar procesos como root.

------------------------------------------------------------------------

## 8. Actividades Propuestas

1.  Crear una imagen propia con una aplicación Java.
2.  Configurar un contenedor con volumen persistente.
3.  Desplegar dos contenedores comunicándose en red.
4.  Usar Docker Compose para levantar una aplicación web.

------------------------------------------------------------------------

## 9. Recursos

-   Documentación oficial de Docker
-   Docker Hub
-   Play with Docker
