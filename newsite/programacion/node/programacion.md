# Manual de Programación con Node.js
::: info 📁

 Guía práctica con ejemplos de código

:::
---

## 1. Introducción a Node.js

Node.js es un entorno de ejecución de JavaScript del lado del servidor, construido sobre el motor V8 de Chrome. Permite ejecutar JavaScript fuera del navegador, lo que lo hace ideal para construir servidores web, APIs, herramientas de línea de comandos y aplicaciones en tiempo real.

**Características principales:**
- **Asíncrono y no bloqueante** — maneja múltiples operaciones sin esperar a que cada una termine
- **Event loop** — arquitectura basada en eventos que gestiona la concurrencia
- **Single thread** — un solo hilo de ejecución, pero muy eficiente gracias al modelo asíncrono
- **npm** — ecosistema de más de 2 millones de paquetes disponibles

---

## 2. Tu Primer Programa

### Hola Mundo

```javascript
// hola.js
console.log("¡Hola, Node.js!");
console.log("Versión de Node:", process.version);
console.log("Sistema operativo:", process.platform);
```

```bash
node hola.js
# ¡Hola, Node.js!
# Versión de Node: v20.11.0
# Sistema operativo: darwin
```

### Argumentos desde la línea de comandos

```javascript
// argumentos.js
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Uso: node argumentos.js <nombre>");
  process.exit(1);
}

const nombre = args[0];
console.log(`Hola, ${nombre}!`);
```

```bash
node argumentos.js Diego
# Hola, Diego!
```

---

## 3. Módulos

Node.js organiza el código en módulos. Existen tres tipos: módulos propios (built-in), módulos de terceros (npm) y módulos locales.

### Exportar e importar módulos (CommonJS)

```javascript
// matematicas.js — módulo que exportamos
function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

module.exports = { sumar, restar, multiplicar };
```

```javascript
// app.js — importamos el módulo
const { sumar, restar, multiplicar } = require('./matematicas');

console.log(sumar(10, 5));       // 15
console.log(restar(10, 5));      // 5
console.log(multiplicar(10, 5)); // 50
```

### Módulos ES (ESModules)

```javascript
// utils.mjs
export function formatearFecha(fecha) {
  return new Intl.DateTimeFormat('es-ES').format(fecha);
}

export const PI = 3.14159;
```

```javascript
// main.mjs
import { formatearFecha, PI } from './utils.mjs';

console.log(formatearFecha(new Date())); // 20/3/2026
console.log(PI);                         // 3.14159
```

> 💡 Para usar ESModules en archivos `.js`, añade `"type": "module"` en tu `package.json`.

---

## 4. Sistema de Archivos (fs)

El módulo `fs` permite leer, escribir y manipular archivos del sistema.

### Leer un archivo

```javascript
const fs = require('fs');

// Forma asíncrona (recomendada)
fs.readFile('datos.txt', 'utf8', (error, contenido) => {
  if (error) {
    console.error('Error al leer:', error.message);
    return;
  }
  console.log(contenido);
});

// Forma con promesas (más moderna)
const fsPromises = require('fs').promises;

async function leerArchivo() {
  try {
    const contenido = await fsPromises.readFile('datos.txt', 'utf8');
    console.log(contenido);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

leerArchivo();
```

### Escribir un archivo

```javascript
const fs = require('fs').promises;

async function escribirArchivo() {
  const datos = {
    nombre: "Diego",
    lenguaje: "Node.js",
    año: 2026
  };

  // Escribe el archivo (lo crea si no existe, lo sobreescribe si existe)
  await fs.writeFile('salida.json', JSON.stringify(datos, null, 2), 'utf8');
  console.log('Archivo creado correctamente');

  // Añadir contenido al final sin sobreescribir
  await fs.appendFile('log.txt', `[${new Date().toISOString()}] Aplicación iniciada\n`);
}

escribirArchivo();
```

### Trabajar con directorios

```javascript
const fs = require('fs').promises;
const path = require('path');

async function gestionarDirectorios() {
  // Crear directorio
  await fs.mkdir('mi-carpeta', { recursive: true });

  // Leer contenido de un directorio
  const archivos = await fs.readdir('./');
  console.log('Archivos en el directorio actual:');
  archivos.forEach(archivo => console.log(' -', archivo));

  // Información de un archivo
  const stats = await fs.stat('salida.json');
  console.log('Tamaño:', stats.size, 'bytes');
  console.log('Modificado:', stats.mtime);
}

gestionarDirectorios();
```

---

## 5. Servidor HTTP

### Servidor básico

```javascript
const http = require('http');

const servidor = http.createServer((req, res) => {
  // Cabeceras de la respuesta
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('¡Hola desde Node.js!');
});

servidor.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
```

### Servidor con enrutamiento básico

```javascript
const http = require('http');

const servidor = http.createServer((req, res) => {
  const { method, url } = req;

  res.setHeader('Content-Type', 'application/json');

  if (method === 'GET' && url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ mensaje: 'Bienvenido a la API' }));

  } else if (method === 'GET' && url === '/usuarios') {
    const usuarios = [
      { id: 1, nombre: 'Ana' },
      { id: 2, nombre: 'Carlos' },
    ];
    res.writeHead(200);
    res.end(JSON.stringify(usuarios));

  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Ruta no encontrada' }));
  }
});

servidor.listen(3000, () => console.log('Servidor en http://localhost:3000'));
```

---

## 6. API REST con Express

Express es el framework web más popular para Node.js. Instálalo con `npm install express`.

### Configuración básica

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Base de datos simulada en memoria
let usuarios = [
  { id: 1, nombre: 'Ana García', email: 'ana@email.com' },
  { id: 2, nombre: 'Carlos López', email: 'carlos@email.com' },
];

// GET — obtener todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// GET — obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));

  if (!usuario) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json(usuario);
});

// POST — crear un nuevo usuario
app.post('/usuarios', (req, res) => {
  const { nombre, email } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ error: 'Nombre y email son obligatorios' });
  }

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email
  };

  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// PUT — actualizar un usuario
app.put('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  usuarios[index] = { ...usuarios[index], ...req.body };
  res.json(usuarios[index]);
});

// DELETE — eliminar un usuario
app.delete('/usuarios/:id', (req, res) => {
  const index = usuarios.findIndex(u => u.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  usuarios.splice(index, 1);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
```

### Middleware personalizado

```javascript
// Middleware de logging
app.use((req, res, next) => {
  const ahora = new Date().toISOString();
  console.log(`[${ahora}] ${req.method} ${req.url}`);
  next(); // Pasa al siguiente middleware o ruta
});

// Middleware de autenticación simple
function autenticar(req, res, next) {
  const token = req.headers['authorization'];

  if (!token || token !== 'Bearer mi-token-secreto') {
    return res.status(401).json({ error: 'No autorizado' });
  }

  next();
}

// Aplicar solo a rutas protegidas
app.get('/admin', autenticar, (req, res) => {
  res.json({ mensaje: 'Área de administración' });
});
```

---

## 7. Programación Asíncrona

### Callbacks

```javascript
// Patrón clásico: el error siempre es el primer argumento
function obtenerUsuario(id, callback) {
  setTimeout(() => {
    if (id <= 0) {
      callback(new Error('ID inválido'), null);
    } else {
      callback(null, { id, nombre: 'Diego' });
    }
  }, 1000);
}

obtenerUsuario(1, (error, usuario) => {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(usuario);
});
```

### Promesas

```javascript
function obtenerUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id <= 0) {
        reject(new Error('ID inválido'));
      } else {
        resolve({ id, nombre: 'Diego' });
      }
    }, 1000);
  });
}

// Encadenamiento de promesas
obtenerUsuario(1)
  .then(usuario => {
    console.log('Usuario:', usuario);
    return obtenerUsuario(2); // Encadenamos otra promesa
  })
  .then(usuario2 => console.log('Usuario 2:', usuario2))
  .catch(error => console.error('Error:', error.message))
  .finally(() => console.log('Operación completada'));
```

### Async / Await (forma recomendada)

```javascript
async function cargarDatos() {
  try {
    // Las promesas se resuelven de forma secuencial
    const usuario = await obtenerUsuario(1);
    console.log('Usuario:', usuario);

    // Ejecución en paralelo con Promise.all (más eficiente)
    const [user1, user2, user3] = await Promise.all([
      obtenerUsuario(1),
      obtenerUsuario(2),
      obtenerUsuario(3),
    ]);

    console.log('Usuarios en paralelo:', user1, user2, user3);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

cargarDatos();
```

---

## 8. Eventos

Node.js está basado en un sistema de eventos. El módulo `EventEmitter` permite crear y escuchar eventos personalizados.

```javascript
const EventEmitter = require('events');

// Crear un emisor de eventos
class Tienda extends EventEmitter {
  constructor() {
    super();
    this.inventario = {};
  }

  agregarProducto(nombre, cantidad) {
    this.inventario[nombre] = (this.inventario[nombre] || 0) + cantidad;
    this.emit('productoAgregado', { nombre, cantidad });
  }

  venderProducto(nombre, cantidad) {
    if (!this.inventario[nombre] || this.inventario[nombre] < cantidad) {
      this.emit('stockInsuficiente', { nombre, cantidad });
      return;
    }

    this.inventario[nombre] -= cantidad;
    this.emit('ventaRealizada', { nombre, cantidad });

    if (this.inventario[nombre] < 5) {
      this.emit('stockBajo', { nombre, restante: this.inventario[nombre] });
    }
  }
}

const tienda = new Tienda();

// Escuchar eventos
tienda.on('productoAgregado', ({ nombre, cantidad }) => {
  console.log(`✅ Agregado: ${cantidad} unidades de ${nombre}`);
});

tienda.on('ventaRealizada', ({ nombre, cantidad }) => {
  console.log(`💰 Venta: ${cantidad} unidades de ${nombre}`);
});

tienda.on('stockBajo', ({ nombre, restante }) => {
  console.log(`⚠️  Stock bajo en ${nombre}: ${restante} unidades`);
});

tienda.on('stockInsuficiente', ({ nombre }) => {
  console.log(`❌ Sin stock suficiente de ${nombre}`);
});

// Usar la tienda
tienda.agregarProducto('Manzanas', 10);
tienda.venderProducto('Manzanas', 7);  // Stock bajará a 3 → dispara stockBajo
tienda.venderProducto('Manzanas', 5);  // Dispara stockInsuficiente
```

---

## 9. Streams

Los streams permiten procesar datos en fragmentos sin cargar todo en memoria, ideal para archivos grandes.

```javascript
const fs = require('fs');
const readline = require('readline');

// Leer un archivo línea a línea (eficiente para archivos grandes)
async function procesarCSV(archivo) {
  const stream = fs.createReadStream(archivo, { encoding: 'utf8' });

  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity
  });

  let lineaNum = 0;

  for await (const linea of rl) {
    lineaNum++;
    const columnas = linea.split(',');
    console.log(`Línea ${lineaNum}:`, columnas);
  }

  console.log(`Total de líneas procesadas: ${lineaNum}`);
}

procesarCSV('datos.csv');
```

```javascript
// Copiar un archivo grande usando streams (pipe)
const fs = require('fs');

const origen = fs.createReadStream('archivo-grande.mp4');
const destino = fs.createWriteStream('copia.mp4');

origen.pipe(destino);

origen.on('error', err => console.error('Error leyendo:', err));
destino.on('finish', () => console.log('Copia completada'));
```

---

## 10. Variables de Entorno y Configuración

### Usar dotenv

```bash
npm install dotenv
```

```bash
# .env (nunca subas este archivo a git)
PORT=3000
DB_HOST=localhost
DB_USER=admin
DB_PASS=secreto123
JWT_SECRET=mi_clave_secreta
NODE_ENV=development
```

```javascript
// Carga las variables al inicio de la aplicación
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
  },
  jwtSecret: process.env.JWT_SECRET,
  isDev: process.env.NODE_ENV === 'development',
};

console.log(`Servidor en modo: ${config.isDev ? 'desarrollo' : 'producción'}`);
console.log(`Conectando a DB en: ${config.db.host}`);
```

::: info  💡 

Añade `.env` a tu `.gitignore` para no exponer credenciales en el repositorio.

:::
---

## 11. Manejo de Errores

### Errores síncronos y asíncronos

```javascript
// Errores síncronos — usar try/catch
function dividir(a, b) {
  if (b === 0) throw new Error('División por cero no permitida');
  return a / b;
}

try {
  console.log(dividir(10, 2));  // 5
  console.log(dividir(10, 0));  // lanza error
} catch (error) {
  console.error('Error capturado:', error.message);
}

// Errores asíncronos — async/await con try/catch
async function obtenerDatos(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la petición:', error.message);
    throw error; // Re-lanzamos para que el llamador también pueda manejarlo
  }
}
```

### Errores no capturados (últimos recursos)

```javascript
// Captura errores no manejados en promesas
process.on('unhandledRejection', (reason, promise) => {
  console.error('Promesa rechazada sin manejar:', reason);
  // En producción: registrar el error y cerrar el proceso limpiamente
  process.exit(1);
});

// Captura excepciones síncronas no capturadas
process.on('uncaughtException', (error) => {
  console.error('Excepción no capturada:', error);
  process.exit(1);
});
```

---

## 12. Ejemplo Completo — API con Persistencia en JSON

Una pequeña API de tareas que guarda los datos en un archivo JSON:

```javascript
// api-tareas.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const ARCHIVO_DATOS = path.join(__dirname, 'tareas.json');

// Helpers para leer y guardar datos
async function leerTareas() {
  try {
    const datos = await fs.readFile(ARCHIVO_DATOS, 'utf8');
    return JSON.parse(datos);
  } catch {
    return []; // Si no existe el archivo, devuelve array vacío
  }
}

async function guardarTareas(tareas) {
  await fs.writeFile(ARCHIVO_DATOS, JSON.stringify(tareas, null, 2));
}

// GET /tareas — listar todas
app.get('/tareas', async (req, res) => {
  const tareas = await leerTareas();
  res.json(tareas);
});

// POST /tareas — crear tarea
app.post('/tareas', async (req, res) => {
  const { titulo } = req.body;
  if (!titulo) return res.status(400).json({ error: 'El título es obligatorio' });

  const tareas = await leerTareas();
  const nueva = {
    id: Date.now(),
    titulo,
    completada: false,
    creadaEn: new Date().toISOString()
  };

  tareas.push(nueva);
  await guardarTareas(tareas);
  res.status(201).json(nueva);
});

// PATCH /tareas/:id — marcar como completada
app.patch('/tareas/:id', async (req, res) => {
  const tareas = await leerTareas();
  const tarea = tareas.find(t => t.id === parseInt(req.params.id));

  if (!tarea) return res.status(404).json({ error: 'Tarea no encontrada' });

  tarea.completada = !tarea.completada;
  await guardarTareas(tareas);
  res.json(tarea);
});

// DELETE /tareas/:id — eliminar tarea
app.delete('/tareas/:id', async (req, res) => {
  let tareas = await leerTareas();
  const longitud = tareas.length;
  tareas = tareas.filter(t => t.id !== parseInt(req.params.id));

  if (tareas.length === longitud) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  await guardarTareas(tareas);
  res.status(204).send();
});

app.listen(3000, () => console.log('API de tareas en http://localhost:3000'));
```

**Prueba la API con curl:**
```bash
# Crear una tarea
curl -X POST http://localhost:3000/tareas \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Aprender Node.js"}'

# Listar tareas
curl http://localhost:3000/tareas

# Marcar como completada (usa el id devuelto al crear)
curl -X PATCH http://localhost:3000/tareas/1234567890

# Eliminar una tarea
curl -X DELETE http://localhost:3000/tareas/1234567890
```

---

## Recursos para seguir aprendiendo

- **Documentación oficial:** https://nodejs.org/docs
- **npm:** https://www.npmjs.com
- **Express:** https://expressjs.com
- **Node.js Best Practices:** https://github.com/goldbergyoni/nodebestpractices
