export type ComparisonFaqLocale = 'en' | 'zh' | 'id' | 'es' | 'vi'
export type ComparisonFaqSlug = 'docker' | 'herd' | 'servbay'

export interface ComparisonFaq {
  question: string
  answer: string
}

type FaqTuple = readonly [question: string, answer: string]

const comparisonFaqs: Record<
  ComparisonFaqSlug,
  Record<ComparisonFaqLocale, readonly FaqTuple[]>
> = {
  docker: {
    en: [
      [
        `Is FlyEnv a replacement for Docker?`,
        `No. FlyEnv manages native local services; Docker packages apps into containers. They solve different problems and can be used together.`
      ],
      [
        `When should I use Docker instead of FlyEnv?`,
        `When production parity, isolation, or reproducible CI/staging environments matter, or when the project already ships a compose.yaml.`
      ],
      [
        `When is FlyEnv the better fit?`,
        `When you want a fast native local environment with managed runtimes, local domains and HTTPS, without writing Dockerfiles or Compose files.`
      ],
      [
        `Can I use FlyEnv and Docker together?`,
        `Yes — a common setup is FlyEnv for day-to-day native development and Docker for CI, integration tests, or projects that require container parity. Avoid port conflicts between the two.`
      ],
      [
        `Does FlyEnv use containers internally?`,
        `No. FlyEnv runs runtimes and services as native host processes on macOS, Windows and Linux.`
      ],
      [
        `Does Docker provide local domains and HTTPS automatically?`,
        `Not out of the box. You typically add a reverse proxy (Traefik, nginx-proxy) and certificates (mkcert or a CA) yourself; FlyEnv includes a built-in local site workflow for domains and HTTPS.`
      ],
      [
        `Which is easier for a team to standardize on?`,
        `If the team deploys containers, Docker's compose.yaml is the strongest shared contract. For teams that develop natively on macOS, Windows and Linux, FlyEnv gives everyone the same desktop workflow.`
      ],
      [
        `Does FlyEnv work with projects that already have a compose.yaml?`,
        `Yes — the compose file stays untouched; you can still run the app's runtime and services natively in FlyEnv, or just keep using Docker for that project.`
      ]
    ],
    zh: [
      [
        `FlyEnv 能替代 Docker 吗？`,
        `不能。FlyEnv 管理原生本地服务；Docker 将应用打包到容器中。两者解决不同问题，也可以结合使用。`
      ],
      [
        `什么时候应该使用 Docker 而不是 FlyEnv？`,
        `当生产一致性、隔离性或可复现的 CI/预发布环境很重要，或者项目已经提供 compose.yaml 时。`
      ],
      [
        `什么时候 FlyEnv 更合适？`,
        `当你希望获得快速的原生本地环境，统一管理运行时、本地域名和 HTTPS，且不想编写 Dockerfile 或 Compose 文件时。`
      ],
      [
        `可以同时使用 FlyEnv 和 Docker 吗？`,
        `可以——常见做法是日常原生开发使用 FlyEnv，CI、集成测试或要求容器一致性的项目使用 Docker；请避免两者端口冲突。`
      ],
      [
        `FlyEnv 内部使用容器吗？`,
        `不使用。FlyEnv 在 macOS、Windows 和 Linux 上以宿主机上的原生进程方式运行各运行时和服务。`
      ],
      [
        `Docker 会自动提供本地域名和 HTTPS 吗？`,
        `默认不会。通常需要自行添加反向代理（Traefik、nginx-proxy）和证书（mkcert 或 CA）；FlyEnv 内置了用于域名和 HTTPS 的本地站点工作流。`
      ],
      [
        `团队更容易统一采用哪一个？`,
        `如果团队使用容器部署，Docker 的 compose.yaml 是最明确的团队统一配置约定；对于在 macOS、Windows 和 Linux 上进行原生开发的团队，FlyEnv 可提供一致的桌面工作流。`
      ],
      [
        `FlyEnv 能与已有 compose.yaml 的项目配合使用吗？`,
        `可以——compose 文件保持不变；你可以在 FlyEnv 中原生运行应用的运行时和服务，也可以继续为该项目使用 Docker。`
      ]
    ],
    id: [
      [
        `Apakah FlyEnv pengganti Docker?`,
        `Tidak. FlyEnv mengelola layanan lokal native; Docker mengemas aplikasi ke dalam kontainer. Keduanya memecahkan masalah berbeda dan dapat digunakan bersama.`
      ],
      [
        `Kapan saya harus memakai Docker, bukan FlyEnv?`,
        `Saat konsistensi produksi, isolasi, atau lingkungan CI/staging yang dapat direproduksi penting, atau proyek sudah menyediakan compose.yaml.`
      ],
      [
        `Kapan FlyEnv lebih cocok?`,
        `Saat Anda menginginkan lingkungan lokal native yang cepat dengan runtime, domain lokal, dan HTTPS terkelola tanpa menulis Dockerfile atau file Compose.`
      ],
      [
        `Bisakah FlyEnv dan Docker digunakan bersama?`,
        `Bisa—umumnya FlyEnv dipakai untuk pengembangan harian native dan Docker untuk CI, pengujian integrasi, atau proyek yang memerlukan konsistensi kontainer. Hindari konflik port.`
      ],
      [
        `Apakah FlyEnv menggunakan kontainer secara internal?`,
        `Tidak. FlyEnv menjalankan runtime dan layanan sebagai proses native host di macOS, Windows, dan Linux.`
      ],
      [
        `Apakah Docker otomatis menyediakan domain lokal dan HTTPS?`,
        `Tidak secara bawaan. Anda biasanya perlu menambahkan reverse proxy (Traefik, nginx-proxy) dan sertifikat (mkcert atau CA); FlyEnv memiliki alur situs lokal bawaan untuk domain dan HTTPS.`
      ],
      [
        `Mana yang lebih mudah distandarkan oleh tim?`,
        `Jika tim menerapkan container di lingkungan produksi, compose.yaml Docker menjadi konfigurasi bersama yang paling jelas. Untuk tim yang mengembangkan secara native di macOS, Windows, dan Linux, FlyEnv memberi semua orang alur desktop yang sama.`
      ],
      [
        `Apakah FlyEnv bekerja dengan proyek yang sudah memiliki compose.yaml?`,
        `Bisa—file compose tetap utuh; Anda dapat menjalankan runtime dan layanan aplikasi secara native di FlyEnv, atau tetap menggunakan Docker untuk proyek tersebut.`
      ]
    ],
    es: [
      [
        `¿FlyEnv reemplaza a Docker?`,
        `No. FlyEnv gestiona servicios locales nativos; Docker empaqueta aplicaciones en contenedores. Resuelven problemas distintos y pueden usarse juntos.`
      ],
      [
        `¿Cuándo debería usar Docker en lugar de FlyEnv?`,
        `Cuando importan la paridad con producción, el aislamiento o los entornos de CI/staging reproducibles, o cuando el proyecto ya incluye un compose.yaml.`
      ],
      [
        `¿Cuándo es FlyEnv la mejor opción?`,
        `Cuando quieres un entorno local nativo rápido con runtimes gestionados, dominios locales y HTTPS, sin escribir Dockerfiles ni archivos Compose.`
      ],
      [
        `¿Puedo usar FlyEnv y Docker juntos?`,
        `Sí: una configuración habitual es FlyEnv para el desarrollo nativo diario y Docker para CI, pruebas de integración o proyectos que requieran paridad de contenedores. Evita conflictos de puertos entre ambos.`
      ],
      [
        `¿FlyEnv usa contenedores internamente?`,
        `No. FlyEnv ejecuta runtimes y servicios como procesos nativos del anfitrión en macOS, Windows y Linux.`
      ],
      [
        `¿Docker proporciona dominios locales y HTTPS automáticamente?`,
        `No de forma predeterminada. Normalmente debes añadir un proxy inverso (Traefik, nginx-proxy) y certificados (mkcert o una CA) por tu cuenta; FlyEnv incluye un flujo de sitios locales integrado para dominios y HTTPS.`
      ],
      [
        `¿Cuál es más fácil de estandarizar para un equipo?`,
        `Si el equipo despliega contenedores, el compose.yaml de Docker es el contrato compartido más sólido. Para equipos que desarrollan de forma nativa en macOS, Windows y Linux, FlyEnv ofrece a todos el mismo flujo de trabajo de escritorio.`
      ],
      [
        `¿FlyEnv funciona con proyectos que ya tienen un compose.yaml?`,
        `Sí: el archivo compose permanece intacto; puedes seguir ejecutando el runtime y los servicios de la aplicación de forma nativa en FlyEnv, o simplemente seguir usando Docker para ese proyecto.`
      ]
    ],
    vi: [
      [
        `FlyEnv có thay thế được Docker không?`,
        `Không. FlyEnv quản lý các dịch vụ local native; Docker đóng gói ứng dụng vào container. Hai công cụ giải quyết các vấn đề khác nhau và có thể dùng cùng nhau.`
      ],
      [
        `Khi nào nên dùng Docker thay vì FlyEnv?`,
        `Khi tính nhất quán với production, khả năng cô lập hoặc môi trường CI/staging có thể tái lập là yếu tố quan trọng, hoặc khi dự án đã sẵn có compose.yaml.`
      ],
      [
        `Khi nào FlyEnv là lựa chọn phù hợp hơn?`,
        `Khi bạn muốn một môi trường local native nhanh với runtime được quản lý sẵn, tên miền local và HTTPS, mà không phải viết Dockerfile hay file Compose.`
      ],
      [
        `Có thể dùng FlyEnv và Docker cùng lúc không?`,
        `Có — cách dùng phổ biến là FlyEnv cho phát triển native hằng ngày và Docker cho CI, kiểm thử tích hợp hoặc các dự án yêu cầu đồng nhất container. Hãy tránh xung đột cổng giữa hai công cụ.`
      ],
      [
        `FlyEnv có dùng container bên trong không?`,
        `Không. FlyEnv chạy các runtime và dịch vụ dưới dạng tiến trình native ngay trên hệ điều hành macOS, Windows và Linux.`
      ],
      [
        `Docker có tự động cung cấp tên miền local và HTTPS không?`,
        `Không có sẵn. Bạn thường phải tự thêm reverse proxy (Traefik, nginx-proxy) và chứng chỉ (mkcert hoặc CA); FlyEnv tích hợp sẵn quy trình local site cho tên miền và HTTPS.`
      ],
      [
        `Công cụ nào dễ chuẩn hóa hơn cho một đội nhóm?`,
        `Nếu đội nhóm triển khai container, compose.yaml của Docker là chuẩn dùng chung chặt chẽ nhất. Với các đội nhóm phát triển native trên macOS, Windows và Linux, FlyEnv mang lại cho mọi người cùng một quy trình làm việc trên desktop.`
      ],
      [
        `FlyEnv có hoạt động với các dự án đã có compose.yaml không?`,
        `Có — file compose được giữ nguyên; bạn vẫn có thể chạy runtime và dịch vụ của ứng dụng một cách native trong FlyEnv, hoặc tiếp tục dùng Docker cho dự án đó.`
      ]
    ]
  },
  herd: {
    en: [
      [
        `Should I switch from Laravel Herd to FlyEnv?`,
        `Not necessarily. If you mostly build Laravel applications on macOS or Windows, Herd is an excellent, deeply integrated tool. FlyEnv becomes more useful when you work across several languages and frameworks, need Linux support, or want more infrastructure modules built in.`
      ],
      [
        `Does FlyEnv support Laravel development?`,
        `Yes. FlyEnv runs complete Laravel stacks: multiple PHP versions, Nginx, Apache or Caddy, MySQL, MariaDB, PostgreSQL, Redis, queues and local domains with HTTPS. What it does not include is Laravel-specific tooling such as herd.yml or Forge integration.`
      ],
      [
        `Can FlyEnv replace Herd Pro services?`,
        `For local development, largely yes. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense and Meilisearch are available as built-in FlyEnv modules rather than a paid add-on tier, and FlyEnv’s Mailpit module covers the same local mail testing as Herd Pro’s mail server. Herd Pro also includes Laravel-specific extras like Reverb and the debug dump window, which FlyEnv does not replicate.`
      ],
      [
        `Does FlyEnv support herd.yml or Laravel Forge?`,
        `No. herd.yml and Forge integration are Laravel-ecosystem features of Herd. FlyEnv instead uses per-project site configuration and Startup Groups to keep each project’s services together.`
      ],
      [
        `Can I run Node.js, Python or Java projects with FlyEnv?`,
        `Yes. FlyEnv manages Node.js, Python, Go, Java and other runtimes next to PHP, so non-Laravel projects live in the same workspace as your Laravel apps.`
      ],
      [
        `Does FlyEnv work on Linux?`,
        `Yes. FlyEnv supports macOS, Windows and Linux. Laravel Herd currently supports macOS and Windows.`
      ],
      [
        `Can I keep my existing Laravel projects?`,
        `Yes. Point a FlyEnv local site at your existing project directory, pick the PHP version and services it needs, and keep working — no application rewrite is required in most cases.`
      ],
      [
        `Can I use Herd and FlyEnv together?`,
        `Yes. Some developers keep Herd for Laravel-focused work and use FlyEnv for Node.js, Java, Python or infrastructure-heavy projects. Just avoid running two web servers or databases on the same ports at the same time.`
      ]
    ],
    zh: [
      [
        `我应该从 Laravel Herd 切换到 FlyEnv 吗？`,
        `不一定。如果你主要在 macOS 或 Windows 上构建 Laravel 应用，Herd 是优秀且深度集成的工具。当你需要跨多种语言和框架、Linux 支持或更多内置基础设施模块时，FlyEnv 会更有价值。`
      ],
      [
        `FlyEnv 支持 Laravel 开发吗？`,
        `支持。FlyEnv 可运行完整 Laravel 堆栈：多个 PHP 版本、Nginx、Apache 或 Caddy、MySQL、MariaDB、PostgreSQL、Redis、队列以及带 HTTPS 的本地域名。但不包含 herd.yml 或 Forge 集成等 Laravel 专属工具。`
      ],
      [
        `FlyEnv 能替代 Herd Pro 服务吗？`,
        `对于本地开发，大部分情况下可以。MySQL、MariaDB、PostgreSQL、MongoDB、Redis、MinIO、RustFS、Typesense 和 Meilisearch 都是 FlyEnv 的内置模块，无需付费附加层；FlyEnv 的 Mailpit 模块也能完成 Herd Pro 邮件服务器的本地邮件测试。Herd Pro 还包含 Reverb 和调试转储窗口等 Laravel 专属功能，FlyEnv 不提供这些功能。`
      ],
      [
        `FlyEnv 支持 herd.yml 或 Laravel Forge 吗？`,
        `不支持。herd.yml 和 Forge 集成是 Herd 的 Laravel 生态功能。FlyEnv 使用按项目的站点配置和启动组，将每个项目的服务集中管理。`
      ],
      [
        `FlyEnv 能运行 Node.js、Python 或 Java 项目吗？`,
        `可以。FlyEnv 在 PHP 旁管理 Node.js、Python、Go、Java 等运行时，因此非 Laravel 项目可与 Laravel 应用共存于同一工作区。`
      ],
      [
        `FlyEnv 支持 Linux 吗？`,
        `支持。FlyEnv 支持 macOS、Windows 和 Linux；Laravel Herd 目前支持 macOS 和 Windows。`
      ],
      [
        `可以保留现有 Laravel 项目吗？`,
        `可以。将 FlyEnv 本地站点指向现有项目目录，选择所需 PHP 版本和服务即可继续工作，大多数情况下无需重写应用。`
      ],
      [
        `可以同时使用 Herd 和 FlyEnv 吗？`,
        `可以。一些开发者保留 Herd 处理 Laravel 工作，同时使用 FlyEnv 处理 Node.js、Java、Python 或基础设施密集型项目。只要避免同时运行占用相同端口的两个 Web 服务器或数据库即可。`
      ]
    ],
    id: [
      [
        `Haruskah saya beralih dari Laravel Herd ke FlyEnv?`,
        `Tidak selalu. Jika Anda terutama membuat aplikasi Laravel di macOS atau Windows, Herd adalah alat yang sangat terintegrasi. FlyEnv lebih berguna saat Anda bekerja dengan banyak bahasa dan framework, memerlukan dukungan Linux, atau ingin lebih banyak modul infrastruktur bawaan.`
      ],
      [
        `Apakah FlyEnv mendukung pengembangan Laravel?`,
        `Bisa. FlyEnv menjalankan stack Laravel lengkap: beberapa versi PHP, Nginx, Apache atau Caddy, MySQL, MariaDB, PostgreSQL, Redis, queue, dan domain lokal dengan HTTPS. Yang tidak tersedia adalah alat khusus Laravel seperti herd.yml atau integrasi Forge.`
      ],
      [
        `Apakah FlyEnv dapat menggantikan layanan Herd Pro?`,
        `Untuk pengembangan lokal, sebagian besar bisa. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense, dan Meilisearch tersedia sebagai modul bawaan FlyEnv, bukan sebagai add-on berbayar. Modul Mailpit FlyEnv menyediakan pengujian email lokal seperti server email Herd Pro. Herd Pro juga memiliki fitur khusus Laravel seperti Reverb dan jendela debug dump yang tidak disediakan FlyEnv.`
      ],
      [
        `Apakah FlyEnv mendukung herd.yml atau Laravel Forge?`,
        `Tidak. herd.yml dan integrasi Forge adalah fitur ekosistem Laravel milik Herd. FlyEnv menggunakan konfigurasi situs per proyek dan Startup Groups untuk menyatukan layanan tiap proyek.`
      ],
      [
        `Bisakah saya menjalankan proyek Node.js, Python, atau Java dengan FlyEnv?`,
        `Bisa. FlyEnv mengelola Node.js, Python, Go, Java, dan runtime lain berdampingan dengan PHP, sehingga proyek non-Laravel berada di ruang kerja yang sama dengan aplikasi Laravel Anda.`
      ],
      [
        `Apakah FlyEnv berjalan di Linux?`,
        `Bisa. FlyEnv mendukung macOS, Windows, dan Linux. Laravel Herd saat ini mendukung macOS dan Windows.`
      ],
      [
        `Bisakah saya mempertahankan proyek Laravel yang ada?`,
        `Bisa. Arahkan situs lokal FlyEnv ke direktori proyek yang ada, pilih versi PHP dan layanan yang diperlukan, lalu lanjutkan bekerja—biasanya tanpa menulis ulang aplikasi.`
      ],
      [
        `Bisakah saya memakai Herd dan FlyEnv bersama?`,
        `Bisa. Sebagian developer memakai Herd untuk pekerjaan Laravel dan FlyEnv untuk proyek Node.js, Java, Python, atau yang membutuhkan banyak infrastruktur. Hindari menjalankan dua server web atau database pada port yang sama secara bersamaan.`
      ]
    ],
    es: [
      [
        `¿Debería cambiar de Laravel Herd a FlyEnv?`,
        `No necesariamente. Si principalmente creas aplicaciones Laravel en macOS o Windows, Herd es una herramienta excelente y muy integrada. FlyEnv resulta más útil cuando trabajas con varios lenguajes y frameworks, necesitas compatibilidad con Linux o quieres más módulos de infraestructura integrados.`
      ],
      [
        `¿FlyEnv es compatible con el desarrollo en Laravel?`,
        `Sí. FlyEnv ejecuta stacks completos de Laravel: varias versiones de PHP, Nginx, Apache o Caddy, MySQL, MariaDB, PostgreSQL, Redis, colas y dominios locales con HTTPS. Lo que no incluye son herramientas específicas de Laravel como herd.yml o la integración con Forge.`
      ],
      [
        `¿Puede FlyEnv reemplazar los servicios de Herd Pro?`,
        `Para desarrollo local, en gran parte sí. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense y Meilisearch están disponibles como módulos integrados de FlyEnv en lugar de un nivel de pago adicional, y el módulo Mailpit de FlyEnv cubre las mismas pruebas de correo local que el servidor de correo de Herd Pro. Herd Pro también incluye extras específicos de Laravel como Reverb y la ventana de volcado de depuración, que FlyEnv no replica.`
      ],
      [
        `¿FlyEnv es compatible con herd.yml o Laravel Forge?`,
        `No. herd.yml y la integración con Forge son funciones del ecosistema Laravel propias de Herd. FlyEnv, en cambio, usa la configuración de sitios por proyecto y los Startup Groups para mantener juntos los servicios de cada proyecto.`
      ],
      [
        `¿Puedo ejecutar proyectos de Node.js, Python o Java con FlyEnv?`,
        `Sí. FlyEnv gestiona Node.js, Python, Go, Java y otros runtimes junto a PHP, de modo que los proyectos que no son de Laravel conviven en el mismo espacio de trabajo que tus aplicaciones Laravel.`
      ],
      [
        `¿FlyEnv funciona en Linux?`,
        `Sí. FlyEnv es compatible con macOS, Windows y Linux. Laravel Herd actualmente es compatible con macOS y Windows.`
      ],
      [
        `¿Puedo conservar mis proyectos Laravel existentes?`,
        `Sí. Apunta un sitio local de FlyEnv al directorio de tu proyecto existente, elige la versión de PHP y los servicios que necesita, y sigue trabajando: en la mayoría de los casos no hace falta reescribir la aplicación.`
      ],
      [
        `¿Puedo usar Herd y FlyEnv a la vez?`,
        `Sí. Algunos desarrolladores conservan Herd para el trabajo centrado en Laravel y usan FlyEnv para proyectos de Node.js, Java, Python o con mucha infraestructura. Solo evita ejecutar dos servidores web o bases de datos en los mismos puertos al mismo tiempo.`
      ]
    ],
    vi: [
      [
        `Tôi có nên chuyển từ Laravel Herd sang FlyEnv không?`,
        `Không nhất thiết. Nếu bạn chủ yếu xây dựng ứng dụng Laravel trên macOS hoặc Windows, Herd là một công cụ xuất sắc và tích hợp sâu. FlyEnv trở nên hữu ích hơn khi bạn làm việc với nhiều ngôn ngữ và framework, cần hỗ trợ Linux, hoặc muốn nhiều module hạ tầng tích hợp sẵn hơn.`
      ],
      [
        `FlyEnv có hỗ trợ phát triển Laravel không?`,
        `Có. FlyEnv chạy được toàn bộ stack Laravel: nhiều phiên bản PHP, Nginx, Apache hoặc Caddy, MySQL, MariaDB, PostgreSQL, Redis, queue và tên miền local với HTTPS. Điều nó không bao gồm là các công cụ riêng của Laravel như herd.yml hay tích hợp Forge.`
      ],
      [
        `FlyEnv có thể thay thế các dịch vụ của Herd Pro không?`,
        `Cho phát triển local, phần lớn là có. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense và Meilisearch đều là module tích hợp sẵn của FlyEnv thay vì gói trả phí bổ sung, và module Mailpit của FlyEnv đáp ứng việc kiểm thử mail local giống như mail server của Herd Pro. Herd Pro còn có các tính năng riêng của Laravel như Reverb và cửa sổ debug dump mà FlyEnv không có.`
      ],
      [
        `FlyEnv có hỗ trợ herd.yml hoặc Laravel Forge không?`,
        `Không. herd.yml và tích hợp Forge là các tính năng thuộc hệ sinh thái Laravel của Herd. FlyEnv thay vào đó dùng cấu hình site theo từng dự án và Startup Groups để gom các dịch vụ của mỗi dự án lại với nhau.`
      ],
      [
        `Tôi có thể chạy dự án Node.js, Python hoặc Java với FlyEnv không?`,
        `Có. FlyEnv quản lý Node.js, Python, Go, Java và nhiều runtime khác song song với PHP, nên các dự án không phải Laravel nằm cùng không gian làm việc với ứng dụng Laravel của bạn.`
      ],
      [
        `FlyEnv có chạy trên Linux không?`,
        `Có. FlyEnv hỗ trợ macOS, Windows và Linux. Laravel Herd hiện hỗ trợ macOS và Windows.`
      ],
      [
        `Tôi có thể giữ lại các dự án Laravel hiện có không?`,
        `Có. Trỏ một local site của FlyEnv vào thư mục dự án hiện có, chọn phiên bản PHP và các dịch vụ cần thiết, rồi tiếp tục công việc — trong hầu hết trường hợp không cần viết lại ứng dụng.`
      ],
      [
        `Có thể dùng Herd và FlyEnv cùng lúc không?`,
        `Có. Một số developer giữ Herd cho công việc tập trung vào Laravel và dùng FlyEnv cho các dự án Node.js, Java, Python hoặc cần nhiều hạ tầng. Chỉ cần tránh chạy hai web server hoặc cơ sở dữ liệu trên cùng cổng vào cùng một thời điểm.`
      ]
    ]
  },
  servbay: {
    en: [
      [
        `Is FlyEnv a good ServBay alternative?`,
        `Yes, it is one of the closest peers: both are all-in-one local development workspaces. FlyEnv is the more direct alternative if you need Linux, Startup Groups or its specific modules; ServBay is stronger if you want its first-party AI Gateway, PKI/ACME certificates or multiple tunnel providers.`
      ],
      [
        `What is the biggest difference between FlyEnv and ServBay?`,
        `Platform coverage and product emphasis: FlyEnv adds Linux and focuses on development modules and project workflows; ServBay focuses on its AI Gateway, PKI/ACME public certificates, multi-provider tunnels and wider legacy version coverage.`
      ],
      [
        `Does ServBay support Linux?`,
        `ServBay's current desktop application is officially offered for macOS and Windows. FlyEnv supports macOS, Windows and Linux.`
      ],
      [
        `Is FlyEnv really free?`,
        `The core is: FlyEnv is open source, and all runtimes, databases and environment management features are always accessible without paying. The free evaluation version limits you to 3 local sites, and a few premium tools (AI assistant, screenshot, image optimizer) are 3-day trials; a $10 Personal license removes those limits. ServBay similarly offers a free tier (5 websites) with Pro features such as the mail server, tunnels and PKI/ACME requiring a paid license.`
      ],
      [
        `Do both tools support MCP and AI workflows?`,
        `Yes. ServBay includes an MCP Server and a first-party AI Gateway with routing and cost tracking in its free tier. FlyEnv provides an MCP Server, a managed Ollama module for local models, a CLIProxyAPI local AI gateway and AI coding client modules — both let AI tools manage your local environment.`
      ],
      [
        `Can both run multiple PHP versions per project?`,
        `Yes. Both support multiple coexisting PHP versions with per-project/per-site assignment. ServBay covers older versions (from PHP 5.3); FlyEnv focuses on currently used versions.`
      ],
      [
        `Can I migrate from ServBay to FlyEnv?`,
        `Yes. Projects are plain directories; recreate the site in FlyEnv, assign the same runtime versions, and point the domain at the project. Databases can be exported/imported with standard tools.`
      ],
      [
        `Which one should a team standardize on?`,
        `If the team is macOS/Windows-only and wants ServBay's AI/PKI features, ServBay fits. If the team includes Linux developers or wants an open-source tool with per-project service stacks, FlyEnv fits better.`
      ]
    ],
    zh: [
      [
        `FlyEnv 是 ServBay 的好替代品吗？`,
        `可以，它们都是非常接近的一体化本地开发工作区。如果你需要 Linux、启动组或 FlyEnv 的专属模块，FlyEnv 是更直接的替代方案；如果你需要自有 AI 网关、PKI/ACME 证书或多个隧道提供商，ServBay 更强。`
      ],
      [
        `FlyEnv 和 ServBay 最大的区别是什么？`,
        `平台覆盖和产品侧重点不同：FlyEnv 增加 Linux，专注开发模块和项目工作流；ServBay 则侧重 AI 网关、PKI/ACME 公共证书、多提供商隧道和更广泛的旧版本支持。`
      ],
      [
        `ServBay 支持 Linux 吗？`,
        `ServBay 当前桌面应用正式支持 macOS 和 Windows；FlyEnv 支持 macOS、Windows 和 Linux。`
      ],
      [
        `FlyEnv 真的是免费的吗？`,
        `核心是：FlyEnv 开源，所有运行时、数据库和环境管理功能始终无需付费即可使用。免费评估版限制为 3 个本地站点，部分高级工具提供 3 天试用；10 美元个人许可证可解除这些限制。ServBay 同样提供免费层级（5 个网站），邮件服务器、隧道和 PKI/ACME 等 Pro 功能需要付费许可证。`
      ],
      [
        `两款工具都支持 MCP 和 AI 工作流吗？`,
        `支持。ServBay 在免费层级中提供 MCP 服务器和带路由与成本追踪的自有 AI 网关；FlyEnv 提供 MCP 服务器、托管 Ollama 本地模型模块、CLIProxyAPI 本地 AI 网关和 AI 编程客户端模块——两者都能让 AI 工具管理本地环境。`
      ],
      [
        `两款工具都能为每个项目运行多个 PHP 版本吗？`,
        `支持。两者都支持共存的多个 PHP 版本，并可按项目/站点分配。ServBay 覆盖 PHP 5.3 起的旧版本；FlyEnv 更关注当前常用版本。`
      ],
      [
        `可以从 ServBay 迁移到 FlyEnv 吗？`,
        `可以。项目就是普通目录；在 FlyEnv 中重新创建站点，分配相同运行时版本并将域名指向项目。数据库可使用标准工具导入导出。`
      ],
      [
        `团队应该统一采用哪一个？`,
        `如果团队仅使用 macOS/Windows 且需要 ServBay 的 AI/PKI 功能，ServBay 更合适；如果团队包含 Linux 开发者，或需要按项目服务堆栈的开源工具，FlyEnv 更合适。`
      ]
    ],
    id: [
      [
        `Apakah FlyEnv alternatif ServBay yang baik?`,
        `Bisa, ini salah satu pesaing terdekat: keduanya adalah ruang kerja pengembangan lokal all-in-one. FlyEnv lebih cocok jika Anda memerlukan Linux, Startup Groups, atau modul khususnya; ServBay lebih kuat jika Anda memerlukan AI Gateway pihak pertama, sertifikat PKI/ACME, atau banyak penyedia tunnel.`
      ],
      [
        `Apa perbedaan terbesar FlyEnv dan ServBay?`,
        `Cakupan platform dan fokus produk berbeda: FlyEnv menambahkan Linux serta berfokus pada modul pengembangan dan alur proyek; ServBay berfokus pada AI Gateway, sertifikat publik PKI/ACME, tunnel multi-penyedia, dan dukungan versi lama yang lebih luas.`
      ],
      [
        `Apakah ServBay mendukung Linux?`,
        `Aplikasi desktop ServBay saat ini resmi tersedia untuk macOS dan Windows. FlyEnv mendukung macOS, Windows, dan Linux.`
      ],
      [
        `Apakah FlyEnv benar-benar gratis?`,
        `Intinya: FlyEnv bersumber terbuka, dan semua runtime, database, serta fitur pengelolaan lingkungan dapat digunakan tanpa biaya. Versi evaluasi gratis membatasi 3 situs lokal, sementara beberapa alat premium tersedia sebagai uji coba 3 hari; lisensi Personal $10 menghapus batas tersebut. ServBay juga menawarkan tier gratis (5 situs), sedangkan fitur Pro seperti server email, tunnel, dan PKI/ACME memerlukan lisensi berbayar.`
      ],
      [
        `Apakah keduanya mendukung alur MCP dan AI?`,
        `Ya. ServBay menyertakan Server MCP dan AI Gateway pihak pertama dengan routing serta pelacakan biaya di tier gratis. FlyEnv menyediakan Server MCP, modul Ollama terkelola untuk model lokal, gateway AI lokal CLIProxyAPI, dan modul klien coding AI—keduanya memungkinkan alat AI mengelola lingkungan lokal.`
      ],
      [
        `Apakah keduanya dapat menjalankan beberapa versi PHP per proyek?`,
        `Ya. Keduanya mendukung beberapa versi PHP yang hidup berdampingan dengan penetapan per proyek/situs. ServBay mencakup versi lama mulai PHP 5.3; FlyEnv berfokus pada versi yang umum digunakan.`
      ],
      [
        `Bisakah saya bermigrasi dari ServBay ke FlyEnv?`,
        `Ya. Proyek berupa direktori biasa; buat ulang situs di FlyEnv, tetapkan versi runtime yang sama, dan arahkan domain ke proyek. Database dapat diekspor/diimpor dengan alat standar.`
      ],
      [
        `Mana yang sebaiknya distandarkan oleh tim?`,
        `Jika tim hanya memakai macOS/Windows dan menginginkan fitur AI/PKI ServBay, pilih ServBay. Jika tim memiliki developer Linux atau menginginkan alat sumber terbuka dengan stack layanan per proyek, FlyEnv lebih cocok.`
      ]
    ],
    es: [
      [
        `¿Es FlyEnv una buena alternativa a ServBay?`,
        `Sí, es uno de los competidores más cercanos: ambos son espacios de trabajo de desarrollo local todo en uno. FlyEnv es la alternativa más directa si necesitas Linux, Startup Groups o sus módulos específicos; ServBay es más fuerte si quieres su AI Gateway propio, certificados PKI/ACME o varios proveedores de túneles.`
      ],
      [
        `¿Cuál es la mayor diferencia entre FlyEnv y ServBay?`,
        `Cobertura de plataformas y enfoque del producto: FlyEnv añade Linux y se centra en módulos de desarrollo y flujos de trabajo de proyectos; ServBay se centra en su AI Gateway, certificados públicos PKI/ACME, túneles multiprooveedor y una cobertura más amplia de versiones antiguas.`
      ],
      [
        `¿ServBay es compatible con Linux?`,
        `La aplicación de escritorio actual de ServBay se ofrece oficialmente para macOS y Windows. FlyEnv es compatible con macOS, Windows y Linux.`
      ],
      [
        `¿FlyEnv es realmente gratuito?`,
        `El núcleo sí lo es: FlyEnv es de código abierto, y todos los runtimes, bases de datos y funciones de gestión de entornos siempre son accesibles sin pagar. La versión de evaluación gratuita te limita a 3 sitios locales, y algunas herramientas premium (asistente de IA, capturas de pantalla, optimizador de imágenes) son pruebas de 3 días; una licencia Personal de $10 elimina esos límites. ServBay ofrece de forma similar un nivel gratuito (5 sitios web) con funciones Pro como el servidor de correo, los túneles y PKI/ACME que requieren una licencia de pago.`
      ],
      [
        `¿Ambas herramientas son compatibles con flujos de trabajo de MCP e IA?`,
        `Sí. ServBay incluye un servidor MCP y un AI Gateway propio con enrutamiento y seguimiento de costes en su nivel gratuito. FlyEnv proporciona un servidor MCP, un módulo Ollama gestionado para modelos locales, una puerta de enlace de IA local CLIProxyAPI y módulos de clientes de programación con IA: ambos permiten que las herramientas de IA gestionen tu entorno local.`
      ],
      [
        `¿Pueden ambas ejecutar varias versiones de PHP por proyecto?`,
        `Sí. Ambas admiten varias versiones de PHP coexistentes con asignación por proyecto/sitio. ServBay cubre versiones más antiguas (desde PHP 5.3); FlyEnv se centra en las versiones actualmente en uso.`
      ],
      [
        `¿Puedo migrar de ServBay a FlyEnv?`,
        `Sí. Los proyectos son simples directorios; vuelve a crear el sitio en FlyEnv, asigna las mismas versiones de runtime y apunta el dominio al proyecto. Las bases de datos se pueden exportar e importar con herramientas estándar.`
      ],
      [
        `¿Cuál debería estandarizar un equipo?`,
        `Si el equipo solo usa macOS/Windows y quiere las funciones de IA/PKI ServBay, ServBay encaja. Si el equipo incluye desarrolladores de Linux o quiere una herramienta de código abierto con stacks de servicios por proyecto, FlyEnv encaja mejor.`
      ]
    ],
    vi: [
      [
        `FlyEnv có phải là lựa chọn thay thế ServBay tốt không?`,
        `Có, FlyEnv là một trong những lựa chọn thay thế gần nhất: cả hai đều là không gian làm việc phát triển local all-in-one. FlyEnv là phương án thay thế trực tiếp hơn nếu bạn cần Linux, Startup Groups hoặc các module đặc thù của nó; ServBay mạnh hơn nếu bạn muốn AI Gateway chính hãng, chứng chỉ PKI/ACME hoặc nhiều nhà cung cấp tunnel.`
      ],
      [
        `Điểm khác biệt lớn nhất giữa FlyEnv và ServBay là gì?`,
        `Khác biệt nằm ở phạm vi nền tảng và trọng tâm sản phẩm: FlyEnv bổ sung Linux và tập trung vào module phát triển cùng quy trình làm việc của dự án; ServBay tập trung vào AI Gateway, chứng chỉ công khai PKI/ACME, tunnel đa nhà cung cấp và phạm vi phiên bản cũ rộng hơn.`
      ],
      [
        `ServBay có hỗ trợ Linux không?`,
        `Ứng dụng desktop hiện tại của ServBay chính thức được cung cấp cho macOS và Windows. FlyEnv hỗ trợ macOS, Windows và Linux.`
      ],
      [
        `FlyEnv có thực sự miễn phí không?`,
        `Phần cốt lõi thì có: FlyEnv là mã nguồn mở, và toàn bộ runtime, cơ sở dữ liệu cùng các tính năng quản lý môi trường luôn dùng được mà không phải trả phí. Bản dùng thử miễn phí giới hạn 3 local site, một vài công cụ cao cấp (trợ lý AI, chụp màn hình, tối ưu ảnh) chỉ dùng thử 3 ngày; giấy phép Personal 10 USD sẽ bỏ các giới hạn đó. ServBay cũng có gói miễn phí tương tự (5 website), còn các tính năng Pro như mail server, tunnel và PKI/ACME đòi hỏi giấy phép trả phí.`
      ],
      [
        `Cả hai công cụ có hỗ trợ MCP và quy trình làm việc AI không?`,
        `Có. ServBay bao gồm MCP Server và AI Gateway chính hãng với định tuyến cùng theo dõi chi phí trong gói miễn phí. FlyEnv cung cấp MCP Server, module Ollama được quản lý cho model local, AI gateway local CLIProxyAPI và các module AI coding client — cả hai đều cho phép các công cụ AI quản lý môi trường local của bạn.`
      ],
      [
        `Cả hai có thể chạy nhiều phiên bản PHP cho mỗi dự án không?`,
        `Có. Cả hai đều hỗ trợ nhiều phiên bản PHP cùng tồn tại với cách gán theo từng dự án/từng site. ServBay hỗ trợ các phiên bản cũ hơn (từ PHP 5.3); FlyEnv tập trung vào các phiên bản đang được sử dụng.`
      ],
      [
        `Tôi có thể chuyển từ ServBay sang FlyEnv không?`,
        `Có. Dự án chỉ là các thư mục thông thường; hãy tạo lại site trong FlyEnv, gán cùng các phiên bản runtime và trỏ tên miền về dự án. Cơ sở dữ liệu có thể xuất/nhập bằng các công cụ tiêu chuẩn.`
      ],
      [
        `Đội nhóm nên chuẩn hóa theo công cụ nào?`,
        `Nếu đội nhóm chỉ dùng macOS/Windows và muốn các tính năng AI/PKI của ServBay thì ServBay phù hợp. Nếu đội nhóm có developer Linux hoặc muốn một công cụ mã nguồn mở với stack dịch vụ theo từng dự án thì FlyEnv phù hợp hơn.`
      ]
    ]
  }
}

export function getComparisonFaqs(
  slug: ComparisonFaqSlug,
  locale: ComparisonFaqLocale = 'en'
): ComparisonFaq[] {
  return comparisonFaqs[slug][locale].map(([question, answer]) => ({ question, answer }))
}
