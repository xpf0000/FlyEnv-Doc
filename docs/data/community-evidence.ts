import type {
  CommunityEvidence,
  CommunityLocale,
  CommunityPlacement,
  CommunityPost
} from '../components/AppCommunityEvidence/types'

export const communityEvidence: Record<CommunityLocale, CommunityEvidence[]> = {
  en: [
    {
      postId: 'abidar-flyenv-modern-local-development-php-laravel-wordpress',
      locale: 'en',
      scenario: 'Windows Laravel and WordPress projects',
      homepageTitle: 'Laravel & WordPress development on Windows',
      useCases: ['windows-local-development', 'multiple-runtime-versions'],
      editorialSummary:
        'A Windows developer uses FlyEnv for Laravel, WordPress, and plain PHP projects that need different PHP versions without changing global settings.',
      relatedGuides: [
        '/guide/project-level-runtime-environment.html',
        '/guide/run-laravel-use-flyenv.html'
      ],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'nh-ihsan-flyenv-mac-local-environment-2026',
      locale: 'en',
      scenario: 'Mac services and local HTTPS',
      homepageTitle: 'Native PHP services and HTTPS on macOS',
      useCases: ['macos-local-development', 'local-services', 'multiple-runtime-versions'],
      editorialSummary:
        'A Mac developer describes replacing heavier Docker and Valet workflows with native service control, per-project PHP versions, local HTTPS domains, and databases.',
      relatedGuides: [
        '/guide/flyenv-vs-docker-xampp.html',
        '/guide/project-level-runtime-environment.html'
      ],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'mencoba-flyenv-setelah-lama-menggunakan-xampp',
      locale: 'en',
      scenario: 'Moving from XAMPP',
      homepageTitle: 'Moving PHP projects from XAMPP to FlyEnv',
      useCases: ['xampp-migration', 'multiple-runtime-versions'],
      editorialSummary:
        'A PHP developer describes moving from a long-standing XAMPP workflow and handling projects that need different PHP versions.',
      relatedGuides: [
        '/guide/flyenv-vs-docker-xampp.html',
        '/guide/project-level-runtime-environment.html'
      ],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'why-i-finally-switched-from-laragon-to-flyenv',
      locale: 'en',
      scenario: 'Moving from Laragon',
      useCases: ['laragon-migration', 'laravel-local-development'],
      editorialSummary:
        'A Laravel developer describes moving from Laragon to a FlyEnv workflow for PHP, PostgreSQL, and everyday project work.',
      relatedGuides: ['/guide/flyenv-vs-docker-xampp.html', '/guide/run-laravel-use-flyenv.html'],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'flyenv-on-linux-actually-fixed-my-php-version-headache',
      locale: 'en',
      scenario: 'Linux and multiple PHP versions',
      useCases: ['linux-local-development', 'multiple-runtime-versions'],
      editorialSummary:
        'A Linux Mint developer explains how they manage legacy and current PHP projects alongside local services without repeated system-wide version changes.',
      relatedGuides: [
        '/guide/project-level-runtime-environment.html',
        '/guide/manage-multiple-node-php-versions.html'
      ],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'goharabbas321-flyenv-modern-local-development-full-stack',
      locale: 'en',
      scenario: 'Full-stack local development',
      homepageTitle: 'One workspace for full-stack development',
      useCases: ['multiple-runtime-versions', 'local-services', 'ai-assisted-development'],
      editorialSummary:
        'A full-stack developer presents FlyEnv as one desktop workspace for runtimes, databases, and local development tools.',
      relatedGuides: ['/guide/what-is-flyenv.html', '/guide/flyenv-work-with-ai.html'],
      featuredPlacements: ['home', 'community-hero']
    },
    {
      postId: 'mufaizabd-xampp-docker-to-flyenv',
      locale: 'en',
      scenario: 'Replacing XAMPP and Docker',
      homepageTitle: 'Leaving XAMPP and Docker behind',
      useCases: ['xampp-migration', 'docker-alternative', 'multiple-runtime-versions'],
      editorialSummary:
        'A developer on a low-RAM computer replaces XAMPP and Docker with FlyEnv for faster PHP switching and a lighter daily workflow.',
      relatedGuides: ['/guide/flyenv-vs-docker-xampp.html', '/guide/project-level-runtime-environment.html'],
      featuredPlacements: ['home', 'community-hero']
    },
    {
      postId: 'kiki-six-months-flyenv-multi-project-dashboard',
      locale: 'en',
      scenario: 'Managing many local projects',
      homepageTitle: 'Six months of multi-project workflow',
      useCases: ['multiple-runtime-versions', 'local-services'],
      editorialSummary:
        'After six months with FlyEnv, a PHP developer shares a practical workflow for several projects, shared services, and runtime cleanup.',
      relatedGuides: ['/guide/project-level-runtime-environment.html', '/guide/manage-multiple-node-php-versions.html'],
      featuredPlacements: ['home', 'community-hero']
    }
  ],
  zh: [
    {
      postId: 'navg-servbay-to-flyenv-php-plugin-development',
      locale: 'zh',
      scenario: 'PHP 插件开发与 AI 工作流',
      homepageTitle: 'PHP 插件开发与 AI 工作流',
      useCases: [
        'windows-local-development',
        'multiple-runtime-versions',
        'ai-assisted-development'
      ],
      editorialSummary:
        '一位 Windows PHP 插件开发者记录从 ServBay 迁移到 FlyEnv 后的真实工作流，包括项目级 PHP 版本、HTTPS 站点以及 AI 编程 CLI 和 MCP Server。',
      relatedGuides: [
        '/zh/guide/project-level-runtime-environment.html',
        '/zh/guide/flyenv-work-with-ai.html'
      ],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'juejin-7666754297045614628',
      locale: 'zh',
      scenario: '多项目运行时与本地服务',
      homepageTitle: '多项目运行时与本地服务管理',
      useCases: ['multiple-runtime-versions', 'local-services'],
      editorialSummary:
        '作者分享了用统一图形界面安装运行时、按项目切换版本、管理本地服务、配置站点并查看日志的实际场景。',
      relatedGuides: [
        '/zh/guide/project-level-runtime-environment.html',
        '/zh/guide/manage-multiple-node-php-versions.html'
      ],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'juejin-7674818461377495050',
      locale: 'zh',
      scenario: '多运行时、本地服务与 AI 工具',
      useCases: ['multiple-runtime-versions', 'local-services', 'ai-assisted-development'],
      editorialSummary:
        '作者从多项目本地开发中的版本、服务和站点管理问题出发，分享如何将运行时、数据库、Web 服务和 AI 工具集中到同一工作台，并说明与 Docker 的适用边界。',
      relatedGuides: [
        '/zh/guide/project-level-runtime-environment.html',
        '/zh/guide/flyenv-work-with-ai.html'
      ],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'zhuangpenglong-macos-kai-fa-huan-jing-bu-shu-flyenv-ran',
      locale: 'zh',
      scenario: 'macOS 多运行时开发',
      useCases: ['macos-local-development', 'multiple-runtime-versions'],
      editorialSummary:
        '一位 macOS 开发者介绍了在一个桌面环境中管理 Web 服务、数据库和多版本语言运行时的本地开发体验。',
      relatedGuides: ['/zh/guide/manage-multiple-node-php-versions.html'],
      featuredPlacements: ['community-hero']
    },
    {
      postId: 'csdn-145736318',
      locale: 'zh',
      scenario: '从 Docker 与 XAMPP 迁移',
      useCases: ['docker-alternative', 'xampp-migration'],
      editorialSummary:
        '一位开发者从本地服务、运行时版本和跨平台使用场景出发，分享了 FlyEnv 作为 Docker 与 XAMPP 替代方案的体验。',
      relatedGuides: ['/zh/guide/flyenv-vs-docker-xampp.html'],
      featuredPlacements: ['community-hero', 'guide']
    },
    {
      postId: 'toutiao-7680435277819314739',
      locale: 'zh',
      scenario: '独立开发者的多服务项目',
      homepageTitle: '一个人也能管理完整本地技术栈',
      useCases: ['windows-local-development', 'local-services', 'multiple-runtime-versions'],
      editorialSummary:
        '一位独立开发者用 FlyEnv 管理 Laravel、Python、Node.js、PostgreSQL 和 Redis，为古籍资料库项目搭建完整的本地工作流。',
      relatedGuides: ['/zh/guide/project-level-runtime-environment.html', '/zh/guide/flyenv-vs-docker-xampp.html'],
      featuredPlacements: ['home', 'community-hero']
    },
    {
      postId: 'csdn-164155021',
      locale: 'zh',
      scenario: 'Java 开发环境配置',
      homepageTitle: '把 Java 环境配置变成几次点击',
      useCases: ['multiple-runtime-versions', 'windows-local-development'],
      editorialSummary:
        '一篇面向 Java 开发者的实践文章，记录如何在 macOS、Windows 和 Linux 上用 FlyEnv 减少本地环境配置工作。',
      relatedGuides: ['/zh/guide/set-up-java-development-environment.html'],
      featuredPlacements: ['home', 'community-hero']
    },
    {
      postId: 'zhihu-2075241562318152899',
      locale: 'zh',
      scenario: '省心的本地服务管理',
      homepageTitle: '少折腾环境，多花时间写代码',
      useCases: ['multiple-runtime-versions', 'local-services'],
      editorialSummary:
        '作者从实际使用出发，分享 FlyEnv 对多版本运行时、数据库、Redis、Web Server 和本地站点的集中管理体验。',
      relatedGuides: ['/zh/guide/project-level-runtime-environment.html', '/zh/guide/manage-multiple-node-php-versions.html'],
      featuredPlacements: ['home', 'community-hero']
    }
  ],
  id: [
    {
      postId: 'abidar-flyenv-modern-local-development-php-laravel-wordpress',
      locale: 'id',
      scenario: 'Proyek Laravel dan WordPress di Windows',
      homepageTitle: 'Pengembangan Laravel dan WordPress di Windows',
      useCases: ['windows-local-development', 'multiple-runtime-versions'],
      editorialSummary:
        'Seorang developer Windows memakai FlyEnv untuk proyek Laravel, WordPress, dan PHP biasa yang memerlukan versi PHP berbeda tanpa mengubah pengaturan global.',
      relatedGuides: [
        '/id/guide/project-level-runtime-environment.html',
        '/id/guide/run-laravel-use-flyenv.html'
      ],
      featuredPlacements: []
    },
    {
      postId: 'nh-ihsan-flyenv-mac-local-environment-2026',
      locale: 'id',
      scenario: 'Layanan Mac dan HTTPS lokal',
      homepageTitle: 'Layanan PHP native dan HTTPS di macOS',
      useCases: ['macos-local-development', 'local-services', 'multiple-runtime-versions'],
      editorialSummary:
        'Seorang developer Mac mengganti alur kerja Docker dan Valet yang lebih berat dengan kontrol layanan native, versi PHP per proyek, domain HTTPS lokal, dan database.',
      relatedGuides: [
        '/id/guide/flyenv-vs-docker-xampp.html',
        '/id/guide/project-level-runtime-environment.html'
      ],
      featuredPlacements: []
    },
    {
      postId: 'mencoba-flyenv-setelah-lama-menggunakan-xampp',
      locale: 'id',
      scenario: 'Migrasi dari XAMPP',
      homepageTitle: 'Memindahkan proyek PHP dari XAMPP ke FlyEnv',
      useCases: ['xampp-migration', 'multiple-runtime-versions'],
      editorialSummary:
        'Seorang developer PHP menjelaskan perpindahan dari alur kerja XAMPP yang telah lama digunakan dan pengelolaan proyek yang membutuhkan versi PHP berbeda.',
      relatedGuides: [
        '/id/guide/flyenv-vs-docker-xampp.html',
        '/id/guide/project-level-runtime-environment.html'
      ],
      featuredPlacements: []
    },
    {
      postId: 'fahdilabib-flyenv-ram-lightweight-local-development',
      locale: 'id',
      scenario: 'Local development ringan di laptop',
      homepageTitle: 'Mengurangi beban RAM saat local development',
      useCases: ['xampp-migration', 'docker-alternative', 'multiple-runtime-versions'],
      editorialSummary:
        'Fahdi Labib menceritakan perpindahan dari Docker ke FlyEnv untuk multi-versi PHP, SSL lokal otomatis, dan penggunaan RAM yang lebih ringan.',
      relatedGuides: ['/id/guide/flyenv-vs-docker-xampp.html', '/id/guide/project-level-runtime-environment.html'],
      featuredPlacements: ['home']
    },
    {
      postId: 'mufaizabd-xampp-docker-to-flyenv',
      locale: 'id',
      scenario: 'Migrasi dari XAMPP dan Docker',
      homepageTitle: 'Workflow PHP lebih ringan di komputer RAM rendah',
      useCases: ['xampp-migration', 'docker-alternative', 'multiple-runtime-versions'],
      editorialSummary:
        'Muhammad Faiz membagikan alasan meninggalkan XAMPP dan Docker, dengan switching PHP instan untuk proyek legacy dan modern.',
      relatedGuides: ['/id/guide/flyenv-vs-docker-xampp.html', '/id/guide/project-level-runtime-environment.html'],
      featuredPlacements: ['home']
    },
    {
      postId: 'kiki-six-months-flyenv-multi-project-dashboard',
      locale: 'id',
      scenario: 'Banyak project dan layanan lokal',
      homepageTitle: 'Enam bulan mengelola banyak project dengan FlyEnv',
      useCases: ['multiple-runtime-versions', 'local-services'],
      editorialSummary:
        'Setelah enam bulan menggunakan FlyEnv, kiki membagikan cara mengatur beberapa project PHP, runtime, Redis, object storage, dan layanan pasif.',
      relatedGuides: ['/id/guide/project-level-runtime-environment.html', '/id/guide/manage-multiple-node-php-versions.html'],
      featuredPlacements: ['home']
    }
  ]
}

export function getEvidencePost(posts: CommunityPost[], evidence: CommunityEvidence) {
  const post = posts.find((item) => item.id === evidence.postId)
  if (!post) throw new Error('Missing community post: ' + evidence.postId)
  return post
}

export function getPlacementEvidence(locale: CommunityLocale, placement: CommunityPlacement) {
  return communityEvidence[locale].filter((item) => item.featuredPlacements.includes(placement))
}
