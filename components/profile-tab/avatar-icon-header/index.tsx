import React from "react";
import { Avatar, AvatarBadge, AvatarImage } from "../../ui/avatar";
import { Heading } from "../../ui/heading";
import { VStack } from "../../ui/vstack";
import { Box } from "@/components/ui/box";
import StyledText from "@/components/styled-text";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

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
                <AvatarBadge style={{ backgroundColor: 'transparent', width: 'auto', height: 'auto', borderColor: 'transparent' }}>
                    <TouchableOpacity onPress={() => { router.navigate('../../user/') }}>
                        <FontAwesome size={28} name="id-card" color={"blue"} style={{ backgroundColor: 'white', borderRadius: 20, padding: 0, margin: 0 }} />
                    </TouchableOpacity>
                </AvatarBadge>
            </Avatar>
            <Box className="items-center">
                <Heading size="2xl" className="text-black">{name}</Heading>
                <StyledText text={subTitle ?? ""} size="lg" fontWeight="bold" />
            </Box>
        </VStack>
    )
}