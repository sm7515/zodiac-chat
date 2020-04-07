import React from 'react';
import axios from 'axios';

export default function Login({ setError, error, setLogin }) {
  const handleSubmit = (e) => {
    const name = e.currentTarget.name.value;
    const pwd = e.currentTarget.password.value;

    e.preventDefault();
    axios
      .post(`http://localhost:4000/login`, { name, pwd })
      .then((res) => {
        localStorage.setItem('uid', res.data);
        setLogin(localStorage.getItem('uid'));
        setError('');
      })
      .catch((err) => {
        console.log(err);
        err.response && setError(err.response.data);
      });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">username: </label>
        <input type="text" name="name" required />

        <label htmlFor="password">password</label>
        <input type="password" name="password" required />

        <input type="submit" value="Login" />
        <a href="/">Register</a>
      </form>
      {error && <p>{error.error}</p>}
    </div>
  );
}
