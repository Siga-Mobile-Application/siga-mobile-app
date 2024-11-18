import axios from "axios";
import Constants from "expo-constants";

const uri = process.env.EXPO_PUBLIC_GET_DATA_API ? process.env.EXPO_PUBLIC_GET_DATA_API : `http://${Constants.expoConfig?.hostUri?.split(':').shift()}:3000`;

const api = axios.create({
   baseURL: uri,
   timeout: 30000
});

// api.defaults.withCredentials = true;

export default api;