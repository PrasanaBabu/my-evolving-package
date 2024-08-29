import {Alert, Typography} from '@mui/material';
import RecommendedShow from './RecommendedShow';
import {useState} from 'react';
import {LatestShow, LatestShowsProps} from './LatestShows';

const RecommendedShows = (props: LatestShowsProps) => {
    const shows = props.shows;
    function handleFavouriteCLick(index: number){
        props.favouriteShowClick(index);
    }
    return (
        <>
            <Typography variant={'h5'}>Recommended Shows</Typography>
            {
                shows.length <= 0 &&

                <Alert variant="filled" severity="warning">
                    This is a filled warning Alert.
                </Alert>
            }
            {
                shows.length > 0 &&
                shows.filter(show => show.isFavorite)
                    .map((show, index) => <RecommendedShow show={show} index={index} favouriteClick={handleFavouriteCLick}/>)
            }
        </>
    )
}

export default RecommendedShows;
