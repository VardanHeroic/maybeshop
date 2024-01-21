import { Component } from 'react'
import Cart_Element from './Basket-Element';

export default class Cart extends Component {
	render() {
		return(
			<div className="cart">
			{
                Object.entries(this.props.cartItems).map((entry) => {
                    let [id,cartItem] = entry
                    if(cartItem > 0){
                        return  <Cart_Element key={id} changePrice={this.props.changePrice} removeElement={this.props.removeElement} {...this.props.findById(this.props.data,Number(id))} cartItems={this.props.cartItems}  />
                    }
                })
            }

			{	this.props.cartItems.length === 0 ? 'Cart is empty' : '' }

				<div className="total">{ Object.values(this.props.cartItems).filter(cartItem =>cartItem > 0).length === 0 ? 'yeah' : this.props.total}</div>
			</div>
		)
	}
}
