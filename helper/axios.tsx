import axios from "axios";
import Constants from "expo-constants";
import { ToastAndroid } from "react-native";

const uri = Constants.expoConfig?.hostUri ? `http://${Constants.expoConfig?.hostUri?.split(':').shift()}:3000` : "" //"https://siga-mobile-app-backend.onrender.com"

const api = axios.create({
   baseURL: uri,
   timeout: 30000
});

// api.defaults.withCredentials = true;

export default api;