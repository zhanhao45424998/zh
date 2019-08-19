import axios from 'axios'
import router from '@/router'
import {getToken} from '@/utils/auth'

// 创建 axios 实例
const service = axios.create({
    baseURL: '/api',
    timeout: 10000, // 请求超时时间
    headers: {'Content-Type': 'application/json'},
});

// request拦截器
service.interceptors.request.use(
    config => {
        config.headers['token'] = String(getToken());
        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    });

// response拦截器
service.interceptors.response.use(
    response => {
        let res = response.data.pageresult;
            return Promise.resolve(res);     
    },
    error => {
        return Promise.reject(error)
    }
);

export default service
