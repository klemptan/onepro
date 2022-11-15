import React, { useContext, useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from '../../index';
import { numberWithSpaces } from '../../App';

const GoodItem = observer((props) => {
    const { thisGood } = props;
    const { basket, good } = useContext(Context)

    return (
        <div className="products-item" id={thisGood.id}>
            {!basket.isFavorite(thisGood.id) ?
                <span onClick={() => basket.setFavoriteGood(thisGood)} data-fav-id="1433" className="wishbtn">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M17.9742 6.52013C17.9121 6.3292 17.7471 6.19009 17.5485 6.16122L11.9684 5.35035L9.4729 0.293941C9.38406 0.113941 9.20076 0 9.00001 0C8.79931 0 8.61597 0.113976 8.52713 0.293941L6.03146 5.35038L0.451507 6.16122C0.252875 6.19009 0.0878514 6.32924 0.0258359 6.52013C-0.0362147 6.71103 0.0155352 6.9206 0.159254 7.0607L4.19687 10.9966L3.24386 16.5542C3.20993 16.752 3.29128 16.952 3.45367 17.0699C3.61602 17.1879 3.83125 17.2035 4.00903 17.1101L8.99998 14.4862L13.9908 17.1101C14.068 17.1507 14.1522 17.1707 14.2361 17.1707C14.3455 17.1707 14.4543 17.1367 14.5461 17.07C14.7085 16.952 14.7899 16.7521 14.756 16.5542L13.8027 10.9966L17.8407 7.06073C17.9845 6.9206 18.0362 6.71103 17.9742 6.52013ZM12.868 10.4348C12.7437 10.556 12.6869 10.7306 12.7163 10.9016L13.5358 15.6793L9.24544 13.4236C9.09181 13.3429 8.90826 13.3429 8.75462 13.4236L4.46399 15.6793L5.28327 10.9016C5.31259 10.7305 5.25588 10.556 5.13164 10.4349L1.66063 7.05131L6.45752 6.3542C6.62929 6.32924 6.77772 6.22138 6.85457 6.06574L8.99998 1.71882L11.1453 6.06571C11.2222 6.22134 11.3706 6.32924 11.5424 6.3542L16.3393 7.05127L12.868 10.4348Z"
                            fill="#A5A5A5"></path>
                    </svg>
                </span> :
                <span onClick={() => basket.unsetFavoriteGood(thisGood.id)} data-fav-id="1433" className="wishbtn">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <rect fill="none" id="canvas_background" height="402" width="582" y="-1" x="-1" />
                        <path fill="#186ddf" id="svg_3" d="m9.362,9.158c0,0 -3.16,0.35 -5.268,0.584c-0.19,0.023 -0.358,0.15 -0.421,0.343s0,0.394 0.14,0.521c1.566,1.429 3.919,3.569 3.919,3.569c-0.002,0 -0.646,3.113 -1.074,5.19c-0.036,0.188 0.032,0.387 0.196,0.506c0.163,0.119 0.373,0.121 0.538,0.028c1.844,-1.048 4.606,-2.624 4.606,-2.624s2.763,1.576 4.604,2.625c0.168,0.092 0.378,0.09 0.541,-0.029c0.164,-0.119 0.232,-0.318 0.195,-0.505c-0.428,-2.078 -1.071,-5.191 -1.071,-5.191s2.353,-2.14 3.919,-3.566c0.14,-0.131 0.202,-0.332 0.14,-0.524s-0.23,-0.319 -0.42,-0.341c-2.108,-0.236 -5.269,-0.586 -5.269,-0.586s-1.31,-2.898 -2.183,-4.83c-0.082,-0.173 -0.254,-0.294 -0.456,-0.294s-0.375,0.122 -0.453,0.294c-0.874,1.932 -2.183,4.83 -2.183,4.83z" />
                    </svg>
                </span>}

            <a className="img"
                href={"/Good/" + thisGood.id}>
                <img src={process.env.REACT_APP_API_URL + "/" + thisGood.good_images[0].img} />
            </a>
            <div className="bottom-container">
                <a href="/catalog/nasosy-vysokogo-davleniya/hawk/hd1417r-nasos-vysokogo-davleniya-170-bar-14-l-min/"
                    className="product-name" dangerouslySetInnerHTML={{ __html: thisGood.model }}></a>
                <div className="product-text">Производитель: {good.getBrandNameById(thisGood.brandId)}</div>
                <div className="product-text">Артикул: {thisGood.article}</div>

                <div className="price">
                    <div className="product-price"><span className="price">{numberWithSpaces(thisGood.price)} ₽</span></div>
                </div>
            </div>


            <div className="buy card-bottom">
                <button className={'basket ' + (basket.indexOf(thisGood.id) > -1 ? "in-basket" : "")} onClick={() => {
                    basket.setGood(thisGood)
                }}>{basket.indexOf(thisGood.id) === 1 ?
                    "в корзину" :
                    "в корзине"
                    }</button>
                <button className='oneClick'>купить в один клик</button>
            </div>
        </div>
    );
})
export default GoodItem;