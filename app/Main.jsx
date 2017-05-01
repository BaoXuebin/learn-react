import React from 'react';
import io from 'socket.io-client';
import Login from './Login';
import Chatroom from './Chatroom';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.socket = null;
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            logined: false,
            name: ''
        };
    }

    // 建立 socket 连接
    componentDidMount() {
        this.socket = io('ws://localhost:3000');
    }

    // 处理加入按钮的点击事件
    handleClick(name) {
        // this.socket = io('ws://localhosts:3000');
        const socket = this.socket;
        if (socket) {
            socket.emit('login', { name });
            socket.on('login', (data) => {
                if (data.result === 'success') {
                    // 跳转
                    this.setState({
                        logined: true,
                        name
                    });
                } else if (data.result === 'invalid name') {
                    socket.emit('error', '昵称被占用');
                } else {
                    socket.emit('error', '未知错误');
                }
            });
        }
        return socket;
    }

    render() {
        const { logined, name } = this.state;
        const mainHTML = logined ? <Chatroom name={name} /> : <Login onClick={this.handleClick} />;
        return (
            <div>
                {mainHTML}
            </div>
        );
    }
}

export default Main;
