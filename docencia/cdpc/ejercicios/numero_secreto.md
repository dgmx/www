## EJEMPLO INTEGRADOR

### Código fuente del ejericicio Adivina el código secreto

Aquí tienes el código completo de un juego de adivinar el número secreto estructurado de forma limpia mediante funciones

```python
import random

def generar_numero_secreto(minimo, maximo):
    """Genera el número entero que el jugador debe adivinar."""
    return random.randint(minimo, maximo)

def pedir_numero_jugador(minimo, maximo):
    """Solicita un número al usuario y asegura que sea un entero válido dentro del rango."""
    while True:
        try:
            intento = int(input(f"Introduce un número entre {minimo} y {maximo}: "))
            if minimo <= intento <= maximo:
                return intento
            else:
                print(f"Por favor, el número debe estar estrictamente entre {minimo} y {maximo}.")
        except ValueError:
            print("Entrada no válida. Debes escribir un número entero.")

def verificar_intento(intento, numero_secreto):
    """Compara el intento del jugador con el número secreto y da una pista."""
    if intento < numero_secreto:
        print("¡Demasiado bajo! Intenta con uno más grande.")
        return False
    elif intento > numero_secreto:
        print("¡Demasiado alto! Intenta con uno más pequeño.")
        return False
    else:
        print("¡Felicidades! ¡Has adivinado el número!")
        return True

def jugar():
    """Función principal que coordina el flujo del juego."""
    MIN = 1
    MAX = 100
    intentos_totales = 0
    ha_ganado = False
    
    print("====================================")
    print(" ¡BIENVENIDO AL JUEGO DEL NÚMERO! ")
    print("====================================")
    print(f"Estoy pensando en un número entre {MIN} y {MAX}.")
    
    numero_secreto = generar_numero_secreto(MIN, MAX)
    
    while not ha_ganado:
        intento = pedir_numero_jugador(MIN, MAX)
        intentos_totales += 1
        ha_ganado = verificar_intento(intento, numero_secreto)
        print("-" * 40)
        
    print(f"Lograste ganar en solo {intentos_totales} intentos. ¡Buen trabajo!")

# Iniciar el juego
if __name__ == "__main__":
    jugar()
```


¿Cómo está organizado?

- **generar_numero_secreto**: Utiliza `random.randint` para fijar la meta.
- **pedir_numero_jugador**: Controla los errores (como si el usuario escribe letras por accidente) usando `try/except`.
- **verificar_intento**: Maneja la lógica de las pistas (mayor o menor) y devuelve un valor booleano (`True o False`) que avisa al juego si debe terminar.
- **jugar**: Centraliza las variables (como el contador de intentos) y ejecuta el bucle principal.

A continuación, se muestra una versión mejorada que incluye:

- Un límite máximo de intentos (por ejemplo, perder si no aciertas en 7 turnos).
- Un sistema de puntuación máxima (High Score) para guardar el récord.
- La opción de volver a jugar al terminar la partida sin reiniciar el script.
  

```python
import random

def generar_numero_secreto(minimo, maximo):
    """Genera el número entero que el jugador debe adivinar."""
    return random.randint(minimo, maximo)

def pedir_numero_jugador(minimo, maximo):
    """Solicita un número al usuario y asegura que sea un entero válido dentro del rango."""
    while True:
        try:
            intento = int(input(f"Introduce un número entre {minimo} y {maximo}: "))
            if minimo <= intento <= maximo:
                return intento
            else:
                print(f"Por favor, el número debe estar estrictamente entre {minimo} y {maximo}.")
        except ValueError:
            print("Entrada no válida. Debes escribir un número entero.")

def verificar_intento(intento, numero_secreto):
    """Compara el intento del jugador con el número secreto y da una pista."""
    if intento < numero_secreto:
        print("¡Demasiado bajo! Intenta con uno más grande.")
        return False
    elif intento > numero_secreto:
        print("¡Demasiado alto! Intenta con uno más pequeño.")
        return False
    else:
        print("\n¡FELICIDADES! ¡Has adivinado el número! 🎉")
        return True

def jugar_partida(record_actual):
    """Ejecuta una partida individual y devuelve el número de intentos si gana, o None si pierde."""
    MIN = 1
    MAX = 100
    LIMITE_INTENTOS = 7
    intentos_totales = 0
    ha_ganado = False
    
    print("\n" + "="*40)
    print(f" Nueva partida | Rango: {MIN} a {MAX}")
    if record_actual < float('inf'):
        print(f" Récord actual a batir: {record_actual} intentos")
    else:
        print(" Récord actual: ¡Aún no hay récords!")
    print("="*40)
    print(f"Tienes un máximo de {LIMITE_INTENTOS} intentos para lograrlo.")
    
    numero_secreto = generar_numero_secreto(MIN, MAX)
    
    while intentos_totales < LIMITE_INTENTOS and not ha_ganado:
        intentos_restantes = LIMITE_INTENTOS - intentos_totales
        print(f"\n[Intentos restantes: {intentos_restantes}]")
        
        intento = pedir_numero_jugador(MIN, MAX)
        intentos_totales += 1
        ha_ganado = verificar_intento(intento, numero_secreto)
        
    if ha_ganado:
        print(f"Lograste ganar en {intentos_totales} intentos. ¡Buen trabajo!")
        return intentos_totales
    else:
        print(f"\n¡Se agotaron los intentos! 💥 Perdiste.")
        print(f"El número secreto era el: {numero_secreto}")
        return None

def iniciar_juego():
    """Controla el bucle global para permitir volver a jugar y gestionar el High Score."""
    print("====================================")
    print(" ¡BIENVENIDO AL JUEGO DEL NÚMERO! ")
    print("====================================")
    
    # Inicializamos el récord con un valor infinito para denotar que no hay récord
    high_score = float('inf')
    
    while True:
        # Se ejecuta una partida y capturamos el resultado
        resultado = jugar_partida(high_score)
        
        # Si el jugador ganó, verificamos si ha superado el récord anterior
        if resultado is not None:
            if resultado < high_score:
                high_score = resultado
                print(f"🏆 ¡NUEVO RÉCORD! Has establecido la marca en {high_score} intentos.")
        
        # Preguntar al usuario si desea continuar jugando
        opcion = input("\n¿Quieres jugar otra partida? (s/n): ").strip().lower()
        if opcion != 's':
            print("\nGracias por jugar. ¡Hasta la próxima!")
            break

# Iniciar la aplicación
if __name__ == "__main__":
    iniciar_juego()
```



## Explicación Detallada: Juego de Adivinar el Número en Python

Este documento explica la estructura, lógica y funcionamiento del juego de adivinar el número implementado en Python utilizando el módulo `random`. El código está diseñado bajo el principio de **programación modular**, dividiendo el programa en funciones con responsabilidades únicas y claras.

---

### 1. Importación del Módulo

```python
import random
```
**Propósito:** Carga las herramientas necesarias para manejar el azar. En este programa se utiliza para generar el número oculto que el jugador debe adivinar.

---

### 2. Funciones de Apoyo (Caja de Herramientas)

#### A. Generación del Número Oculto
```python
def generar_numero_secreto(minimo, maximo):
    return random.randint(minimo, maximo)
```
* **Responsabilidad:** Establecer la meta del juego.
* **Funcionamiento:** Recibe dos límites enteros y utiliza `random.randint` para devolver un número aleatorio que incluye estrictamente ambos extremos.

#### B. Validación y Control de Errores de Entrada
```python
def pedir_numero_jugador(minimo, maximo):
    while True:
        try:
            intento = int(input(f"Introduce un número entre {minimo} y {maximo}: "))
            if minimo <= intento <= maximo:
                return intento
            else:
                print(f"Por favor, el número debe estar estrictamente entre {minimo} y {maximo}.")
        except ValueError:
            print("Entrada no válida. Debes escribir un número entero.")
```
* **Responsabilidad:** Garantizar que el usuario introduzca un número válido sin romper el programa.
* **El bucle `while True`:** Atrapa al jugador en una pregunta continua hasta que la respuesta sea correcta.
* **El bloque `try/except`:** Si el usuario escribe texto o símbolos, la conversión `int()` genera un error `ValueError`. El bloque `except` captura este fallo, muestra una advertencia y evita que el script se cuelgue.
* **El filtro `if`:** Verifica que el número esté dentro del rango permitido (1 a 100). Si pasa la prueba, `return` envía el número y rompe el ciclo.

#### C. Lógica de Pistas y Comparación
```python
def verificar_intento(intento, numero_secreto):
    if intento < numero_secreto:
        print("¡Demasiado bajo! Intenta con uno más grande.")
        return False
    elif intento > numero_secreto:
        print("¡Demasiado alto! Intenta con uno más pequeño.")
        return False
    else:
        print("\n¡FELICIDADES! ¡Has adivinado el número! 🎉")
        return True
```
* **Responsabilidad:** Evaluar la jugada y orientar al usuario.
* **Funcionamiento:** Compara el intento con el número secreto. Retorna una señal lógica (`True` si el jugador acertó, `False` si falló) para comunicarle al motor del juego si debe continuar o detenerse.

---

### 3. El Motor de la Partida (`jugar_partida`)

Esta función gestiona el flujo de **una sola ronda de juego** de principio a fin.

```python
def jugar_partida(record_actual):
    ...
    while intentos_totales < LIMITE_INTENTOS and not ha_ganado:
        ...
```
* **Control de Récord:** Recibe el High Score de la sesión para mostrarlo en pantalla. La primera partida usa `float('inf')` (infinito matemático) para garantizar que cualquier puntuación real lograda sea inferior y se registre como el primer récord.
* **Condiciones de Parada:** El bucle `while` se detiene estrictamente si ocurre cualquiera de estas dos situaciones:
  1. Los `intentos_totales` alcanzan el tope de `LIMITE_INTENTOS` (7).
  2. La variable `ha_ganado` cambia a `True` tras un acierto.
* **Retorno de Resultados:** Si el jugador gana, la función devuelve el número de intentos empleados. Si pierde por agotar sus vidas, devuelve `None` para indicar que no hay puntuación válida para el récord.

---

### 4. El Administrador Global (`iniciar_juego`)

Controla el estado persistente del juego (el High Score) y el sistema de reinicio.

```python
def iniciar_juego():
    high_score = float('inf')
    while True:
        resultado = jugar_partida(high_score)
        
        if resultado is not None and resultado < high_score:
            high_score = resultado
            print(f"🏆 ¡NUEVO RÉCORD! ...")
            
        opcion = input("\n¿Quieres jugar otra partida? (s/n): ").strip().lower()
        if opcion != 's':
            break
```
* **Persistencia del Récord:** Al declarar `high_score` fuera de la función `jugar_partida`, los datos no se destruyen al terminar una ronda; permanecen guardados en la memoria del programa mientras este siga abierto.
* **Sistema de Reinicio:** Al concluir cada partida, se evalúa la respuesta del usuario con `.strip().lower()` (eliminando espacios y convirtiendo a minúsculas). Si el usuario introduce algo distinto a la letra "s", el comando `break` rompe el ciclo global y finaliza la aplicación.

---

### 5. Punto de Entrada del Script

```python
if __name__ == "__main__":
    iniciar_juego()
```
* **Responsabilidad:** Garantiza que el juego se ejecute únicamente si el archivo se abre de forma directa. Si en el futuro decides importar sus funciones desde otro archivo de Python, este bloque evitará que el juego se inicie automáticamente.
