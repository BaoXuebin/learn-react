var Server = require('socket.io');
var io = new Server(3000);
var userList = [];
var user = {};
io.on('connection', function (socket) {
    // 加入聊天室
    socket.on('login', (data) => {
        let id = socket.id;
        let name = data.name;
        // 判断 name 是否存在
        let isExit = nameIsExit(name);
        if (isExit) {
            // 名字存在，返回错误信息
            socket.emit('login', { result: '名称非法或被占用' });
        } else {
            // 通知其他人，新的连接加入聊天室
            for (let user of userList) {
                user.socket.emit('user', { type: 'connect', user: name });
            }

            user = {id, name, socket};
            userList.push(user);
            socket.emit('login', { result: 'success' , users: getAllUserList()});
            console.log(`${name} join room`);
        }
    });

    socket.on('msg', (message) => {
        if (message) {
            console.log(`${message.name}: ${message.content}`);
            message.time = new Date().toLocaleTimeString();
            for (let user of userList) {
                if (message.name === user.name) {
                    message.type = 'self';
                } else {
                    message.type = 'others';
                }
                user.socket.emit('msg', message);
            }
        }
    });

    socket.on('logout', (name) => {
        let delUser = delUserByName(name);
        if (delUser) {
            delUser.socket.emit('logout', 'success');
            // delUser.socket.disconnect();
            for (let user of userList) {
                user.socket.emit('user', { type: 'disconnect', user: name });
            }
            console.log(`${name} leave room`);
        }
    });

    socket.on('disconnect', () => {
        let delUser = delUserBySocketId(socket.id);
        if (delUser) {
            const name = delUser.name;
            delUser.socket.emit('logout', 'success');
            delUser.socket.disconnect();
            for (let user of userList) {
                user.socket.emit('user', { type: 'disconnect', user: name });
            }
            console.log(`${name} leave room`);
        }
    });
});


// 判断名字是否存在
function nameIsExit(name) {
    return userList.find((user) => {
        return user.name === name;
    });
}

// 获取所有在线列表的 用户名称
function getAllUserList() {
    return userList.map((user) => {
        return user.name;
    });
}

function delUserByName(name) {
    let user = userList.find((user) => {
        if (user.name === name) {
            return user;
        }
    });
    if (user) {
        userList.splice(userList.indexOf(user), 1);
    }
    return user;
}

function delUserBySocketId(socketId) {
    let user = userList.find((user) => {
        if (user.socket.id === socketId) {
            return user;
        }
    });
    if (user) {
        userList.splice(userList.indexOf(user), 1);
    }
    return user;
}
