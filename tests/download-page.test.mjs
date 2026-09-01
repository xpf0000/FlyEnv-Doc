import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import test from 'node:test'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8')

test('download page presents a clear, grouped catalogue without unreliable OS recommendations', () => {
  const component = read('docs/components/AppDown/index.vue')
  const linuxIcon = read('docs/public/icons/linux.svg')

  for (const heading of [
    'Choose your download',
    'Windows',
    'macOS',
    'Linux',
    'Not sure which download to choose?',
    'Why trust this download?',
    'Frequently asked questions'
  ]) {
    assert.match(component, new RegExp(heading), `missing ${heading} section`)
  }

  assert.match(component, /grid-cols-1/)
  assert.match(component, /dark:bg-/)
  assert.doesNotMatch(component, /Recommended for your system/)
  assert.doesNotMatch(component, /detectOperatingSystem/)
  assert.doesNotMatch(component, /onMounted/)
  assert.doesNotMatch(component, /Other downloads/)
  assert.doesNotMatch(component, /<style[\s>]/, 'use Tailwind utilities instead of CSS blocks')
  assert.doesNotMatch(component, /style="/, 'avoid inline custom styles')
  assert.match(component, /src="\/icons\/linux\.svg"/)
  for (const fill of ['#020204', '#F5BD0C', '#D99A03', '#604405']) {
    assert.match(linuxIcon, new RegExp(`fill="${fill}"`), `missing Linux color ${fill}`)
  }
})

test('download page keeps every release artifact and localizes visible copy', () => {
  const component = read('docs/components/AppDown/index.vue')

  for (const key of [
    'urls.win',
    'urls.winPortable',
    'urls.macArm',
    'urls.macX86',
    'urls.linuxDebX64',
    'urls.linuxDebArm64',
    'urls.linuxRpmX64',
    'urls.linuxRpmArm64'
  ]) {
    assert.match(component, new RegExp(key.replace('.', '\\.')), `missing ${key}`)
  }

  for (const copy of ['zh-CN', 'id-ID', 'Latest version', '最新版本', 'Versi terbaru']) {
    assert.match(component, new RegExp(copy), `missing localized copy ${copy}`)
  }
  assert.match(component, /can be downloaded and used for core local development without a license/)
  assert.match(component, /许可证即可下载并用于核心本地开发/)
  assert.match(component, /pengembangan lokal inti tanpa lisensi/)
  for (const link of [
    '/guide/about-license',
    '/license',
    '/zh/guide/about-license',
    '/zh/license',
    '/id/guide/about-license',
    '/id/license'
  ]) {
    assert.match(component, new RegExp(link.replaceAll('/', '\\/')), `missing ${link}`)
  }
  for (const copy of [
    'License guide',
    'Buy a license',
    '许可证指南',
    '购买许可证',
    'Panduan lisensi',
    'Beli lisensi'
  ]) {
    assert.match(component, new RegExp(copy), `missing license link label ${copy}`)
  }
})

test('download route metadata remains published for all locales', () => {
  for (const path of ['docs/download.md', 'docs/zh/download.md', 'docs/id/download.md']) {
    const page = read(path)
    assert.match(page, /<AppDown\s*\/>/)
    assert.match(page, /layout:\s*page/)
  }
})

test('download options expose package sizes in rounded megabytes', () => {
  const component = read('docs/components/AppDown/index.vue')

  assert.match(component, /formatSize\(item\.size\)/)
  assert.match(component, /Math\.round\(bytes \/ \(1024 \* 1024\)\)/)
  for (const bytes of [
    144794356, 205357792, 170505055, 180008988, 139648464, 133321620, 119386849, 113632117
  ]) {
    assert.match(component, new RegExp(`size: ${bytes}`), `missing package size ${bytes}`)
  }
})

test('download chooser gives direct operating system to package guidance', () => {
  const component = read('docs/components/AppDown/index.vue')

  assert.match(component, /v-for="hint in copy\.selectionHints"/)
  for (const guidance of [
    'Most Windows users',
    'Windows Installer',
    'Apple Silicon Macs',
    'Intel Macs',
    'Ubuntu/Debian',
    'Fedora/Red Hat/SUSE/CentOS'
  ]) {
    assert.match(component, new RegExp(guidance), `missing direct guidance: ${guidance}`)
  }
  assert.doesNotMatch(component, /Installers set up FlyEnv in the usual way/)
})

test('download signing FAQ includes macOS installers', () => {
  const component = read('docs/components/AppDown/index.vue')

  for (const answer of [
    'macOS installers are also digitally signed',
    'macOS 安装包也已进行数字签名',
    'installer macOS juga ditandatangani secara digital'
  ]) {
    assert.match(component, new RegExp(answer), `missing macOS signing statement: ${answer}`)
  }
})

test('download page links SignPath Foundation in signing details and the signing FAQ', () => {
  const component = read('docs/components/AppDown/index.vue')

  assert.match(component, /signPathFoundation: 'SignPath Foundation'/)
  assert.match(component, /:href="trust\.link\.href"/)
  assert.match(component, /:href="faq\.link\.href"/)
  assert.match(component, /codeSigningDescriptionPrefix/)
  assert.match(component, /faq3AnswerPrefix/)
})
