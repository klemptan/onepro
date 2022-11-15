import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../index';

const BrandsList = observer(() => {
    const { good } = useContext(Context)

    return (
        <>
            <div className="brands-title">
                <h1>Поиск по производителю</h1>
            </div>
            <div className='brands-items'>
                {good.brands.map(m =>
                    <div className="brands-item" key={m.id}>

                        <a href={"/brands/brand/" + m.id}><img src={process.env.REACT_APP_API_URL + "/" + m.logo} alt={m.name} /></a>

                    </div>
                )}
            </div>
        </>

    );
})

export default BrandsList;
