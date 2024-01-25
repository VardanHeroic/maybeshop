import { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Header extends Component {

	render() {
		return (
			<header>
				<nav>
					<ul className='menu' >
						<li>
							<Link to="/" >Catalog</Link>
						</li>
						<li>
							<Link className={Object.values(this.props.cartItems).filter(cartItem =>cartItem > 0).length === 0 ? 'unclickable': '' }  to="/Cart">Cart{ Object.values(this.props.cartItems).filter(cartItem =>cartItem > 0).length === 0 ? '': <span className='basketCount red' >{Object.values(this.props.cartItems).filter(cartItem =>cartItem > 0).length}</span> }</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
