import type { SolutionDetail, SolutionSlug, SolutionWorkflowStackKey } from './solution-details'
import type { SolutionLocale } from './solution-locales'

interface SolutionWorkflow extends Pick<SolutionDetail, 'summary' | 'help' | 'setupSteps'> {
  roles: Partial<Record<SolutionWorkflowStackKey, string>>
  helpTitle: string
  setupTitle: string
  setupIntro: string
  links: { href: string; label: string }[]
  demoNote?: string
}

export const solutionWorkflows: Partial<
  Record<SolutionSlug, Record<SolutionLocale, SolutionWorkflow>>
> = {
  erpnext: {
    en: {
      summary:
        'Bring an existing Frappe Bench into a repeatable local workflow with Python, MariaDB, Redis and Nginx. The recorded setup runs on macOS. Follow Frappe’s platform requirements for Bench.',
      roles: {
        python: 'Runs Frappe through the Bench virtual environment.',
        mariadb: 'Stores the ERPNext site database.',
        redis: 'Serves the cache or queue roles configured by this Bench.',
        nginx: 'Routes browser requests to the local Frappe web process.',
        nodejs: 'Builds assets and runs Node-based processes when required by your Frappe release.'
      },
      helpTitle: 'What Bench and FlyEnv manage',
      help: [
        {
          title: 'Use a compatible Bench site',
          description:
            'Match the ERPNext and Frappe branches first. Use the Python, Node.js and MariaDB versions listed for that release, and use Bench to create the site, build assets and install the ERPNext app.'
        },
        {
          title: 'Choose one owner for each Redis process',
          description:
            'Inspect the Bench Procfile and site configuration for the web, workers, scheduler and Redis endpoints. If a Redis process already starts with Bench, avoid starting a second process on its port.'
        },
        {
          title: 'Group the services used by this site',
          description:
            'The macOS recording groups Nginx 1.28.0, Redis 8.6.0, MariaDB 11.8.8 and the configured ERPNext Python project in that order. Those are the recorded versions.'
        }
      ],
      setupTitle: 'Verify a restart of the ERPNext stack',
      setupIntro:
        'Use the recorded sequence to check a project that already runs. Frappe documents Linux and macOS for Bench. On Windows, its installation guide suggests Ubuntu in WSL.',
      setupSteps: [
        'Start the group with the configured proxy, Redis, database and ERPNext project. Keep ports and data paths aligned with the Bench and proxy settings.',
        'Open the site in a browser. In the recording, Nginx briefly returns 502 during restart, then the ERPNext Invoicing screen loads. If 502 continues, check whether the Frappe web process is listening on the expected upstream address and port.',
        'If you need queues or scheduled jobs, verify those processes separately. Loading Invoicing confirms the browser path in the recording.'
      ],
      links: [
        { href: '/features/startup-groups', label: 'Configure a Startup Group' },
        {
          href: 'https://docs.frappe.io/framework/user/en/installation',
          label: 'Check Frappe and Bench requirements'
        }
      ],
      demoNote:
        'The macOS demo shows a previously configured stack stopping and starting, then opens ERPNext Invoicing.'
    },
    zh: {
      summary:
        '把已有 Frappe Bench 的 Python、MariaDB、Redis 和 Nginx 纳入可重复启动的本地流程。演示环境运行在 macOS，配置 Bench 时以 Frappe 的平台要求为准。',
      roles: {
        python: '通过 Bench 虚拟环境运行 Frappe。',
        mariadb: '保存 ERPNext 站点数据。',
        redis: '承担 Bench 配置的缓存或队列角色。',
        nginx: '将浏览器请求转发到本地 Frappe Web 进程。',
        nodejs: '按 Frappe 版本需要构建静态资源、运行 Node 进程。'
      },
      helpTitle: 'Bench 与 FlyEnv 分别管理什么',
      help: [
        {
          title: '先准备兼容的 Bench 站点',
          description:
            '先匹配 ERPNext 和 Frappe 分支，按对应版本要求准备 Python、Node.js 和 MariaDB。用 Bench 创建站点、构建资源并安装 ERPNext 应用。'
        },
        {
          title: '确定每个 Redis 进程由谁启动',
          description:
            '检查 Bench 的 Procfile 和站点配置，确认 Web、Worker、调度器和 Redis 地址。Bench 已启动的 Redis 不要再在同一端口启动一份。'
        },
        {
          title: '把站点依赖纳入启动组',
          description:
            'macOS 演示中的顺序是 Nginx 1.28.0、Redis 8.6.0、MariaDB 11.8.8、已配置的 ERPNext Python 项目。这些版本是当时的录制环境。'
        }
      ],
      setupTitle: '验证 ERPNext 全栈重启',
      setupIntro:
        '用演示中的启动顺序检查已经能运行的项目。Frappe 的 Bench 安装文档支持 Linux 与 macOS，Windows 用户可按官方建议使用 WSL 中的 Ubuntu。',
      setupSteps: [
        '启动包含代理、Redis、数据库和 ERPNext 项目的启动组。对照 Bench 和代理设置检查端口与数据路径。',
        '在浏览器访问站点。演示中 Nginx 在重启期间短暂返回 502，随后打开 ERPNext Invoicing 页面。如果 502 持续出现，检查 Frappe Web 进程是否监听所配置的上游地址和端口。',
        '项目用到队列或定时任务时，再分别验证 Worker 和调度器。打开 Invoicing 验证的是演示中的浏览器访问链路。'
      ],
      links: [
        { href: '/features/startup-groups', label: '配置启动组' },
        {
          href: 'https://docs.frappe.io/framework/user/en/installation',
          label: '核对 Frappe 和 Bench 的要求'
        }
      ],
      demoNote: 'macOS 演示在已有环境中停止并重启服务，然后打开 ERPNext Invoicing。'
    },
    id: {
      summary:
        'Kelola Frappe Bench yang sudah ada bersama Python, MariaDB, Redis, dan Nginx untuk startup lokal yang dapat diulang. Rekaman menggunakan macOS. Ikuti persyaratan platform Bench dari Frappe.',
      roles: {
        python: 'Menjalankan Frappe melalui virtual environment Bench.',
        mariadb: 'Menyimpan data situs ERPNext.',
        redis: 'Menangani cache atau antrean yang dikonfigurasi Bench.',
        nginx: 'Meneruskan permintaan browser ke proses web Frappe.',
        nodejs: 'Membangun aset dan menjalankan proses Node sesuai rilis Frappe.'
      },
      helpTitle: 'Pembagian tugas Bench dan FlyEnv',
      help: [
        {
          title: 'Siapkan situs Bench yang kompatibel',
          description:
            'Cocokkan branch ERPNext dan Frappe. Ikuti persyaratan Python, Node.js, dan MariaDB untuk rilis tersebut. Buat situs, build aset, dan pasang aplikasi ERPNext melalui Bench.'
        },
        {
          title: 'Tentukan pengelola tiap proses Redis',
          description:
            'Periksa Procfile Bench dan konfigurasi situs untuk proses web, worker, scheduler, serta endpoint Redis. Jika sebuah proses Redis sudah dimulai Bench, hindari menyalakan proses lain di port yang sama.'
        },
        {
          title: 'Kelompokkan layanan situs',
          description:
            'Rekaman macOS memakai urutan Nginx 1.28.0, Redis 8.6.0, MariaDB 11.8.8, lalu proyek Python ERPNext yang sudah dikonfigurasi. Versi ini berasal dari rekaman.'
        }
      ],
      setupTitle: 'Verifikasi restart stack ERPNext',
      setupIntro:
        'Gunakan urutan dari demo untuk memeriksa proyek yang sudah bisa berjalan. Frappe mendokumentasikan Bench untuk Linux dan macOS serta menyarankan Ubuntu di WSL untuk Windows.',
      setupSteps: [
        'Jalankan grup yang berisi proxy, Redis, database, dan proyek ERPNext. Cocokkan port dan path data dengan pengaturan Bench dan proxy.',
        'Buka situs di browser. Dalam rekaman, Nginx sempat memberi 502 ketika restart, lalu halaman ERPNext Invoicing terbuka. Jika 502 berlanjut, periksa alamat dan port upstream proses web Frappe.',
        'Jika memakai antrean atau tugas terjadwal, uji worker dan scheduler secara terpisah. Terbukanya Invoicing memverifikasi jalur browser pada rekaman.'
      ],
      links: [
        { href: '/features/startup-groups', label: 'Atur Startup Group' },
        {
          href: 'https://docs.frappe.io/framework/user/en/installation',
          label: 'Periksa persyaratan Frappe dan Bench'
        }
      ],
      demoNote:
        'Demo macOS mematikan dan menyalakan kembali stack yang sudah dikonfigurasi, lalu membuka ERPNext Invoicing.'
    },
    es: {
      summary:
        'Arranca de forma repetible un Frappe Bench existente con Python, MariaDB, Redis y Nginx. La grabación usa macOS. Consulta los requisitos de plataforma de Bench en Frappe.',
      roles: {
        python: 'Ejecuta Frappe en el entorno virtual de Bench.',
        mariadb: 'Almacena los datos del sitio ERPNext.',
        redis: 'Cubre las funciones de caché o cola configuradas por Bench.',
        nginx: 'Envía las peticiones del navegador al proceso web local de Frappe.',
        nodejs: 'Compila recursos y ejecuta procesos Node si tu versión de Frappe lo requiere.'
      },
      helpTitle: 'Qué gestiona Bench y qué gestiona FlyEnv',
      help: [
        {
          title: 'Prepara un sitio Bench compatible',
          description:
            'Empareja las ramas de ERPNext y Frappe. Usa las versiones de Python, Node.js y MariaDB requeridas para esa edición. Crea el sitio, compila los recursos e instala ERPNext con Bench.'
        },
        {
          title: 'Asigna un responsable a cada proceso Redis',
          description:
            'Revisa el Procfile y los ajustes de Bench para localizar el servidor web, los workers, el planificador y los endpoints Redis. Si Bench inicia un Redis, evita arrancar otro en ese puerto.'
        },
        {
          title: 'Agrupa los servicios del sitio',
          description:
            'En macOS, el grupo grabado contiene Nginx 1.28.0, Redis 8.6.0, MariaDB 11.8.8 y el proyecto Python de ERPNext ya configurado, en ese orden. Son las versiones mostradas en el vídeo.'
        }
      ],
      setupTitle: 'Comprueba el reinicio del stack ERPNext',
      setupIntro:
        'Usa la secuencia de la demo para comprobar un proyecto que ya funcione. Frappe documenta Bench para Linux y macOS. Su guía sugiere Ubuntu en WSL para Windows.',
      setupSteps: [
        'Arranca el grupo con el proxy, Redis, la base y el proyecto ERPNext configurados. Comprueba que los puertos y las rutas de datos coincidan con los ajustes de Bench y el proxy.',
        'Abre el sitio. En el vídeo, Nginx devuelve brevemente 502 durante el reinicio y luego carga ERPNext Invoicing. Si el 502 persiste, comprueba que el proceso web de Frappe escucha en la dirección y el puerto configurados en el proxy.',
        'Si usas colas o tareas programadas, comprueba los workers y el planificador por separado. Abrir Invoicing comprueba la ruta desde el navegador que se ve en el vídeo.'
      ],
      links: [
        { href: '/features/startup-groups', label: 'Configura un grupo de inicio' },
        {
          href: 'https://docs.frappe.io/framework/user/en/installation',
          label: 'Consulta los requisitos de Frappe y Bench'
        }
      ],
      demoNote:
        'La demo de macOS detiene y reinicia un stack ya configurado y luego abre ERPNext Invoicing.'
    },
    vi: {
      summary:
        'Khởi động lặp lại môi trường Frappe Bench có sẵn với Python, MariaDB, Redis và Nginx. Bản quay dùng macOS. Hãy kiểm tra yêu cầu nền tảng của Frappe khi thiết lập Bench.',
      roles: {
        python: 'Chạy Frappe trong môi trường ảo của Bench.',
        mariadb: 'Lưu dữ liệu site ERPNext.',
        redis: 'Đảm nhiệm vai trò cache hoặc hàng đợi do Bench cấu hình.',
        nginx: 'Chuyển yêu cầu trình duyệt tới tiến trình web Frappe cục bộ.',
        nodejs: 'Build tài nguyên và chạy các tiến trình Node theo yêu cầu của bản Frappe.'
      },
      helpTitle: 'Bench và FlyEnv quản lý những gì',
      help: [
        {
          title: 'Chuẩn bị site Bench tương thích',
          description:
            'Ghép đúng nhánh ERPNext và Frappe. Dùng phiên bản Python, Node.js và MariaDB theo yêu cầu của bản phát hành. Dùng Bench để tạo site, build tài nguyên và cài ứng dụng ERPNext.'
        },
        {
          title: 'Xác định công cụ khởi động từng tiến trình Redis',
          description:
            'Kiểm tra Procfile và cấu hình site của Bench để xác định web, worker, bộ lập lịch và endpoint Redis. Nếu Bench đã chạy Redis trên một cổng, tránh khởi động thêm tiến trình dùng cùng cổng.'
        },
        {
          title: 'Gom các dịch vụ site vào một nhóm',
          description:
            'Bản quay macOS xếp theo thứ tự Nginx 1.28.0, Redis 8.6.0, MariaDB 11.8.8 rồi dự án Python ERPNext đã cấu hình. Đó là các phiên bản xuất hiện trong video.'
        }
      ],
      setupTitle: 'Kiểm tra lần khởi động lại stack ERPNext',
      setupIntro:
        'Dùng trình tự trong video để kiểm tra dự án đã chạy được. Frappe hướng dẫn Bench trên Linux và macOS, đồng thời gợi ý Ubuntu trong WSL cho Windows.',
      setupSteps: [
        'Khởi động nhóm chứa proxy, Redis, cơ sở dữ liệu và dự án ERPNext đã cấu hình. Đối chiếu cổng và đường dẫn dữ liệu với cài đặt Bench và proxy.',
        'Mở site trong trình duyệt. Trong video, Nginx trả 502 trong lúc khởi động lại rồi tải ERPNext Invoicing. Nếu 502 vẫn còn, kiểm tra tiến trình web Frappe có lắng nghe trên địa chỉ và cổng upstream đã đặt hay không.',
        'Nếu dùng hàng đợi hoặc tác vụ định kỳ, kiểm tra worker và bộ lập lịch riêng. Trang Invoicing xác nhận đường truy cập qua trình duyệt trong video.'
      ],
      links: [
        { href: '/features/startup-groups', label: 'Cấu hình Startup Group' },
        {
          href: 'https://docs.frappe.io/framework/user/en/installation',
          label: 'Kiểm tra yêu cầu Frappe và Bench'
        }
      ],
      demoNote: 'Video macOS dừng và khởi động lại stack đã cấu hình rồi mở ERPNext Invoicing.'
    }
  },
  'spring-boot': {
    en: {
      summary:
        'Use FlyEnv to match a Spring Boot project’s JDK, run its built application locally and start the database or Redis only if its Spring profile needs them.',
      roles: {
        java: 'Builds and runs the application. Use the project JDK and Maven or Gradle wrapper.',
        database: 'Provides the datasource only when configured.',
        redis: 'Runs when the active profile uses Redis.',
        proxy: 'Optionally forwards a local HTTPS hostname to the app’s loopback port.'
      },
      helpTitle: 'From the build wrapper to the running JAR',
      help: [
        {
          title: 'Match the project’s JDK',
          description:
            'Use the JDK required by the Spring Boot release and the Maven or Gradle configuration. Bind that JDK to the project and check java -version and the wrapper’s version output in the same terminal.'
        },
        {
          title: 'Choose the application process',
          description:
            'For an executable JAR, use the repository’s build wrapper and its usual java -jar startup command. Spring Boot’s embedded server handles the request. Use standalone Tomcat only when the project targets an external servlet container and packages a compatible WAR.'
        },
        {
          title: 'Check the Spring profile',
          description:
            'The active profile sets the datasource, Redis configuration and server.port. Use a local database with development credentials only where the profile reads it. The application port and Host’s HTTPS port are independent.'
        }
      ],
      setupTitle: 'Check the API before adding a proxy',
      setupIntro:
        'For a web JAR, confirm a known application route on its loopback port before creating a local HTTPS hostname.',
      setupSteps: [
        'Build the executable artifact with the repository wrapper. Start it with the JDK, working directory, arguments and local profile the project expects.',
        'Check the startup log and request a route the project already implements. Use /actuator/health only if the project enables and exposes it. A port in the log does not by itself verify the route.',
        'If you run the command as a FlyEnv project service, add that service and the dependencies it actually uses to a Startup Group. Configure a Host reverse proxy only if the client needs a domain or HTTPS.'
      ],
      links: [
        {
          href: '/guide/set-up-java-development-environment',
          label: 'Set up project JDKs and Java tools'
        },
        { href: '/features/java', label: 'Manage Java project versions' },
        {
          href: 'https://docs.spring.io/spring-boot/system-requirements.html',
          label: 'Check Spring Boot system requirements'
        }
      ]
    },
    zh: {
      summary:
        '用 FlyEnv 为 Spring Boot 项目匹配 JDK、在本地运行构建后的应用，并按当前 Spring Profile 启动数据库或 Redis。',
      roles: {
        java: '用项目 JDK 和 Maven 或 Gradle Wrapper 构建并运行应用。',
        database: '为已配置的数据源提供数据库。',
        redis: '当前 Profile 用到 Redis 时启动。',
        proxy: '可按需将本地 HTTPS 域名转发到应用的回环端口。'
      },
      helpTitle: '从构建 Wrapper 到可运行 JAR',
      help: [
        {
          title: '匹配项目 JDK',
          description:
            '核对 Spring Boot 版本及 Maven 或 Gradle 配置要求的 JDK。在项目中绑定 JDK，并在同一终端检查 java -version 与 Wrapper 的版本输出。'
        },
        {
          title: '确定应用进程',
          description:
            '可执行 JAR 使用仓库的 Wrapper 构建，并用项目惯用的 java -jar 命令启动。内嵌服务器处理请求。只有面向外部 Servlet 容器且打包为兼容 WAR 的项目才需要独立 Tomcat。'
        },
        {
          title: '检查 Spring Profile',
          description:
            '当前 Profile 决定数据源、Redis 和 server.port。项目读取本地数据库时使用开发凭据。应用端口与站点的 HTTPS 端口分别配置。'
        }
      ],
      setupTitle: '先验证 API，再加反向代理',
      setupIntro: '对于 Web JAR，先在应用的回环端口验证一条已知路由，再创建本地 HTTPS 域名。',
      setupSteps: [
        '使用仓库的 Wrapper 构建可执行文件，按项目要求的 JDK、工作目录、参数和本地 Profile 启动。',
        '查看启动日志并访问项目已有路由。仅在项目启用并暴露时使用 /actuator/health。日志出现端口号后仍要实际请求一次。',
        '如果用 FlyEnv 按项目运行应用，把项目服务和实际依赖加入启动组。客户端需要域名或 HTTPS 时，再在「站点」设置反向代理。'
      ],
      links: [
        { href: '/guide/set-up-java-development-environment', label: '配置项目 JDK 和 Java 工具' },
        { href: '/features/java', label: '管理 Java 项目版本' },
        {
          href: 'https://docs.spring.io/spring-boot/system-requirements.html',
          label: '核对 Spring Boot 系统要求'
        }
      ]
    },
    id: {
      summary:
        'Cocokkan JDK proyek Spring Boot di FlyEnv, jalankan aplikasi hasil build secara lokal, dan mulai database atau Redis sesuai profil Spring yang aktif.',
      roles: {
        java: 'Membangun dan menjalankan aplikasi melalui JDK proyek dan wrapper Maven atau Gradle.',
        database: 'Menyediakan datasource jika dikonfigurasi.',
        redis: 'Berjalan jika profil aktif memakai Redis.',
        proxy: 'Meneruskan domain HTTPS lokal ke port loopback aplikasi bila diperlukan.'
      },
      helpTitle: 'Dari wrapper build ke JAR yang berjalan',
      help: [
        {
          title: 'Cocokkan JDK proyek',
          description:
            'Pakai JDK sesuai rilis Spring Boot serta konfigurasi Maven atau Gradle. Tetapkan JDK untuk proyek dan cek java -version serta versi wrapper di terminal yang sama.'
        },
        {
          title: 'Pilih proses aplikasi',
          description:
            'Untuk JAR executable, gunakan wrapper repositori dan perintah java -jar yang dipakai proyek. Server tertanam Spring Boot menerima permintaan. Gunakan Tomcat terpisah untuk WAR yang kompatibel dan ditujukan bagi container servlet eksternal.'
        },
        {
          title: 'Periksa profil Spring',
          description:
            'Profil aktif menentukan datasource, Redis, dan server.port. Gunakan kredensial pengembangan jika profil membaca database lokal. Port aplikasi dan port HTTPS Host diatur terpisah.'
        }
      ],
      setupTitle: 'Uji API sebelum menambah proxy',
      setupIntro:
        'Untuk web JAR, periksa rute aplikasi yang sudah dikenal di port loopback sebelum membuat domain HTTPS lokal.',
      setupSteps: [
        'Bangun artefak executable dengan wrapper repositori. Mulai dengan JDK, direktori kerja, argumen, dan profil lokal yang dipakai proyek.',
        'Periksa log startup dan akses rute yang sudah diimplementasikan. Gunakan /actuator/health hanya jika diaktifkan dan diekspos. Verifikasi respons, selain melihat port di log.',
        'Jika perintah dijalankan sebagai layanan proyek FlyEnv, masukkan layanan dan dependensi yang dipakai ke Startup Group. Atur reverse proxy Host bila klien perlu domain atau HTTPS.'
      ],
      links: [
        {
          href: '/guide/set-up-java-development-environment',
          label: 'Siapkan JDK proyek dan alat Java'
        },
        { href: '/features/java', label: 'Kelola versi Java per proyek' },
        {
          href: 'https://docs.spring.io/spring-boot/system-requirements.html',
          label: 'Periksa persyaratan Spring Boot'
        }
      ]
    },
    es: {
      summary:
        'Asigna en FlyEnv el JDK de tu proyecto Spring Boot, ejecuta localmente la aplicación compilada y arranca la base de datos o Redis según el perfil de Spring.',
      roles: {
        java: 'Compila y ejecuta con el JDK del proyecto y el wrapper de Maven o Gradle.',
        database: 'Proporciona la fuente de datos si está configurada.',
        redis: 'Se inicia si el perfil activo usa Redis.',
        proxy: 'Puede enviar el tráfico de un dominio HTTPS local al puerto de la aplicación.'
      },
      helpTitle: 'Del wrapper de compilación al JAR en ejecución',
      help: [
        {
          title: 'Usa el JDK del proyecto',
          description:
            'Comprueba el JDK exigido por la versión de Spring Boot y por Maven o Gradle. Asígnalo al proyecto y verifica java -version y la versión del wrapper en la misma terminal.'
        },
        {
          title: 'Elige el proceso de aplicación',
          description:
            'Para un JAR ejecutable, usa el wrapper del repositorio y el comando java -jar del proyecto. El servidor integrado de Spring Boot atiende las solicitudes. Usa Tomcat externo para proyectos que generen un WAR compatible y requieran un contenedor servlet externo.'
        },
        {
          title: 'Revisa el perfil de Spring',
          description:
            'El perfil activo define la fuente de datos, Redis y server.port. Usa credenciales de desarrollo si el perfil lee una base local. El puerto de la aplicación y el puerto HTTPS del host se configuran por separado.'
        }
      ],
      setupTitle: 'Comprueba la API antes de añadir el proxy',
      setupIntro:
        'Para un JAR web, comprueba una ruta conocida en el puerto de loopback de la aplicación antes de crear un dominio HTTPS local.',
      setupSteps: [
        'Genera el artefacto ejecutable con el wrapper. Inícialo con el JDK, el directorio de trabajo, los argumentos y el perfil local del proyecto.',
        'Revisa el registro de arranque y solicita una ruta real. Usa /actuator/health solo si el proyecto lo habilita y expone. Comprueba la respuesta además del puerto en el registro.',
        'Si ejecutas el comando como servicio de proyecto de FlyEnv, agrúpalo con las dependencias que usa. Configura un proxy inverso en Host solo si el cliente necesita dominio o HTTPS.'
      ],
      links: [
        {
          href: '/guide/set-up-java-development-environment',
          label: 'Configura el JDK y las herramientas Java'
        },
        { href: '/features/java', label: 'Gestiona la versión de Java por proyecto' },
        {
          href: 'https://docs.spring.io/spring-boot/system-requirements.html',
          label: 'Consulta los requisitos de Spring Boot'
        }
      ]
    },
    vi: {
      summary:
        'Dùng FlyEnv để chọn đúng JDK cho dự án Spring Boot, chạy bản build trên máy và chỉ khởi động cơ sở dữ liệu hoặc Redis khi profile Spring cần.',
      roles: {
        java: 'Build và chạy ứng dụng bằng JDK của dự án và wrapper Maven hoặc Gradle.',
        database: 'Cung cấp datasource nếu ứng dụng cấu hình.',
        redis: 'Chạy khi profile đang dùng cần Redis.',
        proxy: 'Có thể chuyển tiếp tên miền HTTPS cục bộ tới cổng loopback của ứng dụng.'
      },
      helpTitle: 'Từ wrapper build đến tệp JAR đang chạy',
      help: [
        {
          title: 'Khớp JDK của dự án',
          description:
            'Dùng JDK theo phiên bản Spring Boot và cấu hình Maven hoặc Gradle. Gán JDK cho dự án rồi kiểm tra java -version và phiên bản wrapper trong cùng terminal.'
        },
        {
          title: 'Chọn tiến trình ứng dụng',
          description:
            'Với JAR thực thi, dùng wrapper của repo và lệnh java -jar của dự án. Máy chủ nhúng Spring Boot xử lý yêu cầu. Dùng Tomcat riêng khi dự án đóng gói WAR tương thích và nhắm tới servlet container bên ngoài.'
        },
        {
          title: 'Kiểm tra profile Spring',
          description:
            'Profile đang dùng xác định datasource, Redis và server.port. Dùng thông tin đăng nhập phát triển khi cấu hình kết nối cơ sở dữ liệu cục bộ. Cổng ứng dụng và cổng HTTPS của Host được cấu hình riêng.'
        }
      ],
      setupTitle: 'Kiểm tra API trước khi thêm proxy',
      setupIntro:
        'Với web JAR, kiểm tra một route đã biết trên cổng loopback của ứng dụng trước khi tạo tên miền HTTPS cục bộ.',
      setupSteps: [
        'Build tệp thực thi bằng wrapper của repo. Khởi động với JDK, thư mục làm việc, tham số và profile cục bộ mà dự án dùng.',
        'Xem log khởi động và gọi một route thực tế. Chỉ dùng /actuator/health khi dự án đã bật và cung cấp endpoint đó. Kiểm tra phản hồi bên cạnh cổng trong log.',
        'Nếu chạy lệnh như dịch vụ dự án FlyEnv, đưa dịch vụ và các thành phần thực sự dùng vào Startup Group. Chỉ cấu hình reverse proxy trong Host khi máy khách cần tên miền hoặc HTTPS.'
      ],
      links: [
        {
          href: '/guide/set-up-java-development-environment',
          label: 'Thiết lập JDK và công cụ Java'
        },
        { href: '/features/java', label: 'Quản lý phiên bản Java theo dự án' },
        {
          href: 'https://docs.spring.io/spring-boot/system-requirements.html',
          label: 'Kiểm tra yêu cầu của Spring Boot'
        }
      ]
    }
  },
  fastapi: {
    en: {
      summary:
        'Match the Python runtime to a FastAPI project, run its ASGI app from the project virtual environment and start the database or Redis only when the API needs them.',
      roles: {
        python: 'Provides the interpreter for the project’s virtual environment and ASGI server.',
        database: 'Provides the configured database for API endpoints that use it.',
        redis: 'Runs only for features that use Redis.',
        proxy: 'Optionally forwards a local HTTPS hostname to the ASGI port.'
      },
      helpTitle: 'Run the ASGI app with the project’s Python',
      help: [
        {
          title: 'Create the virtual environment with the right interpreter',
          description:
            'Choose Python from the project’s supported version range, then create the virtual environment and install the project’s declared dependencies. Use the environment’s Python to run the service.'
        },
        {
          title: 'Keep the real ASGI entrypoint',
          description:
            'Configure FlyEnv’s Python project with the app’s existing working directory and run command. For example, python -m uvicorn main:app --host 127.0.0.1 --port 8000 applies when main.py defines app. Adapt the module, object and port to the actual project.'
        },
        {
          title: 'Start the data services required by the requested route',
          description:
            'Use the local environment variables the application already reads to point to its test database or Redis. A database-independent route can work while a database-backed route still fails.'
        }
      ],
      setupTitle: 'Check an API response and its schema',
      setupIntro:
        'Test the loopback address before adding a local domain. A network client or a browser can check individual routes.',
      setupSteps: [
        'Start the ASGI command and look for the application startup messages. Request a route the API implements and verify the status and JSON.',
        'If enabled, open /docs and inspect the OpenAPI schema. If those URLs were moved or disabled, use the configured URL or the API’s tested route.',
        'Add a Host reverse proxy and local HTTPS only if a client needs them. For a stateful API, include the configured data services and the registered Python project in a Startup Group and verify one data-backed request after restarting.'
      ],
      links: [
        { href: '/features/python', label: 'Manage Python runtimes by project' },
        {
          href: '/guide/deploy-nodejs-python-go-without-docker',
          label: 'Run Python services locally'
        },
        {
          href: 'https://fastapi.tiangolo.com/deployment/manually/',
          label: 'Check FastAPI’s ASGI server documentation'
        }
      ]
    },
    zh: {
      summary:
        '为 FastAPI 项目选择 Python 版本，从项目虚拟环境启动 ASGI 应用，并按 API 实际需要启动数据库或 Redis。',
      roles: {
        python: '为项目虚拟环境和 ASGI 服务器提供解释器。',
        database: '为实际使用数据库的 API 路由提供已配置的数据库。',
        redis: '仅在项目使用 Redis 时启动。',
        proxy: '按需将本地 HTTPS 域名转发到 ASGI 端口。'
      },
      helpTitle: '用项目的 Python 运行 ASGI 应用',
      help: [
        {
          title: '用正确的解释器创建虚拟环境',
          description:
            '按项目支持的版本选择 Python，创建虚拟环境，安装项目声明的依赖，再用虚拟环境内的 Python 启动服务。'
        },
        {
          title: '保留实际的 ASGI 入口',
          description:
            '在 FlyEnv Python 项目中使用应用的工作目录和启动命令。例如 main.py 定义 app 时，可用 python -m uvicorn main:app --host 127.0.0.1 --port 8000。按实际项目调整模块、对象和端口。'
        },
        {
          title: '只启动请求所需的数据服务',
          description:
            '用项目已有的环境变量连接本地测试数据库或 Redis。不访问数据库的路由即使成功，也应单独检查需要数据库的路由。'
        }
      ],
      setupTitle: '验证 API 响应和 OpenAPI 文档',
      setupIntro: '配置本地域名前先测回环地址。可以通过网络客户端或浏览器检查具体路由。',
      setupSteps: [
        '启动 ASGI 命令，检查应用启动日志，请求已有路由并确认状态码与 JSON。',
        '如果启用了交互式文档，打开 /docs 检查 OpenAPI 结构。路径如果改过或已关闭，则使用实际文档地址或应用已验证的路由。',
        '客户端需要时再添加「站点」反向代理与 HTTPS。对于有数据库等状态依赖的 API，把已配置服务和 Python 项目加入启动组，并在重启后验证一次读数据的请求。'
      ],
      links: [
        { href: '/features/python', label: '按项目管理 Python 运行时' },
        { href: '/guide/deploy-nodejs-python-go-without-docker', label: '在本地运行 Python 服务' },
        {
          href: 'https://fastapi.tiangolo.com/deployment/manually/',
          label: '查看 FastAPI 的 ASGI 服务器文档'
        }
      ]
    },
    id: {
      summary:
        'Cocokkan versi Python dengan proyek FastAPI, jalankan aplikasi ASGI dari virtual environment proyek, dan mulai database atau Redis hanya jika diperlukan API.',
      roles: {
        python: 'Menyediakan interpreter bagi virtual environment proyek dan server ASGI.',
        database: 'Menyediakan database yang dikonfigurasi untuk endpoint yang memakainya.',
        redis: 'Berjalan hanya untuk fitur yang memakai Redis.',
        proxy: 'Meneruskan domain HTTPS lokal ke port ASGI bila perlu.'
      },
      helpTitle: 'Jalankan aplikasi ASGI dengan Python proyek',
      help: [
        {
          title: 'Buat virtual environment dengan interpreter yang sesuai',
          description:
            'Pilih versi Python yang didukung proyek, buat virtual environment, lalu instal dependensi yang dinyatakan proyek. Jalankan layanan dengan Python dari lingkungan tersebut.'
        },
        {
          title: 'Gunakan entrypoint ASGI yang sebenarnya',
          description:
            'Atur direktori kerja dan perintah start aplikasi di proyek Python FlyEnv. Contohnya python -m uvicorn main:app --host 127.0.0.1 --port 8000 jika main.py mendefinisikan app. Sesuaikan modul, objek, dan port.'
        },
        {
          title: 'Mulai layanan data yang dipakai rute',
          description:
            'Gunakan variabel lingkungan yang sudah dibaca aplikasi untuk mengarahkannya ke database uji atau Redis. Uji secara terpisah rute yang memakai database.'
        }
      ],
      setupTitle: 'Periksa respons API dan skemanya',
      setupIntro:
        'Uji alamat loopback sebelum menambahkan domain lokal. Gunakan klien HTTP atau browser untuk memeriksa rute.',
      setupSteps: [
        'Mulai perintah ASGI dan cek log startup aplikasi. Panggil rute yang diimplementasikan, lalu verifikasi status HTTP dan JSON.',
        'Jika tersedia, buka /docs dan periksa skema OpenAPI. Jika alamat diubah atau dimatikan, gunakan URL yang dikonfigurasi atau rute API yang telah diuji.',
        'Tambahkan reverse proxy Host dan HTTPS lokal jika klien memerlukannya. Untuk API yang bergantung pada data, simpan layanan data dan proyek Python di Startup Group lalu uji permintaan database setelah restart.'
      ],
      links: [
        { href: '/features/python', label: 'Kelola runtime Python per proyek' },
        {
          href: '/guide/deploy-nodejs-python-go-without-docker',
          label: 'Jalankan layanan Python secara lokal'
        },
        {
          href: 'https://fastapi.tiangolo.com/deployment/manually/',
          label: 'Baca dokumentasi server ASGI FastAPI'
        }
      ]
    },
    es: {
      summary:
        'Ajusta la versión de Python al proyecto FastAPI, ejecuta la aplicación ASGI desde su entorno virtual y arranca una base de datos o Redis según lo que necesite la API.',
      roles: {
        python: 'Proporciona el intérprete del entorno virtual y del servidor ASGI.',
        database: 'Proporciona la base configurada para los endpoints que la usan.',
        redis: 'Se usa para funciones configuradas con Redis.',
        proxy: 'Puede dirigir un dominio HTTPS local al puerto ASGI.'
      },
      helpTitle: 'Ejecuta la aplicación ASGI con el Python del proyecto',
      help: [
        {
          title: 'Crea el entorno virtual con el intérprete adecuado',
          description:
            'Elige una versión de Python admitida, crea el entorno virtual e instala las dependencias declaradas. Usa el Python de ese entorno para ejecutar el servicio.'
        },
        {
          title: 'Conserva el punto de entrada ASGI real',
          description:
            'Configura en el proyecto Python de FlyEnv el directorio de trabajo y el comando existentes. Por ejemplo, python -m uvicorn main:app --host 127.0.0.1 --port 8000 sirve cuando main.py define app. Ajusta módulo, objeto y puerto al proyecto.'
        },
        {
          title: 'Arranca los servicios de datos que usa la ruta',
          description:
            'Conecta la aplicación a una base de pruebas o a Redis mediante las variables que ya lee. Comprueba por separado las rutas con acceso a la base.'
        }
      ],
      setupTitle: 'Comprueba la respuesta de la API y su esquema',
      setupIntro:
        'Prueba la dirección de loopback antes de añadir un dominio local. Puedes usar un cliente HTTP o el navegador.',
      setupSteps: [
        'Inicia el comando ASGI, revisa el registro y solicita una ruta implementada. Comprueba el estado HTTP y el JSON.',
        'Si está habilitado, abre /docs y consulta el esquema OpenAPI. Si la URL cambió o está desactivada, usa la dirección configurada o una ruta comprobada de la API.',
        'Añade un proxy inverso y HTTPS mediante Host si un cliente lo requiere. Para una API con datos persistentes, agrupa los servicios de datos y el proyecto Python y comprueba una petición que use la base tras reiniciar.'
      ],
      links: [
        { href: '/features/python', label: 'Gestiona runtimes de Python por proyecto' },
        {
          href: '/guide/deploy-nodejs-python-go-without-docker',
          label: 'Ejecuta servicios de Python en local'
        },
        {
          href: 'https://fastapi.tiangolo.com/deployment/manually/',
          label: 'Consulta la documentación ASGI de FastAPI'
        }
      ]
    },
    vi: {
      summary:
        'Chọn phiên bản Python phù hợp cho FastAPI, chạy ứng dụng ASGI từ môi trường ảo của dự án và khởi động cơ sở dữ liệu hoặc Redis nếu API cần.',
      roles: {
        python: 'Cung cấp trình thông dịch cho môi trường ảo và máy chủ ASGI.',
        database: 'Cung cấp cơ sở dữ liệu đã cấu hình cho endpoint dùng dữ liệu.',
        redis: 'Chạy nếu tính năng của dự án dùng Redis.',
        proxy: 'Có thể chuyển tiếp tên miền HTTPS cục bộ đến cổng ASGI.'
      },
      helpTitle: 'Chạy ứng dụng ASGI bằng Python của dự án',
      help: [
        {
          title: 'Tạo môi trường ảo bằng đúng trình thông dịch',
          description:
            'Chọn phiên bản Python mà dự án hỗ trợ, tạo môi trường ảo và cài các phụ thuộc đã khai báo. Dùng Python trong môi trường này để chạy dịch vụ.'
        },
        {
          title: 'Giữ điểm vào ASGI thực tế',
          description:
            'Đặt thư mục làm việc và lệnh khởi động hiện có trong dự án Python của FlyEnv. Ví dụ python -m uvicorn main:app --host 127.0.0.1 --port 8000 áp dụng khi main.py định nghĩa app. Chỉnh mô-đun, đối tượng và cổng cho phù hợp.'
        },
        {
          title: 'Khởi động dịch vụ dữ liệu mà route sử dụng',
          description:
            'Dùng các biến môi trường ứng dụng đã đọc để kết nối cơ sở dữ liệu thử hoặc Redis. Kiểm tra riêng route có truy vấn cơ sở dữ liệu.'
        }
      ],
      setupTitle: 'Kiểm tra phản hồi API và schema',
      setupIntro:
        'Thử địa chỉ loopback trước khi thêm tên miền cục bộ. Dùng ứng dụng khách HTTP hoặc trình duyệt để kiểm tra route.',
      setupSteps: [
        'Chạy lệnh ASGI và xem log khởi động của ứng dụng. Gọi route có sẵn và kiểm tra mã trạng thái cùng JSON.',
        'Nếu được bật, mở /docs và kiểm tra schema OpenAPI. Nếu URL đã đổi hoặc bị tắt, dùng địa chỉ cấu hình hoặc route API đã kiểm tra.',
        'Chỉ thêm reverse proxy và HTTPS trong Host khi máy khách cần. Với API lưu dữ liệu, gom các dịch vụ dữ liệu và dự án Python vào Startup Group rồi thử một yêu cầu truy cập dữ liệu sau khi khởi động lại.'
      ],
      links: [
        { href: '/features/python', label: 'Quản lý runtime Python theo dự án' },
        {
          href: '/guide/deploy-nodejs-python-go-without-docker',
          label: 'Chạy dịch vụ Python cục bộ'
        },
        {
          href: 'https://fastapi.tiangolo.com/deployment/manually/',
          label: 'Xem tài liệu máy chủ ASGI của FastAPI'
        }
      ]
    }
  }
}
