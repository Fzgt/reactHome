import Banner from '@pages/Banner/index';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

const Layout: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />}>
            {/* <Route index element={<Home />} /> */}
            {/* <Route index element={<SongList />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
