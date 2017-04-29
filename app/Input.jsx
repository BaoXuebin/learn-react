import React, { PropTypes } from 'react';
import uuid from 'uuid';

const propTypes = {
    sendMessage: PropTypes.func.isRequired
};

function Input({ sendMessage }) {
    // const onKeyDownFoo = onKeyDown;
    const sendMessageFoo = (event) => {
        if (event.ctrlKey && event.keyCode === 13) {
            sendMessage({
                id: uuid.v4(),
                type: 'others',
                author: 'BaoXuebin',
                content: this.hello.value
            });
            this.content.value = '';
        }
    };
    return (
        <div className="cr-input">
            <textarea ref={(c) => { this.hello = c; }} className="form-control" placeholder="说两句吧:-)" rows="5" onKeyDown={sendMessageFoo} />
        </div>
    );
}

Input.propTypes = propTypes;
export default Input;
