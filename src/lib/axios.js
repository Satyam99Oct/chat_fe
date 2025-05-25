import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chat-be-dxpo.onrender.com" : "/api",
  withCredentials: true,
});
