import axios from "axios";

const api = axios.create({
   baseURL: "https://siga-mobile-app-backend.onrender.com"
});

// api.defaults.withCredentials = true;

export default api;