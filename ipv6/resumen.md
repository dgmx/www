---
title: "4. Resumen IPv6"
parent: "IPv6"
---


# 🌐 IPv6: Aspectos destacados

## 🔧 ¿Qué es IPv6?

IPv6 (Internet Protocol version 6) es la versión más reciente del protocolo IP. Fue diseñado para reemplazar a IPv4 debido a la escasez de direcciones.

---

## 📏 Longitud y formato

- **Tamaño**: 128 bits → permite **2¹²⁸ direcciones únicas**
- **Formato**: 8 grupos (hextetos) de 4 dígitos hexadecimales, separados por dos puntos `:`

**Ejemplo completo:**
```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

**Forma abreviada:**
```
2001:db8:85a3::8a2e:370:7334
```

---

## 🧭 Tipos de direcciones IPv6

IPv6 no usa broadcast. Se clasifica en:

| Tipo          | Comienza con... | Alcance     | Descripción                          |
|---------------|------------------|-------------|--------------------------------------|
| **Unicast**   | Varía            | 1 a 1       | Identifica un único dispositivo      |
| **Multicast** | `FF00::/8`       | 1 a varios  | Envío a múltiples destinos           |
| **Anycast**   | Igual que unicast| 1 a uno cercano | Enrutado al nodo más cercano     |

---

## 🧱 Subtipos de direcciones Unicast

| Subtipo               | Prefijo        | Descripción                            |
|------------------------|----------------|----------------------------------------|
| Global Unicast         | `2000::/3`     | Direcciones públicas                   |
| Link-local             | `fe80::/10`    | Comunicación en el mismo enlace        |
| Unique local (ULA)     | `fc00::/7`     | Equivalente a redes privadas IPv4      |
| Loopback               | `::1`          | Prueba interna del host                |
| Unspecified            | `::`           | Sin dirección asignada                 |

---

## 🧑‍🔧 Asignación y configuración

- Manual (estática)
- SLAAC (autoconfiguración sin estado)
- DHCPv6 (versión de DHCP para IPv6)

---

## 🧩 ¿Cómo se agrupan?

- Las redes IPv6 usan prefijos, como `2001:db8::/64`
- Normalmente se usan subredes `/64`
- Se crean jerarquías: global → subred → host

---

## ✅ Ventajas destacadas

- 🌐 Espacio de direcciones masivo
- 🔐 Seguridad integrada con IPSec
- ⚡ Elimina la necesidad de NAT
- 🤝 Autoconfiguración sencilla (SLAAC)
- 🚫 Sin broadcast (menos congestión)
- 🛰 Mejor enrutamiento y simplicidad

---


