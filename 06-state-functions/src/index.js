import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import TodoApp from './app/todo_app';

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('root'));
registerServiceWorker();
