import Loading from "@/components/loading";
import { useEffect, useState } from "react";
import { View } from "react-native";
import * as Application from 'expo-application';
import StyledText from "@/components/styled-text";

export default function Configuration() {
    const [load, setLoad] = useState(true);
    const [msg, setMsg] = useState('');
    const APPCURRENTVERSION = Application.nativeApplicationVersion;

    function fetchAppVersion() {
        if('2.32.19' == APPCURRENTVERSION) {
            setMsg('Aplicativo na versão mais atual. \nVersão: ' + APPCURRENTVERSION);
        } else {
            setMsg('Versão mais atualizada encontrada');
        }

        setLoad(false);
    }    

    useEffect(fetchAppVersion, []);

    return (
        load ?

            <View className='w-full h-full justify-center'>
                <Loading />
            </View>

            :

            <View className='w-full h-full justify-center items-center'>
                <StyledText text={msg} />
            </View>

    )
}