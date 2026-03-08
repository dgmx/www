---
title: 10. Podman
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

### Podman ZSH plugin

Para usarlo añade _podman_ a la lista de plugins del archivo `.zshrc`

```bash
plugins=(... podman)
```

## Aliases

| Alias   | Command                                       | Description                                                                              |
| :------ | :-------------------------------------------- | :--------------------------------------------------------------------------------------- |
| pbl     | `podman build`                                | Build an image from a Dockerfile                                                         |
| pcin    | `podman container inspect`                    | Display detailed information on one or more containers                                   |
| pcls    | `podman container ls`                         | List all the running podman containers                                                   |
| pclsa   | `podman container ls --all`                   | List all running and stopped containers                                                  |
| pib     | `podman image build`                          | Build an image from a Dockerfile (same as podman build)                                  |
| pii     | `podman image inspect`                        | Display detailed information on one or more images                                       |
| pils    | `podman image ls`                             | List podman images                                                                       |
| pipu    | `podman image push`                           | Push an image or repository to a remote registry                                         |
| pirm    | `podman image rm`                             | Remove one or more images                                                                |
| pit     | `podman image tag`                            | Add a name and tag to a particular image                                                 |
| plo     | `podman container logs`                       | Fetch the logs of a podman container                                                     |
| pnc     | `podman network create`                       | Create a new network                                                                     |
| pncn    | `podman network connect`                      | Connect a container to a network                                                         |
| pndcn   | `podman network disconnect`                   | Disconnect a container from a network                                                    |
| pni     | `podman network inspect`                      | Return information about one or more networks                                            |
| pnls    | `podman network ls`                           | List all networks the engine daemon knows about, including those spanning multiple hosts |
| pnrm    | `podman network rm`                           | Remove one or more networks                                                              |
| ppo     | `podman container port`                       | List port mappings or a specific mapping for the container                               |
| ppu     | `podman pull`                                 | Pull an image or a repository from a registry                                            |
| pr      | `podman container run`                        | Create a new container and start it using the specified command                          |
| prit    | `podman container run --interactive --tty`    | Create a new container and start it in an interactive shell                              |
| prm     | `podman container rm`                         | Remove the specified container(s)                                                        |
| prm!    | `podman container rm --force`                 | Force the removal of a running container (uses SIGKILL)                                  |
| pst     | `podman container start`                      | Start one or more stopped containers                                                     |
| prs     | `podman container restart`                    | Restart one or more containers                                                           |
| psta    | `podman stop $(podman ps -q)`                 | Stop all running containers                                                              |
| pstp    | `podman container stop`                       | Stop one or more running containers                                                      |
| ptop    | `podman top`                                  | Display the running processes of a container                                             |
| pvi     | `podman volume inspect`                       | Display detailed information about one or more volumes                                   |
| pvls    | `podman volume ls`                            | List all the volumes known to podman                                                     |
| pvprune | `podman volume prune`                         | Cleanup dangling volumes                                                                 |
| pxc     | `podman container exec`                       | Run a new command in a running container                                                 |
| pxcit   | `podman container exec --interactive --tty`   | Run a new command in a running container in an interactive shell                         |

📄 [Podman Basics](podman_basics.pdf)
