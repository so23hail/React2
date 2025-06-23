import ItemList from "./ItemList"

const RestaurantCategory =({propsData, showItems, setShowIndex})=>{
    
    function handleClick(){
        setShowIndex()
        
    }
    
    
    return <div>
        {/* {header} */}
        <div className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{propsData.title} ({propsData.itemCards.length})</span>
                <span>🔽</span>
            </div>
            {showItems && <ItemList key={propsData.title} data={propsData.itemCards} />}
        </div>
        
        
        {/* {List} */}
    </div>
}

export default RestaurantCategory