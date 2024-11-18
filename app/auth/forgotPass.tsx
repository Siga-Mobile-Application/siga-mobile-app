import StyledButton from '@/components/styled-button';
import StyledTitle from '@/components/styled-title';
import { Button } from '@/components/ui/button';
import { ArrowDownIcon, Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function ForgotPass() {
    const [isLoading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo/Logo1.png')} size="2xl" resizeMode='center' alt="Logo Siga" />
                <StyledTitle><StyledTitle color='red'>Problemas</StyledTitle> com sua senha?</StyledTitle>
            </View>

            {/* <View style={styles.inputContainer}>
                <StyledInput label='Registro Academico' placeholder='Insira seu registro academico' type='text' />
                <StyledInput label='email' placeholder='Insira seu endereço de email' type='text' />
            </View> */}

            <View style={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                <Text bold style={{ textAlign: 'justify', marginHorizontal: 10, marginTop: 20 }}>
                    Para realizar a redefinição da sua senha ou recuperar sua identificação do usuário
                    você deverá acessar o site do SIGA clicando no botão abaixo:
                </Text>
                <Icon as={ArrowDownIcon} />
            </View>

            <View style={styles.buttonContainer}>
                <Button>
                    <Link href='https://siga.cps.sp.gov.br/aluno/login_auxproblemas.aspx'>
                        <Text underline={false} style={{ color: "white" }}>Acessar SIGA</Text>
                    </Link>
                </Button>

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
        alignItems: 'center',
        columnGap: 15
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
