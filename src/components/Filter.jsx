import React from 'react'
import DualRangeSlider from './DualRangeSlider'

export default function Filter(props) {
    let { data } = props
    let minPrice = data[0].price
    let maxPrice = data[0].price

    data.forEach(product => {
        if (product.price < minPrice) {
            minPrice = product.price
        }
        if (product.price > maxPrice) {
            maxPrice = product.price
        }
    })
    console.log(minPrice,maxPrice);
    return (
        <div className='filter'>
            <DualRangeSlider min={minPrice} max={maxPrice}></DualRangeSlider>
        </div>
    )
}
