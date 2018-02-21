import TODO from './todo_state';

const todoListReducer = (state=TODO.initialState(), action)=>{
  switch(action.type){
    case 'ADD_TODO' :
      return TODO.addTask(state, action.taskName )
    case 'FINISHED_TODO':
      return TODO.finishTask(state, action.taskID );
    case 'PENDING_TODO':
      return TODO.setToPending(state, action.taskID );
    default :
      return state;
  }
};

export default todoListReducer;


