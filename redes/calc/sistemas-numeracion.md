<script setup>
import BaseConverter from '../../.vitepress/theme/components/BaseConverter.vue'
</script>

# Calculadora de Sistemas de Numeración

Convierte al instante entre **binario**, **octal**, **decimal** y **hexadecimal**. Escribe en cualquiera de los cuatro campos y los otros tres se actualizan automáticamente. Soporta números negativos y de tamaño arbitrario (`BigInt`), prefijos `0b`/`0o`/`0x` y validación en tiempo real.

<BaseConverter />

## Guía rápida

| Sistema | Base | Dígitos | Prefijo | Ejemplo |
|---------|------|---------|---------|---------|
| Binario | 2 | `0`, `1` | `0b` | `0b101010` → 42 |
| Octal | 8 | `0`–`7` | `0o` | `0o52` → 42 |
| Decimal | 10 | `0`–`9` | — | `42` |
| Hexadecimal | 16 | `0`–`9`, `A`–`F` | `0x` | `0x2A` → 42 |

### Consejos

* Puedes pegar valores con prefijo (`0b1010`, `0xFF`) o sin él.
* Usa el botón <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> para copiar cualquier campo.
* Los botones de **Ejemplos** cargan conversiones típicas de examen (255, DEAD, 777 octal…).
* La sección *bits necesarios* indica el tamaño mínimo para representar el valor en binario.

## Tabla de referencia

| Dec | Bin | Oct | Hex | Dec | Bin | Oct | Hex |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 0 | 0000 | 0 | 0 | 8 | 1000 | 10 | 8 |
| 1 | 0001 | 1 | 1 | 9 | 1001 | 11 | 9 |
| 2 | 0010 | 2 | 2 | 10 | 1010 | 12 | A |
| 3 | 0011 | 3 | 3 | 11 | 1011 | 13 | B |
| 4 | 0100 | 4 | 4 | 12 | 1100 | 14 | C |
| 5 | 0101 | 5 | 5 | 13 | 1101 | 15 | D |
| 6 | 0110 | 6 | 6 | 14 | 1110 | 16 | E |
| 7 | 0111 | 7 | 7 | 15 | 1111 | 17 | F |

> **Truco:** cada dígito hexadecimal equivale a 4 bits. Por eso `0xF = 1111₂` y `0xFF = 11111111₂ = 255₁₀`.

## Aplicaciones en ASIR

* **Direcciones IP y máscaras:** la máscara `255.255.255.0` es `0xFFFFFF00`.
* **Permisos Linux:** `chmod 755` → `111 101 101₂` → `rwxr-xr-x`.
* **Colores web:** `#FF5733` es `RGB(255,87,51)`.
