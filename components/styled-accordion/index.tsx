import React, { ReactNode, useState } from "react"
import { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionTitleText, AccordionIcon, AccordionContent, AccordionContentText } from "../ui/accordion"
import { Divider } from "../ui/divider"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView } from "react-native";
import StyledTitle from "../styled-title";

interface AccordionProps {
    items: { header: string, content: ReactNode | string }[]
}

export default function StyledAccordion({ items }: AccordionProps) {
    return (
        <Accordion
            size="lg"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
            className="border border-outline-200 bg-black"
            style={{ columnGap: 10, paddingHorizontal: 5 }}>
            {
                items.map(item => (
                    <AccordionItem key={item.header} value={item.header} className="bg-cyan-50">
                        <AccordionHeader>
                            <AccordionTrigger>
                                {({ isExpanded }) => {
                                    return (
                                        <>
                                            <AccordionTitleText><StyledTitle>{item.header}</StyledTitle></AccordionTitleText>
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