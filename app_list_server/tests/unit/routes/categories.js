const test = require('ava')
const appsRoute = require('../../../src/routes/categories')
const { mockGetKoaRouter } = require('../../helpers/koa_router')

test('GET /categories', (t) => {
  const route = {}
  const ctx = {}
  appsRoute(mockGetKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/categories' }, 'Should route be "GET /categories"')
  t.true(Array.isArray(ctx.body), 'The body should be an array')
})
