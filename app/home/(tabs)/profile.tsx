import StyledAvatar from '@/components/styled-avatar-icon';
import StyledButton from '@/components/styled-button';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { router } from 'expo-router';
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
        <View style={style.container}>
            <Box style={{ alignItems: 'stretch', flex: 3, justifyContent: 'center' }}>
                <StyledAvatar name={profileInfo.nome} image={profilePicture} subTitle={profileInfo.curso} />
            </Box>

            <Box style={{ flex: 1 }}>
                <StyledButton color='#BF4647' text='Sair' onClick={() => { router.replace('/') }} />
            </Box>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    input: {
        width: 300
    }
})