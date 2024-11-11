import { DisciplineProps } from "@/interfaces/disciplines";
import { StyleSheet, View } from "react-native";
import StyledTitle from "../styled-title";
import { Text } from "../ui/text";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "../ui/table";
import { ScheduleProps } from "@/interfaces/schedule";

interface CalendarProps {
    day: string
    data: ScheduleProps[]
}

export default function Calendar({ day, data }: CalendarProps) {
    return (
        data.length > 0 &&
        <View className="w-full mt-5 p-4" style={styles.container}>
            <StyledTitle size="lg">{day}</StyledTitle>
            <View className="w-full">
                <Table className="w-full text-sm">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-sm" adjustsFontSizeToFit={true} style={{ flexGrow: 3, textAlign: 'center' }}>
                                Horários
                            </TableHead>
                            <TableHead className="text-sm" adjustsFontSizeToFit={true} style={{ flexGrow: 4, textAlign: 'center' }}>
                                Disciplina
                            </TableHead>
                            <TableHead className="text-sm" adjustsFontSizeToFit={true} style={{ flexGrow: 2, textAlign: 'center' }}>
                                Turma
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    {
                        data.map((item) => (
                            <TableBody key={item.disciplina}>
                                {
                                    item.horario.map((date) => (
                                        <TableRow key={date}>
                                            <TableData className="text-sm" adjustsFontSizeToFit={true} style={{ flexGrow: 3, textAlign: 'center' }}>
                                                {date}
                                            </TableData>
                                            <TableData className="text-sm" adjustsFontSizeToFit={true} style={{ flexGrow: 4, textAlign: 'center' }}>
                                                {item.disciplina}
                                            </TableData>
                                            <TableData className="text-sm" adjustsFontSizeToFit={true} style={{ flexGrow: 2, textAlign: 'center' }}>
                                                {item.turma}
                                            </TableData>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        ))
                    }
                </Table>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        rowGap: 10
    }
})