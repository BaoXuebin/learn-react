import React, { PropTypes } from 'react';

import '../style/login.css';

const propTypes = {
    error: PropTypes.string,
    login: PropTypes.func.isRequired
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.login(this.name.value);
    }

    render() {
        return (
            <div>
                <div className="page-header text-center">
                    <h1>知无不言，言无不尽。 <small>Say Everything. </small></h1>
                </div>
                <div className="login">
                    <input type="text" ref={(name) => { this.name = name; }} onFocus={() => { this.error.innerHTML = ''; }} className="form-control" placeholder="起一个响亮的名字~" />
                    <button className="btn btn-success" onClick={this.handleClick}>Join</button>
                    <p ref={(error) => { this.error = error; }}>{this.props.error}</p>
                </div>
            </div>
        );
    }
}

Login.propTypes = propTypes;
Login.defaultProps = {
    error: ''
};
export default Login;
