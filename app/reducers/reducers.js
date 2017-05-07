import { combineReducers } from 'redux';
import Constants from '../utils/Constants';

function actionReducers(state = '', action) {
    switch (action.type) {
        case Constants.LOGIN:
            return Object.assign({}, state, {
                name: action.name,
                error: action.error,
                users: action.users
            });
        case Constants.LOGOUT:
            return Object.assign({}, state, {
                name: action.name,
                users: action.users
            });
        case Constants.SEND:
            return {};
        default:
            return state;
    }
}

function listenerReducers(state = {}, action) {
    switch (action.type) {
        case Constants.REGISTER_USER_LISTENER:
            return Object.assign({}, state, { users: action.users });
        case Constants.REGISTER_MSG_LISTENER:
            return Object.assign({}, state, { messages: action.messages });
        default:
            return state;
    }
}

const rootReducer = combineReducers({ actionReducers, listenerReducers });
export default rootReducer;
