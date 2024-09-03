import React from 'react';
import './App.css'
import Header from './layout/Header';
import Footer from './layout/Footer';
import {Box} from '@mui/material';

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

} from '@tanstack/react-query'
import {HelmetProvider} from 'react-helmet-async';
import CounterPage from './pages/CounterPage';
import TodosPage from './pages/TodosPage';
import MainRouter from './routes/MainRouter';

const queryClient = new QueryClient()


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <HelmetProvider>
                    <div className={'header-section2'}>
                        <Header/>
                        <MainRouter/>
                    </div>
                    {/*<StyledBox>*/}
                    {/*    <Typography variant={'h1'}> Success </Typography>*/}
                    {/*</StyledBox>*/}
                    <div className={'footer-section'}>
                        <Footer/>
                    </div>
                </HelmetProvider>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
