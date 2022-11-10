import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import GoodStore from "./store/GoodStore";
import BasketStore from "./store/BasketStore";


const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null)


root.render(
    <Context.Provider value={{
        user: new UserStore(),
        good: new GoodStore(),
        basket: new BasketStore()
    }}>
        <App />
    </Context.Provider>
);
