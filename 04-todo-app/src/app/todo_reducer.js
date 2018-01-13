import Redux from 'redux';

const todoReducer = (state=[], action)=>{
  switch(action.type){
    case 'ADD_TODO' :
      return null;
    default :
      return state;
  }
}

export default todoReducer;
