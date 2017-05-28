import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Prompt } from 'react-router-dom';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBlocking: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.target.reset();
        this.setState({
            isBlocking: false
        });
    }

    handleChange(e) {
        this.setState({
            isBlocking: e.target.value.length > 0
        });
    }

    render() {
        const { isBlocking } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <Prompt when={isBlocking} message={location => (`are ready location ${location.pathname}?`)} />
                <p><input placeholder="please input something... " onChange={this.handleChange} /></p>
                <p><button>submit</button></p>
            </form>
        );
    }
}

const PreventingTransitionsExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">表单</Link></li>
                <li><Link to="/one">页面一</Link></li>
                <li><Link to="/two">页面二</Link></li>
                <hr />
                <Route path="/" exact={true} component={Form} />
                <Route path="/one" render={() => (<h1>页面一</h1>)} />
                <Route path="/two" render={() => (<h1>页面二</h1>)} />
            </ul>
        </div>
    </Router>
);

export default PreventingTransitionsExample;
