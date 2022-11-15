import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { numberWithSpaces } from '../../App';
import { Context } from '../../index';

const GoodItem = observer(({good}) => {
    const { basket } = useContext(Context)
    return (
        <div className="items_table_item " id="basket-item-5159" data-entity="basket-item" data-id="5159">

            <div className="cart_item" id="basket-item-height-aligner-5159">

                <div className="cart_item_image">
                    <a href={'/Good/' + good.good.id}><img alt={good.good.model.replaceAll('<br/>', '')} src={process.env.REACT_APP_API_URL + '/' + good.good.good_images[0].img} /></a>
                    <div className="name-block">
                        <div className="name-text">{good.good.model.replaceAll('<br/>', '').replaceAll('<br>', '')}</div>
                        <a className="product-title" href="/catalog/nasosy-vysokogo-davleniya/hawk/hd1417r-nasos-vysokogo-davleniya-170-bar-14-l-min/">HD1417R Насос высокого давления 170 бар / 14 л./ мин</a>
                    </div>
                </div>

                <div className="cart_item_txt" id="basket-item-price-5159">

                    <div className="cart_item_txt_q" data-entity="basket-item-quantity-block">
                        <div className="amount-items-basket">Количество</div>
                        <div>
                            <span className="basket-item-amount-btn-minus" data-entity="basket-item-quantity-minus" onClick={()=>basket.unsetGood(good.good.id,false)} />
                            <label htmlFor="basket-item-quantity-5159">
                                <input className="basket-item-amount-filed" type="text" value={good.amount} data-value="1" data-entity="basket-item-quantity-field" id="basket-item-quantity-5159" readOnly />
                            </label>
                            <span className="basket-item-amount-btn-plus" data-entity="basket-item-quantity-plus" onClick={()=>basket.setGood(good.good)} />
                        </div>
                    </div>
                    <div className="basket-item-block-price">
                        <div className="basket-item-price-title">
                            Цена
                        </div>
                        <div className="basket-item-price-current">
                            <span className="basket-item-price-current-text" id="basket-item-price-5159">{numberWithSpaces(good.good.price)} ₽</span>
                        </div>

                    </div>
                    <div className="basket-item-block-price">
                        <div className="basket-item-price-title">Сумма</div>
                        <div className="basket-item-price-current">
                            <span className="basket-item-price-current-text all_price" id="basket-item-sum-price-5159">
                                {numberWithSpaces(good.good.price * good.amount)} ₽
                            </span>
                        </div>
                    </div>
                    <div className="delete-block" >
                        <div className="delete-txt">Удалить</div>
                        <span className="cart_item_txt_del" onClick={()=>basket.unsetGood(good.good.id,true)} data-entity="basket-item-delete" >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.667 2.66666H13.3336H11.3336V0.666656C11.3336 0.298656 11.0356 0 10.667 0H5.33365C4.96499 0 4.66699 0.298656 4.66699 0.666656V2.66666H2.66699H1.33365C0.964992 2.66666 0.666992 2.96531 0.666992 3.33331C0.666992 3.70131 0.964961 4 1.33365 4H2.0003V14C2.0003 15.1027 2.89765 16 4.0003 16H12.0003C13.103 16 14.0003 15.1027 14.0003 14V4H14.667C15.0356 4 15.3336 3.70134 15.3336 3.33334C15.3336 2.96534 15.0356 2.66666 14.667 2.66666ZM6.0003 1.33334H10.0003V2.66669H6.0003V1.33334ZM12.667 14C12.667 14.3673 12.3683 14.6667 12.0003 14.6667H4.0003C3.6323 14.6667 3.33365 14.3673 3.33365 14V4H5.33365H10.667H12.667V14H12.667Z" fill="#717171" />
                                <path d="M5.99966 5.33337C5.63101 5.33337 5.33301 5.63203 5.33301 6.00003V12C5.33301 12.368 5.63101 12.6667 5.99966 12.6667C6.36832 12.6667 6.66632 12.368 6.66632 12V6.00003C6.66632 5.63203 6.36832 5.33337 5.99966 5.33337Z" fill="#717171" />
                                <path d="M9.99966 5.33337C9.63101 5.33337 9.33301 5.63203 9.33301 6.00003V12C9.33301 12.368 9.63101 12.6667 9.99966 12.6667C10.3683 12.6667 10.6663 12.368 10.6663 12V6.00003C10.6663 5.63203 10.3683 5.33337 9.99966 5.33337Z" fill="#717171" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default GoodItem;