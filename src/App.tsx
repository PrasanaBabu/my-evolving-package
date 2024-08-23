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

const StyledBox = styled(Box)`
  padding: 5px;
  margin: 15px;
  text-align: center;
`;

function App() {
    return (
        <BrowserRouter>

            <div className={'header-section2'}>
                <Header/>
                <Routes>
                    <Route path={'/'} element={<HomePage/>} />
                    <Route path={'/home'} element={<HomePage/>} />
                    <Route path={'/netflix'} element={<NetflixPage/>} />
                    <Route path={'/about'} element={<About/>} />
                    <Route path={'/products'} element={<Products/>} />
                </Routes>
            </div>
            {/*<StyledBox>*/}
            {/*    <Typography variant={'h1'}> Success </Typography>*/}
            {/*</StyledBox>*/}
            <div className={'footer-section'}>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
