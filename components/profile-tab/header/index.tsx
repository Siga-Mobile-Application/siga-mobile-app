import { VStack } from "@/components/ui/vstack";
import ProfileHeaderIcon from "../avatar-icon-header";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { useContext } from "react";
import AuthContext from "@/contexts/auth";

export default function ProfileHeader() {
    const {user} = useContext(AuthContext);

    return (
        <VStack className="flex-1 jutify-center items-center mx-10">
            <ProfileHeaderIcon name={user ? user.name : ''} image={user?.picture}
                subTitle="Analise e Desenvolvimetnto de Sistemas" />
            <Divider orientation="horizontal" className="my-2 bg-black" />
            <HStack>
                <Text>{user?.email}</Text>
                <Divider orientation="vertical" className="mx-2 h-[20px]  bg-black" />
                <Text>105048223009</Text>
            </HStack>
        </VStack>
    )
}