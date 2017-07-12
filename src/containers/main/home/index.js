/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */



import React, {Component} from 'react'
import PropTypes from 'prop-types';



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
       // message.info('您选择的日期是: ' + date.toString());
        this.setState({ date });
    }
    render() {
        return (
            <div className="home">
                <h2>欢迎来到有道词典</h2>
            </div>
        )
    }
}