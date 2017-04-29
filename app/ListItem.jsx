import React, { PropTypes } from 'react';

const propTypes = {
    item: PropTypes.object.isRequired
};

function ListItem({ item }) {
    return (
        <a href="a" className="list-group-item">
            <span className="badge">{item.time}</span>
            {item.title}
        </a>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;
