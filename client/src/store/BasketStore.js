import { makeAutoObservable, toJS } from "mobx"

export default class BasketStore {
    constructor() {
        let basketInLS = localStorage.getItem('basketGoods')
        if (basketInLS) {
            this._goods = JSON.parse(basketInLS)
        }
        else {
            this._goods = []
        }
        this._totalSum = 0

        let favorites = localStorage.getItem('favorites')
        if(favorites) {
            this._favorites = JSON.parse(favorites)
        }
        else {
            this._favorites = []
        }

        makeAutoObservable(this)
    }

    indexOf(goodId) {
        for(var i=0;i<this._goods.length;i++){
            if(this._goods[i].good.id==goodId) {
                return i;
            }
        }

        return -1;
    }

    setGood(good) {
        let index = this.indexOf(good.id)
        if (index != -1) {
            this._goods[index].amount++
        }
        else {
            this._goods.push({
                good: good,
                amount: 1
            })
        }
        localStorage.setItem('basketGoods', JSON.stringify(this._goods))
    }

    unsetGood(goodId, unsetFull) {
        let index = this.indexOf(goodId)
        if (unsetFull) {
            this._goods.splice(index, 1)
        }
        else {
            this._goods[index].amount--
            if(this._goods[index].amount===0) {
                this._goods.splice(index, 1)
            }
        }
        localStorage.setItem('basketGoods', JSON.stringify(this._goods))
    }

    empty() {
        this._goods = []
        localStorage.setItem('basketGoods', JSON.stringify(this._goods))
    }

    isFavorite(goodId){
        for(var i=0;i<this._favorites.length;i++){
            if(this._favorites[i].id==goodId) {
                return true;
            }
        }
        return false;
    }

    setFavoriteGood(good) {
        this._favorites.push(good)
        localStorage.setItem('favorites', JSON.stringify(this._favorites))
    }
    unsetFavoriteGood(goodId){
        let index=-1;
        for(var i=0;i<this._favorites.length;i++){
            if(this._favorites[i].id==goodId) {
                index = i;
                break;
            }
        }
        this._favorites.splice(index, 1)
        localStorage.setItem('favorites', JSON.stringify(this._favorites))
    }

    get favorites(){
        return this._favorites
    }

    get totalCount() {
        let counter=0
        for(var item of this._goods){
            counter+=item.amount
        }
        return counter;
    }

    get goods() {
        return this._goods
    }

    get totalSum() {
        let total = 0
        this._goods.map((m) => {
            total += m.good.price * m.amount
        })
        return total
    }

    get isEmpty(){
        return this.totalCount==0
    }
}