---
description: 'Cài đặt và quản lý các phiên bản JDK, Maven, và Tomcat với FlyEnv, đồng thời cấu hình JAVA_HOME và PATH cho phát triển Java.'
---

# Thiết lập môi trường phát triển Java bằng FlyEnv

FlyEnv đã hỗ trợ thiết lập môi trường phát triển Java. Với FlyEnv, bạn có thể nhanh chóng tải xuống và cài đặt Java, Maven, và Tomcat. Nó hỗ trợ openjdk8 tới phiên bản JDK mới nhất. Hỗ trợ Maven từ 2.x tới phiên bản mới nhất. Hỗ trợ Tomcat8 tới phiên bản Tomcat mới nhất.

1. Cài java jdk và đặt biến môi trường

Trong phần quản lý phiên bản của module Java, cài phiên bản JDK bạn cần

<img src="https://oss.macphpstudy.com/image/java-version-manager.jpg" data-x-image-preview="">

Trong bảng quản lý dịch vụ, đặt biến môi trường java. Đường dẫn của các lệnh binary liên quan tới java sẽ được tự động thêm vào PATH. Đồng thời, biến môi trường JAVA_HOME cũng được tự động thiết lập.

<img src="https://oss.macphpstudy.com/image/java-set-env.jpg" data-x-image-preview="">

2. Cài Maven và đặt biến môi trường

Trong phần quản lý Maven của module Java, cài phiên bản maven bạn cần và đặt biến môi trường

<img src="https://oss.macphpstudy.com/image/java-maven-set.jpg" data-x-image-preview="">

3. Cài Tomcat và đặt biến môi trường

Cài Tomcat

<img src="https://oss.macphpstudy.com/image/tomcat-install.jpg" data-x-image-preview="">

Đặt biến môi trường

<img src="https://oss.macphpstudy.com/image/tomcat-set-env.jpg" data-x-image-preview="">

Giờ bạn đã có một môi trường phát triển Java bao gồm JDK, Maven, và Tomcat
