import { CDN_URL } from "../utils/constants"
import {useDispatch} from "react-redux"
import {addItem} from "../utils/cartSlice"
const ItemList = ({data})=>{
    console.log(data)

    const dispatch=useDispatch()
    const handleAddItem =(item) =>{
        //dispatch an action
        dispatch(addItem(item))
    }
    return <div>
          {data.map((item)=>(
            <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                
                <div className="w-9/12">
                <div className="py-2">
                    <span className="font-bold">{item.card.info.name}</span>
                    <span> - ₹{item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <div className="absolute">
                        <button className="mx-16 bg-black text-white rounded-lg"
                        onClick={()=>handleAddItem(item)}>Add +</button>
                    </div>
                    <img src={CDN_URL+item.card.info.imageId} className="w-14 p-1"/>
                    
                </div>
            </div>    
          ))}
    </div>
        
}

export default ItemList