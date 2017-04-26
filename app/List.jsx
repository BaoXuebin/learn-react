import React, { PropTypes } from 'react';
import ListItem from './ListItem';

const propTypes = {
    items: PropTypes.array.isRequired
};

function List({ items }) {
    const itemHtml = items.map(item => (<ListItem item={item} key={item.id} />));
    return (
        <div className="list-component col-md-4 list-group">
            {itemHtml}
        </div>
    );
}

List.propTypes = propTypes;
export default List;
