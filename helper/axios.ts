import axios from "axios";
import Constants from "expo-constants";

const uri = process.env.EXPO_PUBLIC_GET_DATA_API ? process.env.EXPO_PUBLIC_GET_DATA_API : `http://${Constants.expoConfig?.hostUri?.split(':').shift()}:3000`;
const uriAppVersion = "https://github.com/Siga-Mobile-Application/siga-mobile-app/releases/";

const api = axios.create({
   baseURL: uri,
   timeout: 30000
});

const apiAppVersion = axios.create({
   baseURL: uriAppVersion,
   timeout: 4000
});

export { apiAppVersion };
export default api;