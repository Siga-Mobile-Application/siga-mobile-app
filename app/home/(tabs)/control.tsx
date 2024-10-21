import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '@/components/ui/text';
import StyledInput from '@/components/styled-input';

export default function Control() {
    const options = [{ name: 'Horários', id: '1' }, { name: 'Notas Parciais', id: '2' }, { name: 'Faltas Parciais', id: '3' }];
    const [option, setOption] = useState('Horários');

    function selectValue(value: string) {
        setOption(value);
    }

    return (
        <View style={styles.container}>
            <Text>.</Text>
            <Text>
                {option}
            </Text>

            <View style={styles.inputContainer}>
                <StyledInput label='Selecione uma opção' options={options} onChangeText={selectValue} type='select-options' defaultValue='Horários' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    },
    inputContainer: {
        width: '100%',
        padding: 15,
    }
})