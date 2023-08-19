import React, { useState, useEffect, ChangeEvent } from 'react';
import './index.css';
import { SongObj, SearchBoxProps } from '@models/banner';

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [res, setRes] = useState<SongObj[]>([]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchQuery).then((res) => {
        res.data.result && setRes(res.data.result.songs);
      });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, onSearch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <div className="show-box">
        {res.length > 0 &&
          res.slice(0, 10).map((song) => {
            return <li key={song.id}> {song.name}</li>;
          })}
      </div>
    </div>
  );
};

export default SearchBox;
