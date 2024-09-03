import {Alert, Typography} from '@mui/material';
import RecommendedShow from './RecommendedShow';
import {LatestShowsProps} from './LatestShows';
import {useEffect, useState} from 'react';

const RecommendedShows = (props: LatestShowsProps) => {

    const [allShows, setAllShows] = useState(props.shows)

    useEffect(() => {
        console.log('new shows in recommended', props.shows);
        setAllShows(props.shows);
    }, [props.shows]);
    function handleFavouriteCLick(index: number){
        props.favouriteShowClick(index);
    }
    return (
        <>
            <Typography variant={'h5'}>Recommended Shows</Typography>
            {
                allShows.length <= 0 &&

                <Alert variant="filled" severity="warning">
                    This is a filled warning Alert.
                </Alert>
            }
            {
                allShows.length > 0 &&
                allShows
                    .filter(show => show.isFavorite)
                    .map((show, index) => <RecommendedShow key={show.id} show={show} index={index} favouriteClick={handleFavouriteCLick}/>)
            }
        </>
    )
}


export default RecommendedShows;
