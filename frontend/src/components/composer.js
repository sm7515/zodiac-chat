import React, { Component } from 'react';
import Giphy from './giphy';
import colorSignMap from './colorSignMap';

class Composer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.submit = this.submit.bind(this);
    this.click = this.click.bind(this);
  }

  submit(e) {
    //When entering a message. Send it to the server and clear value the input
    e.preventDefault();
    this.props.socket.emit('new message', [
      e.target.text.value,
      this.props.user,
    ]);
    e.target.text.value = '';
  }

  click(bool) {
    this.setState({ clicked: bool });
  }

  render() {
    return (
      <div className='total-container'>
        <form onSubmit={this.submit} className='composer-container'>
          <input
            autoComplete='off'
            name='text'
            className='composer'
            autoFocus={true}
          ></input>
        </form>
        <button
          className='emoji-picker'
          onClick={() => this.setState({ clicked: !this.state.clicked })}
        >
          <a
            href='https://icons8.com/icon/85774/happy'
            style={{ display: 'none' }}
          >
            Happy icon by Icons8
          </a>
          <img
            src={`https://img.icons8.com/material-outlined/48/${colorSignMap[
              this.props.user.sign
            ].slice(1)}/happy.png`}
          />
        </button>
        {this.state.clicked && (
          <Giphy
            socket={this.props.socket}
            user={this.props.user}
            clicked={this.click}
          />
        )}
      </div>
    );
  }
}

export default Composer;
