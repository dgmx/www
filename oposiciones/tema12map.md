
# Mapa Mental: Las 8 Estructuras de Datos Universales

## 1. Array (Arreglo)
- **Analogía:** Estacionamiento de un centro comercial.
- **Funcionamiento:** Los elementos se guardan en bloques contiguos de memoria del mismo tamaño.
- **Ventaja:** Acceso instantáneo a cualquier elemento mediante su índice.
- **Desventaja:** La inserción o eliminación en medio es lenta porque obliga a desplazar los demás elementos.
- **Casos de uso:** Puntajes de videojuegos, píxeles de imágenes o catálogos de productos.

## 2. Linked List (Lista Enlazada)
- **Analogía:** Búsqueda del tesoro donde cada pista indica dónde está la siguiente.
- **Funcionamiento:** Conjunto de nodos donde cada uno contiene un valor y una referencia (dirección) al siguiente.
- **Ventaja:** Inserción muy rápida al inicio o entre nodos usando solo referencias.
- **Desventaja:** No permite el acceso directo; para llegar a un elemento hay que recorrer la lista desde el principio.
- **Casos de uso:** Feeds de redes sociales y listas de reproducción musicales.

## 3. Stack (Pila)
- **Analogía:** Pila de platos en un restaurante.
- **Lógica:** LIFO (*Last In, First Out*), el último en entrar es el primero en salir.
- **Operaciones:** *Push* (agregar arriba) y *Pop* (sacar de arriba).
- **Casos de uso:** Función "Deshacer" (Ctrl+Z), botón atrás del navegador y el *Call Stack* de los lenguajes de programación.

## 4. Queue (Cola)
- **Analogía:** Fila del banco.
- **Lógica:** FIFO (*First In, First Out*), el primero en llegar es el primero en ser atendido.
- **Casos de uso:** Colas de impresión, envío de mensajes pendientes y gestión de peticiones en servidores.

## 5. Hash Table (Tabla Hash / Diccionario)
- **Analogía:** Diccionario de papel gigante.
- **Funcionamiento:** Utiliza una función matemática (hash) para convertir una clave en una dirección exacta de memoria.
- **Ventaja:** Búsqueda, inserción y acceso instantáneo sin importar el volumen de datos.
- **Casos de uso:** Caché del navegador, sesiones de usuario e índices de bases de datos.

## 6. Binary Search Tree (Árbol Binario de Búsqueda)
- **Analogía:** Juego de adivinar un número del 1 al 100 mediante mitades.
- **Estructura:** Un nodo raíz con ramas; los valores menores van a la izquierda y los mayores a la derecha.
- **Ventaja:** Permite realizar búsquedas extremadamente rápidas en grandes volúmenes de datos.
- **Casos de uso:** Sistemas de archivos, el DOM de HTML y algoritmos de inteligencia artificial como AlphaGo.

## 7. Heap (Montículo)
- **Analogía:** Sala de urgencias de un hospital (prioridad por gravedad).
- **Lógica:** El elemento con mayor prioridad siempre se mantiene en la raíz del árbol.
- **Ventaja:** Se reorganiza automáticamente de forma eficiente para garantizar que el elemento más prioritario esté siempre arriba.
- **Casos de uso:** Algoritmo de Dijkstra en GPS (Google Maps), planificación de procesos en sistemas operativos y rankings de videojuegos.

## 8. Graph (Grafo)
- **Analogía:** Redes sociales o redes de carreteras.
- **Componentes:** Nodos (puntos) conectados por aristas (líneas).
- **Tipos:** Dirigidos (ej. seguidores en X) y no dirigidos (ej. amigos en Facebook).
- **Casos de uso:** Recomendaciones de Netflix/Spotify, rutas de Uber y el motor de búsqueda de Google (PageRank).