/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */


import React, {Component} from 'react'
require('./header.less');

import Search from '../../components/header/Search'
import Tab from '../../components/header/Tab'

export default class Header extends Component {
    render() {
        return (
            <div className="header clearfix">
                <div className="logo"></div>
                <Search/>
                <Tab></Tab>
            </div>
        )
    }
}