import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://mern-json-api-server.onrender.com",
});

export default axiosInstance;
