import React, { PropTypes } from 'react';

import '../style/login.css';

const propTypes = {
    onClick: PropTypes.func.isRequired
};

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.name.value);
        // const click = this.props.onClick;
        // const socket = click(this.name.value);
        // // 显示错误信息的组件
        // const error = this.error;
        // if (socket.connected) {
        //     socket.on('error', (err) => {
        //         error.innerHTML = err || '未知错误';
        //     });
        // } else {
        //     error.innerHTML = '连接失败，请刷新页面重试';
        // }
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
                    <p ref={(error) => { this.error = error; }} />
                </div>
            </div>
        );
    }
}

Login.propTypes = propTypes;
export default Login;
