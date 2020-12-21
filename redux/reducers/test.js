const testReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_TEST":
      return state;
    default: return state
  }
}
export default testReducer;