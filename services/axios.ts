import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://lap-gerencial-back.herokuapp.com/',
  timeout: 5000,
})

export default axiosInstance
