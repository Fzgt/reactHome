import React, {
  useState,
  useEffect,
  useCallback,
  Suspense,
  useContext
} from 'react';
import './index.css';
import { SongObj, SearchBoxProps } from '@models/banner';
import { TextField } from '@mui/material';
import { MyContext } from '@pages/Layout/Layout';

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [res, setRes] = useState<SongObj[]>([]);
  const { setSharedValue } = useContext(MyContext);
  // const deferredQuery = useDeferredValue(searchQuery);
  // const isStale = searchQuery !== deferredQuery;
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    onSearch(searchQuery).then((res) => {
      res.data.result && setRes(res.data.result.songs);
    });
  }, [searchQuery, onSearch]);

  const handleBlur = () => {
    setTimeout(() => {
      setShowResults(false);
    }, 100);
  };

  const handleClick = useCallback(
    (obj: SongObj) => {
      console.log(obj);
      setSharedValue(obj);
    },
    [searchQuery]
  );

  return (
    <div className="search-wrapper" onBlur={handleBlur}>
      <TextField
        id="search"
        label="搜索"
        defaultValue={searchQuery}
        variant="standard"
        size="small"
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowResults(true)}
      />

      <div className="show-box" style={{}}>
        <Suspense fallback={<h2>Loading...</h2>}>
          {showResults &&
            res &&
            res.slice(0, 10).map((song) => {
              return (
                <li key={song.id} onClick={() => handleClick(song)}>
                  {' '}
                  {song.name}
                </li>
              );
            })}
        </Suspense>
      </div>
    </div>
  );
};

export default SearchBox;
