import { Component } from 'react'
import Carousel from './Carousel'
import '../css/ProductPage.css'

export default class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="product-page">
                <Carousel images={this.props.images}></Carousel>
                <div className="product-page-right">
                    <h1 className='product-page-title'>{this.props.title}</h1>
                    <p className='product-page-description'>{this.props.description}</p>
                    <hr className='product-page-hr' />
                    <div className="product-page-right-footer">
                        <span className='product-page-price' >{this.props.price + '$'}</span>
                        <button className='product-page-button' type="submit" onClick={e => this.props.toggleBasket(this.props.id)} >Add to cart</button>
                    </div>

                </div>
            </div>
        )
    }
}
