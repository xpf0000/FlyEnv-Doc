import type {
  CommunityEvidence,
  CommunityLocale,
  CommunityPlacement,
  CommunityPost
} from '../components/AppCommunityEvidence/types'

export const communityEvidence: Record<CommunityLocale, CommunityEvidence[]> = {
  en: [
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
      featuredPlacements: ['home', 'community-hero', 'guide']
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
      featuredPlacements: ['home', 'community-hero', 'guide']
    }
  ],
  zh: [
    {
      postId: 'csdn-145736318',
      locale: 'zh',
      scenario: '从 Docker 与 XAMPP 迁移',
      useCases: ['docker-alternative', 'xampp-migration'],
      editorialSummary:
        '一位开发者从本地服务、运行时版本和跨平台使用场景出发，分享了 FlyEnv 作为 Docker 与 XAMPP 替代方案的体验。',
      relatedGuides: ['/zh/guide/flyenv-vs-docker-xampp.html'],
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
      postId: 'zhuangpenglong-macos-kai-fa-huan-jing-bu-shu-flyenv-ran',
      locale: 'zh',
      scenario: 'macOS 多运行时开发',
      useCases: ['macos-local-development', 'multiple-runtime-versions'],
      editorialSummary:
        '一位 macOS 开发者介绍了在一个桌面环境中管理 Web 服务、数据库和多版本语言运行时的本地开发体验。',
      relatedGuides: ['/zh/guide/manage-multiple-node-php-versions.html'],
      featuredPlacements: ['home', 'community-hero']
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
