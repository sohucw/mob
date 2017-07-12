/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */


import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Item from '../../../components/Item'

import {
   // selectSubreddit,
   // fetchPostsIfNeeded,
   // invalidateSubreddit,
    initDictionaryData
} from '../../../actions'

class Cidian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: 'origin data',
        };
    }
    shouldComponentUpdate(nextProps) {
        return true;
      /*  如果你确定组件的 props 或者 state 的改变不需要重新渲染，可以通过在这个方法里通过返回 false 来阻止组件的重新渲染，
        返回 `false 则不会执行 render 以及后面的 componentWillUpdate，componentDidUpdate 方法。*/

    }
    componentWillUpdate (nextProps,  nextState) {

        /*这个方法和 componentWillMount 类似，在组件接收到了新的 props 或者 state 即将进行重新渲染前，
        componentWillUpdate(object nextProps, object nextState) 会被调用，注意不要在此方面里再去更新 props 或者 state。*/

    }

    componentDidUpdate() {
       /* 这个方法和 componentDidMount 类似，在组件重新被渲染之后，
        componentDidUpdate(object prevProps, object prevState) 会被调用。可以在这里访问并修改 DOM。*/
    }
    componentWillUnmount(){

      /*  每当React使用完一个组件，这个组件必须从 DOM 中卸载后被销毁，此时 componentWillUnmout 会被执行，
        完成所有的清理和销毁工作，在 conponentDidMount 中添加的任务都需要再该方法中撤销，如创建的定时器或事件监听器。*/

    }
    loadData() {
       // this.setState({test:'this new Data'});
     //   this.props.actions(getData(333));
    }
    componentWillMount() {
      //  const { dispatch} = this.props;
        const { dispatch, selectedSubreddit } = this.props
        this.props.dispatch(initDictionaryData());
    }
    componentDidMount() {

    }
    render() {
        const {dictionaryData } = this.props;
        const test = this.state.test;
        return (
            <div className="citao">
                <button onClick={this.loadData.bind(this)}>加载数据</button>
                <Item dictionaryData={dictionaryData}/>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { dictionaryData } = state;
    return {
        dictionaryData
       // selectedSubreddit
    }
};
function mapDispatchToProps(dispatch) {

  //  return {dataOK: dispatch(getData('XXX'))};
  //  return { actions: bindActionCreators(getData, dispatch) };
}
export default connect(mapStateToProps)(Cidian);
