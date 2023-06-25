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
							<Link to="/Basket">Basket</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}
