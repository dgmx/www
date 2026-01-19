---
title: 3. Manual avanzado
parent: "Docker"
---

# Manual Avanzado de Docker 

Autor: Material didáctico para Administración de Sistemas Informáticos

------------------------------------------------------------------------

## 1. Introducción Técnica

Docker es una plataforma de virtualización basada en contenedores que
permite encapsular aplicaciones y servicios junto con sus dependencias,
garantizando portabilidad, reproducibilidad y escalabilidad.

### Diferencias con máquinas virtuales

| Característica | Contenedores | Máquinas Virtuales |
|----------------|--------------|---------------------|
| Arranque        | Segundos      | Minutos             |
| Consumo         | Bajo          | Alto                |
| Kernel          | Compartido    | Independiente       |
| Aislamiento     | Proceso       | Hardware            |
| Portabilidad    | Muy alta      | Media               |


Docker utiliza tecnologías del kernel Linux: 
- Namespaces (aislamiento) 
- Cgroups (control de recursos) 
- UnionFS / OverlayFS

------------------------------------------------------------------------

## 2. Arquitectura Docker

Componentes: 
- **Docker Client** 
- **Docker Daemon (dockerd)** 
- **Docker Registry** 
- **Imágenes** 
- **Contenedores**

Flujo: Cliente → API REST → Daemon → Registry

Comando:

``` bash
docker info
```

------------------------------------------------------------------------

## 3. Gestión de Imágenes

### Descargar imágenes

``` bash
docker pull nginx:latest
docker pull mysql:8
```

### Inspección

``` bash
docker inspect nginx
docker history nginx
```

### Limpieza

``` bash
docker image prune -a
```

### Creación avanzada de Dockerfile

Ejemplo optimizado:

``` dockerfile
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/app.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
```

Buenas prácticas: 
- Usar imágenes slim o alpine. 
- Minimizar capas. 
- Usar .dockerignore. 
- Evitar instalar software innecesario.

------------------------------------------------------------------------

## 4. Gestión de Contenedores

``` bash
docker ps -a
docker logs contenedor
docker exec -it contenedor /bin/bash
docker stats
```

Límites de recursos:

``` bash
docker run -d --memory=512m --cpus=1 nginx
```

------------------------------------------------------------------------

## 5. Redes Docker

Tipos: 
- bridge (por defecto) 
- host 
- none 
- overlay

Crear red:

``` bash
docker network create red_interna
```

Comunicación entre contenedores:

``` bash
docker run -d --name web --network red_interna nginx
docker run -it --network red_interna busybox ping web
```

------------------------------------------------------------------------

## 6. Volúmenes y Persistencia

Tipos: 
- volume 
- bind mount

| Característica            | Volume                              | Bind Mount                         |
|---------------------------|-------------------------------------|------------------------------------|
| Gestión                   | Docker                              | Usuario / Sistema operativo        |
| Ubicación física          | /var/lib/docker/volumes             | Cualquier ruta del host            |
| Portabilidad              | Alta                                 | Baja                                |
| Seguridad                  | Mejor aislamiento                   | Acceso directo al host             |
| Rendimiento               | Optimizado por Docker               | Depende del filesystem             |
| Backups                    | Sencillos                           | Manuales                           |
| Uso recomendado            | Producción                          | Desarrollo / pruebas               |
| Dependencia del host       | No depende de rutas locales         | Depende de rutas absolutas         |


Ejemplo MySQL persistente:

``` bash
docker volume create datos_mysql

docker run -d \
 --name mysql \
 -e MYSQL_ROOT_PASSWORD=asir \
 -v datos_mysql:/var/lib/mysql \
 mysql:8
```

Verificar:

``` bash
docker volume inspect datos_mysql
```

### Recomendación práctica

| Escenario                          | Recomendación |
|-----------------------------------|----------------|
| Bases de datos                     | Volume         |
| Servidores en producción           | Volume         |
| Desarrollo web                     | Bind Mount     |
| Pruebas rápidas                    | Bind Mount     |
| Copias de seguridad automatizadas  | Volume         |
| Edición de código en tiempo real   | Bind Mount     |

------------------------------------------------------------------------

## 7. Servidor Web con Docker (Nginx + PHP)

Estructura:

    web/
     ├── docker-compose.yml
     └── html/index.php

index.php:

``` php
<?php
  phpinfo();
?>
```

docker-compose.yml:

``` yaml
version: "3.9"
services:
  web:
    image: nginx
    ports:
      - "8080:80"
    volumes:
      - ./html:/usr/share/nginx/html
  php:
    image: php:8-fpm
    volumes:
      - ./html:/var/www/html
```

Ejecución:

``` bash
docker compose up -d
```

Acceso: http://localhost:8080

------------------------------------------------------------------------

## 8. Servidor de Bases de Datos (MySQL + Adminer)

docker-compose.yml:

``` yaml
version: "3.9"
services:
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: asir
      MYSQL_DATABASE: empresa
    volumes:
      - dbdata:/var/lib/mysql
  adminer:
    image: adminer
    ports:
      - 8081:8080
volumes:
  dbdata:
```

Acceso Adminer: http://localhost:8081

------------------------------------------------------------------------

## 9. Docker Compose Avanzado

Comandos:

``` bash
docker compose ps
docker compose logs
docker compose down -v
```

Escalado:

``` bash
docker compose up -d --scale web=3
```

------------------------------------------------------------------------

## 10. Seguridad

-   No usar root.
-   Escanear imágenes.
-   Limitar puertos.
-   Usar secretos.
-   Firewall (UFW).

Ejemplo usuario no root:

``` dockerfile
RUN useradd appuser
USER appuser
```

------------------------------------------------------------------------

## 11. Monitorización

``` bash
docker stats
```

Herramientas: - Portainer - Prometheus - Grafana

------------------------------------------------------------------------

## 12. Actividades Resueltas

### Actividad 1

Crear un servidor Apache con volumen persistente.

Solución:

``` bash
docker run -d -p 8082:80 -v apache_data:/usr/local/apache2/htdocs httpd
```

------------------------------------------------------------------------

### Actividad 2

Desplegar MySQL con contraseña segura.

Solución:

``` bash
docker run -d \
 -e MYSQL_ROOT_PASSWORD=asir2025 \
 -v mysql_data:/var/lib/mysql \
 mysql:8
```

------------------------------------------------------------------------

### Actividad 3

Red interna entre web y base de datos.

Solución:

``` bash
docker network create red_app

docker run -d --name db --network red_app mysql:8
docker run -d --name web --network red_app nginx
```

------------------------------------------------------------------------

### Actividad 4

Aplicación completa con Compose.

Solución:

``` yaml
version: "3.9"
services:
  web:
    image: nginx
    ports:
      - "8090:80"
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: asir
```

------------------------------------------------------------------------

## 13. Referencias

-   Docker Docs
-   Docker Hub
-   Kubernetes (Introducción futura)
