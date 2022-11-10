import React, {useContext} from 'react';
import {Context} from "../../index";
import {Autoplay, Navigation, Pagination, Scrollbar} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

const MainPartnersSlider = () => {
    const {good} = useContext(Context)

    return (
        <Swiper
            modules={[Pagination,Navigation,Scrollbar,Autoplay]}
            className="main-slider"
            spaceBetween={50}
            slidesPerView={4}
            loop={true}
            autoplay={true}
            pagination={{ clickable: true }}
        >
            {good.mainPartnersSliderSlides.map(m=>
                <SwiperSlide key={m.id}>
                    <img src={m.img} alt={m.name}/>
                </SwiperSlide>
            )}
        </Swiper>
    );
};

export default MainPartnersSlider;