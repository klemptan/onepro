import React, { useContext, useEffect } from 'react';
import SideBar from "../components/CategoryPage/SideBar";
import MyBreadcrumbs from "../components/CategoryPage/MyBreadcrumbs";
import { fetchCategories, fetchGoods, fetchBrands } from "../http/shopAPI";
import { Context } from "../index";
import GoodsList from "../components/CategoryPage/GoodsList";
import { useParams } from 'react-router-dom';

const Catalog = () => {
    const { good } = useContext(Context)
    const params = useParams()

    useEffect(() => {
        fetchCategories(params.id).then((data) => {
            good.setCategories(data)

            if (params.id !== 0) {
                const caregoryName = good.getCategoryNameById(params.id)
                good.setBreadcrumbsLinks([
                    { title: 'Главная', link: '/', active: false },
                    { title: 'Каталог', link: '/catalog', active: false },
                    { title: caregoryName, link: '/catalog/category/' + params.id, active:true }
                ])
            }
        })

        fetchGoods(params.id).then(data => good.setGoods(data))

        fetchBrands().then(data => good.setBrands(data))

        document.getElementsByTagName('footer')[0].classList.add('catalog-footer')

        var isOnDiv = false;
        const sidebar_div = document.getElementById("mCSB_1_container")
        sidebar_div.addEventListener("mouseenter", function () {
            isOnDiv = true;
            console.log('in')
        });
        sidebar_div.addEventListener("mouseleave", function () { isOnDiv = false; console.log('out') });


        window.addEventListener('scroll', (e) => {
            if (isOnDiv) {
                sidebar_div.style.top = `-${sidebar_div.pageYOffset}px`
            }
        })

    }, [])

    return (
        <main className="catalog-main">
            <SideBar />
            <div className="main">
                <div className="update-main">
                    <MyBreadcrumbs />
                    <GoodsList />
                </div>
            </div>
        </main>
    );
}

export default Catalog;