import { ReactNode } from "react";
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from "../ui/form-control";
import { AlertCircleIcon } from "../ui/icon";
import { StyleSheet } from "react-native";

interface FormControlProps {
    children: ReactNode
    label?: string
    helper?: string
    error?: string
}

export default function StyledFormControl({ children, label, helper, error }: FormControlProps) {
    return (
        <FormControl style={styles.container}>
            {
                label &&
                <FormControlLabel>
                    <FormControlLabelText>{label}</FormControlLabelText>
                </FormControlLabel>
            }
            {children}
            {
                helper &&
                <FormControlHelper>
                    <FormControlHelperText>
                        {helper}
                    </FormControlHelperText>
                </FormControlHelper>
            }
            {
                error &&
                <FormControlError>
                    <FormControlErrorIcon as={AlertCircleIcon} />
                    <FormControlErrorText>
                        Atleast 6 characters are required.
                    </FormControlErrorText>
                </FormControlError>
            }
        </FormControl>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
})