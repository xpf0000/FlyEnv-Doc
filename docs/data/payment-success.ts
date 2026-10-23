export type PaymentLocale = 'en' | 'zh' | 'id' | 'es'

interface PaymentSuccessCopy {
  title: string
  thanks: string
  description: string
  progressLabel: string
  progress: [string, string, string]
  nextStep: string
  requestTitle: [string, string]
  intro: string
  step1Title: string
  step1Description: string
  locationLabel: string
  settings: string
  license: string
  step2Title: string
  step2Description: string
  step3Title: string
  step3Description: string
  templateTitle: string
  templateDescription: string
  example: string
  requestTemplate: string
  copy: string
  copying: string
  copied: string
  copySuccess: string
  copyFailure: string
  receiptTitle: string
  receiptNote: string
  manualNote: string
  processingNote: string
  guide: string
  download: string
  help: string
  support: string
  supportEmail: string
}

export const paymentSuccessCopy: Record<PaymentLocale, PaymentSuccessCopy> = {
  en: {
    title: 'Payment successful',
    thanks: 'Thank you for supporting FlyEnv.',
    description: 'To activate your license, open the FlyEnv desktop app and submit a request.',
    progressLabel: 'License activation progress',
    progress: ['Payment complete', 'Request your license', 'License issued'],
    nextStep: 'Next step',
    requestTitle: ['Request your license', 'in three steps.'],
    intro: 'Complete these steps in the FlyEnv desktop app on the computer you want to activate.',
    step1Title: 'Open FlyEnv on your computer',
    step1Description: 'Go to Settings → License and scroll to the request area.',
    locationLabel: 'Settings, then License',
    settings: 'Settings',
    license: 'License',
    step2Title: 'Add your purchase details',
    step2Description:
      'In the Message field, include your Paddle order ID or receipt email, plus an email address where we can reach you.',
    step3Title: 'Submit your request in FlyEnv',
    step3Description:
      'Click “Request License” in the desktop app. We will email you once your license is issued.',
    templateTitle: 'What to include',
    templateDescription:
      'Copy this template, replace the placeholders, and paste it into the Message field in FlyEnv.',
    example: 'Example message',
    requestTemplate: 'Paddle order ID: [your order ID]\nNotification email: [your email]',
    copy: 'Copy template',
    copying: 'Copying…',
    copied: 'Template copied',
    copySuccess: 'Copied. Replace both placeholders before submitting.',
    copyFailure: 'Could not copy. Select and copy the message above.',
    receiptTitle: 'No order ID handy?',
    receiptNote: 'You can use your Paddle receipt email instead.',
    manualNote: 'Licenses are issued manually after your in-app request has been verified.',
    processingNote: 'Most requests are processed within 24 hours.',
    guide: 'View activation guide',
    download: 'Download FlyEnv',
    help: 'Need a hand?',
    support: 'Contact support',
    supportEmail: 'alexpengfeixu@gmail.com'
  },
  zh: {
    title: '付款成功',
    thanks: '感谢您支持 FlyEnv。',
    description: '接下来，请打开 FlyEnv 桌面应用并提交申请，以获取并激活许可证。',
    progressLabel: '许可证激活进度',
    progress: ['付款完成', '申请许可证', '许可证发放'],
    nextStep: '接下来',
    requestTitle: ['只需三步', '申请您的许可证'],
    intro: '请在需要激活的电脑上打开 FlyEnv，完成以下操作。',
    step1Title: '在您的电脑上打开 FlyEnv',
    step1Description: '进入“设置 → 许可证”，向下滚动到许可证申请区域。',
    locationLabel: '设置，然后进入许可证',
    settings: '设置',
    license: '许可证',
    step2Title: '填写购买凭证和联系邮箱',
    step2Description:
      '在“消息”中填写 Paddle 订单 ID 或收据邮箱，并提供一个可以接收通知的邮箱地址。',
    step3Title: '在 FlyEnv 中提交申请',
    step3Description: '点击桌面应用中的“申请许可证”。许可证发放后，我们会通过邮件通知您。',
    templateTitle: '申请时需要填写什么？',
    templateDescription:
      '复制下方模板，将方括号中的内容替换为您的信息，再粘贴到 FlyEnv 的“消息”输入框中。',
    example: '申请消息示例',
    requestTemplate: 'Paddle 订单 ID：[您的订单 ID]\n通知邮箱：[您的邮箱]',
    copy: '复制模板',
    copying: '正在复制…',
    copied: '模板已复制',
    copySuccess: '已复制。提交前，请将两处占位内容替换为您的信息。',
    copyFailure: '复制失败，请选中上方消息并手动复制。',
    receiptTitle: '找不到订单 ID？',
    receiptNote: '也可以提供您的 Paddle 收据邮箱。',
    manualNote: '在应用内提交申请并通过核验后，许可证将由人工发放。',
    processingNote: '大多数申请会在 24 小时内处理。',
    guide: '查看激活指南',
    download: '下载 FlyEnv',
    help: '需要帮助？',
    support: '联系支持',
    supportEmail: '250881478@qq.com'
  },
  id: {
    title: 'Pembayaran berhasil',
    thanks: 'Terima kasih telah mendukung FlyEnv.',
    description:
      'Untuk mengaktifkan lisensi, buka aplikasi desktop FlyEnv dan ajukan permintaan lisensi.',
    progressLabel: 'Progres aktivasi lisensi',
    progress: ['Pembayaran selesai', 'Ajukan lisensi', 'Lisensi diterbitkan'],
    nextStep: 'Langkah berikutnya',
    requestTitle: ['Ajukan lisensi Anda', 'dalam tiga langkah.'],
    intro:
      'Lakukan langkah berikut di aplikasi desktop FlyEnv pada komputer yang ingin Anda aktifkan.',
    step1Title: 'Buka FlyEnv di komputer Anda',
    step1Description: 'Buka Settings → License, lalu gulir ke bagian permintaan lisensi.',
    locationLabel: 'Buka Settings, lalu License',
    settings: 'Settings',
    license: 'License',
    step2Title: 'Isi informasi pembelian Anda',
    step2Description:
      'Pada kolom Message, cantumkan ID pesanan Paddle atau email tanda terima, serta alamat email yang dapat kami hubungi.',
    step3Title: 'Kirim permintaan melalui FlyEnv',
    step3Description:
      'Klik “Request License” di aplikasi desktop. Kami akan mengirimkan email setelah lisensi Anda diterbitkan.',
    templateTitle: 'Informasi yang perlu disertakan',
    templateDescription:
      'Salin templat ini, ganti teks dalam tanda kurung siku dengan informasi Anda, lalu tempel ke kolom Message di FlyEnv.',
    example: 'Contoh pesan',
    requestTemplate: 'ID pesanan Paddle: [ID pesanan Anda]\nEmail pemberitahuan: [email Anda]',
    copy: 'Salin templat',
    copying: 'Menyalin…',
    copied: 'Templat disalin',
    copySuccess: 'Berhasil disalin. Ganti kedua isian dengan informasi Anda sebelum mengirim.',
    copyFailure: 'Tidak dapat menyalin. Pilih dan salin pesan di atas secara manual.',
    receiptTitle: 'Tidak menemukan ID pesanan?',
    receiptNote: 'Anda juga dapat menyertakan email tanda terima dari Paddle.',
    manualNote:
      'Lisensi diterbitkan secara manual setelah permintaan Anda di aplikasi diverifikasi.',
    processingNote: 'Sebagian besar permintaan diproses dalam 24 jam.',
    guide: 'Lihat panduan aktivasi',
    download: 'Unduh FlyEnv',
    help: 'Perlu bantuan?',
    support: 'Hubungi dukungan',
    supportEmail: 'alexpengfeixu@gmail.com'
  },
  es: {
    title: 'Pago completado',
    thanks: 'Gracias por apoyar a FlyEnv.',
    description:
      'Para activar tu licencia, abre la aplicación de escritorio de FlyEnv y envía una solicitud.',
    progressLabel: 'Progreso de activación de la licencia',
    progress: ['Pago completado', 'Solicita tu licencia', 'Licencia emitida'],
    nextStep: 'Siguiente paso',
    requestTitle: ['Solicita tu licencia', 'en tres pasos.'],
    intro:
      'Sigue estos pasos en la aplicación de escritorio de FlyEnv, desde el ordenador que quieras activar.',
    step1Title: 'Abre FlyEnv en tu ordenador',
    step1Description:
      'Ve a Settings → License y desplázate hasta la sección de solicitud de licencia.',
    locationLabel: 'Abre Settings y después License',
    settings: 'Settings',
    license: 'License',
    step2Title: 'Añade los datos de tu compra',
    step2Description:
      'En el campo Message, incluye el ID de tu pedido de Paddle o el correo del recibo, junto con una dirección de correo donde podamos contactarte.',
    step3Title: 'Envía la solicitud desde FlyEnv',
    step3Description:
      'Haz clic en “Request License” en la aplicación de escritorio. Te avisaremos por correo cuando se haya emitido tu licencia.',
    templateTitle: 'Qué debes incluir',
    templateDescription:
      'Copia esta plantilla, sustituye los textos entre corchetes por tus datos y pégala en el campo Message de FlyEnv.',
    example: 'Ejemplo de mensaje',
    requestTemplate: 'ID de pedido de Paddle: [tu ID de pedido]\nCorreo de contacto: [tu correo]',
    copy: 'Copiar plantilla',
    copying: 'Copiando…',
    copied: 'Plantilla copiada',
    copySuccess: 'Copiado. Sustituye los dos campos por tus datos antes de enviar la solicitud.',
    copyFailure: 'No se pudo copiar. Selecciona y copia el mensaje de arriba manualmente.',
    receiptTitle: '¿No encuentras el ID del pedido?',
    receiptNote: 'También puedes incluir el correo del recibo de Paddle.',
    manualNote: 'Las licencias se emiten manualmente tras verificar tu solicitud en la aplicación.',
    processingNote: 'La mayoría de las solicitudes se tramitan en un plazo de 24 horas.',
    guide: 'Ver guía de activación',
    download: 'Descargar FlyEnv',
    help: '¿Necesitas ayuda?',
    support: 'Contactar con soporte',
    supportEmail: 'alexpengfeixu@gmail.com'
  }
}
