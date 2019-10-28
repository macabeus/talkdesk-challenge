const test = require('ava')
const appsRoute = require('../../../src/routes/apps')
const { mockGetKoaRouter } = require('../../helpers/koa_router')

test('GET /apps', (t) => {
  const route = {}
  const ctx = {
    request: {
      query: {
        page: 0,
        filterByCategory: null,
      },
    },
  }
  appsRoute(mockGetKoaRouter(route, ctx))

  t.deepEqual(route, { verb: 'get', path: '/apps' }, 'Should route be "GET /apps"')
  t.true(typeof ctx.body.metadata === 'object', 'The body should have metadata')
  t.true(Array.isArray(ctx.body.apps), 'The body should have the apps as an array')
})
