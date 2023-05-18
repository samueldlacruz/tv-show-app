import { FilterContext } from "context/filter.context"
import { useContext } from "react"

export const useFilterContext = () => {
    const context = useContext(FilterContext)
    return { ...context }
}