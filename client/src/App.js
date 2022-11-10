import './App.min.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import React, {useContext} from "react";
import {Context} from "./index";
import Header from "./components/header";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import Catalog from "./pages/Catalog";


function App() {

    const {user} = useContext(Context)


    const adminRoutes = [
        {
            path: '/admin',
            element: <Admin/>
        }
    ]

    const publicRoutes = [
        {
            path: '/',
            element: <Main/>
        },
        {
            path: '/Catalog',
            element: <Catalog/>
        },
        {
            path: '/Catalog/Category' + '/:id',
            element: <Catalog/>
        }
    ]


    return (
        <BrowserRouter>
            <Header/>
            <NavBar/>
            <Routes>
                {user.isAuth && adminRoutes.map(m =>
                    <Route key={m.path} path={m.path} element={m.element}/>
                )}

                {publicRoutes.map(m =>
                    <Route key={m.path} path={m.path} element={m.element}/>
                )}

                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
}

export default App;
