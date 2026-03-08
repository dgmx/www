---
title: 07. Docker Swarm
parent: "Docker"
---
# Seguridad de credenciales en Docker y migración a Docker Swarm


Docker ofrece varios mecanismos para evitar almacenar credenciales sensibles en texto plano dentro de `docker-compose.yml` o archivos `.env`.  
Los principales son **Docker Secrets**, **configs protegidos**, e integración con **secret managers externos**.

### 1. Docker Secrets (recomendado)
Es el mecanismo nativo diseñado específicamente para credenciales (contraseñas, tokens, claves privadas).  
Los secretos:
- No se almacenan en el `compose.yml`.
- Se montan dentro del contenedor como archivos temporales en `/run/secrets/...`.
- Tienen permisos restringidos (solo lectura).
- No aparecen en variables de entorno visibles en `docker inspect`.

### Ejemplo:

Crear el secreto:

```bash
echo "mypassword" | docker secret create db_password -
```

En `docker-compose.yml` (modo swarm o compose v3+ compatible):

```yaml
services:
  db:
    image: postgres
    secrets:
      - db_password
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password

secrets:
  db_password:
    external: true
```

La aplicación lee la contraseña desde el archivo:

```bash
/run/secrets/db_password
```

**Ventaja clave**: evita exposición en variables de entorno y en el repositorio.

### 2. Archivos montados con permisos restringidos

Si no usas Swarm o Secrets, puedes montar un archivo local fuera del repositorio:

```yaml
services:
  app:
    volumes:
      - /secure/path/password.txt:/run/secrets/password:ro
```
Luego la app lee:

```bash
/run/secrets/password
```

No es tan robusto como Docker Secrets, pero reduce exposición.



### 3. Secret managers externos

En entornos profesionales se integra Docker con:

- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault
- GCP Secret Manager

El contenedor obtiene el secreto dinámicamente en runtime mediante sidecars o init containers.

Esto elimina completamente los secretos del host y del repositorio.


### 4. Evitar variables de entorno sensibles

Las variables de entorno:
- aparecen en `docker inspect`
- pueden verse en dumps de procesos
- pueden filtrarse en logs

Por eso se consideran menos seguras que secrets montados como archivo.

### Recomendación práctica 

Arquitectura típica segura:

- Desarrollo local: archivo `.env` fuera del repositorio + `.gitignore`
- Producción: Docker Secrets o Vault
- Aplicaciones: soporte para `*_FILE` (ej. `PASSWORD_FILE`)


## Migración de Docker Compose a Docker Swarm

### Diferencias clave entre Compose y Swarm
Antes de migrar es importante entender el cambio de modelo:

| Docker Compose | Docker Swarm |
|---|---|
| Orquestación local | Orquestación cluster |
| docker compose up | docker stack deploy |
| No gestiona secretos nativamente | Docker Secrets nativos |
| Escalado manual limitado | Escalado automático por servicio |
| Sin scheduler distribuido | Scheduler distribuido |

### Requisitos previos
- Docker instalado en todos los nodos
- Abrir puertos necesarios entre nodos:
  - TCP 2377 (cluster management)
  - TCP/UDP 7946 (node communication)
  - UDP 4789 (overlay network)

### Inicializar el cluster

En el nodo manager:
```bash
docker swarm init
```
Obtendrás un comando para unir workers:
```bash
docker swarm join --token <token> <ip-manager>:2377
```
Ejecutarlo en los demás nodos.
Verificar:
```
docker node ls
```

### Adaptar docker-compose.yml a Swarm

Swarm usa version 3+ del schema.
Ejemplo base:

```yaml
version: "3.9"
services:
  api:
    image: myapi:latest
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
    ports:
      - "80:8080"
```

IMPORTANTE: la sección `deploy` solo funciona en Swarm.

### Migrar variables sensibles a Docker Secrets
```bash
echo "mypassword" | docker secret create db_password -
```

En docker-compose.yml Swarm:

```yaml
services:
  db:
    image: postgres
    secrets:
      - db_password
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password

secrets:
  db_password:
    external: true
```

### Redes overlay
Swarm usa redes overlay compartidas:

```bash
docker network create --driver overlay backend
```
En compose:
```yaml
networks:
  backend:
    external: true
``` 

### Desplegar stack
En lugar de `docker compose up`:
```bash
docker stack deploy -c docker-compose.yml mystack
```
Ver servicios:
```bash
docker stack services mystack
```
Ver tareas:
```bash
docker stack ps mystack
```

### Escalado de servicios
Escalar manualmente:
```bash
docker service scale mystack_api=5
```
O modificar:
```yaml
deploy:
  replicas: 5
```
y redeploy:
```bash
docker stack deploy -c docker-compose.yml mystack
```

### Actualizaciones rolling
Swarm permite rolling updates automáticos:
```yaml
deploy:
  update_config:
    parallelism: 1
    delay: 10s
```

### Persistencia de datos
Los volúmenes deben existir en todos los nodos o usar:
- NFS
- GlusterFS
- Portworx
- drivers cloud

Ejemplo:
```yaml
volumes:
  dbdata:
    driver: local
```

### Eliminación del stack
```bash
docker stack rm mystack
```


## Ejemplo completo para producción (API + DB + Secrets)

```yaml
version: "3.9"

services:

  api:
    image: myapi:latest
    networks:
      - backend
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure

  db:
    image: postgres:16
    networks:
      - backend
    volumes:
      - dbdata:/var/lib/postgresql/data
    secrets:
      - db_password
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password

networks:
  backend:
    driver: overlay

volumes:
  dbdata:

secrets:
  db_password:
    external: true
```

Despliegue:
```bash
docker stack deploy -c docker-compose.yml production
```


## Estrategia profesional recomendada de migración (muy usada)
1. Migrar compose a version 3.9
2. Sustituir `.env` sensibles → Docker Secrets
3. Crear redes overlay
4. Añadir sección `deploy`
5. Inicializar swarm
6. Deploy stack
7. Activar rolling updates
8. Añadir storage distribuido

En Swarm los contenedores pueden ejecutarse en cualquier nodo
por tanto los archivos locales con credenciales dejan de ser válidos
por eso Secrets es obligatorio en producción


## Ejemplos cde estructuras completas seguras para producción

### Ejemplo 1

- Una API y una base de datos
- Uso de Docker Secrets en lugar de variables de entorno sensibles
- Red overlay
- Volúmenes para persistencia
- Sección deploy para Swarm (replicas, límites de recursos, restart policy)


```yaml
version: "3.9"

services:
  api:
    image: myapi:latest
    networks:
      - backend
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
      update_config:
        parallelism: 1
        delay: 10s
        order: start-first
    ports:
      - "80:8080"
    environment:
      # Usamos *_FILE para leer secretos desde archivos
      DATABASE_PASSWORD_FILE: /run/secrets/db_password

  db:
    image: postgres:16
    networks:
      - backend
    volumes:
      - dbdata:/var/lib/postgresql/data
    secrets:
      - db_password
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password

networks:
  backend:
    driver: overlay

volumes:
  dbdata:

secrets:
  db_password:
    external: true
```


### Cómo usarla en producción
1. Crear el secreto antes de desplegar:
```bash
echo "SuperSecreta123" | docker secret create db_password -
```
2. Desplegar el stack en Swarm:
```bash
docker stack deploy -c docker-compose.yml production
```
3. Ver servicios y tareas:
```bash
docker stack services production
docker stack ps production
```
4. Escalar la API si hace falta:
```bash
docker service scale production_api=5
```

**Características de seguridad y producción incluidas:**
+ Contraseñas nunca en texto plano ni en `.env`
+ Uso de Docker Secrets `(/run/secrets/...)`
+ Red overlay cifrada opcional
+ Persistencia de DB con volúmenes
+ Rolling updates con `update_config`
+ Recursos limitados por contenedor
+ Política de reinicio `on-failure`


### Ejemplo 2. Versión extendida

Este ejemplo es una versión extendida del anterior docker-compose que incluye reverse proxy con TLS automático (Traefik o Nginx), logging centralizado y monitorización, lista para producción completa.

- API + DB + Secrets
- Reverse proxy con TLS automático usando Traefik
- Logging centralizado con JSON logs
- Rolling updates y límites de recursos
- Red overlay segura
- Persistencia de datos

```yaml
version: "3.9"

services:

  # Reverse Proxy con Traefik para TLS automático
  traefik:
    image: traefik:v2.11
    command:
      - "--api.insecure=false"
      - "--providers.docker=true"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
      - "--certificatesresolvers.myresolver.acme.email=admin@midominio.com"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik_letsencrypt:/letsencrypt
    networks:
      - frontend
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager

  # API
  api:
    image: myapi:latest
    networks:
      - frontend
      - backend
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
      update_config:
        parallelism: 1
        delay: 10s
        order: start-first
      labels:
        - "traefik.enable=true"
        - "traefik.http.routers.api.rule=Host(`api.midominio.com`)"
        - "traefik.http.routers.api.entrypoints=websecure"
        - "traefik.http.routers.api.tls.certresolver=myresolver"
    environment:
      DATABASE_PASSWORD_FILE: /run/secrets/db_password
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  # Base de datos
  db:
    image: postgres:16
    networks:
      - backend
    volumes:
      - dbdata:/var/lib/postgresql/data
    secrets:
      - db_password
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    deploy:
      restart_policy:
        condition: on-failure
      resources:
        limits:
          cpus: "1"
          memory: 1G"

networks:
  frontend:
    driver: overlay
  backend:
    driver: overlay

volumes:
  dbdata:
  traefik_letsencrypt:

secrets:
  db_password:
    external: true
```

El despliegue de esta arquitectura es idéntico al anterior

**Ventajas de esta configuración**
* Seguridad: Secrets para contraseñas, red overlay, TLS automático
* Disponibilidad: Rolling updates, múltiples replicas de API
* Persistencia: Volumen para la base de datos
* Exposición pública: Traefik maneja HTTPS automáticamente
* Logging centralizado: Archivos JSON rotados
* Recursos controlados: CPU y memoria limitadas para evitar DoS


### Ejemplo 3. Versión final con monitorización

Versión final más completa, agregando monitorización con Prometheus, Grafana y alertas, lista para un entorno de producción real.

Esta versión final completa lista para producción incluye:
- API + DB + Secrets
- Logging centralizado
- Persistencia de datos
- Monitorización con Prometheus + Grafana
- Alertas básicas
- Redes overlay cifradas
- Rolling updates y límites de recursos


```yaml
version: "3.9"

services:

  # Reverse Proxy con Traefik para TLS automático
  traefik:
    image: traefik:v2.11
    command:
      - "--api.insecure=false"
      - "--providers.docker=true"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
      - "--certificatesresolvers.myresolver.acme.email=admin@midominio.com"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - traefik_letsencrypt:/letsencrypt
    networks:
      - frontend
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.role == manager

  # API
  api:
    image: myapi:latest
    networks:
      - frontend
      - backend
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
      resources:
        limits:
          cpus: "0.5"
          memory: 512M
      update_config:
        parallelism: 1
        delay: 10s
        order: start-first
      labels:
        - "traefik.enable=true"
        - "traefik.http.routers.api.rule=Host(`api.midominio.com`)"
        - "traefik.http.routers.api.entrypoints=websecure"
        - "traefik.http.routers.api.tls.certresolver=myresolver"
    environment:
      DATABASE_PASSWORD_FILE: /run/secrets/db_password
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"

  # Base de datos
  db:
    image: postgres:16
    networks:
      - backend
    volumes:
      - dbdata:/var/lib/postgresql/data
    secrets:
      - db_password
    environment:
      POSTGRES_PASSWORD_FILE: /run/secrets/db_password
    deploy:
      restart_policy:
        condition: on-failure
      resources:
        limits:
          cpus: "1"
          memory: 1G

  # Monitorización con Prometheus
  prometheus:
    image: prom/prometheus:latest
    networks:
      - monitoring
    volumes:
      - prometheus_data:/prometheus
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml:ro
    deploy:
      replicas: 1
      restart_policy:
        condition: on-failure
    ports:
      - "9090:9090"

  # Dashboard Grafana
  grafana:
    image: grafana/grafana:latest
    networks:
      - monitoring
    volumes:
      - grafana_data:/var/lib/grafana
    deploy:
      replicas: 1
      restart_policy:
        condition: on-failure
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin123

networks:
  frontend:
    driver: overlay
  backend:
    driver: overlay
  monitoring:
    driver: overlay

volumes:
  dbdata:
  traefik_letsencrypt:
  prometheus_data:
  grafana_data:

secrets:
  db_password:
    external: true
```

El despliegue es igual al de la primera versión.

**Características de esta versión**
- Seguridad: Secrets para contraseñas, TLS automático con Traefik, redes overlay
- Disponibilidad: Múltiples replicas de API, rolling updates
- Persistencia: Volúmenes para DB, Grafana y Prometheus
- Monitorización: Prometheus recolecta métricas, Grafana dashboard listo para visualización
- Logging centralizado: Archivos JSON rotados
- Alertas: Configurables desde Prometheus
- Recursos controlados: CPU y memoria limitadas por contenedor


Los archivos `docker-compose` mostrados no despliegan una aplicación concreta que exista públicamente, sino que es un ejemplo de arquitectura de producción segura. Su objetivo es ilustrar cómo estructurar servicios críticos en Swarm usando buenas prácticas de seguridad y despliegue.

En términos de funcionalidad concreta:

**Servicios que incluye**

1. `traefik`
  - Actúa como reverse proxy y gestor de TLS automático.
  - Dirige el tráfico HTTP/HTTPS a la API según el host (api.midominio.com).
  - Gestiona certificados Let’s Encrypt automáticamente.
  
2. `api`
  - Representa tu aplicación de negocio (por ejemplo, un servicio web REST).
  - La imagen myapi:latest es un placeholder, aquí pondrías tu propia aplicación Dockerizada.
  - Se conecta a la base de datos y recibe las credenciales vía Docker Secret.
  
3. `db (Postgres 16)`
  - Base de datos PostgreSQL para almacenar datos de la API.
   -Sus credenciales se manejan con Docker Secrets, nunca en texto plano.
  - Persistencia de datos mediante volumen dbdata.

4. `prometheus`
Recolecta métricas de contenedores y servicios del cluster para monitorización.

5. `grafana`
  - Dashboard de visualización de métricas de Prometheus.
  - Permite crear gráficos, paneles y alertas de forma centralizada.


**Arquitectura general**
```
[Internet] --> [Traefik] --> [API] --> [DB]
                        \
                         --> [Prometheus + Grafana]
```
- Traefik maneja la entrada de tráfico y TLS.
- API es el backend real de negocio.
- DB almacena datos de forma segura.
- Prometheus + Grafana permiten monitorizar la salud y métricas de toda la arquitectura.

Actualmente la imagen `myapi:latest` no existe. Para usar este docker-compose en un entorno real debes:
- Crear tu propia imagen Docker de la aplicación que quieras desplegar `(docker build -t myapi:latest .)`.
- Mantener el resto de la arquitectura (Traefik, DB, Prometheus, Grafana) tal cual para producción.