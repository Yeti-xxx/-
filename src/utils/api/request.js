import axios from 'axios';
import {useUserStore} from '../../store/user'

//1. 创建axios对象
const service = axios.create();

//2. 请求拦截器
service.interceptors.request.use(config => {
  // 获取user仓库中的token，并在请求头中设置
  const userStore = useUserStore()
  const token = userStore.token
  // token存在设置请求头
  if (token) {
    config.headers['Authorization'] = token
  }
  return config;
}, error => {
  Promise.reject(error);
});

//3. 响应拦截器
service.interceptors.response.use(response => {
  //判断code码
  return response.data;
},error => {
  return Promise.reject(error);
});

export default service;