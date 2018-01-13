import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TODO from './app/todo_component.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TODO />, document.getElementById('root'));
registerServiceWorker();
