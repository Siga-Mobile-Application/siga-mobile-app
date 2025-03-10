import Loading from "@/components/loading";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import * as Application from 'expo-application';
import StyledText from "@/components/styled-text";
import { apiAppVersion } from "@/helper/axios";
import { Link, LinkText } from "@/components/ui/link";
import { useIsFocused } from "@react-navigation/native";
import HelperContext from "@/contexts/assistant";
import { VStack } from "@/components/ui/vstack";

export default function Configuration() {
    const [load, setLoad] = useState(true);
    const [msg, setMsg] = useState('');

    const { reload } = useContext(HelperContext);
    const isFocused = useIsFocused();

    const APPCURRENTVERSION = Application.nativeApplicationVersion;

    async function fetchAppVersion() {
        setLoad(true);

        await apiAppVersion.get("latest").then((data) => {
            const responseURL: string = data.request.responseURL;

            if (!responseURL.endsWith("releases")) {
                const latestVersion = responseURL.substring(responseURL.lastIndexOf('v') + 1);

                if (latestVersion == APPCURRENTVERSION) {
                    setMsg('Aplicativo na versão mais atual');
                } else {
                    setMsg('Uma versão mais atualizada foi encontrada');
                }
            } else {
                setMsg('Nenhuma versão encontrada');
            }
        }).catch((e) => {
            setMsg("Erro ao verificar a versão");
        }).finally(() => {
            setLoad(false);
        });
    }

    useEffect(() => {
        if (isFocused) {
            fetchAppVersion();
        }
    }, [reload]);

    return (
        load ?

            <View className='w-full h-full justify-center'>
                <Loading />
            </View>

            :

            <VStack className="h-full items-center justify-between">
                <View style={{ height: '50%', justifyContent: 'flex-end' }}>
                    <StyledText size="lg" text={msg} />
                    {
                        msg.includes("atualizada") &&

                        <Link href={`${apiAppVersion.getUri()}latest`}>
                            <LinkText>
                                Clique aqui para baixar
                            </LinkText>
                        </Link>
                    }
                </View>

                <View style={{}}>
                    <StyledText fontWeight="bold" size="lg" text={`Versão atual: ${APPCURRENTVERSION}`} />
                </View>
            </VStack>
    )
}