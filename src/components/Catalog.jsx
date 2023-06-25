import { Component } from 'react'
import ProductCard from './Product_Card'

export default class Catalog extends Component {
	render() {
		return (
			<div className="catalog">
			{
				this.props.data.map(element => {
					return <ProductCard {...element} 
								key={element.id} 
								data={this.props.data}		
								basketElements={this.props.basketElements}
								calaculateTotal={this.props.calaculateTotal}
								toggleBasket={this.props.toggleBasket}
								findById={this.props.findById}
							/> 
				})
			}
			</div>
		)
	}
}
