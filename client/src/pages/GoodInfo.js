import React, { useContext, useEffect, useState } from 'react';
import SideBar from "../components/CategoryPage/SideBar";
import MyBreadcrumbs from "../components/CategoryPage/MyBreadcrumbs";
import { fetchCategories, fetchGoods, fetchBrands, fetchOneGood } from "../http/shopAPI";
import { Context } from "../index";
import { useParams } from 'react-router-dom';
import GoodDetails from '../components/GoodPage/GoodDetails';

const GoodInfo = () => {

    const params = useParams()
    const { good } = useContext(Context)

    useEffect(() => {
        fetchCategories().then((c) => {
            good.setCategories(c)
        })
        fetchOneGood(params.id).then((g) => {
            good.setGood(g)
            good.setBreadcrumbsLinks([
                { title: 'Главная', link: '/', active: false },
                { title: 'Каталог', link: '/catalog', active: false },
                { title: g.category.name, link: '/catalog/category/' + params.id, active: false },
                { title: g.model, link: '/', active: true }
            ])
        })
        fetchBrands().then(data => good.setBrands(data))
    })

    return (
        <main className="catalog-main">
            <SideBar />
            <div className="main">
                <div className="update-main">
                    <MyBreadcrumbs links={good.breadcrumbsLinks} />
                   <GoodDetails/>
                </div>
            </div>
        </main>
    )
};

export default GoodInfo;