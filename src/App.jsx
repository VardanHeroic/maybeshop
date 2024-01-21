import {Route, BrowserRouter as Router ,Routes} from 'react-router-dom';
import './App.css';
import Cart from './components/Basket';
import Catalog from './components/Catalog';
import Header from './components/Header';
import dataFromJSON from './data.json';
import { Component } from 'react';
import ProductPage from './components/ProductPage';

function getDefaultCartItems(){
    let defaultCartItems = {}
    dataFromJSON.elements.forEach(product => {defaultCartItems[product.id] = 0})
    return defaultCartItems
}

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
            data: dataFromJSON.elements ,
			cartItems: getDefaultCartItems(),
			total: 0
		}
		this.removeElement = this.removeElement.bind(this)
		this.changePrice = this.changePrice.bind(this)
		this.calaculateTotal = this.calaculateTotal.bind(this)
		this.findById = this.findById.bind(this)
		this.toggleBasket = this.toggleBasket.bind(this)
        this.setStateSynchronous.bind(this)

	}


    async setStateSynchronous(stateUpdate) {
        return new Promise(resolve => {
            this.setState(stateUpdate, () => resolve());
        });
    }

	findById(arr,id){
		let obj = {}
		arr.forEach(element => {
			if(element.id === id){
				obj = element
			}
		})
		return obj
	}

	async toggleBasket(id){
        let newCartItems = {...this.state.cartItems}
		if(this.state.cartItems[id] > 0){
			this.removeElement(id)
		}
		else {
			newCartItems[id] = 1
            await this.setStateSynchronous({cartItems: newCartItems})
            console.log(this.state.cartItems);
		    this.calaculateTotal()
		}

	}



	async calaculateTotal(){
        let newTotal = this.state.data.reduce((sum, product) => sum + product.price * this.state.cartItems[product.id],0).toFixed(2)
		await this.setStateSynchronous({total: newTotal})
	}

	async removeElement(i){
        let newCartItems = {...this.state.cartItems}
        newCartItems[i] = 0
        await this.setStateSynchronous({cartItems: newCartItems})
        console.log(this.state.cartItems,newCartItems);
		this.calaculateTotal()
	}


	async changePrice(i,num){
		let	newCartItems = {...this.state.cartItems}
        newCartItems[i] = num
		await this.setStateSynchronous({ cartItems: newCartItems})
		this.calaculateTotal()
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Header cartItems={this.state.cartItems} />
					<main>
						<Routes>
							<Route index
								path='/'
								element=<Catalog
									data={this.state.data}
									cartItems={this.state.cartItems}
									calaculateTotal={this.calaculateTotal}
									findById={this.findById}
									toggleBasket={this.toggleBasket}
								/>
							/>
							<Route
								path='/Cart'
								element=<Cart
									data={this.state.data}
									cartItems={this.state.cartItems}
									removeElement={this.removeElement}
									changePrice={this.changePrice}
									total={this.state.total}
                                    findById={this.findById}
								/>
							/>
							{
							this.state.data.map( element => {
								return	<Route
											key={element.id}
											path={'/ProductPage/'+element.id}
											element=<ProductPage
												{...element}
												findById={this.findById}
												toggleBasket={this.toggleBasket}
												data={this.state.data}
												cartItems={this.state.cartItems}
											/>
										/>
							})
							}

						</Routes>
					</main>
				</Router>
			</div>
		);

	}
}

// The progamatic expression of my will. I live for this shit
