const apps = require('../../assets/apps.json')

const appsRoute = router => router.get('/apps', (ctx) => {
  const { filterByCategory } = ctx.request.query

  const result = (
    filterByCategory
      ? apps.filter(app => app.categories.includes(filterByCategory))
      : apps
  )

  ctx.body = result
})

module.exports = appsRoute
