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

function connectListener(state, data) {
    let users = state.users;
    if (data.type === 'connect') {
        users = [...state.users, data.user];
    } else if (data.type === 'disconnect') {
        users.splice(users.indexOf(data.user), 1);
    }
    return {
        type: Constants.REGISTER_USER_LISTENER,
        users
    };
}

function messageListener(state, data) {
    const messages = [...state.messages, data];
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
    return (dispatch, getState) => mySocket.registerMessageListener(data => messageListener(getState(), data));
}

// 新用户连接
export function registerUserListener() {
    return (dispatch, getState) => mySocket.registerUserListener(data => connectListener(getState(), data));
}
