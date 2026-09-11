---
title: 'Gestiona usuarios y contraseñas de bases de datos en FlyEnv'
head:
  - - meta
    - name: description
      content: 'Gestiona usuarios y contraseñas de MySQL, MariaDB, PostgreSQL y MongoDB en FlyEnv, incluida la creación de bases de datos y el restablecimiento de contraseñas.'
---

# Gestión de usuarios de bases de datos y configuración de contraseñas en FlyEnv

Gestionar usuarios y contraseñas de bases de datos es una parte fundamental del desarrollo local. FlyEnv lo simplifica con herramientas de gestión integradas para todas las bases de datos soportadas, sin necesidad de usar la línea de comandos.

## Contraseñas iniciales de las cuentas

Cuando instalas una base de datos por primera vez a través de FlyEnv, se configuran credenciales predeterminadas por seguridad y comodidad:

| Base de datos | Usuario | Contraseña inicial |
| --- | --- | --- |
| **MySQL** | root | root |
| **MariaDB** | root | root |
| **PostgreSQL** | root | Ninguna (sin contraseña por defecto) |
| **MongoDB** | - | Ninguna (sin autenticación por defecto) |

**Importante**: cambia las contraseñas predeterminadas antes de exponer las bases de datos a la red.

## Interfaz de gestión de bases de datos integrada (MySQL y MariaDB)

FlyEnv incluye ahora una potente interfaz de gestión integrada para MySQL y MariaDB: no necesitas herramientas externas para las operaciones habituales.

### Acceder a la interfaz de gestión

1. Abre FlyEnv → módulo **MySQL** o **MariaDB**.
2. Haz clic en el menú emergente **Manage**.
3. La interfaz de gestión se carga automáticamente.

![Interfaz de gestión de bases de datos](https://oss.macphpstudy.com/image/database-1.webp)

### Operaciones de bases de datos con un clic

#### Crear una base de datos nueva

Crea bases de datos rápidamente sin escribir SQL:

1. Haz clic en el botón **Create Database**.
2. Introduce el nombre de la base de datos.
3. Introduce el nombre de usuario de la base de datos.
4. Selecciona el juego de caracteres (se recomienda `utf8mb4`).
5. Haz clic en **Save**.

La base de datos se crea al instante, lista para tu aplicación.

![Diálogo de creación de bases de datos](https://oss.macphpstudy.com/image/database-2.webp)

#### Restablecer la contraseña de root

¿Olvidaste la contraseña de root? Restablécela con un clic:

1. Haz clic en **Reset Root Password**.
2. Introduce la nueva contraseña.
3. Confirma la contraseña.
4. Haz clic en **Update**.

No hace falta detener el servicio ni editar archivos de configuración manualmente.

![Restablecer la contraseña de root](https://oss.macphpstudy.com/image/database-3.webp)

### ¿Por qué usar la interfaz integrada?

| Tarea | Línea de comandos | Interfaz de FlyEnv |
| --- | --- | --- |
| Crear una base de datos | Escribir SQL y ejecutarlo | 2 clics |
| Restablecer la contraseña de root | Detener el servicio, editar archivos, reiniciar | 1 clic |
| Listar usuarios | Consulta SQL | Visualización automática |
| Cambiar la contraseña de un usuario | Consulta SQL | 1 clic |

**Ahorra tiempo**: las operaciones habituales que antes requerían varios comandos ahora llevan segundos.

## Clientes de bases de datos externos

Aunque la interfaz integrada de FlyEnv cubre la mayoría de las necesidades, puede que prefieras clientes de bases de datos dedicados para operaciones complejas:

### Clientes recomendados

| Cliente | Plataforma | Ideal para |
| --- | --- | --- |
| [phpMyAdmin](https://www.phpmyadmin.net/) | Web | Interfaz web familiar |
| [Navicat](https://www.navicat.com/) | Win/Mac | Funciones profesionales |
| [MySQL Workbench](https://www.mysql.com/products/workbench/) | Todas | Herramienta oficial de MySQL |
| [DataGrip](https://www.jetbrains.com/datagrip/) | Todas | Integración con el IDE |
| [DbGate](https://dbgate.org/) | Web | Interfaz web moderna |
| [DBeaver](https://dbeaver.io/) | Todas | Gratuito y multi-base de datos |

### Conectarse a las bases de datos de FlyEnv

Usa estos ajustes de conexión con los clientes externos:

```
Host: 127.0.0.1 (or localhost)
Port: 3306 (MySQL/MariaDB)
      5432 (PostgreSQL)
      27017 (MongoDB)
Username: root (MySQL/MariaDB)
          postgres (PostgreSQL)
Password: [Your configured password]
```

## Buenas prácticas de seguridad

### Desarrollo local

1. **Cambia las contraseñas predeterminadas**: no uses `root` ni las credenciales por defecto.
2. **Restringe el acceso por host**: usa `localhost` en lugar de `%` (cualquier host).
3. **Crea usuarios específicos para cada aplicación**: no uses root para las aplicaciones.
4. **Haz copias de seguridad periódicas**: exporta las bases de datos antes de cambios importantes.

### Antes de exponer la base de datos a la red

Si debes exponer tu base de datos a la red:

1. **Contraseñas seguras**: mínimo 16 caracteres, con mayúsculas, minúsculas, números y símbolos.
2. **Reglas de firewall**: restringe el acceso a direcciones IP concretas.
3. **Conexiones SSL**: activa las conexiones cifradas.
4. **Desactiva el acceso remoto de root**: crea usuarios con privilegios limitados para el acceso remoto.

## Solución de problemas

### `Access denied for user 'root'@'localhost'`

**Solución**: usa la función **Reset Root Password** de FlyEnv en la pestaña Database.

### `Can't connect to MySQL server`

**Comprueba**:

1. Que el servicio MySQL/MariaDB esté en ejecución en FlyEnv.
2. Que el puerto sea el correcto (3306 por defecto).
3. Que el firewall no esté bloqueando las conexiones a localhost.

### Error `Unknown database`

**Solución**: crea primero la base de datos con la interfaz integrada de FlyEnv o con la herramienta de migraciones de tu aplicación.

### La contraseña no funciona después de restablecerla

**Solución**:

1. Asegúrate de que el servicio MySQL/MariaDB estaba en ejecución durante el restablecimiento de la contraseña.
2. Prueba a reiniciar el servicio de la base de datos.
3. Comprueba si hay varias instalaciones de MySQL en conflicto.

## Preguntas frecuentes (FAQ)

**P: ¿Puedo usar la interfaz integrada para PostgreSQL o MongoDB?**  
R: Actualmente, la interfaz de gestión visual solo está disponible para MySQL y MariaDB. PostgreSQL y MongoDB requieren clientes externos o gestión por línea de comandos.

**P: ¿Restablecer la contraseña de root afecta a mis bases de datos existentes?**  
R: No. El restablecimiento de la contraseña solo cambia las credenciales de autenticación; todos tus datos permanecen intactos.

**P: ¿Puedo importar bases de datos existentes a FlyEnv?**  
R: Sí. Usa el cliente externo que prefieras para conectarte a la base de datos de FlyEnv e importar volcados SQL.

**P: ¿Cómo hago copias de seguridad de mis bases de datos?**  
R: Usa clientes externos como DBeaver o herramientas de línea de comandos: `mysqldump -u root -p database_name > backup.sql`

**P: ¿Puedo ejecutar varias versiones de bases de datos simultáneamente?**  
R: Sí. FlyEnv permite ejecutar distintas versiones de MySQL/MariaDB en puertos diferentes.

**P: ¿Es segura la interfaz integrada?**  
R: Sí. Se conecta únicamente a través de localhost y respeta todo el sistema de permisos de MySQL.

## Resumen

La gestión de bases de datos integrada de FlyEnv aporta comodidad al desarrollo local:

- ✅ Creación de bases de datos con un clic
- ✅ Gestión visual de usuarios
- ✅ Restablecimiento instantáneo de contraseñas
- ✅ Gestión de privilegios sin SQL

Para la mayoría de las tareas de desarrollo, es posible que ya no vuelvas a necesitar un cliente de bases de datos externo.
