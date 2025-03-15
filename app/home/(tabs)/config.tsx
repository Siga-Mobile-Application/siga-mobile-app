import Loading from "@/components/loading";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import StyledText from "@/components/styled-text";
import { apiAppVersion } from "@/helper/axios";
import { Link, LinkText } from "@/components/ui/link";
import { useIsFocused } from "@react-navigation/native";
import HelperContext from "@/contexts/assistant";
import { VStack } from "@/components/ui/vstack";
import VersionContext from "@/contexts/version";

export default function Configuration() {
    const [load, setLoad] = useState(true);
    const [msg, setMsg] = useState('');

    const { fetchVersion, currentVersion } = useContext(VersionContext);
    const { reload } = useContext(HelperContext);
    const isFocused = useIsFocused();

    async function fetchAppVersion() {
        setLoad(true);

        fetchVersion().then((response) => {
            setMsg(response);
        }).catch((e) => {
            setMsg('Erro ao verificar a versão');
        }).finally(() => {
            setLoad(false)
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
                    <StyledText fontWeight="bold" size="lg" text={`Versão atual: ${currentVersion}`} />
                </View>
            </VStack>
    )
}