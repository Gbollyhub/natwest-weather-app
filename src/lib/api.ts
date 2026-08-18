import axios from "axios";

const api = axios.create({ baseURL: `${process.env.NEXT_WEATHER_API_URL}/v1/` });

export default api;