const apps = require('../../assets/apps.json')

const appsRoute = router => router.get('/categories', (ctx) => {
  const categoriesSet = new Set(apps.map(app => app.categories).flat())
  const categoriesArray = Array.from(categoriesSet)

  ctx.body = categoriesArray
})

module.exports = appsRoute
