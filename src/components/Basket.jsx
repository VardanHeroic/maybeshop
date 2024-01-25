import { Component } from 'react'
import Cart_Element from './Basket-Element';

export default function Cart({ cartItems, changePrice, removeElement, total, findById }) {
    return (
        <div className="cart">
            {
                Object.entries(cartItems).map((entry) => {
                    let [id, cartItem] = entry
                    if (cartItem > 0) {
                        return <Cart_Element key={id} changePrice={changePrice} removeElement={removeElement} {...findById(Number(id))} cartItems={cartItems} />
                    }
                })
            }

            <div className="total">{total}</div>
            <button>PURCHASE</button>
        </div>
    )
}
