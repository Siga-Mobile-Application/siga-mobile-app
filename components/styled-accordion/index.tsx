import React, { ReactElement, ReactNode, useState } from "react"
import { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionTitleText, AccordionIcon, AccordionContent, AccordionContentText } from "../ui/accordion"
import { Divider } from "../ui/divider"
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface AccordionProps {
    items: { header: string, content: ReactElement | string }[]
}

export default function StyledAccordion({ items }: AccordionProps) {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <Accordion
            style={{height: 'auto'}}
            size="md"
            variant="filled"
            type="single"
            isCollapsible={true}
            isDisabled={false}
            className="m-5 w-[90%] border border-outline-200">
            {
                items.map(item => (
                    <AccordionItem style={{height: isExpanded ? '100%' : 'auto'}} key={item.header} value={item.header}>
                        <AccordionHeader>
                            <AccordionTrigger>
                                {({ isExpanded }) => {
                                    return (
                                        <>
                                            <AccordionTitleText>{item.header}</AccordionTitleText>
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
                        <AccordionContent>
                            <AccordionContentText>
                                {item.content}
                            </AccordionContentText>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
            <Divider />
        </Accordion>
    )
}