/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// 需要注意的是 新版的 4.X  react-router-dom   原来的老版本的还是 react-router 用法类似不过也有些小坑
import configureStore from '../configureStore';
import Layout from './Layout';
import Main from './main'


const store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/" component={Layout} />
                </Router>
            </Provider>
        )
    }
}

/*
*
*
*  同级别的下面比较包一个 <div>
*  <Router>
 <div>
 <Route path="/" component={Layout} />
 <Route path="/about" component={Main} />
 </div>
 </Router>
*
* */