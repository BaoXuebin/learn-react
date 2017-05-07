import MySocket from '../utils/MySocket';

export const Constants = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};

const mySocket = new MySocket();

function login(name, data) {
    return {
        type: Constants.LOGIN,
        name,
        error: data.result === 'success' ? '' : data.result,
        users: !data.users ? [] : data.users
    };
}

export function fetchLogin(name) {
    return () => {
        mySocket.login(name, data => login(name, data));
    };
}
