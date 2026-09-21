import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('VitePress passes the Vue compiler to avoid the plugin-vue HMR race', async () => {
  const config = await readFile(new URL('../docs/.vitepress/config.mts', import.meta.url), 'utf8')

  assert.match(config, /import \* as vueCompiler from ['"]vue\/compiler-sfc['"]/)
  assert.match(config, /vue:\s*\{\s*compiler:\s*vueCompiler\s*\}/s)
})
