---
description: 'Hiểu về PATH và dùng FlyEnv để đưa các lệnh runtime và công cụ đã chọn vào các phiên terminal một cách an toàn trên từng nền tảng.'
---

# Thiết lập biến môi trường PATH của hệ thống

## **Biến PATH chính xác là gì? Kiến thức thiết yếu cho lập trình viên!**
(Và vì sao nó luôn khiến bạn phát điên? 🤯)

---

#### **🔍 Giải thích nhanh**
**PATH** là "đội tìm kiếm" của hệ thống bạn: Khi bạn gõ các lệnh như `python` hay `javac`, hệ thống sẽ lần lượt dò qua từng thư mục được liệt kê trong PATH để tìm chương trình tương ứng.

---

#### **💻 Giải thích kỹ thuật**
1. **PATH là gì?**: Một **biến môi trường** chứa nhiều đường dẫn thư mục, phân tách bằng dấu chấm phẩy (Windows) hoặc dấu hai chấm (Mac/Linux)
    - Ví dụ (Windows):
      ```  
      C:\Python39\Scripts;C:\Program Files\Java\jdk-17\bin  
      ```  
2. **Nó hoạt động thế nào**:
    - Khi bạn gõ `python`, hệ thống kiểm tra từng đường dẫn theo thứ tự:
        1. `C:\Python39\Scripts\python.exe` (Tìm thấy? → Thực thi)
        2. `C:\Program Files\Java\jdk-17\bin\python.exe` (Không tìm thấy? → Báo lỗi!)

---

#### **😱 Vì sao PATH gây ra nhiều vấn đề đến thế?**
1. **Gõ sai đường dẫn**: Thiếu dấu gạch/khoảng trắng/ký tự tiếng Trung → Hệ thống không tìm thấy chương trình
    - ❌ `C:\Program  Files\Python\python.exe` (Đường dẫn thật là `C:\Program Files\Python39\python.exe`)
2. **Đặc thù của IDE**:
    - Terminal của VSCode không tìm thấy lệnh? Vì IDE và terminal hệ thống có thể có PATH khác nhau!
3. **Bẫy của trình cài đặt**:
    - Một số trình cài đặt không đánh dấu sẵn tùy chọn **"Add to PATH"** (Đúng vậy trình cài Python, tôi đang nói về bạn!)

---

#### **🚀 Quản lý PATH như một dân chuyên**
1. **Người dùng FlyEnv**: Đơn giản là đừng bận tâm! Tất cả đường dẫn được cấu hình tự động ✅
2. **Cấu hình thủ công**:
    - **Windows**:
      ```  
      Control Panel → System → Advanced Settings → Environment Variables → Edit PATH  
      ```  
    - **Mac/Linux**:
      ```bash  
      export PATH=$PATH:/your/new/path   # Temporary  
      echo 'export PATH=$PATH:/your/new/path' >> ~/.zshrc  # Permanent  
      ```  

---

#### **💡 Mẹo dân chuyên**
- **Xem PATH hiện tại**:
    - Windows: `echo %PATH%`
    - Mac/Linux: `echo $PATH`
- **Xử lý sự cố**:
    - Mac/Linux:
  ```bash  
  which python   # See which python is being used  
  ```  
    - Windows:
  ```
  where.exe python
  ```

---

**📌 Ghi nhớ**: PATH nên là một công cụ, không phải một trở ngại. Nếu nó vẫn còn làm bạn đau đầu, hãy thử phép màu không cần cấu hình của **FlyEnv**!**

## Thiết lập biến PATH với FlyEnv

Cấu hình PATH với FlyEnv chỉ cần hai bước:

1. Cài các phiên bản bạn cần

![Giao diện cài đặt phiên bản](https://oss.macphpstudy.com/image/set-env-1.png)

2. Bật công tắc để thêm/xóa đường dẫn phiên bản khỏi PATH

![Giao diện cấu hình PATH](https://oss.macphpstudy.com/image/set-env-2.png)

FlyEnv cũng cung cấp các công cụ truy cập nhanh để xem và quản lý biến PATH:

### macOS

![Giao diện quản lý PATH](https://oss.macphpstudy.com/image/set-env-3.png)

![Giao diện quản lý PATH](https://oss.macphpstudy.com/image/set-env-4.png)

### Windows

![Giao diện quản lý PATH](https://oss.macphpstudy.com/image/set-env-5.png)

## Video demo

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/47I5nZK3rjo?si=Ubfp765OcuVbzT58" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
