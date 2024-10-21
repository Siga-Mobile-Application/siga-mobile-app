import Filter from "@/components/filter";
import HistoryData from "@/components/history";
import StyledInput from "@/components/styled-input";
import FilterContext from "@/contexts/filter";
import { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";

export default function History() {
    const options = [{ name: 'Histórico (Grade)', id: '1' }, { name: 'Histórico Completo', id: '2' }];
    const [option, setOption] = useState('Histórico Completo');
    const { isOpen } = useContext(FilterContext);

    const data = [
        { sigla: 'AAG001', disciplina: 'Administração Geral', periodo: '20222', aprovado: 'Aprovado(a)', mediaFinal: 8.50, frequencia: '85%', qtdFaltas: 12, observacao: 'Aprovado por Nota e Frequência' },
        { sigla: 'AGO005', disciplina: 'Gestão de Projetos', periodo: '20241', aprovado: 'Aprovado(a)', mediaFinal: 8.10, frequencia: '100%', qtdFaltas: 0, observacao: 'Aprovado por Nota e Frequência' },
        { sigla: 'AGR101', disciplina: 'Gestão de Equipes', periodo: '20241', aprovado: 'Aprovado(a)', mediaFinal: 8.60, frequencia: '100%', qtdFaltas: 0, observacao: 'Aprovado por Nota e Frequência' },
        { sigla: 'CCG001', disciplina: 'Contabilidade', periodo: '20231', aprovado: 'Reprovado(a)', mediaFinal: 9.00, frequencia: '100%', qtdFaltas: 0, observacao: 'Aprovado por Nota e Frequência' },
        { sigla: 'CEF100', disciplina: 'Economia e Finanças', periodo: '20232', aprovado: 'Aprovado(a)', mediaFinal: 9.00, frequencia: '100%', qtdFaltas: 0, observacao: 'Aprovado por Nota e Frequência' }
    ];

    function selectValue(value: string) {
        setOption(value);
    }

    return (
        <>
            <Filter />
            <View style={styles.container}>

                <View style={styles.dataContainer}>
                    {
                        option == 'Histórico Completo' ?
                            <HistoryData disciplines={data} />
                            :
                            <></>
                    }
                </View>

                <View style={styles.inputContainer}>
                    <StyledInput label='Selecione uma opção' options={options} onChangeText={selectValue} type='select-options' defaultValue="Histórico Completo" />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16,
        alignItems: 'center',
        flexDirection: 'column'
    },
    dataContainer: {
        width: '100%',
        height: '100%',
        flexShrink: 1
    },
    inputContainer: {
        width: '100%',
        padding: 15,
        backgroundColor: '0,0,0,0.5'
    }
})