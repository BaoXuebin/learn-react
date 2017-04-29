import React from 'react';
import Title from './Title';
import Content from './Content';
import Input from './Input';
import Info from './Info';

import '../style/chatroom.css';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.body = document.body;
        this.handleSendMessage = this.handleSendMessage.bind(this);
    }

    handleSendMessage(message) {
        const messages = [...this.state.messages, message];
        this.setState({
            messages
        });
        this.body.scrollTop = window.innerHeight + 1000;
    }

    render() {
        // 聊天室包含四部分：
        // 1. 标题模块
        // 2. 聊天内容展示模块
        // 3. 输入模块
        // 4. 人员信息
        return (
            <div>
                <Title />
                <div className="left-area">
                    <Content data={this.state.messages} />
                    <Input sendMessage={this.handleSendMessage} />
                </div>
                <div className="right-area">
                    <Info />
                </div>
            </div>
        );
    }
}

export default Chatroom;
