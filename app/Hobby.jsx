import React, { PropTypes } from 'react';

const propTypes = {
    hobby: PropTypes.string.isRequired
};

function Hobby({ hobby }) {
    return <li>{hobby}</li>;
}

Hobby.propTypes = propTypes;

export default Hobby;
