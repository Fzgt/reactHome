import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { search } from '@api/index';
import SearchBox from './Search/index';
import './index.css';

const Banner: React.FC = () => {
  return (
    <div className="banner-wrapper">
      <div className="logo">
        <img
          src="https://y.qq.com/mediastyle/yqq/img/logo.png?max_age=2592000"
          alt=""
        />
      </div>
      <div>
        <Link to="/music-room">音乐馆</Link>
        <Link to="/my-music">我的音乐</Link>
      </div>
      <div>
        <SearchBox onSearch={search.getSearchData} />
      </div>
      <div>
        <Link to="/my-music">电台</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Banner;
