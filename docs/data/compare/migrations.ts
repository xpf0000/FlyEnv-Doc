export type CompareLocale = 'en' | 'zh' | 'id' | 'es' | 'vi'

interface MigrationCopy {
  title: string
  intro: string
  steps: string[]
  rollback: string
  guide: string
  terms?: string
  license?: string
}

export interface ComparisonMigration {
  guidePath: string
  demoId: string
  sources: { label: string; href: string }[]
  copy: Record<CompareLocale, MigrationCopy>
}

export const laragonMigration: ComparisonMigration = {
  demoId: 'project-environment-switching',
  guidePath: '/guide/project-level-runtime-environment',
  sources: [
    { label: 'Laragon · Multi-Stack Profiles', href: 'https://laragon.org/docs/profile' },
    { label: 'Laragon · Full installer and features', href: 'https://laragon.org/download' },
    { label: 'Laragon · Quick-add', href: 'https://laragon.org/docs/quick-add' },
    { label: 'Laragon · Auto SSL', href: 'https://laragon.org/docs/auto-ssl' },
    { label: 'Laragon · Pricing', href: 'https://laragon.org/pricing' }
  ],
  copy: {
    en: {
      title: 'Try one Laragon Laravel project in FlyEnv',
      intro:
        'Laragon is a good fit when your Windows workflow depends on portable tools, Quick App and saved stack profiles. Try FlyEnv with a copy of one Laravel app when teammates use macOS or Linux, or when you want to bind CLI runtimes and start managed dependencies per project.',
      steps: [
        'In the Laragon profile you use for this app, record the PHP and Node.js versions, PHP extensions, web server, database engine and port. Copy the project and its local .env, and export its database as SQL before stopping any service.',
        'Install compatible PHP and Node.js versions, the same database engine and a web server in FlyEnv. Keep Apache if the app depends on .htaccess. Bind PHP and Node.js to the copied folder in Projects, then create a Host entry for laragon-pilot.test pointing to Laravel’s public directory and select the site PHP version.',
        'Import the dump into a separate database. Point the copied .env at its actual host, port and credentials, update APP_URL, and run php artisan config:clear if you use cached configuration. Stop the old web or database service if it occupies the same port, or assign a different port before starting FlyEnv.',
        'Enable local HTTPS, trust the certificate on this machine and check login, a database read and the frontend build. In Startup Groups, select the web server, PHP and database you tested, adding Redis only if the app uses it. On macOS or Linux, verify case-sensitive paths, permissions and platform-specific PHP extensions before sharing the setup.'
      ],
      rollback:
        'Stop the FlyEnv group and restart the original Laragon profile. Return to the original URL and project folder. Keep the trial database separate so restoring the original setup needs no data overwrite.',
      guide: 'Bind PHP and Node.js to a project folder',
      terms:
        'Laragon allows unlicensed non-commercial use with a startup reminder and lists annual and perpetual commercial licenses. FlyEnv publishes its source under BSD-3-Clause and offers a separate optional license for app features.',
      license: 'FlyEnv license details'
    },
    zh: {
      title: '先用 FlyEnv 试迁一个 Laragon 上的 Laravel 项目',
      intro:
        '如果你在 Windows 上依赖 Laragon 的便携工具、Quick App 和已保存的环境配置，可继续沿用这套工作流。如果团队还用 macOS 或 Linux，或者你想按项目绑定命令行运行时、启动所需服务，可以先拿一个 Laravel 项目的副本试用 FlyEnv。',
      steps: [
        '打开该项目使用的 Laragon Profile，记下 PHP、Node.js 的版本、PHP 扩展、Web 服务器以及数据库引擎和端口。复制项目和本地 .env，在停止服务前把数据库导出为 SQL。',
        '在 FlyEnv 安装兼容的 PHP、Node.js、同一种数据库引擎和所需的 Web 服务器。依赖 .htaccess 的项目可继续使用 Apache。在「项目」中为副本绑定 PHP 和 Node.js。在「站点」中添加 laragon-pilot.test，根目录指向 Laravel 的 public 目录，并选择站点的 PHP 版本。',
        '把 SQL 导入独立的数据库。修改副本 .env 的数据库地址、端口、凭据和 APP_URL。如果 Laravel 缓存了配置，运行 php artisan config:clear。启动 FlyEnv 前，先停止占用同一端口的旧服务，或给新服务改用其他端口。',
        '启用本地 HTTPS，在当前机器信任证书，检查登录、数据库读取和前端构建。把已验证的 Web 服务器、PHP 和数据库加入启动组，项目使用 Redis 时再加 Redis。在 macOS 或 Linux 上还要核对路径大小写、权限和 PHP 扩展是否可用。'
      ],
      rollback:
        '停止 FlyEnv 启动组，重新启动 Laragon 原有的 Profile，再回到原来的域名和项目目录。试迁数据库独立保存，回退时无需覆盖原数据。',
      guide: '按项目目录绑定 PHP 和 Node.js',
      terms:
        'Laragon 允许无许可证的非商业使用，启动时会提示购买。商业授权有年付和永久选项。FlyEnv 的源代码采用 BSD-3-Clause 许可证，应用的部分功能另有可选授权。',
      license: '查看 FlyEnv 授权详情'
    },
    id: {
      title: 'Uji migrasi satu proyek Laravel dari Laragon ke FlyEnv',
      intro:
        'Laragon cocok untuk alur Windows yang mengandalkan alat portabel, Quick App, dan profil stack yang tersimpan. Coba FlyEnv dengan salinan satu proyek Laravel jika rekan setim memakai macOS atau Linux, atau jika Anda ingin mengatur runtime CLI dan menyalakan layanan yang diperlukan per proyek.',
      steps: [
        'Di profil Laragon yang dipakai proyek, catat versi PHP dan Node.js, ekstensi PHP, server web, serta mesin dan port database. Salin folder proyek dan .env lokal, lalu ekspor database ke SQL sebelum menghentikan layanan.',
        'Di FlyEnv, instal PHP dan Node.js yang kompatibel, mesin database yang sama, dan server web. Pertahankan Apache jika aplikasi memakai .htaccess. Tetapkan PHP dan Node.js ke folder salinan di Projects, lalu buat entri Host laragon-pilot.test dengan direktori public Laravel sebagai root dan pilih versi PHP situs.',
        'Impor SQL ke database terpisah. Ubah host, port, kredensial, dan APP_URL di .env salinan. Jika konfigurasi Laravel di-cache, jalankan php artisan config:clear. Hentikan layanan lama yang memakai port yang sama atau ubah port sebelum menyalakan FlyEnv.',
        'Aktifkan HTTPS lokal dan percayai sertifikat pada komputer tersebut. Uji login, pembacaan database, dan build frontend. Masukkan server web, PHP, dan database yang sudah diuji ke Startup Groups. Tambahkan Redis jika proyek memakainya. Di macOS atau Linux, periksa kapitalisasi path, izin akses, serta ketersediaan ekstensi PHP.'
      ],
      rollback:
        'Hentikan grup FlyEnv, jalankan kembali profil Laragon semula, lalu buka URL dan folder proyek awal. Database uji yang terpisah memungkinkan Anda kembali tanpa menimpa data asli.',
      guide: 'Tetapkan PHP dan Node.js ke folder proyek',
      terms:
        'Laragon mengizinkan penggunaan nonkomersial tanpa lisensi dengan pengingat saat aplikasi dibuka, serta menyediakan lisensi komersial tahunan dan permanen. Kode sumber FlyEnv memakai BSD-3-Clause, dengan lisensi opsional tersendiri untuk fitur aplikasi.',
      license: 'Lihat detail lisensi FlyEnv'
    },
    es: {
      title: 'Prueba un proyecto Laravel de Laragon en FlyEnv',
      intro:
        'Laragon encaja en flujos de Windows que aprovechan las herramientas portátiles, Quick App y los perfiles guardados. Prueba FlyEnv con una copia de una aplicación Laravel si tu equipo usa macOS o Linux, o si quieres asignar runtimes de CLI y arrancar dependencias por proyecto.',
      steps: [
        'En el perfil de Laragon del proyecto, anota las versiones de PHP y Node.js, las extensiones de PHP, el servidor web, el motor de base de datos y su puerto. Copia el proyecto y su .env local y exporta la base a SQL antes de detener los servicios.',
        'Instala versiones compatibles de PHP y Node.js, el mismo motor de base de datos y un servidor web. Conserva Apache si la aplicación depende de .htaccess. Asigna PHP y Node.js a la copia en Projects. En Host, crea laragon-pilot.test, selecciona la versión de PHP del sitio y apunta al directorio public de Laravel.',
        'Importa el volcado en una base separada. Actualiza su host, puerto y credenciales y el valor de APP_URL en el .env de la copia. Si Laravel usa la caché de configuración, ejecuta php artisan config:clear. Si un servicio anterior ocupa el mismo puerto, detenlo o cambia el puerto antes de iniciar FlyEnv.',
        'Activa HTTPS local, marca el certificado como fiable y comprueba el acceso, la lectura de la base y la compilación del frontend. Añade el servidor web, PHP y la base que probaste a un grupo de inicio. Incluye Redis si la aplicación lo usa. En macOS o Linux, revisa mayúsculas y minúsculas en las rutas, permisos y extensiones disponibles.'
      ],
      rollback:
        'Detén el grupo de FlyEnv y vuelve a iniciar el perfil de Laragon original con su URL y carpeta. Mantén separada la base de la prueba para volver sin sobrescribir datos.',
      guide: 'Asigna PHP y Node.js a una carpeta de proyecto',
      terms:
        'Laragon permite el uso no comercial sin licencia con un aviso al iniciar y ofrece licencias comerciales anuales y perpetuas. FlyEnv publica su código con licencia BSD-3-Clause y ofrece una licencia opcional para funciones de la aplicación.',
      license: 'Consulta la licencia de FlyEnv'
    },
    vi: {
      title: 'Thử chuyển một dự án Laravel từ Laragon sang FlyEnv',
      intro:
        'Laragon phù hợp với quy trình trên Windows cần công cụ di động, Quick App và cấu hình stack đã lưu. Hãy thử FlyEnv với bản sao của một ứng dụng Laravel nếu nhóm dùng thêm macOS hoặc Linux, hoặc bạn muốn gán runtime CLI và khởi động dịch vụ theo dự án.',
      steps: [
        'Trong Profile của dự án trên Laragon, ghi lại phiên bản PHP, Node.js, tiện ích mở rộng PHP, máy chủ web, hệ quản trị cơ sở dữ liệu và cổng. Sao chép dự án cùng tệp .env cục bộ và xuất cơ sở dữ liệu ra SQL trước khi dừng dịch vụ.',
        'Trong FlyEnv, cài phiên bản PHP và Node.js tương thích, cùng hệ quản trị cơ sở dữ liệu và máy chủ web cần dùng. Giữ Apache nếu ứng dụng phụ thuộc vào .htaccess. Gán PHP và Node.js cho thư mục bản sao trong Projects. Trong Host, tạo laragon-pilot.test trỏ tới thư mục public của Laravel và chọn phiên bản PHP cho site.',
        'Nhập bản SQL vào cơ sở dữ liệu riêng. Cập nhật máy chủ, cổng, thông tin xác thực và APP_URL trong .env của bản sao. Nếu Laravel dùng bộ nhớ đệm cấu hình, chạy php artisan config:clear. Dừng dịch vụ cũ đang chiếm cùng cổng hoặc đổi cổng trước khi khởi động FlyEnv.',
        'Bật HTTPS cục bộ, đặt chứng chỉ là đáng tin cậy trên máy, rồi thử đăng nhập, đọc dữ liệu và build frontend. Đưa máy chủ web, PHP và cơ sở dữ liệu đã kiểm tra vào Startup Groups. Chỉ thêm Redis nếu dự án dùng. Trên macOS hoặc Linux, kiểm tra chữ hoa chữ thường trong đường dẫn, quyền truy cập và tiện ích mở rộng PHP.'
      ],
      rollback:
        'Dừng nhóm FlyEnv, khởi động lại Profile Laragon ban đầu và mở lại URL cùng thư mục dự án cũ. Cơ sở dữ liệu thử nghiệm riêng giúp bạn quay lại mà không ghi đè dữ liệu gốc.',
      guide: 'Gán PHP và Node.js cho thư mục dự án',
      terms:
        'Laragon cho phép dùng phi thương mại không cần giấy phép với lời nhắc khi khởi động, đồng thời bán giấy phép thương mại theo năm hoặc vĩnh viễn. FlyEnv công bố mã nguồn theo BSD-3-Clause và cung cấp giấy phép tùy chọn cho các tính năng ứng dụng.',
      license: 'Xem giấy phép FlyEnv'
    }
  }
}

export const servbayMigration: ComparisonMigration = {
  demoId: 'postgresql-pgadmin4-stack',
  guidePath: '/features/startup-groups',
  sources: [
    { label: 'ServBay · Download', href: 'https://www.servbay.com/download' },
    {
      label: 'ServBay · Package and service management',
      href: 'https://support.servbay.com/basic-usage/services-and-packages/service-and-package-management'
    },
    { label: 'ServBay · Pricing', href: 'https://www.servbay.com/pricing' },
    {
      label: 'ServBay · PostgreSQL',
      href: 'https://support.servbay.com/database-management/getting-started/postgresql-management-and-usage'
    }
  ],
  copy: {
    en: {
      title: 'Try one ServBay PHP and PostgreSQL site in FlyEnv',
      intro:
        'ServBay can run multiple PHP versions side by side and assign a version to each website. Keep that setup if you rely on ServBay’s certificate or paid database-instance features. On Linux, or if you want to try FlyEnv’s Startup Groups, use one copied site and a separate database.',
      steps: [
        'Record the ServBay site’s document root, PHP version and extensions, web server rules and PostgreSQL major version. Copy the project and .env, then export the database using pg_dump from a compatible PostgreSQL client.',
        'Install a compatible PHP version and enable the driver your app uses, such as pdo_pgsql. Install the same PostgreSQL major version for the trial. Restore the dump into a new database with its own role and update the copied .env with the new connection and APP_URL.',
        'Recreate the site as servbay-pilot.test in FlyEnv Host. Select its PHP version, reapply the required routing rules and enable local HTTPS. If ServBay occupies ports 80, 443 or 5432, stop the overlapping services or configure distinct ports and update the app settings.',
        'Open the HTTPS URL and verify a database read and a write to the trial database. Group the tested web server, PHP and PostgreSQL in Startup Groups. Reproduce extra services only when the project uses them.'
      ],
      rollback:
        'Stop the trial group and return to the original ServBay site and database. If you need to keep writes from the trial, export them separately before switching back.',
      guide: 'Save the tested services in a Startup Group',
      terms:
        'ServBay officially offers macOS and Windows downloads. Its pricing page lists Free, Pro at $59/year and Team at $399/year, with a seven-day Pro trial. FlyEnv supports macOS, Windows and Linux, publishes its source under BSD-3-Clause and offers an optional app license.',
      license: 'FlyEnv license details'
    },
    zh: {
      title: '把一个 ServBay 的 PHP 和 PostgreSQL 站点试迁到 FlyEnv',
      intro:
        'ServBay 可以并行运行多个 PHP 版本，并为每个站点指定版本。如果你依赖 ServBay 的证书或付费的多数据库实例功能，可继续使用现有环境。想在 Linux 上开发或试用 FlyEnv 启动组时，可以用一个站点副本和独立数据库试迁。',
      steps: [
        '记下 ServBay 站点的根目录、PHP 版本和扩展、Web 服务器规则，以及 PostgreSQL 主版本。复制项目和 .env，再用兼容的 PostgreSQL 客户端执行 pg_dump 导出数据库。',
        '安装兼容的 PHP，启用项目所需的驱动，例如 pdo_pgsql。试迁时保留 PostgreSQL 主版本。把备份恢复到独立的新数据库并配置自己的角色，再更新副本 .env 的数据库连接和 APP_URL。',
        '在 FlyEnv「站点」里创建 servbay-pilot.test，选择站点 PHP 版本，补齐原有路由规则并启用本地 HTTPS。如果 ServBay 占用 80、443 或 5432，先停掉冲突服务，或改用独立端口并更新应用配置。',
        '打开 HTTPS 地址，确认能从试迁数据库读取和写入。把验证过的 Web 服务器、PHP 和 PostgreSQL 加入启动组。其他服务按项目实际需要添加。'
      ],
      rollback:
        '停止试迁启动组，回到原 ServBay 站点和数据库。如果要保留试迁期间写入的数据，切回前先单独导出。',
      guide: '把验证过的服务保存到启动组',
      terms:
        'ServBay 官网提供 macOS 和 Windows 下载。定价页列出 Free、每年 59 美元的 Pro 和每年 399 美元的 Team，Pro 可试用 7 天。FlyEnv 支持 macOS、Windows 和 Linux，源代码采用 BSD-3-Clause 许可证，应用另有可选授权。',
      license: '查看 FlyEnv 授权详情'
    },
    id: {
      title: 'Uji satu situs PHP dan PostgreSQL dari ServBay di FlyEnv',
      intro:
        'ServBay dapat menjalankan beberapa versi PHP sekaligus dan memilih versi untuk tiap situs. Pertahankan lingkungan tersebut jika Anda mengandalkan fitur sertifikat atau beberapa instans database berbayar. Di Linux, atau untuk mencoba Startup Groups FlyEnv, gunakan salinan satu situs dan database terpisah.',
      steps: [
        'Catat document root, versi dan ekstensi PHP, aturan server web, serta versi mayor PostgreSQL. Salin proyek dan .env, lalu ekspor database dengan pg_dump dari klien PostgreSQL yang kompatibel.',
        'Instal PHP yang kompatibel dan aktifkan driver aplikasi, misalnya pdo_pgsql. Untuk uji coba, gunakan versi mayor PostgreSQL yang sama. Pulihkan dump ke database baru dengan role tersendiri, lalu ubah koneksi dan APP_URL di .env salinan.',
        'Buat ulang situs sebagai servbay-pilot.test di Host FlyEnv. Pilih versi PHP, terapkan kembali aturan routing yang diperlukan, dan aktifkan HTTPS lokal. Jika ServBay memakai port 80, 443, atau 5432, hentikan layanan yang bentrok atau gunakan port berbeda dan sesuaikan pengaturan aplikasi.',
        'Buka URL HTTPS dan uji baca serta tulis pada database uji. Masukkan server web, PHP, dan PostgreSQL yang telah diuji ke Startup Groups. Tambahkan layanan lain hanya jika dipakai proyek.'
      ],
      rollback:
        'Hentikan grup uji dan kembali ke situs serta database ServBay semula. Jika data baru dari uji coba perlu disimpan, ekspor secara terpisah sebelum beralih.',
      guide: 'Simpan layanan yang sudah diuji ke Startup Group',
      terms:
        'ServBay menyediakan unduhan resmi untuk macOS dan Windows. Halaman harga mencantumkan Free, Pro $59/tahun, dan Team $399/tahun, dengan uji coba Pro selama tujuh hari. FlyEnv mendukung macOS, Windows, dan Linux, memakai lisensi kode BSD-3-Clause, dan menawarkan lisensi aplikasi opsional.',
      license: 'Lihat detail lisensi FlyEnv'
    },
    es: {
      title: 'Prueba un sitio PHP y PostgreSQL de ServBay en FlyEnv',
      intro:
        'ServBay permite ejecutar varias versiones de PHP y asignar una a cada sitio. Si dependes de sus certificados o de las instancias de base de datos del plan de pago, puedes conservar ese entorno. Si trabajas en Linux o quieres probar los grupos de inicio de FlyEnv, usa una copia del sitio con una base separada.',
      steps: [
        'Anota la raíz del sitio de ServBay, la versión y extensiones de PHP, las reglas del servidor web y la versión principal de PostgreSQL. Copia el proyecto y su .env y exporta la base con pg_dump de un cliente PostgreSQL compatible.',
        'Instala una versión compatible de PHP y activa el controlador que use la aplicación, por ejemplo pdo_pgsql. Usa la misma versión principal de PostgreSQL para la prueba. Restaura el volcado en una base nueva con un rol propio y ajusta la conexión y APP_URL en el .env de la copia.',
        'Recrea el sitio como servbay-pilot.test en el módulo Host de FlyEnv. Selecciona la versión de PHP, añade las reglas de enrutamiento necesarias y activa HTTPS local. Si ServBay ocupa los puertos 80, 443 o 5432, detén los servicios que coincidan o asigna puertos distintos y actualiza la aplicación.',
        'Abre la URL HTTPS y comprueba una lectura y una escritura en la base de prueba. Guarda el servidor web, PHP y PostgreSQL en un grupo de inicio. Añade otros servicios solo si el proyecto los usa.'
      ],
      rollback:
        'Detén el grupo de prueba y vuelve al sitio y la base originales de ServBay. Si necesitas conservar los cambios de datos hechos durante la prueba, expórtalos por separado antes de volver.',
      guide: 'Guarda los servicios probados en un grupo de inicio',
      terms:
        'ServBay publica descargas para macOS y Windows. Su página de precios incluye Free, Pro por $59 al año y Team por $399 al año, con siete días de prueba para Pro. FlyEnv es compatible con macOS, Windows y Linux, publica su código bajo BSD-3-Clause y ofrece una licencia opcional para la aplicación.',
      license: 'Consulta la licencia de FlyEnv'
    },
    vi: {
      title: 'Thử một site PHP và PostgreSQL từ ServBay trong FlyEnv',
      intro:
        'ServBay có thể chạy nhiều phiên bản PHP song song và gán từng phiên bản cho từng site. Hãy giữ môi trường đó nếu bạn phụ thuộc vào tính năng chứng chỉ hoặc chạy nhiều instance cơ sở dữ liệu trong gói trả phí. Nếu dùng Linux hoặc muốn thử Startup Groups của FlyEnv, hãy sao chép một site và dùng cơ sở dữ liệu riêng.',
      steps: [
        'Ghi lại thư mục gốc của site ServBay, phiên bản và tiện ích mở rộng PHP, quy tắc máy chủ web cùng phiên bản chính của PostgreSQL. Sao chép dự án và .env, rồi xuất dữ liệu bằng pg_dump từ máy khách PostgreSQL tương thích.',
        'Cài PHP tương thích và bật trình điều khiển của ứng dụng, ví dụ pdo_pgsql. Giữ nguyên phiên bản chính của PostgreSQL cho lần thử. Khôi phục bản sao lưu vào cơ sở dữ liệu mới với role riêng, rồi sửa kết nối và APP_URL trong .env của bản sao.',
        'Tạo lại site servbay-pilot.test trong Host của FlyEnv. Chọn phiên bản PHP, áp dụng quy tắc định tuyến cần thiết và bật HTTPS cục bộ. Nếu ServBay chiếm cổng 80, 443 hoặc 5432, dừng dịch vụ bị trùng hoặc dùng cổng riêng và cập nhật cấu hình ứng dụng.',
        'Mở URL HTTPS và thử đọc, ghi trên cơ sở dữ liệu thử nghiệm. Gom máy chủ web, PHP và PostgreSQL đã kiểm tra vào Startup Groups. Chỉ thêm các dịch vụ khác nếu dự án thực sự dùng.'
      ],
      rollback:
        'Dừng nhóm thử nghiệm và quay lại site cùng cơ sở dữ liệu ServBay ban đầu. Nếu cần giữ dữ liệu mới tạo khi thử, hãy xuất riêng trước khi chuyển lại.',
      guide: 'Lưu các dịch vụ đã kiểm tra vào Startup Group',
      terms:
        'ServBay cung cấp bản tải chính thức cho macOS và Windows. Trang giá liệt kê Free, Pro 59 USD/năm và Team 399 USD/năm, với bảy ngày dùng thử Pro. FlyEnv hỗ trợ macOS, Windows và Linux, công bố mã nguồn theo BSD-3-Clause và cung cấp giấy phép ứng dụng tùy chọn.',
      license: 'Xem giấy phép FlyEnv'
    }
  }
}
