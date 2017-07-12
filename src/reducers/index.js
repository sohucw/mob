/**
 * @file
 * @author cjw
 * Created by cjw on 17/5/16.
 */

import { combineReducers } from 'redux'
// import { routeReducer } from 'redux-simple-router';
import { routerReducer } from 'react-router-redux'
import {DICTIONARY_DATA } from '../actions'


function dictionaryData(state = [], action) {
    switch (action.type) {
        case DICTIONARY_DATA:
            return action.json;
        break;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    routing: routerReducer,
    dictionaryData
})

export default rootReducer