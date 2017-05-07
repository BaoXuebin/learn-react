import React, { PropTypes } from 'react';
import Title from './Title';
import Content from './Content';
import Input from './Input';
import Info from './Info';

import '../style/chatroom.css';

const propTypes = {
    users: PropTypes.array.isRequired,
    disconnect: PropTypes.func.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object).isRequired,
    events: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired
};

class Chatroom extends React.Component {
    componentDidMount() {
        const { userListener, messageListener } = this.props.events;
        userListener();
        messageListener();
    }

    componentDidUpdate() {
        window.scrollTo(0, document.body.scrollHeight);
    }

    render() {
        // 聊天室包含四部分：
        // 1. 标题模块
        // 2. 聊天内容展示模块
        // 3. 输入模块
        // 4. 人员信息
        const { messages, users, disconnect } = this.props;
        return (
            <div>
                <Title disconnect={disconnect} />
                <div className="left-area">
                    <Content data={messages} />
                    <Input sendMessage={this.handleSendMessage} />
                </div>
                <div className="right-area">
                    <Info users={users} />
                </div>
            </div>
        );
    }
}

Chatroom.propTypes = propTypes;
export default Chatroom;
