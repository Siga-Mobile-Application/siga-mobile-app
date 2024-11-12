import { GradeProps } from "@/interfaces/grade"
import { StyleSheet, View } from "react-native"
import StyledTitle from "../styled-title"
import { HStack } from "../ui/hstack"
import { VStack } from "../ui/vstack"
import { Text } from "../ui/text"
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "../ui/table"

interface GradesProps {
    grades: GradeProps[]
}

export default function Grades({ grades }: GradesProps) {
    return (
        grades.map((item) => (
            <View style={styles.container} key={item.disciplina}>
                <StyledTitle size='lg' text={item.disciplina} className="mb-5" />
                <Table style={{ width: '100%' }}>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Avaliação</TableHead>
                            <TableHead>Nota</TableHead>
                            <TableHead>Data</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            item.datas.length ?

                                item.datas.map((avaliacao) => (
                                    <TableRow key={avaliacao.titulo}>
                                        <TableData>{avaliacao.titulo}</TableData>
                                        <TableData>{avaliacao.avaliacoes.length ? avaliacao.avaliacoes[0].nota_parcial : 0}</TableData>
                                        <TableData>{avaliacao.avaliacoes.length ? avaliacao.avaliacoes[0].data_lancamento : '0000-00-00'}</TableData>
                                    </TableRow>
                                ))

                                :

                                <TableRow>
                                    <Text size="lg">
                                        Nenhum dado para mostrar
                                    </Text>
                                </TableRow>
                        }
                    </TableBody>
                </Table>
            </View>
        ))
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignContent: 'center',
        textAlign: 'justify',
        paddingVertical: 15,
        columnGap: 10
    },
});
