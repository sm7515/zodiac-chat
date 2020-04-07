import React from 'react';

export default function Home({ setLogin }) {
  const logout = () => {
    localStorage.setItem('uid', '');
    setLogin(localStorage.getItem('uid'));
  };

  return (
    <div>
      <button onClick={() => logout()}>logout</button>
      home
    </div>
  );
}
