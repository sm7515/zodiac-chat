import React, { useEffect, useState } from 'react';
import Messenger from './messenger';
import Axios from 'axios';
import { apiUrl } from '../config';

export default function Home({ setLogin, user, setImg, setSign, setName }) {
  let uid = localStorage.getItem('uid');
  let [done, setDone] = useState(false);

  useEffect(() => {
    uid = localStorage.getItem('uid');
    user.id = uid;
    uid !== '' &&
      Axios.get(`${apiUrl}/user?id=${uid}`)
        .then((res) => {
          user.name = res.data.name;
          user.sign = res.data.sign;
          user.img = res.data.img;
          setImg(user.img);
          setSign(user.sign);
          setName(user.name);
          console.log(user);
          done = true;
          setDone(done);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  return (
    <div className='home'>
      {user.sign !== '' && user.img !== '' && done && (
        <Messenger user={user} setLogin={setLogin} />
      )}
    </div>
  );
}
