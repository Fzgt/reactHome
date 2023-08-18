import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { search } from '@api/index';
import SearchBox from './SearchBox';

const Banner: React.FC = () => {
  return (
    <div className="bg-[blue] w-[200px] h-[400px]">
      <Link to="/music-room">音乐馆</Link>
      <Link to="/my-music">我的音乐</Link>
      <Outlet />

      <div>
        <h1>Search Example</h1>
        <SearchBox onSearch={search.getSearchData} />
      </div>
    </div>
  );
};

export default Banner;
