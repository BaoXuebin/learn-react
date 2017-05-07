import io from 'socket.io-client';

export default class MySocket {
    constructor() {
        this.socket = io('ws://localhost:3000');
        this.handleLoginResponse = null;
        this.handleLogoutResponse = null;
        this.messageListener = null;
        this.userListener = null;
        this.dispatch = null;
        if (this.socket) {
            this.socket.on('login', (data) => {
                this.dispatch(this.handleLoginResponse(data));
            });
            this.socket.on('logout', (data) => {
                this.dispatch(this.handleLogoutResponse(data));
            });
            this.socket.on('msg', (data) => {
                this.messageListener(data);
            });
            this.socket.on('user', (data) => {
                this.userListener(data);
            });
        }
    }

    // 发送登录请求
    login(name, dispatch, callback) {
        if (name === '') return;
        if (callback) {
            this.dispatch = dispatch;
            this.handleLoginResponse = callback;
        }
        this.socket.emit('login', { name });
    }

    // 登出
    logout(name, dispatch, callback) {
        if (name === '') return;
        if (callback) {
            this.dispatch = dispatch;
            this.handleLogoutResponse = callback;
        }
        this.socket.emit('logout', name);
    }

    // 接受聊天消息
    registerMessageListener(callback) {
        if (callback) {
            this.messageListener = callback;
        }
    }

    registerUserListener(callback) {
        if (callback) {
            this.userListener = callback;
        }
    }
}
