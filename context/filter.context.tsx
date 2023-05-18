import { ReactNode, createContext, useState } from "react";

export type IFilterContextValue = {
    searchTerm: string,
    handleSearch: (value: string) => void
}

export const FilterContext = createContext<IFilterContextValue | null>(null)

export const FilterContextWrapper = ({ children }: { children: ReactNode }) => {
    const [filter, setFilter] = useState<{ searchTerm: string }>({ searchTerm: "" })

    const handleSearch = (value: string) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            searchTerm: value
        }))
    }

    return (
        <FilterContext.Provider value={{ ...filter, handleSearch }}>
            {children}
        </FilterContext.Provider>
    )
}