import React, { PropTypes } from 'react';

const propTypes = {
    data: PropTypes.object.isRequired
};

function SelfItem({ data }) {
    const messageObj = data;
    return (
        <div className="self-item">
            <img src={messageObj.name} alt={messageObj.name} className="avatar" />
            <div className="name">
                <span className="time">{messageObj.time}</span>
                {messageObj.name}
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
