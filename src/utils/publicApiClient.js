import axios from "axios";

const BaseProductionURL = import.meta.env.VITE_API_BASE_URL_PROD


const publicApi = axios.create({
  baseURL: BaseProductionURL,
});

export default publicApi;
