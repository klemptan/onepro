import React from 'react';

const Contacts = () => {
    return (
        <div>
            <div className="contacts">
                <div className="contacts-top">
                    <div className="text-block">
                        <div className="top-text-block">
                            <h1>Контакты</h1>
                            <p>универсальный поставщик комплектующих для автомоек</p>
                        </div>
                        <div className="contacts-text">
                            <span>Всегда на связи</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-items">
                <div className="contacts-item">
                    <div className="contacts-item-title">Отдел продаж</div>
                    <a href="tel:tel:79185581007" className="contacts-item-info">+7(918)558-10-07</a>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-title">Электронная почта</div>
                    <a href="mailto:sale@iself.pro" className="contacts-item-info">sale@iself.pro</a>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-title">Склад: Ростов-на-Дону</div>
                    <div className="contacts-item-info"><span>1-й км автодороги Ростов-на-Дону-Новошахтинск, </span><span>строение 4/3, 1 этаж, офис 4, на территории Т.С.К. "Спектр"</span></div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-title">Режим работы</div>
                    <div className="contacts-item-info">
                        <span>пн вт ср чт пт сб вс</span>
                        <span>Сегодня 08:45 - 18:00</span>
                    </div>
                </div>
            </div>
            <div className="contacts-items">

                <div className="contacts-item">
                    <div className="contacts-item-title">Склад: Москва</div>
                    <div className="contacts-item-info"><span>Московская область,
                        Красногорский район,
                    </span><span>пос. Отрадное,
                        Пятницкое шоссе, 6-й км., стр.9</span></div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-title">Режим работы</div>
                    <div className="contacts-item-info">
                        <span>пн вт ср чт пт сб вс</span>
                        <span>Сегодня 08:45 - 18:00</span>
                    </div>
                </div>
            </div>
            <div className="o-kompanii-info">
                <div className="wrapper">
                    <div className="o-kompanii-name"><span>Название компании: </span> ООО "Автомойки самообслуживания"</div>
                    <div className="o-kompanii-address"><span>Юридический адрес: </span> 115184, г. Москва, ул. Большая Татарская, дом 21, строение 4, этаж 1, помещение 13</div>
                    <div className="o-kompanii-ogrn"><span>ОГРН: </span> 1145024006962</div>
                </div>
            </div>
            <div className="form">
                <div className="form-text">Напишите нам</div>
                <form action="/contacts/" id="contacts_form" method="post" encType="multipart/form-data" className="contacts-form">
                    <div className="top">
                        <div className="form-item">
                            <input type="text" id="name" autoComplete="off" data-req="true" name="PROP_NAME" />
                            <label htmlFor="name" className="">Представьтесь *</label>
                        </div>
                        <div className="form-item">
                            <input type="text" id="phone" autoComplete="off" data-req="true" name="PROP_PHONE" className="form-phone" />
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
                                <div id="recaptha54" className="recaptha-widget"><div style={{ width: 304, height: 78 }}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc4otEcAAAAAHfBKsNUdQ_9LglogKD11JbvALGO&co=aHR0cHM6Ly9pc2VsZi5zaG9wOjQ0Mw..&hl=ru&v=jF-AgDWy8ih0GfLx4Semh9UK&theme=light&size=normal&cb=7bixpy89egnq" width="304" height="78" role="presentation" name="a-kg7hs3eduul2" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: 250, height: 40, border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: 0, resize: "none", display: "none" }} /></div><iframe style={{ display: "none" }} /></div><input type="hidden" name="recaptha_ip" value="95.56.231.227" /><input type="hidden" name="recaptha_id" value="54" />                    </div>
                        </div>
                        <div className="agreement">
                            <div className="checkbox_block">
                                <input type="checkbox" id="agreement" name="agreement" value="1" checked={true} />
                                <label htmlFor="agreement">Я согласен с условиями <a href="">пользовательского соглашения</a> и <a href="">политикой конфиденциальности</a></label>
                            </div>
                            <button className="button contacts-btn" type="submit">
                                <span>Отправить</span>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
