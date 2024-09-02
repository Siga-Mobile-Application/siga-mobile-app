import React from "react";
import { Avatar, AvatarImage } from "../../ui/avatar";
import { Heading } from "../../ui/heading";
import { Text } from "../../ui/text";
import { VStack } from "../../ui/vstack";
import { Box } from "@/components/ui/box";

interface AvatarProps {
    name: string,
    subTitle?: string,
    image?: string
}

export default function ProfileHeaderIcon({ name, subTitle, image }: AvatarProps) {
    return (
        <VStack space="2xl" className="justify-center items-center">
            <Avatar size="2xl" className="bg-indigo-600">
                <AvatarImage source={{ uri: image }} />
            </Avatar>
            <Box className="items-center">
                <Heading size="xl">{name}</Heading>
                <Text size="lg">{subTitle}</Text>
            </Box>
        </VStack>
    )
}