import Redux from 'redux';

const todoReducer = (state=[], action)=>{
  switch(action.type){
    case 'ADD_TODO' :
      return state.concat({
        id  : action.taskID,
        name: action.taskName,
        complete: false
      });
    case 'FINISHED_TODO':
      return state.map((task)=>task.id === action.taskID ? {
            ...task,
            complete : true} : task
      );
    default :
      return state;
  }
}

export default todoReducer;
