import { Text } from "../ui/text";

interface StyledTextProps {
    text: string
    color?: string
    fontWeight?: 'bold' | 'thin'
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | undefined
    className?: string
}

export default function StyledText({ text, color, fontWeight, size, className }: StyledTextProps) {
    return (
        <Text size={size} style={{color: color ?? 'black', fontWeight: fontWeight ?? 'normal' }} className={className}>
            {text}
        </Text>
    )
}