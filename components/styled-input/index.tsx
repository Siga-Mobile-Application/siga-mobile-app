import { StyleSheet } from "react-native";
import { Input, InputField, InputIcon, InputSlot } from "../ui/input";
import { VStack } from "../ui/vstack";
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from "../ui/select";
import { ChevronDownIcon, EyeIcon, EyeOffIcon } from "../ui/icon";
import { Textarea, TextareaInput } from "../ui/textarea";
import StyledFormControl from "../styled-form-control";
import { useState } from "react";

interface StyledInputProps {
    label?: string
    placeholder?: string
    onChangeText?: (text: string) => void
    onClick?: () => void
    type: 'text' | 'password' | 'select-options' | 'text-area'
    options?: Array<{ name: string, id: string }>
    defaultValue?: string
    isRead?: boolean
    helper?: string
    className?: string
    size?: "lg" | "sm" | "md" | "xl"
}

export default function StyledInput({ label, helper, placeholder, type, options, className, onChangeText, onClick, defaultValue, isRead, size }: StyledInputProps) {
    const [showPass, setShowPass] = useState(false);

    return (
        <VStack space="xs">
            <StyledFormControl label={label} helper={helper}>
                {
                    ['text', 'password'].includes(type) ?

                        <Input isReadOnly={isRead} style={[styles.input]} className={className} size={size}>
                            <InputField
                                size={size}
                                type={type == 'password' && !showPass ? 'password' : 'text'}
                                placeholder={placeholder}
                                defaultValue={defaultValue}
                                onChangeText={onChangeText}
                            />
                            {
                                type == 'password' &&
                                <InputSlot className="mr-4" onPress={() => { setShowPass(!showPass); }}>
                                    <InputIcon size={size} as={showPass ? EyeIcon : EyeOffIcon} />
                                </InputSlot>
                            }
                        </Input>

                        :

                        type == 'select-options' ?
                            <Select onValueChange={onChangeText} onOpen={onClick} defaultValue={defaultValue} className={className}>
                                <SelectTrigger variant="outline" size="md" style={{ justifyContent: 'space-between' }}>
                                    <SelectInput placeholder={placeholder} />
                                    <SelectIcon className="mr-3" as={ChevronDownIcon} />
                                </SelectTrigger>
                                <SelectPortal>
                                    <SelectBackdrop />
                                    <SelectContent>
                                        <SelectDragIndicatorWrapper>
                                            <SelectDragIndicator />
                                        </SelectDragIndicatorWrapper>

                                        {
                                            options?.map((option) => (
                                                <SelectItem key={option.id} label={option.name} value={option.name} />
                                            ))
                                        }
                                    </SelectContent>
                                </SelectPortal>
                            </Select>

                            :

                            <Textarea size="md" className={className}>
                                <TextareaInput defaultValue={defaultValue} onChangeText={onChangeText} placeholder={placeholder} />
                            </Textarea>
                }
            </StyledFormControl>
        </VStack>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 6,
    },
})
