import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(callback) {
        this.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback) {
        this.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};

const Public = () => (<p>公开页面</p>);
const Protected = () => (<p>非公开的页面</p>);
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            RedirectToReferrer: false
        };
        this.login = this.login.bind(this);
    }

    login() {
        fakeAuth.authenticate(() => {
            this.setState({
                RedirectToReferrer: true
            });
        });
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } };
        const { RedirectToReferrer } = this.state;
        if (RedirectToReferrer) {
            return (
                <Redirect to={from} />
            );
        }
        return (
            <div>
                <p>若想访问{from.pathname}, 请先登录</p>
                <button onClick={this.login}>登录</button>
            </div>
        );
    }
}
const propTypes = { location: PropTypes.object };
Login.propTypes = propTypes;

// 非公开页面
const PrivateRoute = ({ component: Component }) => (
    <Route
      render={props => (
            fakeAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        )}
    />
);

export default function AuthRouter() {
    return (
        <Router>
            <div>
                <AuthButton />
                <ul>
                    <li><Link to="/public">公开页面</Link></li>
                    <li><Link to="/protected">非公开页面</Link></li>
                </ul>
                <Route path="/public" component={Public} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/protected" component={Protected} />
            </div>
        </Router>
    );
}

const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome!
            <button onClick={() => { fakeAuth.signout(history.push('/')); }}>登出</button>
        </p>
    ) : (
        <p>请先登录</p>
    )
));
