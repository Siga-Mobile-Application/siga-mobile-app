import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./axios";
import { ToastAndroid } from "react-native";

interface loadGlobaDataProps {
    getAuth: () => Promise<string>
    setData: any
    type: string
}

export async function loadGlobaData({ getAuth, setData, type }: loadGlobaDataProps): Promise<void> {
    await getAuth().then(async (res) => {
        if (res && !res.match("conexão")) {
            await api.get(`/data/${type}`, { headers: { authorization: res } })
                .then((response) => {
                    setData(response.data.data);
                    AsyncStorage.setItem(type, JSON.stringify(response.data.data));
                })
                .catch((e) => {
                    if (!e.status) {
                        ToastAndroid.showWithGravity('Problema com o servidor, tente novamente mais tarde', ToastAndroid.SHORT, ToastAndroid.TOP);
                    } else {
                        ToastAndroid.showWithGravity(e.response.data.error, ToastAndroid.SHORT, ToastAndroid.TOP);
                    }
                });
        }
    });
}