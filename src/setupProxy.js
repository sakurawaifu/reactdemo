const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://192.168.75.244:7015',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    })
  )
}
