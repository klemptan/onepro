import './App.min.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import React, { useContext } from "react";
import { Context } from "./index";
import Header from "./components/header";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Catalog from "./pages/Catalog";
import GoodInfo from './pages/GoodInfo';
import Basket from './pages/Basket';
import Brands from './pages/Brands';
import Delivery from './pages/Delivery';
import Service from './pages/Service';
import Contacts from './pages/Contacts';
import Favorites from './pages/Favorites';
import Search from './pages/Search';

export function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function App() {

    const { user } = useContext(Context)

    const adminRoutes = [
        {
            path: '/admin',
            element: <Admin />
        }
    ]

    const publicRoutes = [
        {
            path: '/',
            element: <Main />
        },
        {
            path: '/Catalog',
            element: <Catalog categoryId={0} />
        },
        {
            path: '/Catalog/Category' + '/:id',
            element: <Catalog />
        },
        {
            path: '/Good' + '/:id',
            element: <GoodInfo />
        },
        {
            path: '/Basket',
            element: <Basket />
        },
        {
            path:'/Brands/',
            element:<Brands/>
        },
        {
            path:'/Brands/brand/:id',
            element:<Brands/>
        },
        {
            path:'/delivery',
            element:<Delivery/>
        },
        {
            path:'/service',
            element:<Service/>
        },
        {
            path:'/contacts',
            element:<Contacts/>
        },
        {
            path:'/favorites',
            element:<Favorites/>
        },
        {
            path:'/search/:query',
            element:<Search/>
        }
    ]


    return (
        <BrowserRouter>
            <div className='top_header'>
                <Header />
                <NavBar />
            </div>

            <main>
                <Routes>
                    {user.isAuth && adminRoutes.map(m =>
                        <Route key={m.path} path={m.path} element={m.element} />
                    )}

                    {publicRoutes.map(m =>
                        <Route key={m.path} path={m.path} element={m.element} />
                    )}

                    <Route path="*" element={<Navigate to={'/'} />} />
                </Routes>
            </main>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
