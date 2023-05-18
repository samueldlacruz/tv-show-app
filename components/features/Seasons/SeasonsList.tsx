import { ISeason } from "@/interfaces/Season"
import { Card, List, ListItem, Title } from "@tremor/react"

const SeasonList = ({ season }: { season: ISeason }) => {
    return (
        <Card className="w-full mt-3">
            <Title>Season {season?.season}</Title>
            <List>
                {season?.episodes.map((item) => (
                    <ListItem key={`${item.season}-${item.episode}`}>
                        <div className="text-sm md:text-base">
                            <span>{item.episode} - </span>
                            <span>{item.name}</span>
                        </div>
                        {item.air_date && (
                            <span className="hidden md:block">{(item.air_date)}</span>
                        )}
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}

export default SeasonList