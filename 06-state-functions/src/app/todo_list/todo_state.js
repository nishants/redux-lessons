export default {
  initialState: () => [],

  addTask: (state, name)=> state.concat({id: state.length, name: name}),

  setFinished: (state, taskId) => (
      state.map(task=> task.id === taskId ? {...task, complete: true} : task)
  ),

  setPending: (state, taskId) => (
      state.map(task=> task.id === taskId ? {...task, complete: false} : task)
  ),

  pending: state=> state.filter(task=> !task.complete)
};
