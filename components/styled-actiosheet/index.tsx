import { ReactElement } from "react";
import StyledButton from "../styled-button";
import { Actionsheet, ActionsheetBackdrop, ActionsheetContent, ActionsheetDragIndicatorWrapper, ActionsheetDragIndicator, ActionsheetItem, ActionsheetItemText } from "../ui/actionsheet";
import { CloseIcon } from "../ui/icon";
import { View } from "react-native";

interface ActionSheetProps {
    show: boolean
    options?: string[]
    customOptions?: ReactElement[]
    handleClose: () => any
    onClick?: (value: string) => any
}

export default function StyledActionSheet({ show, options, customOptions, handleClose, onClick }: ActionSheetProps) {
    return (
        <Actionsheet isOpen={show} onClose={handleClose}>
            <ActionsheetBackdrop />
            <ActionsheetContent>
                <ActionsheetDragIndicatorWrapper>
                    <ActionsheetDragIndicator />
                    <StyledButton className="self-end" onClick={() => { handleClose() }} icon={CloseIcon} />
                </ActionsheetDragIndicatorWrapper>
                <View className="w-full">
                    {
                        options ?

                            options.map((item) => (
                                <ActionsheetItem key={item} onPress={() => { }}>
                                    <ActionsheetItemText>{item}</ActionsheetItemText>
                                </ActionsheetItem>
                            ))
                            :
                            customOptions ?

                                customOptions.map((item) => (
                                    <View key={item.key} className="mb-5">
                                        {item}
                                    </View>
                                ))
                                :
                                <></>
                    }
                </View>
            </ActionsheetContent>
        </Actionsheet>
    )
}