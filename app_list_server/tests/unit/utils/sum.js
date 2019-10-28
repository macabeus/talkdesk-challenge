const test = require('ava')
const sum = require('../../../src/utils/sum')

test('Utils - sum with empty array', (t) => {
  const result = sum([])
  t.true(result === 0)
})

test('Utils - sum with filled array', (t) => {
  const result = sum([1, 2, 3])
  t.true(result === 6)
})
