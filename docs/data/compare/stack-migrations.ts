import type { ComparisonMigration } from './migrations'

export const herdMigration: ComparisonMigration = {
  demoId: 'multiple-php-versions',
  guidePath: '/solutions/laravel',
  sources: [
    { label: 'Laravel Herd · Herd 2.0', href: 'https://herd.laravel.com/blog/introducing-herd-2' },
    { label: 'Laravel Herd · Project settings and services', href: 'https://herd.laravel.com/' },
    { label: 'Laravel Herd · Windows and plans', href: 'https://herd.laravel.com/windows' }
  ],
  copy: {
    en: {
      title: 'Try a Herd Laravel app with MySQL and Redis in FlyEnv',
      intro:
        'Herd 2.0 is available on macOS and Windows. Its per-site PHP settings, herd.yml, Herd Studio and Laravel Cloud integration make it a strong fit for Laravel teams. Try FlyEnv with one project if you need Linux or manage Laravel alongside non-PHP projects.',
      steps: [
        'Copy the project and its .env. Use herd.yml and Herd’s site settings to record PHP, Node.js, extensions and service versions. Export MySQL as SQL. For this trial, use the copy for web and cache checks and leave queue workers stopped.',
        'Install compatible PHP and Node.js, Nginx, MySQL and Redis in FlyEnv. Bind the CLI runtimes to the project folder and set its site PHP in Host. Point herd-pilot.test to Laravel’s public directory, enable HTTPS and stop the original services if they use the same ports.',
        'Import the SQL into an empty trial database, set the database and Redis connections and APP_URL in the copied .env, and clear Laravel’s config cache if needed. Verify a page that reads the database and a Redis cache operation. Save Nginx, PHP, MySQL and Redis in a Startup Group.'
      ],
      rollback:
        'Stop the trial group and reopen the existing Herd site with its original .env and services.',
      guide: 'Set up a Laravel project in FlyEnv'
    },
    zh: {
      title: '用 FlyEnv 试跑 Herd 上的 Laravel、MySQL 和 Redis 项目',
      intro:
        'Herd 2.0 支持 macOS 和 Windows。按站点配置 PHP、herd.yml、Herd Studio 和 Laravel Cloud 集成适合以 Laravel 为主的团队。如果需要 Linux，或者同时管理 Laravel 和其他语言项目，可以先试跑一个项目。',
      steps: [
        '复制项目和 .env。参考 herd.yml 和 Herd 的站点设置，记下 PHP、Node.js、扩展和服务版本。把 MySQL 导出为 SQL。本次先验证网页和缓存，暂时不要启动队列进程。',
        '在 FlyEnv 安装兼容的 PHP、Node.js、Nginx、MySQL 和 Redis，绑定项目的命令行运行时，再在「站点」选择网页使用的 PHP。将 herd-pilot.test 指向 Laravel 的 public 目录并启用 HTTPS。旧服务占用相同端口时先停止。',
        '把 SQL 导入空的试迁数据库，在副本 .env 中设置数据库和 Redis 连接及 APP_URL，必要时清理 Laravel 配置缓存。验证能读取数据库的页面和一次 Redis 缓存操作，再把 Nginx、PHP、MySQL、Redis 加入启动组。'
      ],
      rollback: '停止试迁启动组，使用原有 .env 和服务重新打开 Herd 站点。',
      guide: '在 FlyEnv 中设置 Laravel 项目'
    },
    id: {
      title: 'Uji aplikasi Laravel, MySQL, dan Redis dari Herd di FlyEnv',
      intro:
        'Herd 2.0 tersedia di macOS dan Windows. Pengaturan PHP per situs, herd.yml, Herd Studio, dan integrasi Laravel Cloud cocok untuk tim Laravel. Coba FlyEnv dengan satu proyek jika tim perlu Linux atau menangani proyek Laravel bersama proyek non-PHP.',
      steps: [
        'Salin proyek dan .env. Dari herd.yml dan pengaturan situs, catat versi PHP, Node.js, ekstensi, dan layanan. Ekspor MySQL ke SQL. Untuk uji ini, periksa halaman web dan cache dengan worker antrean tetap berhenti.',
        'Instal PHP dan Node.js yang kompatibel, Nginx, MySQL, serta Redis di FlyEnv. Tetapkan runtime CLI pada folder proyek dan pilih PHP situs di Host. Arahkan herd-pilot.test ke direktori public Laravel, aktifkan HTTPS, dan hentikan layanan lama jika portnya sama.',
        'Impor SQL ke database uji yang kosong, lalu atur koneksi database dan Redis serta APP_URL di .env salinan. Bersihkan cache konfigurasi Laravel jika perlu. Uji halaman yang membaca database dan operasi cache Redis. Simpan Nginx, PHP, MySQL, dan Redis di Startup Group.'
      ],
      rollback: 'Hentikan grup uji dan buka lagi situs Herd memakai .env dan layanan asli.',
      guide: 'Siapkan proyek Laravel di FlyEnv'
    },
    es: {
      title: 'Prueba una app Laravel de Herd con MySQL y Redis en FlyEnv',
      intro:
        'Herd 2.0 está disponible en macOS y Windows. Sus ajustes de PHP por sitio, herd.yml, Herd Studio y la integración con Laravel Cloud encajan en equipos centrados en Laravel. Prueba un proyecto en FlyEnv si necesitas Linux o gestionas proyectos Laravel junto a otros sin PHP.',
      steps: [
        'Copia el proyecto y su .env. Consulta herd.yml y los ajustes de Herd para anotar las versiones de PHP, Node.js, las extensiones y los servicios. Exporta MySQL a SQL. Durante la prueba, deja detenidos los procesos de la cola y comprueba la web y la caché.',
        'Instala PHP y Node.js compatibles, Nginx, MySQL y Redis. Asigna los runtimes de CLI a la carpeta y elige el PHP del sitio en Host. Apunta herd-pilot.test al directorio public de Laravel, activa HTTPS y detén los servicios originales si usan los mismos puertos.',
        'Importa el SQL en una base de prueba vacía, actualiza las conexiones de la base y Redis y el valor de APP_URL en el .env de la copia, y limpia la caché de configuración si hace falta. Comprueba una lectura de la base y una operación de caché Redis. Guarda Nginx, PHP, MySQL y Redis en un grupo de inicio.'
      ],
      rollback:
        'Detén el grupo de prueba y abre el sitio de Herd con su .env y servicios originales.',
      guide: 'Configura un proyecto Laravel en FlyEnv'
    },
    vi: {
      title: 'Thử ứng dụng Laravel từ Herd với MySQL và Redis trong FlyEnv',
      intro:
        'Herd 2.0 hỗ trợ macOS và Windows. Phiên bản PHP theo site, herd.yml, Herd Studio và tích hợp Laravel Cloud phù hợp với nhóm làm Laravel. Hãy thử một dự án trên FlyEnv nếu nhóm cần Linux hoặc xử lý cả dự án Laravel lẫn dự án ngoài PHP.',
      steps: [
        'Sao chép dự án và .env. Dùng herd.yml và cài đặt site Herd để ghi lại phiên bản PHP, Node.js, tiện ích mở rộng và các dịch vụ. Xuất MySQL ra SQL. Trong lần thử này, kiểm tra web và cache, đồng thời để các tiến trình hàng đợi ở trạng thái dừng.',
        'Cài PHP và Node.js tương thích, Nginx, MySQL và Redis. Gán runtime CLI cho thư mục dự án và chọn phiên bản PHP của site trong Host. Trỏ herd-pilot.test tới thư mục public của Laravel, bật HTTPS và dừng các dịch vụ cũ nếu trùng cổng.',
        'Nhập SQL vào cơ sở dữ liệu thử trống. Cập nhật kết nối cơ sở dữ liệu, Redis và APP_URL trong .env của bản sao rồi xóa cache cấu hình Laravel nếu cần. Kiểm tra một trang đọc cơ sở dữ liệu và một thao tác cache Redis. Lưu Nginx, PHP, MySQL và Redis vào Startup Group.'
      ],
      rollback: 'Dừng nhóm thử và mở lại site Herd với .env cùng các dịch vụ ban đầu.',
      guide: 'Thiết lập dự án Laravel trong FlyEnv'
    }
  }
}

export const xamppMigration: ComparisonMigration = {
  demoId: 'multiple-php-versions',
  guidePath: '/guide/host',
  sources: [
    {
      label: 'Apache Friends · Downloads and bundled components',
      href: 'https://www.apachefriends.org/download.html'
    },
    {
      label: 'Apache Friends · Windows FAQ',
      href: 'https://www.apachefriends.org/faq_windows.html'
    },
    {
      label: 'FlyEnv · PHP service controls',
      href: 'https://github.com/xpf0000/FlyEnv/releases/tag/v4.21.1'
    }
  ],
  copy: {
    en: {
      title: 'Move one Apache and MariaDB site from XAMPP',
      intro:
        'XAMPP ships Apache, PHP and MariaDB together. FlyEnv lets you install and select a PHP version per site and choose Apache or Nginx. Start with Apache if the app uses .htaccess.',
      steps: [
        'From XAMPP, copy the site from htdocs and save its virtual host, rewrite rules, PHP extensions and database connection settings. Export the database as SQL using phpMyAdmin. Check its engine and major version before installing MariaDB in FlyEnv.',
        'Install compatible PHP and extensions, Apache and MariaDB in FlyEnv. Assign the copied document root and PHP version to xampp-pilot.test in Host. For web requests, FlyEnv’s PHP-FPM module starts FastCGI php-cgi.exe workers on Windows and php-fpm on macOS and Linux. Compare the site settings and php.ini separately from CLI PHP.',
        'Import into a fresh database and update the copy’s connection details. Before the first start, stop XAMPP services sharing ports such as 80, 443 or 3306, or configure distinct ports. Enable HTTPS, trust the local CA and open the site to verify rewrites and a database-backed page.'
      ],
      rollback:
        'Stop FlyEnv’s web, PHP and database services and restart XAMPP. Open the original project and URL with the original database.',
      guide: 'Set up the local host, PHP version and HTTPS'
    },
    zh: {
      title: '从 XAMPP 试迁一个 Apache 和 MariaDB 站点',
      intro:
        'XAMPP 把 Apache、PHP 和 MariaDB 打包在一起。FlyEnv 可按站点选择已安装的 PHP 版本，并提供 Apache 与 Nginx。项目用了 .htaccess 时，可以先保留 Apache。',
      steps: [
        '从 XAMPP 的 htdocs 复制站点，保存虚拟主机、重写规则、PHP 扩展和数据库连接设置。用 phpMyAdmin 导出 SQL，确认数据库引擎及主版本后再在 FlyEnv 安装 MariaDB。',
        '在 FlyEnv 安装兼容的 PHP 和扩展，以及 Apache 和 MariaDB。在「站点」创建 xampp-pilot.test，指定副本根目录和 PHP 版本。FlyEnv 的 PHP-FPM 模块在 Windows 上用 php-cgi.exe FastCGI 工作进程处理网页请求，在 macOS 和 Linux 上用 php-fpm。站点配置和 php.ini 应与命令行 PHP 分开核对。',
        '把 SQL 导入新数据库并更新副本连接。首次启动前，先停止 XAMPP 中占用相同端口的服务，例如 80、443 或 3306，也可以为试迁环境配置不同端口。启用 HTTPS，信任本地 CA，再访问站点验证重写规则和数据库页面。'
      ],
      rollback:
        '停止 FlyEnv 的 Web、PHP 和数据库服务，再启动 XAMPP，使用原数据库打开原项目和 URL。',
      guide: '配置站点、PHP 版本和 HTTPS'
    },
    id: {
      title: 'Pindahkan satu situs Apache dan MariaDB dari XAMPP',
      intro:
        'XAMPP membundel Apache, PHP, dan MariaDB. Di FlyEnv, Anda dapat memilih versi PHP terpasang untuk setiap situs serta memakai Apache atau Nginx. Mulai dengan Apache jika aplikasi memakai .htaccess.',
      steps: [
        'Salin situs XAMPP dari htdocs. Simpan pengaturan virtual host, aturan rewrite, ekstensi PHP, dan koneksi database. Ekspor database ke SQL dengan phpMyAdmin, lalu periksa mesin serta versi mayornya sebelum memasang MariaDB di FlyEnv.',
        'Instal PHP dan ekstensi yang kompatibel, Apache, dan MariaDB. Pilih document root salinan dan versi PHP untuk xampp-pilot.test di Host. Untuk permintaan web, modul PHP-FPM FlyEnv menjalankan worker FastCGI php-cgi.exe di Windows dan php-fpm di macOS serta Linux. Periksa pengaturan situs dan php.ini secara terpisah dari PHP CLI.',
        'Impor SQL ke database baru dan sesuaikan koneksi salinan. Sebelum mulai, hentikan layanan XAMPP yang memakai port sama, seperti 80, 443, atau 3306, atau pilih port lain. Aktifkan HTTPS, percayai CA lokal, lalu uji aturan rewrite dan halaman yang mengakses database.'
      ],
      rollback:
        'Hentikan layanan web, PHP, dan database FlyEnv, lalu mulai kembali XAMPP. Buka proyek dan URL semula dengan database asli.',
      guide: 'Siapkan host lokal, versi PHP, dan HTTPS'
    },
    es: {
      title: 'Migra un sitio Apache y MariaDB de XAMPP',
      intro:
        'XAMPP distribuye Apache, PHP y MariaDB juntos. En FlyEnv puedes instalar y elegir una versión de PHP por sitio, y usar Apache o Nginx. Empieza con Apache si la aplicación usa .htaccess.',
      steps: [
        'Copia el sitio de XAMPP desde htdocs y guarda el host virtual, las reglas de reescritura, las extensiones de PHP y la conexión a la base. Exporta la base a SQL con phpMyAdmin y comprueba su motor y versión principal antes de instalar MariaDB en FlyEnv.',
        'Instala PHP y extensiones compatibles, Apache y MariaDB. En Host, asigna la raíz de la copia y la versión de PHP a xampp-pilot.test. Para las peticiones web, el módulo PHP-FPM de FlyEnv ejecuta procesos FastCGI php-cgi.exe en Windows y php-fpm en macOS y Linux. Revisa los ajustes del sitio y php.ini por separado del PHP de CLI.',
        'Importa el SQL en una base nueva y ajusta la conexión de la copia. Antes del primer arranque, detén los servicios de XAMPP que compartan puertos como 80, 443 o 3306, o usa puertos distintos. Activa HTTPS, añade la CA local a las de confianza y comprueba las reglas de reescritura y una página que use la base.'
      ],
      rollback:
        'Detén el servidor web, PHP y la base de FlyEnv y reinicia XAMPP. Abre la URL y el proyecto originales con la base inicial.',
      guide: 'Configura el host local, la versión de PHP y HTTPS'
    },
    vi: {
      title: 'Chuyển thử một site Apache và MariaDB từ XAMPP',
      intro:
        'XAMPP đóng gói Apache, PHP và MariaDB. FlyEnv cho phép cài và chọn phiên bản PHP theo site, đồng thời hỗ trợ Apache hoặc Nginx. Hãy bắt đầu với Apache nếu ứng dụng dùng .htaccess.',
      steps: [
        'Sao chép site XAMPP từ htdocs và lưu cấu hình máy chủ ảo, quy tắc rewrite, tiện ích mở rộng PHP và kết nối cơ sở dữ liệu. Xuất SQL bằng phpMyAdmin, rồi kiểm tra hệ quản trị và phiên bản chính trước khi cài MariaDB trong FlyEnv.',
        'Cài PHP và tiện ích mở rộng tương thích, Apache và MariaDB. Trong Host, gán thư mục gốc của bản sao và phiên bản PHP cho xampp-pilot.test. Để xử lý yêu cầu web, mô-đun PHP-FPM của FlyEnv chạy worker FastCGI php-cgi.exe trên Windows và php-fpm trên macOS và Linux. Kiểm tra cài đặt site cùng php.ini riêng với PHP CLI.',
        'Nhập SQL vào cơ sở dữ liệu mới rồi sửa kết nối của bản sao. Trước lần khởi động đầu tiên, dừng dịch vụ XAMPP đang dùng cùng cổng, ví dụ 80, 443 hoặc 3306, hoặc chọn cổng khác. Bật HTTPS, tin cậy CA cục bộ rồi kiểm tra rewrite và một trang có đọc dữ liệu.'
      ],
      rollback:
        'Dừng máy chủ web, PHP và cơ sở dữ liệu của FlyEnv rồi khởi động lại XAMPP. Mở dự án và URL cũ với cơ sở dữ liệu ban đầu.',
      guide: 'Thiết lập host cục bộ, phiên bản PHP và HTTPS'
    }
  }
}

export const mampMigration: ComparisonMigration = {
  demoId: 'caddy-php-mysql',
  guidePath: '/guide/host',
  sources: [
    { label: 'MAMP · macOS editions', href: 'https://www.mamp.info/en/mac/' },
    { label: 'MAMP · Windows editions', href: 'https://www.mamp.info/en/windows/' },
    {
      label: 'MAMP PRO · Sites and SSL',
      href: 'https://documentation.mamp.info/en/MAMP-PRO-Mac/Sites/Site/'
    },
    {
      label: 'MAMP PRO · Windows PHP modes',
      href: 'https://documentation.mamp.info/en/MAMP-PRO-Windows/Languages/PHP/'
    }
  ],
  copy: {
    en: {
      title: 'Try a MAMP WordPress site in FlyEnv',
      intro:
        'MAMP is the free Apache or Nginx, PHP and MySQL bundle for macOS and Windows. Paid MAMP PRO adds individual hosts, per-site PHP and SSL. On Windows, per-host PHP requires CGI mode. Keep PRO if its WordPress and host tools already cover your workflow.',
      steps: [
        'Copy the WordPress files and wp-config.php. Export MySQL as SQL and note PHP extensions, the document root and the database port. Use a PHP and MySQL combination compatible with the original site.',
        'Import SQL into a separate local database and update the copy’s wp-config.php. Create a FlyEnv host for mamp-pilot.test, assign PHP and enable HTTPS. Preserve Apache if your rewrites use .htaccess. Stop services sharing the same ports or assign different ones.',
        'Adjust the cloned WordPress site URL and home URL, using WP-CLI search-replace for serialized data when needed. Verify login, permalinks and media before adopting the new setup.'
      ],
      rollback:
        'Stop the FlyEnv services and reopen the original WordPress site in MAMP with its original database and URL.',
      guide: 'Configure a FlyEnv site and HTTPS',
      terms:
        'MAMP is free to download. MAMP PRO is commercial. Check the vendor’s macOS and Windows pages for the terms of your edition.'
    },
    zh: {
      title: '用 FlyEnv 试迁一个 MAMP WordPress 站点',
      intro:
        'MAMP 在 macOS 和 Windows 上免费提供 Apache 或 Nginx、PHP 和 MySQL。付费的 MAMP PRO 可单独管理站点、指定 PHP 并配置 SSL。Windows 的按站点 PHP 需要使用 CGI 模式。如果 PRO 的 WordPress 和站点工具已满足需要，可以继续使用。',
      steps: [
        '复制 WordPress 文件和 wp-config.php，导出 MySQL 的 SQL 备份，并记下 PHP 扩展、站点根目录和数据库端口。优先使用与原站点兼容的 PHP 和 MySQL。',
        '把 SQL 导入独立数据库，更新副本的 wp-config.php。在 FlyEnv 创建 mamp-pilot.test，指定 PHP 并启用 HTTPS。使用 .htaccess 重写时保留 Apache。停止端口冲突的服务，或改用不同端口。',
        '修改副本的 WordPress 站点和首页地址。涉及序列化数据时可使用 WP-CLI 的 search-replace。验证登录、固定链接和媒体文件。'
      ],
      rollback: '停止 FlyEnv 服务，用原数据库和原 URL 在 MAMP 打开原站点。',
      guide: '在 FlyEnv 配置站点和 HTTPS',
      terms: 'MAMP 可免费下载。MAMP PRO 是商业产品，授权条件以对应平台的官方页面为准。'
    },
    id: {
      title: 'Uji situs WordPress dari MAMP di FlyEnv',
      intro:
        'MAMP adalah bundel Apache atau Nginx, PHP, dan MySQL gratis untuk macOS dan Windows. MAMP PRO berbayar menambah host terpisah, PHP per situs, dan SSL. Di Windows, PHP per host memerlukan mode CGI. Pertahankan PRO jika alat WordPress dan host-nya sudah sesuai.',
      steps: [
        'Salin berkas WordPress dan wp-config.php. Ekspor MySQL ke SQL, lalu catat ekstensi PHP, document root dan port database. Gunakan versi PHP dan MySQL yang kompatibel dengan situs asli.',
        'Impor SQL ke database terpisah dan ubah wp-config.php salinan. Buat host FlyEnv mamp-pilot.test, pilih PHP, lalu aktifkan HTTPS. Pertahankan Apache jika memakai .htaccess. Hentikan layanan dengan port yang sama atau pilih port berbeda.',
        'Sesuaikan URL situs dan halaman utama WordPress salinan. Gunakan search-replace di WP-CLI jika perlu mengubah data terserialisasi. Uji login, permalink, dan media.'
      ],
      rollback:
        'Hentikan layanan FlyEnv dan buka situs asli di MAMP dengan database serta URL semula.',
      guide: 'Siapkan situs dan HTTPS di FlyEnv',
      terms:
        'MAMP dapat diunduh gratis. MAMP PRO bersifat komersial. Cek ketentuan edisi Anda pada halaman macOS atau Windows.'
    },
    es: {
      title: 'Prueba un sitio WordPress de MAMP en FlyEnv',
      intro:
        'MAMP es el paquete gratuito de Apache o Nginx, PHP y MySQL para macOS y Windows. MAMP PRO, de pago, añade hosts individuales, PHP por sitio y SSL. En Windows, el PHP por host requiere modo CGI. Conserva PRO si sus herramientas para WordPress y hosts cubren tu flujo.',
      steps: [
        'Copia los archivos de WordPress y wp-config.php. Exporta MySQL a SQL y anota las extensiones de PHP, la raíz del sitio y el puerto de la base. Elige versiones compatibles con el sitio original.',
        'Importa el SQL en una base separada y actualiza el wp-config.php de la copia. Crea mamp-pilot.test en FlyEnv, asigna PHP y activa HTTPS. Conserva Apache si usas .htaccess. Detén los servicios que compartan puertos o asigna puertos distintos.',
        'Ajusta las URL de inicio y del sitio clonado. Para datos serializados, usa search-replace de WP-CLI si hace falta. Comprueba el acceso, los enlaces permanentes y los archivos multimedia.'
      ],
      rollback:
        'Detén los servicios de FlyEnv y abre el sitio original en MAMP con su URL y base de datos.',
      guide: 'Configura un sitio en FlyEnv y activa HTTPS',
      terms:
        'MAMP se descarga gratis. MAMP PRO es comercial. Consulta las condiciones de tu edición en la página de macOS o Windows.'
    },
    vi: {
      title: 'Thử một site WordPress từ MAMP trong FlyEnv',
      intro:
        'MAMP là bộ Apache hoặc Nginx, PHP và MySQL miễn phí cho macOS và Windows. MAMP PRO trả phí hỗ trợ host riêng, PHP theo site và SSL. Trên Windows, PHP theo host cần chế độ CGI. Hãy giữ PRO nếu công cụ WordPress và quản lý host đã đáp ứng nhu cầu.',
      steps: [
        'Sao chép tệp WordPress và wp-config.php. Xuất MySQL ra SQL, rồi ghi lại tiện ích mở rộng PHP, thư mục gốc và cổng cơ sở dữ liệu. Chọn phiên bản PHP và MySQL tương thích.',
        'Nhập SQL vào cơ sở dữ liệu riêng rồi sửa wp-config.php của bản sao. Tạo mamp-pilot.test trong FlyEnv, chọn PHP và bật HTTPS. Giữ Apache nếu dùng .htaccess. Dừng dịch vụ trùng cổng hoặc chọn cổng khác.',
        'Điều chỉnh URL site và URL trang chủ của bản sao WordPress. Với dữ liệu được tuần tự hóa, có thể dùng search-replace của WP-CLI. Kiểm tra đăng nhập, permalink và tệp media.'
      ],
      rollback:
        'Dừng dịch vụ FlyEnv và mở lại site gốc trong MAMP với cơ sở dữ liệu và URL ban đầu.',
      guide: 'Cấu hình site và HTTPS trong FlyEnv',
      terms:
        'MAMP cho tải miễn phí. MAMP PRO là sản phẩm thương mại. Xem điều khoản phiên bản trên trang macOS hoặc Windows của nhà phát hành.'
    }
  }
}

export const dockerMigration: ComparisonMigration = {
  demoId: 'native-node-python-go-services',
  guidePath: '/guide/deploy-nodejs-python-go-without-docker',
  sources: [
    {
      label: 'Docker · Why use Compose?',
      href: 'https://docs.docker.com/compose/intro/features-uses/'
    },
    {
      label: 'Docker · Desktop on Linux',
      href: 'https://docs.docker.com/desktop/setup/install/linux/'
    },
    {
      label: 'Docker · Desktop licensing',
      href: 'https://docs.docker.com/subscription-billing/desktop-license/'
    }
  ],
  copy: {
    en: {
      title: 'Try Node.js and PostgreSQL as native services',
      intro:
        'Keep Compose for shared images, isolated service networking and CI that depends on containers. Try a native setup for a Node.js app that only needs PostgreSQL. You install compatible host binaries and start the services you use. Docker stores image layers and can also use a VM, as Docker Desktop on Linux does. Disk use, memory and startup time depend on the installed stack and what is running.',
      steps: [
        'Read the Node.js and PostgreSQL versions, ports, environment variables and volume settings from compose.yaml. Copy the app and export the dev database with pg_dump. Keep the Compose file and its volumes.',
        'Install compatible Node.js and PostgreSQL versions in FlyEnv, bind Node.js to the folder and restore the dump into a separate database. In the copied environment, point the app to the PostgreSQL host and port, using 127.0.0.1 if both run locally. Stop any container publishing the same host port, or choose a different port.',
        'Start PostgreSQL and run the app’s usual install and dev commands. Verify the same database-backed request through its local URL. Run the Compose setup for tests that depend on container images or infrastructure.'
      ],
      rollback:
        'Stop the FlyEnv services and restart your Compose project with its original environment and volumes.',
      guide: 'Set up Node.js and native services without Docker'
    },
    zh: {
      title: '用宿主机原生服务试跑 Node.js 和 PostgreSQL',
      intro:
        '团队共享镜像、依赖独立的服务网络，或 CI 使用容器时，继续保留 Compose。只依赖 PostgreSQL 的 Node.js 应用可以试用原生环境，安装兼容的宿主机二进制并按需启动。Docker 会存储镜像层，Docker Desktop 在 Linux 等环境中也会使用虚拟机。磁盘、内存和启动时间取决于安装的组件和实际运行的服务。',
      steps: [
        '从 compose.yaml 核对 Node.js 和 PostgreSQL 版本、端口、环境变量和卷配置。复制应用，用 pg_dump 导出开发库，保留原 Compose 文件和卷。',
        '在 FlyEnv 安装兼容的 Node.js 和 PostgreSQL，绑定项目的 Node.js 版本，把备份恢复到独立库。在副本配置中填写数据库地址和端口，应用和数据库都在本机时可用 127.0.0.1。停止映射到相同宿主端口的容器，或改用不同端口。',
        '启动 PostgreSQL，运行应用现有的安装和开发命令。通过本地地址验证同一个依赖数据库的请求。依赖镜像或容器基础设施的测试继续使用 Compose。'
      ],
      rollback: '停止 FlyEnv 服务，使用原环境配置和卷重新启动 Compose 项目。',
      guide: '不用 Docker 配置 Node.js 和原生服务'
    },
    id: {
      title: 'Uji Node.js dan PostgreSQL sebagai layanan native',
      intro:
        'Pertahankan Compose jika tim berbagi image, perlu jaringan layanan yang terisolasi, atau menjalankan CI di container. Untuk aplikasi Node.js yang hanya membutuhkan PostgreSQL, coba biner host yang kompatibel dan nyalakan layanan seperlunya. Docker menyimpan layer image dan dapat memakai VM, seperti Docker Desktop di Linux. Kapasitas disk, memori, dan waktu mulai bergantung pada stack yang terpasang dan aktif.',
      steps: [
        'Baca versi Node.js dan PostgreSQL, port, variabel lingkungan, dan volume di compose.yaml. Salin aplikasi dan ekspor database pengembangan dengan pg_dump. Simpan file serta volume Compose asli.',
        'Instal Node.js dan PostgreSQL yang kompatibel. Tetapkan Node.js ke folder proyek dan pulihkan dump ke database terpisah. Atur host dan port database di konfigurasi salinan. Pakai 127.0.0.1 jika keduanya berjalan secara lokal. Hentikan container dengan port host yang sama atau gunakan port berbeda.',
        'Jalankan PostgreSQL serta perintah instalasi dan pengembangan aplikasi. Uji permintaan yang menggunakan database lewat URL lokal. Gunakan Compose untuk pengujian yang bergantung pada image atau infrastruktur container.'
      ],
      rollback:
        'Hentikan layanan FlyEnv dan jalankan proyek Compose dengan konfigurasi serta volume aslinya.',
      guide: 'Siapkan Node.js dan layanan native tanpa Docker'
    },
    es: {
      title: 'Prueba Node.js y PostgreSQL como servicios nativos',
      intro:
        'Conserva Compose si compartes imágenes, necesitas redes de servicios aisladas o usas contenedores en CI. Para una app Node.js que solo necesita PostgreSQL, prueba binarios compatibles en el equipo e inicia los servicios que uses. Docker almacena capas de imagen y puede usar una máquina virtual, como Docker Desktop en Linux. El espacio, la memoria y el arranque dependen del stack instalado y de los servicios activos.',
      steps: [
        'Revisa en compose.yaml las versiones de Node.js y PostgreSQL, los puertos, las variables y los volúmenes. Copia la aplicación y exporta la base de desarrollo con pg_dump. Conserva el archivo Compose y sus volúmenes.',
        'Instala Node.js y PostgreSQL compatibles, asigna Node.js a la carpeta y restaura el volcado en una base separada. Configura el host y el puerto de la base en la copia. Usa 127.0.0.1 si ambos procesos se ejecutan en el equipo. Detén los contenedores que compartan puerto o usa otro puerto.',
        'Inicia PostgreSQL y ejecuta los comandos habituales de instalación y desarrollo. Comprueba en la URL local la misma petición que usa la base. Usa Compose para las pruebas que dependan de las imágenes o de la infraestructura de contenedores.'
      ],
      rollback:
        'Detén los servicios de FlyEnv y vuelve a ejecutar Compose con la configuración y los volúmenes originales.',
      guide: 'Configura Node.js y servicios nativos sin Docker'
    },
    vi: {
      title: 'Thử chạy Node.js và PostgreSQL trực tiếp trên máy',
      intro:
        'Giữ Compose khi nhóm cần image dùng chung, mạng dịch vụ tách biệt hoặc CI dùng container. Với ứng dụng Node.js chỉ cần PostgreSQL, hãy thử cài bản tương thích trên máy và khởi động các dịch vụ cần thiết. Docker lưu các lớp image và có thể chạy qua máy ảo, như Docker Desktop trên Linux. Dung lượng, bộ nhớ và thời gian khởi động phụ thuộc vào thành phần đã cài và đang chạy.',
      steps: [
        'Đọc phiên bản Node.js và PostgreSQL, cổng, biến môi trường và cấu hình volume trong compose.yaml. Sao chép ứng dụng, xuất cơ sở dữ liệu bằng pg_dump và giữ lại tệp Compose cùng các volume.',
        'Cài Node.js và PostgreSQL tương thích, gán Node.js cho thư mục rồi khôi phục vào cơ sở dữ liệu riêng. Sửa máy chủ và cổng trong cấu hình bản sao. Dùng 127.0.0.1 nếu cả hai chạy trên cùng máy. Dừng container dùng chung cổng hoặc chọn cổng khác.',
        'Khởi động PostgreSQL và chạy lệnh cài đặt, phát triển thường dùng của ứng dụng. Dùng URL cục bộ để kiểm tra cùng một yêu cầu cần cơ sở dữ liệu. Dùng Compose cho kiểm thử phụ thuộc vào image hoặc hạ tầng container.'
      ],
      rollback: 'Dừng các dịch vụ FlyEnv rồi khởi động lại Compose với cấu hình và volume ban đầu.',
      guide: 'Thiết lập Node.js và dịch vụ native không dùng Docker'
    }
  }
}
