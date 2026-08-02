import assert from 'node:assert/strict'
import test from 'node:test'
import { resolveDateRange } from '../scripts/youtube-analytics/report-lib.mjs'

test('defaults to the previous 90 complete UTC days', () => {
  assert.deepEqual(
    resolveDateRange({ now: new Date('2026-08-02T12:00:00.000Z') }),
    { startDate: '2026-05-04', endDate: '2026-08-01' }
  )
})
