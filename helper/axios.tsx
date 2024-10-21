import axios from "axios";
import Constants from "expo-constants";

const manifest = Constants.manifest2;
const uri = Constants.expoConfig?.hostUri ? `http://${Constants.expoConfig?.hostUri?.split(':').shift()}:3000` :  "" //"https://siga-mobile-app-backend.onrender.com"


console.log(uri);

const api = axios.create({
   baseURL: uri
});

// api.defaults.withCredentials = true;

export default api;