import {Box, Typography} from '@mui/material';
import LatestShows, {LatestShow} from '../components/netflix/LatestShows';
import TrendingShows from '../components/netflix/TrendingShows';
import RecommendedShows from '../components/netflix/RecommendedShows';
import {useState} from 'react';

const NetflixPage = () => {

    const mockLatestShows: LatestShow[] = [
        {
            title: 'Goat',
            description: 'A Venkat Prabhu film which stars Vijay, Sneha',
            imageUrl: 'https://cdn.pixabay.com/photo/2024/01/27/00/46/capra-8535002_1280.jpg',
            category: 'Action'
        },
        {
            title: 'Kanguva',
            description: 'A Siruthai Siva film which stars Surya and many more',
            imageUrl: 'https://cdn.pixabay.com/photo/2023/06/22/22/15/fantasy-8082368_1280.jpg',
            category: 'Fantasy'
        },
        {
            title: 'Vaazhai',
            description: 'A Maari Selvaraj film which stars new age actors',
            imageUrl: 'https://cdn.pixabay.com/photo/2012/03/03/23/57/bananas-21686_1280.jpg'
        },
        {
            title: 'Chutney Sambhar',
            description: 'A yogi babu starred comedy drama webseries which includes many more',
            imageUrl: 'https://cdn.pixabay.com/photo/2022/08/18/03/35/brunch-7393906_1280.jpg'
        }
    ];

    const [shows, setShows] = useState(mockLatestShows);

    function handleFavouriteShowAction(index: number) {

        const updatedShows = shows;
        let selectedShow = updatedShows[index];
        console.log('shows:: ', shows, 'selected show: ', selectedShow);
        updatedShows[index] = {...selectedShow, isFavorite: !selectedShow.isFavorite};

        console.log('updated shows:: ', shows);
        setShows( updatedShows);
    }

    return (

        <Box sx={{textAlign: 'center', padding: '0 10% 0 10%'}}>
            <Typography variant={'h1'}>Netflix Page</Typography>
            <LatestShows shows={shows} favouriteShowClick={handleFavouriteShowAction}/>
            <TrendingShows/>
            <RecommendedShows shows={shows} favouriteShowClick={handleFavouriteShowAction}/>
        </Box>

    )
}

export default NetflixPage;
