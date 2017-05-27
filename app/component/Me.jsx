import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    match: PropTypes.object
};

export default function Me({ match }) {
    return (
        <div>
            <h1>Me</h1>
            <p>Hello, {match.params.name}</p>
        </div>
    );
}

Me.propTypes = propTypes;
Me.defaultProps = { match: {} };
