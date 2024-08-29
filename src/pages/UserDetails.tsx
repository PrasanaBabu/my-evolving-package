import {Button, Card, CardActions, CardContent, Container, Typography} from '@mui/material';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';

interface IUser {
    id: number;
    name: string;
    phone: string;
    email: string;

}
const UserDetails = () => {

    const userId = 1;
    const [user, setUser] = useState({email: ''} as IUser);

    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://jsonplaceholder.typicode.com/users/' + user.id).then((res) =>
                res.json(),
            ),
    })

    useEffect(() => {

    axios.get('https://jsonplaceholder.typicode.com/users/' + user.id)
        .then((response) => {
            console.log('User Details', response.data);
            setUser(response.data)
        })
        .catch((error) => {
            console.log('Error while fetching user details', error);
        })
        .finally(() => {
            console.log('User Details fetched finally');
        });
    }, []);



    return (
        <Container>
            <Typography variant="h1">User Details</Typography>
            <Card variant="outlined">
                <CardContent>
                    <Typography
                        gutterBottom
                        sx={{ color: "text.secondary", fontSize: 14 }}
                    >
                        User Id: {user?.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                        John Doe
                    </Typography>

                    <Typography variant="body2">Phone: 1234567890</Typography>
                    <Typography variant="body2">EMail: a@k.com</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">
                        Edit
                    </Button>
                    <Button size="small" variant="outlined" color="error">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
}

export default UserDetails;
