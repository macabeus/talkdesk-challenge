const KoaRouter = require('koa-router')
const appsRoute = require('./apps')
const statusRoute = require('./status')

const router = new KoaRouter()

appsRoute(router)
statusRoute(router)

module.exports = router
