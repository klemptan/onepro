import React, {useContext, useEffect} from 'react';
import MainPageSlider from "../components/MainPage/MainPageSlider";
import MainCategoryItem from "../components/MainPage/MainCategoryItem";
import MainCategoryList from "../components/MainPage/MainCategoryList";
import MainSelfServiceList from "../components/MainPage/MainSelfServiceList";
import MainPartnersSlider from "../components/MainPage/MainPartnersSlider";
import Footer from "../components/footer";
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {fetchCategories} from '../http/shopAPI'

const Main = observer(() => {
    const {good} = useContext(Context)


    return (
            <div className="main">
                <MainPageSlider/>
                <MainCategoryList/>

                <div className="equipments">
                    <div className="equipments-left">
                        <h2 className="equipments-title">
                            Универсальный поставщик<br />
                            оборудования и комплектующих
                        </h2>
                        <p>
                            На сегодняшний день компания ISELF является надежным партнером различных бизнес-проектов в сфере
                            моечно-уборочной техники и автохимии. Мы предлагаем Вам качественное и надежное оборудование,
                            произведенное на основе лучших европейских комплектующих, полный спектр запасных частей в
                            наличии и техническую поддержку опытной командой специалистов прошедших профессиональное
                            обучение. Оснащенные оборудованием ISELF автомойки прошли контроль качества в суровых российских
                            условиях, отлично себя зарекомендовав надежной бесперебойной работой. Постоянно отслеживая новые
                            мировые тенденции автомоечного бизнеса мы стараемся воплощать лучшее в оборудовании ISELF
                        </p>
                    </div>
                    <img alt="enmku9ze8bu2q2f9s7t5o7xe6m71gv8z.png"
                        src="https://iself.shop/upload/medialibrary/f20/wpihopu27tv7612ojk7dg7du2w6mps2m.png"
                        title="enmku9ze8bu2q2f9s7t5o7xe6m71gv8z.png" />
                </div>
                <br/>
                <div className="why-us">
                    <div className="why-us-container">
                        <div className="why-us__left">
                            Почему крупные компании выбирают именно нас
                        </div>
                        <div className="why-us__right">
                            <div className="why-us__right-item">
                                <div>
                                    <img alt="warehouse.png"
                                        src="https://iself.shop/upload/medialibrary/089/wyzyunvk3tmrjob4oq2r1uhaqlqiumze.png"
                                        title="warehouse.png" width="77" height="77"/>
                                </div>
                                <p>
                                    Собственные склады в крупных городах РФ
                                </p>
                            </div>
                            <div className="why-us__right-item">
                                <div>
                                    <img alt="shopping-online.png"
                                        src="https://iself.shop/upload/medialibrary/20c/5jjp5bl0nb1s4pv30sj9nugf0p5h66my.png"
                                        title="shopping-online.png" width="77" height="77"/>
                                </div>
                                <p>
                                    Вы можете оплатить заказ по наличному и безналичному расчету или оформить онлайн
                                </p>
                            </div>
                            <div className="why-us__right-item">
                                <div>
                                    <img alt="cool.png" src="https://iself.shop/upload/medialibrary/b8c/2pj8jjos1ilv40zljp8mok3f7tl50498.png"
                                        title="cool.png" width="120" height="88" />
                                </div>
                                <p>
                                    В течение нескольких лет уже более 1500 компаний стали постоянными клиентами
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <MainPartnersSlider/>

            </div>
            );
});

export default Main;