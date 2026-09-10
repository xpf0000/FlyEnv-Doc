export type SolutionLocale = 'en' | 'zh' | 'id'

export interface SolutionStackLink {
  label: string
  href?: string
}

export const solutionStackFeatureSlugs: Record<string, string> = {
  '.NET': 'dotnet',
  Apache: 'apache',
  Bun: 'bun',
  Caddy: 'caddy',
  Elasticsearch: 'elasticsearch',
  Go: 'go',
  Java: 'java',
  MariaDB: 'mariadb',
  MongoDB: 'mongodb',
  MySQL: 'mysql',
  Nginx: 'nginx',
  'Node.js': 'nodejs',
  PHP: 'php',
  PostgreSQL: 'postgresql',
  Python: 'python',
  Redis: 'redis',
  Ruby: 'ruby'
}

export function resolveSolutionStackLinks(
  component: string,
  locale: SolutionLocale
): SolutionStackLink[] {
  const routePrefix = locale === 'en' ? '' : `/${locale}`

  return component.split(' / ').map((label) => {
    const slug = solutionStackFeatureSlugs[label]
    return slug ? { label, href: `${routePrefix}/features/${slug}` } : { label }
  })
}
