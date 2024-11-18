import React, { useContext } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import StyledButton from "../styled-button";
import HelperContext from "@/contexts/assistant";


export default function ButtonReload() {
    const { useReload } = useContext(HelperContext);

    return (
        <StyledButton onClick={useReload} customIcon={<FontAwesome name="rotate-right" size={30} />} />
    )
}