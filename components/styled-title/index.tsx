import { ReactNode } from "react";
import { Heading } from "../ui/heading";
import { headingStyle } from "../ui/heading/styles";
import { VariantProps } from "@gluestack-ui/nativewind-utils";

interface StyledTitleProps extends VariantProps<typeof headingStyle> {
    text?: string
    color?: string
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "5xl" | "4xl" | "3xl" | "xs" | undefined
    children?: ReactNode
}

export default function StyledTitle({ text, color, size, children, ...rest }: StyledTitleProps) {
    return (
        <Heading
            selectionColor='white'
            size={size ? size : "2xl"}
            bold={true}
            style={{ color: color ?? 'black' }}
            {...rest}>
            {text ?? children}
        </Heading>
    )
}
