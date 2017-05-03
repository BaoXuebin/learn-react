// 新建待办事项按钮
import React, { PropTypes } from 'react';

class CreateButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleCreate = this.handleCreate.bind(this);
    }

    handleCreate() {
        if (this.content.value === '') return;
        const create = this.props.onClick;
        create(this.content.value);
        this.content.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" className="form-control" placeholder="AddTodo" ref={(content) => { this.content = content; }} />
                <p />
                <button className="btn btn-success btn-block" onClick={this.handleCreate}>Add</button>
            </div>
        );
    }
}

CreateButton.propTypes = { onClick: PropTypes.func.isRequired };
export default CreateButton;
