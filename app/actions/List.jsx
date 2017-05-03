// 代办事项列表
import React, { PropTypes } from 'react';
import Item from '../actions/Item';

const propTypes = {
    items: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};

function List({ items, onDelete }) {
    const liHtml = items.map(item => <Item key={item.id} onDelete={onDelete} item={item} />);
    return (
        <ul className="list-group">
            {liHtml}
        </ul>
    );
}

List.propTypes = propTypes;
export default List;
