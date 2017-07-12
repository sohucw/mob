/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */

import style from './main/main.less';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import appRoutes from './routers'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';




import Footer from './footer'
import Header from './header'




export  default class Layout extends Component {
    constructor(props) {
        super(props);
    }
    checkEnterAbout() {
        alert(3);
    }
    render() {
        return (

            <div className="layout">
                <div>
                    <Header/>
                </div>
                <div>
                    <div className="main">
                        {appRoutes.map((route, index) => (
                            <Route key={index} exact={route.exact}
                                   path={route.path}  component={route.component} />
                        ))}
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
};
