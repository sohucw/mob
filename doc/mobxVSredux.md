####  vs

比如：

> 一个 click 的事件需要经过 action, dispatch, middleware, reducer 才能走完流程
> reducer 里不能直接修改 state，而是每次返回一个新的
> 要区分 container 和 component
> 在container组件里面每次都得connect (代码重复的太多 里要在 connect 里 select 数据， 有性能问题 )
> 发异步请求需要借助 redux-thunk 或 redux-saga

> 其中最重要的一点我觉得 可观察的局部组件状态

```JavaScript

就像普通类一样，你可以通过使用 @observable 装饰器在React组件上引入可观察属性。 这意味着你可以在组件中拥有功能同样强大的本地状态(local state)，
而不需要通过 React 的冗长和强制性的 setState 机制来管理。 响应式状态会被 render 提取调用，但不会调用其它 React 的生命周期方法，
比如 componentShouldUpdate 或 componentWillUpdate。 如果你需要用到这些，只是使用正常的React state 的API就好了。



import {observer} from "mobx-react"
import {observable} from "mobx"

@observer class Timer extends React.Component {
    @observable secondsPassed = 0

    componentWillMount() {
        setInterval(() => {
            this.secondsPassed++
        }, 1000)
    }

    render() {
        return (<span>Seconds passed: { this.secondsPassed } </span> )
    }
})

React.render(<Timer />, document.body)

```
请参见为什么我不再使用 setState 的[三个理由](https://medium.com/@mweststrate/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e)


[周末看看](https://github.com/lmk123)
[分词插件](https://github.com/Selection-Translator)
[如何开发chrome插件](http://www.cnblogs.com/walkingp/archive/2011/03/31/2001628.html)

[台球教程](https://www.youtube.com/watch?v=CHJdl5g_Xjw)


[词霸翻译](https://my.oschina.net/falcon10086/blog/707416)