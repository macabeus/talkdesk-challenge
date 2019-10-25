const mockGetKoaRouter = (route, ctx) => ({
  get: async (path, callback) => {
    route.verb = 'get'
    route.path = path

    await callback(ctx)
  },
})

module.exports = { mockGetKoaRouter }
