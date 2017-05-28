import React from 'react';
import ReactDOM from 'react-dom';

import PreventingTransitionsExample from './component/PreventingTransitionsExample';

const app = document.createElement('div');
document.body.appendChild(app);

ReactDOM.render(<PreventingTransitionsExample />, app);
