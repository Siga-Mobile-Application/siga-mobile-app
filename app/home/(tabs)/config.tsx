import Loading from "@/components/loading";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import * as Application from 'expo-application';
import StyledText from "@/components/styled-text";
import { apiAppVersion } from "@/helper/axios";
import { Link } from "@/components/ui/link";
import { useIsFocused } from "@react-navigation/native";
import HelperContext from "@/contexts/assistant";

export default function Configuration() {
    const [load, setLoad] = useState(true);
    const [msg, setMsg] = useState('');

    const { reload } = useContext(HelperContext);
    const isFocused = useIsFocused();

    const APPCURRENTVERSION = Application.nativeApplicationVersion;

    async function fetchAppVersion() {
        await apiAppVersion.get("latest").then((data) => {
            const responseURL: string = data.request.responseURL;

            if (!responseURL.endsWith("releases")) {
                const latestVersion = responseURL.substring(responseURL.lastIndexOf('v') + 1);

                if (latestVersion == APPCURRENTVERSION) {
                    setMsg('Aplicativo na versão mais atual. \nVersão: ' + APPCURRENTVERSION);
                } else {
                    setMsg('Uma versão mais atualizada foi encontrada');
                }
            } else {
                setMsg('Nenhuma versão encontrada');
            }
        }).catch((e) => {
            setMsg("Erro ao verificar a versão");
        });

        setLoad(false);
    }

    useEffect(() => {
        fetchAppVersion();
    }, [isFocused, reload]);

    return (
        load ?

            <View className='w-full h-full justify-center'>
                <Loading />
            </View>

            :

            <View className='w-full h-full justify-center items-center'>
                <StyledText text={msg} />
                {msg.includes("atualizada") && <Link href={`${apiAppVersion.getUri()}latest`}><StyledText text="Clique aqui para baixar" /></Link>}
            </View>

    )
}