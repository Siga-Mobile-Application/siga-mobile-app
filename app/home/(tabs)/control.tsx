import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from '@/components/ui/text';
import StyledInput from '@/components/styled-input';
import { DisciplineProps } from '@/interfaces/disciplines';
import Calendar from '@/components/calendar';

export default function Control() {
    const options = [{ name: 'Horários', id: '1' }, { name: 'Notas Parciais', id: '2' }, { name: 'Faltas Parciais', id: '3' }];
    const [option, setOption] = useState('Horários');
    const data: DisciplineProps[] = [
        {
            sigla: "IBD100",
            disciplina: "Laboratório de Banco de Dados (Escolha 1)",
            turma: "A",
            professor: "GUSTAVO QUIRINO FERREIRA",
            dia: "Quarta-Feira",
            presenca: "52",
            ausencia: "0",
            horario: [
                "19:00-19:50",
                "19:50-20:40",
                "20:50-21:40",
                "21:40-22:30"
            ],
            aula: [],
            avaliacoes: [
                { avaliacao: "PR1", data: "23/10/24", nota: "9,4" },
                { avaliacao: "TEC", data: "23/10/24", nota: "10,0" },
                { avaliacao: "PR2", data: "23/10/24", nota: "0,0" },
                { avaliacao: "ENA", data: "23/10/24", nota: "0,0" },
                { avaliacao: "IP", data: "23/10/24", nota: "0,0" },
                { avaliacao: "PR3", data: "23/10/24", nota: "0,0" }
            ]
        },
        {
            sigla: "IES300",
            disciplina: "Engenharia de Software III",
            turma: "A",
            professor: "LILIAN SIMÃO OLIVEIRA",
            dia: "Sexta-Feira",
            presenca: "52",
            ausencia: "0",
            horario: [
                "19:00-19:50",
                "19:50-20:40",
                "20:50-21:40",
                "21:40-22:30"
            ],
            aula: [],
            avaliacoes: [
                { avaliacao: "TDup", data: "/ /", nota: "0,0" },
                { avaliacao: "P", data: "/ /", nota: "0,0" },
                { avaliacao: "PIn", data: "/ /", nota: "0,0" },
                { avaliacao: "ENAD", data: "/ /", nota: "0,0" }
            ]
        }
    ]

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View>
                <Calendar day='Segunda-Feira' data={data.filter((item) => (item.dia == 'Segunda-Feira'))} />
            </View>
            <View>
                <Calendar day='Terça-Feira' data={data.filter((item) => (item.dia == 'Terça-Feira'))} />
            </View>
            <View>
                <Calendar day='Quarta-Feira' data={data.filter((item) => (item.dia == 'Quarta-Feira'))} />
            </View>
            <View>
                <Calendar day='Quinta-Feira' data={data.filter((item) => (item.dia == 'Quinta-Feira'))} />
            </View>
            <View>
                <Calendar day='Sexta-Feira' data={data.filter((item) => (item.dia == 'Sexta-Feira'))} />
            </View>
            <View>
                <Calendar day='Sábado' data={data.filter((item) => (item.dia == 'Sábado'))} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    inputContainer: {
        width: '100%',
        padding: 15,
    }
})