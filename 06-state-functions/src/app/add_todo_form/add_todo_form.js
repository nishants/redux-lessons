import React from 'react';
import {connect} from 'react-redux';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newTaskName: ""
    };
  }

  updateTaskName(newTaskName){
    this.setState({newTaskName});
  }

  createNewTask(){
    this.props.addTask(this.props.nextTaskId, this.state.newTaskName);
    this.setState({newTaskName : ""});
  }
  render(props) {
    var disableButton = this.state.newTaskName.length === 0;
    return (
        <div className="todo-form">
          <input placeholder='name' value={this.state.newTaskName} onChange={(e)=> this.updateTaskName(e.target.value)}/>
          <button disabled={disableButton} onClick={()=> this.createNewTask()}> Add Task</button>
        </div>
    );
};
}

const mapDispatchToProps = (dispatch)=> {
  return {
    addTask: (id, name) => {
      dispatch({
        type: "ADD_TODO",
        taskID: id,
        taskName: name
      })
    }
  }
};

const mapStateToProps = (state)=> {
  return {
    nextTaskId  : state.todo.length
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);