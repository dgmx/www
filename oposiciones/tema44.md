# TEMA 44 INF: TÉCNICAS Y PROCEDIMIENTOS PARA LA SEGURIDAD DE LOS DATOS

1. INTRODUCCIÓN
2. TÉCNICAS Y PROCEDIMIENTOS PARA LA SEGURIDAD DE LOS DATOS. CONCEPTOS BÁSICOS
3. SEGURIDAD DE LAS BASES DE DATOS. CONFIDENCIALIDAD
   3.1. GESTIÓN DE USUARIOS Y PERMISOS
   3.2. VISTAS
   3.3. ENCRIPTACIÓN DE DATOS
   3.4. PROGRAMAS DE APLICACIÓN
   3.5. AUDITORÍA
4. INTEGRIDAD DE LAS BASES DE DATOS
   4.1. RESTRICCIONES
   4.2. TRANSACCIONES
   4.3. RECUPERACIÓN DEL SISTEMA
   4.4. PROBLEMAS DE CONCURRENCIA
5. CONCLUSIÓN
6. BIBLIOGRAFÍA

---

## 1. INTRODUCCIÓN

El presente tema forma parte del temario oficial publicado en el BOE de 13 de febrero de 1996, donde se aprueba el temario de acceso a la especialidad de Informática.

A su vez, el actual tema 44 se ubica dentro del bloque temático de "Bases de Datos", como undécimo tema del bloque.

A lo largo de este tema, a través de autores como Date C.J, Korth H. y Silberschatz, De Miguel A, y Piattini M se van a introducir términos tan importantes como base de datos, sistema gestor de base de datos así como todo lo relacionado con la seguridad de los datos en estos sistemas gestores de bases de datos.

Antes de aparecer los sistemas gestores de bases de datos (SGBD), la información se trataba y se gestionaba utilizando los típicos sistemas de gestión de archivos que iban soportados sobre un sistema operativo. Estos consistían en un conjunto de programas que definían y trabajaban sus propios datos. Los datos se almacenaban en archivos y los programas manejaban esos archivos para obtener la información. Si la estructura de los datos de los archivos cambiaba, todos los programas que los manejaban debían modificarse.

Los sistemas gestores de bases de datos aparecen ante la ineficacia de los sistemas de gestión antiguos que utilizaban ficheros para almacenar los datos, ya que eran propensos a errores como redundancia, falta de integridad, seguridad y concurrencia.

Los SGBD separan las bases de datos de las aplicaciones permitiendo estructurar los datos de forma que se pueda acceder a ellos con independencia de los programas que las gestionan. Para administrar los SGBD surge la figura del administrador (DBA), cuyas funciones son la de mantener la integridad, seguridad y disponibilidad de la base de datos.

Todos los sistemas informatizados son susceptibles de sufrir vulnerabilidades, fallos o abusos, por ello en el diseño de la base de datos es esencial preparar la forma de tratar situaciones que impliquen pérdida de datos.

Lo expuesto anteriormente justifica la importancia del tema ya que cada vez es más importante conocer y manejar adecuadamente las técnicas y procedimientos para la seguridad de los datos porque en la actualidad es cada vez más habitual tener todo informatizado y nuestros datos están constantemente amenazados por personas externas para su uso fraudulento. Y es por ello que el estudio de las bases de datos y esta seguridad de los datos en concreto está presente dentro del currículo de la familia profesional de Informática y Comunicaciones. Concretamente se pueden ubicar dentro del siguiente ciclo formativo:

- CFGS de Administración de Sistemas Informáticos en Red (Real Decreto 1629/2009, Real Decreto 500/2024 y Orden/Decreto autonómico)
  - Módulo: Administración de SGBD.

En el presente tema vamos a empezar definiendo una base de datos y un sistema gestor de base de datos para posteriormente centrarnos en los conceptos más importantes relacionados con la seguridad de datos.

## 2. TÉCNICAS Y PROCEDIMIENTOS PARA LA SEGURIDAD DE LOS DATOS. CONCEPTOS BÁSICOS

Podemos definir una base de datos como un conjunto, colección o depósito de datos almacenados en un soporte informático persistente. Los datos están interrelacionados y estructurados.

Las bases son utilizadas por los sistemas de aplicación de las empresas

Un sistema gestor de base de datos o SGBD es una colección de programas de aplicación que permite a los usuarios la creación y el mantenimiento de una base de datos, facilitando la definición, construcción y manipulación de la información contenida en ésta.

En la actualidad debido al gran volumen de datos que manejamos se requiere de sistemas gestores de bases de datos robustos, que nos permitan acceder y gestionar los datos de un modo eficaz y eficiente. Los sistemas gestores de bases de datos (SGBD) más extendidos son los relacionales.

El problema de la seguridad consiste en lograr que los recursos de un sistema sean, bajo toda circunstancia, utilizados para los fines previstos. Los datos de la base de datos deben estar protegidos contra los accesos no autorizados, de la destrucción o alteración malintencionada y de la introducción de inconsistencias.

Las principales áreas de trabajo para garantizar la seguridad de los datos son la confidencialidad y la integridad:

- **La confidencialidad** trata de garantizar que los usuarios no accedan a información no autorizada. Esto se consigue por medio de:
  - **Políticas activas**: gestión de usuarios y permisos, vistas y cifrado de la información.
  - **Políticas pasivas**: auditoría.
- **Garantizar la integridad** consiste en asegurar que los datos reflejen la realidad, cumpliendo las reglas y restricciones definidas en el diseño de la BD. Para garantizar la integridad de los datos de la BD es fundamental partir de un diseño adecuado ya que eso evitará posibles anomalías en la inserción, modificación o borrado de información. Por su parte, el SGBD dispone de varias herramientas que permiten mantener la integridad de la información:
  - **Políticas activas**: restricciones, control de concurrencia, gestión de transacciones.
  - **Políticas pasivas**: respaldo y recuperación.


## 3. SEGURIDAD DE LAS BASES DE DATOS. CONFIDENCIALIDAD

La información almacenada en ordenadores es un recurso valioso y este valor suele estar relacionado directamente con la capacidad para mantener la confidencialidad, y el nivel que debe alcanzar la protección depende hasta cierto punto de cómo sea de sensible. Existe la gran necesidad de proteger la información contra intentos malintencionados, por parte de los hackers o delincuentes informáticos. Para todo ello podemos, entre otras cosas, tomar medidas de seguridad como se explica en los siguientes apartados.

### 3.1. GESTIÓN DE USUARIOS Y PERMISOS

En los SGBD existen diferentes perfiles de usuario. Generalmente existen:

- **Administrador de la base de datos**: encargado de la función de administración de la BD. Va a tener las responsabilidades de definición, administración, seguridad, privacidad e integridad de la información utilizada.
- **Usuarios de la base de datos**: pueden existir diferentes usuarios con diferentes accesos y privilegios sobre los datos:
  - Usuarios técnicos (diseñadores, operadores y personal de mantenimiento, analistas y programadores de aplicación) que son profesionales informáticos cuyo objetivo es desarrollar los programas de aplicación que posteriormente utilizarán los usuarios finales de la BD.
  - Usuarios finales que son los que a través de programas de aplicación interactúan con la BD. Estos suelen ser usuarios no especializados.

Para controlar los usuarios que acceden a la base de datos y los tipos de operaciones que están autorizados a realizar los SGBD implementan varios mecanismos:

- **Autenticación de usuarios**: Los usuarios tendrán que identificarse, lo que garantiza que solamente tengan acceso a la base de datos los usuarios con permiso y además cada usuario tendrá acceso a su esquema externo de la base de datos. El registro de los usuarios que acceden a la base de datos permitirá también implementar funciones de monitorización y auditoría.

  ```sql
  CREATE USER <nombre_usuario>;
  ```

- **Permisos**: Asignar permisos garantizará que los usuarios puedan acceder solamente a aquellos objetos o funciones para las que tengan permiso. El lenguaje de definición de datos de SQL incluye órdenes para conceder y retirar privilegios. La instrucción grant se utiliza para conferir autorizaciones. La forma básica de esta instrucción es la siguiente: (Korth H. y Silberschatz, 2002)

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

- **Roles**: Gestionar usuarios y permisos de manera individual en sistemas donde existen numerosos usuarios puede ser una labor muy tediosa. Para facilitar esto existe el concepto de rol. Los roles permiten definir tipos de usuarios en base a los permisos que éstos tendrán sobre la BD, de forma que para cada tipo de usuario se crearía un rol y en lugar de asignar los permisos a los usuarios se asignarían los permisos al rol y el rol a los usuarios.

  ```sql
  CREATE ROLE <rol>;
  ```

- **Perfiles**: Permiten delimitar qué recursos asignar a determinados usuarios.

  ```sql
  CREATE PROFILE <perfil> LIMIT <parámetros>;
  ```

### 3.2. VISTAS

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

### 3.3. ENCRIPTACIÓN DE DATOS

Los SGBD implementan diferentes formas de cifrar la información que almacenan, haciendo que dicha información resulte ininteligible sin las claves de cifrado. El cifrado protege los datos sensibles ante accesos no autorizados, ya sea por ciberataques, filtraciones o robo de dispositivos

Existen 3 tipos de cifrado:

- **Cifrado a nivel de disco o sistema de archivos**: Cifra automáticamente los archivos, es transparente para las aplicaciones, también llamado cifrado transparente.
- **Cifrado a nivel de columna**: Cifra datos sensibles como contraseñas o datos bancarios, requiere modificaciones en la aplicación o consultas.
- **Cifrado a nivel de aplicación**: La aplicación se encarga del cifrado, la base de datos almacena solo datos cifrados.

### 3.4. PROGRAMAS DE APLICACIÓN

El uso de programas de aplicación es una técnica bastante común de proporcionar seguridad a una base de datos. La mayoría de los sistemas soportan el empleo de programas de aplicación. Si un sistema de bases de datos no soporta mecanismos de protección mediante contraseñas, o si la cantidad de protección incorporada es poco adecuada, las deficiencias pueden ser corregidas mediante programas de protección escritos por el usuario. Así, un programa puede actuar como interfaz entre una persona que está introduciendo datos y la base de datos, incorporando al mismo tiempo a ésta una seguridad adicional. Esencialmente, un programa de aplicación puede realizar virtualmente cualquier tipo de protección mediante contraseñas.

### 3.5. AUDITORÍA

La auditoría de la BD permitirá al administrador de ella conocer detalles acerca del uso de la BD por parte de los usuarios. Existen dos niveles de auditoría:

- **A nivel de sesión o sistema**: Nos permite conocer detalles propios de la sesión (usuarios conectados a la BD, tablas a las que accede, etc.). Muy bajo impacto en el rendimiento del SGBD
- **A nivel de objeto (DDL)**: Audita los objetos y las operaciones sobre ellos. Cambios en la estructura de la base de datos. Obligatorio en producción. Bajo impacto.
- **Nivel de dato (DML)**: Cambios en el contenido, solo para tablas críticas, muy alto impacto 


## 4. INTEGRIDAD DE LAS BASES DE DATOS

Además de proteger nuestra base de datos ante accesos no deseado también es necesario protegerlas contra la corrupción originada por la presencia de información de poca calidad como datos no válidos o inconsistentes. Estos errores de datos pueden aparecer en cualquier momento, pero afortunadamente es posible proteger la base de datos contra muchos de estos errores mediante técnicas adecuadas de validación.

### 4.1. RESTRICCIONES

Una condición impuesta sobre un conjunto determinado de datos se suele denominar una restricción o control de integridad. Las restricciones pueden aplicarse bien a columnas individuales, a la relación entre dos columnas diferentes (normalmente entre tablas distintas) o a las filas de una o más tablas.

Cuando se intente introducir una nueva fila de datos que viole las condiciones especificadas por alguna restricción, se negará la entrada de la misma en la base de datos.

Los SGBD nos permiten tener verificación de restricciones de manera automática sólo requiriendo que el diseñador introduzca las líneas apropiadas dentro de la definición de la base de datos. Pero la mayoría de los SGBD tienen capacidades muy limitadas en esta área. Por eso existe otro mecanismo para la especificación de restricciones que es el uso de programas de aplicación para el control de la entrada de toda la información de una base de datos. Aunque este mecanismo es mucho más seguro tiene como desventaja el gasto considerable de trabajo por parte de los diseñadores e implementadores de la base de datos.

Por todo esto la solución más frecuente suele ser la combinación de los dos tipos de mecanismos de comprobación.

### 4.2. TRANSACCIONES

Una transacción es una unidad lógica de trabajo. Es una secuencia de operaciones en una base de datos mediante la cual un estado consistente de la base de datos se transforma en otro estado consistente, sin conservar por fuerza la consistencia en todos los estados intermedios.

Por definición, la base de datos se encuentra en un estado consistente antes de que se empiece a ejecutar una transacción, y también lo deberá estar cuando la transacción termine de ejecutarse. (De Miguel A, y Piattini M, 1999)

Para ello tenemos un componente del sistema encargado de este propósito denominado "gestor de transacciones", y las operaciones en SQL son COMMIT y ROLLBACK.

La mayoría de los SGBD incluyen las funciones rollback, commit y autocommit.

Supongamos que queremos borrar una fila de una tabla, pero, al teclear la orden SQL, se nos olvida la cláusula WHERE y borramos todas las filas de la tabla. Esto no es problema pues podemos dar marcha atrás a un trabajo realizado mediante la orden ROLLBACK, siempre y cuando no hayamos validado los cambios en la base de datos mediante la orden COMMIT.

Cuando hacemos transacciones sobre la base de datos, es decir, cuando insertamos, actualizamos y eliminamos datos en las tablas, los cambios no se aplicarán a la base de datos hasta que no hagamos un COMMIT. Esto significa que, si durante el tiempo que hemos estado realizando transacciones, no hemos hecho ningún COMMIT y de pronto se va la luz, todo el trabajo se habrá perdido, y nuestras tablas estarán en la situación de partida.

Para validar los cambios que se hagan en la base de datos tenemos que ejecutar la orden COMMIT:

```sql
COMMIT;
```

La orden ROLLBACK aborta la transacción volviendo a la situación de las tablas de la base de datos desde el último COMMIT siempre y cuando no esté activado el AUTOCOMMIT:

```sql
ROLLBACK;
```

Para asegurar la integridad de los datos se necesita que el sistema de base de datos mantenga las siguientes propiedades en las transacciones:

- Atomicidad.
- Consistencia.
- Aislamiento.
- Durabilidad.

### 4.3. RECUPERACIÓN DEL SISTEMA

El sistema debe estar preparado para recuperarse no solo de fallos puramente locales, sino también de fallos globales. Un fallo local afecta sólo a la transacción en la que se presentó el fallo, mientras que un fallo global afecta a todas las transacciones que se estaban realizando en el momento del fallo.

Ante un fallo global, el sistema deberá recuperarse de dos tipos de fallos:

- **Fallos del sistema**, que afectan a todas las transacciones que se están realizando, pero no dañan físicamente a la base de datos. También se conocen como caídas suaves.
- **Fallos de los medios de almacenamiento**, que causan daños a la base de datos o a una porción de ella, y afectan al menos a las transacciones que están utilizando esa porción. También se conocen como caídas duras.

### 4.4. PROBLEMAS DE CONCURRENCIA

La mayoría de los SGBD son multiusuario. En estos sistemas se necesita un mecanismo de control de concurrencia para asegurar que ninguna transacción concurrente interfiera con las operaciones de las demás.

Son tres las situaciones en las que una transacción, aunque correcta en sí, puede producir de todos modos un resultado incorrecto debido a una interferencia por parte de alguna otra transacción:

- El problema de la modificación perdida.
- El problema de la dependencia no comprometida.
- El problema del análisis inconsistente.

El bloqueo es la técnica más usual que se utiliza para resolver problemas de concurrencia. La noción básica de bloqueo es simple: cuando una transacción requiere la seguridad de que algún objeto en la cual está interesada no cambiará de alguna manera no predecible sin que ella se dé cuenta, adquiere un bloqueo sobre ese objeto, con lo que ninguna transacción podrá leer ni modificar dicho objeto.


## 5. CONCLUSIÓN

En el presente tema se ha presentado una visión global de las técnicas y procedimientos para la seguridad de los datos centrándonos en las bases de datos y los sistemas gestores de bases de datos ya que actualmente son técnicas imprescindibles para protegernos porque prácticamente en la totalidad de las aplicaciones que utilizamos como usuarios o que utilizan las empresas para su gestión diaria se usan bases de datos que están expuestas a usuarios malintencionados que pueden utilizar nuestros datos para su beneficio y se encuentran también expuestas a problemas externos que pudieran ocurrir como inconsistencias, pérdidas de datos por errores humanos o incluso por catástrofes naturales. Por ello podemos afirmar que este tema es muy importante debido a la demostrada importancia que tienen las bases de datos y los sistemas gestores de bases de datos en nuestra vida cotidiana y lo necesario que es el conocimiento y buen uso de las técnicas y procedimientos de seguridad vistos en el presente tema.

## 6. BIBLIOGRAFÍA

- Date C.J (2000). *Introducción a los sistemas de bases de datos*. Editorial Addison-Wesley.
- De Miguel A, y Piattini M (1999). *Fundamentos y modelos de BBDD*. Editorial Ra-Ma.
- Korth H. y Silberschatz (2002). *Fundamentos de bases de datos*. Editorial McGraw-Hill.
- Núñez R (2023). *Gestión de bases de datos*. Editorial Ra-Ma.
