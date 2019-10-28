const apps = require('../../assets/apps.json')
const { pageSize } = require('../constants.json')
const sum = require('../utils/sum')

const appsRoute = router => router.get('/apps', (ctx) => {
  const { page, filterByCategory } = ctx.request.query

  const appsFiltered = (
    filterByCategory
      ? apps.filter(app => app.categories.includes(filterByCategory))
      : apps
  )

  const sumSubscriptionsPrice = app => sum(app.subscriptions.map(i => i.price))
  const appsSorted = [
    ...appsFiltered,
  ].sort((a, b) => sumSubscriptionsPrice(a) - sumSubscriptionsPrice(b))

  const offset = pageSize * page
  const appsResult = appsSorted.slice(offset, offset + pageSize)

  const pagesCount = Math.ceil(appsSorted.length / pageSize)

  const result = {
    metadata: {
      pagesCount,
    },
    apps: appsResult,
  }

  ctx.body = result
})

module.exports = appsRoute
