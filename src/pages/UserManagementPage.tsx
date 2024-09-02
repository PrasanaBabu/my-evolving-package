import {
    Card,
    CardContent,
    CardActions,
    Grid,
    Alert,
    CircularProgress,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from '@emotion/styled';
import {ToastContainer} from 'react-toastify';

interface IUser {
    id: number;
    name: string;
    phone: string;
}

const styledContainer = styled('div')`
  
`;

const UserManagementPage = () => {
    console.log("Program Started");
    const [isLoading, setIsLoading] = useState(true); // loading state
    const [users, setUsers] = useState<IUser[] | []>([]); // positive state
    const [isError, setIsError] = useState(false); // error state

    // How to connect to the backend rest api
    // 1. What is the backend api url? https://jsonplaceholder.typicode.com/users
    // 2. What is the HTTP method? GET
    // 3. What is the REST API Client? npm i axios

    useEffect(() => {
        console.log("Inside UseEffect");
        // ideal place to fetch data from the backend
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                // success
                console.log("Successful Response");
                setIsLoading(false);
                setUsers(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                // error
                console.log("Error Response");
                console.log(error);
            })
            .finally(() => {
                // finally
                console.log("It is over");
            });
    }, []);

    console.log("Program Ended");
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundImage:
                    "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)",
                ...theme.applyStyles("dark", {
                    backgroundImage:
                        "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)",
                }),
            })}
        >
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            alignItems: "center",
                            fontSize: "clamp(3rem, 10vw, 3.5rem)",
                        }}
                    >
                        Welcome to&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={(theme) => ({
                                fontSize: "inherit",
                                color: "primary.main",
                                ...theme.applyStyles("dark", {
                                    color: "primary.light",
                                }),
                            })}
                        >
                            User Manager App!
                        </Typography>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: "center",
                            color: "text.secondary",
                            width: { sm: "100%", md: "80%" },
                        }}
                    >
                        Manage Users, Create, List, Edit, Delete, and more!
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        href="/users/create"
                    >
                        Create User
                    </Button>
                </Stack>
            </Container>

            <Container>
                <Typography variant="h2" sx={{ mt: 10 }}>
                    Listing Users
                </Typography>

                {isLoading && <CircularProgress color="success" />}

                {isError && (
                    <Alert severity="error">
                        Sorry! Some Error occured! Try again later!
                    </Alert>
                )}

                <Grid container spacing={2}>
                    {users?.map((user: IUser) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            sx={{ color: "text.secondary", fontSize: 14 }}
                                        >
                                            #{user.id}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {user.name}
                                        </Typography>
                                        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                                            phone: {user.phone}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href={`/users/${user.id}`}>
                                            View More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default UserManagementPage;
