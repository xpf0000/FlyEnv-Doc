---
description: 'Jalankan cuplikan berbagai bahasa di FlyEnv Code Playground dan kelola contoh yang dapat digunakan kembali dalam Code Library.'
---

# Code Playground & Pustaka Kode

## Pengenalan Produk

FlyEnv v4.10.6 menghadirkan dua fitur yang kuat:

- **Code Playground**: menjalankan potongan kode dalam berbagai bahasa secara instan.
- **Code Library**: menyimpan dan mengelola potongan kode untuk digunakan kembali.

## Code Playground

### Nilai Utama

Alur kerja tradisional biasanya mengharuskan Anda:

1. Membuat berkas sementara di IDE.
2. Menjalankan perintah di terminal.
3. Melakukan kompilasi tambahan untuk beberapa bahasa.

FlyEnv menyederhanakan proses tersebut menjadi eksekusi sekali klik.

### Panduan Pengguna

Akses melalui: **Tools -> Code Playground**.

Antarmukanya berisi:

- panel kiri: editor kode dengan syntax highlighting;
- panel kanan: keluaran eksekusi;
- toolbar: pemilihan bahasa, pergantian versi, dan tombol jalankan.

![Code Playground](https://oss.macphpstudy.com/image/code-play1.png)

### Bahasa yang Didukung

Saat ini tersedia 10 bahasa pemrograman:

#### 1. Java

```java
// nama kelas harus Main.java
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
// nama package harus main.go
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

### Fitur Lanjutan

- Dukungan berbagai versi.
- Menyimpan kode ke Code Library dalam satu klik.

![Fitur lanjutan Code Playground](https://oss.macphpstudy.com/image/code-play2.png)

## Code Library

### Nilai Inti

Code Library mengatasi tantangan penggunaan ulang kode:

- tidak perlu lagi mencari dari satu proyek ke proyek lain;
- membangun basis pengetahuan kode yang dapat digunakan kembali;
- meningkatkan efisiensi penemuan kode.

### Fitur Utama

1. **Penyimpanan Kode**
   - mengelompokkan kode berdasarkan bahasa atau grup;
   - menambahkan dokumentasi rinci;
   - menyimpan snapshot eksekusi.

2. **Pencarian Cepat**
   - pencarian kata kunci;
   - filter bahasa atau tag;
   - menandai potongan kode favorit.

### Panduan Pengguna

Akses melalui: **Tools -> Code Library**.

Antarmuka utama:

1. Pengelolaan library

   ![Pengelolaan library](https://oss.macphpstudy.com/image/code-play5.png)

2. Menambahkan potongan kode
   - syntax highlighting;
   - dokumentasi rinci;
   - snapshot eksekusi.

   ![Menambahkan potongan kode](https://oss.macphpstudy.com/image/code-play4.png)

3. Detail potongan kode
   - tampilan kode lengkap;
   - perbandingan versi;
   - salin dalam satu klik.

   ![Detail potongan kode](https://oss.macphpstudy.com/image/code-play3.png)

## Ringkasan

FlyEnv menyediakan solusi pengelolaan kode yang lengkap:

- Playground: validasi kode secara instan.
- Library: menyimpan pengetahuan.
- Keduanya bersama-sama membentuk alur kerja "validasi-simpan-gunakan kembali".

Manfaatnya:

- peningkatan efisiensi lebih dari 50%;
- basis pengetahuan pribadi atau tim;
- fokus pada pengembangan inti.

## Tutorial Video

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/yYSwnYC7V9M?si=-udYI2rgDKS2O155" title="Pemutar video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
