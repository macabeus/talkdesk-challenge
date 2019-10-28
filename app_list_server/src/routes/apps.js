const apps = require('../../assets/apps.json')
const { pageSize } = require('../constants.json')

const appsRoute = router => router.get('/apps', (ctx) => {
  const { page, filterByCategory } = ctx.request.query

  const appsFiltered = (
    filterByCategory
      ? apps.filter(app => app.categories.includes(filterByCategory))
      : apps
  )

  const offset = pageSize * page
  const appsResult = appsFiltered.slice(offset, offset + pageSize)

  const pagesCount = Math.ceil(appsFiltered.length / pageSize)

  const result = {
    metadata: {
      pagesCount,
    },
    apps: appsResult,
  }

  ctx.body = result
})

module.exports = appsRoute
