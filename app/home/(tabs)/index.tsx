import StyledButton from '@/components/styled-button';
import StyledTitle from '@/components/styled-title';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { logoUrl } from '@/constants';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ArrowLeftIcon, ArrowRightIcon, Icon, LinkIcon } from '@/components/ui/icon';
import StyledAccordion from '@/components/styled-accordion';
import { ScrollView } from 'react-native';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Link, LinkText } from '@/components/ui/link';

export default function Home() {
    const [position, setPosition] = useState(0);

    return (
        <View style={style.container}>
            <View style={{ flexGrow: 2 }}>
                {
                    position == 0 ?
                        <View style={{ columnGap: 20, flex: 1, alignItems: 'center' }}>
                            <VStack className='flex-1 justify-center'>
                                <StyledTitle size='3xl'>{"Seja\nbem-vindo\nao"}</StyledTitle>
                                <Image source={require('@/assets/logo/Logo1.png')} size="lg" resizeMode='center' alt="Logo Siga" />
                            </VStack>

                            <View className='my-6 p-6 flex-1'>
                                <Text size='2xl' bold className='text-justify'>
                                    O SIGA Mobile é uma iniciativa com o intuito de facilitar
                                    o acesso às informações disponíveis no site SIGA da Fatec
                                    para smartphones
                                </Text>
                            </View>

                            <View className='flex-1'>
                                <StyledButton color='black' text='Clique aqui para saber mais' onClick={() => { setPosition(position + 1) }} rightIcon={ArrowRightIcon} iconStroke='white' />
                            </View>
                        </View>

                        :

                        position == 1 ?
                            <View style={{ columnGap: 20, flexShrink: 1, alignItems: 'center' }}>
                                <VStack style={{ justifyContent: 'center', flexShrink: 1 }}>
                                    <Image source={logoUrl} size='lg' resizeMode='contain' alt='Imagem da logo do aplicativo, na qual forma o nome SIGA' />
                                </VStack>

                                <VStack className='my-6 p-6' style={{ justifyContent: 'space-evenly', flexGrow: 2 }}>
                                    <Text size='2xl' bold className='text-justify'>
                                        O SIGA Mobile foi desenvolvido de forma independente e não tem vínculo oficial com a Fatec. 💻
                                    </Text>
                                    <Text size='2xl' bold className='text-justify'>
                                        Todas as informações exibidas são baseadas nos dados públicos disponíveis no site oficial (https://siga.cps.sp.gov.br/).
                                    </Text>
                                    <Text size='2xl' bold className='text-justify'>
                                        O SIGA Mobile não realiza o armazenamento de informações dos usuários em bancos de dados externos ou na nuvem. 🔐
                                    </Text>
                                </VStack>

                                <HStack className='justify-around w-full mb-5' style={{ flexGrow: 1 }}>
                                    <StyledButton color='black' text='Voltar' onClick={() => { setPosition(position - 1) }} leftIcon={ArrowLeftIcon} iconStroke='white' />
                                    <StyledButton color='black' text='Avançar' onClick={() => { setPosition(position + 1) }} rightIcon={ArrowRightIcon} iconStroke='white' />
                                </HStack>
                            </View>

                            :

                            position == 2 ?

                                <View style={{ columnGap: 20, flexShrink: 1, alignItems: 'center' }}>
                                    <VStack style={{ justifyContent: 'center', flexShrink: 1 }}>
                                        <Image source={logoUrl} size='lg' resizeMode='contain' alt='Imagem da logo do aplicativo, na qual forma o nome SIGA' />
                                    </VStack>

                                    <VStack className='my-6 p-6' style={{ justifyContent: 'space-evenly', flexGrow: 2, height: '50%' }}>
                                        <Text size='2xl' bold className='text-justify'>
                                            Atualmente o SIGA Mobile conta com 4 seções:
                                        </Text>
                                        <ScrollView style={{ height: '50%' }}>
                                            <StyledAccordion
                                                size='lg'
                                                color='bg-neutral-300'
                                                items={[
                                                    {
                                                        header: 'Horários 📆',
                                                        content:
                                                            <Text bold>
                                                                Aqui em horários é possível visualizar o calendário das disciplinas programadas durante a semana,
                                                                mostrando o tempo que cada uma tem,
                                                                além de fornecer qual a turma o aluno está cadastrado
                                                            </Text>
                                                    },
                                                    {
                                                        header: 'Notas Parciais 🧾',
                                                        content:
                                                            <Text bold>
                                                                Na aba de notas parciais, é mostrado todas as avaliações disciplinas matriculadas que foram registradas pelos professores.
                                                                Mostrando também a data em que essa avaliação foi cadastrada no SIGA, sua nota e no nome da avaliação
                                                            </Text>
                                                    },
                                                    {
                                                        header: 'Histórico ↩️',
                                                        content:
                                                            <>
                                                                <Text bold>
                                                                    No histórico é mostrado as disciplinas conforme o semestre em que a mesma foi realizada,
                                                                    sinalizando por meio de tags, seus status e outras informações relevantes.
                                                                </Text>
                                                                <Text bold>Tags:</Text>
                                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Badge action='info'><BadgeText>Em curso</BadgeText></Badge>
                                                                    <Badge action='success'><BadgeText>Aprovado</BadgeText></Badge>
                                                                    <Badge action='success'><BadgeText>Dispensado</BadgeText></Badge>
                                                                    <Badge action='error'><BadgeText>Reprovado</BadgeText></Badge>
                                                                </View>
                                                            </>
                                                    },
                                                    {
                                                        header: 'Perfil 👤',
                                                        content:
                                                            <Text bold>
                                                                Na aba de perfil é possível visualizar as informações gerais da matricula do curso e acessar uma carteirinha gerada.
                                                                Pode-se visualizar o registro academico, e-mail institucional, rendimento do curso e prazo de integralização.
                                                            </Text>
                                                    }
                                                ]} />
                                        </ScrollView>
                                    </VStack>

                                    <HStack className='justify-around w-full mb-5' style={{ flexGrow: 1 }}>
                                        <StyledButton color='black' text='Voltar' onClick={() => { setPosition(position - 1) }} leftIcon={ArrowLeftIcon} iconStroke='white' />
                                        <StyledButton color='black' text='Avançar' onClick={() => { setPosition(position + 1) }} rightIcon={ArrowRightIcon} iconStroke='white' />
                                    </HStack>
                                </View>

                                :

                                position == 3 ?

                                    <View style={{ columnGap: 20, flexShrink: 1, alignItems: 'center' }}>
                                        <VStack style={{ justifyContent: 'center', flexShrink: 1 }}>
                                            <Image source={logoUrl} size='lg' resizeMode='contain' alt='Imagem da logo do aplicativo, na qual forma o nome SIGA' />
                                        </VStack>

                                        <VStack className='my-6 p-6' style={{ justifyContent: 'space-evenly', flexGrow: 2 }}>
                                            <Text size='2xl' bold className='text-justify'>
                                                Para saber mais detalhes técnicos sobre o desenvolvimento do aplicativo 💻
                                                Acesse o reposistório oficial clicando
                                                <Link className='px-5' href='https://github.com/Siga-Mobile-Application'>
                                                    <LinkText size='2xl' bold>aqui</LinkText>
                                                </Link>
                                                <Icon as={LinkIcon} />
                                            </Text>
                                        </VStack>

                                        <HStack className='justify-around w-full mb-5' style={{ flexGrow: 1 }}>
                                            <StyledButton color='black' text='Voltar' onClick={() => { setPosition(position - 1) }} leftIcon={ArrowLeftIcon} iconStroke='white' />
                                            <StyledButton color='black' text='Avançar' onClick={() => { setPosition(position + 1) }} rightIcon={ArrowRightIcon} iconStroke='white' />
                                        </HStack>
                                    </View>

                                    :

                                    <View style={{ columnGap: 20, flexShrink: 1, alignItems: 'center' }}>
                                        <VStack style={{ justifyContent: 'center', flexShrink: 1 }}>
                                            <Image source={logoUrl} size='lg' resizeMode='contain' alt='Imagem da logo do aplicativo, na qual forma o nome SIGA' />
                                        </VStack>

                                        <VStack className='my-6 p-6' style={{ justifyContent: 'space-evenly', flexGrow: 2, alignItems: 'center' }}>
                                            <Text size='2xl' bold className='text-justify'>
                                                Agora que você conhece um pouco mais do SIGA Mobile 💻
                                            </Text>
                                            <Text size='2xl' bold className='text-justify'>
                                                Vamos usar? 👋
                                            </Text>
                                        </VStack>

                                        <HStack className='justify-around w-full mb-5' style={{ flexGrow: 1 }}>
                                            <StyledButton color='black' text='Voltar' onClick={() => { setPosition(position - 1) }} leftIcon={ArrowLeftIcon} iconStroke='white' />
                                        </HStack>
                                    </View>
                }
            </View>

            <HStack className='pb-6' style={{ columnGap: 20, flexGrow: 1 }}>
                <FontAwesome name={position == 0 ? 'circle' : 'circle-o'} />
                <FontAwesome name={position == 1 ? 'circle' : 'circle-o'} />
                <FontAwesome name={position == 2 ? 'circle' : 'circle-o'} />
                <FontAwesome name={position == 3 ? 'circle' : 'circle-o'} />
                <FontAwesome name={position == 4 ? 'circle' : 'circle-o'} />
            </HStack>
        </View>

    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 60
    },
})