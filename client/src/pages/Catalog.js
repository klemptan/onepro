import React, {useContext, useEffect} from 'react';
import SideBar from "../components/CategoryPage/SideBar";
import MyBreadcrumbs from "../components/CategoryPage/MyBreadcrumbs";
import {useParams} from "react-router-dom";
import {fetchCategories, fetchOneCategory} from "../http/shopAPI";
import {Context} from "../index";
import CategoryChilds from "../components/CategoryPage/CategoryChilds";
import GoodsList from "../components/CategoryPage/GoodsList";

const Catalog = () => {
    const params = useParams()
    const {good} = useContext(Context)
    let category  = null;
    const breadcrumbsLinks = [
        {title:'Главная',link:'/'},
        {title:'Каталог',link:'/catalog'},
    ]
    if(params.id) {
        fetchOneCategory().then(data=>category=data)
        breadcrumbsLinks.push( {title:category.name,link:'/',active:true} )
    }
    else {
    }

    return (
        <main className="catalog-main">
            <SideBar/>
            <div className="main">
                <div className="update-main">
                    <MyBreadcrumbs links={breadcrumbsLinks}/>
                    {category?
                        <div>
                            <div className="heading">
                                <h1> {category.name} </h1>
                            </div>
                            <CategoryChilds />
                        </div>
                        :
                        <></>
                    }
                    <GoodsList categoryId={category.id}/>
                </div>
            </div>
        </main>
    );
};

export default Catalog;