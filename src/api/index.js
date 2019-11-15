import { get,post } from "../utils/request.js";

const API_URL = "https://test.youbaobao.xyz:18081";
const APP_ID = "wx51c59e942f6d598b";
const APP_SECRET = "3cba052edfcb632ec33b7fdc6edab8ce";
export function getHomeData(params) {
  return get(`${API_URL}/book/home/v2`, params);
}
export function recommend() {
  return get(`${API_URL}/book/home/recommend/v2`);
}
export function freeRead() {
  return get(`${API_URL}/book/home/freeRead/v2`);
}
export function hotBook() {
  return get(`${API_URL}/book/home/hotBook/v2`);
}

export function getOpenId(code) {
  return get(`${API_URL}/openId/get`, {
    appId: APP_ID,
    secret: APP_SECRET,
    code
  });
}

export function register(openId, userInfo) {
  return post(`${API_URL}/user/register`, {
    openId,
    platform: mpvuePlatform,
    ...userInfo
  });
}

export function search(params) {
  return get(`${API_URL}/book/search`,params)
  }
