/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Search extends Component {
    render() {
        return (
            <div className="search ">
                <input placeholder="搜索单词"/>
            </div>
        )
    }
}

/*
 Search.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}*/
