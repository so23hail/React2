//import { useState, useEffect } from "react"
import Shimmer from "./Shimmer"
//import { MENU_API } from "../utils/constants"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu =()=>{
    //const [resInfo, setResInfo] = useState(null)
    const { resId } =useParams()

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

    return(
        <div className="menu">
            <h1>{name}</h1>
            <h3>{(cuisines).join(",")}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map((item)=> (
                     <li key={item.card.info.id}>{item.card.info.name} -Rs. {item.card.info.defaultPrice/100 || item.card.info.price/100}</li> 
                    ))}
            </ul>
        </div>
    )
}
export default RestaurantMenu