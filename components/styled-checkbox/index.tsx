import { Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxLabel, CheckboxGroup } from "../ui/checkbox";
import { CheckIcon } from "../ui/icon";

interface StyledCheckBoxProps {
    options: string[]
    setSelectedOptions: (option: string[]) => void
    selectedOption: string[]
    disable?: boolean
}

export default function StyledCheckBox({ options, selectedOption, setSelectedOptions, disable }: StyledCheckBoxProps) {
    return (
        <CheckboxGroup isDisabled={disable ? disable : false} value={selectedOption} onChange={setSelectedOptions}>
            {
                options.map((option) => (
                    <Checkbox size="md" isInvalid={false} isDisabled={false} value={option} key={option}>
                        <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel>{option}</CheckboxLabel>
                    </Checkbox>

                ))
            }
        </CheckboxGroup>
    )
}