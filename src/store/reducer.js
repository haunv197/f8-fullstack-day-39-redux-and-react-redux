import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./constants";

const initState = [];

function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case EDIT_TODO: {
      const { id, name } = action.payload;
      return state.map((item) => (item.id === id ? { ...item, name } : item));
    }
    case DELETE_TODO: {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    }
    default:
      return state;
  }
}
export default reducer;
