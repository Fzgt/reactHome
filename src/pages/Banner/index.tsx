import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="bg-[blue] w-[200px] h-[400px]">
      <Link to="/music-room">音乐馆</Link>
      <Link to="/my-music">我的音乐</Link>
      <Outlet />
    </div>
  );
}
