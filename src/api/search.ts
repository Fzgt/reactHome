import { http } from '../utils/index';

// export const getInterviewExperInfo = (param: { path: string; uid: number }) => {
//   return http.post("/api/interviewExperInfo", {
//     ...param,
//   });
// }
// export function getInterviewExperList(uid: number) {
//   return http.post("/api/interviewExperList", { uid });
// }
export const getSearchData = (keyword: string) => {
  return http.get(`/search?keywords=${keyword}`);
};
