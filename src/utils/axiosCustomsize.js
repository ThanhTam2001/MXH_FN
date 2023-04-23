import axios from "axios";

import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
   
  });
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {

    console.log('>>> long ra ',response.data)

    return response && response.data ? response.data : response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    toast.error(error.response.data.message)
    console.log(">>Lỗi hệ thống",error.response.data)

    return Promise.reject(error.response ? error.response.data : error.response);
  });


 export default instance
