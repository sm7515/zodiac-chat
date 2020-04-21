const userReducer = (
  state = { name: '', sign: '', img: '', id: '' },
  action,
) => {
  switch (action.type) {
    case 'SET_NAME':
      state = { ...state, name: action.payload };
      break;

    case 'SET_ID':
      state = { ...state, id: action.payload };
      break;

    case 'SET_SIGN':
      state = { ...state, sign: action.payload };
      break;

    case 'SET_IMG':
      state = { ...state, img: action.payload };
      break;

    case 'SET_LOGIN':
      state = { ...state, loggedin: action.payload };
      break;
    default:
      break;
  }
  return state;
};

export default userReducer;
