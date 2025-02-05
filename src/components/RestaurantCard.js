import { CDN_URL } from "../utils/constants"

const RestaurantCard =(props) =>{
    const styleCard={
        backgroundColor: "#f0f0f0",
    }
    console.log(props.resData.info.name)
    
    
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + props.resData.info.cloudinaryImageId} />
            <h3>{props.resData.info.name}</h3>
            <h4>{props.resData.info.cuisines}</h4>
            <h4>{props.resData.info.avgRating}</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

export default RestaurantCard;