import { Checkbox, CheckboxIndicator, CheckboxIcon, CheckboxLabel, CheckboxGroup } from "../ui/checkbox";
import { CheckIcon } from "../ui/icon";

interface StyledCheckBoxProps {
    options: string[]
    setSelectedOptions: (option: string[]) => void
    selectedOption: string[]
}

export default function StyledCheckBox({ options, selectedOption, setSelectedOptions }: StyledCheckBoxProps) {
    return (
        <CheckboxGroup value={selectedOption} onChange={setSelectedOptions}>
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