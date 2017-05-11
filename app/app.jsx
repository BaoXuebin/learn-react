import React from 'react';
import ReactDOM from 'react-dom';

const app = document.createElement('div');
document.body.appendChild(app);

function Root() {
    return (
        <h1>Hello World!</h1>
    );
}

ReactDOM.render(<Root />, app);
