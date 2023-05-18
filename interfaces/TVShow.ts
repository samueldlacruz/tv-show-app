import { IEpisode } from "./Episode"

export interface ITVShow {
	id: number
	name: string
	permalink: string
	url: string
	description: string
	description_source: string
	start_date: string
	end_date?: any
	country: string
	status: string
	runtime: number
	network: string
	youtube_link?:  string | null
	image_path: string
	image_thumbnail_path: string
	rating: string
	rating_count: string
	countdown?: unknown
	genres: string[]
	pictures: string[]
	episodes: IEpisode[]
}