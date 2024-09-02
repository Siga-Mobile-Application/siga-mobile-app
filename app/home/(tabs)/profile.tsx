import ProfileHeader from '@/components/profile-tab/header';
import { StyleSheet, View } from 'react-native';

export default function Profile() {
    const profilePicture = 'https:\\siga.cps.sp.gov.br/image//6GVG96KRA8BC7EFHED58NEH6HUZD6W.TMB.JPG';
    const profileInfo = {
        nome: 'Carlos',
        curso: 'ADS', ra: '111', ciclo: '4',
        pp: '50%', pr: '9', 'pp(Intercâmbio)': '68%',
        cursando: '4', maximo: '10', faltam: '6',
        email: 'email'
    };

    return (
        <View className="h-full w-full">
            <ProfileHeader></ProfileHeader>
            {/* <VStack className="h-full w-full bg-background-0">

                <VStack className="h-full w-full">
                    <HStack className="h-full w-full">

                        <VStack className="w-full flex-1 justify-center items-center">

                            <StyledAvatar name={profileInfo.nome} image={profilePicture} subTitle={profileInfo.curso} />

                            <StyledButton color='#BF4647' text='Sair' onClick={() => { router.replace('/') }} />
                        </VStack>
                    </HStack>
                </VStack>
            </VStack> */}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})