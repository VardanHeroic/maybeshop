import { useRef,useState } from 'react'
import ProductCard from './Product_Card'
import Filter from './Filter'
import '../css/Catalog.css'

export default function Catalog(props) {
    const maxPrice = useRef(props.data[0].price)
    const minPrice = useRef(props.data[0].price)
    const [filteredCategories, setFilteredCategories] = useState({})
    props.data.forEach(product => {
        if(!Object.keys(filteredCategories).includes(product.category)){
            filteredCategories[product.category] = true
        }
        if (product.price < minPrice.current) {
            minPrice.current = product.price
        }
        if (product.price > maxPrice.current) {
            maxPrice.current = product.price
        }
    })
    const [filteredMaxPrice, setFilteredMaxPrice] = useState(maxPrice.current);
    const [filteredMinPrice, setFilteredMinPrice] = useState(minPrice.current);

    return (
        <div className="catalog">
            <Filter filteredCategories={filteredCategories} filteredMaxPrice={filteredMaxPrice} filteredMinPrice={filteredMinPrice} setFilteredCategories={setFilteredCategories} setFilteredMaxPrice={setFilteredMaxPrice} setFilteredMinPrice={setFilteredMinPrice} maxPrice={maxPrice.current} minPrice={minPrice.current}></Filter>
            <div className="products">
                {
                    props.data.map(element => {
                        if(filteredMinPrice < element.price && element.price < filteredMaxPrice && filteredCategories[element.category] ){
                            return <ProductCard {...element} {...props} key={element.id} />
                        }
                    })
                }
            </div>
        </div>
    )
}
