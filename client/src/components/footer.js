import React, {useContext, useState} from 'react';
import GoodStore from "../store/GoodStore";
import {Context} from "../index";



const Footer = () => {
    const {good} = useContext(Context)
    const [open,setOpen] = useState(()=>{
        return good.CheckOpen
    })

    return (<footer>
        <div className="footer-main">
            <div className="left-bottom-block">
                <a href="tel:88002509561" className="phone-link">
                    <span>8 800-250-95-61</span>
                </a>

                <a href="mailto:sale@iself.pro" className="mail-link">
                    <img src="https://iself.shop/img/cloud.svg" alt="сообщение"/>
                </a>
            </div>


            <div className="footer-container">
                <div className="center-footer__item">
                    <span className="address small">Адрес:</span>
                    <p>
                        1-й км автодороги Ростов-на-Дону-Новошахтинск, строение 4/3, 1 этаж, офис 4, на территории
                        Т.С.К. "Спектр"
                    </p>
                </div>
                <div className="right-footer__item">
                    <span className="time-work small">График работы:</span>
                    <div className="graphic-container">
                        <div className="days-container">
                            <p className="days">
                                <span>пн</span>
                                <span>вт</span>
                                <span>ср</span>
                                <span>чт</span>
                                <span>пт</span>
                                <span className="free"
                                      style={{marginLeft:10}}
                                >сб</span>
                                <span className="free">вс</span>
                            </p>
                        </div>
                        <p className="time">
                                <span className="opening-hours">
                                    Сегодня
                                    <span className="hours ms-2">08:45 - 18:00</span>
                                </span>

                            <span className="time-opened">
                                    <span className="circle" style={{background:(open?"#07b88d":"#d63384")}}></span>
                                {
                                    open?
                                        "Открыто":
                                        "Закрыто"
                                }
                            </span>
                        </p>
                    </div>
                </div>

            </div>


        </div>

    </footer>);
};

export default Footer;