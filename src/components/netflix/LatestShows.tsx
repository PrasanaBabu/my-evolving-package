import {Box, Grid, Typography} from '@mui/material';
import LatestShow from './LatestShow';


export interface LatestShow {
    title: string,
    description: string,
    imageUrl: string,
    category?: 'Action' | 'Comedy' | 'Drama' | 'Horror' | 'Romance' | 'Thriller' | 'Fantasy',
    id?: number,
    isFavorite?: boolean
}

export interface LatestShowProps {
    show: LatestShow
    favouriteClick: Function,
    index: number
}

export interface LatestShowsProps {
    shows: LatestShow[],
    favouriteShowClick: Function
}
const LatestShows = (props: LatestShowsProps) => {

    const mockLatestShows = props.shows

    function handleFavouriteClick(index: number){
        props.favouriteShowClick(index);
    }

    function getAllLatestShowElements() {
        return mockLatestShows.map((show: LatestShow, index: number) => {
            return (
                <Grid item xs={12} sm={5} m={4} xl={3} key={show.title}>
                    <LatestShow show={show} index={index} favouriteClick={handleFavouriteClick}/>
                </Grid>
            );
        });
    }

    return (
        <Box>
            <Typography variant={'h4'}>Latest Shows</Typography>
            <Grid container spacing={2}>

                {
                    getAllLatestShowElements()
                }
            </Grid>
        </Box>
    )
}


export default LatestShows
