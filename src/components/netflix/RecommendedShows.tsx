import {Alert, Typography} from '@mui/material';
import RecommendedShow from './RecommendedShow';
import {LatestShowsProps} from './LatestShows';

const RecommendedShows = (props: LatestShowsProps) => {
    function handleFavouriteCLick(index: number){
        props.favouriteShowClick(index);
    }
    return (
        <>
            <Typography variant={'h5'}>Recommended Shows</Typography>
            {
                props.shows.length <= 0 &&

                <Alert variant="filled" severity="warning">
                    This is a filled warning Alert.
                </Alert>
            }
            {
                props.shows.length > 0 &&
                props.shows
                    .filter(show => show.isFavorite)
                    .map((show, index) => <RecommendedShow key={show.id} show={show} index={index} favouriteClick={handleFavouriteCLick}/>)
            }
        </>
    )
}


export default RecommendedShows;
