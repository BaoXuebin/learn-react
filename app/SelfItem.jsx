import React, { PropTypes } from 'react';

const propTypes = {
    data: PropTypes.object.isRequired
};

function SelfItem({ data }) {
    const messageObj = data;
    return (
        <div className="self-item">
            {messageObj.content} :{messageObj.author}
        </div>
    );
}

SelfItem.propTypes = propTypes;
export default SelfItem;
