// 程序框架
import React from 'react';
import uuid from 'uuid';
import TodoStore from '../stores/TodoStore';
import TodoAction from '../actions/TodoAction';
import List from '../actions/List';
import CreateButton from '../actions/CreateButton';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TodoStore.getAll()
        };
        this.foo = null;
        this.onChange = this.onChange.bind(this);
        this.createTodo = this.createTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    createTodo() {
        this.foo = '';
        TodoAction.create({ id: uuid.v4(), content: '3rd stuff' });
    }

    deleteTodo(id) {
        this.foo = '';
        TodoAction.delete(id);
    }

    render() {
        return (
            <div>
                <List items={this.state.todos} onDelete={this.deleteTodo} />
                <CreateButton onClick={this.createTodo} />
            </div>
        );
    }
}

export default Todo;
