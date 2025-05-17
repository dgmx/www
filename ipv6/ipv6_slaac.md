---
title: "2. Cálculo de Dirección IPv6 Link-local"
parent: "IPv6"
---

# 🌐 Cálculo de Dirección IPv6 Link-local usando SLAAC + EUI-64

Vamos a calcular la dirección IPv6 de enlace local (`link-local`) a partir de una dirección MAC, usando **SLAAC** y el método **EUI-64**.

---

## Dirección MAC de ejemplo

```
D2:4F:23:1A:5B:9C
```

---

## Paso 1: Separar en dos mitades

Primera mitad: `D2:4F:23`  
Segunda mitad: `1A:5B:9C`

---

## Paso 2: Insertar la secuencia EUI-64 `FF:FE` en el medio

```
D2:4F:23:FF:FE:1A:5B:9C
```

---

## Paso 3: Invertir el bit U/L del primer byte

- Primer byte: `D2` → binario: `11010010`
- Invertimos el 7.º bit (U/L): `11010010` → `11010000` → `D0`

Nueva secuencia:

```
D0:4F:23:FF:FE:1A:5B:9C
```

---

## Paso 4: Añadir el prefijo de enlace local `fe80::/64`

La dirección IPv6 completa:

```
fe80::d04f:23ff:fe1a:5b9c
```

---

## Resultado final

**Dirección IPv6 link-local**:

```
fe80::d04f:23ff:fe1a:5b9c
```


