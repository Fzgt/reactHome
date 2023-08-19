//Search page

export interface SearchBoxProps {
  onSearch: (query: string) => Promise<SearchResult>;
}

export interface SongObj {
  name: string;
  id: number;
}

interface SearchResult {
  data: {
    result: {
      songs: [];
    };
  };
}
