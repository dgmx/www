---
title: 11. Podman Labs
parent: "Docker"
---

# Laboratorio práctico y de despligue en producción con Podman 

## Introducción

Este documento incluye:

1. Un **laboratorio paso a paso** para aprender a crear y administrar
    Pods con Podman.
2. Un **ejemplo empresarial completo** que muestra una arquitectura
    típica con aplicación, base de datos y proxy.

Podman permite ejecutar contenedores sin daemon central y soporta el
concepto de **Pod**, inspirado en Kubernetes.

------------------------------------------------------------------------

## PARTE 1. Laboratorio Paso a Paso

## 1. Verificar instalación

``` bash
podman --version
podman info | grep rootless
```

Confirmamos que Podman está instalado y funcionando.

------------------------------------------------------------------------

## 2. Crear un Pod

``` bash
podman pod create   --name labpod   -p 8080:80
```

Esto crea un pod llamado **labpod** y publica el puerto 80 del pod en el
puerto 8080 del host.

Ver pods:

``` bash
podman pod ps
```

------------------------------------------------------------------------

## 3. Crear volumen persistente

``` bash
podman volume create db_data
```

Listar volúmenes:

``` bash
podman volume ls
```

------------------------------------------------------------------------

## 4. Crear contenedor de base de datos

``` bash
podman run -d   --name mariadb   --pod labpod   -e MYSQL_ROOT_PASSWORD=1234   -e MYSQL_DATABASE=appdb   -v db_data:/var/lib/mysql   mariadb
```

------------------------------------------------------------------------

## 5. Crear servidor web

``` bash
podman run -d   --name web   --pod labpod   nginx
```

Acceder desde navegador:

    http://localhost:8080

------------------------------------------------------------------------

## 6. Ver contenedores en el pod

``` bash
podman ps
```

También se puede ver información detallada:

``` bash
podman pod inspect labpod
```

------------------------------------------------------------------------

## 7. Probar comunicación interna

Entrar al contenedor:

``` bash
podman exec -it web bash
```

Desde el contenedor web se puede acceder a otros servicios mediante:

    localhost

Esto ocurre porque los contenedores comparten red dentro del pod.

------------------------------------------------------------------------

## 8. Detener e iniciar el pod

``` bash
podman pod stop labpod
podman pod start labpod
```

Esto gestiona todos los contenedores simultáneamente.

------------------------------------------------------------------------

## 9. Exportar a Kubernetes YAML

``` bash
podman generate kube labpod > labpod.yaml
```

Este archivo puede desplegarse en Kubernetes.

------------------------------------------------------------------------

## 10. Limpiar el laboratorio

``` bash
podman pod rm -f labpod
podman volume rm db_data
```

------------------------------------------------------------------------

## PARTE 2. Ejemplo de despligue en producción

## Arquitectura

Arquitectura típica de aplicación:

    Internet
       ↓
    [Nginx Reverse Proxy]
       ↓
    [Aplicación Node.js]
       ↓
    [PostgreSQL]

Todos los contenedores están dentro de un mismo pod.

------------------------------------------------------------------------

## 1. Crear Pod empresarial

``` bash
podman pod create   --name empresa_pod   -p 80:80   -p 443:443
```

------------------------------------------------------------------------

## 2. Crear volúmenes persistentes

``` bash
podman volume create pg_data
podman volume create nginx_conf
podman volume create nginx_certs
```

------------------------------------------------------------------------

## 3. Base de datos PostgreSQL

``` bash
podman run -d   --name postgres   --pod empresa_pod   -e POSTGRES_PASSWORD=seguro123   -e POSTGRES_DB=empresa   -v pg_data:/var/lib/postgresql/data   postgres
```

------------------------------------------------------------------------

## 4. Aplicación Node.js

Construir imagen:

``` bash
podman build -t empresa_app .
```

Ejecutar contenedor:

``` bash
podman run -d   --name app   --pod empresa_pod   -e DB_HOST=localhost   -e DB_USER=postgres   -e DB_PASS=seguro123   empresa_app
```

------------------------------------------------------------------------

## 5. Reverse Proxy Nginx

``` bash
podman run -d   --name proxy   --pod empresa_pod   -v nginx_conf:/etc/nginx/conf.d   -v nginx_certs:/etc/nginx/certs   nginx
```

Ejemplo de configuración:

    server {
        listen 443 ssl;

        ssl_certificate /etc/nginx/certs/fullchain.pem;
        ssl_certificate_key /etc/nginx/certs/privkey.pem;

        location / {
            proxy_pass http://localhost:3000;
        }
    }

------------------------------------------------------------------------

## 6. Generar servicio systemd

``` bash
podman generate systemd --name empresa_pod --files --new
```

Mover a systemd de usuario:

``` bash
mkdir -p ~/.config/systemd/user/
mv pod-empresa_pod.service ~/.config/systemd/user/

systemctl --user daemon-reload
systemctl --user enable pod-empresa_pod.service
```

------------------------------------------------------------------------

## 7. Exportar a Kubernetes

``` bash
podman generate kube empresa_pod > empresa.yaml
```

Este YAML permite migrar la arquitectura hacia Kubernetes.

------------------------------------------------------------------------

## Conclusión

Este documento demuestra:

- Cómo crear pods con Podman
- Cómo ejecutar múltiples contenedores dentro de un pod
- Cómo implementar persistencia
- Cómo construir una arquitectura empresarial simple
- Cómo preparar despliegues compatibles con Kubernetes
