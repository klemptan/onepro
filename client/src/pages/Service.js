import React from 'react';

const Service = () => {
    return (
        <div>



            <div className="service">
                <div className="service-top">
                    <div className="text-block">
                        <div className="top-text-block">
                            <h1>Сервис</h1>
                            <p>обслуживание автомоечных комплексов самообслуживания</p>
                        </div>
                        <div className="service-text">
                            <div>
                                Неисправно оборудование на автомойке ?
                            </div>
                            <span>Просто оставьте заявку на ремонт</span> <a href="/">подробнее </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service-info">
                <div className="service-info-title">
                    Сервисное обслуживание
                </div>
                <p>
                    Компания iSelf осуществляет сервисное обслуживание автомоечного оборудования, гарантийный и постгарантийный ремонт.
                </p>
            </div>
            <div className="service-block">
                <div className="service-items">
                    <div className="service-items-pare">
                        <div className="service-item">
                            <div className="svg-icon">
                                <div className="number">
                                    1
                                </div>
                                <img alt="book" src="https://iself.shop/images/book.svg" />
                            </div>
                            <div className="service-item-description">
                                Оставьте заявку, либо свяжитесь с нами, любым удобным для Вас способом
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="svg-icon">
                                <div className="number">
                                    2
                                </div>
                                <img alt="book" src="https://iself.shop/images/mechanism.svg" />
                            </div>
                            <div className="service-item-description">
                                Наши сервисные инженеры проведут подробную диагностику оборудования
                            </div>
                        </div>
                    </div>
                    <div className="service-items-pare">
                        <div className="service-item">
                            <div className="svg-icon">
                                <div className="number">
                                    3
                                </div>
                                <img alt="book" src="https://iself.shop/images/book.svg" />
                            </div>
                            <div className="service-item-description">
                                Подберут оригинальные запчасти и согласуют все запланированные работы
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="svg-icon">
                                <div className="number">
                                    4
                                </div>
                                <img alt="book" src="https://iself.shop/images/soglasovanie.svg" />
                            </div>
                            <div className="service-item-description">
                                Квалифицированные специалисты произведут ремонт
                            </div>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="svg-icon">
                            <div className="number">
                                5
                            </div>
                            <img alt="book" src="https://iself.shop/images/building.svg" />
                        </div>
                        <div className="service-item-description">
                            Отправим по Вашему адресу исправное оборудование
                        </div>
                    </div>
                </div>
            </div>
            <br />


            <div className="form">
                <div className="form-text">Приступим к работе над вашим оборудованием ?</div>
                <p>Заполните заявку: расскажите о вашем поломке, задачах и сроках — и мы свяжемся с вами для обсуждения дальнейшего сотрудничества</p>
                <form action="/service/" id="service_form" method="post" encType="multipart/form-data" className="service-form">
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
                                <div id="recaptha55" className="recaptha-widget"><div style={{ width: 304, height: 78 }}><div><iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Lc4otEcAAAAAHfBKsNUdQ_9LglogKD11JbvALGO&co=aHR0cHM6Ly9pc2VsZi5zaG9wOjQ0Mw..&hl=ru&v=jF-AgDWy8ih0GfLx4Semh9UK&theme=light&size=normal&cb=m50gc0dylrym" width="304" height="78" role="presentation" name="a-bk6smqj8ttc8" frameBorder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" /></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" className="g-recaptcha-response" style={{ width: 250, height: 40, border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: 0, resize: "none", display: "none" }} /></div><iframe style={{ display: "none" }} /></div><input type="hidden" name="recaptha_ip" value="95.56.231.227" /><input type="hidden" name="recaptha_id" value="55" />                    </div>
                        </div>
                        <div className="agreement">
                            <div className="checkbox_block">
                                <input type="checkbox" id="agreement" name="agreement" value="1" checked={true} />
                                <label htmlFor="agreement">Я согласен с условиями <a href="">пользовательского соглашения</a> и <a href="">политикой конфиденциальности</a></label>
                            </div>
                            <button className="button field-button service-btn" type="submit">
                                <span>Отправить</span>
                            </button>
                        </div>
                        <input name="IBLOCK_ID" type="hidden" value="11" />
                        <input name="FORM_ID" type="hidden" value="55" />
                        <input name="FORM_AJAX_MODE" type="hidden" value="Y" />
                        <input value="95.56.231.227" type="hidden" name="PROP_HID" />
                    </div>
                </form>
            </div>

            <div className="thanks-overlay" />
            <div id="thanks" className="thanks">

                <div className="close-thanks">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.6131 4.39099C19.7639 -1.45825 10.2434 -1.45825 4.39416 4.39099C1.56078 7.22549 0 10.9933 0 15.0004C0 19.0076 1.56078 22.7754 4.39416 25.6087C7.31937 28.534 11.1615 29.9959 15.0036 29.9959C18.8457 29.9959 22.6879 28.534 25.613 25.6087C31.4623 19.7595 31.4623 10.2413 25.6131 4.39099ZM23.9698 23.9654C19.0259 28.9093 10.9813 28.9093 6.03744 23.9654C3.64339 21.5714 2.32432 18.387 2.32432 15.0004C2.32432 11.6138 3.64339 8.42948 6.03744 6.03426C10.9813 1.09037 19.0259 1.09154 23.9698 6.03426C28.9125 10.9782 28.9125 19.0227 23.9698 23.9654Z" fill="#5E6774" />
                        <path d="M20.2123 18.5556L16.9222 15.2702L20.2123 11.9847C20.6656 11.5315 20.6656 10.7958 20.2135 10.3414C19.7591 9.88581 19.0235 9.88699 18.5691 10.3402L15.2766 13.628L11.9842 10.3402C11.5298 9.88699 10.7942 9.88581 10.3398 10.3414C9.88655 10.7958 9.88655 11.5314 10.3409 11.9847L13.6311 15.2702L10.3409 18.5556C9.88655 19.0088 9.88655 19.7445 10.3398 20.1989C10.5664 20.4267 10.8651 20.5394 11.1626 20.5394C11.4602 20.5394 11.7576 20.4255 11.9843 20.2001L15.2767 16.9123L18.5691 20.2001C18.7958 20.4267 19.0932 20.5394 19.3908 20.5394C19.6883 20.5394 19.987 20.4255 20.2136 20.1989C20.6667 19.7445 20.6667 19.0088 20.2123 18.5556Z" fill="#5E6774" />
                    </svg>

                </div>
                <div>
                    Мы приняли заявку и свяжемся с вами в ближайшее время.
                </div>
            </div>



        </div>
    );
}

export default Service;
