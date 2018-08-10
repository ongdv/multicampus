import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './Clac';
import registerServiceWorker from './registerServiceWorker';

let values = { x:4, y:5, oper:"+"}
ReactDOM.render(<Calc {...values}/>, document.getElementById('root'));
registerServiceWorker();
