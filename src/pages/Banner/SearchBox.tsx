import React, { useState, useEffect, ChangeEvent } from 'react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

type songType = {
  name: string;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [res, setRes] = useState<{
    code: number;
    result: {
      songs: songType[];
    };
  }>({
    code: 200,
    result: {
      songs: []
    }
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchQuery).then((res) => {
        setRes(res);
      });
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, onSearch]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <div>
        {res.result &&
          res.result.songs &&
          res.result.songs.map((song) => {
            console.log(song);
            return <li key={song.name}> {song.name}</li>;
          })}
      </div>
    </div>
  );
};

export default SearchBox;
