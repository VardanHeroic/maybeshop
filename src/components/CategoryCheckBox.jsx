
export default function CategoryCheckBox({filteredCategories,setFilteredCategories}) {
  return (
    <div className="category-checkbox">
    {
        Object.entries(filteredCategories).map((category,i) => {
            return [
                <input
                    key={2**(i+1)}
                    type="checkbox"
                    onChange={(e) => {
                        let newFilteredCategories = {...filteredCategories}
                        newFilteredCategories[e.target.name] = e.target.checked;
                        setFilteredCategories(newFilteredCategories
                    )}}
                    defaultChecked={category[1]}
                    name={category[0]} />,
                <label key={3**(i+1)}>{category[0]}</label>,
                <br/>
            ]
        })
    }
    </div>
  )
}
