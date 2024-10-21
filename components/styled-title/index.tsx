import { Text } from "../ui/text";
import { textStyle } from "../ui/text/styles";
import { VariantProps } from "@gluestack-ui/nativewind-utils";

interface StyledTitleProps extends VariantProps<typeof textStyle> {
    text: string
    color?: string
}

export default function StyledTitle({ text, color, ...rest }: StyledTitleProps) {
    return (
        <Text 
        selectionColor='white' 
        className="font-serif"
        size="2xl" 
        bold={true} 
        style={{color: color ?? 'black'}} 
        {...rest}>
            {text}
        </Text>
    )
}
