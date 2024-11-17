import axios from "axios";
import Constants from "expo-constants";

const uri = Constants.expoConfig?.hostUri ?
   "https://e5kuh6y3sh.execute-api.sa-east-1.amazonaws.com/siga-app-dev/" :
   `http://${Constants.expoConfig?.hostUri?.split(':').shift()}:3000`

const api = axios.create({
   baseURL: uri,
   timeout: 30000
});

// api.defaults.withCredentials = true;

export default api;