import React, { Component } from 'react';
import io from 'socket.io-client';

import Message from './message';
import Composer from './composer';

class Messenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };
    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.setItem('uid', '');
    this.props.setLogin(localStorage.getItem('uid'));
    this.socket.disconnect();
  }

  componentDidMount() {
    this.socket = io.connect('http://linserv1.cims.nyu.edu:23203/');

    this.socket.on('connect', () => {
      console.log(this.props.user);
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
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    this.socket = io.connect('http://linserv1.cims.nyu.edu:23203/');
  }

  componentWillUnmount() {}

  render() {
    let data = this.state.messages
      .map((msg, i) => {
        console.log(msg);
        return (
          <Message
            myName={msg.name === this.props.user.name}
            text={msg.text}
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
        <button onClick={this.logout}>logout</button>
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
