import React from 'react';
import ReactDOM from 'react-dom';

import TestRouter from './component/TestRouter';
import AuthRouter from './component/AuthRouter';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<AuthRouter />, app);
