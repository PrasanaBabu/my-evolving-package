import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from '@mui/material';
import {LatestShowProps} from './LatestShows';

function LatestShow(props: LatestShowProps) {
    const show = props.show;
    return <Card sx={{maxWidth: 345}}>
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
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>;
}

export default LatestShow;
