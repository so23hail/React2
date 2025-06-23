import {useSelector, useDispatch} from "react-redux"
import {clearCart} from "../utils/cartSlice"
import ItemList from "./ItemList"

const Cart = () =>{
    const cartItems= useSelector((store)=>store.cart.items)
    const dispatch= useDispatch()
    const handleClearCart =() =>{
            dispatch(clearCart())
    }

    return(
        <div className="text-center m-4 p-4 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="p-2 m-2 bg-black text-white font-bold rounded-lg" onClick={handleClearCart}> Clear Cart
             </button>   
            <div>
                <ItemList data={cartItems} />
            </div> 
        </div>    
        
    )
}

export default Cart
