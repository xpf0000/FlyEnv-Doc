export const homeLicensePrice = 10

export const homeLicenseDetails = {
  en: {
    limits: [
      {
        value: '3',
        label: 'local sites'
      },
      {
        value: '3',
        label: 'custom projects per runtime'
      },
      {
        value: '1',
        label: 'Cloudflare Tunnel'
      },
      {
        value: '3-day',
        label: 'trial for built-in tools',
        tools: ['AI', 'Screenshot', 'Image Optimizer']
      }
    ],
    benefits: [
      'Unlimited local sites',
      'Unlimited custom projects',
      'Multiple Cloudflare Tunnels',
      'Full AI Assistant',
      'Full Screenshot Utility',
      'Full Image Optimizer',
      'Future updates included',
      'One active device',
      'Transferable license'
    ],
    paths: ['Purchase', 'Contribute Code', 'Share Your Experience']
  },
  zh: {
    limits: [
      {
        value: '3',
        label: '个本地站点'
      },
      {
        value: '3',
        label: '个自定义项目（每种运行时）'
      },
      {
        value: '1',
        label: '条 Cloudflare Tunnel'
      },
      {
        value: '3 天',
        label: '内置工具试用期',
        tools: ['AI', '截图', '图片优化']
      }
    ],
    benefits: [
      '不限数量的本地站点',
      '不限数量的自定义项目',
      '多条 Cloudflare Tunnel',
      '完整 AI 助手',
      '完整截图工具',
      '完整图片优化工具',
      '包含后续更新',
      '可在一台设备上激活',
      '许可可转移设备'
    ],
    paths: ['购买', '贡献代码', '分享使用体验']
  },
  id: {
    limits: [
      {
        value: '3',
        label: 'situs lokal'
      },
      {
        value: '3',
        label: 'proyek kustom per runtime'
      },
      {
        value: '1',
        label: 'Cloudflare Tunnel'
      },
      {
        value: '3 hari',
        label: 'masa uji coba alat bawaan',
        tools: ['AI', 'Screenshot', 'Image Optimizer']
      }
    ],
    benefits: [
      'Situs lokal tanpa batas',
      'Proyek kustom tanpa batas',
      'Beberapa Cloudflare Tunnel',
      'AI Assistant versi lengkap',
      'Utilitas Screenshot versi lengkap',
      'Image Optimizer versi lengkap',
      'Pembaruan mendatang disertakan',
      'Satu perangkat aktif',
      'Lisensi dapat dipindahkan'
    ],
    paths: ['Beli', 'Kontribusi Kode', 'Bagikan Pengalaman']
  },
  es: {
    limits: [
      {
        value: '3',
        label: 'sitios locales'
      },
      {
        value: '3',
        label: 'proyectos personalizados por runtime'
      },
      {
        value: '1',
        label: 'Cloudflare Tunnel'
      },
      {
        value: '3 días',
        label: 'de prueba para las herramientas integradas',
        tools: ['AI', 'Screenshot', 'Image Optimizer']
      }
    ],
    benefits: [
      'Sitios locales ilimitados',
      'Proyectos personalizados ilimitados',
      'Varios túneles de Cloudflare',
      'AI Assistant completo',
      'Utilidad de captura de pantalla completa',
      'Image Optimizer completo',
      'Actualizaciones futuras incluidas',
      'Un dispositivo activo',
      'Licencia transferible'
    ],
    paths: ['Comprar', 'Contribuir código', 'Comparte tu experiencia']
  },
  vi: {
    limits: [
      {
        value: '3',
        label: 'trang cục bộ'
      },
      {
        value: '3',
        label: 'dự án tùy chỉnh trên mỗi môi trường chạy'
      },
      {
        value: '1',
        label: 'Cloudflare Tunnel'
      },
      {
        value: '3 ngày',
        label: 'dùng thử công cụ tích hợp',
        tools: ['AI', 'Chụp màn hình', 'Tối ưu hình ảnh']
      }
    ],
    benefits: [
      'Trang cục bộ không giới hạn',
      'Dự án tùy chỉnh không giới hạn',
      'Nhiều Cloudflare Tunnel',
      'Trợ lý AI đầy đủ',
      'Công cụ chụp màn hình đầy đủ',
      'Tối ưu hình ảnh đầy đủ',
      'Bao gồm cập nhật tương lai',
      'Một thiết bị đang hoạt động',
      'Giấy phép có thể chuyển nhượng'
    ],
    paths: ['Mua', 'Đóng góp mã', 'Chia sẻ trải nghiệm của bạn']
  }
}

export const homePricingCopy = {
  en: {
    eyebrow: 'Fair & Flexible Licensing',
    title: 'Start free. Go Pro your way.',
    intro:
      'Use FlyEnv for your everyday local development. Unlock more when your workflow needs it.',
    free: 'Free',
    freeTitle: 'Start building.',
    freeDescription: 'Core local development tools, available without a paid license.',
    included: [
      'Language runtimes and databases',
      'Local services and web servers',
      'Local sites and HTTPS',
      'Core development workflows'
    ],
    limits: 'Free limits',
    download: 'Download FlyEnv',
    viewLimits: 'View current Free limits',
    pro: 'Pro · Lifetime License',
    oneTime: 'one-time purchase',
    proTitle: 'Everything in Free, without the limits.',
    proDescription: 'Unlock the full experience, with a transferable license and no subscription.',
    plugins: 'Install and update optional plugins',
    payTitle: 'Pay with Money, Code, or Voice.',
    payDescription: 'Support FlyEnv in the way that works for you.',
    license: 'View license options',
    note: 'See the license page for current pricing, limits and eligibility.',
    finalEyebrow: 'Your next project starts here',
    finalTitle: 'One workspace. Ready when you are.',
    finalDescription: 'Download FlyEnv and bring your local development tools together.',
    guide: 'Read the guide'
  },
  zh: {
    eyebrow: '公平灵活的许可',
    title: '免费上手，按你喜欢的方式获得 Pro。',
    intro: '用 FlyEnv 进行日常本地开发，在工作流需要时解锁更多功能。',
    free: '免费版',
    freeTitle: '开始构建。',
    freeDescription: '核心本地开发工具无需付费授权即可使用。',
    included: ['语言运行时和数据库', '本地服务和 Web 服务器', '本地站点与 HTTPS', '核心开发工作流'],
    limits: '免费版限制',
    download: '下载 FlyEnv',
    viewLimits: '查看当前免费版限制',
    pro: 'Pro · 永久授权',
    oneTime: '一次性购买',
    proTitle: '包含免费版功能，并解除使用限制。',
    proDescription: '解锁完整功能。授权可转移，无需订阅。',
    plugins: '安装和更新可选插件',
    payTitle: '付费、贡献代码，或分享使用体验。',
    payDescription: '选择适合你的方式支持 FlyEnv。',
    license: '查看授权选项',
    note: '当前价格、限制及申请条件见许可证页面。',
    finalEyebrow: '从这里开始你的下一个项目',
    finalTitle: '一个工作区，随时可用。',
    finalDescription: '下载 FlyEnv，把本地开发工具集中在一起。',
    guide: '阅读指南'
  },
  id: {
    eyebrow: 'Lisensi Adil & Fleksibel',
    title: 'Mulai gratis. Pilih cara Anda memperoleh Pro.',
    intro:
      'Gunakan FlyEnv untuk pengembangan lokal sehari-hari. Buka lebih banyak fitur saat dibutuhkan.',
    free: 'Gratis',
    freeTitle: 'Mulai membangun.',
    freeDescription: 'Alat inti pengembangan lokal tersedia tanpa lisensi berbayar.',
    included: [
      'Runtime bahasa dan basis data',
      'Layanan lokal dan server web',
      'Situs lokal dan HTTPS',
      'Alur kerja pengembangan inti'
    ],
    limits: 'Batas edisi Gratis',
    download: 'Unduh FlyEnv',
    viewLimits: 'Lihat batas edisi Gratis saat ini',
    pro: 'Pro · Lisensi Seumur Hidup',
    oneTime: 'pembelian sekali bayar',
    proTitle: 'Semua fitur Gratis tanpa batas penggunaan.',
    proDescription:
      'Gunakan fitur lengkap dengan lisensi yang dapat dipindahkan, tanpa berlangganan.',
    plugins: 'Instal dan perbarui plugin opsional',
    payTitle: 'Dukung dengan Pembayaran, Kode, atau Cerita.',
    payDescription: 'Pilih cara mendukung FlyEnv yang sesuai untuk Anda.',
    license: 'Lihat opsi lisensi',
    note: 'Lihat halaman lisensi untuk harga, batas, dan syarat terbaru.',
    finalEyebrow: 'Proyek berikutnya dimulai di sini',
    finalTitle: 'Satu ruang kerja. Siap saat Anda siap.',
    finalDescription: 'Unduh FlyEnv dan satukan berbagai alat pengembangan lokal Anda.',
    guide: 'Baca panduan'
  },
  es: {
    eyebrow: 'Licencia Justa y Flexible',
    title: 'Empieza gratis. Obtén Pro a tu manera.',
    intro:
      'Usa FlyEnv para tu desarrollo local diario. Desbloquea más funciones cuando las necesites.',
    free: 'Gratis',
    freeTitle: 'Empieza a crear.',
    freeDescription:
      'Las herramientas esenciales de desarrollo local están disponibles sin licencia de pago.',
    included: [
      'Runtimes y bases de datos',
      'Servicios locales y servidores web',
      'Sitios locales y HTTPS',
      'Flujos de desarrollo esenciales'
    ],
    limits: 'Límites de la versión gratuita',
    download: 'Descargar FlyEnv',
    viewLimits: 'Consulta los límites actuales',
    pro: 'Pro · Licencia Permanente',
    oneTime: 'compra única',
    proTitle: 'Todo lo de la edición gratuita, sin sus límites.',
    proDescription: 'Accede a todas las funciones con una licencia transferible y sin suscripción.',
    plugins: 'Instala y actualiza complementos opcionales',
    payTitle: 'Apoya con Dinero, Código o tu Experiencia.',
    payDescription: 'Elige la manera de apoyar a FlyEnv que mejor te funcione.',
    license: 'Ver opciones de licencia',
    note: 'Consulta la página de licencia para conocer precios, límites y requisitos.',
    finalEyebrow: 'Tu próximo proyecto empieza aquí',
    finalTitle: 'Un espacio de trabajo. Listo cuando tú lo estés.',
    finalDescription: 'Descarga FlyEnv y reúne tus herramientas de desarrollo local.',
    guide: 'Leer la guía'
  },
  vi: {
    eyebrow: 'Giấy phép Linh hoạt và Công bằng',
    title: 'Bắt đầu miễn phí. Chọn cách nhận Pro.',
    intro: 'Dùng FlyEnv cho công việc phát triển cục bộ hằng ngày. Mở khóa thêm tính năng khi cần.',
    free: 'Miễn phí',
    freeTitle: 'Bắt đầu xây dựng.',
    freeDescription:
      'Các công cụ phát triển cục bộ cốt lõi dùng được mà không cần giấy phép trả phí.',
    included: [
      'Môi trường chạy và cơ sở dữ liệu',
      'Dịch vụ cục bộ và máy chủ web',
      'Trang web cục bộ và HTTPS',
      'Quy trình phát triển cốt lõi'
    ],
    limits: 'Giới hạn bản miễn phí',
    download: 'Tải FlyEnv',
    viewLimits: 'Xem giới hạn miễn phí hiện tại',
    pro: 'Pro · Giấy phép Vĩnh viễn',
    oneTime: 'thanh toán một lần',
    proTitle: 'Đầy đủ tính năng miễn phí và gỡ bỏ giới hạn.',
    proDescription:
      'Mở khóa toàn bộ tính năng, chuyển giấy phép giữa các thiết bị và không cần đăng ký định kỳ.',
    plugins: 'Cài đặt và cập nhật plugin tùy chọn',
    payTitle: 'Ủng hộ bằng Tiền, Mã nguồn hoặc Chia sẻ.',
    payDescription: 'Chọn cách phù hợp để ủng hộ FlyEnv.',
    license: 'Xem các lựa chọn giấy phép',
    note: 'Xem trang giấy phép để biết giá, giới hạn và điều kiện hiện tại.',
    finalEyebrow: 'Dự án tiếp theo của bạn bắt đầu tại đây',
    finalTitle: 'Một không gian làm việc, sẵn sàng khi bạn cần.',
    finalDescription: 'Tải FlyEnv để tập hợp các công cụ phát triển cục bộ của bạn.',
    guide: 'Đọc hướng dẫn'
  }
} as const
