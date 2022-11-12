import { makeAutoObservable,toJS } from "mobx"
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

        this._goods = [
            {
                id: 1,
                categoryId:1,
                img: 'https://iself.shop/upload/resize_cache/iblock/e4e/200_200_1/0mpujfz7ddxkt1jce17io0e4lir48win.jpg',
                model: 'NHDP1420CWR',
                title: 'Насос высокого давления',
                shortDesctiption: '200 бар / 14 л./ мин',
                vendor: 'HAWK',
                article: '1.905-683.0',
                price: 24687,
                description: `
                    Насос <span style="color: #0000ff;">Hawk NHDP1420CWR </span>итальянского производства. Латунная головка, керамические поршни, алюминиевый корпус. Никелированный клапанный блок и специальные уплотнения для защиты от коррозии и воздействия химических веществ. <br>
                    <span style="color: #ff0000;">Применение</span>: аппараты АВД, Автомойки самообслуживания.Насос предназначен для перекачивания жидкостей с низкой вязкостью: чистой пресной воды или смеси воды и моющих средств. При соединении помпы с электродвигателем, мощность двигателя должна быть больше мощности насоса. <br>
                    При соединении помпы с двигателем внутреннего сгорания, мощность двигателя должна быть больше на 30% (минимум). <br>
                    <span style="color: #ff0000;">Особенности:</span><br>
                    максимальное давление 200 бар.<br>
                     расход 14 л/мин.<br>
                    мощность 5,3 кВт.<br>
                    частота оборотов вала 1450 об/мин.<br>
                    температура воды 65 градусов.<br>
                    диаметр вала 24 мм.<br>
                    производство Италия.`,
                details:[
                    {name:'Производительность',description:'840 л/ч'},
                    {name:'Производительность',description:'840 л/ч'},
                    {name:'Производительность',description:'840 л/ч'},
                    {name:'Производительность',description:'840 л/ч'},
                ]
            }
        ]

        this._mainPageSlider={
            slides:[]
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

        this._checkOpen = () => {
            let timeNow = new Date();
            let h = timeNow.getHours(), m = timeNow.getMinutes();
            return (h === 8 && m >= 45) || (h > 8 && h < 18);
        }
        makeAutoObservable(this)
    }

    setMainPageSlider(slider) {
        this._mainPageSlider = toJS(slider)
    }
    
    setCategories(categories) {
        this._categories = categories
    }

    setGoods(goods) {
        this._goods = goods
    }

   
    setSelfServices(services) {
        this._selfServices = services
    }


    get mainPageSlider(){
        return this._mainPageSlider
    }

    get categories() {
        return this._categories
    }

    get goods() {
        return this._goods
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
}