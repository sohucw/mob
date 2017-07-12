require('shelljs/global')
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

var postcssImport = require('postcss-import');

module.exports = {
    entry: {
        b: './src/index.js'
     //   vendor: ['jquery'] //第三方库
    },
    output: {
        path: path.resolve(__dirname + '../dist'),
        filename: 'js/[name]-[chunkhash:3].js',
      //  chunkFilename: "[id].chunk.js"
        publicPath: '/'
    },
 /*   externals:{
        'jquery':'jQuery',
        '$':'window.jquery',
    },*/
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                enforce: 'pre'
            },
            // {test:/\.css$/,loader:'style-loader!css-loader'},
          //  { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
            {
                test: /\.(less|css)$/,
                loader:ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                          //  {loader:'css-loader?minimize'}, //压缩css
                            {loader:'css-loader'},
                            {loader: 'less-loader'} ,
                            {loader: 'postcss-loader'}
                        ] }
                )
            },

            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8192&name=imgs/[name]-[hash].[ext]'
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }

           /* {
                test: require.resolve('jquery'),  // 此loader配置项的目标是NPM中的jquery
                loader: 'expose?$!expose?jQuery', //总有那么些需求是只能用<script>来加载的。   先把jQuery对象声明成为全局变量`jQuery`，再通过管道进一步又声明成为全局变量`$`
            }*/
        ]
    },
    plugins: [
        new HtmlWebpackInlineSourcePlugin(),
        new htmlWebpackPlugin({
            filename:'index.html',
            template: './src/page1.html',
           // inject: 'head',
            title: '有道词典',
          // inlineSource: '.(js|css)$', // embed all javascript and css inline
            date: new Date().getTime(),
           // chunks: ['a','main']
        }),

        // css抽取
        new ExtractTextPlugin({filename: "css/[name]-[hash:1].css"}), // 分开的css.

       // new ExtractTextPlugin({filename: "css/main.css", allChunks:true}), // 都合并到 一个 main.css中.

        /*

        ExtractTextPlugin没有这个功能呢再说，ExtractTextPlugin本来就是针对各个页面独有的CSS，
        根本就不应该打包到同一个CSS文件里（因为怕CSS冲突了）
        有需要公用的CSS，可以配合CommonsChunkPlugin，有多个入口调用的话就会被归到公共的chunk里，
        继而被ExtractTextPlugin打包到公共的CSS文件里的了

        */



        new webpack.ProvidePlugin({
            $: 'jquery',
          //  jQuery: 'jquery',
           // 'window.jQuery': 'jquery',
          //  'window.$': 'jquery',
        }), //这个可以使jquery变成全局变量，妮不用在自己文件require('jquery')了

        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            filename: "js/common/[name].bundle.js",
           // chunks:['a, main']
        }),  // 默认会把所有入口节点的公共代码提取出来,生成一个common.js



        // 压缩代码我们可以使用webpack的内置插件UglifyJsPlugin来做，它既可以压缩js代码也可以压缩css代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        /*new webpack.LoaderOptionsPlugin({
             test: /\.css$/, // may apply this only for some modules
            postcss: [autoprefixer({ browsers: ['last 2 versions'] })]
        })*/

       /*
        // webpack2因为在项目根目录下新建了postcss.config.js文件此处的配置可以省略
        new webpack.LoaderOptionsPlugin({
            options: {
                /!*postcss: [
                    require("autoprefixer")({
                        browsers:["last 5 versions"]
                    })
                ]*!/
                postcss: function(webpack) {
                    return [
                        postcssImport({
                            addDependencyTo: webpack
                        }),
                        require('autoprefixer')({
                            browsers: ["last 5 versions"]
                        })
                    ]
                }
            }

        }),*/


    ]
}

