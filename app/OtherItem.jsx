import React, { PropTypes } from 'react';

const propTypes = {
    data: PropTypes.object.isRequired
};

function OtherItem({ data }) {
    const messageObj = data;
    return (
        <div className="other-item">
            <img src={messageObj.author} alt={messageObj.author} className="avatar" />
            <div className="author">
                {messageObj.author}
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
