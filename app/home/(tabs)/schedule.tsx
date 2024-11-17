import Calendar from "@/components/calendar";
import Loading from "@/components/loading";
import AuthContext from "@/contexts/auth";
import { ScheduleProps } from "@/interfaces/schedule";
import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import HelperContext from "@/contexts/assistant";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Badge, BadgeText } from "@/components/ui/badge";
import StyledAccordion from "@/components/styled-accordion";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loadGlobaData } from "@/helper/loadData";

export default function Schedule() {
    const [data, setData] = useState<ScheduleProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { reload } = useContext(HelperContext);
    const { getAuth, isConnected } = useContext(AuthContext);
    const { showToast } = useContext(HelperContext);

    const isFocused = useIsFocused();

    async function loadData() {
        setLoading(true);

        await loadGlobaData({ getAuth, setData, type: 'schedule', showToast }).finally(() => { setLoading(false); });
    }

    async function loadLocalData() {
        await AsyncStorage.getItem('schedule')
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
        if (isFocused && !loading) {
            loadData();
        }
    }, [reload]);

    return (
        <>
            <View style={styles.container}>
                {
                    loading ?
                        <Loading />

                        :

                        !data ?

                            <View className='w-full h-full justify-center align-center'>
                                <Text>{isConnected ? 'Não foi possível resgatar os dados' : 'Sem conexão com a internet'}</Text>
                            </View>

                            :

                            <ScrollView contentContainerClassName="w-full">
                                <StyledAccordion size="lg" items={[
                                    {
                                        header: 'Informações',
                                        content: (<VStack className="flex-1" style={{ rowGap: 5 }}>
                                            {
                                                data.map((item) => (
                                                    <HStack className="flex-1 justify-between" key={item.disciplina}>
                                                        <Text>{item.disciplina}</Text>
                                                        <Badge>
                                                            <BadgeText>
                                                                {item.sigla}
                                                            </BadgeText>
                                                        </Badge>
                                                    </HStack>
                                                ))
                                            }
                                        </VStack>)
                                    }
                                ]} />


                                <View>
                                    <Calendar day='Segunda-Feira' data={data.filter((item) => (item.dia == 'Segunda-Feira')).sort((a, b) => (a.horario.toString().localeCompare(b.horario.toString())))} />
                                </View>
                                <View>
                                    <Calendar day='Terça-Feira' data={data.filter((item) => (item.dia == 'Terça-Feira')).sort((a, b) => (a.horario.toString().localeCompare(b.horario.toString())))} />
                                </View>
                                <View>
                                    <Calendar day='Quarta-Feira' data={data.filter((item) => (item.dia == 'Quarta-Feira')).sort((a, b) => (a.horario.toString().localeCompare(b.horario.toString())))} />
                                </View>
                                <View>
                                    <Calendar day='Quinta-Feira' data={data.filter((item) => (item.dia == 'Quinta-Feira')).sort((a, b) => (a.horario.toString().localeCompare(b.horario.toString())))} />
                                </View>
                                <View>
                                    <Calendar day='Sexta-Feira' data={data.filter((item) => (item.dia == 'Sexta-Feira')).sort((a, b) => (a.horario.toString().localeCompare(b.horario.toString())))} />
                                </View>
                                <View>
                                    <Calendar day='Sábado' data={data.filter((item) => (item.dia == 'Sábado')).sort((a, b) => (a.horario.toString().localeCompare(b.horario.toString())))} />
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