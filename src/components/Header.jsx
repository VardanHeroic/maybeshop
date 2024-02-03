import { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/Header.css'
export default class Header extends Component {

	render() {
		return (
			<header>
				<nav>
					<ul className='menu' >
						<li>
							<Link className='menu-logo' to="/" >Maybeshop</Link>
						</li>
						<li>
							<Link className={Object.values(this.props.cartItems).filter(cartItem =>cartItem > 0).length === 0 ? 'unclickable menu-cart': 'menu-cart' }  to="/Cart">{ Object.values(this.props.cartItems).filter(cartItem =>cartItem > 0).length === 0 ? '': <span className='cartCount red' >{Object.values(this.props.cartItems).reduce((sum,value) => sum+value,0)}</span> }</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
