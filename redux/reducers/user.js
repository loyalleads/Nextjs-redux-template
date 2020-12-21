const initialState = {
  id:'42398742364239847239',
  name: 'sherifduck',
  age: 43,
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      state = {
        id: action.payload.id,
        name: action.payload.name,
        age: action.payload.age,
      }
      return state;
    default: return state
  }
}
export default userReducer;