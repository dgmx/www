---
title: 8. Podman
parent: "Docker"
---

# Manual Técnico: Creación y Gestión de Pods con Podman

## 1. Introducción

Podman es un motor de contenedores **daemonless** compatible con OCI
(Open Container Initiative). Permite ejecutar contenedores sin necesidad
de un servicio central permanente como ocurre tradicionalmente con
Docker.

Una de las características más importantes de Podman es el concepto de
**Pod**, inspirado en Kubernetes.

Un **pod** es un grupo de uno o más contenedores que:

-   Comparten red (misma IP y puertos)
-   Pueden compartir namespaces
-   Comparten almacenamiento si se configura
-   Se gestionan como una única unidad lógica

Este manual cubre:

-   Fundamentos técnicos
-   Creación y administración de pods
-   Redes, volúmenes y seguridad
-   Integración con systemd
-   Uso de archivos declarativos
-   Comparación con Docker Compose

------------------------------------------------------------------------

# 2. Conceptos Fundamentales

## 2.1 ¿Qué es un Pod?

Un **pod en Podman** es una agrupación de contenedores que comparten
recursos del sistema.

  Recurso             Compartido
  ------------------- --------------
  IP                  Sí
  Puertos             Sí
  Network namespace   Sí
  IPC namespace       Opcional
  PID namespace       Opcional
  Volúmenes           Configurable

Arquitectura conceptual:

    Pod
     ├── Infra Container (gestiona red)
     ├── Contenedor App
     ├── Contenedor Base de Datos
     └── Contenedor Sidecar (logs, proxy, etc.)

El **infra container** mantiene el namespace activo incluso si los demás
contenedores se detienen.

------------------------------------------------------------------------

# 3. Instalación

## Debian / Ubuntu

``` bash
sudo apt install podman
```

## Fedora

``` bash
sudo dnf install podman
```

Verificar instalación:

``` bash
podman --version
```

------------------------------------------------------------------------

# 4. Creación Básica de Pods

## Crear un Pod

``` bash
podman pod create --name mi_pod -p 8080:80
```

Esto:

-   Crea un pod llamado `mi_pod`
-   Publica el puerto 80 interno como 8080 externo

Ver pods:

``` bash
podman pod ps
```

------------------------------------------------------------------------

## Añadir contenedores al Pod

``` bash
podman run -dt --pod mi_pod nginx
```

Ejemplo práctico:

``` bash
podman pod create --name webpod -p 8080:80

podman run -dt --pod webpod --name web nginx
podman run -dt --pod webpod --name redis redis
```

Ambos contenedores comparten la misma red.

------------------------------------------------------------------------

# 5. Gestión del Ciclo de Vida

Iniciar un pod:

``` bash
podman pod start webpod
```

Detener:

``` bash
podman pod stop webpod
```

Eliminar:

``` bash
podman pod rm webpod
```

Eliminar forzado:

``` bash
podman pod rm -f webpod
```

------------------------------------------------------------------------

# 6. Redes en Pods

Por defecto Podman utiliza:

-   Netavark (backend moderno)
-   CNI (modo legacy)

Un pod tiene:

-   Una IP compartida
-   Comunicación interna por `localhost`

Ejemplo:

Si nginx y redis están en el mismo pod:

    redis://localhost:6379

No se requiere DNS interno como en Docker Compose.

------------------------------------------------------------------------

# 7. Volúmenes y Persistencia

Crear volumen:

``` bash
podman volume create datos_db
```

Usarlo:

``` bash
podman run -dt \
  --pod webpod \
  -v datos_db:/var/lib/mysql \
  mysql
```

Ventajas:

-   Persistencia de datos
-   Separación del contenedor
-   Compatibilidad con ejecución rootless

------------------------------------------------------------------------

# 8. Rootless: Seguridad Avanzada

Podman puede ejecutarse **sin privilegios de root**.

Verificar:

``` bash
podman info | grep rootless
```

Beneficios:

-   Reducción de superficie de ataque
-   Aislamiento multiusuario
-   Ideal para entornos empresariales y académicos

------------------------------------------------------------------------

# 9. Archivos Declarativos

## Podman Compose

Permite utilizar archivos `docker-compose.yml`.

Instalación:

``` bash
pip install podman-compose
```

Ejecución:

``` bash
podman-compose up
```

------------------------------------------------------------------------

## Generar YAML tipo Kubernetes

``` bash
podman generate kube webpod > webpod.yaml
```

Esto permite migración directa hacia Kubernetes.

------------------------------------------------------------------------

# 10. Integración con systemd

Podman puede generar unidades systemd automáticamente.

``` bash
podman generate systemd --name webpod --files
```

Esto genera:

    pod-webpod.service

Beneficios:

-   Arranque automático del pod
-   Supervisión mediante systemd
-   Integración natural con servidores Linux

------------------------------------------------------------------------

# 11. Casos de Uso Reales

-   Microservicios locales
-   Desarrollo sin privilegios
-   Servidores sin daemon
-   Laboratorios de seguridad
-   Migración hacia Kubernetes

------------------------------------------------------------------------

# 12. Comparación: Podman Pods vs Docker Compose

  Característica              Podman Pods             Docker Compose
  --------------------------- ----------------------- -------------------
  Arquitectura                Daemonless              Requiere daemon
  Seguridad                   Rootless nativo         Generalmente root
  Unidad lógica               Pod estilo Kubernetes   Servicios
  IP compartida               Sí                      No
  Compatibilidad Kubernetes   Directa                 Indirecta
  Integración systemd         Nativa                  Limitada
  Consumo de recursos         Bajo                    Mayor

------------------------------------------------------------------------

# 13. Ventajas Estratégicas de Podman

1.  Seguridad superior
2.  Arquitectura sin daemon
3.  Mejor alineación con Kubernetes
4.  Control granular por usuario
5.  Integración fuerte con Linux empresarial

------------------------------------------------------------------------

# 14. Limitaciones

-   Ecosistema más pequeño que Docker
-   Menos documentación histórica
-   Compatibilidad parcial de algunas herramientas CI/CD

------------------------------------------------------------------------

# 15. Flujo Profesional Recomendado

1.  Diseñar el pod
2.  Probar contenedores con `podman run`
3.  Generar YAML Kubernetes
4.  Generar servicio systemd
5.  Automatizar despliegue

------------------------------------------------------------------------

# 16. Arquitectura Avanzada: Sidecars

Un pod permite arquitecturas como:

    [ App ]
    [ Proxy ]
    [ Logger ]
    [ Exporter ]

Todos comparten:

-   localhost
-   métricas
-   configuración

Este patrón replica la arquitectura de Kubernetes.

------------------------------------------------------------------------

# 17. Conclusión

Podman es una herramienta moderna alineada con estándares OCI y diseñada
con seguridad en mente.

Ventajas clave:

-   Seguridad sin daemon root
-   Integración directa con Kubernetes
-   Menor complejidad operativa en Linux
-   Arquitectura moderna de contenedores

En entornos Linux empresariales, **Podman + Pods representa una
alternativa sólida y segura frente a Docker Compose.**
