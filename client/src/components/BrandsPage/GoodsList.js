import React, {useContext} from 'react';
import {Context} from "../../index";
import {useParams} from "react-router-dom";
import GoodItem from "../CategoryPage/GoodItem";
import {observer} from "mobx-react-lite";

const GoodsList = observer( () => {
    const params = useParams()
    const {good} = useContext(Context)

    return (
        <div>
            <div className="filter-top-grey"></div>
            <div className="products-items">
                {good.brandWithGoods.goods.map(m=>
                    <GoodItem key={m.id} thisGood={m}/>
                )}
            </div>
        </div>
    );
});

export default GoodsList;