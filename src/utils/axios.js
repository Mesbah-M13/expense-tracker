import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://json-api-fake-server-new.herokuapp.com/",
});

export default axiosInstance;
