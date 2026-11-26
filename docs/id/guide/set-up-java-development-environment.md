---
description: 'Pasang dan kelola versi JDK, Maven, dan Tomcat dengan FlyEnv serta atur JAVA_HOME dan PATH untuk pengembangan Java.'
---

# Menyiapkan lingkungan pengembangan Java dengan FlyEnv

Periksa JDK dan build tool yang dibutuhkan proyek. Pasang JDK tersebut di [modul Java](/id/features/java) FlyEnv. Tambahkan Maven bila diperlukan, lalu pasang Tomcat jika proyek membutuhkan deployment WAR ke servlet container mandiri.

1. **Pasang Java JDK dan atur variabel lingkungan**

   Di pengelola versi modul Java, pasang versi JDK yang diperlukan.

   <img src="https://oss.macphpstudy.com/image/java-version-manager.jpg" data-x-image-preview="" alt="Pengelola versi Java">

   Di panel pengelolaan layanan, atur variabel lingkungan Java. Path perintah biner Java yang relevan akan otomatis ditambahkan ke `PATH`; variabel lingkungan `JAVA_HOME` juga akan diatur otomatis.

   <img src="https://oss.macphpstudy.com/image/java-set-env.jpg" data-x-image-preview="" alt="Mengatur lingkungan Java">

2. **Pasang Maven dan atur variabel lingkungan**

   Di pengelolaan Maven pada modul Java, pasang versi Maven yang dibutuhkan dan atur variabel lingkungannya.

   <img src="https://oss.macphpstudy.com/image/java-maven-set.jpg" data-x-image-preview="" alt="Mengatur Maven">

3. **Opsional, pasang Tomcat untuk deployment WAR**

   Pasang Tomcat.

   <img src="https://oss.macphpstudy.com/image/tomcat-install.jpg" data-x-image-preview="" alt="Memasang Tomcat">

   Atur variabel lingkungannya.

   <img src="https://oss.macphpstudy.com/image/tomcat-set-env.jpg" data-x-image-preview="" alt="Mengatur lingkungan Tomcat">

## Verifikasi JDK dan Maven di terminal baru

Setelah perubahan lingkungan diterapkan, jalankan perintah ini dan cocokkan versi Java pada `mvn -v` dengan kebutuhan proyek. Jika proyek menyertakan Maven Wrapper, gunakan `./mvnw -v` di macOS/Linux atau `.\mvnw.cmd -v` di PowerShell.

```text
java -version
javac -version
mvn -v
```

Jika proyek Spring Boot menghasilkan JAR yang dapat dijalankan, gunakan `java -jar` dengan jalur JAR tersebut. Buka URL aplikasi dari log startup. [Solusi Spring Boot](/id/solutions/spring-boot) membahas reverse proxy opsional dan layanan pendukung.
