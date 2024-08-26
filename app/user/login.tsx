import { Image, StyleSheet, View } from 'react-native';
import { Text } from '@/components/ui/text';
import { Link, LinkText } from '@/components/ui/link';
import StyledInput from '@/components/styled-input';
import StyledButton from '@/components/styled-button';
import { router } from 'expo-router';
import { Heading } from '@/components/ui/heading';

export default function Login() {
    return (
        <View style={style.container}>
            <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
            <Heading>Faça login em sua conta</Heading>
            
            <StyledInput label='Email' placeholder='Insira seu endereço de email' />
            <StyledInput label='Senha' placeholder='Insira sua senha' />

            <StyledButton 
            text='Entrar' 
            color='black' 
            style={{backgroundColor: 'white'}} 
            onClick={() => {router.replace('user/forgotPass')}} />

            <Link href='https://www.gluestack.io.com'>
                <LinkText>Esqueceu sua senha?</LinkText>
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