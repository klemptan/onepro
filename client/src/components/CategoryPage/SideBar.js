import {observer} from "mobx-react-lite";
import React, { useContext } from 'react';
import { Context } from '../../index';

const SideBar = observer(() => {
    const { good } = useContext(Context)

    return (
        <div className='sidebar-container scr-b mCustomScrollbar _mCS_1'>
            <div className='mCustomScrollBox mCS-dark mCSB_vertical mCSB_inside'>
                <div className='mCSB_container' id="mCSB_1_container">
                    <aside>
                        <div className='sidebar-nav'>
                            <div className='catalog-section-list'>
                                <ul className='border-bottom'>
                                    {good.categories.map(m =>
                                        <li key={m.id}>
                                            <div className="d-flex  border-bottom">
                                                <img src={process.env.REACT_APP_API_URL + "/" + (m.smallImg)} alt="Насосы высокого давления" className="mCS_img_loaded" />

                                                <a href={"/catalog/category/"+m.id}>{m.name}<span className="down-arrow ">
                                                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5019 3.51059L1.13488 0.143711C1.04239 0.0510034 0.918731 3.77454e-06 0.786878 3.7803e-06C0.654951 3.78607e-06 0.531365 0.0510034 0.438731 0.143711L0.143853 0.438735C0.0510729 0.531296 -2.02484e-07 0.655028 -1.96721e-07 0.786882C-1.90957e-07 0.918736 0.051073 1.04232 0.143853 1.13495L4.15258 5.14376C4.24551 5.23676 4.36968 5.28769 4.50168 5.28732C4.63427 5.28769 4.75829 5.23683 4.85129 5.14376L8.85614 1.13869C8.94892 1.04605 9 0.922467 9 0.79054C9 0.658686 8.94892 0.535101 8.85614 0.442393L8.56127 0.147442C8.36934 -0.0444845 8.0569 -0.0444845 7.86505 0.147442L4.5019 3.51059Z" fill="#A5A5A5"></path>
                                                    </svg>
                                                </span>
                                                </a>
                                            </div>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
});

export default SideBar;