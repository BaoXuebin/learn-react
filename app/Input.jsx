import React, { PropTypes } from 'react';
import uuid from 'uuid';

import '../style/input.css';

const propTypes = {
    sendMessage: PropTypes.func.isRequired
};

class Input extends React.Component {
    render() {
        const { sendMessage } = this.props;
        const sendMessageFoo = (event) => {
            const content = this.content.value;
            if (event.ctrlKey && event.keyCode === 13 && content !== '') {
                sendMessage({
                    id: uuid.v4(),
                    type: 'self',
                    author: 'BaoXuebin',
                    content
                });
                this.content.value = '';
            }
        };
        return (
            <div className="cr-input">
                <textarea ref={(c) => { this.content = c; }} className="form-control" placeholder="说两句吧:-)" rows="4" onKeyDown={sendMessageFoo} />
            </div>
        );
    }
}

Input.propTypes = propTypes;
export default Input;
