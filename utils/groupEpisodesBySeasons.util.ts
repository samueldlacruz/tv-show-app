import { IEpisode } from "@/interfaces/Episode";
import { ISeason } from "@/interfaces/Season";

export function groupEpisodesBySeasons(episodes: IEpisode[]): ISeason[] {
    const seasons: ISeason[] = [];
  
    if(episodes?.length !== 0) {
      episodes?.forEach((episode) => {
        const seasonIndex = seasons.findIndex((season) => season.season === episode.season);
    
        if (seasonIndex !== -1) {
          seasons[seasonIndex].episodes.push(episode);
        } else {
          const newSeason: ISeason = {
            season: episode.season,
            episodes: [episode],
          };
          seasons.push(newSeason);
        }
      });
    }
  
    return seasons;
  }