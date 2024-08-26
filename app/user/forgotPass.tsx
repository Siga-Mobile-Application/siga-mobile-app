import StyledButton from '@/components/styled-button';
import StyledInput from '@/components/styled-input';
import { Heading } from '@/components/ui/heading';
import { router } from 'expo-router';
import { Image, StyleSheet, View } from 'react-native';

export default function ForgotPass() {
    return (
        <View style={style.container}>
            <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
            <Heading>
                <Heading style={{ color: 'red' }}>Problemas</Heading> com sua senha?
            </Heading>

            <StyledInput label='Registro Academico' placeholder='Insira seu registro academico' />
            <StyledInput label='email' placeholder='Insira seu endereço de email' />

            <StyledButton text='Prosseguir' color='' onClick={() => {router.replace('user/login')}} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})