import React, { PropTypes } from 'react';

const propTypes = {
    data: PropTypes.object.isRequired
};

function OtherItem({ data }) {
    const messageObj = data;
    return (
        <div className="other-item">
            <img src={messageObj.name} alt={messageObj.name} className="avatar" />
            <div className="name">
                {messageObj.name}
                <span className="time">{messageObj.time}</span>
            </div>
            <div className="panel panel-default content">
                <div className="panel-body">
                    {messageObj.content}
                </div>
            </div>
        </div>
    );
}

OtherItem.propTypes = propTypes;
export default OtherItem;
