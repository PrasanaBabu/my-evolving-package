import {Box, Grid, Typography} from '@mui/material';
import LatestShow from './LatestShow';


interface LatestShow {
    title: string,
    description: string,
    imageUrl: string,
    category?: 'Action' | 'Comedy' | 'Drama' | 'Horror' | 'Romance' | 'Thriller' | 'Fantasy'
}

export interface LatestShowProps {
    show: LatestShow
}

const LatestShows = () => {

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
    ]

    function getAllLatestShowElements() {
        return mockLatestShows.map((show: LatestShow) => {
            return (
                <Grid item xs={12} sm={5} m={4} xl={3} key={show.title}>
                    <LatestShow show={show}/>
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
