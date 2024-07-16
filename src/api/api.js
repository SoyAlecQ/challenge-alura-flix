import axios from "axios";

const api = axios.create({
  baseURL: "https://fake--api.vercel.app",
});

export default api;
