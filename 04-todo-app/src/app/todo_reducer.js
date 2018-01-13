import Redux from 'redux';

const todoReducer = (state=[], action)=>{
  switch(action.type){
    case 'ADD_TODO' :
      return state.concat({
        id  : action.taskID,
        name: action.taskName
      });
    default :
      return state;
  }
}

export default todoReducer;
