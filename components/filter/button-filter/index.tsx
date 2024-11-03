import React, { useContext, useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import StyledButton from "../../styled-button";
import FilterContext from "@/contexts/filter";

export default function ButtonFilter() {
    const { setOpenFilter, isOpen } = useContext(FilterContext);

    const handleOpen = () => setOpenFilter(!isOpen);

    return (
        <StyledButton onClick={handleOpen} customIcon={<FontAwesome name="filter" size={30} />} />
    )
}