import { http } from '../utils/index';

export const getSearchData = (keyword: string) => {
  return http.get(`/search?keywords=${keyword}`);
};
