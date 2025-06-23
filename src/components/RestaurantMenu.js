import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
//import { MENU_API } from "../utils/constants"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
const RestaurantMenu =()=>{
    //const [resInfo, setResInfo] = useState(null)
    const { resId } =useParams()

    const [showIndex, setShowIndex] = useState(0)
    
    

    // const params=useParams()
    // console.log(params)

    const resInfo= useRestaurantMenu(resId)

    // After adding custom hooks, removing the below code and pushing it into useReataurantMenu hooks 
    // and also removing state variable resInfo. I m not removing the code from here so that it reminds me how the code was written before.
    // useEffect(()=>{
    //     fetchMenu()
    // },[])

    // const fetchMenu = async () => {
    //     const data= await fetch(MENU_API+resId)
    //     const json= await data.json()
    //     console.log(json.data)
    //     setResInfo(json.data)
    // }
    if(resInfo===null){
        return <Shimmer />
    } 
    const {name, cuisines, costForTwoMessage}= resInfo.cards[2].card.card.info
    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    console.log(resInfo)
    console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
    const categories=resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((item)=>
        item.card?.["card"]?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log(categories)
    return(
        <div className="text-center ">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <h3 className="font-bold  text-lg">{(cuisines).join(", ")}</h3>
            <h3 className="font-bold  text-lg">{costForTwoMessage}</h3>
            {categories.map((category, index)=> <RestaurantCategory 
                        key={category.card.card.title}  
                        propsData={category.card.card}
                        showItems={showIndex==index ? true : false}
                        setShowIndex={()=>setShowIndex(index)}
                    />)}
            
            
            {/* <ul>
                    {itemCards.map((item)=> (
                    <li key={item.card.info.id}>{item.card.info.name} -Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}</li> 
                ))}
            </ul> */}
        </div>
    )
}
export default RestaurantMenu