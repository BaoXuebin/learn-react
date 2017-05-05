import React, { PropTypes } from 'react';
import Title from './Title';
import Content from './Content';
import Input from './Input';
import Info from './Info';

import '../style/chatroom.css';

const propTypes = {
    name: PropTypes.string.isRequired,
    socket: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    disconnect: PropTypes.func.isRequired
};

class Chatroom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            users: this.props.users
        };
        // 昵称
        this.name = null;
        // socket 对象
        this.socket = this.props.socket;
        // 注册发送信息方法
        this.handleSendMessage = this.handleSendMessage.bind(this);
    }

    componentDidMount() {
        this.name = this.props.name;
        // 监听聊天室消息
        this.socket.on('msg', (message) => {
            if (message) {
                const messages = [...this.state.messages, message];
                this.setState({
                    messages
                });
            }
        });
        // 用户加入聊天室
        this.socket.on('conn', (user) => {
            if (user) {
                const users = [...this.state.users, user];
                this.setState({
                    users
                });
            }
        });
        // 用户离开聊天室
        this.socket.on('disconn', (user) => {
            if (user) {
                const users = this.state.users;
                users.splice(users.indexOf(user), 1);
                this.setState({
                    users
                });
            }
        });
    }

    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    handleSendMessage(message) {
        if (message) {
            const msg = message;
            msg.name = this.name;
            this.socket.emit('msg', msg);
        }
    }

    render() {
        // 聊天室包含四部分：
        // 1. 标题模块
        // 2. 聊天内容展示模块
        // 3. 输入模块
        // 4. 人员信息
        return (
            <div>
                <Title disconnect={this.props.disconnect} />
                <div className="left-area">
                    <Content data={this.state.messages} />
                    <Input sendMessage={this.handleSendMessage} />
                </div>
                <div className="right-area">
                    <Info users={this.state.users} />
                </div>
            </div>
        );
    }
}

Chatroom.propTypes = propTypes;
export default Chatroom;
