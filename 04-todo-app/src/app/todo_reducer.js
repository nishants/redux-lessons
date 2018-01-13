import todoListReducer from './todo_list_reducer';
import visibilityFilterReducer from './visiblity_filer_reducer';
import {combineReducers} from 'redux';

/*
 Custom implementation of combine reducer
 ----------------------------------------
const toddReducer = (state = {}, action)=> {
    return {
      todo: todoListReducer(state.todo, action),
      visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
    }
};
export default toddReducer;
*/

export default combineReducers({
  todo: todoListReducer,
  visibilityFilter: visibilityFilterReducer,
});
