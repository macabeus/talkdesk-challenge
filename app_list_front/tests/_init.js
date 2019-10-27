require('@babel/register')({
  ignore: ['node_modules/*', 'test/*'],
})
const browserEnv = require('browser-env')
const requireHacker = require('require-hacker')

requireHacker.hook('svg', () => 'export default () => null')
requireHacker.hook('css', () => `
  export default new Proxy({}, {
    get: (obj, prop) => prop
  })
`)

browserEnv()
