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

        this._mainSliderSlides = [
            {
                id: 1,
                topText: 'В рамках деятельности компания осуществляет:',
                img: 'https://iself.shop/upload/iblock/b48/wwxkm983bwtp7xj1oq0ptlqcdpi3htsy.jpg',
                title: 'Монтаж оборудования и сервисное обслуживание',
                p: 'Комплектация MAXI имеет огромную популярность среди клиентов благодаря своей надёжности, функциональности и быстрой окупаемости. Лучшие комплектующие от ведущих мировых производителей. Гарантийное и постгарантийное обслуживание. Стоимость комплекта оборудования для вашей мойки рассчитывается индивидуально ...',
                link: '/'
            },
            {
                id: 2,
                topText: '',
                img: 'https://iself.shop/upload/iblock/4c8/lqwuatovl71pvq5ewdcwyazbtd2k77jh/nasosy.jpg',
                title: 'Насосы высокого давления',
                p: 'Наши специалисты помогут выбрать помпу высокого давления под Ваши потребности, мы на практике используем данное оборудование, знаем все его плюсы и минусы. К примеру, в данной сфере наиболее приемлемыми считаются высокотемпературные плунжерные насосы для перекачки горячей воды с высоким содержанием солей натрия, аммония или углекислоты. Понять, какая модель лучше соответствует по  типу циркулирующей жидкости помогут краткие характеристики, представленные в каталоге на сайте, или профессиональные консультанты интернет-магазина Iself.shop.',
                link: '/'
            },
            {
                id: 3,
                topText: 'В рамках деятельности компания осуществляет:',
                img: 'https://iself.shop/upload/iblock/b48/wwxkm983bwtp7xj1oq0ptlqcdpi3htsy.jpg',
                title: 'Монтаж оборудования и сервисное обслуживание',
                p: 'Комплектация MAXI имеет огромную популярность среди клиентов благодаря своей надёжности, функциональности и быстрой окупаемости. Лучшие комплектующие от ведущих мировых производителей. Гарантийное и постгарантийное обслуживание. Стоимость комплекта оборудования для вашей мойки рассчитывается индивидуально ...',
                link: '/'
            }
        ]

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
    }

    setCategories(categories) {
        this._categories = categories
    }

    setGoods(goods) {
        this._goods = goods
    }

    setMainSliderSlides(slides) {
        this._mainSliderSlides = slides
    }

    setSelfServices(services) {
        this._selfServices = services
    }

    setMainPartnersSliderSlides(slides) {
        this._mainPartnersSliderSlides = slides
    }

    get categories() {
        return this._categories
    }

    get goods() {
        return this._goods
    }

    get mainSliderSlides() {
        return this._mainSliderSlides
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