import React, {useContext} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Navigation, Pagination, Scrollbar} from "swiper";
import {Context} from "../../index";

const MainPageSlider = () => {

    const {good} = useContext(Context)

    return (
        <Swiper
            modules={[Pagination,Navigation,Scrollbar]}
            className="main-slider"
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
        >
            {good.mainSliderSlides.map(m=>
                <SwiperSlide key={m.id}>
                    <div className="slider__bg"
                         style={{
                             backgroundImage:`url('${m.img}')`,
                             backgroundRepeat:"no-repeat",
                             height: 330.231
                         }}
                    >
                    </div>
                    <div className="top-main-slider__text-block">
                        {m.topText.length>0?<div className="top-text">{m.topText}</div>:<></>}
                        <h3 className="top-main-slider__title">{m.title}</h3>

                        <p>
                            {m.p}
                        </p>
                        <a className="more" href={m.link}>
                            <span>подробнее</span>
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="6.5" cy="6.5" r="6.5" fill="#186DDF"></circle>
                                <path
                                    d="M6.7793 6.02539H9.15869V6.62695H6.7793V9.21582H6.12939V6.62695H3.79834V6.02539H6.12939V3.52246H6.7793V6.02539Z"
                                    fill="white"></path>
                                <rect fill="black" fillOpacity="0" x="0.395508" y="-2.94531" width="6.20898"
                                      height="12.8906"></rect>
                            </svg>
                        </a>
                    </div>
                </SwiperSlide>
            )}

        </Swiper>
    );
};

export default MainPageSlider;