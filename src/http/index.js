/**
 *http设置
 */
import axios from 'axios'
import qs from 'qs'

//超时时间（现在，在超时前，所有请求都会等待 5 秒）
axios.default.timeout = 5000;

//http请求拦截器
axios.interceptors.request.use(config => {
    //操作....
    if (config.method === 'post') config.data = qs.stringify(config.data);
    return config

}, error => {
    //操作...
    return Promise.reject(error);
})

//http响应拦截
axios.interceptors.response.use(data => {
    //操作...
    return data;
}, error => {
    //操作...
    return Promise.reject(error);
})

export default axios