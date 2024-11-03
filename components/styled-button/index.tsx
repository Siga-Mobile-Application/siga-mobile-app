import { StyleSheet } from "react-native";
import { Button, ButtonIcon, ButtonSpinner, ButtonText } from "../ui/button";
import { Icon } from "../ui/icon";
interface StyledButtonProps {
    text?: string
    textColor?: string
    color?: string
    onClick: () => void
    isLoading?: boolean
    icon?: any
    iconStroke?: string
    customIcon?: any
    className?: string
}

export default function StyledButton({ text, onClick, color, textColor, isLoading, icon, className, customIcon, iconStroke }: StyledButtonProps) {
    return (
        <Button
            className={className}
            style={[style.button, { backgroundColor: color ? color : icon || customIcon ? "transparent" : "black" }]}
            onPress={onClick}
            isDisabled={isLoading}>
            {
                isLoading ?
                    <ButtonSpinner />
                    :
                    <ButtonText style={{ color: textColor ? textColor : "white" }}>{text}</ButtonText>
            }
            {
                customIcon &&
                customIcon
            }
            {
                icon &&
                <ButtonIcon className="p-0 m-0"><Icon as={icon} size="lg" stroke={iconStroke} /></ButtonIcon>
            }
        </Button>
    )
}

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})