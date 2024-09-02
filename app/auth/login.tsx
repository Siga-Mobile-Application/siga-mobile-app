import { Image, StyleSheet, View } from 'react-native';
import { Link, LinkText } from '@/components/ui/link';
import StyledInput from '@/components/styled-input';
import StyledButton from '@/components/styled-button';
import { router } from 'expo-router';
import { Heading } from '@/components/ui/heading';
import { useContext, useState } from 'react';
import AuthContext from '@/contexts/auth';

export default function Login() {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    const { signed } = useContext(AuthContext);

    function handleLogin() {
        if (!login || !pass) return;
        
        router.replace('/home');
    };

    return (
        <View style={style.container}>
            <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
            <Heading>Faça login em sua conta</Heading>

            <StyledInput label='Login' placeholder='Insira seu login do SIGA' onChangeText={(value) => { setLogin(value)}} />
            <StyledInput label='Senha' placeholder='Insira sua senha' onChangeText={(value) => { setPass(value) }} />

            <StyledButton
                text='Entrar'
                onClick={() => { handleLogin() }} />

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
