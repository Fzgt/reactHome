// import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
// import { addPending, removePending } from "./cancel";
// import { storage } from "../localStorage/index";
// import { LoginInfo } from "@models/loginInfo";
import axios from 'axios';
import qs from 'qs';

const rq = axios.create({
  baseURL:
    'https://service-d2pitbvp-1304006134.bj.apigw.tencentcs.com/release/',
  timeout: 30000
  // headers: {
  //   "content-type": "application/json;charset=utf-8",
  // },
  // withCredentials: true,
});
// rq.interceptors.request.use((config: AxiosRequestConfig) => {
//   let userInfo: Partial<LoginInfo> = {};
//   try {
//     userInfo = storage.get("userInfo");
//   } catch (error) {
//     userInfo = {};
//   }
//   config.headers.xs = (userInfo && userInfo.sign) || "";
//   addPending(config);
//   return config;
// });
// rq.interceptors.response.use(
//   (res: AxiosResponse) => {
//     removePending(res);
//     return res.data as any;
//   },
//   (err) => {
//     if (!axios.isCancel(err)) {
//       console.error(err);
//     }
//   }
// );
const http = {
  get(url: string) {
    return rq({
      url: url,
      method: 'GET'
    });
  },
  post(url: string, params = {}) {
    return rq({
      url: url,
      method: 'POST',
      // 将对象序列化成URL的形式，以&进行拼接
      data: qs.stringify(params)
    });
  }
};
export { http };
