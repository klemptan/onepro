import React, {useContext} from 'react';
import {Context} from "../../index";
import MainCategoryItem from "./MainCategoryItem";

const MainSelfServiceList = () => {
    const {good} = useContext(Context)
    return (
        <div>
            <div className="ready-solutions">
                <a className="ready-solutions__title" href="online-store/src/components/MainPage/MainSelfServiceList">
                    Оборудование для автомоек самообслуживания
                </a>
            </div>
            <div className="catalog-items ">
                {good.selfServices.map(m=>
                    <MainCategoryItem key={m.id} category={m}/>
                )}
            </div>
        </div>
    );
};

export default MainSelfServiceList;