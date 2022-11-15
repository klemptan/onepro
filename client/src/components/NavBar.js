import React, {useState} from 'react';

const NavBar = () => {

    const [donerActive, setDonerActive] = useState(false)

    return (<nav>

        <button className="menu-container" onClick={() => setDonerActive(!donerActive)}>
        <span className={"btn-doner " + (donerActive ? 'open' : '')}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </span>
            <span>Меню</span>
        </button>
        <ul className="bottom_bottom_sidebar_menu" itemScope="" itemType="https://www.schema.org/SiteNavigationElement">


            <li><a itemProp="url" href="/catalog/"><span itemProp="name">Каталог</span></a></li>


            {/* <li><a itemProp="url" href="/complects/"><span itemProp="name">Самообслуживание</span></a></li> */}


            <li><a itemProp="url" href="/brands/"><span itemProp="name">Поиск по производителю</span></a></li>


            <li><a itemProp="url" href="/delivery/"><span itemProp="name">Доставка и оплата</span></a></li>


            <li><a itemProp="url" href="/service/"><span itemProp="name">Сервис</span></a></li>


            <li><a itemProp="url" href="/contacts/"><span itemProp="name">Контакты</span></a></li>


        </ul>
    </nav>);
};

export default NavBar;