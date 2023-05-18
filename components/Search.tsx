import { Flex } from '@tremor/react'
import { useFilterContext } from 'context/hooks/useFilterContext'

const Search = () => {
    const { searchTerm, handleSearch } = useFilterContext()

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target;
        handleSearch && handleSearch(value)
    }

    return (
        <div className="w-full">
            <Flex alignItems="center" justifyContent='end' className='w-full'>
                <input
                    type="text"
                    placeholder="Search movie ..."
                    value={searchTerm}
                    onChange={handleChange}
                    className="px-4 md:w-full w-3/4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </Flex>
        </div>
    )
}

export default Search