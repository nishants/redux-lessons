import React from 'react';
import {connect} from 'react-redux';
import TODO from './todo_state';

const TodoList = ({tasks, showCompletedTasks, toggleTodo})=> {
  const toListElement = (task) => (
      <li key={task.id}>
        <input type="checkbox" checked={task.complete} onChange={(e)=> toggleTodo(task)}/>
        <label>{task.name} {task.complete ? "Complete" : "Pending"}</label>
      </li>
  );
  const visibleTaskList =
      showCompletedTasks ? tasks
      : TODO.pending(tasks);

  return (
      <ul className="todo-list">
        {visibleTaskList.map(toListElement)}
      </ul>
  );
}

const mapStateToProps = (state)=>{
  return {
    tasks: state.todo,
    showCompletedTasks: state.visibilityFilter.showCompleted,
  };
};

const mapDispatchToProps = (dispatch)=> {
  let
      markComplete = (id)=>     dispatch({
        type: "FINISHED_TODO",
        taskID: id,
      }),
      markPending = (id)=>     dispatch({
        type: "PENDING_TODO",
        taskID: id,
      });

  return {
    toggleTodo: ({id, complete})=> {
      complete ? markPending(id) : markComplete(id);
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
