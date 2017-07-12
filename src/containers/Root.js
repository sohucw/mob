/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */
import style from '../common/base.css';
import React, { Component } from 'react'
import configureStore from '../store'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
} from 'react-router-dom';

import Layout from './Layout'
const store = configureStore();
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>

                <Router>
                    <Layout/>
                </Router>

            </Provider>
        )
    }
}
