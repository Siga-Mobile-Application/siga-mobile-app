import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from '@/components/ui/text';
import StyledInput from '@/components/styled-input';
import { DisciplineProps } from '@/interfaces/disciplines';
import Calendar from '@/components/calendar';
import api from '@/helper/axios';
import AuthContext from '@/contexts/auth';
import { GradeProps } from '@/interfaces/grade';
import Loading from '@/components/loading';
import StyledTitle from '@/components/styled-title';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';

export default function Control() {
    const [option, setOption] = useState('Notas Parciais');
    const [data, setData] = useState<GradeProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { getAuth } = useContext(AuthContext);
    const options = [{ name: 'Notas Parciais', id: '2' }, { name: 'Faltas Parciais', id: '3' }];

    useEffect(() => {
        getAuth().then((res) => {
            api.get('/data/grade', { headers: { authorization: res } })
                .then((response) => {
                    setData(response.data.data);
                }).finally(() => {
                    setLoading(false);
                });
        });
    }, []);

    return (
        loading ?
            <Loading />

            :

            <ScrollView contentContainerStyle={styles.container}>
                {
                    data.map((item) => (
                        <View style={styles.container}>
                            <StyledTitle size='2xl' text={item.disciplina} />
                            {
                                item.datas.map((avaliacao) => (
                                    <VStack>
                                        <Text>{avaliacao.data_prevista}</Text>
                                        <HStack>
                                            <Text>Avaliação: {avaliacao.titulo} | </Text>
                                            {avaliacao.avaliacoes.map((assess) => (
                                                <Text>Nota: {assess.nota_parcial}, Data lançamento: {assess.data_lancamento}</Text>
                                            ))}
                                        </HStack>
                                    </VStack>
                                ))
                            }
                        </View>
                    ))
                }
            </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignContent: 'center',
        textAlign: 'justify',
    },
    inputContainer: {
        width: '100%',
        padding: 15,
    }
})