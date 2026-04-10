---
title: Manual de MongoDB
parent: NoSQL
---

# Manual de MongoDB

MongoDB es una base de datos documental NoSQL que almacena datos en documentos BSON (Binary JSON). Este manual cubre consultas, administración y operaciones avanzadas.

## 1. Conceptos Básicos

### 1.1 Estructura de Datos

```
SQL                  →  MongoDB
─────────────────────────────────
Database             →  Database
Table                →  Collection
Row                  →  Document
Column               →  Field
Primary Key          →  _id (automático)
Joins                →  $lookup / Embedded documents
```

### 1.2 Tipos de Datos BSON

| Tipo | Ejemplo |
|------|---------|
| String | `"Hola mundo"` |
| Integer | `42` |
| Double | `3.14` |
| Boolean | `true` / `false` |
| Array | `[1, 2, 3]` |
| Object | `{ clave: "valor" }` |
| Null | `null` |
| Date | `ISODate("2024-01-15")` |
| ObjectId | `ObjectId("...")` |
| Binary | BinData(...) |

## 2. Operaciones CRUD

### 2.1 Crear (Insert)

**Insertar un documento:**

```javascript
db.usuarios.insertOne({
  nombre: "Juan",
  edad: 28,
  email: "juan@ejemplo.com",
  activo: true,
  fecha_registro: new Date()
})
```

**Insertar varios documentos:**

```javascript
db.usuarios.insertMany([
  { nombre: "María", edad: 32, email: "maria@ejemplo.com" },
  { nombre: "Carlos", edad: 25, email: "carlos@ejemplo.com" },
  { nombre: "Ana", edad: 30, email: "ana@ejemplo.com" }
])
```

**Insertar con documento incrustado:**

```javascript
db.usuarios.insertOne({
  nombre: "Pedro",
  edad: 35,
  direccion: {
    calle: "Gran Vía",
    ciudad: "Madrid",
    cp: "28013",
    pais: "España"
  },
  telefonos: ["612345678", "917890123"],
  intereses: ["deportes", "música", "viajes"]
})
```

### 2.2 Leer (Find/Query)

**Buscar todos los documentos:**

```javascript
db.usuarios.find()
```

**Buscar con condición (WHERE):**

```javascript
// Equivalente a: SELECT * FROM usuarios WHERE edad > 25
db.usuarios.find({ edad: { $gt: 25 } })

// Múltiples condiciones (AND)
db.usuarios.find({ 
  edad: { $gte: 25 }, 
  activo: true 
})

// Operadores de comparación
{ $eq: valor }     // igual
{ $ne: valor }     // diferente
{ $gt: valor }     // mayor que
{ $gte: valor }    // mayor o igual
{ $lt: valor }     // menor que
{ $lte: valor }    // menor o igual
{ $in: [valores] } // está en el array
{ $nin: [valores]} // no está en el array
```

**Operadores lógicos:**

```javascript
// AND implícito
db.usuarios.find({ edad: 28, nombre: "Juan" })

// OR explícito
db.usuarios.find({ 
  $or: [
    { edad: { $lt: 25 } },
    { edad: { $gt: 35 } }
  ]
})

// NOR (ni uno ni otro)
db.usuarios.find({
  $nor: [
    { estado: "inactivo" },
    { edad: { $lt: 18 } }
  ]
})
```

**Buscar documentos específicos (SELECT):**

```javascript
// Seleccionar solo algunos campos
db.usuarios.find(
  { edad: { $gt: 25 } },
  { nombre: 1, email: 1, _id: 0 }
)
```

**Usar regex para búsquedas de texto:**

```javascript
// Buscar por nombre que empiece con "J"
db.usuarios.find({ nombre: /^J/ })

// Buscar que contenga "an" (case insensitive)
db.usuarios.find({ nombre: /an/i })

// Buscar en cualquier campo de texto
db.usuarios.find({ 
  $or: [
    { nombre: /buscar/ },
    { email: /buscar/ }
  ]
})
```

**Contar documentos:**

```javascript
db.usuarios.countDocuments({ edad: { $gt: 25 } })

// Contar todos
db.usuarios.countDocuments()
```

**Buscar uno (solo el primero):**

```javascript
db.usuarios.findOne({ edad: { $gt: 25 } })
```

**Limitar y ordenar resultados:**

```javascript
// Limitar a 10 resultados
db.usuarios.find().limit(10)

// Ordenar por edad (ascendente)
db.usuarios.find().sort({ edad: 1 })

// Ordenar por edad (descendente)
db.usuarios.find().sort({ edad: -1 })

// Combinación
db.usuarios.find()
  .sort({ edad: -1, nombre: 1 })
  .limit(5)
  .skip(10)  // Saltar los primeros 10
```

### 2.3 Actualizar (Update)

**Actualizar un documento:**

```javascript
// updateOne: actualiza el primero que encuentre
db.usuarios.updateOne(
  { nombre: "Juan" },
  { $set: { edad: 29, email: "juan.nuevo@ejemplo.com" } }
)

// updateMany: actualiza todos los que coincidan
db.usuarios.updateMany(
  { activo: true },
  { $set: { ultima_conexion: new Date() } }
)
```

**Operadores de actualización:**

```javascript
// $set: establecer valor
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $set: { nombre: "Nuevo Nombre" } }
)

// $unset: eliminar campo
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $unset: { telefono: "" } }
)

// $inc: incrementar valor numérico
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $inc: { edad: 1 } }  // Aumenta la edad en 1
)

// $mul: multiplicar
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $mul: { precio: 1.1 } }  // Aumenta precio un 10%
)

// $rename: renombrar campo
db.usuarios.updateMany(
  {},
  { $rename: { "nombre_completo": "nombre" } }
)

// $setOnInsert: solo se aplica si el documento se crea
db.usuarios.updateOne(
  { email: "nuevo@ejemplo.com" },
  { 
    $set: { email: "nuevo@ejemplo.com" },
    $setOnInsert: { creado: new Date(), activo: true }
  },
  { upsert: true }
)
```

**Actualizar arrays:**

```javascript
// Añadir elemento al array
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $push: { telefonos: "600123456" } }
)

// Añadir varios elementos
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $push: { intereses: { $each: ["cocina", "fotografía"] } } }
)

// Eliminar elemento del array
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $pull: { telefonos: "600123456" } }
)

// Eliminar último elemento
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $pop: { telefonos: 1 } }  // 1 = último, -1 = primero
)

// Actualizar elemento específico del array
db.usuarios.updateOne(
  { "telefonos.0": "600123456" },
  { $set: { "telefonos.$": "600999888" } }
)

// Añadir si no existe (sin duplicados)
db.usuarios.updateOne(
  { _id: ObjectId("...") },
  { $addToSet: { intereses: "viajes" } }
)
```

### 2.4 Eliminar (Delete)

```javascript
// Eliminar uno
db.usuarios.deleteOne({ nombre: "Juan" })

// Eliminar varios
db.usuarios.deleteMany({ activo: false, edad: { $lt: 18 } })

// Eliminar todos (¡cuidado!)
db.usuarios.deleteMany({})

// Eliminar colección completa
db.usuarios.drop()
```

## 3. Consultas Avanzadas

### 3.1 Consultas en Arrays

```javascript
// Buscar documento con array que contenga un valor
db.usuarios.find({ intereses: "viajes" })

// Todos los elementos del array deben existir
db.usuarios.find({ intereses: { $all: ["viajes", "música"] } })

// Longitud del array específica
db.usuarios.find({ telefonos: { $size: 2 } })

// Al menos un elemento cumple la condición
db.usuarios.find({ "direccion.ciudad": "Madrid" })

// Búsqueda con elemMatch
db.examenes.find({
  resultados: { 
    $elemMatch: { nota: { $gte: 5 } }
  }
})
```

### 3.2 Documentos Incrustados

```javascript
// Acceder a campo de documento incrustado
db.usuarios.find({ "direccion.ciudad": "Madrid" })

// Coincidencia exacta de documento incrustado
db.usuarios.find({
  direccion: {
    calle: "Gran Vía",
    ciudad: "Madrid",
    cp: "28013"
  }
})

// El orden de los campos SÍ importa en la coincidencia exacta
```

### 3.3 Expresiones Regulares Avanzadas

```javascript
// Correos válidos de Gmail
db.usuarios.find({ email: /@gmail\.com$/ })

// Nombres que empiecen con vocal
db.usuarios.find({ nombre: /^[aeiou]/i })

// Nombres de 5 letras
db.usuarios.find({ nombre: /^[a-z]{5}$/i })
```

### 3.4 Proyecciones Avanzadas

```javascript
// Excluir campo específico
db.usuarios.find({}, { password: 0, historial: 0 })

// Incluir campos específicos
db.usuarios.find({}, { nombre: 1, email: 1 })

// Incluir campos de documentos incrustados
db.usuarios.find({}, { nombre: 1, "direccion.ciudad": 1 })

// Proyecciones con expresiones ($slice, $elemMatch)
db.usuarios.find({}, {
  nombre: 1,
  telefonos: { $slice: 2 },  // Solo primeros 2 teléfonos
  intereses: { $elemMatch: { $in: [/dep/, /mús/] } }
})
```

## 4. Aggregation Pipeline

El pipeline de agregación permite realizar operaciones complejas sobre los datos.

### 4.1 Pipeline Básico

```javascript
// Estructura básica
db.usuarios.aggregate([
  { $match: { edad: { $gt: 20 } } },   // Filtrar
  { $group: { _id: "$ciudad", total: { $sum: 1 } } },  // Agrupar
  { $sort: { total: -1 } }              // Ordenar
])
```

### 4.2 Operadores de Agregación

```javascript
// Contar por grupo
db.ventas.aggregate([
  { $group: { _id: "$producto", cantidad: { $sum: 1 } } }
])

// Sumar valores
db.ventas.aggregate([
  { $group: { _id: "$categoria", total_ventas: { $sum: "$importe" } } }
])

// Promedio
db.productos.aggregate([
  { $group: { _id: "$categoria", precio_medio: { $avg: "$precio" } } }
])

// Máximo y mínimo
db.pedidos.aggregate([
  { $group: { 
      _id: "$cliente",
      mayor_pedido: { $max: "$total" },
      menor_pedido: { $min: "$total" }
    }
  }
])

// Concatenar strings
db.usuarios.aggregate([
  { $project: { 
      nombre_completo: { $concat: ["$nombre", " ", "$apellidos"] }
    }
  }]
)

// Extraer año/mes/día de fecha
db.pedidos.aggregate([
  { $project: {
      year: { $year: "$fecha" },
      month: { $month: "$fecha" },
      day: { $dayOfMonth: "$fecha" }
    }
  }]
)

// Condicional
db.usuarios.aggregate([
  { $project: {
      nombre: 1,
      categoria_edad: {
        $cond: [
          { $gte: ["$edad", 18] },
          "adulto",
          "menor"
        ]
      }
    }
  }]
)

// If-else anidado
db.usuarios.aggregate([
  { $project: {
      nivel: {
        $switch: {
          branches: [
            { case: { $gte: ["$puntos", 100] }, then: "oro" },
            { case: { $gte: ["$puntos", 50] }, then: "plata" },
            { case: { $gte: ["$puntos", 20] }, then: "bronce" }
          ],
          default: "ninguno"
        }
      }
    }
  }]
)
```

### 4.3 Lookups (Joins)

```javascript
// LEFT JOIN con otra colección
db.pedidos.aggregate([
  {
    $lookup: {
      from: "clientes",
      localField: "cliente_id",
      foreignField: "_id",
      as: "datos_cliente"
    }
  },
  { $unwind: "$datos_cliente" },
  {
    $project: {
      pedido_id: "$_id",
      cliente: "$datos_cliente.nombre",
      total: 1
    }
  }
])

// Con pipeline dentro del lookup (MongoDB 4.2+)
db.pedidos.aggregate([
  {
    $lookup: {
      from: "clientes",
      let: { cliente_id: "$cliente_id" },
      pipeline: [
        { $match: { $expr: { $eq: ["$_id", "$$cliente_id"] } } },
        { $project: { nombre: 1, email: 1 } }
      ],
      as: "datos_cliente"
    }
  }
])
```

### 4.4 unwind, group, sort

```javascript
// Ejemplo completo
db.ventas.aggregate([
  // Desglosar arrays
  { $unwind: "$productos" },
  
  // Agrupar por mes y categoría
  { $group: {
      _id: {
        mes: { $month: "$fecha" },
        categoria: "$productos.categoria"
      },
      total_ventas: { $sum: "$productos.cantidad" },
      ingreso_total: { $sum: { $multiply: ["$productos.precio", "$productos.cantidad"] } }
    }
  },
  
  // Añadir campos calculados
  { $addFields: {
      mes_nombre: { 
        $arrayElemAt: [
          ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
           "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
          "$_id.mes"
        ]
      }
    }
  },
  
  // Ordenar
  { $sort: { "_id.mes": 1, ingreso_total: -1 } },
  
  // Formatear salida
  { $project: {
      _id: 0,
      mes: "$mes_nombre",
      categoria: "$_id.categoria",
      ventas: "$total_ventas",
      ingreso: { $round: ["$ingreso_total", 2] }
    }
  }
])
```

## 5. Índices

Los índices mejoran el rendimiento de las consultas.

### 5.1 Crear Índices

```javascript
// Índice simple
db.usuarios.createIndex({ email: 1 })

// Índice compuesto
db.ventas.createIndex({ fecha: -1, cliente_id: 1 })

// Índice único
db.usuarios.createIndex({ email: 1 }, { unique: true })

// Índice de texto (búsqueda de texto)
db.articulos.createIndex({ titulo: "text", contenido: "text" })

// Índice TTL (expira documentos automáticamente)
db.sesiones.createIndex({ creado_el: 1 }, { expireAfterSeconds: 3600 })  // 1 hora

// Índice Geoespacial
db.tiendas.createIndex({ ubicacion: "2dsphere" })

// Índice hashed (para distribuciones)
db.sharded.createIndex({ _id: "hashed" })
```

### 5.2 Ver Índices

```javascript
// Ver todos los índices de una colección
db.usuarios.getIndexes()

// Ver tamaño de índices
db.usuarios.totalIndexSize()
```

### 5.3 Eliminar Índices

```javascript
// Eliminar índice específico
db.usuarios.dropIndex("email_1")

// Eliminar todos los índices excepto _id
db.usuarios.dropIndexes()
```

### 5.4 Analizar Rendimiento

```javascript
// Ver plan de ejecución
db.usuarios.find({ email: "test@ejemplo.com" }).explain("executionStats")

// Buscar consultas lentas en el profiler
db.setProfilingLevel(1, { slowms: 100 })  // Registrar consultas > 100ms

// Ver resultado del profiler
db.system.profile.find().pretty()
```

## 6. Administración de Bases de Datos

### 6.1 Gestión de Bases de Datos

```javascript
// Ver base de datos actual
db

// Ver todas las bases de datos
show dbs

// Crear o usar base de datos
use mi_base_datos

// Eliminar base de datos actual
db.dropDatabase()
```

### 6.2 Gestión de Colecciones

```javascript
// Ver colecciones
show collections

// Crear colección con opciones
db.createCollection("logs", {
  capped: true,           // Tamaño máximo fijo
  size: 10000000,        // 10MB máximo
  max: 1000              // Máximo 1000 documentos
})

// Eliminar colección
db.logs.drop()
```

### 6.3 Gestión de Usuarios

```javascript
// Crear usuario administrador
db.createUser({
  user: "admin",
  pwd: "contraseña_segura",
  roles: [
    { role: "userAdminAnyDatabase", db: "admin" },
    { role: "dbAdminAnyDatabase", db: "admin" },
    { role: "readWriteAnyDatabase", db: "admin" }
  ]
})

// Crear usuario de aplicación
db.createUser({
  user: "appuser",
  pwd: "apppassword",
  roles: [
    { role: "readWrite", db: "miapp" },
    { role: "dbAdmin", db: "miapp" }
  ]
})

// Ver usuarios
db.getUsers()

// Eliminar usuario
db.dropUser("appuser")

// Cambiar contraseña
db.changeUserPassword("appuser", "nueva_contraseña")
```

### 6.4 Backup y Restore

```bash
# Backup (exportar)
mongodump --db=mibasededatos --out=/backup/

# Backup de una colección específica
mongodump --db=mibasededatos --collection=usuarios --out=/backup/

# Restore (importar)
mongorestore /backup/mibasededatos/

# Restore en base de datos específica
mongorestore --db=nueva_db /backup/mibasededatos/
```

### 6.5 Tareas Programadas (MongoDB Atlas)

```javascript
// Crear tarea programada en MongoDB Atlas
// En la interfaz de Atlas o con API

// Ejemplo de pipeline para limpiar datos antiguos
{
  "schedule": "0 2 * * *",  // Cada día a las 2:00 AM
  "pipeline": [
    { $match: { fecha: { $lt: ISODate("...") } } },
    { $out: "logs_archive" }
  ]
}
```

## 7. MongoDB Atlas (Servicio Cloud)

### 7.1 Conectar desde la terminal

```bash
# Conectar usando connection string
mongosh "mongodb+srv://cluster0.xxxxx.mongodb.net/mibasededatos" \
  --username miusuario
```

### 7.2 MongoDB Compass (GUI)

Herramienta gráfica oficial para:
- Visualizar bases de datos y colecciones
- Ejecutar consultas
- Ver y modificar documentos
- Crear índices
- Analizar rendimiento

Descarga desde: [mongodb.com/products/compass](https://www.mongodb.com/products/compass)

### 7.3 MongoDB Charts

Para crear visualizaciones y dashboards con los datos.

## 8. Comandos Útiles de Referencia

| Comando | Descripción |
|---------|-------------|
| `show dbs` | Ver bases de datos |
| `show collections` | Ver colecciones |
| `show users` | Ver usuarios |
| `show profile` | Ver últimas operaciones lentas |
| `db.help()` | Ver ayuda de la base de datos |
| `db.stats()` | Estadísticas de la base de datos |
| `db.collection.stats()` | Estadísticas de la colección |
| `db.collection.findOne()` | Buscar primer documento |
| `db.collection.estimatedDocumentCount()` | Contar documentos aprox. (más rápido) |
| `db.collection.distinct("campo")` | Valores únicos de un campo |

## 9. Errores Comunes y Soluciones

```javascript
// Error: "not authorized"
→ La autenticación está habilitada. Conectar con usuario y contraseña.

// Error: "too many positional elements"
→ Usar $ positional operator: { "items.$[elem].qty": 100 }

// Error: "cannot use the part of..." 
→ Revisar sintaxis del campo en documento incrustado.

// Error: "E11000 duplicate key error"
→ Violación de índice único. Verificar datos duplicados.

// Error: "Failed to refresh session"
→ Aumentar timeout de conexión o ajustar tiempo de vida del session.
```

---

## Resumen Rápido

```javascript
// --- CRUD básico ---
db.coleccion.insertOne({ ... })
db.coleccion.find({ ... })
db.coleccion.updateOne({ filtro }, { $set: { ... } })
db.coleccion.deleteOne({ filtro })

// --- Consultas ---
db.coleccion.find({ campo: valor })
db.coleccion.find({ campo: { $gt: 10 } })
db.coleccion.find({ $or: [...] })
db.coleccion.find().sort({ campo: -1 }).limit(10)

// --- Agregación ---
db.coleccion.aggregate([
  { $match: { ... } },
  { $group: { _id: "$campo", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

// --- Índices ---
db.coleccion.createIndex({ campo: 1 })
db.coleccion.getIndexes()
```
