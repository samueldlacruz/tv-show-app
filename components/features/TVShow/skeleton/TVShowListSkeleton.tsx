import { Grid } from "@tremor/react";
import { CardLoadingSkeleton } from "./TVShowSkeleton";

const TVShowListLoadingSkeleton: React.FC = () => {
    const skeletonCount = 10;

    const skeletonArray = Array.from({ length: skeletonCount });

    return (
        <div className='mb-10'>
            <Grid numCols={2} numColsSm={2} numColsLg={5} numColsMd={3} className="gap-4 mt-4">
                {skeletonArray.map((_, index) => (
                    <CardLoadingSkeleton key={index} />
                ))}
            </Grid>
        </div>
    );
};

export default TVShowListLoadingSkeleton;