import React, { useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { setName, setDob, setPwd, setLogin } from './actions/userActions';
import { setError } from './actions/errorAction';

import Register from './components/register';
import Login from './components/login';
import Home from './components/home';

function App(props) {
  let uid = localStorage.getItem('uid');
  useEffect(() => {
    uid = localStorage.getItem('uid');
  });
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          {!uid ? (
            <Register
              setError={props.setError}
              error={props.error}
              setLogin={props.setLogin}
            />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>

        <Route exact path="/login">
          {!uid ? (
            <Login
              setError={props.setError}
              error={props.error}
              setLogin={props.setLogin}
            />
          ) : (
            <Redirect to="/home" />
          )}
        </Route>

        <Route exact path="/home">
          {uid ? <Home setLogin={props.setLogin} /> : <Redirect to="/login" />}
        </Route>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.userReducer, error: state.errorReducer };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
    setDob: (dob) => {
      dispatch(setDob(dob));
    },
    setPwd: (pwd) => {
      dispatch(setPwd(pwd));
    },
    setLogin: (uid) => {
      dispatch(setLogin(uid));
    },
    setError: (msg) => {
      dispatch(setError(msg));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
