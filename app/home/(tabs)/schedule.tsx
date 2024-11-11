import Calendar from "@/components/calendar";
import Loading from "@/components/loading";
import AuthContext from "@/contexts/auth";
import FilterContext from "@/contexts/filter";
import api from "@/helper/axios";
import { ScheduleProps } from "@/interfaces/schedule";
import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Schedule() {
    const [data, setData] = useState<ScheduleProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { getAuth } = useContext(AuthContext);
    const { isOpen } = useContext(FilterContext);

    useEffect(() => {
        getAuth().then((res) => {
            api.get('/data/schedule', { headers: { authorization: res } })
                .then((response) => {
                    setData(response.data.data);
                }).finally(() => {
                    setLoading(false);
                });
        });
    }, []);

    return (
        <>
            <View style={styles.container}>
                {
                    loading ?
                        <Loading />

                        :

                        <ScrollView contentContainerClassName="w-full">
                            <View>
                                <Calendar day='Segunda-Feira' data={data.filter((item) => (item.dia == 'Segunda-Feira'))} />
                            </View>
                            <View>
                                <Calendar day='Terça-Feira' data={data.filter((item) => (item.dia == 'Terça-Feira'))} />
                            </View>
                            <View>
                                <Calendar day='Quarta-Feira' data={data.filter((item) => (item.dia == 'Quarta-Feira'))} />
                            </View>
                            <View>
                                <Calendar day='Quinta-Feira' data={data.filter((item) => (item.dia == 'Quinta-Feira'))} />
                            </View>
                            <View>
                                <Calendar day='Sexta-Feira' data={data.filter((item) => (item.dia == 'Sexta-Feira'))} />
                            </View>
                            <View>
                                <Calendar day='Sábado' data={data.filter((item) => (item.dia == 'Sábado'))} />
                            </View>
                        </ScrollView>
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column'
    }
})