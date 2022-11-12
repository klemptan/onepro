import React from 'react';
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";

const MainCategoryItem = observer((props) => {

    return (
        <a href={"/catalog/category/" + (props.category.id)} className="catalog-item">

            <img src={process.env.REACT_APP_API_URL + "/" + (props.category.img)} alt={props.category.name}/>
            <span>{props.category.name}</span>
            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0.583334 6.64492L12.2205 6.64492L7.76446 10.9741C7.53112 11.2008 7.52208 11.5774 7.74433 11.8154C7.96629 12.0531 8.33554 12.0626 8.56917 11.8359L13.6582 6.89155C13.8784 6.66664 14 6.36795 14 6.04993C14 5.7322 13.8784 5.43322 13.648 5.19849L8.56887 0.264219C8.456 0.154442 8.31133 0.100001 8.16667 0.100001C8.01267 0.100001 7.85867 0.16188 7.74404 0.284746C7.52179 0.522743 7.53083 0.899077 7.76417 1.12577L12.2389 5.45494L0.583333 5.45494C0.261333 5.45494 -5.48885e-07 5.72149 -5.20172e-07 6.04993C-4.91459e-07 6.37836 0.261333 6.64492 0.583334 6.64492Z"
                    fill="#A5A5A5"></path>
            </svg>

        </a>
    );
});

export default MainCategoryItem;