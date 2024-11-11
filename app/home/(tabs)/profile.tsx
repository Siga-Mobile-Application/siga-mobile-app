import ProfileContent from '@/components/profile-tab/content';
import ProfileHeader from '@/components/profile-tab/header';
import { ScrollView } from 'react-native';

export default function Profile() {
    return (
        <ScrollView contentContainerClassName='jutify-center items-center'>
            <ProfileHeader />
            <ProfileContent />
        </ScrollView>
    );
}
