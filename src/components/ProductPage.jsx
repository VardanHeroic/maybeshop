import { Component } from 'react'

export default class ProductPage extends Component {
	constructor(props) {
		super(props)

		this.state = {}
	}

	render() {
		return (
			<div className="page">
				<h1>{this.props.name}</h1>
				<img src={require('../../public/img/'+this.props.img)} alt='' /> <br/>
				<button type="submit" onClick={ e => this.props.toggleBasket(this.props.id) } >
					{Object.values(this.props.cartItems).includes(this.props.findById(this.props.data,this.props.id)) ? 'Remove from Basket' : 'Add to Basket' }

				</button>
			</div>
		)
	}
}
