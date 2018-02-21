import TODO from './todo_state';

const todoTaskReducer = (todo, action) =>{
  switch(action.type){
    case 'ADD_TODO':
      return {
        id  : action.taskID,
        name: action.taskName,
        complete: false
      };
    case 'FINISHED_TODO':
      return {
        ...todo,
        complete : true
      };
    case 'PENDING_TODO':
      return {
        ...todo,
        complete : false
      };
    default:
      return todo;
  }
};
//
// const todoListReducer = (todoList=[], action)=>{
//   switch(action.type){
//     case 'ADD_TODO' :
//       return todoList.concat(todoTaskReducer(undefined, action));
//     case 'FINISHED_TODO':
//       return todoList.map((task)=> {
//         return task.id === action.taskID ? todoTaskReducer(task, action) : task
//       });
//     case 'PENDING_TODO':
//       return todoList.map((task)=> {
//         return task.id === action.taskID ? todoTaskReducer(task, action) : task
//       });
//     default :
//       return todoList;
//   }
// };


const todoListReducer = (state=TODO.initialState(), action)=>{
  switch(action.type){
    case 'ADD_TODO' :
      return TODO.addTask(state, action.taskName )
    case 'FINISHED_TODO':
      return state.map((task)=> {
        return task.id === action.taskID ? todoTaskReducer(task, action) : task
      });
    case 'PENDING_TODO':
      return state.map((task)=> {
        return task.id === action.taskID ? todoTaskReducer(task, action) : task
      });
    default :
      return state;
  }
};

export default todoListReducer;


