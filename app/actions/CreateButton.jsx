// 新建待办事项按钮
import React, { PropTypes } from 'react';

function CreateButton({ onClick }) {
    return (
        <button className="btn btn-success btn-block" onClick={onClick}>Add</button>
    );
}

CreateButton.propTypes = { onClick: PropTypes.func.isRequired };
export default CreateButton;
