import React, { useContext, useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import StyledButton from "../../styled-button";
import FilterContext from "@/contexts/assistant";

export default function ButtonFilter() {
    const [isOpen, setOpenFilter] = useState(false);

    const handleOpen = () => setOpenFilter(!isOpen);

    return (
        <StyledButton onClick={handleOpen} customIcon={<FontAwesome name="filter" size={30} />} />
    )
}