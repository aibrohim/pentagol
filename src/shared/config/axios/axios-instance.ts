import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://10.10.3.87:8080/",
});
