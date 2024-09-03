import { Heading } from '@/components/ui/heading';
import { StyleSheet, View } from 'react-native';

export default function Home() {

    return (
        <View style={style.container}>
            <Heading>Inicio</Heading>
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
})