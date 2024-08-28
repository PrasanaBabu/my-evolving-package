import {Box, Typography} from '@mui/material';
import LatestShows from '../components/netflix/LatestShows';
import TrendingShows from '../components/netflix/TrendingShows';

const NetflixPage = () => {
    return (

        <Box sx={{textAlign: 'center', padding: '0 10% 0 10%'}}>
            <Typography variant={'h1'}>Netflix Page</Typography>
            <LatestShows/>
            <TrendingShows/>
        </Box>

    )
}

export default NetflixPage;
