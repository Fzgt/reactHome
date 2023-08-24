// import { SongData } from '@models/player';
import { http } from '../utils/index';

export const getSongDetail = (id: number) => {
  return http.get(`/song/detail?ids=${id}`);
};

export const getSongUrl = (id: number) => {
  return http.get(`/song/url?id=${id}`);
};
