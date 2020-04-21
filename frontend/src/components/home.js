import React, { useEffect, useState } from 'react';
import Messenger from './messenger';
import Axios from 'axios';

export default function Home({ setLogin, user, setImg, setSign, setName }) {
  let uid = localStorage.getItem('uid');
  let [done, setDone] = useState(false);

  useEffect(() => {
    user.id = uid;
    uid !== '' &&
      Axios.get(`http://linserv1.cims.nyu.edu:23203/user?id=${uid}`)
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
