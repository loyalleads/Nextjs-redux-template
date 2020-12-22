const counterReducer = (state = 0, action) => {
  switch (action.type) {
     case "INCREMENT":
        state = action.payload? state + action.payload:state+1;
      return state;
    default:
      return state;
  }
}

export default counterReducer;