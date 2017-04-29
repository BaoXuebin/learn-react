import React, { PropTypes } from 'react';

const propTypes = {
    item: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};

class ItemEditor extends React.Component {
    render() {
        const { onSave, onCancel } = this.props;
        const item = this.props.item || {
            title: '',
            content: ''
        };
        const saveText = item.id ? '保存' : '新建';
        const save = () => {
            onSave({
                item,
                title: this.title.value,
                content: this.content.value
            });
        };

        return (
            <div className="col-md-8 item-editor-component">
                <div className="control-area">
                    <button onClick={save} className="btn btn-success">{saveText}</button>
                    <button onClick={onCancel} className="btn btn-default">取消</button>
                </div>
                <div className="editor-area">
                    <input ref={(c) => { this.title = c; }} placeholder="请填写标题" defaultValue={item.title} />
                    <textarea ref={(c) => { this.content = c; }} placeholder="请填写内容" defaultValue={item.content} />
                </div>
            </div>
        );
    }
}

ItemEditor.propTypes = propTypes;
ItemEditor.defaultProps = {
    item: {}
};

export default ItemEditor;
