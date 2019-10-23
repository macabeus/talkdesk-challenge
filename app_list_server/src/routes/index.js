const KoaRouter = require('koa-router')
const statusRoute = require('./status')

const router = new KoaRouter()

statusRoute(router)

module.exports = router
