import React, { useContext, useEffect } from 'react'
import { Context } from '../index'
import MyBreadcrumbs from '../components/CategoryPage/MyBreadcrumbs'
import BrandsList from '../components/BrandsPage/BrandsList'
import { fetchBrands } from '../http/shopAPI'
import { useParams } from 'react-router-dom'
import BrandPage from '../components/BrandsPage/BrandPage'

const Brands = () => {
    const { good } = useContext(Context)
    const { id } = useParams()
    useEffect(() => {
        fetchBrands().then(data => good.setBrands(data))

        let links = [{ title: 'Главная', link: '/', active: false },
        { title: 'Поиск по производителю', link: '/brands', active: true }]
        if (id) {
            links = [{ title: 'Главная', link: '/', active: false },
            { title: 'Поиск по производителю', link: '/brands', active: false },
            { title: good.getBrandNameById(id), link: '/brands/brand/' + id, active: true }]
        }
        good.setBreadcrumbsLinks(links)
    }, [])

    return (
        <>
            <MyBreadcrumbs />
            {id ?
                <BrandPage id={id} />
                :
                <BrandsList />
            }

        </>

    )
}

export default Brands