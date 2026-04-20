---
title: "01. Introducción IPTABLES"
parent: "IPTables"
---


# Manual de Introducción a Seguridad Informática con IPTABLES

Este manual proporciona una introducción básica al diseño, configuración, administración y gestión de la seguridad informática utilizando **IPTABLES** en sistemas Linux.


## **Introducción a la Seguridad Informática**

La seguridad informática es el conjunto de medidas y prácticas destinadas a proteger los sistemas, redes y datos contra accesos no autorizados, ataques y vulnerabilidades. Uno de los componentes clave de la seguridad en sistemas Linux es el uso de **firewalls**, y una de las herramientas más utilizadas para este fin es **IPTABLES**.


## **¿Qué es IPTABLES?**

IPTABLES es una herramienta de firewall en sistemas Linux que permite filtrar, modificar y redirigir el tráfico de red. Funciona mediante reglas que definen cómo se manejan los paquetes de red (aceptar, rechazar o descartar).



## **Conceptos Básicos de IPTABLES**

1. **Tablas**: IPTABLES organiza las reglas en tablas. Las tablas más comunes son:
   - **filter**: Para filtrar paquetes (aceptar, rechazar o descartar).
   - **nat**: Para traducción de direcciones de red (NAT).
   - **mangle**: Para modificar paquetes (por ejemplo, cambiar el TTL).

2. **Cadenas**: Cada tabla tiene cadenas predefinidas que representan puntos de decisión:
   - **INPUT**: Paquetes destinados al sistema local.
   - **OUTPUT**: Paquetes generados por el sistema local.
   - **FORWARD**: Paquetes que se enrutarán a través del sistema.
   - **PREROUTING** y **POSTROUTING**: Para NAT y mangle.

3. **Reglas**: Son las instrucciones que definen qué hacer con los paquetes. Cada regla tiene:
   - Un criterio de coincidencia (por ejemplo, dirección IP, puerto, protocolo).
   - Una acción (ACCEPT, DROP, REJECT).

4. **Argumentos**:
   1. `-A <CHAIN>`  : Añade regla a la cadena especificada
   2. `-D <CHAIN>`  : Eliminar Regla 
   3. `-s <SOURCE>` : Fuente, IP de procedencia 
   4. `-j <ACTION>` : (jump) - Salto (ACCEPT, DROP or REJECT)
   5. `-p <protocol>` : Protocolo 
   6. `--dport <port>`: Destination Port
   7. `--sport: <port>`: Puerto fuente,
   8. `-i` :interfaz entrante
   9. `-o` :interfaz saliente
   10. `-s` :dirección IP origen 
   11. `-d` :dirección IP destino

## **Diseño de un Firewall con IPTABLES**

1. **Definir políticas por defecto**: Establece qué hacer con el tráfico que no coincide con ninguna regla.

```bash
# Rechazar todo el tráfico entrante por defecto). (-P: policy)
iptables -P INPUT DROP
```

2. **Permitir tráfico necesario**: Abre solo los puertos y servicios esenciales.

```bash
# Permitir SSH (Puerto 22)
iptables -A INPUT -p tcp --dport 22 -j ACCEPT

# Permitir HTTP (80) y HTTPS (443)
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT
```
  

3. **Bloquear tráfico no deseado**: Bloquea direcciones IP o rangos sospechosos.

```bash
# Bloquea una dirección específica:
iptables -A INPUT -s 192.168.1.100 -j DROP

```

1. **Habilitar NAT (si es necesario)**: 
   
```bash
# Para permitir que los dispositivos internos accedan a Internet.
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```

## **Configuración Básica de IPTABLES**

1. **Listar reglas existentes**:
```bash
iptables -L -v -n
```
2. **Agregar una regla**: Permitir tráfico HTTP (puerto 80):
```bash
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```
3. **Agregar una regla**: Permitir tráfico HTTP (puerto 80) y HTTPS (443)
```bash
iptables -A INPUT -p tcp -m multiport --dports 80,443 -j ACCEPT
```
4. **Eliminar una regla**: Eliminar la regla de HTTP:
```bash
iptables -D INPUT -p tcp --dport 80 -j ACCEPT
```
t. **Guardar reglas**:
+ En sistemas basados en Debian/Ubuntu:
```bash
iptables-save > /etc/iptables/rules.v4
```
+ En sistemas basados en RedHat/CentOS:
```bash
service iptables save
```

## **Administración y Gestión de IPTABLES**

1. **Monitoreo del tráfico**:
- Usa `iptables -L -v -n` para ver el tráfico que coincide con las reglas.

2. **Bloquear ataques**:
- Limitar el número de conexiones por IP para evitar ataques DDoS:
   
   ```bash
   iptables -A INPUT -p tcp --dport 80 -m limit --limit 25/minute -j ACCEPT
   ```

3. **Reglas persistentes**:
- Asegúrate de que las reglas se guarden y se carguen al reiniciar el sistema.

4. **Logging**:
- Registrar tráfico sospechoso:
   ```bash
   iptables -A INPUT -p tcp --dport 22 -j LOG --log-prefix "SSH Attempt: "
   ```

## **Ejemplo de Configuración Básica**

```bash
# Establecer políticas por defecto
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Permitir tráfico local
iptables -A INPUT -i lo -j ACCEPT

# Permitir tráfico HTTP y HTTPS
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
iptables -A INPUT -p tcp --dport 443 -j ACCEPT

# Permitir SSH desde una IP específica
iptables -A INPUT -p tcp --dport 22 -s 192.168.1.50 -j ACCEPT

# Habilitar NAT
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# Guardar reglas
iptables-save > /etc/iptables/rules.v4

# Permitir tráfico en el Loopback (Localhost)
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT
# Fundamental para que los servicios internos se comuniquen entre sí.
```

## Anatomía de un Comando
Si quieres construir tus propias reglas, sigue esta estructura:
```bash
iptables [−t tabla] comando cadena [match] −j target

# -A: Añadir (Append) al final de la lista.

# -p: Protocolo (tcp, udp, icmp).

# -s / -d: Origen (source) / Destino (destination).

# --dport: Puerto de destino.

# -i / -o: Interfaz de entrada (input) / salida (output), ej: eth0.
```

## Consejos de Seguridad

1. Minimizar la exposición: Abre solo los puertos necesarios.
2. Actualizar regularmente: Mantén tu sistema y aplicaciones actualizados.
3. Monitorear registros: Revisa los logs para detectar actividades sospechosas.
4. Usar herramientas adicionales: Combina IPTABLES con herramientas como Fail2Ban para mayor seguridad.



## Ejercicios:

### 1. Permitir SSH solo desde una red local específica:


::: details  Mostrar solución {close}
```bash
iptables -A INPUT -p tcp -s 10.0.0.0/24 --dport 22 -j ACCEPT
```

- `-s 10.0.0.0/24`: Define el origen como todo el rango de red (máscara 24).

- `--dport 22`: Puerto estándar de SSH.

- `-j ACCEPT`: Permite el acceso solo si la IP viene de ese rango interno.

:::


### 2. Redirección de Puertos (NAT)

Redirige el tráfico del puerto 80 al 8080 (útil para apps en Node.js, Java, etc.).

::: details  Mostrar solución {close}
```bash
iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
```

:::