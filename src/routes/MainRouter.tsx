import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage';

// import NetflixPage from '../pages/NetflixPage';
import About from '../pages/About';
import Products from '../pages/Products';
import CounterPage from '../pages/CounterPage';
import TodosPage from '../pages/TodosPage';
import UserManagementPage from '../pages/UserManagementPage';
import UserDetails from '../pages/UserDetails';
import CreateUserPage from '../pages/CreateUserPage';
import ErrorPage from '../pages/ErrorPage';
import React, {Suspense} from 'react';
const NetflixPage = React.lazy(() => import('../pages/NetflixPage'));


const MainRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
                <Route path={'/netflix'} element={<NetflixPage/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/products'} element={<Products/>}/>
                <Route path={'/counter'} element={<CounterPage/>}/>
                <Route path={'/todos'} element={<TodosPage/>}/>
                <Route path={'/users'} element={<UserManagementPage/>}/>
                <Route path={'/users/:id'} element={<UserDetails/>}/>
                <Route path={'/users/create'} element={<CreateUserPage/>}/>
                <Route path={'/*'} element={<ErrorPage/>}/>
            </Routes>
        </Suspense>
    )
}

export default MainRouter;
