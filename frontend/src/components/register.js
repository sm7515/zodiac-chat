import React from 'react';
import axios from 'axios';

export default function Register({ setError, error }) {
  const handleSubmit = (e) => {
    const name = e.currentTarget.name.value;
    const pwd = e.currentTarget.password.value;
    const dob = e.currentTarget.dob.value;

    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, { name, pwd, dob })
      .then(() => {
        window.location = '/login';
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data);
      });
  };

  return (
    <div className='register'>
      <form onSubmit={(e) => handleSubmit(e)} className='register-form'>
        <label htmlFor='name'>username: </label>
        <input type='text' name='name' required />
        <label htmlFor='dob'>Date of Birth</label>
        <input
          type='date'
          name='dob'
          max={new Date().toJSON().slice(0, 10)}
          required
        />
        <label htmlFor='password'>password</label>
        <input type='password' name='password' minlength='6' required />

        <button type='submit'>Register</button>
        <button
          onClick={() => {
            window.location = '/login';
          }}
        >
          Login
        </button>
      </form>
      {error.error !== '' && <p className='error'>{error.error}</p>}
    </div>
  );
}
