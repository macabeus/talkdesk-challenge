const apps = require('../../assets/apps.json')
const { pageSize } = require('../constants.json')
const sum = require('../utils/sum')

const appsRoute = router => router.get('/apps', (ctx) => {
  const { page, filterByCategory, filterByName } = ctx.request.query

  const filterByCategoryPredicate = (
    filterByCategory
      ? app => app.categories.includes(filterByCategory)
      : () => true
  )

  const filterByNamePredicate = (
    filterByName
      ? app => app.name.includes(filterByName)
      : () => true
  )

  const appsFiltered = apps
    .filter(filterByCategoryPredicate)
    .filter(filterByNamePredicate)

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
