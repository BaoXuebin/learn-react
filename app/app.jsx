import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';

// const App = connect(state => ({ state }), dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) }))(Main);

ReactDOM.render(<Main />, document.getElementById('chatroom'));
