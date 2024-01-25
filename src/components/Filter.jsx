import DualRangeSlider from './DualRangeSlider'
import CategoryCheckBox from './CategoryCheckBox'

export default function Filter({ minPrice, maxPrice,filteredMinPrice,filteredMaxPrice,filteredCategories,setFilteredMinPrice,setFilteredMaxPrice,setFilteredCategories }) {

    return (
        <div className='filter'>
            <DualRangeSlider min={minPrice} max={maxPrice} minVal={filteredMinPrice} maxVal={filteredMaxPrice} setMinVal={setFilteredMinPrice} setMaxVal={setFilteredMaxPrice}  ></DualRangeSlider>
            <CategoryCheckBox filteredCategories={filteredCategories} setFilteredCategories={setFilteredCategories}></CategoryCheckBox>
        </div>
    )
}
