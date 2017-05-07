import { combineReducers } from 'redux';
import Constants from '../utils/Constants';

function login(state = {}, action) {
    switch (action.type) {
        case Constants.LOGIN:
            return Object.assign({}, state, {
                name: action.name,
                error: action.error,
                users: action.users
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({ login });
export default rootReducer;
