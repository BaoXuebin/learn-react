import React, { PropTypes } from 'react';
import marked from 'marked';

const propTypes = {
    item: PropTypes.object
};

function ItemShowLayer({ item }) {
    if (!item || !item.id) {
        return (
            <div className="col-md-8 item-show-layer-component">
                <div className="no-select">请选择左侧列表里的文章</div>
            </div>
        );
    }

    const content = marked(item.content);
    return (
        <div className="col-md-8 item-show-layer-component">
            <div className="control-area">
                <button className="btn btn-primary">编辑</button>
                <button className="btn btn-danger">删除</button>
            </div>
            <h2>{item.title}</h2>
            <div className="item-text">
                <div>{content}</div>
            </div>
        </div>
    );
}

ItemShowLayer.propTypes = propTypes;
ItemShowLayer.defaultProps = {
    // 默认 item 为空
    item: {}
};

export default ItemShowLayer;
