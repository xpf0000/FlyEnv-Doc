import type { CompareLocale } from './types'
import { getComparisonText } from './prototype-detail-locales'

export type PrototypeComparisonSlug = 'laragon' | 'herd' | 'xampp' | 'mamp' | 'docker'

interface DetailLink {
  label: string
  href: string
}

export interface PrototypeDiagram {
  title: string
  tag: string
  group?: { name: string; services: string[] }
  flow?: [title: string, description: string][]
  projects?: {
    name: string
    tag: string
    chips: [label: string, tone: 'green' | 'purple' | null][]
  }[]
  foot?: string
  platforms?: string[]
}

interface PrototypeComparison {
  competitor: string
  hero: {
    eyebrow: string
    title: string
    headline: string[]
    description: string
    diagram: PrototypeDiagram
  }
  jump: DetailLink[]
  matrix: {
    title: string
    description: string
    groups: { title: string; rows: [capability: string, competitor: string, flyenv: string][] }[]
    sources: DetailLink[]
    note: boolean
  }
  advantages: {
    title: string
    features: {
      label: string
      title: string
      description: string
      link: DetailLink
      diagram: PrototypeDiagram
    }[]
  }
  plugins: {
    eyebrow: string
    title: string
    description: string
    heading: string
    items: [mark: string, module: string][]
  }
  migration: { title: string; description: string; steps: { title: string; description: string }[] }
  faq: { question: string; answer: string; link?: DetailLink }[]
  download: { title: string; description: string }
  demo: string
}

export const prototypeComparisons: Record<PrototypeComparisonSlug, PrototypeComparison> = {
  laragon: {
    competitor: 'Laragon',
    hero: {
      eyebrow: 'Laragon alternative',
      title: 'FlyEnv vs Laragon',
      headline: ['Take your workflow', 'beyond Windows.'],
      description:
        'Keep the familiar local development workflow you value. Add cross-platform support, project-level runtimes, grouped services and an extensible workspace as your projects grow.',
      diagram: {
        title: 'Your projects',
        tag: 'WORKSPACE',
        projects: [
          {
            name: 'Customer portal',
            tag: 'Project A',
            chips: [
              ['PHP 8.3', null],
              ['Nginx', 'green'],
              ['MySQL', 'purple'],
              ['Redis', null]
            ]
          },
          {
            name: 'API & frontend',
            tag: 'Project B',
            chips: [
              ['Node.js', null],
              ['Python', 'green'],
              ['PostgreSQL', 'purple']
            ]
          },
          {
            name: 'Legacy application',
            tag: 'Project C',
            chips: [
              ['PHP 7.4', null],
              ['MySQL', 'green']
            ]
          }
        ],
        foot: 'One workspace, independent project settings',
        platforms: ['Win', 'Mac', 'Linux']
      }
    },
    jump: [
      {
        label: 'Key differences',
        href: '#comparison'
      },
      {
        label: 'Project workflow',
        href: '#advantages'
      },
      {
        label: 'Try your project',
        href: '#migration'
      },
      {
        label: 'FAQ',
        href: '#faq'
      }
    ],
    matrix: {
      title: 'Build on what you already know.',
      description:
        'Laragon offers a familiar portable Windows environment. FlyEnv is designed for native development across Windows, macOS and Linux, with project-oriented service management.',
      groups: [
        {
          title: 'Why switch',
          rows: [
            ['Desktop platforms', 'Windows', 'Windows, macOS, Linux'],
            [
              'Runtime management',
              'Multiple versions; version switching',
              'Per-project runtime settings + multiple versions'
            ],
            [
              'Project startup',
              'Start/stop tools in a portable stack',
              'Named Startup Groups for project dependencies'
            ],
            [
              'Extending your tools',
              'Quick add and portable tooling',
              'Optional modules via Plugin Market'
            ],
            ['AI development', 'See Laragon documentation', 'Built-in MCP; optional AI Memory']
          ]
        },
        {
          title: 'Shared fundamentals',
          rows: [
            [
              'Local web stack',
              'PHP, web servers, databases',
              'PHP, web servers, databases and more'
            ],
            ['Local domains & HTTPS', 'Supported', 'Supported']
          ]
        }
      ],
      sources: [
        {
          label: 'Laragon documentation',
          href: 'https://laragon.org/docs'
        },
        {
          label: 'Laragon operations',
          href: 'https://laragon.org/docs/operations'
        },
        {
          label: 'FlyEnv project runtimes',
          href: '/features/per-project-runtimes'
        }
      ],
      note: false
    },
    advantages: {
      title: 'A project-first way to work.',
      features: [
        {
          label: '01 / Project environments',
          title: 'Stop switching your entire environment for one project.',
          description:
            'Keep a legacy PHP project and a modern Laravel project on their own supported runtime versions. Manage Node.js or Python projects from the same workspace, too.',
          link: {
            label: 'Project-level runtime management →',
            href: '/features/per-project-runtimes'
          },
          diagram: {
            title: 'Your projects',
            tag: 'WORKSPACE',
            projects: [
              {
                name: 'Customer portal',
                tag: 'Project A',
                chips: [
                  ['PHP 8.3', null],
                  ['Nginx', 'green'],
                  ['MySQL', 'purple'],
                  ['Redis', null]
                ]
              },
              {
                name: 'API & frontend',
                tag: 'Project B',
                chips: [
                  ['Node.js', null],
                  ['Python', 'green'],
                  ['PostgreSQL', 'purple']
                ]
              },
              {
                name: 'Legacy application',
                tag: 'Project C',
                chips: [
                  ['PHP 7.4', null],
                  ['MySQL', 'green']
                ]
              }
            ],
            foot: 'One workspace, independent project settings',
            platforms: ['Win', 'Mac', 'Linux']
          }
        },
        {
          label: '02 / Startup Groups',
          title: 'Bring a project’s services up together.',
          description:
            'Group the installed PHP service, web server, database and cache that a project needs. Switch to another project without manually restarting each dependency.',
          link: {
            label: 'See Startup Groups →',
            href: '/features/startup-groups'
          },
          diagram: {
            title: 'Startup Groups',
            tag: 'WORKSPACE',
            group: {
              name: 'Laravel project',
              services: ['Nginx', 'PHP-FPM', 'MySQL', 'Redis']
            }
          }
        },
        {
          label: '03 / Cross-platform',
          title: 'One familiar workspace on your next computer.',
          description:
            'Use FlyEnv on Windows, macOS and Linux. Keep the same management approach as you change operating systems; install the versions available for your platform.',
          link: {
            label: 'Explore all features →',
            href: '/features'
          },
          diagram: {
            title: 'Same idea, three platforms',
            tag: 'WORKSPACE',
            flow: [
              ['Windows', 'PHP · Node.js'],
              ['macOS', 'PHP · Python'],
              ['Linux', 'Java · Go']
            ],
            projects: [
              {
                name: 'Common workflow',
                tag: 'Native',
                chips: [
                  ['Runtimes', null],
                  ['Services', 'green'],
                  ['Local sites', 'purple'],
                  ['Groups', null]
                ]
              }
            ]
          }
        }
      ]
    },
    plugins: {
      eyebrow: 'Plugin Marketplace',
      title: 'Add more than a traditional web stack.',
      description:
        'Start with PHP, a web server and a database. Later, add search, messaging, local AI or other optional modules as your projects need them.',
      heading: 'Your workspace, extended',
      items: [
        ['K', 'Kafka'],
        ['OS', 'OpenSearch'],
        ['SQL', 'SQL Server'],
        ['AI', 'AI Memory']
      ]
    },
    migration: {
      title: 'Try one Laragon project in FlyEnv.',
      description:
        'No need to migrate everything at once. Keep your existing code and original environment while you test a separate local setup.',
      steps: [
        {
          title: 'Back up your existing project',
          description:
            'Keep a copy of your source, environment settings and database export. Stop or use different ports for conflicting services.'
        },
        {
          title: 'Install the required versions',
          description:
            'Choose the PHP version, web server, database and any additional runtime your project requires.'
        },
        {
          title: 'Configure the local site',
          description:
            'Point the site to your project directory, configure the document root and HTTPS, and import a test database.'
        },
        {
          title: 'Group the dependencies',
          description:
            'Add the managed services to a Startup Group, then run and verify the application.'
        }
      ]
    },
    faq: [
      {
        question: 'Is FlyEnv a Laragon alternative for Windows?',
        answer:
          'Yes. FlyEnv supports native development on Windows and also provides desktop apps for macOS and Linux. Individual service availability varies by platform.'
      },
      {
        question: 'Can I keep my existing Laravel or PHP projects?',
        answer:
          'Yes. Use your existing source code with a separately configured FlyEnv site and database. Review .env files, paths, ports and runtime requirements before switching.'
      },
      {
        question: 'Can FlyEnv manage different PHP versions?',
        answer:
          'FlyEnv supports multiple PHP versions and project-level runtime settings. See the per-project runtimes and PHP documentation for the platform-specific setup.'
      },
      {
        question: 'Does FlyEnv require Docker?',
        answer:
          'No. FlyEnv manages native local services. Docker can remain part of your workflow when you need containers.'
      },
      {
        question: 'Is FlyEnv free?',
        answer:
          'FlyEnv is open source and offers a free edition with optional Pro licensing. Some features and installing or updating plugins require a license. See the license page for details.',
        link: {
          label: 'license page',
          href: '/license'
        }
      }
    ],
    download: {
      title: 'Keep your projects. Expand your workspace.',
      description: 'Try FlyEnv on the platform you use today, with the stack you already know.'
    },
    demo: 'project-environment-switching'
  },
  herd: {
    competitor: 'Laravel Herd',
    hero: {
      eyebrow: 'Laravel Herd alternative',
      title: 'FlyEnv vs Laravel Herd',
      headline: ['Laravel is only part of your stack.'],
      description:
        'Keep the Laravel workflow you love. Manage PHP, frontend runtimes, backend services, databases and other projects from one native workspace — on macOS, Windows and Linux.',
      diagram: {
        title: 'One workspace, more than Laravel',
        tag: 'PROJECTS',
        projects: [
          {
            name: 'Laravel application',
            tag: 'WEB',
            chips: [
              ['PHP', null],
              ['Nginx', 'green'],
              ['MySQL', 'purple'],
              ['Redis', null]
            ]
          },
          {
            name: 'Frontend',
            tag: 'UI',
            chips: [
              ['Node.js', null],
              ['Vue / React', 'green']
            ]
          },
          {
            name: 'Python API',
            tag: 'SERVICE',
            chips: [
              ['Python', null],
              ['PostgreSQL', 'green']
            ]
          }
        ]
      }
    },
    jump: [
      {
        label: 'Key differences',
        href: '#comparison'
      },
      {
        label: 'What you gain',
        href: '#advantages'
      },
      {
        label: 'Plugin Marketplace',
        href: '#plugins'
      },
      {
        label: 'Try a project',
        href: '#migration'
      },
      {
        label: 'FAQ',
        href: '#faq'
      }
    ],
    matrix: {
      title: 'Keep Laravel. Grow beyond it.',
      description:
        'Herd is built around a native Laravel and PHP workflow. FlyEnv brings a broader project and service management model to the same local development routine.',
      groups: [
        {
          title: 'Core differences',
          rows: [
            ['Desktop platforms', 'macOS, Windows', 'macOS, Windows, Linux'],
            [
              'Development focus',
              'Laravel and PHP, with Node.js tooling',
              'Multi-language, framework-agnostic workspace'
            ],
            [
              'Runtime settings',
              'Per-site PHP and Node.js versions',
              'Project-level runtimes across supported languages'
            ],
            [
              'Managing services',
              'Managed services available in Herd Pro',
              'Install and manage native services as needed'
            ],
            [
              'Project startup',
              'Site and service management',
              'Named Startup Groups for project dependencies'
            ],
            [
              'Workspace expansion',
              'Laravel-oriented tooling and integrations',
              'Plugin Marketplace + AI Memory + MCP'
            ]
          ]
        },
        {
          title: 'Additional context',
          rows: [
            ['Local sites & HTTPS', 'Available', 'Available'],
            ['Databases and caches', 'Managed services in Pro', 'Native database and cache modules']
          ]
        }
      ],
      sources: [
        {
          label: 'Laravel Herd',
          href: 'https://herd.laravel.com/'
        },
        {
          label: 'Herd for Windows',
          href: 'https://herd.laravel.com/windows'
        },
        {
          label: 'FlyEnv',
          href: '/'
        }
      ],
      note: true
    },
    advantages: {
      title: 'One workspace for the whole application.',
      features: [
        {
          label: '01 / Beyond PHP',
          title: 'Your Laravel app is not always the whole system.',
          description:
            'Run the PHP backend, the frontend toolchain and a separate Python or Java service in the same management workspace. Keep each project’s runtime settings explicit.',
          link: {
            label: 'Explore runtimes →',
            href: '/features/per-project-runtimes'
          },
          diagram: {
            title: 'Application architecture',
            tag: 'PROJECTS',
            projects: [
              {
                name: 'Laravel backend',
                tag: 'PHP',
                chips: [
                  ['PHP 8.x', null],
                  ['MySQL', 'green'],
                  ['Redis', 'purple']
                ]
              },
              {
                name: 'Frontend',
                tag: 'NODE',
                chips: [
                  ['Node.js', null],
                  ['Vite', 'green']
                ]
              },
              {
                name: 'Analytics API',
                tag: 'PYTHON',
                chips: [
                  ['Python', null],
                  ['PostgreSQL', 'green']
                ]
              }
            ]
          }
        },
        {
          label: '02 / Project startup',
          title: 'Bring the backend dependencies up together.',
          description:
            'Use Startup Groups to start installed services such as the web server, PHP and Redis together. Run project-specific commands from the project’s own environment.',
          link: {
            label: 'Explore Startup Groups →',
            href: '/features/startup-groups'
          },
          diagram: {
            title: 'Startup Groups',
            tag: 'ONE CLICK',
            group: {
              name: 'Laravel development',
              services: ['Nginx', 'PHP-FPM', 'MySQL', 'Redis']
            }
          }
        },
        {
          label: '03 / Local development',
          title: 'Give every service a place in your workflow.',
          description:
            'Use local domains, HTTPS and reverse proxy configurations to bring web and API projects together without changing how you write Laravel code.',
          link: {
            label: 'Explore local projects →',
            href: '/features/local-sites-https'
          },
          diagram: {
            title: 'Local application endpoints',
            tag: 'PROJECTS',
            projects: [
              {
                name: 'app.test',
                tag: 'HTTPS',
                chips: [
                  ['Laravel', null],
                  ['Nginx', 'green']
                ]
              },
              {
                name: 'api.test',
                tag: 'HTTPS',
                chips: [
                  ['Reverse proxy', null],
                  ['Python API', 'green']
                ]
              },
              {
                name: 'admin.test',
                tag: 'HTTPS',
                chips: [['Node.js', null]]
              }
            ]
          }
        }
      ]
    },
    plugins: {
      eyebrow: 'Plugin Marketplace · Beyond Laravel',
      title: 'Extend your workspace as the application evolves.',
      description:
        'Add search, event streaming or local AI capabilities when the project calls for them. Keep the modules you need, rather than changing development tools for each new service.',
      heading: 'Extend your workspace',
      items: [
        ['OS', 'OpenSearch'],
        ['K', 'Kafka'],
        ['AI', 'AI Memory'],
        ['SQL', 'SQL Server']
      ]
    },
    migration: {
      title: 'Try your existing Laravel application in FlyEnv.',
      description:
        'Keep your original environment while you test a separate setup. Start with one project, not a full migration.',
      steps: [
        {
          title: 'Keep your original environment',
          description:
            'Back up source, .env and database data. Record PHP, Node and service versions.'
        },
        {
          title: 'Install compatible runtimes and services',
          description: 'Select PHP, a web server, your database, and Redis if the project uses it.'
        },
        {
          title: 'Configure the site',
          description:
            'Point the document root at public/, restore a test database and adjust .env for local endpoints.'
        },
        {
          title: 'Run and verify the project',
          description:
            'Run Composer and frontend commands, then test the application and create a Startup Group for managed services.'
        }
      ]
    },
    faq: [
      {
        question: 'Is FlyEnv a Laravel Herd alternative for Linux?',
        answer:
          'FlyEnv runs on Linux as well as macOS and Windows. Choose the runtime and service versions available for your operating system.'
      },
      {
        question: 'Can I use my existing Laravel code?',
        answer:
          'Yes. The project remains a Laravel application. Configure its local site, dependencies and database connection for the new environment.'
      },
      {
        question: 'Does FlyEnv support multiple PHP versions?',
        answer:
          'Yes. FlyEnv supports multiple versions and per-project runtime settings; availability depends on platform and package.'
      },
      {
        question: 'Does FlyEnv support frontend and non-PHP projects?',
        answer:
          'Yes. It manages supported runtimes such as Node.js, Python, Java and Go, along with local services.'
      },
      {
        question: 'Do I need a Pro license?',
        answer:
          'Start with the free edition. Certain features and installing or updating plugins require an active license; see the license page.'
      }
    ],
    download: {
      title: 'Keep Laravel. Bring the rest of your stack along.',
      description: 'From scattered tools to one workspace.'
    },
    demo: 'multiple-php-versions'
  },
  xampp: {
    competitor: 'XAMPP',
    hero: {
      eyebrow: 'XAMPP alternative',
      title: 'FlyEnv vs XAMPP',
      headline: ['Beyond Apache, PHP and MariaDB.'],
      description:
        'Build the PHP environment each project actually needs. Choose your web server, runtime versions and native services independently, then manage them together in FlyEnv.',
      diagram: {
        title: 'Build your own PHP stack',
        tag: 'PROJECTS',
        projects: [
          {
            name: 'Web server',
            tag: 'CHOOSE',
            chips: [
              ['Apache', null],
              ['Nginx', 'green'],
              ['Caddy', 'purple']
            ]
          },
          {
            name: 'Runtime',
            tag: 'PER PROJECT',
            chips: [
              ['PHP 8.x', null],
              ['PHP extensions', 'green']
            ]
          },
          {
            name: 'Services',
            tag: 'ON DEMAND',
            chips: [
              ['MySQL', null],
              ['MariaDB', 'green'],
              ['Redis', 'purple'],
              ['Mailpit', null]
            ]
          }
        ]
      }
    },
    jump: [
      {
        label: 'Key differences',
        href: '#comparison'
      },
      {
        label: 'What you gain',
        href: '#advantages'
      },
      {
        label: 'Plugin Marketplace',
        href: '#plugins'
      },
      {
        label: 'Try a project',
        href: '#migration'
      },
      {
        label: 'FAQ',
        href: '#faq'
      }
    ],
    matrix: {
      title: 'Move from a bundled stack to a modular workspace.',
      description:
        'XAMPP makes a classic PHP stack easy to install. FlyEnv gives you more control over which components are installed, which versions your projects use and how your local environment evolves.',
      groups: [
        {
          title: 'Core differences',
          rows: [
            [
              'Installation model',
              'Prepackaged web stack',
              'Choose individual native modules and versions'
            ],
            ['Web servers', 'Apache-centered distribution', 'Apache, Nginx or Caddy'],
            [
              'PHP versions',
              'PHP version tied to selected distribution',
              'Manage multiple installed PHP versions'
            ],
            [
              'PHP extensions',
              'Edit configuration and install compatible extensions',
              'Extension management for supported PHP packages'
            ],
            [
              'Project environments',
              'Shared stack with manual configuration options',
              'Project-level runtime settings and local site management'
            ],
            [
              'Additional services',
              'Bundled tools vary by release',
              'Databases, caches, mail testing and optional plugins'
            ]
          ]
        },
        {
          title: 'Additional context',
          rows: [
            ['Desktop platforms', 'Windows, macOS, Linux', 'Windows, macOS, Linux'],
            [
              'Local database',
              'MariaDB in current packages',
              'MySQL, MariaDB and other supported databases'
            ]
          ]
        }
      ],
      sources: [
        {
          label: 'Apache Friends',
          href: 'https://www.apachefriends.org/'
        },
        {
          label: 'XAMPP packages',
          href: 'https://www.apachefriends.org/download.html'
        },
        {
          label: 'FlyEnv features',
          href: '/features'
        }
      ],
      note: true
    },
    advantages: {
      title: 'Build the PHP stack around your projects.',
      features: [
        {
          label: '01 / Runtime choice',
          title: 'Use the PHP version your project needs.',
          description:
            'Keep existing projects on compatible PHP versions while starting new projects on newer releases. Configure the corresponding PHP service and extensions.',
          link: {
            label: 'Explore PHP management →',
            href: '/features/php'
          },
          diagram: {
            title: 'PHP environments',
            tag: 'PROJECTS',
            projects: [
              {
                name: 'New application',
                tag: 'PHP 8.x',
                chips: [
                  ['PHP', null],
                  ['PDO', 'green'],
                  ['Nginx', 'purple']
                ]
              },
              {
                name: 'Existing CMS',
                tag: 'COMPATIBLE PHP',
                chips: [
                  ['PHP', null],
                  ['MySQL', 'green'],
                  ['Apache', 'purple']
                ]
              }
            ]
          }
        },
        {
          label: '02 / Sites & HTTPS',
          title: 'Give each project its own local address.',
          description:
            'Point a local site at its document root, select the supported server configuration and set up HTTPS. Avoid treating a single htdocs folder as the center of every project.',
          link: {
            label: 'Explore site setup →',
            href: '/guide/deploy-php-projects-without-docker'
          },
          diagram: {
            title: 'Local site manager',
            tag: 'PROJECTS',
            projects: [
              {
                name: 'shop.test',
                tag: 'HTTPS',
                chips: [
                  ['Nginx', null],
                  ['PHP', 'green']
                ]
              },
              {
                name: 'blog.test',
                tag: 'HTTPS',
                chips: [
                  ['Apache', null],
                  ['PHP', 'green']
                ]
              },
              {
                name: 'api.test',
                tag: 'HTTPS',
                chips: [['Reverse proxy', null]]
              }
            ]
          }
        },
        {
          label: '03 / Native services',
          title: 'Start only the dependencies you need.',
          description:
            'Add a database, cache or mail-testing service when it becomes useful. Group the installed services for a repeatable startup routine.',
          link: {
            label: 'Explore Startup Groups →',
            href: '/features/startup-groups'
          },
          diagram: {
            title: 'Startup Groups',
            tag: 'ONE CLICK',
            group: {
              name: 'PHP development',
              services: ['Nginx', 'PHP-FPM', 'MySQL', 'Mailpit']
            }
          }
        }
      ]
    },
    plugins: {
      eyebrow: 'Plugin Marketplace · A modular PHP environment',
      title: 'Start with PHP. Add the next tool when you need it.',
      description:
        'Use built-in modules for everyday services and extend with optional plugins for search, messaging or additional databases. Keep the workspace focused on your actual projects.',
      heading: 'Extend your workspace',
      items: [
        ['OS', 'OpenSearch'],
        ['K', 'Kafka'],
        ['SQL', 'SQL Server'],
        ['AI', 'AI Memory']
      ]
    },
    migration: {
      title: 'Bring one XAMPP site into FlyEnv.',
      description:
        'Keep your original environment while you test a separate setup. Start with one project, not a full migration.',
      steps: [
        {
          title: 'Back up the site and database',
          description:
            'Copy the project from htdocs or its custom directory; export MariaDB/MySQL data.'
        },
        {
          title: 'Match the required PHP stack',
          description:
            'Install compatible PHP, extensions, a web server and database. Avoid port conflicts with XAMPP.'
        },
        {
          title: 'Create a local site',
          description:
            'Set the document root and database connection, import the test data and enable HTTPS if needed.'
        },
        {
          title: 'Check the application',
          description:
            'Verify routes, uploads and database operations before changing your original setup.'
        }
      ]
    },
    faq: [
      {
        question: 'Is FlyEnv an XAMPP alternative?',
        answer:
          'Yes. FlyEnv offers a native PHP development environment with configurable web servers, PHP versions and databases.'
      },
      {
        question: 'Can I keep Apache and MySQL?',
        answer: 'Yes. Use the supported Apache and MySQL or MariaDB modules that fit your project.'
      },
      {
        question: 'Can I use phpMyAdmin?',
        answer:
          'Yes. The MySQL module can set up phpmyadmin.test, or you can run a compatible phpMyAdmin installation as a local PHP site.'
      },
      {
        question: 'Can I run XAMPP and FlyEnv on the same machine?',
        answer:
          'You can keep both installed. Avoid conflicts between web server and database ports, domains and paths.'
      },
      {
        question: 'Does FlyEnv require containers?',
        answer: 'No. FlyEnv manages native local services directly on supported systems.'
      }
    ],
    download: {
      title: 'Make your PHP environment fit your projects.',
      description: 'From scattered tools to one workspace.'
    },
    demo: 'multiple-php-versions'
  },
  mamp: {
    competitor: 'MAMP / MAMP PRO',
    hero: {
      eyebrow: 'MAMP / MAMP PRO alternative',
      title: 'FlyEnv vs MAMP / MAMP PRO',
      headline: ['More than a local web server.'],
      description:
        'Manage your PHP and WordPress sites, frontend projects, databases and background services from one native development workspace. FlyEnv grows with the way you build applications.',
      diagram: {
        title: 'Your development workspace',
        tag: 'PROJECTS',
        projects: [
          {
            name: 'WordPress site',
            tag: 'WEB',
            chips: [
              ['PHP', null],
              ['MySQL', 'green'],
              ['HTTPS', 'purple']
            ]
          },
          {
            name: 'Headless frontend',
            tag: 'APP',
            chips: [
              ['Node.js', null],
              ['Vite', 'green']
            ]
          },
          {
            name: 'API & background jobs',
            tag: 'SERVICES',
            chips: [
              ['Python', null],
              ['PostgreSQL', 'green'],
              ['Redis', 'purple'],
              ['Mailpit', null]
            ]
          }
        ]
      }
    },
    jump: [
      {
        label: 'Key differences',
        href: '#comparison'
      },
      {
        label: 'What you gain',
        href: '#advantages'
      },
      {
        label: 'Plugin Marketplace',
        href: '#plugins'
      },
      {
        label: 'Try a project',
        href: '#migration'
      },
      {
        label: 'FAQ',
        href: '#faq'
      }
    ],
    matrix: {
      title: 'From local websites to complete project environments.',
      description:
        'MAMP provides a familiar local server environment, and MAMP PRO adds advanced site management. FlyEnv is built around a broader set of native runtimes, project dependencies and optional modules.',
      groups: [
        {
          title: 'Core differences',
          rows: [
            ['Desktop platforms', 'macOS, Windows', 'macOS, Windows, Linux'],
            [
              'Primary workflow',
              'Local web development and site management',
              'Sites, runtimes and project dependencies in one app'
            ],
            [
              'PHP versions',
              'Switch bundled PHP versions. PRO adds per-site versions.',
              'Multiple PHP versions and project-level settings'
            ],
            [
              'Runtime scope',
              'PHP; additional language support varies by edition/platform',
              'PHP, Node.js, Python, Java, Go and more'
            ],
            [
              'Service management',
              'Web and database stack; options vary by edition',
              'Native web servers, databases, caches and other modules'
            ],
            [
              'Project startup',
              'Server and site controls',
              'Named Startup Groups for project dependencies'
            ]
          ]
        },
        {
          title: 'Additional context',
          rows: [
            [
              'Workspace extension',
              'Features depend on edition',
              'Optional plugins and local AI tools'
            ],
            ['Web servers', 'Apache, Nginx', 'Apache, Nginx, Caddy']
          ]
        }
      ],
      sources: [
        {
          label: 'MAMP for macOS',
          href: 'https://www.mamp.info/en/mac/'
        },
        {
          label: 'MAMP documentation',
          href: 'https://documentation.mamp.info/en/'
        },
        {
          label: 'FlyEnv features',
          href: '/features'
        }
      ],
      note: true
    },
    advantages: {
      title: 'A workspace that goes beyond your sites.',
      features: [
        {
          label: '01 / Local sites',
          title: 'Keep your website workflow familiar.',
          description:
            'Run PHP and WordPress projects with a chosen web server, database and site configuration. Use local domains and HTTPS for day-to-day development.',
          link: {
            label: 'Explore PHP site setup →',
            href: '/guide/deploy-php-projects-without-docker'
          },
          diagram: {
            title: 'Your local sites',
            tag: 'PROJECTS',
            projects: [
              {
                name: 'wordpress.test',
                tag: 'SITE',
                chips: [
                  ['PHP', null],
                  ['MySQL', 'green'],
                  ['HTTPS', 'purple']
                ]
              },
              {
                name: 'client.test',
                tag: 'SITE',
                chips: [
                  ['PHP', null],
                  ['Nginx', 'green'],
                  ['HTTPS', 'purple']
                ]
              }
            ]
          }
        },
        {
          label: '02 / Multi-runtime projects',
          title: 'Add a frontend or API without adding another manager.',
          description:
            'Use the same app for supported Node.js, Python and other runtimes when your website becomes a larger application. Project settings keep runtime requirements visible.',
          link: {
            label: 'Explore runtime management →',
            href: '/features/per-project-runtimes'
          },
          diagram: {
            title: 'Headless website',
            tag: 'PROJECTS',
            projects: [
              {
                name: 'CMS',
                tag: 'PHP',
                chips: [
                  ['WordPress', null],
                  ['MySQL', 'green']
                ]
              },
              {
                name: 'Frontend',
                tag: 'NODE',
                chips: [
                  ['Node.js', null],
                  ['Vite', 'green']
                ]
              },
              {
                name: 'API',
                tag: 'PYTHON',
                chips: [
                  ['Python', null],
                  ['PostgreSQL', 'green']
                ]
              }
            ]
          }
        },
        {
          label: '03 / Project dependencies',
          title: 'Manage the services behind the website.',
          description:
            'Use native database, cache and mail-testing modules; group the managed services that belong to a project for quick startup.',
          link: {
            label: 'Explore Startup Groups →',
            href: '/features/startup-groups'
          },
          diagram: {
            title: 'Startup Groups',
            tag: 'ONE CLICK',
            group: {
              name: 'Client website',
              services: ['Nginx', 'PHP-FPM', 'MySQL', 'Redis', 'Mailpit']
            }
          }
        }
      ]
    },
    plugins: {
      eyebrow: 'Plugin Marketplace · Room for more',
      title: 'Your next project may need more than a web server.',
      description:
        'Expand a website-focused setup with additional database, search, messaging and AI tools. The plugin system keeps optional capabilities separate from the everyday workspace.',
      heading: 'Extend your workspace',
      items: [
        ['SQL', 'SQL Server'],
        ['OS', 'OpenSearch'],
        ['K', 'Kafka'],
        ['AI', 'AI Memory']
      ]
    },
    migration: {
      title: 'Try a MAMP website in FlyEnv.',
      description:
        'Keep your original environment while you test a separate setup. Start with one project, not a full migration.',
      steps: [
        {
          title: 'Preserve your site and database',
          description:
            'Back up the document root, database and host settings; record the PHP version.'
        },
        {
          title: 'Choose compatible components',
          description:
            'Install the PHP version, server and database you need. Keep the original MAMP setup intact.'
        },
        {
          title: 'Recreate the local site',
          description:
            'Configure the domain, document root and HTTPS; restore the database and update local settings.'
        },
        {
          title: 'Verify and extend',
          description:
            'Test the site first. Add frontend tools, caching or mail testing only if the project needs them.'
        }
      ]
    },
    faq: [
      {
        question: 'Is FlyEnv an alternative to MAMP on macOS?',
        answer: 'Yes. FlyEnv supports native local development on macOS, Windows and Linux.'
      },
      {
        question: 'Can I run WordPress locally?',
        answer:
          'Yes. Configure a compatible PHP web server and database, then install or restore your WordPress site.'
      },
      {
        question: 'Can I run different PHP versions for different projects?',
        answer:
          'FlyEnv provides multiple installed PHP versions and project-level runtime settings; check platform availability.'
      },
      {
        question: 'Can I move my existing MAMP site?',
        answer:
          'Keep a backup of the project and database, recreate the local site and verify settings before changing the old environment.'
      },
      {
        question: 'Can FlyEnv manage Node.js and other services?',
        answer:
          'Yes. Install supported runtimes and services on demand, and extend the workspace with optional plugins.'
      }
    ],
    download: {
      title: 'Go beyond your local web server.',
      description: 'From scattered tools to one workspace.'
    },
    demo: 'caddy-php-mysql'
  },
  docker: {
    competitor: 'Docker',
    hero: {
      eyebrow: 'Docker alternative',
      title: 'FlyEnv vs Docker',
      headline: ['Develop natively. Containerize when you need to.'],
      description:
        'Run supported local runtimes and services directly on your computer. Use FlyEnv for fast-to-configure day-to-day development, and keep Docker for container-based delivery, isolation and reproducible team environments.',
      diagram: {
        title: 'Choose the right development model',
        tag: 'WORKFLOW',
        projects: [
          {
            name: 'FlyEnv · native local workflow',
            tag: 'HOST',
            chips: [
              ['Your code', null],
              ['Native runtime', 'green'],
              ['Local DB', 'purple']
            ]
          },
          {
            name: 'Docker · container workflow',
            tag: 'CONTAINERS',
            chips: [
              ['Image', null],
              ['Container', 'green'],
              ['Compose', 'purple']
            ]
          }
        ],
        foot: 'Different approaches · both can coexist'
      }
    },
    jump: [
      {
        label: 'Key differences',
        href: '#comparison'
      },
      {
        label: 'What you gain',
        href: '#advantages'
      },
      {
        label: 'Plugin Marketplace',
        href: '#plugins'
      },
      {
        label: 'Try a project',
        href: '#migration'
      },
      {
        label: 'FAQ',
        href: '#faq'
      }
    ],
    matrix: {
      title: 'Native development is a choice, not a compromise.',
      description:
        'Docker packages applications and services into containers. FlyEnv manages native local services and runtimes directly. The useful comparison is which workflow suits the task, not which tool replaces the other.',
      groups: [
        {
          title: 'Core differences',
          rows: [
            [
              'Execution model',
              'Containerized processes; Docker Desktop manages the environment',
              'Native local processes on supported operating systems'
            ],
            [
              'Project definition',
              'Images, Dockerfiles and Compose files',
              'Project-level runtime settings and service groups'
            ],
            [
              'Local runtime access',
              'Run commands in containers or use host tooling',
              'Use installed local runtimes directly'
            ],
            [
              'Service configuration',
              'Container configuration, ports, mounts and volumes',
              'Manage service configuration, logs and ports in a desktop app'
            ],
            [
              'Project startup',
              'Docker Compose and container management',
              'Named Startup Groups for installed services'
            ],
            [
              'Extensibility',
              'Container images and Docker ecosystem',
              'Native modules and optional FlyEnv plugins'
            ]
          ]
        },
        {
          title: 'Additional context',
          rows: [
            [
              'Container isolation',
              'Container isolation is a core capability',
              'Native processes; not a container isolation system'
            ],
            [
              'Deployment portability',
              'Container images and reproducible environments',
              'Local development; use your deployment toolchain separately'
            ]
          ]
        }
      ],
      sources: [
        {
          label: 'Docker Desktop',
          href: 'https://docs.docker.com/desktop/use-desktop/container/'
        },
        {
          label: 'Docker bind mounts',
          href: 'https://docs.docker.com/engine/storage/bind-mounts/'
        },
        {
          label: 'FlyEnv features',
          href: '/features'
        }
      ],
      note: true
    },
    advantages: {
      title: 'A simpler path for native local workflows.',
      features: [
        {
          label: '01 / Native runtimes',
          title: 'Work directly with the tools on your computer.',
          description:
            'For projects that do not require containers, use supported host runtimes and services. Run your normal project commands and access local service configuration without a container workflow.',
          link: {
            label: 'Explore runtime management →',
            href: '/features/per-project-runtimes'
          },
          diagram: {
            title: 'Native development',
            tag: 'WORKFLOW',
            flow: [
              ['Source code', 'Local project folder'],
              ['Runtime', 'PHP / Node.js / Python'],
              ['Services', 'Local database & cache']
            ]
          }
        },
        {
          label: '02 / Startup Groups',
          title: 'Bring the local stack up as a group.',
          description:
            'Use named groups for the installed services your project depends on. This is a native service startup workflow, not a Compose replacement or a container orchestration engine.',
          link: {
            label: 'Explore Startup Groups →',
            href: '/features/startup-groups'
          },
          diagram: {
            title: 'Startup Groups',
            tag: 'ONE CLICK',
            group: {
              name: 'Local application',
              services: ['Nginx', 'PHP-FPM', 'PostgreSQL', 'Redis']
            }
          }
        },
        {
          label: '03 / Hybrid workflow',
          title: 'Keep containers where they add value.',
          description:
            'Develop with native services when that suits the task, then use Docker for containerized testing, reproducible team setup or delivery. Match runtime and dependency versions deliberately.',
          link: {
            label: 'Explore local development →',
            href: '/guide/deploy-nodejs-python-go-without-docker'
          },
          diagram: {
            title: 'A hybrid development workflow',
            tag: 'PROJECTS',
            projects: [
              {
                name: 'Daily development',
                tag: 'FLYENV',
                chips: [
                  ['Native runtimes', null],
                  ['Local services', 'green']
                ]
              },
              {
                name: 'Integration & delivery',
                tag: 'DOCKER',
                chips: [
                  ['Compose', null],
                  ['Images', 'green'],
                  ['CI', 'purple']
                ]
              }
            ]
          }
        }
      ]
    },
    plugins: {
      eyebrow: 'Plugin Marketplace · Native services on demand',
      title: 'Add services without rebuilding your entire local setup.',
      description:
        'Use supported native modules and optional plugins for databases, search, messaging or AI. Keep containers for workloads that depend on their isolation or packaged environment.',
      heading: 'Extend your workspace',
      items: [
        ['OS', 'OpenSearch'],
        ['K', 'Kafka'],
        ['SQL', 'SQL Server'],
        ['AI', 'llama.cpp']
      ]
    },
    migration: {
      title: 'Try native development with one Compose project.',
      description:
        'Keep your original environment while you test a separate setup. Start with one project, not a full migration.',
      steps: [
        {
          title: 'Inspect the Compose configuration',
          description:
            'Record runtime versions, services, exposed ports, volumes and environment variables. Keep your Compose files unchanged.'
        },
        {
          title: 'Choose compatible native services',
          description:
            'Install equivalent supported runtimes and services; leave container-only dependencies in Docker.'
        },
        {
          title: 'Prepare test data and endpoints',
          description:
            'Export/import data safely, configure separate ports and update local-only environment settings.'
        },
        {
          title: 'Validate before adopting',
          description:
            'Run tests and verify the application. Continue using Docker for container-specific testing or deployment.'
        }
      ]
    },
    faq: [
      {
        question: 'Is FlyEnv a complete Docker replacement?',
        answer:
          'No. FlyEnv is a native local development environment, not a container engine. Docker remains valuable for isolation, images and reproducible environments.'
      },
      {
        question: 'Can FlyEnv and Docker run together?',
        answer:
          'Yes. Avoid port conflicts and configure the application to connect to the intended native or containerized service.'
      },
      {
        question: 'Does FlyEnv import Docker Compose files?',
        answer:
          'This workflow does not assume automatic Compose import. Review the configuration and choose compatible local modules manually.'
      },
      {
        question: 'Is native development always faster?',
        answer:
          'No universal performance claim applies. Results depend on the OS, workload, file access and configuration. Test your own project.'
      },
      {
        question: 'Can I still deploy using Docker?',
        answer:
          'Yes. Keep your container build and deployment pipeline. FlyEnv can be used for a separate native development workflow.'
      }
    ],
    download: {
      title: 'Develop natively when it makes sense.',
      description: 'From scattered tools to one workspace.'
    },
    demo: 'native-node-python-go-services'
  }
}

export function getPrototypeComparisonFaqs(slug: PrototypeComparisonSlug, locale: CompareLocale) {
  return prototypeComparisons[slug].faq.map(({ question, answer }) => ({
    question: getComparisonText(question, locale),
    answer: getComparisonText(answer, locale)
  }))
}
