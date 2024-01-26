import { Component } from 'react'


export default class Cart_Item extends Component {
	render() {
		return(
			<div className="cart-item">
				<div className="cart-item-info">
					<img src={this.props.thumbnail} alt=""/>
					<span>{this.props.title}</span>
					<input type="number" name="" id="" min={1} defaultValue={1} onChange={e => this.props.changePrice(this.props.id,e.target.value) } />
				</div>
				<div className="cart-item-price">
					<span>{(this.props.price * this.props.cartItems[this.props.id]).toFixed(2)}</span>
					<button className="close"  onClick={(e) => {this.props.removeElement(this.props.id)}} >X</button>
				</div>
			</div>
		)
	}
}
