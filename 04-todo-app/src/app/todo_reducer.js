import todoListReducer from './todo_list_reducer';
import visibilityFilterReducer from './visiblity_filer_reducer';


const toddReducer = (state = {}, action)=> {
    return {
      todo: todoListReducer(state.todo, action),
      visibilityFilter: visibilityFilterReducer(state.visibilityFilter, action),
    }
};

export default toddReducer;
