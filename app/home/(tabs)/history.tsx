import Filter from "@/components/filter";
import HistoryData from "@/components/history";
import Loading from "@/components/loading";
import StyledInput from "@/components/styled-input";
import AuthContext from "@/contexts/auth";
import FilterContext from "@/contexts/filter";
import api from "@/helper/axios";
import { DisciplineHistoryProps } from "@/interfaces/history";
import { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

export default function History() {
    const [data, setData] = useState<DisciplineHistoryProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { getAuth } = useContext(AuthContext);
    const { isOpen } = useContext(FilterContext);

    useEffect(() => {
        getAuth().then((res) => {
            api.get('/data/history', { headers: { authorization: res } })
                .then((response) => {
                    setData(response.data.data);
                }).finally(() => {
                    setLoading(false);
                });
        });
    }, []);

    return (
        <>
            <Filter />
            <View style={styles.container}>
                {
                    loading ?
                        <Loading />
                        :
                        <View style={styles.dataContainer}>
                            <HistoryData disciplines={data} />
                        </View>
                }
            </View>
        </>
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
