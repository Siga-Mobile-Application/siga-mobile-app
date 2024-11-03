import { Image, StyleSheet, View } from 'react-native';
import { Link, LinkText } from '@/components/ui/link';
import StyledInput from '@/components/styled-input';
import StyledButton from '@/components/styled-button';
import { router } from 'expo-router';
import { Heading } from '@/components/ui/heading';
import { useContext, useState } from 'react';
import AuthContext from '@/contexts/auth';
import api from '@/helper/axios';
import StyledTitle from '@/components/styled-title';

export default function Login() {
    const [login, setLogin] = useState({ user: '', pass: '' });
    const [isLoading, setLoading] = useState(false);
    const { signIn, user } = useContext(AuthContext);

    async function handleLogin() {
        if (!login.user || !login.pass) return;

        setLoading(true);

        signIn(login.user, login.pass).then(res => {
            console.log('Bem-vindo: ', user?.name);
            router.replace('/home');
        }).catch(e => {
            console.log(e);
        }).finally(() => setLoading(false));
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
                <StyledTitle text='Faça login em sua conta' />
            </View>

            <View style={styles.inputContainer}>
                <StyledInput label='Login' type='text' placeholder='Insira seu login do SIGA' onChangeText={(value) => { setLogin({ ...login, user: value }) }} />
                <StyledInput label='Senha' type='password' placeholder='Insira sua senha' onChangeText={(value) => { setLogin({ ...login, pass: value }) }} />
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    text='Entrar'
                    className='bg-sky-600'
                    onClick={() => { router.replace('/home'); }}
                    isLoading={isLoading} />

                <Link href='https://www.gluestack.io.com'>
                    <LinkText onPress={() => { router.navigate('auth/forgotPass') }}>Esqueceu sua senha?</LinkText>
                </Link>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 50,
        paddingBottom: 20
    },
    inputContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        rowGap: 20,
        paddingHorizontal: 30
    },
});
