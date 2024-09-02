import React from 'react';
import { Select, SelectBackdrop, SelectContent, SelectDragIndicator, SelectDragIndicatorWrapper, SelectIcon, SelectInput, SelectItem, SelectPortal, SelectTrigger } from '@/components/ui/select';
import { ChevronDownIcon } from '@/components/ui/icon';
import { StyleSheet } from 'react-native';

interface SelectProps {
    title: string,
    options: string[],
    onChange: (value: string) => void
}

export default function StyledSelect({title, options, onChange}: SelectProps) {
    return (
        <Select onValueChange={onChange} style={styles.container}>
            <SelectTrigger variant="outline" size="xl" style={styles.header}>
                <SelectInput placeholder={title} />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                    <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                    </SelectDragIndicatorWrapper>
                    {
                        options.map(option => (
                            <SelectItem label={option} value={option} key={option} />
                        ))
                    }
                </SelectContent>
            </SelectPortal>
        </Select>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white' 
    },

    header: {
        justifyContent: 'space-between'
    }
})