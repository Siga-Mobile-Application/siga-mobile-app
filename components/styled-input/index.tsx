import { StyleSheet } from "react-native";
import { Input, InputField } from "../ui/input";
import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";

interface StyledInputProps {
    label?: string
    placeholder: string
    onChangeText?: (text: string) => void
}

export default function StyledInput({ label, placeholder, onChangeText }: StyledInputProps) {
    return (
        <VStack space="xs" style={styles.container}>
            <Text className="text-typography-500 leading-1">{label}</Text>
            <Input style={[styles.input]}>
                <InputField placeholder={placeholder} />
            </Input>
        </VStack>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 15,
        width: '90%',
        height: 40
    },

    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
    },
})