import axios from 'axios'

const axiosInstance = axios.create({
  baseURL:
    'http://dnslapserver.southcentralus.cloudapp.azure.com:8080/wslap/dwCGIGerencial.exe',
  timeout: 5000,
})

export default axiosInstance
