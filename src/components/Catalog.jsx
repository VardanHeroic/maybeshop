import { Component } from 'react'
import ProductCard from './Product_Card'
import Filter from './Filter'

export default class Catalog extends Component {
    render() {
        return (
            <div className="catalog">
            <Filter data={this.props.data} ></Filter>
                <div className="products">
                    {
                        this.props.data.map(element => {
                            return <ProductCard {...element} {...this.props} key={element.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}
