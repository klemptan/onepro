import React, { useContext, useEffect } from 'react';
import SideBar from "../components/CategoryPage/SideBar";
import MyBreadcrumbs from "../components/CategoryPage/MyBreadcrumbs";
import { fetchCategories } from "../http/shopAPI";
import { Context } from "../index";
import GoodsList from "../components/CategoryPage/GoodsList";

const Catalog = () => {
    const { good } = useContext(Context)
    let category = null;
    const breadcrumbsLinks = [
        { title: 'Главная', link: '/', active: false },
        { title: 'Каталог', link: '/catalog', active: true },
    ]
    useEffect(() => {
        fetchCategories().then(data => good.setCategories(data))
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
                    <MyBreadcrumbs links={breadcrumbsLinks} />
                    <GoodsList />
                </div>
            </div>
        </main>
    );
};

export default Catalog;