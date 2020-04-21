export function setName(name) {
  return {
    type: 'SET_NAME',
    payload: name,
  };
}

export function setId(id) {
  return {
    type: 'SET_ID',
    payload: id,
  };
}

export function setSign(sign) {
  return {
    type: 'SET_SIGN',
    payload: sign,
  };
}

export function setLogin(uid) {
  return {
    type: 'SET_LOGIN',
    payload: uid ? true : false,
  };
}

export function setImg(url) {
  return {
    type: 'SET_IMG',
    payload: url,
  };
}
