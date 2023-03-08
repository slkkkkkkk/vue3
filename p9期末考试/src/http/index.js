import axios from "axios"
const instance = axios.create({
    baseURL: 'http://www.ysqorz.top:8888/api/private/v1',
    timeout: 10000, 
  });

  instance.interceptors.request.use(function (config) {

      config.headers.Authorization = sessionStorage.getItem("token")
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {

    return Promise.reject(error);
  });


export const login = params=> instance.post("/login",params) 

export const getStudentInfo = params => instance.get("/users", params)

export const putStudentInfo = params => instance.put("users/:uId/state/:type" + params)

export const delStudentInfo = params => instance.delete("users/:id" + params)

export const postStudentInfo = params => instance.post("users/:id/role", params)


