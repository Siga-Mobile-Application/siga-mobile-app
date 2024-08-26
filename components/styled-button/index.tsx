import { StyleSheet } from "react-native";
import { Button, ButtonText } from "../ui/button";
import { InterfaceButtonProps } from "@gluestack-ui/button/lib/typescript/types";

interface StyledButtonProps extends InterfaceButtonProps {
    text: string
    onClick: () => void
    color?: string

}

export default function StyledButton({text, onClick, color, ...rest}: StyledButtonProps) {
    return(
        <Button {...rest} 
        style={[style.button, {backgroundColor: color ? color : "black"}]} 
        onPress={onClick}>
            <ButtonText>{text}</ButtonText>
        </Button>
    )
}

const style = StyleSheet.create({
    button: {
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
})