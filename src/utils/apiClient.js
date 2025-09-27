import axios, { Axios } from "axios";


const isDevelopment = import.meta.env.MODE == "development"
const baseURL2 = isDevelopment ? import.meta.env.VITE_API_URL : import.meta.env.VITE_API_BASE_URL_PROD



const apiClient = axios.create({
  baseURL: baseURL2,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json"
  },
  
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const t = localStorage.getItem("token");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export default apiClient;


