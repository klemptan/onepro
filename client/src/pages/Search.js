import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSearch } from '../http/shopAPI';
import { Context } from '../index';

const Search = () => {
    const { good } = useContext(Context)
    const { query } = useParams()

    const [goods, setGoods] = useState()

    useEffect(() => {
        fetchSearch(query).then(data => setGoods(data))
    }, [])

    return (
        <div className="search-page-container">

            <div id="comp_ea802cfecbf3a65cf925307ded4ac66d">
                <div className="search-page">
                    <div className="title-search">Результаты поиска:</div>

                    <div className="search-result">


                        {goods.map(m =>
                            <div className="search-item">
                                <h4>
                                    <a href={"/Goods/" + m.id}>
                                        {m.model.replaceAll('<br>', '').replaceAll('<br/>', '')}
                                    </a>
                                </h4>
                                <div className="search-preview">
                                    {m.description.replaceAll('<br>', '').replaceAll('<br/>', '').substr(0, 300)+'...'}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;