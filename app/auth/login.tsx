import { Image, StyleSheet, View } from 'react-native';
import { Link, LinkText } from '@/components/ui/link';
import StyledInput from '@/components/styled-input';
import StyledButton from '@/components/styled-button';
import { router } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '@/contexts/auth';
import StyledTitle from '@/components/styled-title';
import { ToastAndroid } from 'react-native';
import StyledCheckBox from '@/components/styled-checkbox';
import Loading from '@/components/loading';

export default function Login() {
    const [login, setLogin] = useState({ user: '', pass: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [keepLogin, setKeepLogin] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const { signIn, verifyKeepLogin } = useContext(AuthContext);

    async function handleLogin() {
        if (!login.user || !login.pass) return ToastAndroid.showWithGravity('Preencha todos os campos!', ToastAndroid.SHORT, ToastAndroid.TOP);

        setIsLoading(true);

        signIn(login.user, login.pass, keepLogin ? true : false).finally(() => setIsLoading(false));
    };

    useEffect(() => {
        verifyKeepLogin().finally(() => { setLoading(false); });
    }, []);

    return (
        <View style={styles.container}>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <View style={styles.header}>
                            <Image source={require('@/assets/logo/Logo.png')} alt="Logo Siga" />
                            <StyledTitle text='Faça login em sua conta' />
                        </View>

                        <View style={styles.inputContainer}>
                            <StyledInput label='Login' type='text' placeholder='Insira seu login do SIGA' onChangeText={(value) => { setLogin({ ...login, user: value }) }} />
                            <StyledInput label='Senha' type='password' placeholder='Insira sua senha' onChangeText={(value) => { setLogin({ ...login, pass: value }) }} />
                            <StyledCheckBox options={['Continuar conectado?']} selectedOption={keepLogin} setSelectedOptions={setKeepLogin} />
                        </View>

                        <View style={styles.buttonsContainer}>
                            <StyledButton
                                text='Entrar'
                                className='bg-sky-600'
                                onClick={handleLogin}
                                isLoading={isLoading} />

                            <Link href='https://www.gluestack.io.com'>
                                <LinkText onPress={() => { router.navigate('auth/forgotPass') }}>Esqueceu sua senha?</LinkText>
                            </Link>
                        </View>
                    </>
            }
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
