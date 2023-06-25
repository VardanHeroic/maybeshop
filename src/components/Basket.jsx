import { Component } from 'react'
import Element from './Basket-Element';

export default class Basket extends Component {
	render() {
		return(
			<div className="basket">
			{
				this.props.basketElements.map( element => {
					return	<Element {...element} 
								removeElement={this.props.removeElement}   
								changePrice={this.props.changePrice} 
								key={element.id} >
							</Element>
				})
			}
				<div className="total">{ this.props.basketElements.length === 0 ? '' : this.props.total}</div>
			</div>
		)
	}
}
