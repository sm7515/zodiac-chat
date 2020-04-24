import React, { Component } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import Message from './message';
import Composer from './composer';
import colorSignMap from './colorSignMap';

class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    axios
      .post(`${process.env.REACT_APP_API_URL}/login/logout`, {
        id: this.props.user.id,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('uid', '');
        this.props.setLogin(false);
        this.socket.disconnect();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.socket = io.connect(`${process.env.REACT_APP_API_URL}`);
    this.socket.on('connect', () => {
      this.socket.emit('request sign', [
        this.props.user.sign,
        this.props.user.name,
        this.props.user.img,
      ]);
    });

    this.socket.on('new message', (data) => {
      let newMessages = this.state.messages.slice();
      newMessages.push(data);
      this.setState({ messages: newMessages });
    });

    this.socket.on('socket in use', () => {
      window.location = '/login';
    });
  }

  componentWillUnmount() {}

  render() {
    let data = this.state.messages
      .map((msg, i) => {
        return (
          <Message
            myName={msg.name === this.props.user.name}
            text={msg.text && msg.text}
            gif={msg.gif && msg.gif}
            sign={msg.sign}
            timestamp={msg.timestamp}
            img={msg.img}
            name={msg.name}
            key={i}
          />
        );
      })
      .reverse();

    return (
      <div>
        <button
          onClick={this.logout}
          className='logout'
          style={{
            border: `2px solid ${colorSignMap[this.props.user.sign]}`,
            color: `${colorSignMap[this.props.user.sign]}`,
          }}
        >
          logout
        </button>
        <div className='container'>
          <div className='messages'>{data}</div>
        </div>
        <div className='text-area'>
          <Composer socket={this.socket} user={this.props.user} />
        </div>
      </div>
    );
  }
}

export default Messenger;
