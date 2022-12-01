import axios from "axios"
// import authHeader from "./jwt-token-access/auth-token-header"





export const IMGURL = 'http://localhost:7806/uploads/user/'
// export const IMGURL = 'https://www.prosmapgarage.com/uploads/user/'



// const axiosApi = axios.create({
//   baseURL: API_URL,
// })



// axiosApi.interceptors.response.use(
//   response => response,
//   error => Promise.reject(error)
// )

export async function get(url, config = {}) {
  return await axios.get(url, { ...config }).then(response => response.data)
}

export async function post(url, data, config = {}) {
  return axios
    .post(url, data, { ...config })
    .then(response => response.data)
}

export async function put(url, data, config = {}) {
  return axios
    .put(url, data , { ...config })
    .then(response => response.data)
}

export async function del(url, config = {}) {
  return await axios
    .delete(url, { ...config })
    .then(response => response.data)
}


