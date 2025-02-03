import axios from "axios";
import API_BASE from "../config/index.js";
const axiosInstance = axios.create({
    baseURL: API_BASE,
    withCredentials: true,
})

export default axiosInstance