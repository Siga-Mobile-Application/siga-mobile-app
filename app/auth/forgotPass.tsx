import StyledButton from '@/components/styled-button';
import StyledInput from '@/components/styled-input';
import StyledTitle from '@/components/styled-title';
import { router } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function ForgotPass() {
    const [isLoading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
                <StyledTitle><StyledTitle color='red'>Problemas</StyledTitle> com sua senha?</StyledTitle>
            </View>

            <View style={styles.inputContainer}>
                <StyledInput label='Registro Academico' placeholder='Insira seu registro academico' type='text' />
                <StyledInput label='email' placeholder='Insira seu endereço de email' type='text' />
            </View>

            <View style={styles.buttonContainer}>
                <StyledButton text='Prosseguir' color='' onClick={() => { }} isLoading={isLoading} />

                <StyledButton text='Voltar' color='red' onClick={() => { router.back() }} />
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
    inputContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        rowGap: 20,
        paddingHorizontal: 30
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 50,
        paddingBottom: 20
    }
});
