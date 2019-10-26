const KoaRouter = require('koa-router')
const appsRoute = require('./apps')
const categoriesRoute = require('./categories')
const statusRoute = require('./status')

const router = new KoaRouter()

appsRoute(router)
categoriesRoute(router)
statusRoute(router)

module.exports = router
