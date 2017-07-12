/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/17.
 */


import React, {Component} from 'react'


export default class Item extends Component {
    render() {
        let {dictionaryData} = this.props;
        dictionaryData = dictionaryData.length? dictionaryData: [];
        console.log('????????????',this.props);
        return (
            <div className="item">
                <div className="clearfix">
                    <span className="fl title">每日一句</span>
                    <span className="line"></span>
                    <span className="fr time">2017.05.17</span>
                </div>
                {dictionaryData.map((item, key) =>
                    <div key={key}>
                        <div>{item.en}</div>
                        <div>{item.zn}</div>
                    </div>

                )}
            </div>

        )
    }
}