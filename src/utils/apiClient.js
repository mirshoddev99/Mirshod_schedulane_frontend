import axios, { Axios } from "axios";


const BaseProductionURL = import.meta.env.VITE_API_BASE_URL_PROD



const apiClient = axios.create({
  baseURL: BaseProductionURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json"
  },
  
  // withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const t = localStorage.getItem("token");
  if (t) config.headers.Authorization = `Bearer ${t}`;
  return config;
});

export default apiClient;


