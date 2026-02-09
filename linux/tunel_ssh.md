---
title: 8. Tunel SSH
parent: "Linux"
---

# Manual de creación de Túneles SSH: Conceptos y Práctica

Los túneles SSH son canales cifrados que permiten transportar datos de protocolos no seguros o saltar restricciones de red de forma protegida, podemos considerarlos como "pasadizos secretos" cifrados que te permiten transportar datos de un protocolo a otro de forma segura. Es una de las herramientas más potentes para cualquier administrador de sistemas o desarrollador.

---

## 1. Glosario de Términos
* **Local:** Tu máquina física (desde donde escribes el comando).
* **Remote:** El servidor intermedio al que te conectas por SSH.
* **Destino:** El servicio final al que quieres llegar.

---

## 2. Túnel Local (Local Port Forwarding)

**Uso:** Traer un servicio remoto a tu propia computadora.

### Comando

```bash
ssh -L [Puerto_Local]:[Host_Destino]:[Puerto_Destino] usuario@servidor_ssh
```

### Ejemplo Práctico

Acceder a un MySQL (puerto 3306) que solo escucha conexiones locales en el servidor:

```bash
ssh -L 3307:localhost:3306 usuario@mi-servidor.com
```
---

## 3. Túnel Remoto (Remote Port Forwarding)

**Uso:** Exponer un servicio de tu laptop al mundo exterior.

### Comando

```bash
ssh -R [Puerto_Remoto]:[Host_Destino]:[Puerto_Local] usuario@servidor_ssh
```

### Ejemplo Práctico

Compartir tu web local (puerto 8000) a través de un VPS:

```bash
ssh -R 9000:localhost:8000 usuario@mi-vps-publico.com
```

---

## 4. Túnel Dinámico (SOCKS Proxy)

**Uso:** Navegación segura usando el servidor como salida a internet.

### Comando

```bash
ssh -D [Puerto_Local] usuario@servidor_ssh
```

---

## 5. Banderas (Flags) de Optimización

| Flag | Descripción |
| :--- | :--- |
| -N | No ejecuta comandos, solo abre el túnel. |
| -f | Envía el proceso al fondo (background). |
| -C | Comprime los datos. |

---

## 6. Notas de Seguridad

### GatewayPorts

Para que los túneles remotos sean públicos, edita `/etc/ssh/sshd_config` en el servidor:
`GatewayPorts yes`

### Cerrar túneles en segundo plano

1. `ps aux | grep ssh`
2. `kill [PID]`

## Ejemplos mas comunes

**Algunas suposiciones:**

* `openssh-server.example.com` : Es el host que posee el servicio ssh y el servicio sin cifrar
* `otrohost.example.com` : Es un host que posee un servidor web sin TLS pero que carece de ssh.
* `192.0.2.1/24` : Es la dirección IP del cliente ssh.
* `filtrado.example.com` : Es un host que tiene el puerto del servicio al que queremos acceder pero se encuentra filtrado para el exterior.
* `casa.example.com` : Es un host remoto respecto a un servidor ssh accesible desde la red de `filtrado.example.com` . Este host está en un lugar en el cual podemos trabajar cómodamente 😊 por fuera de la infraestructura de `filtrado.example.com` .

### Caso 1: Redireccionado desde un puerto local a un puerto remoto para segurizar un servicio sin cifrar

> Queremos segurizar el acceso a un servidor web sin TLS.

```bash
ssh -N -f -L 10001:localhost:80 openssh-server.example.com
```

* `80` : Es el puerto que tiene el servicio sin cifrar
* `localhost` : Es la dirección en el host servicio-remoto.example.com que escucha en el puerto 80.
* `10001` : Es el puerto local al cual tendremos que conectarnos para obtener el servicio web.
* `-N` No ejecuta comandos en el lado remoto.
* `-f` El proceso va al segundo plazo antes de la ejecución de comandos.

**El url que habrá que poner en el navegador es http://localhost:10001**

### Caso 2: Redireccionado desde un puerto local a un puerto remoto permitiendo el acceso al túnel usuarios de la misma red local para Segurizar un servicio sin cifrar

> Queremos permitir que otros hosts de la red puedan acceder nuestro servicio encapsulado.

```bash
ssh -g -N -f -L 10001:localhost:80 openssh-server.example.com
```

* `-g` Permite acceder a otros hosts de la red 192.0.2.0/24 acceder a el url **http://192.0.2.1:10001/**

### Caso 3: Redireccionado desde un puerto local a un puerto remoto usando otro servidor ssh para acceder a un servicio sin TLS ni ssh

```bash
ssh -N -f -L 10001:otrohost.example.com:80 openssh-server.example.com
```

* Aquí la url será **http://localhost:10001**

### Caso 4: Crear un túnel en dirección inversa para acceder a un puerto SSH filtrado (utilización de un túnel remoto)

En este caso, queremos acceder al puerto SSH de `filtrado.example.com` , que no es accesible desde internet. Utilizamos `casa.example.com` con acceso SSH temporal para redirigir el puerto SSH de `filtrado.example.com` .

El comando debe ejecutarse en **`filtrado.example.com`** :

```bash
ssh  -N -f -R 9000:localhost:22 casa.example.com
```

*  **`22`** : Es el puerto SSH de `filtrado.example.com` .
*  **`9000`** : Es el puerto redirigido en `casa.example.com` .

Para conectarse al puerto SSH de `filtrado.example.com` desde `casa.example.com`:

```bash
ssh -p 9000 localhost                
```

### Caso 5: Redireccionamiento remoto para permitir acceso compartido a un puerto filtrado

En este caso, queremos redirigir el puerto SSH de un servidor filtrado ( `filtrado.example.com` ) hacia un servidor intermedio ( `casa.example.com` ) y permitir que otros hosts que están en la misma red local puedan acceder al túnel.

Comando para configurar el túnel:

```bash
ssh  -N -f -R 0.0.0.0:9000:localhost:22 casa.example.com
```

*   **`0.0.0.0:9000`** : Permite que el puerto redirigido esté accesible en todas las interfaces de red de `casa.example.com` .
*   **`localhost:22`** : Redirige el tráfico al puerto SSH de `filtrado.example.com` .

Para conectarse al túnel desde cualquier host con acceso a `casa.example.com` :

```bash
ssh -p 9000 casa.example.com
```

#### Requisito en casa.example.com

Habilitar `GatewayPorts` en `/etc/ssh/sshd_config` :

```bash
GatewayPorts clientspecified
```

Con esta configuración si el cliente no especifica explícitamente 0.0.0.0 al crear el túnel, los puertos siguen siendo locales por defecto.

Reinicia el servicio SSH:

```bash
sudo systemctl restart sshd
```

#### Notas de Seguridad

Si el servidor `casa.example.com` tiene una IP pública, usar firewalls para limitar el acceso al puerto `9000` y restringirlo solo a las máquinas necesarias. Para mayor seguridad, se puede especificar una interfaz específica en lugar de `0.0.0.0` .

#### Troubleshooting

En todas las casos usar la opción `-v` para obtener realizar debugging. Recordar que dicha opcioń se puede usar múltiples veces para aumentar el detalle.
