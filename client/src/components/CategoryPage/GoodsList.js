import React, {useContext} from 'react';
import {Context} from "../../index";
import {useParams} from "react-router-dom";
import GoodItem from "./GoodItem";

const GoodsList = () => {
    const params = useParams()
    const {good} = useContext(Context)
    let goodList = [];

    if(params.id){
        goodList = good.goods.filter(m=>m.categoryId==params.id)
    }
    else {
        goodList=good.goods
    }

    return (
        <div>
            <div className="filter-top-grey"></div>
            <div className="products-items">
                {goodList.map(m=>
                    <GoodItem key={m.id} good={m}/>
                )}
            </div>
        </div>
    );
};

export default GoodsList;