const statusRoute = router => router.get('/status', (ctx) => {
  ctx.body = {
    status: 'ok',
  }
})

module.exports = statusRoute
