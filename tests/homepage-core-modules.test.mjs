import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function sourceFile(path) {
  return readFileSync(resolve(projectRoot, path), 'utf8')
}

function expectCard(source, category, moduleName, icon, categoryClass = 'shrink-0 select-text') {
  assert.match(
    source,
    new RegExp(
      `<span class="${categoryClass}">${category}</span>\\s*` +
        '<div class="aspect-square flex shrink-0 overflow-hidden items-center justify-center w-full p-4">\\s*' +
        `<img src="../SVG/${icon}.svg" />\\s*` +
        '</div>\\s*' +
        `<span class="shrink-0 select-text">${moduleName}</span>`
    )
  )
}

test('English Core Modules includes ClickHouse as a database', () => {
  expectCard(sourceFile('docs/components/AppModules/index.vue'), 'Database', 'ClickHouse', 'ClickHouse')
})

test('English Core Modules includes Temporal as service governance', () => {
  expectCard(
    sourceFile('docs/components/AppModules/index.vue'),
    'Service Governance',
    'Temporal',
    'Temporal',
    'shrink-0 select-text truncate'
  )
})

test('Chinese Core Modules includes ClickHouse as a database', () => {
  expectCard(sourceFile('docs/components/AppModules/zh.vue'), '数据库', 'ClickHouse', 'ClickHouse')
})

test('Chinese Core Modules includes Temporal as service governance', () => {
  expectCard(
    sourceFile('docs/components/AppModules/zh.vue'),
    '服务治理',
    'Temporal',
    'Temporal',
    'shrink-0 select-text truncate'
  )
})
