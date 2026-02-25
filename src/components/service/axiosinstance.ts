import axios from "axios"
const axiosinstance = axios.create({
    baseURL: process.env.FRONTEND_NEXT_URL,
})

export default axiosinstance