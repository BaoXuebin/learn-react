import React, { PropTypes } from 'react';

const propTypes = {
    data: PropTypes.object.isRequired
};

function OtherItem({ data }) {
    const messageObj = data;
    return (
        <div className="other-item">
            {messageObj.author}: {messageObj.content};
        </div>
    );
}

OtherItem.propTypes = propTypes;
export default OtherItem;
