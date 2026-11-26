---
description: 'Cài đặt và quản lý các phiên bản JDK, Maven, và Tomcat với FlyEnv, đồng thời cấu hình JAVA_HOME và PATH cho phát triển Java.'
---

# Thiết lập môi trường phát triển Java bằng FlyEnv

Kiểm tra JDK và công cụ build dự án yêu cầu. Cài JDK đó trong [module Java](/vi/features/java) của FlyEnv. Thêm Maven nếu dự án cần và cài Tomcat khi cần triển khai WAR lên servlet container độc lập.

1. Cài java jdk và đặt biến môi trường

Trong phần quản lý phiên bản của module Java, cài phiên bản JDK bạn cần

<img src="https://oss.macphpstudy.com/image/java-version-manager.jpg" data-x-image-preview="">

Trong bảng quản lý dịch vụ, đặt biến môi trường java. Đường dẫn của các lệnh binary liên quan tới java sẽ được tự động thêm vào PATH. Đồng thời, biến môi trường JAVA_HOME cũng được tự động thiết lập.

<img src="https://oss.macphpstudy.com/image/java-set-env.jpg" data-x-image-preview="">

2. Cài Maven và đặt biến môi trường

Trong phần quản lý Maven của module Java, cài phiên bản maven bạn cần và đặt biến môi trường

<img src="https://oss.macphpstudy.com/image/java-maven-set.jpg" data-x-image-preview="">

3. **Cài Tomcat nếu cần triển khai WAR**

Cài Tomcat

<img src="https://oss.macphpstudy.com/image/tomcat-install.jpg" data-x-image-preview="">

Đặt biến môi trường

<img src="https://oss.macphpstudy.com/image/tomcat-set-env.jpg" data-x-image-preview="">

## Kiểm tra JDK và Maven trong terminal mới

Sau khi áp dụng thay đổi môi trường, chạy các lệnh sau. So sánh phiên bản Java trong `mvn -v` với phiên bản dự án yêu cầu. Nếu dự án có Maven Wrapper, dùng `./mvnw -v` trong macOS/Linux hoặc `.\mvnw.cmd -v` trong PowerShell.

```text
java -version
javac -version
mvn -v
```

Nếu dự án Spring Boot tạo JAR thực thi, dùng `java -jar` với đường dẫn JAR thực tế. Mở URL ứng dụng xuất hiện trong log khởi động. [Giải pháp Spring Boot](/vi/solutions/spring-boot) trình bày reverse proxy tùy chọn và các dịch vụ phụ thuộc.
