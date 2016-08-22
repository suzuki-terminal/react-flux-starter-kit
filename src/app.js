import React, { Component } from 'react';
import { render } from 'react-dom';

import './app.css';

class App extends Component {

    render() {
        return (
            <div>
                <h1 className="title">React Flux Starter Kit</h1>
            </div>
        );
    }
}

render(
    <App />,
    document.getElementById('app')
);