import React from 'react';
import ReactDOM from 'react-dom';
// import Profile from './Profile';
import Deskmark from './Deskmark';

// function App() {
//     return (
//         <div className="container">
//             <h1>Hello Wordlds!</h1>
//         </div>
//     );
// }
//
const app = document.createElement('div');
document.body.appendChild(app);

// const props = {
//     name: 'BaoXuebin',
//     age: 21
// };

// ReactDOM.render(<Profile {...props} />, app);
ReactDOM.render(<Deskmark />, app);
