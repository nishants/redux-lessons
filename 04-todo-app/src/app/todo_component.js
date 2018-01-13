import React from 'react';

class TODO extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newTaskName: ""
    }
  }

  addTask(){
    this.props.addTask(this.state.newTaskName);
    this.setState({newTaskName: ""});
  }

  setNewTaskName(name){
    this.setState({newTaskName: name});
  }

  setTaskStatus(task, value){
    value ? this.props.taskCompleted(task) : this.props.taskPending(task);
  }

  createTask(task){
      return(
          <li key={task.id}>
            <input type="checkbox" checked={task.complete} onChange={(e)=>this.setTaskStatus(task, e.target.checked)}/>
            <label>{task.name} {task.complete ? "Complete" : "Pending"}</label>
          </li>
      );
  }

  showCompletedTasks(value){
    this.props.showCompletedTasks(value);
  }

  render() {
    const visibleTaskList = this.props.tasks.filter(task=> this.props.visibilityFilter.showCompleted || !task.complete).map((task)=> this.createTask(task));

    const newTaskName   = this.state.newTaskName;
    return (
        <div>
          <h1>Todo App</h1>
          <div>
            <input placeholder='name' value={newTaskName} onChange={(e)=> this.setNewTaskName(e.target.value)}/>
            <button disabled={newTaskName.length === 0} onClick={()=> this.addTask()}> Add Task</button>
          </div>
          <div>
            <h5>Filter</h5>
              <label>Show Completed </label> <input type="checkbox" onChange={(e)=>this.showCompletedTasks(e.target.checked)}/>
          </div>
          <div>
            <h3>All Tasks</h3>
            <ul>
              {visibleTaskList}
            </ul>
          </div>
        </div>
    );
  }
}

export default TODO;
