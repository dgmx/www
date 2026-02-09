---
title: 8. Podman
parent: "Docker"
---

# Mapa equivalencias Docker → Podman

## Contenedores

| Docker | Podman |
|---|---|
| docker run | podman run |
| docker start | podman start |
| docker stop | podman stop |
| docker restart | podman restart |
| docker rm | podman rm |
| docker ps | podman ps |
| docker logs | podman logs |
| docker exec -it | podman exec -it |

## Imágenes

| Docker | Podman |
|---|---|
| docker build | podman build |
| docker pull | podman pull |
| docker push | podman push |
| docker images | podman images |
| docker rmi | podman rmi |
| docker tag | podman tag |

## Docker Compose

| Docker | Podman |
|---|---|
| docker compose up | podman compose up |
| docker compose down | podman compose down |
| docker compose build | podman compose build |
| docker compose logs | podman compose logs |

## Inspección y sistema

| Docker | Podman |
|---|---|
| docker inspect | podman inspect |
| docker stats | podman stats |
| docker system df | podman system df |
| docker system prune | podman system prune |
| docker info | podman info |

## Login y registries

| Docker | Podman |
|---|---|
| docker login | podman login |
| docker logout | podman logout |
| docker search | podman search |

## Conceptos equivalentes clave

| Concepto Docker | En Podman |
|---|---|
| Docker daemon | No daemon (daemonless) |
| docker-compose | podman compose |
| Docker Hub | docker.io (igual) |
| network docker | network podman |
| volumes docker | volumes podman |

## Idea esencial

Para el 95 % del uso diario:

    docker → podman
    docker compose → podman compose

📄 [Podman Basics](podman_basics.pdf)
