import { StyleSheet, View } from 'react-native';
import { LinkText } from '@/components/ui/link';
import StyledInput from '@/components/styled-input';
import StyledButton from '@/components/styled-button';
import { router } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '@/contexts/auth';
import StyledTitle from '@/components/styled-title';
import StyledCheckBox from '@/components/styled-checkbox';
import Loading from '@/components/loading';
import { Text } from '@/components/ui/text';
import HelperContext from '@/contexts/assistant';
import { Image } from '@/components/ui/image';

export default function Login() {
    const [login, setLogin] = useState({ user: '', pass: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [keepLogin, setKeepLogin] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    const { signIn, verifyKeepLogin } = useContext(AuthContext);
    const { showToast } = useContext(HelperContext);

    const keepLoginOption: string[] = ['Continuar conectado?'];

    async function handleLogin() {
        if (!login.user || !login.pass) { return setMessage('* Preencha todos os campos *'); };

        if (login.user.length < 11) { return showToast({ title: 'Login informado é inválido', action: 'warning' }); };

        setIsLoading(true);

        signIn(login.user, login.pass, keepLogin.includes(keepLoginOption[0]) ? true : false)
            .then((res) => { if (res) setMessage(res); })
            .catch((e) => { console.log(e) })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        verifyKeepLogin().finally(() => { setLoading(false); });
        setMessage('');
    }, []);

    return (
        <View style={styles.container} className='w-full h-full'>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <View style={styles.header}>
                            <Image source={require('@/assets/logo/Logo1.png')} size="2xl" resizeMode='center' alt="Logo Siga" />
                            <StyledTitle text='Faça login em sua conta' />
                        </View>

                        <View style={styles.inputContainer}>
                            <StyledInput disable={isLoading} size='lg' label='Login' type='text' placeholder='Insira seu login do SIGA' onChangeText={(value) => { setLogin({ ...login, user: value }) }} />
                            <StyledInput disable={isLoading} size='lg' label='Senha' type='password' placeholder='Insira sua senha' onChangeText={(value) => { setLogin({ ...login, pass: value }) }} />
                            {message && <Text bold style={{ color: 'red' }}>{message}</Text>}
                            <StyledCheckBox disable={isLoading} options={keepLoginOption} selectedOption={keepLogin} setSelectedOptions={setKeepLogin} />
                        </View>

                        <View style={styles.buttonsContainer}>
                            <StyledButton
                                text='Entrar'
                                onClick={handleLogin}
                                isLoading={isLoading}
                                textColor='white' />

                            <LinkText disabled={isLoading} onPress={() => { router.navigate('auth/forgotPass'); }}>Esqueceu sua senha?</LinkText>
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
        alignItems: 'center',
    },
    buttonsContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        paddingHorizontal: 50,
        paddingBottom: 30
    },
    inputContainer: {
        flex: 1,
        width: '100%',
        minHeight: '10%',
        justifyContent: 'center',
        rowGap: 20,
        paddingHorizontal: 30
    },
});
