import Pagination from '@/components/Pagination'
import { appConfig } from '@/config/index'
import { ITVShow } from '@/interfaces/TVShow'
import { Col, Grid } from '@tremor/react'
import useFetch from 'hooks/useFetch'
import { useMemo, useState } from 'react'
import TvShowCard from './TVShowCard'
import TVShowListLoadingSkeleton from './skeleton/TVShowListSkeleton'
import ErrorInform from '@/components/ErrorInform'
import { useFilterContext } from 'context/hooks/useFilterContext'
import useDebounce from 'hooks/useDebounce'

const TVShowList = () => {

    const { searchTerm } = useFilterContext()
    const debouncedSearchTerm = useDebounce<string>(searchTerm || "", 500)
    
    const [currentPage, setCurrentPage] = useState(1);

    let endpoint = useMemo(() => debouncedSearchTerm ?
        `/search?q=${debouncedSearchTerm}&page=${currentPage}`
        : `/most-popular?page=${currentPage}`, [debouncedSearchTerm, currentPage])

    let MOST_POPULAR_TV_SHOWS_URL = `${appConfig.server.api}${endpoint}`;
    const { data, error } = useFetch<{ total: string, tv_shows: ITVShow[] }>(MOST_POPULAR_TV_SHOWS_URL)

    if (error) {
        return (
            <ErrorInform
                title="Error fetching TV shows"
                message="An error occurred while loading the TV shows. Please try again later."
            />
        )
    }

    if (!data) return <TVShowListLoadingSkeleton />

    return (
        <div className='mb-10'>
            <Grid numCols={2} numColsSm={2} numColsLg={5} numColsMd={3} className="gap-4 mt-4">
                {data?.tv_shows.length === 0 ?
                    <Col numColSpan={5}>
                        <ErrorInform
                            title="Not Found"
                            message=""
                        />
                    </Col>
                    :
                    data.tv_shows.map((tvShow) => (
                        <TvShowCard key={`tv-show-${tvShow.id}`} tvShow={tvShow} />
                    ))}
            </Grid>

            {data?.tv_shows.length !== 0 && (
                <Pagination
                    limitData={10}
                    total={Number(data?.total)}
                    offset={currentPage - 1}
                    onChange={(indexPage) => setCurrentPage(indexPage + 1)}
                />
            )}
        </div>
    )
}

export default TVShowList