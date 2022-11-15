import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { Context } from '../..';

const MakeOrder = observer(() => {
    const { basket } = useContext(Context)
    const [deliveryType, setDeliveryType] = useState(2)
    return (
        <>
            {basket.isEmpty ?
                <></> :
                <>
                    <div className="col-sm-9 row_order_col1">
                        { /*	DELIVERY BLOCK	*/}
                        <div className="delivery-block">
                            <div className="order_title">
                                Доставка:                </div>
                            <div id="bx-soa-delivery" data-visited="true" className="bx-soa-section bx-active bx-selected">

                                <div className="bx-soa-section-content"><div className="alert alert-danger" style={{ display: "none" }} />
                                    <div className="bx-soa-pp"><div className="bx-soa-pp-item-container">
                                        <div className="bx-soa-pp-company  bx-selected">
                                            <div className="bx-soa-pp-company-graf-container">
                                                <input id="ID_DELIVERY_ID_2" name="DELIVERY_ID" type="radio" className="bx-soa-pp-company-checkbox" value="2" onChange={(e)=>setDeliveryType(+e.target.value)} defaultChecked />
                                                <input name="PROP_DELIVERY_NAME" type="checkbox" value="" style={{ display: "none" }} />
                                                <input name="PROP_DELIVERY_PRICE" type="checkbox" value="500 \u0440\u0443\u0431." style={{ display: "none" }} />
                                            </div>
                                            <div className="bx-soa-pp-company-smalltitle">Курьером до транспортной компании<br />Бесплатная доставка Вашего заказа до транспортной компании</div>
                                        </div><div className="bx-soa-pp-company">
                                            <div className="bx-soa-pp-company-graf-container">
                                                <input id="ID_DELIVERY_ID_3" name="DELIVERY_ID" type="radio" className="bx-soa-pp-company-checkbox" value="3" onChange={(e)=>setDeliveryType(+e.target.value)} />
                                                <input name="PROP_DELIVERY_NAME" type="checkbox" value="\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437" style={{ display: "none" }} />
                                                <input name="PROP_DELIVERY_PRICE" type="checkbox" value="undefined \u0440\u0443\u0431." style={{ display: "none" }} /></div>
                                            <div className="bx-soa-pp-company-smalltitle">Самовывоз<br />Вы можете самостоятельно забрать заказ на складе нашего магазина.</div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bx-basket">
                            <div className="basket-checkout-container-middle">
                                <div className="flex-container">
                                    <div className="form-right">


                                        <div className="form-items">
                                            <div className="form-item">
                                                <div className="field-title">ФИО либо название организации *</div>
                                                <input type="text" name="PROP_NAME" data-req="true" />
                                            </div>
                                            <div className="form-item">
                                                <div className="field-title">Email *</div>
                                                <input className="form-control bx-soa-customer-input bx-ios-fix" type="email" name="PROP_EMAIL" data-req="true" />
                                            </div>
                                            <div className="form-item">
                                                <div className="field-title">Телефон для связи *</div>
                                                <input className="form-phone" type="text" name="PROP_PHONE" data-req="true" />
                                            </div>
                                            <div className="form-item">
                                                <div className="field-title">Тип плательщика *</div>
                                                <div className="radio-item-block">
                                                    <div className="radio-item">
                                                        <input type="radio" name="PROP_BUYER_TYPE" value="\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E" defaultChecked />
                                                        <div className="type-name">Физическое лицо</div>
                                                    </div>
                                                    <div className="radio-item">
                                                        <input type="radio" name="PROP_BUYER_TYPE" value="\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E" />
                                                        <div className="type-name">Юридическое лицо</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={"form-item address "+(deliveryType!=2?"hidden-item":"")}>
                                                <div className="field-title">Адрес доставки *</div>
                                                <div className="address-item">
                                                    <label htmlFor="city">Город *:</label>
                                                    <input type="text" name="PROP_CITY" id="city" data-req2="true" />
                                                </div>
                                                <div className="address-item">
                                                    <label htmlFor="street">Улица *:</label>
                                                    <input type="text" name="PROP_STREET" id="street" data-req2="true" />
                                                </div>
                                                <div className="address-item">
                                                    <label htmlFor="house">Дом *:</label>
                                                    <input type="text" name="PROP_HOUSE" id="house" data-req2="true" />
                                                </div>
                                                <div className="address-item">
                                                    <label htmlFor="building">Корпус:</label>
                                                    <input type="text" name="PROP_BUILDING" id="building" />
                                                </div>
                                            </div>
                                            <div className="form-item">
                                                <div className="field-title">Способ оплаты *</div>
                                                <div className="radio-item-block">
                                                    <div className="radio-item">
                                                        <input id="ID_PAY_SYSTEM_ID_10" type="radio" name="PROP_BUY_TYPE" value="\u041D\u0430\u043B\u0438\u0447\u043D\u043E" defaultChecked />
                                                        <div className="type-name">Налично</div>

                                                    </div>
                                                    <div className="radio-item">
                                                        <input id="ID_PAY_SYSTEM_ID_11" type="radio" name="PROP_BUY_TYPE" value="\u0411\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E" />
                                                        <div className="type-name">Безналично</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <input name="IBLOCK_ID" type="hidden" value="8" />
                                            <input name="FORM_ID" type="hidden" value="52" />
                                            <input name="FORM_AJAX_MODE" type="hidden" value="Y" />
                                            <input value="37.99.38.52" type="hidden" name="PROP_HID" />
                                            <div className="form-open__row">
                                                <span className="form-open__descr" />
                                                <div className="form-open__input">
                                                    <div id="recaptha52" className="recaptha-widget"><div style={{ width: 304, height: 78 }}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc4otEcAAAAAHfBKsNUdQ_9LglogKD11JbvALGO&co=aHR0cHM6Ly9pc2VsZi5zaG9wOjQ0Mw..&hl=ru&v=jF-AgDWy8ih0GfLx4Semh9UK&theme=light&size=normal&cb=s42w3radsjju" width="304" height="78" role="presentation" name="a-3unuf5yd6h4" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: 250, height: 40, border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: 0, resize: "none", display: "none" }} /></div><iframe style={{ display: "none" }} /></div><input type="hidden" name="recaptha_ip" value="37.99.38.52" /><input type="hidden" name="recaptha_id" value="52" />            </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>



                        { /*	BASKET ITEMS BLOCK	*/}
                        <div id="bx-soa-basket" data-visited="false" className="hide_it">
                            <div className="bx-soa-section-content container-fluid" />
                        </div>




                        <div style={{ display: "none" }}>
                            <div id="bx-soa-basket-hidden" className="bx-soa-section" />
                            <div id="bx-soa-region-hidden" className="bx-soa-section" />
                            <div id="bx-soa-paysystem-hidden" className="bx-soa-section" />
                            <div id="bx-soa-delivery-hidden" className="bx-soa-section" />
                            <div id="bx-soa-pickup-hidden" className="bx-soa-section" />
                            <div id="bx-soa-properties-hidden" className="bx-soa-section" />
                            <div id="bx-soa-auth-hidden" className="bx-soa-section">

                            </div>
                        </div>
                    </div>
                    <div id="bx-soa-orderSave">
                        <div className="checkbox">
                        </div>

                        <div className="order-buttons">
                            <a className="clear_cart" href="/cart/?action=clear" >Очистить корзину</a>
                            <button className="button field-button make-order" type="submit">
                                {/* <div className="preloader">
            <img src="/local/templates/.default/img/preloader.gif" alt="preloader" />
        </div> */}
                                Оформить заказ</button>
                        </div>

                    </div>
                </>
            }
        </>
    );
});

export default MakeOrder;