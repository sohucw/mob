/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */

import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
    <Root />,
    document.getElementById('app')
)