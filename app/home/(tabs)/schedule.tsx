import Calendar from "@/components/calendar";
import Loading from "@/components/loading";
import AuthContext from "@/contexts/auth";
import FilterContext from "@/contexts/helper";
import api from "@/helper/axios";
import { ScheduleProps } from "@/interfaces/schedule";
import { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, ToastAndroid, View } from "react-native";
import { useIsFocused } from '@react-navigation/native';
import HelperContext from "@/contexts/helper";
import ButtonReload from "@/components/reload-button";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Badge, BadgeText } from "@/components/ui/badge";
import StyledAccordion from "@/components/styled-accordion";

export default function Schedule() {
    const [data, setData] = useState<ScheduleProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { reload } = useContext(HelperContext);
    const { getAuth } = useContext(AuthContext);

    const isFocused = useIsFocused();

    function loadData() {
        setLoading(true);

        getAuth().then((res) => {
            api.get('/data/schedule', { headers: { authorization: res } })
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
        <>
            <View style={styles.container}>
                {
                    loading ?
                        <Loading />

                        :

                        !data ?

                            <View className='w-full h-full justify-center'>
                                <Text>Não foi possível resgatar os dados</Text>
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