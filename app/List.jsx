import React, { PropTypes } from 'react';
import ListItem from './ListItem';

const propTypes = {
    items: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired
};

function List({ items, onEdit }) {
    const itemHtml = items.map(item => (<ListItem item={item} key={item.id} />));
    return (
        <div className="list-component col-md-4 list-group">
            <button onClick={onEdit} className="btn btn-primary">点击添加</button>
            {itemHtml}
        </div>
    );
}

List.propTypes = propTypes;
export default List;
