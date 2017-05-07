import MySocket from '../utils/MySocket';
import Constants from '../utils/Constants';

const mySocket = new MySocket();

function login(name, data) {
    return {
        type: Constants.LOGIN,
        name,
        error: data.result === 'success' ? '' : data.result,
        users: !data.users ? [] : data.users
    };
}

export default function fetchLogin(name) {
    return dispatch => mySocket.login(name, dispatch, data => login(name, data));
}
