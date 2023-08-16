import Banner from '@pages/Banner/index';
import SongList from '@pages/Songs/SongList';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />}>
            {/* <Route index element={<Home />} /> */}
            <Route index element={<SongList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
