import axios from 'axios';

const baseURL = 'https://api.ueocean.com/hotel/';

const service = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    // 发送请求前处理request的数据
    transformRequest: [function(data) {
        let newData = '';
        for (let k in data) {
            newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
        }
        // 删除"shareKey=11688&shareType=1&"类型的数据最后的&
        return newData.substring(0, newData.length - 1);
    }],
    withCredentials: true
});

// request拦截器
service.interceptors.request.use(
    (config) => {
        // 发送请求之前，要做的业务
        return config;
    },
    (error) => {
        // 错误处理代码
        return Promise.reject(error);
    }
);

// response拦截器
service.interceptors.response.use(
    (response) => {
        // 数据响应之后，要做的业务
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default service;
