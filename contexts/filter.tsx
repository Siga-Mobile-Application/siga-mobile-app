import React, { createContext, ReactNode, useState } from "react";

interface FilterProviderProps {
    children: ReactNode;
}

interface FilterContext {
    isOpen: boolean
    setOpenFilter: any
}

const FilterContext = createContext<FilterContext>({} as FilterContext);

export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
    const [isOpen, setOpenFilter] = useState(false);

    return (
        <FilterContext.Provider value={{ isOpen, setOpenFilter }}>
            {children}
        </FilterContext.Provider>
    )
};

export default FilterContext;