import Layout from "@/components/common/Layout"
import SeasonList from "@/components/features/Seasons/SeasonsList"
import { appConfig } from "@/config/index"
import { ITVShow } from "@/interfaces/TVShow"
import { groupEpisodesBySeasons } from "@/utils/groupEpisodesBySeasons.util"
import { Badge, Button, Card, Col, Divider, Grid, ProgressBar } from "@tremor/react"
import { NextPageContext } from "next"
import Link from "next/link"
import xss from "xss";
import { ReactElement } from "react"
import TVShowPicturesSlider from "@/components/features/TVShow/TVShowPicturesSlider"

const TVShowDetails = ({ tvShow }: { tvShow: ITVShow }) => {

    const seasons = groupEpisodesBySeasons(tvShow?.episodes);

    const sanitizedDescription = () => ({
        __html: xss(tvShow?.description)
    })

    return (
        <>
            {tvShow ?
                <section className="px-5 mt-5 mb-10">
                    <Grid numColsLg={8} className="gap-6 mt-6">
                        <Col numColSpanLg={2}>
                            <img src={tvShow.image_thumbnail_path} alt={tvShow.name} className="w-full h-5/6 object-cover mb-4" />
                            {tvShow.description_source && (
                                <Link href={tvShow.description_source} target="_blank" className="w-full">
                                    <Button className="w-full">Read more about this TV Show</Button>
                                </Link>
                            )}

                            {tvShow.youtube_link && (
                                <Link href={tvShow.youtube_link} target="_blank" className="w-full">
                                    <Button color="rose" className="w-full">Watch trailer</Button>
                                </Link>
                            )}
                        </Col>
                        <Col numColSpanLg={4}>
                            <Card className="h-full">
                                <h1 className="text-3xl font-bold mb-2">{tvShow.name}</h1>
                                <span className="font-semibold text-gray-600 mb-2">{tvShow.network}</span>
                                <div className="mt-3">
                                    <div className="text-gray-600 mb-4" dangerouslySetInnerHTML={sanitizedDescription()} />
                                </div>
                            </Card>
                        </Col>

                        <Col numColSpanLg={2}>
                            <div className="space-y-6">
                                <Card>
                                    <div className="h-24 flex flex-col items-start justify-center">
                                        <p className="text-gray-600">
                                            <span className="font-bold">Station:</span> {tvShow.network}
                                        </p>
                                        <p className="text-gray-600">
                                            <span className="font-bold">Status:</span> {tvShow.status}
                                        </p>
                                        <p className="text-gray-600">
                                            <span className="font-bold">Start Date:</span> {tvShow.start_date}
                                        </p>
                                    </div>
                                </Card>
                                {tvShow.genres && (
                                    <Card>
                                        <div className="h-24 flex items-center justify-center">
                                            <div className="flex flex-wrap items-center mb-4">
                                                <span className="text-gray-600 font-bold mr-2">Genres:</span>
                                                <div className="gap-2 mt-2 flex flex-wrap">
                                                    {tvShow?.genres.map((genre) => (
                                                        <Badge key={genre} size="xs">{genre}</Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                )}
                                <Card>
                                    <div className="h-24 flex items-center justify-center">
                                        <div className="text-gray-600 w-full">
                                            <span className="font-bold">Rate:</span> {Number(tvShow.rating).toFixed(2)} %
                                            <ProgressBar percentageValue={Number(tvShow.rating) * 10} color="teal" className="mt-3" />
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Col>

                        {tvShow.pictures?.length !== 0 && (
                            <Col numColSpanLg={8}>
                                <Card className="h-80">
                                    <TVShowPicturesSlider pictures={tvShow.pictures} />
                                </Card>
                            </Col>
                        )}

                        <Col numColSpanLg={8}>
                            <Card className="h-full">
                                <h1 className="text-3xl font-bold mb-2">Episodes</h1>
                                <Divider />
                                {seasons.length && (
                                    <div className="mt-2">
                                        <Grid numCols={1} numColsMd={2} className="gap-4">
                                            {seasons.map((season, idx) => <SeasonList key={`season-${idx}`} season={season} />)}
                                        </Grid>
                                    </div>
                                )}
                            </Card>
                        </Col>
                    </Grid>

                </section> : null}
        </>
    )
}


export const getServerSideProps = async ({ query }: NextPageContext) => {
    try {
        const response = await fetch(`${appConfig.server.api}/show-details?q=${query.id}`);
        const tvShowResponse = await response.json()

        return {
            props: { tvShow: tvShowResponse.tvShow }
        }
    } catch (_) {
        return {
            notFound: true,
        }
    }
}

TVShowDetails.getLayout = (page: ReactElement) => (
    <Layout title={"TV Show Details"} withoutSearch={true}>
        {page}
    </Layout>
)


export default TVShowDetails