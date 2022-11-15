import { observer } from 'mobx-react-lite'
import { useContext } from 'react';
import { numberWithSpaces } from '../../App';
import { Context } from '../../index';
import GoodImageSwiper from './GoodImageSwiper';
const GoodDetails = observer((props) => {
    const { good, basket } = useContext(Context)

    return (
        <>
            <div className='product-page'>
                <div className='product-item-left'>
                    <GoodImageSwiper />
                </div>
                <div className='product-item-right'>
                    <div className='product-item-right-top'>
                        <h1 dangerouslySetInnerHTML={{ __html: good.good.model }}></h1>

                    </div>
                    <div className="specifications">
                        <div className="specifications-item">
                            <div className="specifications-item-text">Производитель:</div>
                            <div className="specifications-item-name">{good.good.brand.name}</div>
                        </div>
                        <div className="specifications-item">
                            <div className="specifications-item-text">Артикул:</div>
                            <div className="specifications-item-name">{good.good.article}</div>
                        </div>
                    </div>
                    <div className='prices'>
                        <div className='prices-item'>
                            <div className='prices-item-text'>Цена</div>
                            <div className='prices-item-name price-value'>{numberWithSpaces(good.good.price)} Р</div>
                        </div>
                        <div className='prices-item'>
                            <div className="star-btn">
                                <span>Добавить в избранное</span>
                                <div data-fav-id="1433" className="wishbtn">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9742 6.52013C17.9121 6.3292 17.7471 6.19009 17.5485 6.16122L11.9684 5.35035L9.4729 0.293941C9.38406 0.113941 9.20076 0 9.00001 0C8.79931 0 8.61597 0.113976 8.52713 0.293941L6.03146 5.35038L0.451507 6.16122C0.252875 6.19009 0.0878514 6.32924 0.0258359 6.52013C-0.0362147 6.71103 0.0155352 6.9206 0.159254 7.0607L4.19687 10.9966L3.24386 16.5542C3.20993 16.752 3.29128 16.952 3.45367 17.0699C3.61602 17.1879 3.83125 17.2035 4.00903 17.1101L8.99998 14.4862L13.9908 17.1101C14.068 17.1507 14.1522 17.1707 14.2361 17.1707C14.3455 17.1707 14.4543 17.1367 14.5461 17.07C14.7085 16.952 14.7899 16.7521 14.756 16.5542L13.8027 10.9966L17.8407 7.06073C17.9845 6.9206 18.0362 6.71103 17.9742 6.52013ZM12.868 10.4348C12.7437 10.556 12.6869 10.7306 12.7163 10.9016L13.5358 15.6793L9.24544 13.4236C9.09181 13.3429 8.90826 13.3429 8.75462 13.4236L4.46399 15.6793L5.28327 10.9016C5.31259 10.7305 5.25588 10.556 5.13164 10.4349L1.66063 7.05131L6.45752 6.3542C6.62929 6.32924 6.77772 6.22138 6.85457 6.06574L8.99998 1.71882L11.1453 6.06571C11.2222 6.22134 11.3706 6.32924 11.5424 6.3542L16.3393 7.05127L12.868 10.4348Z" fill="#A5A5A5"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='product-buttons'>
                        {basket.indexOf(good.good.id) === -1 ?
                            <button className='basket-btn-prod' onClick={() => basket.setGood(good.good)}>добавить в корзину</button>
                            :
                            <div className="prod-in-basket show-block" style={{ display: "flex" }}>
                                <a href="/Basket">товар в корзине <br />перейти</a>
                                <div className="plus-minus-block">
                                    <div id="minus-product" onClick={() => basket.unsetGood(good.good.id, false)}>
                                        <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="17" height="3" rx="1.5" fill="#535353" />
                                        </svg>
                                    </div>
                                    <div className="count-quantity quantity1448">{basket.goods[basket.indexOf(good.good.id)].amount}</div>
                                    <div id="plus-product" onClick={() => basket.setGood(good.good)}>
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5833 7.08335H9.91665V1.41669C9.91665 0.63426 9.28238 0 8.49996 0C7.71753 0 7.08327 0.63426 7.08327 1.41669V7.08335H1.41669C0.63426 7.08335 0 7.71761 0 8.50004C0 9.28247 0.63426 9.91665 1.41669 9.91665H7.08335V15.5833C7.08335 16.3657 7.71761 17 8.50004 17C9.28247 17 9.91665 16.3657 9.91665 15.5833V9.91665H15.5833C16.3657 9.91665 17 9.28238 17 8.49996C17 7.71753 16.3657 7.08335 15.5833 7.08335Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        }
                        <button className='buy-by-click-button'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.31183 8.68809L1.7576 8.10948C1.00999 8.0316 0.372759 7.53304 0.117254 6.8261C-0.250733 5.80793 0.276286 4.68422 1.29439 4.31621L12.8476 0.140074C13.3643 -0.0466912 13.9301 -0.0466912 14.4467 0.140074C15.6685 0.581687 16.3009 1.93015 15.8593 3.15195L11.6834 14.7059C11.4279 15.4129 10.7907 15.9114 10.0431 15.9893C8.96634 16.1015 8.00255 15.3195 7.89039 14.2427L7.31183 8.68809ZM1.7633 5.82094C1.60259 5.91433 1.52658 6.11202 1.592 6.29302C1.6431 6.43441 1.77055 6.53412 1.92007 6.5497L8.107 7.19421C8.47575 7.23263 8.76719 7.52409 8.8056 7.89287L9.45008 14.0802C9.47251 14.2955 9.66527 14.4519 9.88061 14.4295C10.0301 14.4139 10.1576 14.3142 10.2087 14.1728L14.3845 2.61887C14.5317 2.21161 14.3209 1.76212 13.9137 1.61491C13.7415 1.55266 13.5529 1.55266 13.3807 1.61491L1.82743 5.79104L1.7633 5.82094Z" fill="white"></path>
                        </svg> купить в один клик</button>
                        <button className='ask-question'>нашли дешевле?</button>
                    </div>
                    <div className="scroll-navs" style={{ top: 120 }}>
                        <div className="scroll-nav">
                            <a className="default-btn" href="#description">Описание</a>
                        </div>
                        <div className="scroll-nav">
                            <a className="default-btn" href="#characteristics">Характеристики</a>
                        </div>
                        <div className="scroll-nav">
                            <div className="default-btn disabled">Комплект поставки</div>
                        </div>
                        <div className="scroll-nav">
                            <div className="default-btn disabled">Скачать</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-content" id="description">
                <div className="product-item-container" dangerouslySetInnerHTML={{ __html: good.good.description }}>
                    
                </div>
            </div>
            <div>
                <div className="characteristics" id="characteristics">
                    <div className="characteristics-container">
                        <div className="characteristics-title">Характеристики</div>
                        <div className="characteristics-container">
                            {good.good.good_details.map(m =>
                                <div className="characteristics-item" key={m.id}>
                                    <div className="characteristics-left">{m.name}</div>
                                    <div className="characteristics-right">{m.description}</div>
                                </div>

                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default GoodDetails