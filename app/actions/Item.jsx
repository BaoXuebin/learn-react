// 代办事项列表
import React, { PropTypes } from 'react';

const propTypes = {
    item: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        const { item, onDelete } = this.props;
        onDelete(item.id);
    }

    render() {
        const { item } = this.props;
        const colorMap = { 0: 'success', 1: 'info', 2: 'warning', 3: 'danger' };
        let color = colorMap[Math.floor(Math.random() * 4)];
        color = `list-group-item list-group-item-${color}`;
        return (
            <li className={color}>
                {item.content}
                <button className="close" aria-label="Close" onClick={this.handleDelete}><span aria-hidden="true">&times;</span></button>
            </li>
        );
    }
}

Item.propTypes = propTypes;
export default Item;
