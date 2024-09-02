import { VStack } from "@/components/ui/vstack";
import ProfileHeaderIcon from "../avatar-icon-header";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";

export default function ProfileHeader() {
    return (
        <VStack className="flex-1 jutify-center items-center mx-10">
            <ProfileHeaderIcon name="Carlos Eduardo Fiori dos Santos" image="https:\\siga.cps.sp.gov.br/image//6GVG96KRA8BC7EFHED58NEH6HUZD6W.TMB.JPG"
                subTitle="Analise e Desenvolvimetnto de Sistemas" />
            <Divider orientation="horizontal" className="my-2 bg-black" />
            <HStack>
                <Text>carlos.santos204@fatec.sp.gov</Text>
                <Divider orientation="vertical" className="mx-2 h-[20px]  bg-black" />
                <Text>105048223009</Text>
            </HStack>
        </VStack>
    )
}