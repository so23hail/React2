import RestaurantCard from "./RestaurantCard"

import { resList } from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"


const Body =()=>{
    const [listOfRestaurants, setListOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants]=useState([])
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        console.log("json="+json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    }
    console.log(listOfRestaurants)

    
    return listOfRestaurants.length===0 ? (<Shimmer /> ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="searc-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>
                    <button onClick={()=>{
                        
                        const filterList=listOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                        setFilteredRestaurants(filterList)
                        
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.info.avgRating>4
                        
                    )
                    setFilteredRestaurants(filteredList)
                } }>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                
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