const Koa = require('koa')
const cors = require('@koa/cors')
const router = require('./routes')

const app = new Koa()

app
  .use(cors())
  .use(router.routes())
  .listen(3000)
