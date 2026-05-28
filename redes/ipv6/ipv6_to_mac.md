
#  Proceso Inverso: IPv6 (EUI-64) → MAC Address

A partir de una **dirección IPv6 link-local** generada con **SLAAC + EUI-64**, podemos obtener la **dirección MAC original** siguiendo estos pasos:

---

## Ejemplo: Dirección IPv6 dada

```
fe80::e67c:f9ff:fedb:b014
```

---

## Paso 1: Extraer el identificador EUI-64 (últimos 64 bits)

De la dirección completa, tomamos la parte después de `fe80::`:

```
e67c:f9ff:fedb:b014
```

Convertimos los hextetos a bytes individuales:

```
e6 7c f9 ff fe db b0 14
```

---

## Paso 2: Eliminar los bytes `ff:fe` insertados

Quitamos los bytes del medio (`ff` y `fe`), que fueron añadidos para formar el EUI-64:

```
e6 7c f9 db b0 14
```

---

## Paso 3: Invertir el bit U/L del primer byte

El primer byte es `e6` → binario: `11100110`

Invertimos el **7.º bit (U/L bit)**:

- `11100110` → `11100100` → hexadecimal: `e4`

---

## Paso 4: Reconstruir la dirección MAC

Juntamos los bytes finales:

```
e4:7c:f9:db:b0:14
```

¡Y coincide con la dirección MAC original!

---

## Resumen del proceso inverso

1. Quitar `fe80::/64` del inicio.
2. Tomar los últimos 64 bits (Interface Identifier).
3. Quitar los bytes `ff:fe` insertados.
4. Invertir el bit U/L del primer byte.
5. Convertir los bytes resultantes a formato MAC.
