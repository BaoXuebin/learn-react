import React, { PropTypes } from 'react';
import uuid from 'uuid';

const propTypes = {
    users: PropTypes.array.isRequired
};

function Info({ users }) {
    const userHTML = users.map(user => <InfoItem user={user} key={uuid.v4()} />);
    return (
        <ul className="list-group">
            {userHTML}
        </ul>
    );
}

function InfoItem({ user }) {
    return (
        <li className="list-group-item">{user}</li>
    );
}

InfoItem.propTypes = { user: PropTypes.string.isRequired };
Info.propTypes = propTypes;
export default Info;
