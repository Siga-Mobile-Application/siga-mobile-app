import React from "react";
import StyledInput from "../styled-input";
import { View } from "react-native";
import StyledButton from "../styled-button";
import { AddIcon } from "../ui/icon";
import { VStack } from "../ui/vstack";

export default function Filter() {

    return (
        <View className="w-full px-5 py-10 bg-rose-300">
            <VStack>
                <StyledInput type="text" placeholder="Pesquisar por matéria" className="bg-white" />

            </VStack>

            <StyledButton color="green" className="self-end p-0 px-2 mt-2" onClick={() => { }} icon={AddIcon} />

        </View>
    )
}