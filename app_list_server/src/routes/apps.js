const apps = require('../../assets/apps.json')

const appsRoute = router => router.get('/apps', (ctx) => {
  ctx.body = apps
})

module.exports = appsRoute
