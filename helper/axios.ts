import axios from "axios";
import Constants from "expo-constants";

const uri = Constants.expoConfig?.hostUri ?
   "https://5bn9y0qgke.execute-api.sa-east-1.amazonaws.com/siga-app-prod/" :
   `http://${Constants.expoConfig?.hostUri?.split(':').shift()}:3000`

const api = axios.create({
   baseURL: uri,
   timeout: 30000
});

// api.defaults.withCredentials = true;

export default api;