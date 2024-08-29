import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@mui/material';
import {LatestShowProps} from './LatestShows';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState} from 'react';
import './RecommendedShow.css'
import {Favorite} from '@mui/icons-material';

const RecommendedShow = (props: LatestShowProps) => {
    const [watchLaterItem, setWatchLaterItem] = useState(false)

    function handleFavouriteClicked(index: number) {
        props.favouriteClick(index);
    }

    return (
        <>
            <Card sx={{maxWidth: 345}}>
                <CardMedia
                    sx={{height: 140}}
                    image={props.show.imageUrl}
                    title="green iguana"
                />
                <CardHeader title={props.show.title}></CardHeader>
                <CardContent>
                    {/*<Typography gutterBottom variant="h5" component="div">*/}
                    {/*    {show.title}*/}
                    {/*</Typography>*/}
                    <Typography variant="body2" color="text.secondary">
                        {props.show.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton color="secondary" aria-label="add an alarm">
                        <FavoriteIcon onClick={()=>handleFavouriteClicked(props.index)} color={`${watchLaterItem? 'warning': 'info'}`}/>
                    </IconButton>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>;
        </>
    )
}

export default RecommendedShow;
