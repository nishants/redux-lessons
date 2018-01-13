import todo from './todo_list_reducer';
import visibilityFilter from './visiblity_filer_reducer';
import {combineReducers} from 'redux';

/*
 Without using combineReducer
 ----------------------------------------
const toddReducer = (state = {}, action)=> {
    return {
      todo: todo(state.todo, action),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    }
};
export default toddReducer;
*/

/*
Custom combineReducer
----------------------------------------

const combineReducers = (reducers)=>{
  var keyReducerMapping = [];
  for(var key in reducers){
    keyReducerMapping.push({
      key: key,
      reducer: reducers[key]
    });
  }
  return (state = {}, action)=>{
    var newState = {};
    keyReducerMapping.forEach((mapping)=> {
      newState[mapping.key] = mapping.reducer(state[mapping.key], action);
    });
    return newState;
  };
};
*/

export default combineReducers({
  todo,
  visibilityFilter,
});


