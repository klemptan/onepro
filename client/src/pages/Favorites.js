import React, { useContext,useEffect} from 'react';
import { Context } from '../index';
import FavoriteGoods from '../components/FavoriteGoods'
import {fetchBrands} from '../http/shopAPI'
const Favorites = () => {
    const {good} = useContext(Context)
    useEffect(() => {
        fetchBrands().then(data => good.setBrands(data))
    }, []);
    return (
        <div>
            <div className="heading saved-favorites">
                <h1>Отложенные товары</h1>
            </div>
            <FavoriteGoods />
        </div>
    );
}

export default Favorites;
