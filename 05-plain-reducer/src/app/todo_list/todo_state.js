export default {
  initialState: () => [],
  addTask: (state, name)=> state.concat({
    id: state.length,
    name: name
  })
}
