import React, { useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {
  setName,
  setSign,
  setLogin,
  setImg,
  setId,
} from './actions/userActions';
import { setError } from './actions/errorAction';

import Register from './components/register';
import Login from './components/login';
import Home from './components/home';

function App(props) {
  let uid = localStorage.getItem('uid');
  useEffect(() => {
    uid = localStorage.getItem('uid');
  }, [uid]);
  return (
    <div className='App'>
      <Router>
        <Route exact path='/'>
          {localStorage.getItem('uid') !== props.user.id ? (
            <Register setError={props.setError} error={props.error} />
          ) : (
            <Redirect to='/home' />
          )}
        </Route>

        <Route exact path='/login'>
          {props.user.id !== '' &&
          localStorage.getItem('uid') !== props.user.id ? (
            <Login
              setError={props.setError}
              error={props.error}
              setLogin={props.setLogin}
              setName={props.setName}
              setId={props.setId}
              user={props.user}
            />
          ) : (
            <Redirect to='/home' />
          )}
        </Route>

        <Route exact path='/home'>
          {uid ? (
            <Home
              setLogin={props.setLogin}
              user={props.user}
              setSign={props.setSign}
              setImg={props.setImg}
              setId={props.setId}
              setName={props.setName}
            />
          ) : (
            <Redirect to='/login' />
          )}
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
    setId: (id) => {
      dispatch(setId(id));
    },
    setSign: (sign) => {
      dispatch(setSign(sign));
    },
    setImg: (url) => {
      dispatch(setImg(url));
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
