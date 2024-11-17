import AuthContext from '@/contexts/auth';
import React, { useContext } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from '../ui/text';
import { VStack } from '../ui/vstack';
import { HStack } from '../ui/hstack';

export default function StudentCard() {
    const user = useContext(AuthContext);
    const date = new Date();

    return (
        <VStack style={styles.container}>
            <View style={styles.leftSection}>
                <Image
                    source={require('../../assets/profile/header-student-card.png')}
                    style={styles.logo}
                    resizeMode="contain" />
            </View>

            <VStack style={styles.centerContent}>
                <View style={styles.containerInfo}>
                    <Image
                        source={{ uri: user.user.picture }}
                        style={styles.userPhoto}
                        resizeMode="contain" />
                    <Text bold size='lg' style={{ color: 'black' }}>{user.user.nome}</Text>
                    <Text bold size='lg' style={{ color: 'black' }}>{user.user.curso}</Text>
                    <Text bold size='lg' style={{ color: 'black' }}>Periodo: {user.user.periodo}</Text>
                    <Text bold size='lg' style={{ color: 'black' }}>RA: {user.user.ra}</Text>
                </View>
            </VStack>

            <View style={styles.rightSection}>
                <Text size='lg' bold style={{ color: 'white' }}>
                    Emissão: {date.toLocaleDateString()}
                </Text>
                <Text size='sm' bold style={{ color: 'white' }}>
                    Este cartão é apenas um informativo de informações, para mais detalhes, acesse siga.cps.sp.gov.br/aluno/login.aspx
                </Text>
            </View>
        </VStack >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: '25%',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: 15
    },
    leftSection: {
        alignContent: 'center',
        backgroundColor: 'white',
    },
    centerContent: {
        flexGrow: 2,
        padding: 20,
        width: '100%',
        backgroundColor: '#e0e0e0',
    },
    rightSection: {
        flexShrink: 1,
        backgroundColor: '#990000',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        rowGap: 10,
        padding: 15,
    },
    logo: {
        marginBottom: 8,
        width: '100%',
    },
    containerInfo: {
        width: '100%',
        flex: 1,
        justifyContent: 'space-between',
    },
    userPhoto: {
        marginTop: 15,
        marginLeft: 15,
        height: '50%',
        borderWidth: 3,
        borderRadius: 5,
        aspectRatio: 1,
    },
});
