# Resumen LDAP (DPL)

## Conceptos y Arquitectura

En 1988, la CCITT creó el estándar **`X.500`**, sobre servicios de directorio.
**`X.500`** organiza las entradas en el directorio de manera jerárquica, capaz de almacenar gran cantidad de datos, con grandes capacidades de búsqueda y fácilmente escalable. **`X.500`** especifica que la comunicación entre el cliente y el servidor de directorio debe emplear el **Directory Access Protocol (DAP)**.

**LDAP (Lightweight Directory Access Protocol)** surge como una alternativa a DAP. Las claves del éxito de LDAP en comparación con DAP de X.500 son:

- LDAP utiliza `TCP/IP` ya que requiere menos recursos y está más disponible.
- LDAP es más fácil de comprender e implementar que `X.500`.
- LDAP representa la información mediante cadenas de caracteres en lugar de complicadas estructuras `ASN.1`.

## Definición

**LDAP (Lightweight Directory Access Protocol)** es un servicio de directorios que organiza las entradas de manera jerárquica. Surge como una alternativa a DAP `(X.500)`.

El directorio **LDAP** tiene una **estructura en forma de árbol denominado DIT (Directory Information Tree)**. Cada entrada del directorio describe un objeto.
**La ruta completa a una entrada** se identifica como **DN (Distinguished Name)** y está **compuesto** por una secuencia de partes más pequeñas llamadas **RDN (Relative Distinguished Name)**.

## Funcionamiento de LDAP

El esquema de interacción entre el cliente y el servidor LDAP sigue el siguiente esquema:

1. El cliente establece una sesión con el servidor LDAP. El cliente indica el servidor y el puerto en el que el servidor LDAP está escuchando. El cliente puede proporcionar información de autenticación o establecer una sesión anónima con los accesos por defecto.
2. El cliente efectúa las operaciones sobre los datos. LDAP proporciona capacidades de búsqueda, lectura y actualización.
3. Una vez finalizadas las operaciones, el cliente cierra la sesión.

```
+-----------------------+           +-----------------------+
|   Aplicación Cliente  |           |  Servidor Directorio  |
|-----------------------|           |-----------------------|
| Aplicación            |           | Recibir Mensaje       |
|   |                   |           |        |              |
|   v                   |           |        v              |
| API <--- Respuesta    |           | Acceso al Directorio  |
|   |                   |           |        |              |
|   v                   |           |        v              |
| Cliente de Directorio |           | Enviar Respuesta      |
|   |                   |           |        |              |
|   v                   |           |        v              |
| TCP/IP                |<--------->| TCP/IP                |
+-----------------------+           +-----------------------+
                                        |
                                        v
                                   +---------+
                                   |Directorio|
                                   +---------+
```

## Definición de las Estructuras LDAP

Una clase de objeto (**objectClass**) es una descripción general de un tipo de objeto. Todos los objetos de LDAP deben tener el atributo objectClass. La definición de objectClass especifica qué atributos requiere un objeto LDAP, así como las clases de objetos que pueden existir. Por lo general, existen dos tipos de objetos:

- **Contenedor**: Este tipo de objeto puede contener a su vez otros objetos. Algunos ejemplos de estos elementos son: `Root`, `c` (country), `ou` (OrganizationalUnit) y `dc` (domainComponent).
- **Hoja**: Este tipo de objeto se encuentra al final de una rama y carece de objetos subordinados. Algunos ejemplos son: `Person/InetOrgPerson` o `groupofNames`.

Un esquema (**schema**) define qué clases de objetos se pueden almacenar en el directorio, qué atributos deben contener, qué atributos son opcionales y el formato de los atributos.

## Formato LDIF

El formato **LDIF** es el estándar para representar entradas del directorio en formato texto ASCII, que posee la siguiente sintaxis:

```bash
dn: <nombre distinguido>
<nombre_atributo>: <valor>
<nombre_atributo>: <valor>
<nombre_atributo>: <valor>
```

Una entrada del directorio en formato de intercambio de datos LDIF consiste en dos partes:

- El DN que debe figurar en la primera línea de la entrada y que se compone de la cadena dn: seguida del nombre distinguido (DN) de la entrada.
- La segunda parte son los atributos de la entrada. Cada atributo se compone de un nombre de atributo, seguido del carácter dos puntos ':' y el valor del atributo. Si hay atributos multivaluados deben ponerse seguidos.
No existe ningún orden preestablecido para la colocación de los atributos, pero es conveniente listar primero el atributo objectclass, para mejorar la legibilidad de la entrada.

En un archivo LDIF puede haber mas de una entrada definida, cada entrada se separa de las demás por una línea en blanco. A su vez, cada entrada puede tener una cantidad arbitraria de pares <nombre_atributo>: <valor\>.

Este formato es útil tanto para realizar copias de seguridad de los datos de un servidor LDAP, como para importar pequeños cambios que se necesiten realizar manualmente en los datos, siempre manteniendo la independencia de la implementación LDAP y de la plataforma donde esté instalada.

## Siglas

- DAP: Directory Access Protocol
- LDAP: Lightweight Directory Access Protocol
- DIT: Directory Information Tree
- DN: Distinguished Name
- RDN: Relative Distinguished Name
- LDIF: Lightweight Data Interchange Format

### Ejemplo

A continuación puedes observar un ejemplo de una entrada para describir una cuenta de usuario en un servidor:

```bash
dn: uid=Def,ou=DAW,dc=userver,dc=local
objectClass: top
objectClass: posixAccount
objectClass: inetOrgPerson
objectClass: person
cn: def
uid: def
uidNumber: 2000
gidNumber: 2000
homeDirectory: /home/def
loginShell: /bin/bash
userPassword: {SSHA}434fdasfe43Ff45r4--4!VRG23
sn: userver
mail: def@userver.local
givenName: Def
```

- **top**: Es una clase abstracta, padre de todo objeto LDAP. Es el que define que todo objeto LDAP debe tener un atributo objectClass.
- **posixaccount**: Es un ObjectClass usados en sistemas POSIX(Portable Operating System Interface.)
  - cn
  - userPassword
  - uid
  - uidNumber
  - gidNumber
  - homeDirectory
  - loginShell
- inetOrgPerson:
  - gn / givenName
  - mail
  - uid
- person:
  - cn
  - sn
  - userPassword

### Atributos

| Nombre | Alias | objectClass | Notas |
| -------- | -------- | -------- |--------  |
| c    | countryName    | country    | código de dos carácteres definido en ISO 3166  |
| cn    | commonName    | person, posixAccount | nombre común |
| dc    | domainComponent | dcObject    | cualquier parte del nombre de dominio e.g. domain.com, domain or com|
| co    | friendlyCountryName | friendlyCountry | Nombre completo de un país|
| gn    | givenName | inetOrgPerson | Primer nombre o nombre de Pila|
| homePhone    | homeTelephoneNumber | inetOrgPerson | número de casa |
| -    |  jpegPhoto | inetOrgPerson | Foto JPG|
| l    |   localityName | locality, organizationalPerson | localidad |
| mail     | rfc822Mailbox | inetOrgPerson | email de usuario|
| mobile     |  mobileTelephoneNumbe | inetOrgPerson | móvil del usuario|
| o     |  organizationName | organization | Nombre de la organización|
| ou  | organisationalUnitName | organizationUnit | departamento o subentidad |
| -  | owner |  groupOfNames | propietario |
| pager    | pagerTelephoneNumber | inetOrgPerson ||
| -    | postalAddress | organizationalPerson | dirección |
| postalCode    | postalCode | organizationalPerson | código postal |
| sn    | surname | person | apellido |
| st    | stateOrProvinceName | organizationalPerson | estado o provincia |
| street    | streetAddress | organizationalPerson | calle |
| -    | telephoneNumber | organizationalPerson | número de teléfono |
| userPassword    | - | person, posixAccount | contraseña del usuario |
| uid    | userid | posixAccount | nombre del usuario |

## OpenLDAP

OpenLDAP es una implementación libre y de código abierto del protocolo LDAP desarrollada por el proyecto OpenLDAP.

## Comandos importantes

- **`slapcat`**: es una utilidad de OpenLDAP que permite generar un LDIF.
- **`slappasswd`**: obtendremos una cadena codificada con hash SHA-1. (Para codificar las contraseñas)
- **`ldapadd -x -D "nombre del dn" -W -f "ldif"`**: para añadir un componente LDIF a la base de datos.

  Ejemplo:

  ```bash
  $ldapadd -x -D cn=admin,dc=daw2,dc=inf -W -f usr.ldif
  ```

- **`ldapsearch -xLLL -b "cd del dn" "uid" "valores a obtener"`**: para buscar ciertos valores dentro del LDAP.
  
    Ejemplo:

  ```bash
  $ldapsearch -xLLL -b "dc=daw2, dc=inf" uid=sara sn givenName cn
  ```

## Cosas a tener en cuenta

> **`gidNumber`** preferiblemente **> 10000**: así evitamos solaparnos con los gid del sistema (de forma prefeterminada en 1000). Deben ser diferentes para cada grupo.

> **`uidNumber`** preferiblemente **> 2000**: así evitamos solaparnos con los uid del sistema. Deben ser diferentes para cada usuario.

Los valores de `uidNumber` y `gidNumber` no pueden coincidir entre si.

[Apendice E: LDAP - Object Classes y Atributos](https://www.zytrax.com/books/ldap/ape/)
