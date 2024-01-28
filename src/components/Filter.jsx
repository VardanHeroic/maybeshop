import DualRangeSlider from './DualRangeSlider'
import CategoryCheckBox from './CategoryCheckBox'

export default function Filter({ minPrice, maxPrice, filteredMinPrice, filteredMaxPrice, filteredCategories, setFilteredMinPrice, setFilteredMaxPrice, setFilteredCategories }) {

    return (
        <div className='filter'>
            <h2>Filters</h2>
            <div className="filter-price">
                <h3>Price</h3>
                <DualRangeSlider min={minPrice} max={maxPrice} minVal={filteredMinPrice} maxVal={filteredMaxPrice} setMinVal={setFilteredMinPrice} setMaxVal={setFilteredMaxPrice}  ></DualRangeSlider>
            </div>
            <hr/>
            <CategoryCheckBox filteredCategories={filteredCategories} setFilteredCategories={setFilteredCategories}></CategoryCheckBox>
        </div>
    )
}
