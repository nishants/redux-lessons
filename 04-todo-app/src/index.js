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
          taskID  : state.todo.length
        })
      },
      showCompletedTasks = (showCompleted)=>{
        store.dispatch({
          type: "SET_VISIBILITY_FILTER",
          showCompleted: showCompleted
        });
      };

  ReactDOM.render(
      <TODO tasks={state.todo}
            visibilityFilter={state.visibilityFilter}
            taskPending={taskPending}
            addTask={addTask}
            taskCompleted={taskCompleted}
            showCompletedTasks={showCompletedTasks}/>,
      document.getElementById('root'));
};
store.subscribe(render);
render();
registerServiceWorker();
