import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://10.10.2.152:8080/",
});
