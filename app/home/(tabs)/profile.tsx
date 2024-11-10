import ProfileContent from '@/components/profile-tab/content';
import ProfileHeader from '@/components/profile-tab/header';
import StyledButton from '@/components/styled-button';
import AuthContext from '@/contexts/auth';
import { useContext, useState } from 'react';
import { ScrollView } from 'react-native';

export default function Profile() {
    const [loading, setLoading] = useState(false);
    const { signOut } = useContext(AuthContext);

    function handleLogout() {
        setLoading(true);

        signOut().finally(() => (
            setLoading(false)
        ));
    }

    return (
        <ScrollView contentContainerClassName='jutify-center items-center'>
            <ProfileHeader />
            <ProfileContent />
            <StyledButton isLoading={loading} className='w-full' color='#BF4647' text='Sair' onClick={handleLogout} />
        </ScrollView>
    );
}
