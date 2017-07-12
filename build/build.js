var path = require('path');
var webpack = require("webpack");
var merge = require('webpack-merge');
var webpackBase = require("./webpack.config.js");

//console.log('2222',path.resolve(__dirname, '../dist'));  //这个地方一个坑

rm('-rf', 'dist');
var outPath = path.resolve(__dirname, '../dist');


webpackBase.plugins.push( new webpack.DefinePlugin({
    "process.env": {
        NODE_ENV: JSON.stringify("production")
    }
}));
var webpackConfig = merge(webpackBase, {
    output: {
        path: outPath,
        filename: 'js/[name]-[chunkhash:3].js',
        publicPath: ''
    },
})

webpack(webpackConfig, function (err, status) {
    if (err) throw err
    process.stdout.write(status.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')
});

//module.exports = webpackConfig;