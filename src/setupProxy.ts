import { createProxyMiddleware} from 'http-proxy-middleware';
module.exports = function (app: any) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:9527',
            changeOrigin: true,
            pathRewrite: {
                '/api': '',
            }
        })
    )
}