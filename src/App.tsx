import React from 'react';
import './App.css'
import Header from './layout/Header';
import Footer from './layout/Footer';
import {Box, Typography} from '@mui/material';

import styled from '@emotion/styled'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NetflixPage from './pages/NetflixPage';
import Products from './pages/Products';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import UserManagementPage from './pages/UserManagementPage';
import CreateUserPage from './pages/CreateUserPage';
import UserDetails from './pages/UserDetails';

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



const StyledBox = styled(Box)`
  padding: 5px;
  margin: 15px;
  text-align: center;
`;

function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>

            <div className={'header-section2'}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<HomePage/>} />
                    <Route path={'/home'} element={<HomePage/>} />
                    <Route path={'/netflix'} element={<NetflixPage/>} />
                    <Route path={'/about'} element={<About/>} />
                    <Route path={'/products'} element={<Products/>} />
                    <Route path={'/users'} element={<UserManagementPage />} />
                    <Route path={'/users/:id'} element={<UserDetails />} />
                    <Route path={'/users/create'} element={<CreateUserPage />} />
                    <Route path={'/*'} element={ <ErrorPage/>} />
                </Routes>
            </div>
            {/*<StyledBox>*/}
            {/*    <Typography variant={'h1'}> Success </Typography>*/}
            {/*</StyledBox>*/}
            <div className={'footer-section'}>
                <Footer/>
            </div>
        </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
