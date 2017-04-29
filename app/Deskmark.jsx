import React from 'react';
import uuid from 'uuid';
import List from './List';
import ItemShowLayer from './ItemShowLayer';
import ItemEditor from './ItemEditor';

class Deskmark extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            selectId: null,
            editing: false
        };
        this.saveItem = this.saveItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.createItem = this.createItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.editItem = this.editItem.bind(this);
    }

    // 保存
    saveItem(item) {
        const newItem = item;
        let items = this.state.items;
        newItem.id = uuid.v4();
        newItem.time = new Date().getTime();
        items = [...items, item];
        this.setState({ items });
    }

    // 从左侧列表选取一篇文章
    selectItem(id) {
        if (id !== this.state.selectId) {
            this.setState({
                selectId: id,
                editing: false
            });
        }
    }

    // 新建一片文章
    createItem() {
        this.setState({
            selectId: null,
            editing: true
        });
    }

    // 删除
    deleteItem(id) {
        const items = this.state.items;
        const index = items.find((item, i) => {
            if (item.id === id) {
                return i;
            }
            return -1;
        });
        items.splice(index, 1);
        this.setState({
            items,
            selectId: null,
            editing: false
        });
    }

    cancelEdit() {
        this.setState({
            editing: false
        });
    }

    editItem(id) {
        this.setState({
            selectId: id,
            editing: true
        });
    }

    render() {
        const { items, selectId } = this.state;
        const selected = selectId && items.find(item => item.id === selectId);

        const mainPart = selected ?
            <ItemEditor item={selected} onSave={this.saveItem} onCancel={this.cancelEdit} /> :
            <ItemShowLayer item={selected} onEdit={this.editItem} onDelete={this.deleteItem} />;

        return (
            <section className="deskmark-component">
                <div className="container">
                    <List items={this.state.items} onEdit={this.createItem} onSelect={this.selectItem} />
                    {mainPart}
                </div>
            </section>
        );
    }
}

export default Deskmark;
