import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

function Home() {
    return (
        <p>
            <code> &lt;Switch&gt; </code>会渲染它里面的第一个可以匹配的
            <code> &lt;Route&gt; </code>，而且一个没有<code> path </code>的
            <code> &lt;Route&gt; </code> 会满足任何匹配。
        </p>
    );
}

const WillMatch = () => (
    <p>Hello World!</p>
);

const NotMatch = () => (
    <p>404, page is not found!</p>
);

const NoMatchExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/old-match">Old-Match</Link></li>
                <li><Link to="/will-match">Will-Match</Link></li>
                <li><Link to="/will-not-match">Will-Not-Match</Link></li>
                <li><Link to="/also/will/not/match">Also-Will-Not-Match</Link></li>
            </ul>
            <hr />
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Redirect from="/old-match" to="/will-match" />
                <Route path="/will-match" component={WillMatch} />
                <Route component={NotMatch} />
            </Switch>
        </div>
    </Router>
);

export default NoMatchExample;
