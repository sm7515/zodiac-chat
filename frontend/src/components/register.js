import React from 'react';
import axios from 'axios';

export default function Register({ setError, error }) {
  const handleSubmit = (e) => {
    const name = e.currentTarget.name.value;
    const pwd = e.currentTarget.password.value;
    const dob = e.currentTarget.dob.value;

    e.preventDefault();
    axios
      .post(`http://localhost:4000/register`, { name, pwd, dob })
      .then(() => {
        window.location = '/login';
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">username: </label>
        <input type="text" name="name" required />
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="dob"
          max={new Date().toJSON().slice(0, 10)}
          required
        />
        <label htmlFor="password">password</label>
        <input type="password" name="password" minlength="6" required />

        <input type="submit" value="register" />
        <a href="/login">Login</a>
      </form>
      {error && <p>{error.error}</p>}
    </div>
  );
}
