import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';

// const App = connect(state => ({ state }), dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) }))(Main);

ReactDOM.render(<Root />, document.getElementById('chatroom'));
