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
      useCases: ['windows-local-development', 'multiple-runtime-versions'],
      editorialSummary:
        'A Windows developer uses FlyEnv for Laravel, WordPress, and plain PHP projects that need different PHP versions without changing global settings.',
      relatedGuides: [
        '/guide/project-level-runtime-environment.html',
        '/guide/run-laravel-use-flyenv.html'
      ],
      featuredPlacements: ['home', 'community-hero', 'guide']
    },
    {
      postId: 'nh-ihsan-flyenv-mac-local-environment-2026',
      locale: 'en',
      scenario: 'Mac services and local HTTPS',
      useCases: ['macos-local-development', 'local-services', 'multiple-runtime-versions'],
      editorialSummary:
        'A Mac developer describes replacing heavier Docker and Valet workflows with native service control, per-project PHP versions, local HTTPS domains, and databases.',
      relatedGuides: [
        '/guide/flyenv-vs-docker-xampp.html',
        '/guide/project-level-runtime-environment.html'
      ],
      featuredPlacements: ['home', 'community-hero', 'guide']
    },
    {
      postId: 'mencoba-flyenv-setelah-lama-menggunakan-xampp',
      locale: 'en',
      scenario: 'Moving from XAMPP',
      useCases: ['xampp-migration', 'multiple-runtime-versions'],
      editorialSummary:
        'A PHP developer describes moving from a long-standing XAMPP workflow and handling projects that need different PHP versions.',
      relatedGuides: [
        '/guide/flyenv-vs-docker-xampp.html',
        '/guide/project-level-runtime-environment.html'
      ],
      featuredPlacements: ['home', 'community-hero', 'guide']
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
    }
  ],
  zh: [
    {
      postId: 'navg-servbay-to-flyenv-php-plugin-development',
      locale: 'zh',
      scenario: 'PHP 插件开发与 AI 工作流',
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
      featuredPlacements: ['home', 'community-hero', 'guide']
    },
    {
      postId: 'juejin-7666754297045614628',
      locale: 'zh',
      scenario: '多项目运行时与本地服务',
      useCases: ['multiple-runtime-versions', 'local-services'],
      editorialSummary:
        '作者分享了用统一图形界面安装运行时、按项目切换版本、管理本地服务、配置站点并查看日志的实际场景。',
      relatedGuides: [
        '/zh/guide/project-level-runtime-environment.html',
        '/zh/guide/manage-multiple-node-php-versions.html'
      ],
      featuredPlacements: ['home', 'community-hero', 'guide']
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
      featuredPlacements: ['home', 'community-hero', 'guide']
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
