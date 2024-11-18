import React, { ReactNode, useState } from "react"
import { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionTitleText, AccordionIcon, AccordionContent, AccordionContentText } from "../ui/accordion"
import { Divider } from "../ui/divider"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView } from "react-native";
import StyledTitle from "../styled-title";

interface AccordionProps {
    items: { header: string, content: ReactNode | string }[]
    size: 'lg' | '2xl'
    color?: string
}

export default function StyledAccordion({ items, size, color }: AccordionProps) {
    return (
        <Accordion
            size="lg"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
            className="border border-outline-200 bg-black"
            style={{ columnGap: 10, paddingHorizontal: 3 }}>
            {
                items.map(item => (
                    <AccordionItem key={item.header} value={item.header} className={color ? color : "bg-cyan-50"}>
                        <AccordionHeader>
                            <AccordionTrigger>
                                {({ isExpanded }) => {
                                    return (
                                        <>
                                            <AccordionTitleText><StyledTitle size={size}>{item.header}</StyledTitle></AccordionTitleText>
                                            {isExpanded ? (
                                                <AccordionIcon className="ml-3"><FontAwesome name="chevron-circle-up" /></AccordionIcon>
                                            ) : (
                                                <AccordionIcon className="ml-3"><FontAwesome name="chevron-circle-down" /></AccordionIcon>
                                            )}
                                        </>
                                    )
                                }}
                            </AccordionTrigger>
                        </AccordionHeader>
                        <AccordionContent className="mt-0 pt-2 bg-cyan-100">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
            <Divider />
        </Accordion>
    )
}