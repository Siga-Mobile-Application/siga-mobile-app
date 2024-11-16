import HistoryData from "@/components/history";
import Loading from "@/components/loading";
import AuthContext from "@/contexts/auth";
import HelperContext from "@/contexts/helper";
import api from "@/helper/axios";
import { DisciplineHistoryProps } from "@/interfaces/history";
import { useContext, useEffect, useState } from "react";
import { Text } from "react-native";
import { View, StyleSheet, ToastAndroid } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import ButtonReload from "@/components/reload-button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadGlobaData } from "@/helper/loadData";

export default function History() {
    const [data, setData] = useState<DisciplineHistoryProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { reload } = useContext(HelperContext);
    const { getAuth, isConnected } = useContext(AuthContext);

    const isFocused = useIsFocused();

    async function loadData() {
        setLoading(true);

        await loadGlobaData({ getAuth, setData, type: 'history' }).finally(() => { setLoading(false); });
    }

    async function loadLocalData() {
        await AsyncStorage.getItem('history')
            .then((res) => {
                if (res) {
                    setData(JSON.parse(res));
                    setLoading(false);
                } else {
                    loadData();
                }
            });
    }


    useEffect(() => {
        loadLocalData();
    }, []);

    useEffect(() => {
        if (isFocused) {
            loadData();
        }
    }, [reload]);

    return (
        <View style={styles.container}>
            {
                loading ?

                    <Loading />
                    :

                    !data.length ?

                        <View className='w-full h-full justify-center align-center'>
                            <Text>{isConnected ? 'Não foi possível resgatar os dados' : 'Sem conexão com a internet'}</Text>
                        </View>

                        :

                        <View style={styles.dataContainer}>
                            <HistoryData disciplines={data} />
                        </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    dataContainer: {
        width: '100%',
        height: '100%',
        flexShrink: 1
    },
    inputContainer: {
        width: '100%',
        padding: 15,
        backgroundColor: '0,0,0,0.5'
    }
});
