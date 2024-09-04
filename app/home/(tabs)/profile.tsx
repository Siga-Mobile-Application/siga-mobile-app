import ProfileHeader from '@/components/profile-tab/header';
import StyledButton from '@/components/styled-button';
import AuthContext from '@/contexts/auth';
import { router } from 'expo-router';
import { useContext } from 'react';
import { View } from 'react-native';

export default function Profile() {
    const {signOut} = useContext(AuthContext);
    const profilePicture = 'https:\\siga.cps.sp.gov.br/image//6GVG96KRA8BC7EFHED58NEH6HUZD6W.TMB.JPG';
    const profileInfo = {
        nome: 'Carlos',
        curso: 'ADS', ra: '111', ciclo: '4',
        pp: '50%', pr: '9', 'pp(Intercâmbio)': '68%',
        cursando: '4', maximo: '10', faltam: '6',
        email: 'email'
    };

    function handleLogout() {
        router.replace('/');
        signOut();
    }

    return (
        <View className="h-full w-full">
            <ProfileHeader></ProfileHeader>
            <StyledButton color='#BF4647' text='Sair' onClick={handleLogout} />
        </View>
    );
}
