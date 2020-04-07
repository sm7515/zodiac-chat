const errorReducer = (state = { error: '' }, action) => {
  if (action.type === 'SET_ERROR') {
    state = { ...state, error: action.payload };
  }
  return state;
};

export default errorReducer;
