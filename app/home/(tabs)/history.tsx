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

export default function History() {
    const [data, setData] = useState<DisciplineHistoryProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { reload } = useContext(HelperContext);
    const { getAuth } = useContext(AuthContext);

    const isFocused = useIsFocused();

    function loadData() {
        setLoading(true);

        getAuth().then((res) => {
            api.get('/data/history', { headers: { authorization: res } })
                .then((response) => {
                    setData(response.data.data);
                })
                .catch((e) => {
                    ToastAndroid.showWithGravity('Problema com o servidor, tente novamente mais tarde', ToastAndroid.SHORT, ToastAndroid.TOP);
                })
                .finally(() => {
                    setLoading(false);
                });
        });
    }

    useEffect(() => {
        loadData();
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

                        <View className='w-full h-full justify-center'>
                            <Text>Não foi possível resgatar os dados</Text>
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
