import {Button, Card, CardActions, CardContent, Container, Typography} from '@mui/material';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {useParams} from 'react-router-dom';
import styled from '@emotion/styled';

interface IUser {
    id: number;
    name: string;
    phone: string;
    email: string;

}

const styledContainer = styled('div')`
`;

const fetchUserDetails = async (id: string): Promise<IUser> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    return response.json();
}

async function fetchUserDetailsWithId(id: string | undefined) {
    console.log('id', id)

        let response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        if (response.ok){
            return response.json();
        }
        else {
            throw new Error('Error while fetching user details')
        }

}

const UserDetails = () => {

    const { id} = useParams();


    const {isPending, error, data: userDetails} = useQuery({
        queryKey: ['userDetails'],
        queryFn: () => fetchUserDetailsWithId(id),
    })

    console.log('errror', error);

    return (
        <Container>
            <Typography variant="h1">User Details</Typography>
            <Card variant="outlined">
                <CardContent>
                    <Typography
                        gutterBottom
                        sx={{color: "text.secondary", fontSize: 14}}
                    >
                        User Id: {userDetails?.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {userDetails?.name}
                    </Typography>

                    <Typography variant="body2">Phone: {userDetails?.phone}</Typography>
                    <Typography variant="body2">Email: {userDetails?.email}</Typography>
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
