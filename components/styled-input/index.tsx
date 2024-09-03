import { StyleSheet } from "react-native";
import { Input, InputField } from "../ui/input";
import { VStack } from "../ui/vstack";
import { Text } from "../ui/text";

interface StyledInputProps {
    label?: string
    placeholder: string
    type?: 'password' | 'text'
    onChangeText?: (text: string) => void
}

export default function StyledInput({ label, placeholder, onChangeText, type }: StyledInputProps) {
    return (
        <VStack space="xs" style={styles.container}>
            <Text className="text-typography-500 leading-1">{label}</Text>
            <Input style={[styles.input]}>
                <InputField type={type} placeholder={placeholder} onChangeText={onChangeText} />
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