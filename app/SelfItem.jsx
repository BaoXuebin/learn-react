import React, { PropTypes } from 'react';

const propTypes = {
    data: PropTypes.object.isRequired
};

function SelfItem({ data }) {
    const messageObj = data;
    return (
        <div className="self-item">
            <img src={messageObj.author} alt={messageObj.author} className="avatar" />
            <div className="author">
                <span className="time">{messageObj.time}</span>
                {messageObj.author}
            </div>
            <div className="panel panel-default content">
                <div className="panel-body">
                    {messageObj.content}
                </div>
            </div>
        </div>
    );
}

SelfItem.propTypes = propTypes;
export default SelfItem;
