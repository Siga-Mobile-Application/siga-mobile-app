import { StyleSheet } from "react-native";
import { Button, ButtonSpinner, ButtonText } from "../ui/button";
import { InterfaceButtonProps } from "@gluestack-ui/button/lib/typescript/types";

interface StyledButtonProps extends InterfaceButtonProps {
    text: string
    textColor?: string
    color?: string
    onClick: () => void
    isLoading?: boolean
}

export default function StyledButton({ text, onClick, color, textColor, isLoading, ...rest }: StyledButtonProps) {
    return (
        <Button {...rest}
            style={[style.button, { backgroundColor: color ? color : "black" }]}
            onPress={onClick}
            isDisabled={isLoading}>
            {
                isLoading ?
                    <ButtonSpinner />
                    :
                    <ButtonText style={{ color: textColor ? textColor : "white" }}>{text}</ButtonText>
            }
        </Button>
    )
}

const style = StyleSheet.create({
    button: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
})