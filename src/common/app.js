import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom'

import PropTypes from 'prop-types';


class App extends React.Component {
    render() {
        return <p> Yo, React </p>
    }
}

render(<App />, document.getElementById('app'));