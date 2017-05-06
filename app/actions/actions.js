// 该文件用于创建数据流
export const Constants = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
};

export function login(name) {
    return { type: Constants.LOGIN, name };
}

export function logout(name) {
    return { type: Constants.LOGOUT, name };
}
