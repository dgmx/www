# Tema 43: Administración de Sistemas de Base de Datos

## ÍNDICE 
```bash
1. INTRODUCCIÓN Y JUSTIFICACIÓN
2. CONCEPTOS BÁSICOS
3. ADMINISTRACIÓN DE LA BASE DE DATOS
   3.1. OBJETIVOS Y FUNCIONES DEL ADMINISTRADOR
   3.2. HERRAMIENTAS DE ADMINISTRACIÓN
   3.3. GESTIÓN DEL ALMACENAMIENTO
4. SEGURIDAD DE LA BASE DE DATOS
   4.1. SEGURIDAD SQL
   4.2. TRANSACCIONES
   4.3. RECUPERACIÓN DEL SISTEMA
   4.4. PROBLEMAS DE CONCURRENCIA
   4.5. AUDITORÍA
5. CONCLUSIÓN
6. BIBLIOGRAFÍA
```

---

## 1. Introducción y justificación

El presente tema forma parte del temario oficial publicado en el BOE de 13 de febrero de 1996, donde se aprueba el temario de acceso a la especialidad de Informática. 

A su vez, el actual tema 43 se ubica dentro del bloque temático de "Bases de Datos", como décimo tema del bloque.

A lo largo de este tema, a través de autores como Date C.J, Korth H. y Silberschatz, De Miguel A. y Piattini M. se van a introducir términos tan importantes como base de datos, sistema gestor de base de datos así como todo lo relacionado con la administración de estos sistemas gestores de bases de datos.

Los sistemas gestores de bases de datos (SGBD) aparecen ante la ineficacia de los sistemas de gestión antiguos que utilizaban ficheros para almacenar los datos, ya que eran propensos a errores como redundancia, falta de integridad, seguridad y concurrencia.

Los SGBD separan las bases de datos de las aplicaciones permitiendo estructurar los datos de forma que se pueda acceder a ellos con independencia de los programas que las gestionan. Para administrar los SGBD surge la figura del administrador (DBA), cuyas funciones son la de mantener la integridad, seguridad y disponibilidad de la base de datos.

Todos los sistemas informatizados son susceptibles de sufrir vulnerabilidades, fallos o abusos, por ello en el diseño de la base de datos es esencial preparar la forma de tratar situaciones que impliquen pérdida de datos.

Lo expuesto anteriormente justifica la importancia del tema y es por ello que el estudio de las bases de datos y los sistemas gestores de bases de datos en concreto está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro de los siguientes ciclos formativos:

- **CFGS de Desarrollo de Aplicaciones Multiplataforma** (Real Decreto 450/2010, Real Decreto 405/2023 y Orden/Decreto autonómico)
  - Módulo: Bases de datos
- **CFGS de Desarrollo de Aplicaciones Web** (Real Decreto 686/2010, Real Decreto 405/2023 y Orden/Decreto autonómico)
  - Módulo: Bases de datos
- **CFGS de Administración de Sistemas Informáticos en Red** (Real Decreto 1629/2009, Real Decreto 500/2024 y Orden/Decreto autonómico)
  - Módulo: Gestión de bases de datos

En el presente tema vamos a empezar definiendo una base de datos y un sistema gestor de base de datos para posteriormente centrarnos en los conceptos más importantes de la administración de los sistemas de bases de datos.

## 2. Conceptos básicos

Podemos definir una **base de datos** como un conjunto, colección o depósito de datos almacenados en un soporte informático no volátil. Los datos están interrelacionados y estructurados.

Las bases son utilizadas por los sistemas de aplicación de las empresas

Un **sistema gestor de base de datos o SGBD** es una colección de programas de aplicación que permite a los usuarios la creación y el mantenimiento de una base de datos, facilitando la definición, construcción y manipulación de la información contenida en ésta.

En la actualidad debido al gran volumen de datos que manejamos se requiere de sistemas gestores de bases de datos robustos, que nos permitan acceder y gestionar los datos de un modo eficaz y eficiente. Los sistemas gestores de bases de datos (SGBD) más extendidos son los relacionales.

Para gestionar adecuadamente los SGBD surge la figura del Administrador de la base de datos o DBA, cuyas funciones conlleva proteger la integridad, seguridad, disponibilidad y el mantenimiento de la base de datos

## 3. Administración de la base de datos

La administración de la BD se ocupa básicamente de asegurar que la información esté disponible para los usuarios y aplicaciones en el instante preciso y en la forma adecuada. Esta información ha de proporcionar dos características básicas: precisión y consistencia.

El Administrador de la Base de Datos (ABD ó DBA) interactúa tanto con el sistema como con los usuarios para llevar a cabo las tareas que permitan la puesta a punto y mantenimiento de las bases de datos.

### 3.1. Objetivos y funciones del administrador

Los objetivos y funciones para un administrador de la base de datos relacionados entre ellos son:

**Comunicación con los usuarios de la base de datos y responsables del sistema:**
- Detectar necesidades de uso, roles, privilegios, etc.
- Determinar la interfaz de conexión con otros sistemas ya existentes.
- Identificar recursos hardware y software disponibles en la organización y en su caso adoptarlos. Caso de no ser suficientes proponer su ampliación y/o mejora.
- Determinar la infraestructura de red existente y su posible ampliación en función de las nuevas demandas.

**Planificación, diseño e implementación de los sistemas de bases de datos:**
- Obtener los cuadernos de carga elaborados por los analistas y diseñadores donde se recogen los detalles de implantación de la BD.
- Desarrollar los scripts de creación de la BD.
- Desarrollar los scripts que permitan la puesta a punto de la BD.

**Establecimiento de normas y procedimientos:**
- Establecer normas y procedimientos para controlar la seguridad y la integridad de los datos de forma eficiente. Las normas se aplican particularmente al control del desarrollo y del uso de la programación y de las operaciones de la base de datos.
- En el área de la programación, las normas se establecen para asegurar que los programas se revisen y se prueben antes de ponerlos en producción.
- En el área de las operaciones, las normas pueden establecerse para mantener los diarios de las operaciones de las transacciones y se crean procedimientos para la corrección de los errores, para el tratamiento de los puntos de control y para garantizar la copia de seguridad y la recuperación.

**Mantener la integridad de los datos:**
- Protección ante accidentes tales como los errores en la entrada de los datos o en la programación, del uso malintencionado de la base de datos y de los fallos del hardware o del software.
- Garantizar la actualización de los datos bajo los principios de atomicidad derivados del uso de transacciones.

**Mantener la seguridad de los datos:**
- Garantizar el acceso a aquellos usuario y/o aplicaciones que estén reconocidos e identificados por el sistema.
- Determinar el nivel de seguridad exigible.

**Mantener la disponibilidad de los datos:**
- Establecer los componentes que se han de mantener en sistemas redundantes con el fin de garantizar su uso continuado.
- Procedimientos de recuperación ante posibles pérdidas de información.
- Determinar la necesidad de gestionar el almacenamiento mediante roles independientes.
- Arranque/parada de los procesos/servicios asociados a la BD.

**Carga de la BBDD:**
- Desarrollar y ejecutar los scripts que permitan llevar a cabo la migración de los datos normalmente existentes en algún otro sistema de almacenamiento de información (ficheros, otros SGBDs, etc).

**Mantenimiento de la BBDD:**
- Adecuar los parámetros de la base a las exigencias cambiantes de cada momento, dispositivos de almacenamiento, área de memoria… con el fin de garantizar la eficiencia en el acceso a la información.
- Creación de nuevos usuarios, grupos, roles…
- Modificación de objetos ya existentes, o en su caso creación de nuevos.
- Optimización del diccionario de datos y consultas.
- Políticas de salvaguarda y recuperación periódicas.

### 3.2. Herramientas de administración

El administrador de la base de datos puede utilizar distintas herramientas:

- **Lenguajes de definición de datos:** de manera que pueda especificar todos los objetos, atributos e interrelaciones que se almacenarán en la BD, su organización física en los soportes de ordenador, vistas de usuario y las restricciones de integridad y de confidencialidad.
- **Lenguajes de control de datos y de control de transacciones** DCL y TCL.
- **Utilidades del SGBD:** para copias de seguridad, carga y descarga de datos de la base a ficheros externos y viceversa.
- **Simuladores de administración:** Propias o externas como MySQL Workbench, SQL Server Studio o DBeaver.
- **Herramientas de ayuda al diseño:** como las herramientas CASE que dan soporte para el proceso de diseño de la BD.


### 3.3. Gestión del almacenamiento

Toda base de datos se almacena en algún sistema de memoria secundaria constituido por uno o varios ficheros sobre la arquitectura hardware del SGBD. Cada fichero únicamente puede estar asociado a una base de datos. 

La gestión del espacio en disco es una de las grandes preocupaciones de cualquier administrador de base de datos. 

En relación con la gestión del almacenamiento, el administrador de la base de datos perseguirá los siguientes objetivos:

- Disminuir los tiempos de respuesta.
- Minimizar el espacio de almacenamiento.
- Evitar las reorganizaciones costosas en tiempo y en recursos.
- Proporcionar el máximo de seguridad.
- Optimizar el consumo de recursos.

## 4. Seguridad de la base de datos.

Los mecanismos de seguridad deben garantizar que los usuarios solo acceden a la información a la que están autorizados. Cada usuario tendrá una serie de permisos, solo los estrictamente necesarios para el desempeño de sus funciones.

Las medidas de seguridad son funciones del DBA.

### 4.1 Seguridad SQL

Algunas medidas de seguridad son: Vistas (DDL), permisos (DCL) y transacciones (TCL).

**a) Vistas:**

Las vistas pueden ser utilizadas con propósitos de seguridad, delimitando el acceso de los usuarios a ciertas porciones de la información.


Es importante destacar que el uso de "WITH CHECK OPTION" garantiza que se puedan insertar registros en la tabla, a través de la vista, sólo si se cumple la condición de restricción especificada.

Ejemplo genérico de vista con CHECK OPTION:

```sql
CREATE VIEW vista_empleados_activos AS
SELECT empleado_id, nombre, departamento, estado
FROM empleados
WHERE estado = 'ACTIVO'
WITH CHECK OPTION;
```

En este caso, la vista `vista_empleados_activos` sólo permite ver y modificar filas de la tabla `empleados` cuyo `estado` es `'ACTIVO'`. Cualquier intento de insertar o actualizar registros a través de la vista que rompa la condición se rechazará.

Las vistas son, junto con los sinónimos, las herramientas principales para la definición de los esquemas externos de los usuarios de la BD.

El uso de la clausula "WITH CHECK OPTION" garantiza que se puedan insertar registros en la tabla a través de la vista, siempre que se cumpla la condición de la subconsulta.


**b) Permisos, roles y perfiles**

- **Permisos**: El lenguaje de definición de datos de SQL incluye órdenes para conceder y retirar privilegios. La instrucción grant se utiliza para conferir autorizaciones. Se utiliza el comando DCL **GRANT**

  ```sql
  GRANT privilegios
  ON elemento
  TO nombreUsuario IDENTIFIED BY 'contraseña'
  [ WITH GRANT OPTION ];
  ```

  **Ejemplo:**

  ```sql
  GRANT ALL PRIVILEGES ON * to administrador@localhost IDENTIFIED BY "JOSE";
  ```

  ```sql
  REVOKE privilegios
  ON elemento
  FROM nombre_de_usuario;
  ```

  **Ejemplo:**

  ```sql
  REVOKE ALL PRIVILEGES ON * FROM administrador@localhost;
  ```

- **Roles**: Los roles permiten definir tipos de usuarios en base a una serie de permisos comunes, para crear un rol se utiliza:

  ```sql
  CREATE ROLE <rol>;
  ```

- **Perfiles**: Permiten delimitar qué recursos asignar a determinados usuarios.

  ```sql
  CREATE PROFILE <perfil> LIMIT <parámetros>;
  ```

### 4.2. TRANSACCIONES

Una transacción se define como una unidad de trabajo que consiste en un bloque de operaciones que se ejecuta como una unidad indivisible. O se ejecuta de forma completa o no se ejecuta nada, evitando que el sistema pueda quedar inconsistente

Para ello el SGBD proporciona el TCL o "control de transacciones", y las operaciones en SQL son `COMMIT` y `ROLLBACK`.

La mayoría de los SGBD incluyen las funciones *rollback, commit y autocommit*

Para validar los cambios que se hagan en la base de datos tenemos que ejecutar la orden COMMIT:

```sql
COMMIT;
```

La orden ROLLBACK aborta la transacción volviendo a la situación de las tablas de la base de datos desde el último COMMIT siempre y cuando no esté activado el AUTOCOMMIT:

```sql
ROLLBACK;
```

### 4.3. RECUPERACIÓN DEL SISTEMA

El sistema debe estar preparado para recuperarse no solo de fallos puramente locales, sino también de fallos globales. Un fallo local afecta sólo a la transacción en la que se presentó el fallo, mientras que un fallo global afecta a todas las transacciones que se estaban realizando en el momento del fallo.

Ante un fallo global, el sistema deberá recuperarse de dos tipos de fallos:

- **Fallos del sistema**, que afectan a todas las transacciones que se están realizando, pero no dañan físicamente a la base de datos. También se conocen como caídas suaves.
- **Fallos de los medios de almacenamiento**, que causan daños a la base de datos o a una porción de ella, y afectan al menos a las transacciones que están utilizando esa porción. También se conocen como caídas duras.

### 4.4. PROBLEMAS DE CONCURRENCIA

La mayoría de los SGBD son multiusuario. En los sistemas concurrentes múltiples usuarios pueden acceder de forma simultanea a los mismos objetos. En estos sistemas se necesita un mecanismo de control de concurrencia para asegurar que ninguna transacción concurrente interfiera con las operaciones de las demás.

La técnica mas habitual para estas controlar estas situaciones es el bloqueo, cuando una transacción toca un dato es bloqueado y el resto debe esperar a su término. Se suelen producir 2 tipos de bloqueos:

- Exclusivo: Nadie lee ni escribe. Solo `UPDATE` y `DELETE`
- Compartido: Lectura permitida, escritura bloqueada: `SELECT`

### 4.5. AUDITORÍA

La auditoría de la BD permitirá al administrador de ella conocer detalles acerca del uso de la BD por parte de los usuarios. 

Los datos generados por las auditorias se almacenan en otra base de datos, por lo que controlar el impacto que este genera en la base de datos tanto en almacenamiento como en rendimiento es responsabilidad del administrador.

Existen dos niveles de auditoría:

- **A nivel de sesión o sistema**: Nos permite conocer detalles propios de la sesión (usuarios conectados a la BD, bases de datos o tablas a las que accede, etc.). Muy bajo impacto en el rendimiento del SGBD
- **A nivel de objeto (DDL)**: Audita los objetos y las operaciones sobre ellos. Cambios en la estructura de la base de datos. Obligatorio en producción. Bajo impacto.
- **Nivel de dato (DML)**: Cambios en el contenido, solo para tablas críticas, muy alto impacto 

## 5. Conclusión

La administración de bases de datos es esencial para garantizar que la información esté disponible, íntegra y segura. El DBA actúa como puente entre los aspectos técnicos (rendimiento, almacenamiento, recuperación) y las necesidades organizativas (usuarios, permisos, planificación). Sin una gestión adecuada —normas claras, herramientas de monitorización, copias de seguridad y control de acceso—, los datos corren riesgo de pérdida, corrupción o acceso indebido. 

En definitiva, una buena administración no es opcional: es la base que sostiene la fiabilidad de cualquier sistema de información.

En el tema se han analizado algunas de las tareas que pueden ayudar a mantener una base de datos segura.

## 6. Bibliografía
- **Date, C.J.** (2000). *Introducción a los sistemas de bases de datos*. Addison-Wesley.
- **De Miguel A, Piattini M** (1999). *Fundamentos y modelos de BBDD*. Ra-Ma.
- **Korth H, Silberschatz** (2002). *Fundamentos de bases de datos*. McGraw-Hill.
- **Núñez, R.** (2023). *Gestión de bases de datos*. Ra-Ma.
- Oracle, MySQL, MongoDB, MariaDB, SQL Server




