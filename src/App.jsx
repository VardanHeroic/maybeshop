import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './css/App.css';
import Cart from './components/Basket';
import Catalog from './components/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';
import { Component } from 'react';
import ProductPage from './components/ProductPage';
import Loading from './components/Loading';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: [],
            cartItems: [],
            total: 0
        }
        this.removeElement = this.removeElement.bind(this)
        this.changePrice = this.changePrice.bind(this)
        this.calaculateTotal = this.calaculateTotal.bind(this)
        this.findById = this.findById.bind(this)
        this.toggleBasket = this.toggleBasket.bind(this)
        this.setStateSynchronous.bind(this)

    }


    componentDidMount() {
        let defaultCartItems = {}
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                json.products.forEach(product => { defaultCartItems[product.id] = 0 })
                this.setState({ data: json.products, isLoading: false, cartItems: defaultCartItems })
            });
    }

    async setStateSynchronous(stateUpdate) {
        return new Promise(resolve => {
            this.setState(stateUpdate, () => resolve());
        });
    }

    findById(id) {
        let obj = {}
        this.state.data.forEach(element => {
            if (element.id === id) {
                obj = element
            }
        })
        return obj
    }

    async toggleBasket(id) {
        let newCartItems = { ...this.state.cartItems }
        newCartItems[id]++
        await this.setStateSynchronous({ cartItems: newCartItems })
        console.log(this.state.cartItems);
        this.calaculateTotal()

    }



    async calaculateTotal() {
        let newTotal = this.state.data.reduce((sum, product) => sum + product.price * this.state.cartItems[product.id], 0).toFixed(2)
        await this.setStateSynchronous({ total: newTotal })
    }

    async removeElement(i) {
        let newCartItems = { ...this.state.cartItems }
        newCartItems[i] = 0
        await this.setStateSynchronous({ cartItems: newCartItems })
        console.log(this.state.cartItems, newCartItems);
        this.calaculateTotal()
    }


    async changePrice(i, num) {
        console.log(num);
        if (num === '') {
            return
        }
        let newCartItems = { ...this.state.cartItems }
        newCartItems[i] = Number(num)
        await this.setStateSynchronous({ cartItems: newCartItems })
        this.calaculateTotal()
    }

    render() {
        if (this.state.isLoading) {
            return <Loading/>
        }
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
                                    toggleBasket={this.toggleBasket}
                                />
                            />
                            <Route
                                path='/Cart'
                                element=<Cart
                                    cartItems={this.state.cartItems}
                                    removeElement={this.removeElement}
                                    changePrice={this.changePrice}
                                    total={this.state.total}
                                    findById={this.findById}
                                />
                            />
                            {
                                this.state.data.map(element => {
                                    return <Route
                                        key={element.id}
                                        path={'/ProductPage/' + element.id}
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
                    <Footer/>
                </Router>
            </div>
        );

    }
}

// The progamatic expression of my will. I live for this shit
