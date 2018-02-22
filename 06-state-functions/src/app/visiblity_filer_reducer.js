const visibilityFilterReducer = (visibilityFilter={showCompleted: false}, action)=>{
  switch(action.type){
    case "SET_VISIBILITY_FILTER" :
      return {
        ...visibilityFilter,
        showCompleted: action.showCompleted
      };
    default:
      return visibilityFilter;
  }
};

export default visibilityFilterReducer;

