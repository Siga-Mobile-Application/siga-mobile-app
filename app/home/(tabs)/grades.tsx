import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, ToastAndroid, View } from 'react-native';
import { Text } from '@/components/ui/text';
import api from '@/helper/axios';
import AuthContext from '@/contexts/auth';
import { GradeProps } from '@/interfaces/grade';
import Loading from '@/components/loading';
import StyledTitle from '@/components/styled-title';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import HelperContext from '@/contexts/helper';
import { useIsFocused } from '@react-navigation/native';
import ButtonReload from '@/components/reload-button';
import Grades from '@/components/grades';

export default function Control() {
    const [option, setOption] = useState('Notas Parciais');
    const [data, setData] = useState<GradeProps[]>([]);
    const [loading, setLoading] = useState(true);

    const { reload } = useContext(HelperContext);
    const { getAuth } = useContext(AuthContext);

    const isFocused = useIsFocused();
    const options = [{ name: 'Notas Parciais', id: '2' }, { name: 'Faltas Parciais', id: '3' }];

    function loadData() {
        setLoading(true);

        getAuth().then((res) => {
            api.get('/data/grade', { headers: { authorization: res } })
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
    };

    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        if (isFocused) {
            loadData();
        }
    }, [reload]);

    return (
        loading ?

            <View className='w-full h-full justify-center'>
                <Loading />
            </View>

            :

            !data.length ?

                <View className='w-full h-full justify-center'>
                    <Text>Não foi possível resgatar os dados</Text>
                </View>

                :

                <ScrollView contentContainerStyle={styles.container}>
                    <Grades grades={data} />
                </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignContent: 'center',
        textAlign: 'justify',
        padding: 10
    }
});