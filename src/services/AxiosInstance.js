import axios from 'axios'
export const cfUrl = "https://sevenmentor-website.s3.eu-north-1.amazonaws.com"
export const baseUrl = "https://api.sevenmentor.com"
const axiosInstance = axios.create({
   baseURL: baseUrl +'/api/v1'
});

export default axiosInstance;