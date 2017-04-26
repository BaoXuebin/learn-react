import React, { PropTypes } from 'react';

const propTypes = {
    item: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

function ListItem({ item }) {
    return (
        <a href="#" className="list-group-item">
            <span>{item.time}</span>
            {item.title}
        </a>
    );
}

ListItem.propTypes = propTypes;

export default ListItem;
