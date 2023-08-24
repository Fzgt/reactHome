import React, { useContext, useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { MyContext } from '@pages/Layout/Layout';
import { player } from '@api/index';

const MusicPlayer: React.FC = () => {
  const { getSongUrl } = player;
  const { sharedValue } = useContext(MyContext);
  const [url, setUrl] = useState('');
  console.log(sharedValue);

  useEffect(() => {
    getSongUrl(sharedValue.id).then((res) => {
      const url = res && res.data.data && res.data.data[0].url;

      console.log(url);
      setUrl(url);
    });
  }, [sharedValue]);

  return (
    <>
      <ReactAudioPlayer src={url} autoPlay controls />
    </>
  );
};

export default MusicPlayer;
