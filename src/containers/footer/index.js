/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */

import React, {Component} from 'react';

import style from './footer.less';
export default class Footer extends  Component {

    render() {
        return (
            <div className="footer">
                <a>给有道词典评分</a>
                |
                <a>满意调查度</a>
                |
                <a>意见反馈</a>
            </div>

        )
    }
}



