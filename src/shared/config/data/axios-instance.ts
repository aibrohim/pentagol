import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.BACK_URL,
});
