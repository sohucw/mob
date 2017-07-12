var path = require("path");
var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");

const webpackDevMiddleware =require('webpack-dev-middleware');
const webpackHotMiddleware =require('webpack-hot-middleware');

var webpackCfg = require("./webpack.config.dev.js");
var compiler = webpack(webpackCfg);

var port = 9000;
var ip = '127.0.0.1';

//init server
var app = new webpackDevServer(compiler, {
    historyApiFallback: true,
    //注意此处publicPath必填
    publicPath: webpackCfg.output.publicPath,
    //HMR配置
  //  hot:true,   //加了hot:ture页面就不自动刷新了
    stats: { colors: true },
    inline: true
  //  contentBase: '../src'
});
//app.use(webpackHotMiddleware(compiler));
app.listen(port, ip, function (err) {
    if (err) {
        console.log(err);
    }
});

console.log('Listening at ' + ip + ':' + port);