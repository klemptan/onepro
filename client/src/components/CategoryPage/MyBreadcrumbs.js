import React from 'react';

const MyBreadcrumbs = (props) => {
    console.log(props)
    return (
        <div className="breadcrumbs">
            {
                props.links.map((m, index) => {
                    return <div key={index} className="breadcrumbs-item" id={"bx_breadcrumb_" + (index)}>
                        {index>0 ?
                            <span className="delimiter-slash">/</span> : <></>}
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