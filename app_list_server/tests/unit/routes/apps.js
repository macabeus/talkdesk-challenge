const test = require('ava')
const appsRoute = require('../../../src/routes/apps')
const { mockGetKoaRouter } = require('../../helpers/koa_router')

test('GET /apps', (t) => {
  const route = {}
  const ctx = {}
  appsRoute(mockGetKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/apps' }, 'Should route be "GET /apps"')
  t.true(Array.isArray(ctx.body), 'The body should be an array')
})
