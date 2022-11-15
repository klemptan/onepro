import React, { useContext, useEffect } from 'react';
import GoodItem from './GoodItem';
import {Context} from '../../index'
import { observer } from 'mobx-react-lite';

const GoodsList = observer(() => {
    const {basket} = useContext(Context)
    return (
        <div id="basket-items-list-wrapper">
            <div id="basket-items-list-container">
                <div id="basket-item-list">
                    <div className="items_table" id="basket-item-table">
                        {basket.goods.map(m=>
                            <GoodItem good={m} key={m.good.id}/>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
});

export default GoodsList;