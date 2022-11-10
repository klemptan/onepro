export default  class BasketStore{
    constructor() {
        this._goods=[
            {
                id:1,
                name:'Товар'
            }
        ]
    }

    setGood(good){
        this._goods.push(good)
    }

    setGoods(goods){
        this._goods=goods
    }

    get goods(){
        return this._goods
    }


}