---
description: 'Ejecuta fragmentos de código en varios lenguajes con FlyEnv Code Playground y organiza ejemplos reutilizables en Code Library.'
---

# Code Playground y Code Library

## Introducción al producto

FlyEnv v4.10.6 presenta dos funciones muy potentes:

- **Code Playground**: ejecuta fragmentos de código en varios lenguajes al instante.
- **Code Library**: guarda y gestiona fragmentos de código para reutilizarlos en el futuro.

## Code Playground

### Propuesta de valor

El flujo de trabajo tradicional exige:

1. Crear archivos temporales en el IDE.
2. Ejecutar comandos en la terminal.
3. Realizar compilaciones adicionales para algunos lenguajes.

FlyEnv simplifica este proceso hasta convertirlo en una ejecución de un solo clic.

### Guía de uso

Acceso: **Tools → Code Playground**.

La interfaz incluye:

- panel izquierdo: editor de código con resaltado de sintaxis;
- panel derecho: salida de la ejecución;
- barra de herramientas: selección de lenguaje, cambio de versión y botón de ejecución.

![Code Playground](https://oss.macphpstudy.com/image/code-play1.png)

### Lenguajes soportados

Actualmente admite 10 lenguajes de programación:

#### 1. Java

```java
// class name must be Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World Java");
    }
}
```

#### 2. PHP

```php
<?php
echo "Hello World PHP";
?>
```

#### 3. Golang

```go
// package name must be main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello World Golang")
}
```

#### 4. Rust

```rust
fn main() {
    println!("Hello World Rust");
}
```

#### 5. Erlang

```erlang
-module(main).
-export([main/0]).

main() ->
    io:format("Hello World Erlang~n").
```

#### 6. Python

```python
from __future__ import print_function
print("Hello World Python")
```

#### 7. Ruby

```ruby
puts "Hello World Ruby"
```

#### 8. Perl

```perl
use strict;
use warnings;
print "Hello World Perl\n";
```

#### 9. TypeScript

```typescript
const message: string = "Hello World TypeScript";
console.log(message);
```

#### 10. JavaScript

```javascript
console.log("Hello World JavaScript");
```

### Funciones avanzadas

- Soporte para múltiples versiones.
- Guardado en Code Library con un solo clic.

![Funciones avanzadas de Code Playground](https://oss.macphpstudy.com/image/code-play2.png)

## Code Library

### Valor principal

Resuelve los problemas de reutilización de código:

- elimina la búsqueda entre proyectos;
- crea una base de conocimiento de código reutilizable;
- mejora la eficiencia de búsqueda.

### Funciones clave

1. **Almacenamiento de código**
   - clasifica por lenguaje o grupo;
   - añade documentación detallada;
   - guarda capturas de la ejecución.

2. **Búsqueda rápida**
   - búsqueda por palabra clave;
   - filtros por lenguaje o etiqueta;
   - fragmentos favoritos.

### Manual de uso

Acceso: **Tools → Code Library**.

Interfaces principales:

1. Gestión de la biblioteca

   ![Gestión de la biblioteca](https://oss.macphpstudy.com/image/code-play5.png)

2. Añadir un fragmento
   - resaltado de sintaxis;
   - documentación detallada;
   - captura de la ejecución.

   ![Añadir un fragmento](https://oss.macphpstudy.com/image/code-play4.png)

3. Detalle del fragmento
   - vista completa del código;
   - comparación de versiones;
   - copiado con un clic.

   ![Detalle del fragmento](https://oss.macphpstudy.com/image/code-play3.png)

## Resumen

FlyEnv ofrece una solución completa de gestión de código:

- Playground: validación instantánea del código.
- Library: conservación del conocimiento.
- Combinadas: forman un flujo de trabajo de "validar-guardar-reutilizar".

Beneficios:

- mejora de la eficiencia superior al 50 %;
- base de conocimiento personal o de equipo;
- concentración en el desarrollo principal.

## Tutorial en vídeo

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/yYSwnYC7V9M?si=-udYI2rgDKS2O155" title="Reproductor de vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
