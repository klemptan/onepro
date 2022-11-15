import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import { Context } from '../../index';

const MyBreadcrumbs = observer((props) => {
    const {good} = useContext(Context)
    return (
        <div className="breadcrumbs">
            {
                good.breadcrumbsLinks.map((m, index) => {
                    return <div key={index} className="breadcrumbs-item" id={"bx_breadcrumb_" + (index)}>
                        {index>0 ?
                            <span className="delimiter-slash">/</span> : <></>}
                        {m.active ?
                            <span className="last-item">{m.title.replaceAll('<br/>','').replaceAll('<br>','')}</span>
                            :
                            <a href={m.link} title={m.title}>

                                <span>{m.title}</span>
                            </a>
                        }

                    </div>
                })
            }

        </div>
    );
});

export default MyBreadcrumbs;