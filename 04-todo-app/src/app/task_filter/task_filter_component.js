import React from 'react';
import {connect} from 'react-redux';

const TaskFilter = ({showCompleted, toggleVisibilityFilter})=> (
    <div className = "task-filter">
      <label>Show Completed </label>
      <input type="checkbox" checked={showCompleted} onChange={(e)=>toggleVisibilityFilter(e.target.checked)}/>
    </div>
);

const mapStateToProps = ({visibilityFilter})=> {
  return {
    showCompleted: visibilityFilter.showCompleted
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    toggleVisibilityFilter: (showCompleted)=>{
      dispatch({
            type: "SET_VISIBILITY_FILTER",
            showCompleted: showCompleted
          });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilter);
