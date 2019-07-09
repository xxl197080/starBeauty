//  测试代理接口
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy("/mao", {
    target: 'https://market.douban.com/',
    secure: false,
    changeOrigin: true,
    pathRewrite: {
    "^/mao": ""
    }
    }));
};
