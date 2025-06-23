import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"
import useOnlineStatus from "../utils/useOnlineStatus"
import { resList } from "../utils/mockData"
import { useContext, useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"


const Body =()=>{
    const [listOfRestaurants, setListOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants]=useState([])
    
    const RestaurantCardPromoted= withPromotedLabel(RestaurantCard)

    const {loggedInUser, setUserName} = useContext(UserContext)

    const onlineStatus=useOnlineStatus()
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        // console.log("json="+json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    // console.log(listOfRestaurants)
    
    if (onlineStatus===false){
        return <h1>Your are Offline. Please Connect to Internet.</h1>
    }

    
    return listOfRestaurants.length===0 ? (<Shimmer /> ) : (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4">
                    <input type="text" className="border border-solid border-black" data-testid="searchInput" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button 
                    className=" px-4 py-1 bg-green-300 m-4 rounded-lg"
                    onClick={()=>{
                        
                        const filterList=listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                        setFilteredRestaurants(filterList)
                        
                    }}>Search</button>
                </div>
                
                <div className="search p-4 m-4 flex items-center">
                <button data-testid="ratingBtn" className="bg-gray-100 px-4 py-1 rounded-lg" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4.3
                        
                    )
                    setFilteredRestaurants(filteredList)
                } }>Top Rated Restaurant</button>
                </div>
                <div className="search p-4 m-4 flex items-center">
                <label className="p-2">User name:  </label> 
                <input type="text" className=" px-2 border border-solid  border-black" value={loggedInUser} onChange={(e)=>{
                    setUserName(e.target.value)}} />
                </div>
                              
            </div>
            
            <div className="flex flex-wrap rounded-lg">
                
                {
                    filteredRestaurants.map(restaurant =>(
                        <Link to= {"/city/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard   resData={restaurant} /></Link>
                    ))
                }
                
                
                
                
            </div>

        </div>
    )
}
export default Body