import Cart_Item from './Basket-Element';
import '../css/Cart.css'

export default function Cart({ cartItems, changePrice, removeElement, total, findById }) {
    return (
        <div className="cart">
            <div className="cart-items">
                {
                    Object.entries(cartItems).map((entry) => {
                        let [id, cartItem] = entry
                        if (cartItem > 0) {
                            return <Cart_Item key={id} changePrice={changePrice} removeElement={removeElement} {...findById(Number(id))} cartItems={cartItems} />
                        }
                    })
                }
            </div>

            <div className="cart-total">
                <span className="cart-total-label">Total price</span><br/>
                <span className="cart-total-price">{total + '$'}</span><br/><br/>
                <button className='purchase-btn'>Purchase now</button>
            </div>
        </div>
    )
}
