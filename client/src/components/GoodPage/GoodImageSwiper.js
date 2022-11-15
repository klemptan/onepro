import React, { useContext, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Context } from '../../index';
import { Navigation, Thumbs } from 'swiper';

const GoodImageSwiper = () => {
    const { good } = useContext(Context)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef();

    return (
        <>
            <Swiper
                slidesPerView={1}
                modules={[Thumbs, Navigation]} thumbs={{ swiper: thumbsSwiper }}
                className='product-slider-2'
                navigation={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {good.good.good_images.map(m =>
                    <SwiperSlide key={m.id}>
                        <div className="img-bg" style={{ backgroundImage: `url('${process.env.REACT_APP_API_URL}/${m.img}')` }}></div>
                    </SwiperSlide>
                )}
                <div className="product-slider-2-buttons">
                <div style={{right:14}} className="swiper-button-prev swiper-button-disabled" onClick={() => swiperRef.current?.slidePrev()} tabIndex={0} role="button" aria-label="Previous slide" aria-disabled="true">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.1667 7.65011L2.54208 7.65011L8.90792 1.46559C9.24125 1.14174 9.25417 0.6037 8.93667 0.263704C8.61958 -0.0758668 8.09208 -0.0894668 7.75833 0.234379L0.488333 7.29779C0.17375 7.61909 0 8.04578 0 8.5001C0 8.954 0.17375 9.38112 0.502917 9.71644L7.75875 16.7654C7.92 16.9222 8.12667 17 8.33333 17C8.55333 17 8.77333 16.9116 8.93708 16.7361C9.25458 16.3961 9.24167 15.8585 8.90833 15.5346L2.51583 9.35009L19.1667 9.35009C19.6267 9.35009 20 8.9693 20 8.5001C20 8.03091 19.6267 7.65011 19.1667 7.65011Z" fill="#717171" />
                    </svg>
                </div>
                <div style={{right:10}}  className="swiper-button-next" tabIndex={0} role="button" onClick={() => swiperRef.current?.slideNext()} aria-label="Next slide" aria-disabled="false">
                    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.833333 9.34989L17.4579 9.34989L11.0921 15.5344C10.7587 15.8583 10.7458 16.3963 11.0633 16.7363C11.3804 17.0759 11.9079 17.0895 12.2417 16.7656L19.5117 9.70221C19.8262 9.38091 20 8.95422 20 8.4999C20 8.046 19.8262 7.61888 19.4971 7.28356L12.2412 0.234597C12.08 0.0777728 11.8733 7.10456e-07 11.6667 7.28523e-07C11.4467 7.47756e-07 11.2267 0.0883987 11.0629 0.263921C10.7454 0.603917 10.7583 1.14154 11.0917 1.46538L17.4842 7.64991L0.833333 7.64991C0.373332 7.64991 -7.84121e-07 8.0307 -7.43103e-07 8.4999C-7.02084e-07 8.96909 0.373332 9.34989 0.833333 9.34989Z" fill="#717171" />
                    </svg>
                </div>
            </div>
            </Swiper>
            
            <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                slidesPerView={4}
                onSwiper={setThumbsSwiper}
                className='product-slider'
            >
                {good.good.good_images.map(m =>
                    <SwiperSlide key={m.id} style={{ width: 103.25 }}>
                        <div className="thumb-bg" style={{ backgroundImage: `url('${process.env.REACT_APP_API_URL}/${m.img}')` }}></div>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
};

export default GoodImageSwiper;