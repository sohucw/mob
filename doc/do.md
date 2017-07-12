##### 压缩cs

css-loader 在webpack2里默认是没有开启压缩的，最后生成的css文件里有很多空格和tab，通过配置 css-loader?minimize参数可以开启压缩输出最小的css。css的压缩实际是是通过cssnano实现的


##### UglifyJsPlugin相关配置项说明
```js
new UglifyJsPlugin({
    // 最紧凑的输出
    beautify: false,
    // 删除所有的注释
    comments: false,
    compress: {
      // 在UglifyJs删除没有用到的代码时不输出警告  
      warnings: false,
      // 删除所有的 `console` 语句
      // 还可以兼容ie浏览器
      drop_console: true,
      // 内嵌定义了但是只用到一次的变量
      collapse_vars: true,
      // 提取出出现多次但是没有定义成变量去引用的静态值
      reduce_vars: true,
    }
})
```

##### 缩小文件搜索范围

 * webpack的resolve.modules配置模块库（通常是指node_modules）所在的位置，在js里出现import 'redux'这样不是相对也不是绝对路径的写法时会去node_modules目录下找。
 * 但是默认的配置会采用向上递归搜索的方式去寻找node_modules，但通常项目目录里只有一个node_modules在项目根目录，为了减少搜索我们直接写明node_modules的全路径：

```js
module.exports = {
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
    }
};
```

* 除此之外webpack配置loader时也可以缩小文件搜索范围。

1. loader的test正则表达式也应该尽可能的简单，比如在你的项目里只有.js文件时就不要把test写成/\.jsx?$/
2. loader使用include命中只需要处理的文件，比如babel-loader的这两个配置:

只对项目目录下src目录里的代码进行babel编译

```js

{
    test: /\.js$/,
    loader: 'babel-loader',
    include: path.resolve(__dirname, 'src')
}
 
```

* 开启 ***babel-loader*** 缓存

babel编译过程很耗时，好在babel-loader提供缓存编译结果选项，在重启webpack时不需要创新编译而是复用缓存结果减少编译流程。babel-loader缓存机制默认是关闭的，打开的配置如下：

```js

module.exports = {
    module: {
         loaders: [{
                test: /\.js$/,
                loader: 'babel-loader?cacheDirectory',
         }]
  }
};

```
* 使用***alias***

resolve.alias 配置路径映射。 发布到npm的库大多数都包含两个目录，一个是放着cmd模块化的lib目录，一个是把所有文件合成一个文件的dist目录，多数的入口文件是指向lib里面下的。 
默认情况下webpack会去读lib目录下的入口文件再去递归加载其它依赖的文件这个过程很耗时，alias配置可以让webpack直接使用dist目录的整体文件减少文件递归解析。配置如下：
```js
module.exports = {
  resolve: {
    alias: {
      'moment': 'moment/min/moment.min.js',
      'react': 'react/dist/react.js',
      'react-dom': 'react-dom/dist/react-dom.js'
    }
  }
};
```

* 使用 noParse

odule.noParse 配置哪些文件可以脱离webpack的解析。 有些库是自成一体不依赖其他库的没有使用模块化的，比如jquey、momentjs、chart.js，要使用它们必须整体全部引入。
 webpack是模块化打包工具完全没有必要去解析这些文件的依赖，因为它们都不依赖其它文件体积也很庞大，要忽略它们配置如下：
 
```js
 module.exports = {
   module: {
     noParse: /node_modules\/(jquey|moment|chart\.js)/
   }
 };
```
 * 除此以外还有很多可以加速的方法：
 1. 使用[happypack](https://github.com/amireh/happypack)多进程并行构建
 2. 使用[DllPlugin](https://github.com/webpack/docs/wiki/list-of-plugins#dllplugin)复用模块
    
 