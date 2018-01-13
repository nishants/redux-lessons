import todo from './todo_list_reducer';
import visibilityFilter from './visiblity_filer_reducer';
import {combineReducers} from 'redux';

/*
 Custom implementation of combine reducer
 ----------------------------------------
const toddReducer = (state = {}, action)=> {
    return {
      todo: todo(state.todo, action),
      visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    }
};
export default toddReducer;
*/

export default combineReducers({
  todo,
  visibilityFilter,
});
