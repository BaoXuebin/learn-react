import io from 'socket.io-client';

export default class MySocket {
    constructor() {
        this.socket = io('ws://localhost:3000');
        this.handleLoginResponse = null;
        if (this.socket) {
            this.socket.on('login', (data) => {
                this.handleLoginResponse(data);
            });
        }
    }

    // 发送登录请求
    login(name, callback) {
        if (callback) {
            this.handleLoginResponse = callback;
        }
        this.socket.emit('login', { name });
    }
}
