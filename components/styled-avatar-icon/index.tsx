import React from "react";
import { Avatar, AvatarFallbackText, AvatarImage } from "../ui/avatar";
import { Heading } from "../ui/heading";
import { HStack } from "../ui/hstack";
import { Text } from "../ui/text";
import { VStack } from "../ui/vstack";

interface AvatarProps {
    name: string,
    subTitle?: string,
    image?: string
}

export default function StyledAvatar({ name, subTitle, image }: AvatarProps) {
    return (
        <VStack space="2xl">
            <HStack space="md">
                <Avatar size="lg" className="bg-indigo-600">
                    <AvatarImage source={{ uri: image }} />
                </Avatar>
                <VStack>
                    <Heading size="lg">{name}</Heading>
                    <Text size="md">{subTitle}</Text>
                </VStack>
            </HStack>
        </VStack>
    )
}