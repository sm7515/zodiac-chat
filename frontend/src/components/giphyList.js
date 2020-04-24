import React from 'react';

export default function GiphyList({ socket, gifs, user, clicked }) {
  const handleClick = (e) => {
    socket.emit('new gif', [e.currentTarget.src, user]);
    clicked(false);
  };

  return (
    <div className='gif-items'>
      {gifs.map((ele, i) => {
        return (
          <div className='gif-item'>
            <img
              key={i}
              alt={`gif ${i}`}
              src={ele.img.url}
              onClick={(e) => {
                handleClick(e);
              }}
              height={ele.img.height * 0.8}
              width='100px'
            ></img>
          </div>
        );
      })}
    </div>
  );
}
