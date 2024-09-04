import { Image, StyleSheet, View } from 'react-native';
import { Link, LinkText } from '@/components/ui/link';
import StyledInput from '@/components/styled-input';
import StyledButton from '@/components/styled-button';
import { router } from 'expo-router';
import { Heading } from '@/components/ui/heading';
import { useContext, useState } from 'react';
import AuthContext from '@/contexts/auth';
import api from '@/helper/axios';

export default function Login() {
    const [login, setLogin] = useState({ user: '', pass: '' });
    const [isLoading, setLoading] = useState(false);
    const { signed } = useContext(AuthContext);

    async function handleLogin() {
        if (!login.user || !login.pass) return;

        setLoading(true);

        await api.post('/data', login).then(res => {
            router.replace('/home');
            console.log(res.data);
        }).catch(e => {
            console.log('Erro: ', e);
        }).finally(() => {
            setLoading(false);
        });
    };

    return (
        <View style={style.container}>
            <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
            <Heading>Faça login em sua conta</Heading>

            <StyledInput label='Login' type='text' placeholder='Insira seu login do SIGA' onChangeText={(value) => { setLogin({ ...login, user: value }) }} />
            <StyledInput label='Senha' type='password' placeholder='Insira sua senha' onChangeText={(value) => { setLogin({ ...login, pass: value }) }} />

            <StyledButton
                text='Entrar'
                onClick={handleLogin}
                isLoading={isLoading} />

            <Link href='https://www.gluestack.io.com'>
                <LinkText onPress={() => { router.replace('auth/forgotPass') }}>Esqueceu sua senha?</LinkText>
            </Link>
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
