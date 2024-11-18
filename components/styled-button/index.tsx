import { StyleSheet } from "react-native";
import { Button, ButtonIcon, ButtonSpinner, ButtonText } from "../ui/button";
import { Icon } from "../ui/icon";
interface StyledButtonProps {
    text?: string
    textColor?: string
    color?: string
    onClick: () => void
    isLoading?: boolean
    leftIcon?: any
    rightIcon?: any
    iconStroke?: string
    customIcon?: any
    className?: string
}

export default function StyledButton({ text, onClick, color, textColor, isLoading, leftIcon, rightIcon, className, customIcon, iconStroke }: StyledButtonProps) {
    return (
        <Button
            className={className}
            style={[style.button, { backgroundColor: color ? color : leftIcon || rightIcon || customIcon ? "transparent" : "black" }]}
            onPress={onClick}
            isDisabled={isLoading}>
            {
                leftIcon &&
                <ButtonIcon className="p-0 m-0"><Icon as={leftIcon} size="lg" stroke={iconStroke} /></ButtonIcon>
            }

            {
                isLoading ?
                    <ButtonSpinner color={textColor ? textColor : "white"} />
                    :
                    <ButtonText style={{ color: textColor ? textColor : "white" }}>{text}</ButtonText>
            }
            {
                customIcon &&
                customIcon
            }
            {
                rightIcon &&
                <ButtonIcon className="p-0 m-0"><Icon as={rightIcon} size="lg" stroke={iconStroke} /></ButtonIcon>
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