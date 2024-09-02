import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StyledSelect from '@/components/styled-select';
import { Text } from '@/components/ui/text';

export default function Control() {
    const options = ['Histórico (Grade)', 'Histórico Completo', 'Horários', 'Notas Parciais', 'Faltas Parciais'];
    const [option, setOption] = useState('');

    function selectValue(value: string) {
        setOption(value);
    }

    return (
        <View style={style.container}>
            <Text>.</Text>
            <Text>
                {option}
            </Text>
            <StyledSelect title='Selecione uma opção' options={options} onChange={selectValue} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
    },
})