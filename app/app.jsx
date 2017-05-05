import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import '../style/app.css';


const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<Todo />, app);
