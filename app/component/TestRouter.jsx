import React from 'react';
import { BrowserRouter as Router, Route, hashHistory, Link } from 'react-router-dom';

import Home from './Home';
import Me from './Me';
import About from './About';

export default function TestRouter() {
    return (
        <Router history={hashHistory}>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/me/BaoXuebin">Me</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/me/:name" component={Me} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    );
}
