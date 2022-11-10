import React, {useContext, useEffect} from 'react';
import {Context} from "../../index";
import MainCategoryItem from "./MainCategoryItem";
import {observer} from "mobx-react-lite";
import {fetchCategories} from "../../http/shopAPI";

const MainCategoryList = observer(() => {

    const {good} = useContext(Context)

    useEffect(()=>{
        fetchCategories().then((data) => {
            good.setCategories(data)
        })
    },[])

    return (
        <div className="catalog-items ">
            {good.categories.map(m =>
                <MainCategoryItem key={m.id} category={m}/>
            )}
        </div>
    );
});

export default MainCategoryList;