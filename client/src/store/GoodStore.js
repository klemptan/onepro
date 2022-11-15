import { makeAutoObservable, toJS } from "mobx"
import { Good } from "../models/Good"
export default class GoodStore {
    constructor() {
        this._categories = []

        this._selfServices = [{
            id: 1,
            name: 'Ремкомплекты для насосов высокого давления',
            img: 'https://iself.shop/upload/iblock/a93/zb0t1j84pu5vm1kfyjfdxplmxozpr78g.png',
            brands: []
        }, {
            id: 2,
            name: 'Регуляторы давления',
            img: 'https://iself.shop/upload/iblock/68a/om2q72k8vwisufnso1e67woo9muhqjfw.png',
            brands: [{
                id: 1, name: 'Hawx'
            }]
        }, {
            id: 3,
            name: 'Ремкомплекты для насосов высокого давления',
            img: 'https://iself.shop/upload/iblock/be7/9ubin21pybzqfmlzyv04ww3bgrdsom61.png',
            brands: []
        }, {
            id: 4,
            name: 'Аппараты высокого давления',
            img: 'https://iself.shop/upload/iblock/0a7/xma1nrhib6a9q4x6ioxgy6gyw9c0l0t0.png',
            brands: []
        },]

        this._goods = { count: 0, rows: [] }
        this._brands = [
            {
                id: 0,
                name: ''
            }]

        this._mainPageSlider = {
            slides: []
        }

        this._mainPartnersSliderSlides = [
            {
                id: 1,
                name: 'mazzoni',
                img: 'https://iself.shop/upload/resize_cache/iblock/5a9/fu1dtrrtkesv8g708f2a2a0ki59nzxbr/200_200_1/mazzoni.jpg'
            }, {
                id: 2,
                name: 'la_padana',
                img: 'https://iself.shop/upload/resize_cache/iblock/7a7/7sybzf8wz3e536hllhylekj3ezsl2krs/200_200_1/la_padana.jpg'
            }, {
                id: 3,
                name: 'ravel',
                img: 'https://iself.shop/upload/resize_cache/iblock/68f/isfcg6kzl2kkuuzty47h8wumcbqvtm4n/200_200_1/ravel.jpg'
            }
        ]

        this._good = new Good()

        this._checkOpen = () => {
            let timeNow = new Date();
            let h = timeNow.getHours(), m = timeNow.getMinutes();
            return (h === 8 && m >= 45) || (h > 8 && h < 18);
        }

        this._breadcrumbsLinks = [{ title: 'Главная', link: '/', active: false },
        { title: 'Каталог', link: '/catalog', active: true }]
        
        makeAutoObservable(this)
    }

    setBreadcrumbsLinks(link){
        this._breadcrumbsLinks = link
    }
    

    setMainPageSlider(slider) {
        this._mainPageSlider = toJS(slider)
    }

    setCategories(categories) {
        this._categories = categories
    }

    setGoods(goods) {
        this._goods.count=goods.count
        goods.rows.map((m)=>{
            this._goods.rows.push(new Good(m))
        })
    }

    setBrands(brands) {
        this._brands = brands
    }

    setSelfServices(services) {
        this._selfServices = services
    }

    getBrandNameById(id){
        for(var item of this._brands){
            if(item.id == id){
                return item.name;
            }
        }
        return '';
    }

    getCategoryNameById(id){
        for(var item of this._categories){
            if(item.id == id){
                return item.name;
            }
        }
        return '';
    }

    setGood(good){
        this._good = new Good(good)
    }

    get good(){
        return this._good
    }

    get mainPageSlider() {
        return this._mainPageSlider
    }

    get categories() {
        return this._categories
    }

    get goods() {
        return this._goods
    }

    get brands() {
        return this._brands
    }

    get selfServices() {
        return this._selfServices
    }

    get mainPartnersSliderSlides() {
        return this._mainPartnersSliderSlides
    }

    get CheckOpen() {
        return this._checkOpen()
    }

    get breadcrumbsLinks(){
        return this._breadcrumbsLinks
    }
}