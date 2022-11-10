import React from 'react';

const MyBreadcrumbs = (props) => {

    return (
        <div className="breadcrumbs">
            {
                props.links.map((m,index)=>{
                    return  <div key={index} className="breadcrumbs-item" id={"bx_breadcrumb_"+(index)}>
                        {m.active ?
                            <span className="last-item">{m.title}</span>
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
};

export default MyBreadcrumbs;