import Banner from '@pages/Banner/Banner';
import React, { createContext, useState } from 'react';
import './index.css';
import MusicPlayer from '@pages/Player/Player';

export const MyContext = createContext(null);

const Layout: React.FC = () => {
  const [sharedValue, setSharedValue] = useState('music src');

  // const updateValue = (value: string) => {
  //   setSharedValue(value);
  // };

  return (
    <div className="layout">
      <MyContext.Provider value={{ sharedValue, setSharedValue }}>
        <Banner></Banner>
        <MusicPlayer></MusicPlayer>
      </MyContext.Provider>
    </div>
  );
};

export default Layout;
