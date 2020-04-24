import React, { Component } from 'react';
import colorSignMap from './colorSignMap';

class Message extends Component {
  render() {
    let border = '10px solid' + colorSignMap[this.props.sign];

    //Style messages based on whether or not they belong to us
    let style = {
      alignSelf: this.props.myName ? 'flex-end' : 'flex-start',
      flexDirection: this.props.myName ? 'row-reverse' : 'row',
      borderLeft: this.props.myName ? 'none' : border,
      borderRight: this.props.myName ? border : 'none',
    };

    let imgBg = colorSignMap[this.props.sign];

    let time = new Date(this.props.timestamp);
    return (
      <div className='Message' style={style}>
        <div className='profile-img' style={{ backgroundColor: `${imgBg}` }}>
          <img src={this.props.img} alt='zodiac-sign'></img>
        </div>
        {this.props.text && <p>{this.props.text}</p>}
        {this.props.gif && <img alt='gif' src={this.props.gif}></img>}
        <span className='timestamp'>
          <span>{this.props.name}</span>
          {time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()}
        </span>
      </div>
    );
  }
}

export default Message;
