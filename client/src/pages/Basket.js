import GoodsList from "../components/BasketPage/GoodsList"
import Title from "../components/BasketPage/Title"
import Total from "../components/BasketPage/Total"
import MakeOrder from "../components/BasketPage/MakeOrder"

const Catalog = () => {
    return (
        <div id="basket-root">
            <Title />
            <GoodsList />
            <div className="row_order">
                <Total />
                <MakeOrder />
            </div>
        </div>
    )
}

export default Catalog