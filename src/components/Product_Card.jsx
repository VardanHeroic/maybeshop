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
				<img src={require('../../public/img/'+this.props.img)} alt=""/> <br/>
				<Link to={'/ProductPage/'+this.props.id} >{this.props.name}</Link><br/>
				<span>{this.props.price+'֏'}</span><br/><br/>
				<button 
					type="submit"
					onClick={ e => this.props.toggleBasket(this.props.id) }
					className={Object.values(this.props.basketElements).includes(this.props.findById(this.props.data,this.props.id)) ? 'red productCard-btn' : 'productCard-btn' }
				>
			{Object.values(this.props.basketElements).includes(this.props.findById(this.props.data,this.props.id)) ? 'Remove from Basket' : 'Add to Basket' }
					
				</button>
			</article>
		)
	}
}
