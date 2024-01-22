import { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ProductCard extends Component {
	constructor(props) {
		super(props)
		this.state = {}

	}




	render() {
		return (
			<article>
				<img src={this.props.thumbnail} alt=""/> <br/>
				<Link to={'/ProductPage/'+this.props.id} >{this.props.title}</Link><br/>
				<span>{this.props.price.toFixed(2)+'$'}</span><br/><br/>
				<button
					type="submit"
					onClick={ e => this.props.toggleBasket(this.props.id) }
					className={this.props.cartItems[this.props.id] > 0 ? 'red productCard-btn' : 'productCard-btn' }
				>
			{this.props.cartItems[this.props.id] > 0 ? 'Remove from Basket' : 'Add to Basket' }

				</button>
			</article>
		)
	}
}
