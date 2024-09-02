import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@mui/material';
import {LatestShowProps} from './LatestShows';
import AlarmIcon from '@mui/icons-material/Alarm';
import FavoriteIcon from '@mui/icons-material/Favorite';


function LatestShow(props: LatestShowProps) {
    const show = props.show;
    const index: number = props.index;

    function handleWatchLaterClick(index: number) {
        props.favouriteClick(index);
    }

    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                sx={{height: 140}}
                image={show.imageUrl}
                title="green iguana"
            />
            <CardHeader title={show.title}></CardHeader>
            <CardContent>
                {/*<Typography gutterBottom variant="h5" component="div">*/}
                {/*    {show.title}*/}
                {/*</Typography>*/}
                <Typography variant="body2" color="text.secondary">
                    {show.description}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton color="secondary" aria-label="add an alarm" onClick={()=>handleWatchLaterClick(index)}>
                    {
                        show.isFavorite && <FavoriteIcon color={'warning'}/>
                    }
                    {
                        !show.isFavorite && <FavoriteIcon color={'info'}/>
                    }
                </IconButton>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default LatestShow;
