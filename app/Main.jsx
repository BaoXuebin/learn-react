import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import Chatroom from './Chatroom';
import { fetchLogin, fetchLogout, registerMessageListener, registerUserListener } from './actions/actions';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.registerUserListener = this.registerUserListener.bind(this);
        this.registerMessageListener = this.registerMessageListener.bind(this);
    }

    // 加入聊天室
    handleClick(name) {
        this.props.dispatch(fetchLogin(name));
    }

    // 退出聊天室
    handleDisconnect() {
        this.props.dispatch(fetchLogout(this.props.name));
    }

    // 接收消息
    registerMessageListener() {
        this.props.dispatch(registerMessageListener());
    }

    // 监听新用户连接
    registerUserListener() {
        this.props.dispatch(registerUserListener());
    }

    render() {
        const { name, error, users, messages } = this.props;
        const events = {
            disconnect: this.handleDisconnect,
            userListener: this.registerUserListener,
            messageListener: this.registerMessageListener
        };
        return (
            <div>
                {name === '' &&
                    <Login login={this.handleClick} error={error} />
                }
                {name !== '' &&
                    <Chatroom messages={messages} users={users} events={events} />
                }
            </div>
        );
    }
}

Main.propTypes = {
    // isLogining: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string,
    users: PropTypes.arrayOf(PropTypes.string),
    messages: PropTypes.arrayOf(PropTypes.object),
    dispatch: PropTypes.func.isRequired
};

Main.defaultProps = {
    error: '',
    users: [],
    messages: []
};

function mapStateToProps(state) {
    console.log(state);
    const { name, error, users } = state;
    return {
        name,
        error,
        users
    };
}

export default connect(mapStateToProps)(Main);
