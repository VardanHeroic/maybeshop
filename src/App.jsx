import {Route, BrowserRouter as Router ,Routes} from 'react-router-dom';
import './App.css';
import Basket from './components/Basket';
import Catalog from './components/Catalog';
import Header from './components/Header';
import data from './data.json';
import { Component } from 'react';
import ProductPage from './components/ProductPage';

export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data.elements ,
			basketElements: data.basketElements,
			total:  data.basketElements.reduce( (acum,value) =>  acum + value.basketPrice , 0)
		}
		this.removeElement = this.removeElement.bind(this)
		this.changePrice = this.changePrice.bind(this)
		this.calaculateTotal = this.calaculateTotal.bind(this)
		this.findById = this.findById.bind(this)
		this.toggleBasket = this.toggleBasket.bind(this)

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

	toggleBasket(id){
		let obj =   this.findById(this.state.data, id)
		if(Object.values(this.state.basketElements).includes(obj)){
			this.removeElement(id)
		}
		else {
			this.state.basketElements.push(obj)
		}
		this.calaculateTotal()
	}



	calaculateTotal(){
		this.setState(prevState => ({
			total:  prevState.basketElements.reduce( (acum,value) =>  acum + value.basketPrice , 0)	
		}) )
	}

	removeElement(i){
		this.setState(prevState => ( { 
			basketElements: prevState.basketElements.filter(element => element.id !== i) , 	
		})  )
		this.calaculateTotal()
	}
	

	changePrice(i,num){	
		let	arr = this.state.basketElements.slice()
		let obj = this.findById(this.state.basketElements, i)
		obj.basketPrice = num
		this.setState({ basketElements: arr})
		this.calaculateTotal() 
	}

	render() {
		return (
			<div className="App">
				<Router>
					<Header basketElements={this.state.basketElements} />
					<main>
						<Routes>
							<Route index 
								path='/'  
								element=<Catalog
									data={this.state.data}
									basketElements={this.state.basketElements}
									calaculateTotal={this.calaculateTotal}
									findById={this.findById}
									toggleBasket={this.toggleBasket}
								/> 
							/>					
							<Route 
								path='/Basket' 
								element=<Basket
									data={this.state.data}
									basketElements={this.state.basketElements}
									removeElement={this.removeElement}
									changePrice={this.changePrice}
									total={this.state.total}
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
												basketElements={this.state.basketElements}
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
