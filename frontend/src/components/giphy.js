import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiphyList from './giphyList';
import colorSignMap from './colorSignMap';

export default function Giphy({ socket, user, clicked }) {
  let [gifs, setGifs] = useState([]);
  let [done, setDone] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const setData = (data) => {
    gifs = [];
    data.forEach((ele) => {
      const gif = { img: ele.images.fixed_height_small };
      gifs.push(gif);
    });
    setGifs(gifs);
    done = true;
    setDone(done);
  };

  const fetchBySearch = () => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ur59uiFSFXhPV9VS4FacayxkgdT6YNsQ&limit=24`,
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchTrending = () => {
    axios
      .get(
        `http://api.giphy.com/v1/gifs/trending?api_key=ur59uiFSFXhPV9VS4FacayxkgdT6YNsQ&limit=24`,
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearchBarChange = (search) => {
    setSearchTerm(search);
  };

  useEffect(() => {
    console.log(searchTerm);
    searchTerm !== '' ? fetchBySearch(searchTerm) : fetchTrending();
  }, [searchTerm]);

  useEffect(() => {
    if (done) {
      setDone(false);
      console.log(gifs.length);
    }
  }, [done]);

  return (
    <div className='emoji-container'>
      {gifs.length !== 0 && (
        <GiphyList socket={socket} gifs={gifs} user={user} clicked={clicked} />
      )}
      <input
        type='text'
        placeholder='Search GIPHY...'
        value={searchTerm}
        onChange={(ev) => handleSearchBarChange(ev.target.value)}
        style={{ backgroundColor: `${colorSignMap[user.sign]}` }}
      />
    </div>
  );
}
