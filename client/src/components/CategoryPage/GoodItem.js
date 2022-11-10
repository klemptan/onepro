import React from 'react';

const GoodItem = (props) => {
    const {good} = props;
    return (
        <div className="products-item" id={good.id}>
    <span
        // onClick="addToWish(1433, 'HD1417R <br> Насос высокого давления<br> 170 бар / 14 л./ мин', '/catalog/nasosy-vysokogo-davleniya/hawk/hd1417r-nasos-vysokogo-davleniya-170-bar-14-l-min/', event)"
        data-fav-id="1433" className="wishbtn">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.9742 6.52013C17.9121 6.3292 17.7471 6.19009 17.5485 6.16122L11.9684 5.35035L9.4729 0.293941C9.38406 0.113941 9.20076 0 9.00001 0C8.79931 0 8.61597 0.113976 8.52713 0.293941L6.03146 5.35038L0.451507 6.16122C0.252875 6.19009 0.0878514 6.32924 0.0258359 6.52013C-0.0362147 6.71103 0.0155352 6.9206 0.159254 7.0607L4.19687 10.9966L3.24386 16.5542C3.20993 16.752 3.29128 16.952 3.45367 17.0699C3.61602 17.1879 3.83125 17.2035 4.00903 17.1101L8.99998 14.4862L13.9908 17.1101C14.068 17.1507 14.1522 17.1707 14.2361 17.1707C14.3455 17.1707 14.4543 17.1367 14.5461 17.07C14.7085 16.952 14.7899 16.7521 14.756 16.5542L13.8027 10.9966L17.8407 7.06073C17.9845 6.9206 18.0362 6.71103 17.9742 6.52013ZM12.868 10.4348C12.7437 10.556 12.6869 10.7306 12.7163 10.9016L13.5358 15.6793L9.24544 13.4236C9.09181 13.3429 8.90826 13.3429 8.75462 13.4236L4.46399 15.6793L5.28327 10.9016C5.31259 10.7305 5.25588 10.556 5.13164 10.4349L1.66063 7.05131L6.45752 6.3542C6.62929 6.32924 6.77772 6.22138 6.85457 6.06574L8.99998 1.71882L11.1453 6.06571C11.2222 6.22134 11.3706 6.32924 11.5424 6.3542L16.3393 7.05127L12.868 10.4348Z"
                fill="#A5A5A5"></path>
        </svg>
    </span>

            <a className="img"
               href="/catalog/nasosy-vysokogo-davleniya/hawk/hd1417r-nasos-vysokogo-davleniya-170-bar-14-l-min/">
                <img src={good.img}
                     alt={good.title} />
            </a>
            <div className="bottom-container">
                <a href="/catalog/nasosy-vysokogo-davleniya/hawk/hd1417r-nasos-vysokogo-davleniya-170-bar-14-l-min/"
                   className="product-name">{good.model}<br /> {good.title}<br /> {good.shortDesctiption}</a>
                <div className="product-text">Производитель: {good.vendor}</div>
                <div className="product-text">Артикул: {good.article}</div>

                <div className="price">
                    <div className="product-price"><span className="price">{good.price} ₽</span></div>
                </div>
            </div>


            <div className="buy card-bottom">

                <form action="/catalog/nasosy-vysokogo-davleniya/" method="post" encType="multipart/form-data"
                      className="add2cart"><input type="hidden" name="bxajaxid"
                                                  id="bxajaxid_46a99c0e536caaee7ea171ffa993ebba_Ar8Szp" value="46a99c0e536caaee7ea171ffa993ebba" /><input
                    type="hidden" name="AJAX_CALL" value="Y" />
                    <div className="preloader">
                        <img src="/local/templates/.default/img/preloader.gif" alt="preloader" />
                    </div>

                    <div className="basket-btn">
                        <input type="hidden" name="action" value="ADD2BASKET" />
                        <input type="hidden" name="ajax_basket" value="Y" />
                        <input type="hidden" name="id" value="1433" />

                        <button name="actionADD2BASKET" className="btn btn-default " data-entity="basket-item-quantity-plus"
                                type="submit">в корзину
                        </button>

                    </div>
                </form>
                <a className="buy-btn"
                   // onClick="javascript:void(0)"
                   href="/catalog/nasosy-vysokogo-davleniya/?action=BUY&amp;id=1433" rel="nofollow">купить в один
                    клик</a>
            </div>
        </div>
    );
}
export default GoodItem;