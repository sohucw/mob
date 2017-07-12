
https://www.zhihu.com/question/19647719


https://bwh1.net/cart.php

### html-webpack-plugin

作用就是生成html文件

原理

将 webpack中`entry`配置的相关入口thunk  和  `extract-text-webpack-plugin`抽取的css样式   插入到该插件提供的`template`或者`templateContent`配置项指定的内容基础上生成一个html文件，

具体插入方式是将样式`link`插入到`head`元素中，`script`插入到`head`或者`body`中。



### 小知识



注意此处的hash 值是指整体编译一次的值，而不是每个文件单独改变编译后的值，[chunkhash] 才是每个chunk自己的hash值

解释一下就是，path指的输出文件要放到磁盘中哪个位置，而publicpath是指浏览器或者webpack dev server从哪里获取一些如图片、chunks等资源。特别是当需要把输出文件放置到另一个域或者CDN上时。因此，在引用文件的时候使用相对路径，浏览器访问的时候会从publicpath开始找。

### 配置项：

title: 用来生成页面的 title 元素

filename: 输出的 HTML 文件名，默认是 index.html, 也可以直接配置带有子目录。

tip:

#### 1: filename配置的html文件目录是相对于webpackConfig.output.path路径而言的，不是相对于当前项目目录结构的

#### 2: 指定生成的html文件内容中的link和script路径是相对于生成目录下的，写路径的时候请写生成目录下的相对路径


template: 模板文件路径，支持加载器，比如 html!./index.html

inject: true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，'head' 将放置到 head 元素中。

favicon: 添加特定的 favicon 路径到输出的 HTML 文件中。

minify: {} | false , 传递 html-minifier 选项给 minify 输出

hash: true | false, 如果为 true, 将添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件，对于解除 cache 很有用。

cache: true | false，如果为 true, 这是默认值，仅仅在文件修改之后才会发布文件。

showErrors: true | false, 如果为 true, 这是默认值，错误信息会写入到 HTML 页面中

chunks: 允许只添加某些块 (比如，仅仅 unit test 块)

chunksSortMode: 允许控制块在添加到页面之前的排序方式，支持的
值：'none' | 'default' | {function}-default:'auto'

excludeChunks: 允许跳过某些块，(比如，跳过单元测试的块)


#### tip
 htmlWebpackPlugin.options
 htmlWebpackPlugin.files



### 开发机资源




### 注意：
* 拥有 sudo 权限
* 机器上有其他资源
* 最好不要重启机器
### 3月9号分享
1: what html
2: chunk
3: inject
 （2个参数）
4: inline (2中实现方式)
5: mul 页面
6： 自定义plugin



谢郁: 移动端css适配
梁栋: 锚点定位&搜索选中
李明: [sortable.js](https://github.com/RubaXa/Sortable) & [chrome devtool](https://leeon.gitbooks.io/devtools/content/learn_basic/overview.html)
钱坤: #!/usr/bin/env node  这一句引来的思考
陈建伟: echarts相关
郭喻楠:
郑佳润:
苏伟荣: 企业hi内容转义处理
苏迪:normalize.css


/Users/baidu/Library/Caches/BaiduMacHi/Share/images/42b681b985dfd4930afb9c976070f01a
2：环境变量 background   css设置背景
background-image-set

3：2x webpack


苏伟荣： js-emoji 标签编码
https://github.com/iamcal/js-emoji


