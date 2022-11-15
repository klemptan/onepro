import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../..';
import { numberWithSpaces } from '../../App';

const Title = observer(() => {
    const {basket} = useContext(Context)
    return (
        <div className="basket-title-block" data-entity="basket-total-block">
                {basket.isEmpty ?
                    <div className="basket-title">
                        <div style={{color:'#ccc'}}>Ваша корзина пуста</div>
                    </div> :
                    <div className="basket-title">
                        <h1>Корзина:&nbsp;</h1>

                        <div>количество {basket.totalCount} на сумму {numberWithSpaces(basket.totalSum)} тг</div>
                    </div>

                }
            </div>
    );
});

export default Title;