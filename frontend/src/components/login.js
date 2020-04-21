import React from 'react';
import axios from 'axios';

export default function Login({ setError, error, setLogin, setName, setId }) {
  const handleSubmit = (e) => {
    const name = e.currentTarget.name.value;
    const pwd = e.currentTarget.password.value;

    e.preventDefault();
    axios
      .post(`http://localhost:8080/login`, { name, pwd })
      .then((res) => {
        localStorage.setItem('uid', res.data.id);
        setLogin(localStorage.getItem('uid'));
        setName(res.data.name);
        setId(res.data.id);
        setError('');
      })
      .catch((err) => {
        console.log(err);
        err.response && setError(err.response.data);
      });
  };
  return (
    <div className='login'>
      <form onSubmit={(e) => handleSubmit(e)} className='login-form'>
        <label htmlFor='name'>username: </label>
        <input type='text' name='name' required />

        <label htmlFor='password'>password</label>
        <input type='password' name='password' required />

        <button type='submit'>Login</button>
        <button
          onClick={() => {
            window.location = '/';
          }}
        >
          Register
        </button>
      </form>
      {error.error !== '' && <p className='error'>{error.error}</p>}
    </div>
  );
}
