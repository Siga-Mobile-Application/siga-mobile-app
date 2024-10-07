import ProfileContent from '@/components/profile-tab/content';
import ProfileHeader from '@/components/profile-tab/header';
import StyledButton from '@/components/styled-button';
import AuthContext from '@/contexts/auth';
import { router } from 'expo-router';
import { useContext } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Profile() {
    const {signOut} = useContext(AuthContext);

    function handleLogout() {
        router.replace('/');
        signOut();
    }

    return (
        <ScrollView contentContainerClassName='jutify-center items-center'>
            <ProfileHeader />
            <ProfileContent />
            <StyledButton className='w-full' color='#BF4647' text='Sair' onClick={handleLogout} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
})
