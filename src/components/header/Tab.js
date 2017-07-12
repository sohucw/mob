/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default class Tab extends Component {
    render() {
        return (
            <ul className=" tab clearfix" >
                   <li>
                       <Link to="/cidian">

                           <div className="image">
                               <span>asasd</span>
                           </div>
                           <div className="text">
                               <span>词典</span>
                           </div>

                       </Link>

                   </li>
                   <li>
                       <Link to="liju">
                           <div className="image">
                               <span>asasd</span>
                           </div>
                           <div className="text">
                               <span>例句</span>
                           </div>

                       </Link>

                   </li>
                   <li>
                       <div className="image">
                           <span>asasd</span>
                       </div>
                       <div className="text">
                           <span>百科</span>
                       </div>

                   </li>
                   <li>
                       <div className="image">
                           <span>asasd</span>
                       </div>
                       <div className="text">
                           <span>翻译</span>
                       </div>

                   </li>
                   <li>
                       <div className="image">
                           <span>asasd</span>
                       </div>
                       <div className="text">
                           <span>单词本</span>
                       </div>

                   </li>
               </ul>

        )
    }
}