import React, { PropTypes } from 'react';
import uuid from 'uuid';

import '../style/input.css';

const propTypes = {
    sendMessage: PropTypes.func.isRequired
};

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(event) {
        const { sendMessage } = this.props;
        const content = this.content.value;
        if (event.altKey && event.keyCode === 13 && content !== '') {
            sendMessage({
                id: uuid.v4(),
                content
            });
            this.content.value = '';
        }
    }

    render() {
        return (
            <div className="cr-input">
                <textarea ref={(c) => { this.content = c; }} className="form-control" placeholder="说两句吧:-), alt+enter 发送消息" rows="4" onKeyDown={this.sendMessage} />
            </div>
        );
    }
}

Input.propTypes = propTypes;
export default Input;
