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
        margin: 5,
        width: '90%',
    },

    input: {
        borderWidth: 1,
        borderRadius: 6
    },
})