import axios from "axios";

const api = axios.create({
   baseURL: window.location.href.match('localhost') ? "http://localhost:3000" : ''
});

api.defaults.withCredentials = true;

export default api;