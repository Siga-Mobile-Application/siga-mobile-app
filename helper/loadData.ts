import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "./axios";

interface loadGlobaDataProps {
    getAuth: () => Promise<string>
    showToast: any
    setData: any
    type: string
}

export async function loadGlobaData({ getAuth, showToast, setData, type }: loadGlobaDataProps): Promise<void> {
    return await getAuth().then(async (res) => {
        if (res && !res.match("conexão")) {
            await api.get(`/data/${type}`, { headers: { authorization: res } })
                .then((response) => {
                    setData(response.data.data);
                    AsyncStorage.setItem(type, JSON.stringify(response.data.data));
                })
                .catch((e) => {
                    if (!e.status) {
                        showToast({ title: 'Problema com o servidor', message: 'Tente novamente mais tarde', action: 'error' });
                    } else {
                        showToast({ title: 'Erro', message: e.response.data.error, action: 'error' });
                    }
                });
        }
    });
}