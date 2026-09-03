<script setup>
import PasswordGenerator from '../../.vitepress/theme/components/PasswordGenerator.vue'
</script>

Generador de Contraseñas Seguras
==========================================

Genera contraseñas fuertes, aleatorias y personalizables directamente en tu navegador. **Ningún dato se envía a ningún servidor**: todo se ejecuta localmente con `crypto.getRandomValues()`.

<PasswordGenerator />

Características
-----------------------------------------------------

* **Slider de longitud**: entre 4 y 64 caracteres
* **Tipos de caracteres**: minúsculas, mayúsculas, números y símbolos (activables por separado)
* **Excluir ambiguos**: elimina caracteres confusos como `l`, `I`, `1`, `O`, `0`
* **Sin repetidos consecutivos**: evita que aparezcan dos caracteres iguales seguidos
* **Cálculo de entropía**: muestra bits de entropía, combinaciones posibles y tiempo estimado de fuerza bruta
* **Barra de fortaleza**: indicador visual con colores (débil, media, fuerte, muy fuerte)
* **Copiar al portapapeles**: botón con feedback visual

Conceptos clave
-----------------------------------------------------

### ¿Qué es la entropía?

La entropía mide la **incertidumbre** de una contraseña en bits. Cuantos más bits, más combinations posibles y más difícil es adivinarla por fuerza bruta.

| Entropía | Fortaleza | Ejemplo |
|----------|-----------|---------|
| < 40 bits | Débil | `abc123` |
| 40–59 bits | Media | `Abc1234!` |
| 60–79 bits | Fuerte | `Kx9#mP2$vL` |
| ≥ 80 bits | Muy fuerte | `7kM!pX2$vL#nQ9wR` |

### Fórmula de la entropía

$$E = L \times \log_2(N)$$

Donde:
* **E** = entropía en bits
* **L** = longitud de la contraseña
* **N** = tamaño del alfabeto (número de caracteres disponibles)

Por ejemplo, una contraseña de 16 caracteres usando minúsculas + mayúsculas + números + símbolos tiene un alfabeto de 70 caracteres:

$$E = 16 \times \log_2(70) \approx 16 \times 6.13 \approx 98 \text{ bits}$$

### Consejos de seguridad

1. Usa **mínimo 12 caracteres** para cuentas importantes
2. **Nunca reutilices** contraseñas entre servicios
3. Usa un **gestor de contraseñas** para almacenarlas de forma segura
4. Activa la **verificación en dos pasos** (2FA) siempre que sea posible
5. Cambia las contraseñas comprometidas inmediatamente
