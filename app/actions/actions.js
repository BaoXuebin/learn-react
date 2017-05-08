import MySocket from '../utils/MySocket';
import Constants from '../utils/Constants';

const mySocket = new MySocket();

function login(name, data) {
    return {
        type: Constants.LOGIN,
        name: data.result === 'success' ? name : '',
        error: data.result === 'success' ? '' : data.result,
        users: !data.users ? [] : data.users
    };
}

function logout(name, data) {
    return {
        type: Constants.LOGOUT,
        name: data === 'success' ? '' : name,
        users: []
    };
}

function userListener(state, data) {
    let users = state.users.slice(0);
    if (data.type === 'connect') {
        users = [...users, data.user];
    } else if (data.type === 'disconnect') {
        users.splice(users.indexOf(data.user), 1);
    }
    return {
        type: Constants.REGISTER_USER_LISTENER,
        users
    };
}

function messageListener(state, data) {
    let messages = [];
    if (state.messages) {
        messages = [...state.messages, data];
    } else {
        messages.push(data);
    }
    return {
        type: Constants.REGISTER_MSG_LISTENER,
        messages
    };
}

// 请求登录
export function fetchLogin(name) {
    return dispatch => mySocket.login(name, dispatch, data => login(name, data));
}

// 请求退出
export function fetchLogout(name) {
    return dispatch => mySocket.logout(name, dispatch, data => logout(name, data));
}

// 接收消息
export function registerMessageListener() {
    return (dispatch, getState) => mySocket.registerMessageListener(dispatch, data => messageListener(getState(), data));
}

// 新用户连接
export function registerUserListener() {
    return (dispatch, getState) => mySocket.registerUserListener(dispatch, data => userListener(getState(), data));
}

// 发送信息
export function sendMessage(content) {
    mySocket.sendMessage(content);
    return {
        type: Constants.SEND
    };
}
