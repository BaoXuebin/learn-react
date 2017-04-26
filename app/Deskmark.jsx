import React from 'react';
import List from './List';

class Deskmark extends React.Component {
    render() {
        const items = [
            {
                id: '2910-02010-22',
                title: 'Hello World',
                content: 'This is a test.',
                time: '2017年04月27日'
            }
        ];
        return (
            <section className="deskmark-component">
                <div className="container">
                    <div className="row">
                        <List items={items} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Deskmark;
