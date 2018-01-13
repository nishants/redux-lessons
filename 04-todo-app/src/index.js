import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TODO from './app/todo_component';
import todoReducer from './app/todo_reducer';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

const store = createStore(todoReducer);
var render = ()=> {
  const state = store.getState(),
      taskCompleted = (task)=> {
        store.dispatch({
          type: "FINISHED_TODO",
          taskID: task.id,
          taskName: task.name
        });
      },
      taskPending = (task)=> {
        store.dispatch({
          type: "PENDING_TODO",
          taskID: task.id,
          taskName: task.name
        });
      },
      addTask = (name)=>{
        store.dispatch({
          type    : "ADD_TODO",
          taskName: name,
          taskID  : state.length
        })
      };
  ReactDOM.render(<TODO tasks={state} taskPending={taskPending} addTask={addTask} taskCompleted={taskCompleted}/>, document.getElementById('root'));
};
store.subscribe(render);
render();
registerServiceWorker();
