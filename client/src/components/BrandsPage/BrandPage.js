import { observer } from 'mobx-react-lite';
import React, { useContext,useEffect } from 'react';
import { Context } from '../../index';
import {fetchBrandWitGoods} from '../../http/shopAPI'
import GoodsList from './GoodsList';

const BrandPage = observer(({ id }) => {
    const {good} = useContext(Context)
    useEffect(() => {
        fetchBrandWitGoods(id).then(data=>good.setBrandWithGoods(data))
    }, []);
    return (
        <div className="top-brand-info">
            <div className="top-brand-desc-top">
                <img src={process.env.REACT_APP_API_URL+'/'+good.brandWithGoods.logo} alt="" />
                <h1>{good.brandWithGoods.name}</h1>
            </div>
            { /*—noindex—*/}
            <p className="top-brand-desc-bottom">
                {good.brandWithGoods.description}
            </p>
            { /*—/noindex—*/}
            <div className='products-items brands'>
                <GoodsList/>
            </div>
        </div>
    );
})

export default BrandPage;
