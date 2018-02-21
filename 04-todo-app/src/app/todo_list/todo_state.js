let TODO = {
  initialState: () => [],

  addTask: (state, name)=> state.concat({id: state.length, name: name}),

  finishTask: (state, taskId) => (
      state.map(task=> task.id === taskId ? {...task, complete: true} : task)
  ),

  setToPending: (state, taskId) => (
      state.map(task=> task.id === taskId ? {...task, complete: false} : task)
  )
};

export default TODO
