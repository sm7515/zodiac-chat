const userReducer = (
  state = { name: '', dob: Date, sign: '', pwd: '' },
  action,
) => {
  switch (action.type) {
    case 'SET_NAME':
      state = { ...state, name: action.payload };
      break;
    case 'SET_DOB':
      state = { ...state, dob: action.payload };
      break;
    case 'SET_SIGN':
      state = { ...state, sign: action.payload };
      break;
    case 'SET_PWD':
      state = { ...state, pwd: action.payload };
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
