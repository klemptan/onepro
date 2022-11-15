import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../index';
import { numberWithSpaces } from '../../App';

const Total = observer(() => {
    const { basket } = useContext(Context)
    return (
        <>
        {
            basket.isEmpty ?
            <></> :
            <div className="row_order_col2">
                <div id="bx-soa-total">
                    <div className="bx-soa-cart-total-ghost" />
                    <div className="bx-soa-cart-total">
                        <div className="bx-soa-cart-total-line">
                            <span className="bx-soa-cart-t">Оборудование:</span>
                            <span className="bx-soa-cart-d">{numberWithSpaces(basket.totalSum)} ₽</span>
                        </div>
                        <div className="bx-soa-cart-total-line">
                            <span className="bx-soa-cart-t">Доставка:</span>
                            <span className="bx-soa-cart-d">{500} ₽</span>
                        </div>
                        <div className="bx-soa-cart-total-line bx-soa-cart-total-line-total">
                            <span className="bx-soa-cart-t">Итого к оплате:</span>
                            <span className="bx-soa-cart-d bx-soa-changeCostSign">{numberWithSpaces(basket.totalSum + 500)} ₽</span>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    );
});

export default Total;