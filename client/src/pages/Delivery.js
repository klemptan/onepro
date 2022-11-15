import React from 'react';

const Delivery = () => {
    return (
        <div className="main">


            <div className="delivery">
                <div className="delivery-top">
                    <div className="text-block">
                        <div className="top-text-block">
                            <h1>Доставка</h1>
                            <p>универсальный поставщик комплектующих для автомоек</p>
                        </div>
                        <div className="delivery-text">
                            <span>Возможные варианты доставки</span>
                        </div>
                    </div>
                </div>
                <div className="delivery-block">
                    <div className="delivery-city">
                        <h3>Доставка по Москве и Московской области</h3>
                        <div className="delivery-city-bottom">
                            <img src="https://iself.shop/images/city.svg" alt="city" />
                            <p><span>По Московской области - от 500 руб. (Стоимость рассчитывается в зависимости пункта доставки).</span><span> Доставки товара составляет от 1 до 3 рабочих дней после оформления и 100% оплаты заказа при безналичном расчете. Для юридических лиц, при получении оплаченного заказа, при себе необходимо иметь печать или правильно заполненную доверенность на право получения товара. Стоимость доставки крупногабаритного товара согласовывается отдельно.</span></p>
                        </div>
                    </div>
                    <div className="delivery-city">
                        <h3>Доставка в регионы</h3>
                        <div className="delivery-city-bottom">
                            <img src="https://iself.shop/images/map.svg" alt="map" />
                            <p>Доставка по России осуществляется ведущими транспортными компаниями. Стоимость доставки согласно тарифам транспортных компаний. Доставка заказа до офиса транспортной кампании БЕСПЛАТНО. Доставки товара до транспортной компании составляет от 1 до 3 рабочих дней после оформления и 100% оплаты заказа.</p>
                        </div>
                    </div>

                    <div className="delivery-city">
                        <h3>Гарантийная доставка:</h3>
                        <div className="delivery-city-bottom">
                            <div>
                                <p>Доставка товара при сдаче на гарантийный ремонт:</p>
                                <p>В городе Москве и Ростов-на-Дону – для сдачи оборудования на гарантийный ремонт, Вам нужно привезти товар в офис нашей компании.</p>
                                <p>По РФ - для сдачи оборудования на гарантийный ремонт, Вам нужно отправить нам его транспортной компанией.</p>
                                <p>Iself берет на себя обязательство по гарантийному ремонту, если поломка произошла по нашей вине и относится к гарантийному случаю. Ремонт осуществляется в максимально короткие сроки, и оборудование доставляется Вам обратно.</p>
                                <p>Если поломка не относится к гарантийному обслуживанию, то мы сообщаем Вам причину поломки (по Вашей просьбе с предоставлением фото и видео материалов) и стоимость ремонтных работ. В данном случае транспортировка оборудования осуществляется за Ваш счет.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="form">
                <div className="form-text">Задайте вопрос по доставке укажите ваш регион мы свяжемся с вами в ближайшее время </div>
                <p>Заполните заявку: расскажите о вашем поломке, задачах и сроках — и мы свяжемся с вами для обсуждения дальнейшего сотрудничества</p>
                <form action="/delivery/" id="delivery_form" method="post" encType="multipart/form-data" className="delivery-form">
                    <div className="top">
                        <div className="form-item">
                            <input type="text" id="name" autoComplete="off" data-req="true" name="PROP_NAME" />
                            <label htmlFor="name" className="">Представьтесь *</label>
                        </div>
                        <div className="form-item">
                            <input type="text" id="phone" autoComplete="off" data-req="true" className="form-phone" name="PROP_PHONE" />
                            <label htmlFor="phone">Телефон *</label>
                        </div>
                        <div className="form-item">
                            <input type="email" id="email" autoComplete="off" data-req="true" name="PROP_EMAIL" />
                            <label htmlFor="email">Email *</label>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="form-item">
                            <input type="text" id="message" autoComplete="off" name="PROP_MESSAGE" />
                            <label htmlFor="message">Сообщение</label>
                        </div>
                        <div className="form-open__row">
                            <span className="form-open__descr" />
                            <div className="form-open__input">
                                <div id="recaptha53" className="recaptha-widget"><div style={{ width: 304, height: 78 }}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc4otEcAAAAAHfBKsNUdQ_9LglogKD11JbvALGO&co=aHR0cHM6Ly9pc2VsZi5zaG9wOjQ0Mw..&hl=ru&v=jF-AgDWy8ih0GfLx4Semh9UK&theme=light&size=normal&cb=t0gbfoms7phd" width="304" height="78" role="presentation" name="a-9xtmeniv3fik" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: 250, height: 40, border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: 0, resize: "none", display: "none" }} /></div><iframe style={{ display: "none" }} /></div><input type="hidden" name="recaptha_ip" value="95.56.231.227" /><input type="hidden" name="recaptha_id" value="53" />                    </div>
                        </div>
                        <div className="agreement">
                            <div className="checkbox_block">
                                <input className="form-check-input mt-0" type="checkbox" id="agreement" name="agreement" checked={true} />
                                <label htmlFor="agreement">Я согласен с условиями <a href="">пользовательского соглашения</a> и <a href="">политикой конфиденциальности</a></label>
                            </div>
                            <button className="button field-button delivery-btn" type="submit">
                                <span>Отправить</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>


            <div className="payment">
                <h4>Оплата</h4>

                <div className="payment-block">
                    <div className="payment-text">Оплатить заказ Вы можете следующими способами:</div>
                    <p>
                        <span>Оплата наличными (для клиентов из Ростова-на-Дону при получении товара)</span>
                        <span>Безналичный расчет (перечисление средств на наш расчетный счет).</span>
                        <span>На ваш e-mail будет направлен счет, который можно оплатить в любом удобном для вас банке.</span>
                    </p>
                </div>

                <div className="order-block">
                    <div className="order-text">Для оформления счета, Вам необходимо сообщить следующую информацию</div>
                    <div className="order-items">
                        <div className="order-item">
                            <div className="order-item-title">Для физических лиц:</div>
                            <div className="order-info">ФИО полностью;</div>
                            <div className="order-info">Адрес доставки;</div>
                            <div className="order-info">Контактный телефон и адрес электронной почты.</div>
                        </div>
                        <div className="order-item">
                            <div className="order-item-title">Для юридических лиц:</div>
                            <div className="order-info">Реквизиты предприятия - полное и краткое наименование организации, ИНН/КПП/ОГРН;</div>
                            <div className="order-info">ФИО и должность лица, имеющего право подписи;</div>
                            <div className="order-info">Юридический, фактический и почтовый адреса;</div>
                            <div className="order-info">Контактные телефоны.</div>
                        </div>
                        <div className="order-item">
                            <div className="order-item-title">С заказом Вы получаете:</div>
                            <div className="order-info">Для физических лиц выписывается товарный и кассовый чек, гарантийный талон.</div>
                            <div className="order-info">Для юридических лиц – накладная, оригинал счета и гарантийный талон.</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Delivery;
