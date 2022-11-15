import { makeAutoObservable, toJS } from "mobx"

export default class BasketStore {
    constructor() {
        let inLS = localStorage.getItem('basketGoods')
        if (inLS) {
            this._goods = JSON.parse(inLS)
        }
        else {
            this._goods = []
        }
        this._totalSum = 0
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