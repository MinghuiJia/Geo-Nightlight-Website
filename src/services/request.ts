import axios from 'axios';

import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 请求拦截
instance.interceptors.request.use(
  (config) =>
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件

    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面

    // 3.params/data序列化的操作
    config,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err) => {},
);

// 响应拦截
instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('请求错误');
          break;
        case 401:
          console.log('未授权访问');
          break;
        default:
          console.log('其他错误信息');
      }
    }
    return err;
  },
);

export default instance;
