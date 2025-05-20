# 设置系统 PATH 环境变量

## **「PATH变量」到底是什么？程序员必备生存知识！**
（附：为什么它总让你崩溃？🤯）

---

#### **🔍 一句话科普**
**PATH**是系统的一张「寻人启事」：当你输入`python`、`javac`等命令时，系统会按PATH列出的目录挨个查找对应的程序。

---

#### **💻 技术版解释**
1. **PATH的本质**：一个包含多个路径的**环境变量**，路径之间用分号（Windows）或冒号（Mac/Linux）分隔
    - 示例（Windows）：
      ```  
      C:\Python39\Scripts;C:\Program Files\Java\jdk-17\bin  
      ```  
2. **工作原理**：
    - 当你输入`python`时，系统会从 PATH 包含的多个路径中依次检查：
   1. `C:\Python39\Scripts\python.exe`（有吗？→ (有) 结束查找并执行）
   2. `C:\Program Files\Java\jdk-17\bin\python.exe`（有吗？→ (无) 报错！）

---

#### **😱 为什么PATH总坑人？**
1. **路径拼错**：少个斜杠/多空格/中文路径 → 系统找不到程序
    - ❌ `C:\Program  Files\Python\python.exe`（实际路径是`C:\Program Files\Python39\python.exe`）
2. **IDE玄学问题**：
    - VSCode终端找不到命令？因为IDE和系统终端的PATH可能不同！
3. **安装器埋雷**：
    - 某些安装包默认不勾选**“Add to PATH”**（说的就是你，Python安装器！）

---

#### **🚀 如何优雅管理PATH？**
1. **FlyEnv用户**：直接无视！所有路径自动配置 ✅
2. **手动战士**：
    - **Windows**：
      ```  
      控制面板 → 系统 → 高级设置 → 环境变量 → 双击PATH修改  
      ```  
    - **Mac/Linux**：
      ```bash  
      export PATH=$PATH:/你的/新路径   # 临时生效  
      echo 'export PATH=$PATH:/你的/新路径' >> ~/.zshrc  # 永久生效  
      ```  

---

#### **💡 黑科技技巧**
- **查看当前PATH**：
    - Windows: `echo %PATH%`
    - Mac/Linux: `echo $PATH`
- **快速定位问题**：

  - Mac/Linux
  ```bash  
  which python   # 看看系统实际调用的python在哪  
  ```  
    - Windows
    ```
    where.exe python
    ```

---

**📌 记住**：PATH是工具，不该是障碍。如果你还在为它头疼，是时候试试**FlyEnv**的零配置魔法了！**

## 使用 FlyEnv 设置 PATH 变量

使用 FlyEnv 设置 PATH 变量只需要两个操作

1. 安装需要的版本

![安装版本界面](https://oss.macphpstudy.com/image/set-env-1.png)

2. 点击按钮, 从 PATH 变量中添加或移除版本路径

![设置PATH界面](https://oss.macphpstudy.com/image/set-env-2.png)

另外, FlyEnv 还提供了快捷工具, 可以直接查看和管理 PATH 变量

### macOS

![查看和管理PATH变量界面](https://oss.macphpstudy.com/image/set-env-3.png)

![查看和管理PATH变量界面](https://oss.macphpstudy.com/image/set-env-4.png)

### Windows

![查看和管理PATH变量界面](https://oss.macphpstudy.com/image/set-env-5.png)

## 演示视频 

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="//player.bilibili.com/player.html?isOutside=true&aid=114237993125397&bvid=BV1i6oQYdE1g&cid=29106833424&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

