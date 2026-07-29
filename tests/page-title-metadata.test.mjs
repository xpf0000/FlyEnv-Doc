import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const read = (path) => readFileSync(resolve(process.cwd(), path), 'utf8')

const pageTitles = {
  'docs/download.md': 'Download FlyEnv for macOS, Windows & Linux',
  'docs/zh/download.md': '下载 FlyEnv（macOS、Windows 和 Linux）',
  'docs/license.md': 'FlyEnv Personal License',
  'docs/zh/license.md': 'FlyEnv 个人许可证'
}

for (const [path, title] of Object.entries(pageTitles)) {
  test(`${path} declares its route-specific document title`, () => {
    assert.ok(read(path).includes(`title: '${title}'`), `${path} is missing its document title`)
  })
}
