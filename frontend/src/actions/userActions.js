export function setName(name) {
  return {
    type: 'SET_NAME',
    payload: name,
  };
}

export function setDob(dob) {
  return {
    type: 'SET_DOB',
    payload: dob,
  };
}

export function setSign(sign) {
  return {
    type: 'SET_SIGN',
    payload: sign,
  };
}

export function setPwd(pwd) {
  return {
    type: 'SET_PWD',
    payload: pwd,
  };
}

export function setLogin(uid) {
  return {
    type: 'SET_LOGIN',
    payload: uid ? true : false,
  };
}
