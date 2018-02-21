import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './todo_reducer.js';
import TodoList from './todo_list/todo_list_component';
import AddTodoForm from './add_todo_form/add_todo_form';
import TaskFilter from './task_filter/task_filter_component';

const TodoApp = ()=>(
  <Provider store={createStore(rootReducer)}>
    <div className="todo-app">
      <h1>Todo app</h1>
      <AddTodoForm/>
      <TaskFilter/>
      <TodoList/>
    </div>
  </Provider>
);

export default TodoApp;